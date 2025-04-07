import { useState, useEffect } from 'react';

const UseDeviceDetect = () => {
  const [deviceType, setDeviceType] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true
  });

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = typeof window !== 'undefined' ? navigator.userAgent.toLowerCase() : '';
      const isIOS = /iphone|ipad|ipod/.test(userAgent);
      const isAndroid = /android/.test(userAgent);
      const isWindowsPhone = /windows phone/.test(userAgent);
      const isMobileDevice = isIOS || isAndroid || isWindowsPhone;
      
      const isTabletDevice = /ipad|tablet|playbook|silk|kindle|(android(?!.*mobile))/.test(userAgent) || 
                            (isMobileDevice && window.innerWidth >= 768);

      setDeviceType({
        isMobile: isMobileDevice && !isTabletDevice,
        isTablet: isTabletDevice,
        isDesktop: !isMobileDevice && !isTabletDevice
      });
    };

    if (typeof window !== 'undefined') {
      detectDevice();
      const handleResize = () => detectDevice();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return deviceType;
};

export default UseDeviceDetect;