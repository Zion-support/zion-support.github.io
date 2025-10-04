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

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: () => <div data-testid="menu-icon" />,
  X: () => <div data-testid="x-icon" />,
  ChevronDown: () => <div data-testid="chevron-down-icon" />,
  ChevronUp: () => <div data-testid="chevron-up-icon" />,
  ArrowRight: () => <div data-testid="arrow-right-icon" />,
  Check: () => <div data-testid="check-icon" />,
  Star: () => <div data-testid="star-icon" />,
  Users: () => <div data-testid="users-icon" />,
  Shield: () => <div data-testid="shield-icon" />,
  Zap: () => <div data-testid="zap-icon" />,
  Globe: () => <div data-testid="globe-icon" />,
  Brain: () => <div data-testid="brain-icon" />,
  Database: () => <div data-testid="database-icon" />,
  Lock: () => <div data-testid="lock-icon" />,
  Eye: () => <div data-testid="eye-icon" />,
  Target: () => <div data-testid="target-icon" />,
  TrendingUp: () => <div data-testid="trending-up-icon" />,
  Clock: () => <div data-testid="clock-icon" />,
  Award: () => <div data-testid="award-icon" />,
  Rocket: () => <div data-testid="rocket-icon" />,
  Heart: () => <div data-testid="heart-icon" />,
  Mail: () => <div data-testid="mail-icon" />,
  Phone: () => <div data-testid="phone-icon" />,
  MapPin: () => <div data-testid="map-pin-icon" />,
  ExternalLink: () => <div data-testid="external-link-icon" />,
  Github: () => <div data-testid="github-icon" />,
  Linkedin: () => <div data-testid="linkedin-icon" />,
  Twitter: () => <div data-testid="twitter-icon" />,
  Facebook: () => <div data-testid="facebook-icon" />,
  Instagram: () => <div data-testid="instagram-icon" />,
  Youtube: () => <div data-testid="youtube-icon" />,
  Search: () => <div data-testid="search-icon" />,
  Filter: () => <div data-testid="filter-icon" />,
  Calendar: () => <div data-testid="calendar-icon" />,
  User: () => <div data-testid="user-icon" />,
  Settings: () => <div data-testid="settings-icon" />,
  Bell: () => <div data-testid="bell-icon" />,
  Home: () => <div data-testid="home-icon" />,
  Info: () => <div data-testid="info-icon" />,
  AlertCircle: () => <div data-testid="alert-circle-icon" />,
  CheckCircle: () => <div data-testid="check-circle-icon" />,
  XCircle: () => <div data-testid="x-circle-icon" />,
  Plus: () => <div data-testid="plus-icon" />,
  Minus: () => <div data-testid="minus-icon" />,
  Edit: () => <div data-testid="edit-icon" />,
  Trash: () => <div data-testid="trash-icon" />,
  Save: () => <div data-testid="save-icon" />,
  Download: () => <div data-testid="download-icon" />,
  Upload: () => <div data-testid="upload-icon" />,
  Copy: () => <div data-testid="copy-icon" />,
  Share: () => <div data-testid="share-icon" />,
  Bookmark: () => <div data-testid="bookmark-icon" />,
  Tag: () => <div data-testid="tag-icon" />,
  Folder: () => <div data-testid="folder-icon" />,
  File: () => <div data-testid="file-icon" />,
  Image: () => <div data-testid="image-icon" />,
  Video: () => <div data-testid="video-icon" />,
  Music: () => <div data-testid="music-icon" />,
  Play: () => <div data-testid="play-icon" />,
  Pause: () => <div data-testid="pause-icon" />,
  SkipForward: () => <div data-testid="skip-forward-icon" />,
  SkipBack: () => <div data-testid="skip-back-icon" />,
  Volume2: () => <div data-testid="volume2-icon" />,
  VolumeX: () => <div data-testid="volume-x-icon" />,
  Maximize: () => <div data-testid="maximize-icon" />,
  Minimize: () => <div data-testid="minimize-icon" />,
  RefreshCw: () => <div data-testid="refresh-cw-icon" />,
  RotateCcw: () => <div data-testid="rotate-ccw-icon" />,
  RotateCw: () => <div data-testid="rotate-cw-icon" />,
  ZoomIn: () => <div data-testid="zoom-in-icon" />,
  ZoomOut: () => <div data-testid="zoom-out-icon" />,
  Move: () => <div data-testid="move-icon" />,
  Crop: () => <div data-testid="crop-icon" />,
  Scissors: () => <div data-testid="scissors-icon" />,
  Palette: () => <div data-testid="palette-icon" />,
  Type: () => <div data-testid="type-icon" />,
  Bold: () => <div data-testid="bold-icon" />,
  Italic: () => <div data-testid="italic-icon" />,
  Underline: () => <div data-testid="underline-icon" />,
  Strikethrough: () => <div data-testid="strikethrough-icon" />,
  AlignLeft: () => <div data-testid="align-left-icon" />,
  AlignCenter: () => <div data-testid="align-center-icon" />,
  AlignRight: () => <div data-testid="align-right-icon" />,
  AlignJustify: () => <div data-testid="align-justify-icon" />,
  List: () => <div data-testid="list-icon" />,
  ListOrdered: () => <div data-testid="list-ordered-icon" />,
  Quote: () => <div data-testid="quote-icon" />,
  Code: () => <div data-testid="code-icon" />,
  Terminal: () => <div data-testid="terminal-icon" />,
  Command: () => <div data-testid="command-icon" />,
  Keyboard: () => <div data-testid="keyboard-icon" />,
  MousePointer: () => <div data-testid="mouse-pointer-icon" />,
  Hand: () => <div data-testid="hand-icon" />,
  Monitor: () => <div data-testid="monitor-icon" />,
  Smartphone: () => <div data-testid="smartphone-icon" />,
  Tablet: () => <div data-testid="tablet-icon" />,
  Laptop: () => <div data-testid="laptop-icon" />,
  Server: () => <div data-testid="server-icon" />,
  HardDrive: () => <div data-testid="hard-drive-icon" />,
  Wifi: () => <div data-testid="wifi-icon" />,
  Bluetooth: () => <div data-testid="bluetooth-icon" />,
  Battery: () => <div data-testid="battery-icon" />,
  BatteryCharging: () => <div data-testid="battery-charging-icon" />,
  Plug: () => <div data-testid="plug-icon" />,
  Lightbulb: () => <div data-testid="lightbulb-icon" />,
  Sun: () => <div data-testid="sun-icon" />,
  Moon: () => <div data-testid="moon-icon" />,
  Cloud: () => <div data-testid="cloud-icon" />,
  CloudRain: () => <div data-testid="cloud-rain-icon" />,
  CloudSnow: () => <div data-testid="cloud-snow-icon" />,
  CloudLightning: () => <div data-testid="cloud-lightning-icon" />,
  Wind: () => <div data-testid="wind-icon" />,
  Thermometer: () => <div data-testid="thermometer-icon" />,
  Droplets: () => <div data-testid="droplets-icon" />,
  Umbrella: () => <div data-testid="umbrella-icon" />,
  Snowflake: () => <div data-testid="snowflake-icon" />,
  Flame: () => <div data-testid="flame-icon" />,
  TreePine: () => <div data-testid="tree-pine-icon" />,
  TreeDeciduous: () => <div data-testid="tree-deciduous-icon" />,
  Flower: () => <div data-testid="flower-icon" />,
  Leaf: () => <div data-testid="leaf-icon" />,
  Sprout: () => <div data-testid="sprout-icon" />,
  Carrot: () => <div data-testid="carrot-icon" />,
  Apple: () => <div data-testid="apple-icon" />,
  Cherry: () => <div data-testid="cherry-icon" />,
  Grape: () => <div data-testid="grape-icon" />,
  Lemon: () => <div data-testid="lemon-icon" />,
  Orange: () => <div data-testid="orange-icon" />,
  Banana: () => <div data-testid="banana-icon" />,
  Strawberry: () => <div data-testid="strawberry-icon" />,
  Coffee: () => <div data-testid="coffee-icon" />,
  Tea: () => <div data-testid="tea-icon" />,
  Wine: () => <div data-testid="wine-icon" />,
  Beer: () => <div data-testid="beer-icon" />,
  Cookie: () => <div data-testid="cookie-icon" />,
  Cake: () => <div data-testid="cake-icon" />,
  Pizza: () => <div data-testid="pizza-icon" />,
  Sandwich: () => <div data-testid="sandwich-icon" />,
  Utensils: () => <div data-testid="utensils-icon" />,
  UtensilsCrossed: () => <div data-testid="utensils-crossed-icon" />,
  ChefHat: () => <div data-testid="chef-hat-icon" />,
  ShoppingCart: () => <div data-testid="shopping-cart-icon" />,
  ShoppingBag: () => <div data-testid="shopping-bag-icon" />,
  CreditCard: () => <div data-testid="credit-card-icon" />,
  DollarSign: () => <div data-testid="dollar-sign-icon" />,
  Euro: () => <div data-testid="euro-icon" />,
  PoundSterling: () => <div data-testid="pound-sterling-icon" />,
  Yen: () => <div data-testid="yen-icon" />,
  Bitcoin: () => <div data-testid="bitcoin-icon" />,
  Wallet: () => <div data-testid="wallet-icon" />,
  Receipt: () => <div data-testid="receipt-icon" />,
  Package: () => <div data-testid="package-icon" />,
  Truck: () => <div data-testid="truck-icon" />,
  Ship: () => <div data-testid="ship-icon" />,
  Plane: () => <div data-testid="plane-icon" />,
  Train: () => <div data-testid="train-icon" />,
  Bus: () => <div data-testid="bus-icon" />,
  Car: () => <div data-testid="car-icon" />,
  Bike: () => <div data-testid="bike-icon" />,
  Scooter: () => <div data-testid="scooter-icon" />,
  Fuel: () => <div data-testid="fuel-icon" />,
  Gauge: () => <div data-testid="gauge-icon" />,
  Speedometer: () => <div data-testid="speedometer-icon" />,
  Navigation: () => <div data-testid="navigation-icon" />,
  Compass: () => <div data-testid="compass-icon" />,
  Map: () => <div data-testid="map-icon" />,
  Route: () => <div data-testid="route-icon" />,
  Flag: () => <div data-testid="flag-icon" />,
  Building: () => <div data-testid="building-icon" />,
  Building2: () => <div data-testid="building2-icon" />,
  Factory: () => <div data-testid="factory-icon" />,
  Warehouse: () => <div data-testid="warehouse-icon" />,
  Store: () => <div data-testid="store-icon" />,
  Hospital: () => <div data-testid="hospital-icon" />,
  School: () => <div data-testid="school-icon" />,
  University: () => <div data-testid="university-icon" />,
  Library: () => <div data-testid="library-icon" />,
  Museum: () => <div data-testid="museum-icon" />,
  Theater: () => <div data-testid="theater-icon" />,
  Cinema: () => <div data-testid="cinema-icon" />,
  Music2: () => <div data-testid="music2-icon" />,
  Headphones: () => <div data-testid="headphones-icon" />,
  Mic: () => <div data-testid="mic-icon" />,
  MicOff: () => <div data-testid="mic-off-icon" />,
  Speaker: () => <div data-testid="speaker-icon" />,
  SpeakerOff: () => <div data-testid="speaker-off-icon" />,
  Radio: () => <div data-testid="radio-icon" />,
  Tv: () => <div data-testid="tv-icon" />,
  Camera: () => <div data-testid="camera-icon" />,
  CameraOff: () => <div data-testid="camera-off-icon" />,
  VideoOff: () => <div data-testid="video-off-icon" />,
  Webcam: () => <div data-testid="webcam-icon" />,
  WebcamOff: () => <div data-testid="webcam-off-icon" />,
  Gamepad2: () => <div data-testid="gamepad2-icon" />,
  Joystick: () => <div data-testid="joystick-icon" />,
  Dice1: () => <div data-testid="dice1-icon" />,
  Dice2: () => <div data-testid="dice2-icon" />,
  Dice3: () => <div data-testid="dice3-icon" />,
  Dice4: () => <div data-testid="dice4-icon" />,
  Dice5: () => <div data-testid="dice5-icon" />,
  Dice6: () => <div data-testid="dice6-icon" />,
  Puzzle: () => <div data-testid="puzzle-icon" />,
  PuzzlePiece: () => <div data-testid="puzzle-piece-icon" />,
  Chess: () => <div data-testid="chess-icon" />,
  ChessKing: () => <div data-testid="chess-king-icon" />,
  ChessQueen: () => <div data-testid="chess-queen-icon" />,
  ChessRook: () => <div data-testid="chess-rook-icon" />,
  ChessBishop: () => <div data-testid="chess-bishop-icon" />,
  ChessKnight: () => <div data-testid="chess-knight-icon" />,
  ChessPawn: () => <div data-testid="chess-pawn-icon" />,
  Cards: () => <div data-testid="cards-icon" />,
  Spade: () => <div data-testid="spade-icon" />,
  Heart2: () => <div data-testid="heart2-icon" />,
  Diamond: () => <div data-testid="diamond-icon" />,
  Club: () => <div data-testid="club-icon" />,
  Crown: () => <div data-testid="crown-icon" />,
  Gem: () => <div data-testid="gem-icon" />,
  Ring: () => <div data-testid="ring-icon" />,
  Necklace: () => <div data-testid="necklace-icon" />,
  Earrings: () => <div data-testid="earrings-icon" />,
  Bracelet: () => <div data-testid="bracelet-icon" />,
  Watch: () => <div data-testid="watch-icon" />,
  Clock2: () => <div data-testid="clock2-icon" />,
  Timer: () => <div data-testid="timer-icon" />,
  TimerOff: () => <div data-testid="timer-off-icon" />,
  Stopwatch: () => <div data-testid="stopwatch-icon" />,
  Hourglass: () => <div data-testid="hourglass-icon" />,
  Calendar2: () => <div data-testid="calendar2-icon" />,
  Calendar3: () => <div data-testid="calendar3-icon" />,
  Calendar4: () => <div data-testid="calendar4-icon" />,
  Calendar5: () => <div data-testid="calendar5-icon" />,
  Calendar6: () => <div data-testid="calendar6-icon" />,
  Calendar7: () => <div data-testid="calendar7-icon" />,
  Calendar8: () => <div data-testid="calendar8-icon" />,
  Calendar9: () => <div data-testid="calendar9-icon" />,
  Calendar10: () => <div data-testid="calendar10-icon" />,
  Calendar11: () => <div data-testid="calendar11-icon" />,
  Calendar12: () => <div data-testid="calendar12-icon" />,
  Calendar13: () => <div data-testid="calendar13-icon" />,
  Calendar14: () => <div data-testid="calendar14-icon" />,
  Calendar15: () => <div data-testid="calendar15-icon" />,
  Calendar16: () => <div data-testid="calendar16-icon" />,
  Calendar17: () => <div data-testid="calendar17-icon" />,
  Calendar18: () => <div data-testid="calendar18-icon" />,
  Calendar19: () => <div data-testid="calendar19-icon" />,
  Calendar20: () => <div data-testid="calendar20-icon" />,
  Calendar21: () => <div data-testid="calendar21-icon" />,
  Calendar22: () => <div data-testid="calendar22-icon" />,
  Calendar23: () => <div data-testid="calendar23-icon" />,
  Calendar24: () => <div data-testid="calendar24-icon" />,
  Calendar25: () => <div data-testid="calendar25-icon" />,
  Calendar26: () => <div data-testid="calendar26-icon" />,
  Calendar27: () => <div data-testid="calendar27-icon" />,
  Calendar28: () => <div data-testid="calendar28-icon" />,
  Calendar29: () => <div data-testid="calendar29-icon" />,
  Calendar30: () => <div data-testid="calendar30-icon" />,
  Calendar31: () => <div data-testid="calendar31-icon" />,
  Calendar32: () => <div data-testid="calendar32-icon" />,
  Calendar33: () => <div data-testid="calendar33-icon" />,
  Calendar34: () => <div data-testid="calendar34-icon" />,
  Calendar35: () => <div data-testid="calendar35-icon" />,
  Calendar36: () => <div data-testid="calendar36-icon" />,
  Calendar37: () => <div data-testid="calendar37-icon" />,
  Calendar38: () => <div data-testid="calendar38-icon" />,
  Calendar39: () => <div data-testid="calendar39-icon" />,
  Calendar40: () => <div data-testid="calendar40-icon" />,
  Calendar41: () => <div data-testid="calendar41-icon" />,
  Calendar42: () => <div data-testid="calendar42-icon" />,
  Calendar43: () => <div data-testid="calendar43-icon" />,
  Calendar44: () => <div data-testid="calendar44-icon" />,
  Calendar45: () => <div data-testid="calendar45-icon" />,
  Calendar46: () => <div data-testid="calendar46-icon" />,
  Calendar47: () => <div data-testid="calendar47-icon" />,
  Calendar48: () => <div data-testid="calendar48-icon" />,
  Calendar49: () => <div data-testid="calendar49-icon" />,
  Calendar50: () => <div data-testid="calendar50-icon" />,
  Calendar51: () => <div data-testid="calendar51-icon" />,
  Calendar52: () => <div data-testid="calendar52-icon" />,
  Calendar53: () => <div data-testid="calendar53-icon" />,
  Calendar54: () => <div data-testid="calendar54-icon" />,
  Calendar55: () => <div data-testid="calendar55-icon" />,
  Calendar56: () => <div data-testid="calendar56-icon" />,
  Calendar57: () => <div data-testid="calendar57-icon" />,
  Calendar58: () => <div data-testid="calendar58-icon" />,
  Calendar59: () => <div data-testid="calendar59-icon" />,
  Calendar60: () => <div data-testid="calendar60-icon" />,
  Calendar61: () => <div data-testid="calendar61-icon" />,
  Calendar62: () => <div data-testid="calendar62-icon" />,
  Calendar63: () => <div data-testid="calendar63-icon" />,
  Calendar64: () => <div data-testid="calendar64-icon" />,
  Calendar65: () => <div data-testid="calendar65-icon" />,
  Calendar66: () => <div data-testid="calendar66-icon" />,
  Calendar67: () => <div data-testid="calendar67-icon" />,
  Calendar68: () => <div data-testid="calendar68-icon" />,
  Calendar69: () => <div data-testid="calendar69-icon" />,
  Calendar70: () => <div data-testid="calendar70-icon" />,
  Calendar71: () => <div data-testid="calendar71-icon" />,
  Calendar72: () => <div data-testid="calendar72-icon" />,
  Calendar73: () => <div data-testid="calendar73-icon" />,
  Calendar74: () => <div data-testid="calendar74-icon" />,
  Calendar75: () => <div data-testid="calendar75-icon" />,
  Calendar76: () => <div data-testid="calendar76-icon" />,
  Calendar77: () => <div data-testid="calendar77-icon" />,
  Calendar78: () => <div data-testid="calendar78-icon" />,
  Calendar79: () => <div data-testid="calendar79-icon" />,
  Calendar80: () => <div data-testid="calendar80-icon" />,
  Calendar81: () => <div data-testid="calendar81-icon" />,
  Calendar82: () => <div data-testid="calendar82-icon" />,
  Calendar83: () => <div data-testid="calendar83-icon" />,
  Calendar84: () => <div data-testid="calendar84-icon" />,
  Calendar85: () => <div data-testid="calendar85-icon" />,
  Calendar86: () => <div data-testid="calendar86-icon" />,
  Calendar87: () => <div data-testid="calendar87-icon" />,
  Calendar88: () => <div data-testid="calendar88-icon" />,
  Calendar89: () => <div data-testid="calendar89-icon" />,
  Calendar90: () => <div data-testid="calendar90-icon" />,
  Calendar91: () => <div data-testid="calendar91-icon" />,
  Calendar92: () => <div data-testid="calendar92-icon" />,
  Calendar93: () => <div data-testid="calendar93-icon" />,
  Calendar94: () => <div data-testid="calendar94-icon" />,
  Calendar95: () => <div data-testid="calendar95-icon" />,
  Calendar96: () => <div data-testid="calendar96-icon" />,
  Calendar97: () => <div data-testid="calendar97-icon" />,
  Calendar98: () => <div data-testid="calendar98-icon" />,
  Calendar99: () => <div data-testid="calendar99-icon" />,
  Calendar100: () => <div data-testid="calendar100-icon" />,
}));

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
