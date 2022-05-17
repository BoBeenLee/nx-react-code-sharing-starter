import { act, renderHook } from '@testing-library/react';
import useTimer from './use-timer';

describe('useTimer', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() =>
      useTimer({
        seconds: 1,
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onTimeEnd: () => {},
      })
    );

    expect(result.current.timeLeft).toBe(1);
  });
});
