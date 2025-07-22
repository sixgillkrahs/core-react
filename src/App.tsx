import { ConfigProvider, message } from 'antd';
import viVN from 'antd/locale/vi_VN';
import { Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Loading } from './components';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import PrivateRouter from './routes/PrivateRouter';
import { PRIVATE_ROUTER, PUBLIC_ROUTER } from './routes/router';
import { getTheme, MessageService } from './utils';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  const [messageApi, contextHolder] = message.useMessage();
  const { isDark } = useTheme();

  useEffect(() => {
    MessageService.init(messageApi);
  }, [messageApi]);

  return (
    <ConfigProvider locale={viVN} theme={getTheme(isDark)}>
      {contextHolder}
      <BrowserRouter>
        <Routes>
          {PUBLIC_ROUTER.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <route.layout>
                    <Suspense fallback={<Loading />}>
                      <route.component />
                    </Suspense>
                  </route.layout>
                }
              />
            )
          })}

          {PRIVATE_ROUTER.map((route) => {
            return (
              <Route
                key={route.key}
                path={route.path}
                element={
                  <route.layout>
                    <PrivateRouter requiredPermission={route.permission}>
                      <Suspense fallback={<Loading />}>
                        <route.component />
                      </Suspense>
                    </PrivateRouter>
                  </route.layout>
                }
              />
            );
          })}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
