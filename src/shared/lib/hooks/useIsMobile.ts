import { useState, useEffect } from 'react';

type DeviceType = {
  isSmallMobile: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export function useDeviceType(): DeviceType {
  const [device, setDevice] = useState<DeviceType>({
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
