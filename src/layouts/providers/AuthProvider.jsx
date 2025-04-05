const publicRoutes = ['/login', '/signup', '/forgot-password'];
const authRoutes = ['/profile', '/edit-logo'];
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usePathname } from 'src/routes/hooks';
const AuthProvider = ({ children }) => {
  const pathname = usePathname();
  const push = useNavigate();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    console.log(pathname);
    if (token && publicRoutes.includes(pathname)) {
      push('/profile');
    }
    if (!token && authRoutes.includes(pathname)) {
      localStorage.setItem('previousRoute', pathname);
      push('/login');
    }
    return () => {};
  }, [pathname, token]);

  return <>{children}</>;
};

export default AuthProvider;
