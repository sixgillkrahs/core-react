import { PRIVATE_ROUTER, PUBLIC_ROUTER } from '@/routes/router';
import { findPath } from '@/utils/search';
import { Layout, Menu, theme } from 'antd';
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
        collapsible
        breakpoint="lg"
        collapsedWidth={broken ? 0 : 80}
        onBreakpoint={(isBroken) => {
          setBroken(isBroken);
        }}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          items={menu}
          theme="dark"
          mode="inline"
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
        <Header style={{ padding: 0, background: colorBgContainer }} />
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
