// AuthContext.js
import { getMe, login } from '@/services/auth/api';
import { MessageService } from '@/utils';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext<{
    isAuthenticated: boolean | null;
    user: any;
    isLoading: boolean;
    loginUser: (credentials: any) => Promise<boolean>;
    logoutUser: () => void;
}>({
    isAuthenticated: null,
    user: null,
    isLoading: true,
    loginUser: async () => false,
    logoutUser: () => { }
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [user, setUser] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const hasLoggedIn = Boolean(localStorage.getItem('hasLoggedIn'));
            if (hasLoggedIn) {
                try {
                    const response = await getMe();
                    if (response.code) {
                        setIsAuthenticated(true);
                        setUser(response.data.data);
                    } else {
                        setIsAuthenticated(false);
                        localStorage.removeItem('hasLoggedIn');
                    }
                } catch (error) {
                    setIsAuthenticated(false);
                    localStorage.removeItem('hasLoggedIn');
                }
            } else {
                setIsAuthenticated(false);
            }
            setIsLoading(false);
        };
        checkAuth();
    }, []);

    const loginUser = async (credentials: any) => {
        try {
            const response = await login(credentials);
            if (response.code) {
                setIsAuthenticated(true);
                localStorage.setItem('hasLoggedIn', 'true');
                return true;
            } else {
                MessageService.error('Đăng nhập thất bại');
                return false;
            }
        } catch (error: any) {
            MessageService.error('Lỗi khi đăng nhập: ' + error.message);
            return false;
        }
    };

    const logoutUser = () => {
        localStorage.removeItem('hasLoggedIn');
        setIsAuthenticated(false);
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, isLoading, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};  