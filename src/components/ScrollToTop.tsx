import { useEffect, PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }: PropsWithChildren) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>; // Trả lại nội dung con
};

export default ScrollToTop;
