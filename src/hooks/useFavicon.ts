import { useEffect } from 'react';

/**
 * Hook để thay đổi icon của trang web.
 * @returns
 *
 * ```tsx
 * import { useFavicon } from "../../hooks";
 *
 * function SomeComponent() {
 *   useFavicon('https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico');
 *   return null;
 * }
 * ```
 */
const useFavicon = (href: string) => {
  useEffect(() => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = href;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [href]);
};

export default useFavicon;
