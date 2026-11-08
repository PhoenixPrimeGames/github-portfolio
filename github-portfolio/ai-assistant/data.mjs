/** Curated, illustrative training data. These examples are not incident telemetry. */
export const categories = [
  {
    id: 'network', label: 'Network connectivity', icon: '◎',
    examples: [
      'My laptop connects to Wi-Fi but websites will not load',
      'I have internet problems and cannot access any website',
      'Computer is connected to wireless network but no internet access',
      'The router is online but my desktop has no network connectivity',
      'WiFi drops repeatedly and I keep losing the connection',
      'Ping to default gateway fails on my network',
      'DNS lookup fails even though I am connected to the router',
      'Ethernet link is up but cannot reach the internet',
      'Unable to connect to office VPN and network resources',
      'The browser says the DNS server cannot be reached'
    ],
    summary: 'The report most closely resembles a network or internet connectivity issue.',
    checks: [
      'Determine whether the issue affects one device or multiple devices on the same network.',
      'Check the network adapter status and the device’s IP address, gateway, and DNS configuration.',
      'Test the local gateway first, then a known reachable IP address, then DNS resolution.',
      'Record the result of each check before changing network settings.'
    ],
    followup: 'Does the device show that it is connected, and do other devices on the same network work?'
  },
  {
    id: 'performance', label: 'Performance or resource usage', icon: '▥',
    examples: [
      'My computer is extremely slow after startup',
      'Apps freeze and the system takes forever to respond',
      'Laptop fan is loud and CPU usage stays at 100 percent',
      'Memory usage is high and programs keep lagging',
      'The machine overheats while running games',
      'Windows becomes unresponsive when many tabs are open',
      'Disk usage hits 100 percent and everything is sluggish',
      'My desktop takes several minutes to boot',
      'Game frame rate drops badly even on low settings',
      'System is running slowly with high background process activity'
    ],
    summary: 'The report resembles a system-performance or resource-utilization issue.',
    checks: [
      'Record when the slowdown began and whether it affects one application or the entire system.',
      'Inspect CPU, memory, disk, and temperature readings using standard system monitoring tools.',
      'Check available disk space and look for unusually heavy background tasks.',
      'If overheating is suspected, stop intensive activity and inspect ventilation safely.'
    ],
    followup: 'Is the slowdown constant, or does it happen only while using a particular application?'
  },
  {
    id: 'software', label: 'Application or software error', icon: '⌘',
    examples: [
      'The application crashes when I click the save button',
      'Program shows an error message after installing an update',
      'My software will not open after a Windows update',
      'A game closes unexpectedly when loading a level',
      'The app freezes every time I export a file',
      'An installation failed and the program does not launch',
      'My software reports a missing dependency or library',
      'The browser extension crashes on startup',
      'I get an exception when opening the settings screen',
      'Program updates fail with an unknown error code'
    ],
    summary: 'The report resembles an application-specific malfunction or software error.',
    checks: [
      'Capture the exact error message, application name, and version.',
      'Check whether the error is reproducible and note the steps that trigger it.',
      'Review the application’s logs or event records if available.',
      'Check for a supported update, known issue, or dependency requirement before reinstalling.'
    ],
    followup: 'What is the application, and what is the exact error message or reproducible behavior?'
  },
  {
    id: 'hardware', label: 'Hardware or power issue', icon: '▣',
    examples: [
      'My desktop will not power on when I press the button',
      'Laptop battery does not charge and the charger light is off',
      'The computer shuts down suddenly with no warning',
      'I hear repeated beeps at startup and see a blank display',
      'The monitor says no signal though the tower is running',
      'Power supply seems dead and fans will not spin',
      'The system has random shutdowns after I plug it in',
      'My SSD is no longer detected by the BIOS',
      'Laptop has a black screen before Windows starts',
      'The computer repeatedly restarts during boot',
      'Desktop shows no fan activity when I press the power button',
      'PC will not power on and no fan activity or lights are visible'
    ],
    summary: 'The report resembles a device hardware, startup, or power-related issue.',
    checks: [
      'Document exactly what occurs when power is applied, including LEDs, fan activity, and beep codes.',
      'Verify accessible external power connections, outlets, and display connections.',
      'Check the manufacturer’s documented diagnostic indicators.',
      'Avoid opening powered equipment or performing electrical measurements without appropriate training and procedures.'
    ],
    followup: 'Do you see any lights or hear fans or startup beeps when the device is powered on?'
  },
  {
    id: 'account', label: 'Account or sign-in issue', icon: '◇',
    examples: [
      'I cannot sign in because my password is not accepted',
      'My account says it is locked after too many login attempts',
      'Two factor authentication code is not arriving',
      'The login page keeps returning me to the sign in screen',
      'I forgot the password for my account',
      'My work credentials are rejected by the portal',
      'Authentication fails even with the correct username',
      'The password reset link has expired',
      'Cannot access my profile after changing my password',
      'I cannot verify my identity with the authenticator app'
    ],
    summary: 'The report resembles an authentication or account-access issue.',
    checks: [
      'Confirm that the correct official service or sign-in URL is being used.',
      'Read the exact error and check for any service-wide outage information.',
      'Use the provider’s official account-recovery process if needed.',
      'Do not share passwords, recovery codes, or one-time authentication codes with support personnel or this assistant.'
    ],
    followup: 'What service are you signing in to, and what error appears (without sharing credentials)?'
  },
  {
    id: 'peripheral', label: 'Peripheral or driver issue', icon: '▤',
    examples: [
      'My printer is not responding when I send a document',
      'Windows cannot detect my USB keyboard',
      'Bluetooth headphones will not pair with my computer',
      'The webcam does not appear in the meeting app',
      'My mouse disconnects randomly during use',
      'The microphone is not detected after I installed a driver',
      'The USB device is not recognized on this port',
      'External monitor is not detected over HDMI',
      'The graphics driver installation fails and my display flickers',
      'My scanner appears offline despite being connected'
    ],
    summary: 'The report resembles a peripheral-device, connection, or driver issue.',
    checks: [
      'Confirm the device has power and check its physical or wireless connection.',
      'Determine whether the problem occurs with different ports, cables, or known-good devices.',
      'Inspect the operating system’s device status and reported driver errors.',
      'Obtain driver updates only from the device maker or trusted operating-system update channels.'
    ],
    followup: 'Which device is affected, and is it connected by cable, Bluetooth, or Wi-Fi?'
  },
  {
    id: 'security', label: 'Potential security concern', icon: '△',
    examples: [
      'I clicked a suspicious phishing email link on my laptop',
      'My computer reports malware or a virus infection',
      'Unknown popups demand a ransom payment',
      'I think someone has hacked my account',
      'Suspicious login notifications arrived from another country',
      'An antivirus scan detected a trojan',
      'A fraudulent message asks me to enter my credentials',
      'Browser keeps opening suspicious advertising sites',
      'Files are encrypted and a ransomware note appeared',
      'A malicious attachment was opened on a company computer'
    ],
    summary: 'The report contains indicators that warrant security review.',
    checks: [
      'Avoid entering passwords, opening further suspicious links, or downloading unknown tools.',
      'For managed or work devices, contact the responsible IT/security team promptly and follow its procedures.',
      'Preserve relevant messages or alerts without forwarding malicious attachments.',
      'Use official security and account-recovery guidance rather than following instructions from popups or messages.'
    ],
    followup: 'Is this a work-managed device, and what alert or suspicious behavior did you observe?'
  }
];

export const examples = [
  'My laptop connects to Wi-Fi, but websites will not open.',
  'The program crashes whenever I try to export a file.',
  'My USB keyboard is no longer recognized by Windows.',
  'I clicked a suspicious email link and now see strange popups.'
];
