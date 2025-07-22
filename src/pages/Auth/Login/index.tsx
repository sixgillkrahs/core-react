import { AuthContext } from '@/context/AuthContext';
import { useTitle } from '@/hooks';
import { MessageService } from '@/utils';
import { Button } from 'antd';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectTo = new URLSearchParams(search).get('redirect') || '/home';
  const { loginUser } = useContext(AuthContext);
  useTitle('Đăng nhập');

  const handleLogin = async () => {
    const resp = await loginUser({
      username: 'hello',
      password: '123456',
      rememberPassword: false
    })

    if (resp) {
      MessageService.success('Đăng nhập thành công');
      localStorage.setItem('hasLoggedIn', 'true');
      navigate(redirectTo);
      window.location.reload() // xóa lịch sử api
    } else {
      MessageService.error('Đăng nhập thất bại');
    }
  }


  return <div>
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  </div>;
};

export default LoginPage;
