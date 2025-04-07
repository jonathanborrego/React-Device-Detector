npm install react-device-detector



EXAMPLE:

import useDeviceDetector from 'react-device-detector';

function MyComponent() {
  const device = useDeviceDetector();

  return (
    <div>
      {device.isIPhone && <p>This is an iPhone</p>}
      {device.isAndroidTablet && <p>This is an Android tablet</p>}
      {device.isDesktop && <p>This is a desktop computer</p>}
    </div>
  );
}


All Available Properties
The hook returns an object with these detection properties:

Device Type Categories
Property	Description
------------------------
isMobile	True for all mobile phones
isTablet	True for all tablets
isDesktop	True for desktop/laptop devices
----------------------------------------------
Platform Detection
Property	Description
------------------------
isIOS	True for any iOS device
isAndroid	True for any Android device
isWindowsPhone	True for Windows phones
----------------------------------------------
Apple Device Specifics
Property	Description
------------------------
isIPhone	True for iPhones
isIPad	True for iPads (including iPadOS 13+)
isIPod	True for iPod Touch
----------------------------------------------
Android Device Specifics
Property	Description
------------------------
isAndroidPhone	True for Android phones
isAndroidTablet	True for Android tablets
----------------------------------------------
Other Devices
Property	Description
------------------------
isKindle	True for Kindle devices
isSilk	True for Amazon Silk browser
isPlaybook	True for Blackberry Playbook
----------------------------------------------
Browser Detection
Property	Description
------------------------
isChrome	Chrome/Chromium browsers
isFirefox	Firefox browser
isSafari	Safari (not Chrome on iOS)
isEdge	Microsoft Edge
isOpera	Opera browser
isIE	Internet Explorer


----------------------------------------------

1. Platform-Specific Components

function PlatformSpecificComponent() {
  const { isIPhone, isAndroidPhone, isDesktop } = useDeviceDetector();

  if (isIPhone) return <IOSAppStoreButton />;
  if (isAndroidPhone) return <GooglePlayButton />;
  if (isDesktop) return <WebDownloadSection />;
  
  return <DefaultAppLink />;
}

----------------------------------------------

2. Responsive Layout with Device Detection

function ResponsiveLayout() {
  const device = useDeviceDetector();

  return (
    <div className={`app-container ${device.isMobile ? 'mobile' : ''} ${device.isTablet ? 'tablet' : ''}`}>
      {device.isMobile && <MobileNavigation />}
      {device.isTablet && <TabletNavigation />}
      {device.isDesktop && <DesktopNavigation />}
      
      <main>
        {device.isIPad && <IPadOptimizedContent />}
        {device.isAndroidTablet && <AndroidTabletContent />}
        {device.isDesktop && <DesktopContent />}
      </main>
    </div>
  );
}

----------------------------------------------

3. Browser-Specific Feature Detection

function BrowserFeatures() {
  const { isChrome, isFirefox, isSafari } = useDeviceDetector();

  return (
    <div>
      {isChrome && <ChromeExtensionLink />}
      {isFirefox && <FirefoxAddonLink />}
      {isSafari && <SafariInstructions />}
      
      {!isChrome && !isFirefox && !isSafari && (
        <p>Please use Chrome, Firefox or Safari for best experience</p>
      )}
    </div>
  );
}

----------------------------------------------

4. Device-Specific Analytics

function AnalyticsTracker() {
  const device = useDeviceDetector();
  
  useEffect(() => {
    if (device.isIPhone) {
      trackEvent('iPhone User');
    } else if (device.isAndroidPhone) {
      trackEvent('Android Phone User');
    }
    // etc...
  }, [device]);

  return <AppContent />;
}

----------------------------------------------

Performance Considerations

Efficient Re-rendering: The hook only triggers re-renders when device characteristics actually change
Resize Optimization: Device detection is debounced during window resizing
SSR Compatible: Safely falls back to default values during server-side rendering

----------------------------------------------

TypeScript Support
The package includes full TypeScript type definitions. Example with TypeScript:

import useDeviceDetector from 'react-advanced-device-detector';

interface DeviceProps {
  device: ReturnType<typeof useDeviceDetector>;
}

const DeviceInfo: React.FC<DeviceProps> = ({ device }) => (
  <div>
    {device.isIPad && <IPadContent />}
  </div>
);

function App() {
  const device = useDeviceDetector();
  return <DeviceInfo device={device} />;
}

----------------------------------------------

Troubleshooting
If you encounter any issues:

Check user agent: Log navigator.userAgent to verify detection

useEffect(() => {
  console.log('User Agent:', navigator.userAgent);
}, []);

----------------------------------------------

Verify hook output:

function DebugComponent() {
  const device = useDeviceDetector();
  console.log('Device Info:', device);
  return null;
}