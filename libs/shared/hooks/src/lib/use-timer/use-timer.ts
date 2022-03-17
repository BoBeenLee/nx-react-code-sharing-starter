import { useState, useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseTimer {
  timeLeft: number;
}

export function useTimer({
  seconds,
  onTimeEnd,
}: {
  seconds: number;
  onTimeEnd?: () => void;
}): UseTimer {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) {
      onTimeEnd && onTimeEnd();
      return;
    }
    const timeoutId = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [onTimeEnd, timeLeft]);

  return { timeLeft };
}

export default useTimer;
