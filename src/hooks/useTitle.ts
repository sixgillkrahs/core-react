import { useEffect, useRef } from 'react';

export interface UseTitleOptions {
    restoreOnUnmount?: boolean;
}

const DEFAULT_USE_TITLE_OPTIONS: UseTitleOptions = {
    restoreOnUnmount: false,
};


/**
 * tạo một hook để thay đổi tiêu đề của trang web
 * @param title
 * @param options
 * @returns
 *
 * ```tsx
 * import { useTitle } from "../../hooks";
 *
 * function SomeComponent() {
 *   useTitle("Trang đăng nhập", { restoreOnUnmount: true });
 *  return (
 *    // ...
 *   );
 * }
 * ```
 */
function useTitle(title: string, options: UseTitleOptions = DEFAULT_USE_TITLE_OPTIONS) {
    const prevTitleRef = useRef(document.title);

    if (document.title !== title) document.title = title;

    useEffect(() => {
        if (options && options.restoreOnUnmount) {
            return () => {
                document.title = prevTitleRef.current;
            };
        } else {
            return;
        }
    }, []);
}

export default typeof document !== 'undefined' ? useTitle : (_title: string) => { };