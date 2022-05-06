import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoToTop = function () {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
    // eslint-disable-next-line
  }, [routePath]);

  return null;
};

export default GoToTop;
