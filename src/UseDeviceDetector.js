import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    // Device types
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    
    // Platforms
    isIOS: false,
    isAndroid: false,
    isWindowsPhone: false,
    
    // Apple devices
    isIPhone: false,
    isIPad: false,
    isIPod: false,
    
    // Android devices
    isAndroidPhone: false,
    isAndroidTablet: false,
    
    // Other
    isKindle: false,
    isSilk: false,
    isPlaybook: false,
    
    // Browsers (basic)
    isChrome: false,
    isFirefox: false,
    isSafari: false,
    isEdge: false,
    isOpera: false,
    isIE: false
  });

  useEffect(() => {
    const detectDevice = () => {
      if (typeof window === 'undefined') return;
      
      const userAgent = navigator.userAgent.toLowerCase();
      const { platform } = navigator;
      
      // Platform detection
      const isIOS = /iphone|ipad|ipod/.test(userAgent) || 
                   (platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS 13+
      const isAndroid = /android/.test(userAgent);
      const isWindowsPhone = /windows phone/.test(userAgent);
      
      // Apple device specifics
      const isIPhone = /iphone/.test(userAgent);
      const isIPad = /ipad/.test(userAgent) || 
                    (platform === 'MacIntel' && navigator.maxTouchPoints > 1); // iPadOS 13+
      const isIPod = /ipod/.test(userAgent);
      
      // Android device specifics
      const isAndroidTablet = /android/.test(userAgent) && !/mobile/.test(userAgent);
      const isAndroidPhone = /android/.test(userAgent) && /mobile/.test(userAgent);
      
      // Other devices
      const isKindle = /kindle|silk|kftt|kfot|kfjwa|kfjwi|kfsowi|kfthwa|kfthwi|kfapwa|kfapwi/.test(userAgent);
      const isSilk = /silk/.test(userAgent);
      const isPlaybook = /playbook/.test(userAgent);
      
      // Browser detection
      const isChrome = /chrome|chromium|crios/.test(userAgent);
      const isFirefox = /firefox|fxios/.test(userAgent);
      const isSafari = /safari/.test(userAgent) && !isChrome;
      const isEdge = /edg/.test(userAgent);
      const isOpera = /opr/.test(userAgent) || /opera/.test(userAgent);
      const isIE = /msie|trident/.test(userAgent);
      
      // Device type classification
      const isMobileDevice = isIPhone || isAndroidPhone || isWindowsPhone;
      const isTabletDevice = isIPad || isAndroidTablet || isKindle || isPlaybook;
      
      setDeviceInfo({
        // Device types
        isMobile: isMobileDevice,
        isTablet: isTabletDevice,
        isDesktop: !isMobileDevice && !isTabletDevice,
        
        // Platforms
        isIOS,
        isAndroid,
        isWindowsPhone,
        
        // Apple devices
        isIPhone,
        isIPad,
        isIPod,
        
        // Android devices
        isAndroidPhone,
        isAndroidTablet,
        
        // Other
        isKindle,
        isSilk,
        isPlaybook,
        
        // Browsers
        isChrome,
        isFirefox,
        isSafari,
        isEdge,
        isOpera,
        isIE
      });
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  return deviceInfo;
};

export default useDeviceDetect;