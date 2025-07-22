import ThemeSwitcher from '@/components/ThemeSwitcher';
import { AuthContext } from '@/context/AuthContext';
import { PRIVATE_ROUTER, PUBLIC_ROUTER } from '@/routes/router';
import { findPath } from '@/utils';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import type { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { useContext, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [broken, setBroken] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  const menu = [...PRIVATE_ROUTER, ...PUBLIC_ROUTER].reduce<ItemType<MenuItemType>[]>((acc, item) => {
    if (!item.hiddenMenu && user?.permissions.includes(item.permission || '')) {
      acc.push({
        title: item.label,
        label: item.label,
        icon: item.icon,
        key: item.key,
        children: item.children,
      });
    }
    return acc;
  }, []);

  const handleMenuClick = (key: string) => {
    const pathKeys = findPath(
      [...PRIVATE_ROUTER, ...PUBLIC_ROUTER],
      key,
    );
    if (pathKeys) {
      navigate('/' + pathKeys.join('/'));
    }
  }

  const handleCollapsed = (value: boolean) => {
    setCollapsed(value);
    if (value) {
      setBroken(true);
    } else {
      setBroken(false);
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null} // cái này sẽ ẩn hiện nút thu gọn ở sider
        collapsible
        breakpoint="lg"
        collapsedWidth={broken ? 0 : 80}
        onBreakpoint={(isBroken) => {
          setBroken(isBroken);
        }}
        collapsed={collapsed}
        onCollapse={handleCollapsed}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          items={menu}
          selectedKeys={[window.location.pathname]}
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          onClick={(e) => handleMenuClick(e.key)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <div className="flex justify-between items-center h-full pr-4">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <ThemeSwitcher />
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
