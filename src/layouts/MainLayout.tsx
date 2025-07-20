import ThemeSwitcher from '@/components/ThemeSwitcher';
import { PRIVATE_ROUTER, PUBLIC_ROUTER } from '@/routes/router';
import { findPath } from '@/utils';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import type { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';


const { Header, Content, Footer, Sider } = Layout;

const MainLayout = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [broken, setBroken] = useState<boolean>(false);

  const menu: ItemType<MenuItemType>[] =
    [...PRIVATE_ROUTER, ...PUBLIC_ROUTER].map((item) => {
      return {
        title: item.label,
        label: item.label,
        icon: item.icon,
        key: item.key,
        children: item.children,
      };
    }) || [];

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
        onCollapse={(value) => setCollapsed(value)}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          items={menu}
          selectedKeys={[window.location.pathname]}
          mode="inline"
          style={{ height: '100%', borderRight: 0 }}
          onClick={(e) => {
            const pathKeys = findPath(
              [...PRIVATE_ROUTER, ...PUBLIC_ROUTER],
              e.key,
            );
            if (pathKeys) {
              navigate('/' + pathKeys.join('/'));
            }
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} >
          <div className='flex justify-between items-center h-full pr-4'>
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
