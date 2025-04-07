npm install react-device-detector



EXAMPLE:

import { useDeviceDetect } from 'react-device-detector';

function MyComponent() {
  const { isMobile, isTablet, isDesktop } = useDeviceDetect();
  
  return (
    <div>
      {isDesktop && <DesktopLayout />}
      {isTablet && <TabletLayout />}
      {isMobile && <MobileLayout />}
    </div>
  );
}