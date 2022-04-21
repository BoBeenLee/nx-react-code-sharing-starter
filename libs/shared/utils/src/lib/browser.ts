export type MessageEventResponse<T> = {
  pid: string;
  data: T;
};

export async function documentReady(): Promise<void> {
  return new Promise<void>((resolve) => {
    if (document.readyState !== 'loading') {
      resolve();
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        resolve();
      });
    }
  });
}

export const htmlToElement = <T extends Element>(html: string): T => {
  const template = window.document.createElement('template');
  template.innerHTML = html;
  return template.content.firstChild as T;
};

export function awaitWindowPopupMessage<T>(
  id: string,
  windowRef: Window | null
): Promise<T> {
  return new Promise((resolve, reject) => {
    if (!windowRef) {
      reject(new Error('Unable to open window'));
      return;
    }
    let done = false;
    const closedMonitor = setInterval(() => {
      if (!done && windowRef.closed) {
        clearInterval(closedMonitor);
        reject(new Error('user closed popup'));
      }
    }, 500);
    const handler = (
      ev: MessageEvent<MessageEventResponse<T & { error?: string }>>
    ) => {
      const { pid } = ev.data;
      if (id !== pid) return;
      window.removeEventListener('message', handler);
      done = true;
      clearInterval(closedMonitor);
      windowRef.close();
      if (ev.data.data && ev.data.data.error) {
        reject(new Error(ev.data.data.error));
      } else {
        resolve(ev.data.data);
      }
    };
    window.addEventListener('message', handler);
  });
}

export function awaitIFrameMessage<T>(params: {
  id: string;
  iframeElement: HTMLIFrameElement;
  onLoad: () => void;
  onClose: () => Promise<void>;
}): Promise<T> {
  const { id, iframeElement, onLoad, onClose } = params;
  return new Promise((resolve, reject) => {
    if (!iframeElement) reject(new Error('Unable to open iframeElement'));
    const handler = async (
      ev: MessageEvent<MessageEventResponse<T & { error?: string }>>
    ) => {
      const { pid } = ev.data;
      if (id !== pid) return;
      window.removeEventListener('message', handler);
      await onClose();
      if (ev.data.data && ev.data.data.error) {
        reject(new Error(ev.data.data.error));
      } else {
        resolve(ev.data.data);
      }
    };
    window.addEventListener('message', handler);
    onLoad();
  });
}

export function makeWindowOpenDimension(): string {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY;

  const w = 1200;
  const h = 700;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;

  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const systemZoom = 1; // No reliable estimate

  const left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
  const top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
  const dimensions = `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=${
    h / systemZoom
  },width=${w / systemZoom},top=${top},left=${left}`;
  return dimensions;
}
