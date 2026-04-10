import { useEffect, useState } from 'react';

export interface UseDeviceTypeReturn {
  isSmallMobile: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export function useDeviceType(): UseDeviceTypeReturn {
  const [device, setDevice] = useState<UseDeviceTypeReturn>({
    isSmallMobile: false,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDevice({
        isSmallMobile: width <= 480,
        isMobile: width <= 768,
        isTablet: width <= 1024,
        isDesktop: width > 1024,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return device;
}
