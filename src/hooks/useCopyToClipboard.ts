import copy from 'copy-to-clipboard';
import { useState } from 'react';
import type { CopyToClipboardOptions } from '../types';

/**
 * tạo một hook để copy văn bản vào clipboard.
 * @returns
 *
 * ```tsx
 * import { useCopyToClipboard } from "../../hooks";
 *
 * function SomeComponent() {
 *   const [copyToClipboard, { value, success }] = useCopyToClipboard();
 *   return (
 *     <div>
 *       <button onClick={() => copyToClipboard("Hello, world!")}>
 *         Copy to clipboard
 *       </button>
 *       <div>{value}</div>
 *     </div>
 *   );
 * }
 * ```
 */
export default function useCopyToClipboard() {
  const [value, setValue] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const copyToClipboard = (text: string, options?: CopyToClipboardOptions) => {
    const result = copy(text, options);
    if (result) setValue(text);
    setSuccess(result);
  };

  return [copyToClipboard, { value, success }] as const;
}
