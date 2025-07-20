import { theme } from 'antd';

// hiện tại đang để mặc định của antd, nếu cần thay đổi thì có thể tùy chỉnh tại đây
// có thể tham khảo tại https://ant.design/docs/react/customize-theme
const themeMap = {
  light: {
    algorithm: theme.defaultAlgorithm,
    token: {
      // colorPrimary: '#00b96b',
      // colorBgContainer: '#f6ffed',
    },
  },
  dark: {
    algorithm: theme.darkAlgorithm,
    token: {
      // colorPrimary: '#00b96b',
      // colorBgContainer: '#141414',
    },
  },
};

export const getTheme = (isDark: boolean) => {
  return isDark ? themeMap.dark : themeMap.light;
};
