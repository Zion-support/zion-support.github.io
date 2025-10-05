import '@testing-library/jest-dom';
import React from 'react';

// Polyfill TextEncoder and TextDecoder for Node.js environment
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// Mock import.meta.env for Jest
Object.defineProperty(global, 'import', {
  value: {
    meta: {
      env: {
        DEV: true,
        PROD: false,
        MODE: 'test',
      },
    },
  },
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as unknown as typeof IntersectionObserver;

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
} as unknown as typeof ResizeObserver;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock performance API
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => []),
  },
});

// Mock react-helmet-async
jest.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => children,
  HelmetProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock lucide-react icons
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock fetch
global.fetch = jest.fn();

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

<<<<<<< HEAD
// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock fetch
global.fetch = jest.fn();
=======
// Mock lucide-react icons
jest.mock('lucide-react', () => {
  const mockIcon = (testId: string) => {
    const { createElement } = require('react');
    return createElement('div', { 'data-testid': testId });
  };
  return {
    Menu: () => mockIcon('menu-icon'),
    X: () => mockIcon('x-icon'),
    ChevronDown: () => mockIcon('chevron-down-icon'),
    ChevronUp: () => mockIcon('chevron-up-icon'),
    ArrowRight: () => mockIcon('arrow-right-icon'),
    Check: () => mockIcon('check-icon'),
    Star: () => mockIcon('star-icon'),
    Users: () => mockIcon('users-icon'),
    Shield: () => mockIcon('shield-icon'),
    Zap: () => mockIcon('zap-icon'),
    Globe: () => mockIcon('globe-icon'),
    Brain: () => mockIcon('brain-icon'),
    Database: () => mockIcon('database-icon'),
    Lock: () => mockIcon('lock-icon'),
    Eye: () => mockIcon('eye-icon'),
    Target: () => mockIcon('target-icon'),
    TrendingUp: () => mockIcon('trending-up-icon'),
    Clock: () => mockIcon('clock-icon'),
    Award: () => mockIcon('award-icon'),
    Rocket: () => mockIcon('rocket-icon'),
    Heart: () => mockIcon('heart-icon'),
    Mail: () => mockIcon('mail-icon'),
    Phone: () => mockIcon('phone-icon'),
    MapPin: () => mockIcon('map-pin-icon'),
    ExternalLink: () => mockIcon('external-link-icon'),
    Github: () => mockIcon('github-icon'),
    Linkedin: () => mockIcon('linkedin-icon'),
    Twitter: () => mockIcon('twitter-icon'),
    Facebook: () => mockIcon('facebook-icon'),
    Instagram: () => mockIcon('instagram-icon'),
    Youtube: () => mockIcon('youtube-icon'),
    Search: () => mockIcon('search-icon'),
    Filter: () => mockIcon('filter-icon'),
    Calendar: () => mockIcon('calendar-icon'),
    User: () => mockIcon('user-icon'),
    Settings: () => mockIcon('settings-icon'),
    Bell: () => mockIcon('bell-icon'),
    Home: () => mockIcon('home-icon'),
    Info: () => mockIcon('info-icon'),
    AlertCircle: () => mockIcon('alert-circle-icon'),
    CheckCircle: () => mockIcon('check-circle-icon'),
    XCircle: () => mockIcon('x-circle-icon'),
    Plus: () => mockIcon('plus-icon'),
    Minus: () => mockIcon('minus-icon'),
    Edit: () => mockIcon('edit-icon'),
    Trash: () => mockIcon('trash-icon'),
    Save: () => mockIcon('save-icon'),
    Download: () => mockIcon('download-icon'),
    Upload: () => mockIcon('upload-icon'),
    Copy: () => mockIcon('copy-icon'),
    Share: () => mockIcon('share-icon'),
    Bookmark: () => mockIcon('bookmark-icon'),
    Tag: () => mockIcon('tag-icon'),
    Folder: () => mockIcon('folder-icon'),
    File: () => mockIcon('file-icon'),
    Image: () => mockIcon('image-icon'),
    Video: () => mockIcon('video-icon'),
    Music: () => mockIcon('music-icon'),
    Play: () => mockIcon('play-icon'),
    Pause: () => mockIcon('pause-icon'),
    SkipForward: () => mockIcon('skip-forward-icon'),
    SkipBack: () => mockIcon('skip-back-icon'),
    VolumeX: () => mockIcon('volume-x-icon'),
    Maximize: () => mockIcon('maximize-icon'),
    Minimize: () => mockIcon('minimize-icon'),
    RefreshCw: () => mockIcon('refresh-cw-icon'),
    RotateCcw: () => mockIcon('rotate-ccw-icon'),
    RotateCw: () => mockIcon('rotate-cw-icon'),
    ZoomIn: () => mockIcon('zoom-in-icon'),
    ZoomOut: () => mockIcon('zoom-out-icon'),
    Move: () => mockIcon('move-icon'),
    Crop: () => mockIcon('crop-icon'),
    Scissors: () => mockIcon('scissors-icon'),
    Palette: () => mockIcon('palette-icon'),
    Type: () => mockIcon('type-icon'),
    Bold: () => mockIcon('bold-icon'),
    Italic: () => mockIcon('italic-icon'),
    Underline: () => mockIcon('underline-icon'),
    Strikethrough: () => mockIcon('strikethrough-icon'),
    AlignLeft: () => mockIcon('align-left-icon'),
    AlignCenter: () => mockIcon('align-center-icon'),
    AlignRight: () => mockIcon('align-right-icon'),
    AlignJustify: () => mockIcon('align-justify-icon'),
    List: () => mockIcon('list-icon'),
    ListOrdered: () => mockIcon('list-ordered-icon'),
    Quote: () => mockIcon('quote-icon'),
    Code: () => mockIcon('code-icon'),
    Terminal: () => mockIcon('terminal-icon'),
    Command: () => mockIcon('command-icon'),
    Keyboard: () => mockIcon('keyboard-icon'),
    MousePointer: () => mockIcon('mouse-pointer-icon'),
    Hand: () => mockIcon('hand-icon'),
    Monitor: () => mockIcon('monitor-icon'),
    Smartphone: () => mockIcon('smartphone-icon'),
    Tablet: () => mockIcon('tablet-icon'),
    Laptop: () => mockIcon('laptop-icon'),
    Server: () => mockIcon('server-icon'),
    HardDrive: () => mockIcon('hard-drive-icon'),
    Wifi: () => mockIcon('wifi-icon'),
    Bluetooth: () => mockIcon('bluetooth-icon'),
    Battery: () => mockIcon('battery-icon'),
    BatteryCharging: () => mockIcon('battery-charging-icon'),
    Plug: () => mockIcon('plug-icon'),
    Lightbulb: () => mockIcon('lightbulb-icon'),
    Sun: () => mockIcon('sun-icon'),
    Moon: () => mockIcon('moon-icon'),
    Cloud: () => mockIcon('cloud-icon'),
    CloudRain: () => mockIcon('cloud-rain-icon'),
    CloudSnow: () => mockIcon('cloud-snow-icon'),
    CloudLightning: () => mockIcon('cloud-lightning-icon'),
    Wind: () => mockIcon('wind-icon'),
    Thermometer: () => mockIcon('thermometer-icon'),
    Droplets: () => mockIcon('droplets-icon'),
    Umbrella: () => mockIcon('umbrella-icon'),
    Snowflake: () => mockIcon('snowflake-icon'),
    Flame: () => mockIcon('flame-icon'),
    TreePine: () => mockIcon('tree-pine-icon'),
    TreeDeciduous: () => mockIcon('tree-deciduous-icon'),
    Flower: () => mockIcon('flower-icon'),
    Leaf: () => mockIcon('leaf-icon'),
    Sprout: () => mockIcon('sprout-icon'),
    Carrot: () => mockIcon('carrot-icon'),
    Apple: () => mockIcon('apple-icon'),
    Cherry: () => mockIcon('cherry-icon'),
    Grape: () => mockIcon('grape-icon'),
    Lemon: () => mockIcon('lemon-icon'),
    Orange: () => mockIcon('orange-icon'),
    Banana: () => mockIcon('banana-icon'),
    Strawberry: () => mockIcon('strawberry-icon'),
    Coffee: () => mockIcon('coffee-icon'),
    Tea: () => mockIcon('tea-icon'),
    Wine: () => mockIcon('wine-icon'),
    Beer: () => mockIcon('beer-icon'),
    Cookie: () => mockIcon('cookie-icon'),
    Cake: () => mockIcon('cake-icon'),
    Pizza: () => mockIcon('pizza-icon'),
    Sandwich: () => mockIcon('sandwich-icon'),
    Utensils: () => mockIcon('utensils-icon'),
    UtensilsCrossed: () => mockIcon('utensils-crossed-icon'),
    ChefHat: () => mockIcon('chef-hat-icon'),
    ShoppingCart: () => mockIcon('shopping-cart-icon'),
    ShoppingBag: () => mockIcon('shopping-bag-icon'),
    CreditCard: () => mockIcon('credit-card-icon'),
    DollarSign: () => mockIcon('dollar-sign-icon'),
    Euro: () => mockIcon('euro-icon'),
    PoundSterling: () => mockIcon('pound-sterling-icon'),
    Yen: () => mockIcon('yen-icon'),
    Bitcoin: () => mockIcon('bitcoin-icon'),
    Wallet: () => mockIcon('wallet-icon'),
    Receipt: () => mockIcon('receipt-icon'),
    Package: () => mockIcon('package-icon'),
    Truck: () => mockIcon('truck-icon'),
    Ship: () => mockIcon('ship-icon'),
    Plane: () => mockIcon('plane-icon'),
    Train: () => mockIcon('train-icon'),
    Bus: () => mockIcon('bus-icon'),
    Car: () => mockIcon('car-icon'),
    Bike: () => mockIcon('bike-icon'),
    Scooter: () => mockIcon('scooter-icon'),
    Fuel: () => mockIcon('fuel-icon'),
    Gauge: () => mockIcon('gauge-icon'),
    Speedometer: () => mockIcon('speedometer-icon'),
    Navigation: () => mockIcon('navigation-icon'),
    Compass: () => mockIcon('compass-icon'),
    Map: () => mockIcon('map-icon'),
    Route: () => mockIcon('route-icon'),
    Flag: () => mockIcon('flag-icon'),
    Building: () => mockIcon('building-icon'),
    Factory: () => mockIcon('factory-icon'),
    Warehouse: () => mockIcon('warehouse-icon'),
    Store: () => mockIcon('store-icon'),
    Hospital: () => mockIcon('hospital-icon'),
    School: () => mockIcon('school-icon'),
    University: () => mockIcon('university-icon'),
    Library: () => mockIcon('library-icon'),
    Museum: () => mockIcon('museum-icon'),
    Theater: () => mockIcon('theater-icon'),
    Cinema: () => mockIcon('cinema-icon'),
    Headphones: () => mockIcon('headphones-icon'),
    Mic: () => mockIcon('mic-icon'),
    MicOff: () => mockIcon('mic-off-icon'),
    Speaker: () => mockIcon('speaker-icon'),
    SpeakerOff: () => mockIcon('speaker-off-icon'),
    Radio: () => mockIcon('radio-icon'),
    Tv: () => mockIcon('tv-icon'),
    Camera: () => mockIcon('camera-icon'),
    CameraOff: () => mockIcon('camera-off-icon'),
    VideoOff: () => mockIcon('video-off-icon'),
    Webcam: () => mockIcon('webcam-icon'),
    WebcamOff: () => mockIcon('webcam-off-icon'),
    Puzzle: () => mockIcon('puzzle-icon'),
    PuzzlePiece: () => mockIcon('puzzle-piece-icon'),
    Chess: () => mockIcon('chess-icon'),
    ChessKing: () => mockIcon('chess-king-icon'),
    ChessQueen: () => mockIcon('chess-queen-icon'),
    ChessRook: () => mockIcon('chess-rook-icon'),
    ChessBishop: () => mockIcon('chess-bishop-icon'),
    ChessKnight: () => mockIcon('chess-knight-icon'),
    ChessPawn: () => mockIcon('chess-pawn-icon'),
    Cards: () => mockIcon('cards-icon'),
    Spade: () => mockIcon('spade-icon'),
    Diamond: () => mockIcon('diamond-icon'),
    Club: () => mockIcon('club-icon'),
    Crown: () => mockIcon('crown-icon'),
    Gem: () => mockIcon('gem-icon'),
    Ring: () => mockIcon('ring-icon'),
    Necklace: () => mockIcon('necklace-icon'),
    Earrings: () => mockIcon('earrings-icon'),
    Bracelet: () => mockIcon('bracelet-icon'),
    Watch: () => mockIcon('watch-icon'),
    Timer: () => mockIcon('timer-icon'),
    TimerOff: () => mockIcon('timer-off-icon'),
    Stopwatch: () => mockIcon('stopwatch-icon'),
    Hourglass: () => mockIcon('hourglass-icon'),
  };
});
>>>>>>> 699eacabe7f8e5392566a9365ce78c1726895e50

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
};

// Mock lucide-react
jest.mock('lucide-react', () => {
  const mockIcon = (name: string) => <span data-testid={`icon-${name}`}>{name}</span>;
  
  return {
    Menu: () => mockIcon('menu-icon'),
    X: () => mockIcon('x-icon'),
    ChevronDown: () => mockIcon('chevron-down-icon'),
    Search: () => mockIcon('search-icon'),
    User: () => mockIcon('user-icon'),
    Settings: () => mockIcon('settings-icon'),
    LogOut: () => mockIcon('log-out-icon'),
    Home: () => mockIcon('home-icon'),
    Info: () => mockIcon('info-icon'),
    Briefcase: () => mockIcon('briefcase-icon'),
    FileText: () => mockIcon('file-text-icon'),
    Mail: () => mockIcon('mail-icon'),
    Phone: () => mockIcon('phone-icon'),
    MapPin: () => mockIcon('map-pin-icon'),
    Clock: () => mockIcon('clock-icon'),
    Star: () => mockIcon('star-icon'),
    Heart: () => mockIcon('heart-icon'),
    Share: () => mockIcon('share-icon'),
    ExternalLink: () => mockIcon('external-link-icon'),
    ArrowRight: () => mockIcon('arrow-right-icon'),
    ArrowLeft: () => mockIcon('arrow-left-icon'),
    ChevronRight: () => mockIcon('chevron-right-icon'),
    ChevronLeft: () => mockIcon('chevron-left-icon'),
    Plus: () => mockIcon('plus-icon'),
    Minus: () => mockIcon('minus-icon'),
    Check: () => mockIcon('check-icon'),
    AlertCircle: () => mockIcon('alert-circle-icon'),
    AlertTriangle: () => mockIcon('alert-triangle-icon'),
    CheckCircle: () => mockIcon('check-circle-icon'),
    XCircle: () => mockIcon('x-circle-icon'),
    Loader: () => mockIcon('loader-icon'),
    RefreshCw: () => mockIcon('refresh-cw-icon'),
    Download: () => mockIcon('download-icon'),
    Upload: () => mockIcon('upload-icon'),
    Edit: () => mockIcon('edit-icon'),
    Trash: () => mockIcon('trash-icon'),
    Copy: () => mockIcon('copy-icon'),
    Save: () => mockIcon('save-icon'),
    Eye: () => mockIcon('eye-icon'),
    EyeOff: () => mockIcon('eye-off-icon'),
    Lock: () => mockIcon('lock-icon'),
    Unlock: () => mockIcon('unlock-icon'),
    Shield: () => mockIcon('shield-icon'),
    Key: () => mockIcon('key-icon'),
    Database: () => mockIcon('database-icon'),
    Server: () => mockIcon('server-icon'),
    Cloud: () => mockIcon('cloud-icon'),
    Wifi: () => mockIcon('wifi-icon'),
    WifiOff: () => mockIcon('wifi-off-icon'),
    Signal: () => mockIcon('signal-icon'),
    SignalZero: () => mockIcon('signal-zero-icon'),
    SignalOne: () => mockIcon('signal-one-icon'),
    SignalTwo: () => mockIcon('signal-two-icon'),
    SignalThree: () => mockIcon('signal-three-icon'),
    Battery: () => mockIcon('battery-icon'),
    BatteryCharging: () => mockIcon('battery-charging-icon'),
    BatteryLow: () => mockIcon('battery-low-icon'),
    BatteryFull: () => mockIcon('battery-full-icon'),
    Volume2: () => mockIcon('volume-2-icon'),
    VolumeX: () => mockIcon('volume-x-icon'),
    Volume1: () => mockIcon('volume-1-icon'),
    Play: () => mockIcon('play-icon'),
    Pause: () => mockIcon('pause-icon'),
    Stop: () => mockIcon('stop-icon'),
    SkipBack: () => mockIcon('skip-back-icon'),
    SkipForward: () => mockIcon('skip-forward-icon'),
    Repeat: () => mockIcon('repeat-icon'),
    Shuffle: () => mockIcon('shuffle-icon'),
    Maximize: () => mockIcon('maximize-icon'),
    Minimize: () => mockIcon('minimize-icon'),
    Maximize2: () => mockIcon('maximize-2-icon'),
    Minimize2: () => mockIcon('minimize-2-icon'),
    RotateCcw: () => mockIcon('rotate-ccw-icon'),
    RotateCw: () => mockIcon('rotate-cw-icon'),
    Move: () => mockIcon('move-icon'),
    Move3d: () => mockIcon('move-3d-icon'),
    MoveHorizontal: () => mockIcon('move-horizontal-icon'),
    MoveVertical: () => mockIcon('move-vertical-icon'),
    MoveDiagonal: () => mockIcon('move-diagonal-icon'),
    MoveDiagonal2: () => mockIcon('move-diagonal-2-icon'),
    MoveDiagonal3: () => mockIcon('move-diagonal-3-icon'),
    MoveDiagonal4: () => mockIcon('move-diagonal-4-icon'),
    MoveDiagonal5: () => mockIcon('move-diagonal-5-icon'),
    MoveDiagonal6: () => mockIcon('move-diagonal-6-icon'),
    MoveDiagonal7: () => mockIcon('move-diagonal-7-icon'),
    MoveDiagonal8: () => mockIcon('move-diagonal-8-icon'),
    MoveDiagonal9: () => mockIcon('move-diagonal-9-icon'),
    MoveDiagonal10: () => mockIcon('move-diagonal-10-icon'),
    MoveDiagonal11: () => mockIcon('move-diagonal-11-icon'),
    MoveDiagonal12: () => mockIcon('move-diagonal-12-icon'),
    MoveDiagonal13: () => mockIcon('move-diagonal-13-icon'),
    MoveDiagonal14: () => mockIcon('move-diagonal-14-icon'),
    MoveDiagonal15: () => mockIcon('move-diagonal-15-icon'),
    MoveDiagonal16: () => mockIcon('move-diagonal-16-icon'),
    MoveDiagonal17: () => mockIcon('move-diagonal-17-icon'),
    MoveDiagonal18: () => mockIcon('move-diagonal-18-icon'),
    MoveDiagonal19: () => mockIcon('move-diagonal-19-icon'),
    MoveDiagonal20: () => mockIcon('move-diagonal-20-icon'),
  };
<<<<<<< HEAD
});
=======
  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' && (args[0].includes('componentWillReceiveProps') ||
        args[0].includes('componentWillMount'))
    ) {
      return;
    }
    originalConsoleWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});
>>>>>>> 699eacabe7f8e5392566a9365ce78c1726895e50
