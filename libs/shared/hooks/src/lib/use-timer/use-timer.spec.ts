import { act, renderHook } from '@testing-library/react-hooks';
import useTimer from './use-timer';

describe('useTimer', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() =>
      useTimer({
        seconds: 1,
        onTimeEnd: () => {},
      })
    );

    expect(result.current.timeLeft).toBe(1);
  });
});
