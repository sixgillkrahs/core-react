import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import PrivateRouter from "./routes/PrivateRouter";
import { PRIVATE_ROUTER, PUBLIC_ROUTER } from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {PUBLIC_ROUTER.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              element={
                <MainLayout>
                  <Suspense fallback={<div>Loading…</div>}>
                    <route.component />
                  </Suspense>
                </MainLayout>
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
                <MainLayout>
                  <PrivateRouter>
                    <Suspense fallback={<div>Loading…</div>}>
                      <route.component />
                    </Suspense>
                  </PrivateRouter>
                </MainLayout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
