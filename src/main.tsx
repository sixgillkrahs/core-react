import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  // <Provider store={}>
  <App />,
  // </Provider>
  // </StrictMode>,
);
