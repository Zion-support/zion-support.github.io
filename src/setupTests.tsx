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

// Mock PerformanceObserver
global.PerformanceObserver = class PerformanceObserver {
  constructor() {}
  observe() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
} as unknown as typeof PerformanceObserver;

// Mock react-error-boundary
jest.mock('react-error-boundary', () => ({
  ErrorBoundary: ({ children }: { children: React.ReactNode }) => {
    return children;
  },
  withErrorBoundary: (Component: React.ComponentType) => Component,
  useErrorHandler: () => jest.fn(),
}));

// Mock react-helmet-async
jest.mock('react-helmet-async', () => ({
  Helmet: ({ children }: { children: React.ReactNode }) => children,
  HelmetProvider: ({ children }: { children: React.ReactNode }) => children,
}));

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
    Volume2: () => mockIcon('volume2-icon'),
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
    Building2: () => mockIcon('building2-icon'),
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
    Music2: () => mockIcon('music2-icon'),
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
    Gamepad2: () => mockIcon('gamepad2-icon'),
    Joystick: () => mockIcon('joystick-icon'),
    Dice1: () => mockIcon('dice1-icon'),
    Dice2: () => mockIcon('dice2-icon'),
    Dice3: () => mockIcon('dice3-icon'),
    Dice4: () => mockIcon('dice4-icon'),
    Dice5: () => mockIcon('dice5-icon'),
    Dice6: () => mockIcon('dice6-icon'),
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
    Heart2: () => mockIcon('heart2-icon'),
    Diamond: () => mockIcon('diamond-icon'),
    Club: () => mockIcon('club-icon'),
    Crown: () => mockIcon('crown-icon'),
    Gem: () => mockIcon('gem-icon'),
    Ring: () => mockIcon('ring-icon'),
    Necklace: () => mockIcon('necklace-icon'),
    Earrings: () => mockIcon('earrings-icon'),
    Bracelet: () => mockIcon('bracelet-icon'),
    Watch: () => mockIcon('watch-icon'),
    Clock2: () => mockIcon('clock2-icon'),
    Timer: () => mockIcon('timer-icon'),
    TimerOff: () => mockIcon('timer-off-icon'),
    Stopwatch: () => mockIcon('stopwatch-icon'),
    Hourglass: () => mockIcon('hourglass-icon'),
    Calendar2: () => mockIcon('calendar2-icon'),
    AlertTriangle: () => mockIcon('alert-triangle-icon'),
  };
});

// Mock console methods to reduce noise in tests
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning: ReactDOM.render is no longer supported') ||
        args[0].includes(
          'Warning: A suspended resource finished loading inside a test',
        ))
    ) {
      return;
    }
    originalConsoleError.call(console, ...args);
  };
  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('componentWillReceiveProps') ||
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
