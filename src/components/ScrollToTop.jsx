import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Components that makes links/route changes take you to top of page.
const ScrollToTop = () => {
  const location = useLocation();

  // This listens for + executes on any route-changes (i.e. changes to the location variable)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])

  return null; // <— make the intent clear
};

export default ScrollToTop;