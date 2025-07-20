import { useTheme } from '@/context/ThemeContext';
import { BulbOutlined, MoonOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<BulbOutlined />}
    />
  );
};

export default ThemeSwitcher;
