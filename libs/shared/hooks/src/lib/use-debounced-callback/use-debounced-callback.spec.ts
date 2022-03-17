import { act, renderHook } from '@testing-library/react-hooks';
import useDebouncedCallback from './use-debounced-callback';

describe('useDebouncedCallback', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useDebouncedCallback(() => {}, 0));

    expect(result.current()).toBe(undefined);
  });
});
