import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { antdTheme } from './theme';

export default function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ConfigProvider>
  );
}
