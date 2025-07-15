import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layouts/MainLayout';
import PrivateRouter from './routes/PrivateRouter';
import { PRIVATE_ROUTER, PUBLIC_ROUTER } from './routes/router';
import { Loading } from './components';
import { ConfigProvider, theme } from 'antd';
import viVN from 'antd/locale/vi_VN';

function App() {
  return (
    <ConfigProvider
      locale={viVN}
      theme={{
        algorithm: theme.defaultAlgorithm,
        // token: {
        //   // Seed Token
        //   // colorPrimary: "#00b96b",
        //   // borderRadius: 6,
        //   // // Alias Token
        //   // colorBgContainer: "#f6ffed",
        // },
      }}
    >
      <BrowserRouter>
        <Routes>
          {PUBLIC_ROUTER.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <route.layout>
                    <Suspense fallback={<Loading />}>
                      <route.component />
                    </Suspense>
                  </route.layout>
                }
              />
            );
          })}

          {PRIVATE_ROUTER.map((route) => {
            return (
              <Route
                key={route.id}
                path={route.path}
                element={
                  <route.layout>
                    <PrivateRouter>
                      <Suspense fallback={<Loading />}>
                        <route.component />
                      </Suspense>
                    </PrivateRouter>
                  </route.layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
