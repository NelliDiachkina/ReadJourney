import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

const useMedia = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1439 });

  return useMemo(
    () => ({
      isTablet,
    }),
    [isTablet]
  );
};

export default useMedia;
