import { act, renderHook } from '@testing-library/react';
import useDebouncedCallback from './use-debounced-callback';

describe('useDebouncedCallback', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const { result } = renderHook(() => useDebouncedCallback(() => {}, 0));

    expect(result.current()).toBe(undefined);
  });
});
