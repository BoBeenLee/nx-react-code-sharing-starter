import { uniqueId } from '@nx-react-code-sharing/shared-utils';
import produce from 'immer';
import create from 'zustand';

interface ToastProps {
  id: string;
  message: string;
  delay: number;
}

interface ToastStoreProps {
  data: Record<string, ToastProps>;
  showToastWithDelay: (message: string, delaySeconds: number | null) => void;
  showToast: (message: string) => void;
  dismissToast: (id: string) => void;
}

const DEFAULT_DELAY_SECONDS = 1500;

export const useToastStore = create<ToastStoreProps>((set, get) => ({
  data: {},
  showToastWithDelay: (message: string, delaySeconds: number | null) => {
    const id = uniqueId('toast');
    set(
      produce<ToastStoreProps>((state) => {
        state.data[id] = {
          delay: delaySeconds || DEFAULT_DELAY_SECONDS,
          id,
          message,
        };
      })
    );
  },
  showToast: (message: string) => {
    get().showToastWithDelay(message, DEFAULT_DELAY_SECONDS);
  },
  dismissToast: (id: string) => {
    set(
      produce<ToastStoreProps>((state) => {
        if (state.data[id]) {
          delete state.data[id];
        }
      })
    );
  },
}));
