import '@testing-library/jest-dom';

// Mock window.matchMedia
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

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
}));

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
});