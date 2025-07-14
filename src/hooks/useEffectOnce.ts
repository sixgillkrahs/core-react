import { useEffect } from 'react';

/**
 * tạo một hook để chạy effect một lần.
 * @param cb
 * @returns
 */
export default function useEffectOnce(cb: () => void) {
  useEffect(cb, []);
}
