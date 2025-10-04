import '@testing-library/jest-dom'
import React from 'react'

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
        MODE: 'test'
      }
    }
  }
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
    dispatchEvent: jest.fn()
  }))
});

// Mock performance API
Object.defineProperty(window, 'performance', {
  writable: true,
  value: {
    now: jest.fn(() => Date.now()),
    mark: jest.fn(),
    measure: jest.fn(),
    getEntriesByType: jest.fn(() => []),
    getEntriesByName: jest.fn(() => [])
  }
});

// Mock PerformanceObserver
global.PerformanceObserver = class PerformanceObserver {
  constructor() {}
  observe() {}
  disconnect() {}
  takeRecords() { return [] }
} as unknown as typeof PerformanceObserver;

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
  Menu: () => React.createElement('div', { 'data-testid': 'menu-icon' }),
  X: () => React.createElement('div', { 'data-testid': 'x-icon' }),
  ChevronDown: () => React.createElement('div', { 'data-testid': 'chevron-down-icon' }),
  ChevronUp: () => React.createElement('div', { 'data-testid': 'chevron-up-icon' }),
  ArrowRight: () => React.createElement('div', { 'data-testid': 'arrow-right-icon' }),
  Check: () => React.createElement('div', { 'data-testid': 'check-icon' }),
  Star: () => React.createElement('div', { 'data-testid': 'star-icon' }),
  Users: () => React.createElement('div', { 'data-testid': 'users-icon' }),
  Shield: () => React.createElement('div', { 'data-testid': 'shield-icon' }),
  Zap: () => React.createElement('div', { 'data-testid': 'zap-icon' }),
  Globe: () => React.createElement('div', { 'data-testid': 'globe-icon' }),
  Brain: () => React.createElement('div', { 'data-testid': 'brain-icon' }),
  Database: () => React.createElement('div', { 'data-testid': 'database-icon' }),
  Lock: () => React.createElement('div', { 'data-testid': 'lock-icon' }),
  Eye: () => React.createElement('div', { 'data-testid': 'eye-icon' }),
  Target: () => React.createElement('div', { 'data-testid': 'target-icon' }),
  TrendingUp: () => React.createElement('div', { 'data-testid': 'trending-up-icon' }),
  Clock: () => React.createElement('div', { 'data-testid': 'clock-icon' }),
  Award: () => React.createElement('div', { 'data-testid': 'award-icon' }),
  Rocket: () => React.createElement('div', { 'data-testid': 'rocket-icon' }),
  Heart: () => React.createElement('div', { 'data-testid': 'heart-icon' }),
  Mail: () => React.createElement('div', { 'data-testid': 'mail-icon' }),
  Phone: () => React.createElement('div', { 'data-testid': 'phone-icon' }),
  MapPin: () => React.createElement('div', { 'data-testid': 'map-pin-icon' }),
  ExternalLink: () => React.createElement('div', { 'data-testid': 'external-link-icon' }),
  Github: () => React.createElement('div', { 'data-testid': 'github-icon' }),
  Linkedin: () => React.createElement('div', { 'data-testid': 'linkedin-icon' }),
  Twitter: () => React.createElement('div', { 'data-testid': 'twitter-icon' }),
  Facebook: () => React.createElement('div', { 'data-testid': 'facebook-icon' }),
  Instagram: () => React.createElement('div', { 'data-testid': 'instagram-icon' }),
  Youtube: () => React.createElement('div', { 'data-testid': 'youtube-icon' }),
  Search: () => React.createElement('div', { 'data-testid': 'search-icon' }),
  Filter: () => React.createElement('div', { 'data-testid': 'filter-icon' }),
  Calendar: () => React.createElement('div', { 'data-testid': 'calendar-icon' }),
  User: () => React.createElement('div', { 'data-testid': 'user-icon' }),
  Settings: () => React.createElement('div', { 'data-testid': 'settings-icon' }),
  Bell: () => React.createElement('div', { 'data-testid': 'bell-icon' }),
  Home: () => React.createElement('div', { 'data-testid': 'home-icon' }),
  Info: () => React.createElement('div', { 'data-testid': 'info-icon' }),
  AlertCircle: () => React.createElement('div', { 'data-testid': 'alert-circle-icon' }),
  CheckCircle: () => React.createElement('div', { 'data-testid': 'check-circle-icon' }),
  XCircle: () => React.createElement('div', { 'data-testid': 'x-circle-icon' }),
  Plus: () => React.createElement('div', { 'data-testid': 'plus-icon' }),
  Minus: () => React.createElement('div', { 'data-testid': 'minus-icon' }),
  Edit: () => React.createElement('div', { 'data-testid': 'edit-icon' }),
  Trash: () => React.createElement('div', { 'data-testid': 'trash-icon' }),
  Save: () => React.createElement('div', { 'data-testid': 'save-icon' }),
  Download: () => React.createElement('div', { 'data-testid': 'download-icon' }),
  Upload: () => React.createElement('div', { 'data-testid': 'upload-icon' }),
  Copy: () => React.createElement('div', { 'data-testid': 'copy-icon' }),
  Share: () => React.createElement('div', { 'data-testid': 'share-icon' }),
  Bookmark: () => React.createElement('div', { 'data-testid': 'bookmark-icon' }),
  Tag: () => React.createElement('div', { 'data-testid': 'tag-icon' }),
  Folder: () => React.createElement('div', { 'data-testid': 'folder-icon' }),
  File: () => React.createElement('div', { 'data-testid': 'file-icon' }),
  Image: () => React.createElement('div', { 'data-testid': 'image-icon' }),
  Video: () => React.createElement('div', { 'data-testid': 'video-icon' }),
  Music: () => React.createElement('div', { 'data-testid': 'music-icon' }),
  Play: () => React.createElement('div', { 'data-testid': 'play-icon' }),
  Pause: () => React.createElement('div', { 'data-testid': 'pause-icon' }),
  SkipForward: () => React.createElement('div', { 'data-testid': 'skip-forward-icon' }),
  SkipBack: () => React.createElement('div', { 'data-testid': 'skip-back-icon' }),
  Volume2: () => React.createElement('div', { 'data-testid': 'volume2-icon' }),
  VolumeX: () => React.createElement('div', { 'data-testid': 'volume-x-icon' }),
  Maximize: () => React.createElement('div', { 'data-testid': 'maximize-icon' }),
  Minimize: () => React.createElement('div', { 'data-testid': 'minimize-icon' }),
  RefreshCw: () => React.createElement('div', { 'data-testid': 'refresh-cw-icon' }),
  RotateCcw: () => React.createElement('div', { 'data-testid': 'rotate-ccw-icon' }),
  RotateCw: () => React.createElement('div', { 'data-testid': 'rotate-cw-icon' }),
  ZoomIn: () => React.createElement('div', { 'data-testid': 'zoom-in-icon' }),
  ZoomOut: () => React.createElement('div', { 'data-testid': 'zoom-out-icon' }),
  Move: () => React.createElement('div', { 'data-testid': 'move-icon' }),
  Crop: () => React.createElement('div', { 'data-testid': 'crop-icon' }),
  Scissors: () => React.createElement('div', { 'data-testid': 'scissors-icon' }),
  Palette: () => React.createElement('div', { 'data-testid': 'palette-icon' }),
  Type: () => React.createElement('div', { 'data-testid': 'type-icon' }),
  Bold: () => React.createElement('div', { 'data-testid': 'bold-icon' }),
  Italic: () => React.createElement('div', { 'data-testid': 'italic-icon' }),
  Underline: () => React.createElement('div', { 'data-testid': 'underline-icon' }),
  Strikethrough: () => React.createElement('div', { 'data-testid': 'strikethrough-icon' }),
  AlignLeft: () => React.createElement('div', { 'data-testid': 'align-left-icon' }),
  AlignCenter: () => React.createElement('div', { 'data-testid': 'align-center-icon' }),
  AlignRight: () => React.createElement('div', { 'data-testid': 'align-right-icon' }),
  AlignJustify: () => React.createElement('div', { 'data-testid': 'align-justify-icon' }),
  List: () => React.createElement('div', { 'data-testid': 'list-icon' }),
  ListOrdered: () => React.createElement('div', { 'data-testid': 'list-ordered-icon' }),
  Quote: () => React.createElement('div', { 'data-testid': 'quote-icon' }),
  Code: () => React.createElement('div', { 'data-testid': 'code-icon' }),
  Terminal: () => React.createElement('div', { 'data-testid': 'terminal-icon' }),
  Command: () => React.createElement('div', { 'data-testid': 'command-icon' }),
  Keyboard: () => React.createElement('div', { 'data-testid': 'keyboard-icon' }),
  MousePointer: () => React.createElement('div', { 'data-testid': 'mouse-pointer-icon' }),
  Hand: () => React.createElement('div', { 'data-testid': 'hand-icon' }),
  Monitor: () => React.createElement('div', { 'data-testid': 'monitor-icon' }),
  Smartphone: () => React.createElement('div', { 'data-testid': 'smartphone-icon' }),
  Tablet: () => React.createElement('div', { 'data-testid': 'tablet-icon' }),
  Laptop: () => React.createElement('div', { 'data-testid': 'laptop-icon' }),
  Server: () => React.createElement('div', { 'data-testid': 'server-icon' }),
  HardDrive: () => React.createElement('div', { 'data-testid': 'hard-drive-icon' }),
  Wifi: () => React.createElement('div', { 'data-testid': 'wifi-icon' }),
  Bluetooth: () => React.createElement('div', { 'data-testid': 'bluetooth-icon' }),
  Battery: () => React.createElement('div', { 'data-testid': 'battery-icon' }),
  BatteryCharging: () => React.createElement('div', { 'data-testid': 'battery-charging-icon' }),
  Plug: () => React.createElement('div', { 'data-testid': 'plug-icon' }),
  Lightbulb: () => React.createElement('div', { 'data-testid': 'lightbulb-icon' }),
  Sun: () => React.createElement('div', { 'data-testid': 'sun-icon' }),
  Moon: () => React.createElement('div', { 'data-testid': 'moon-icon' }),
  Cloud: () => React.createElement('div', { 'data-testid': 'cloud-icon' }),
  CloudRain: () => React.createElement('div', { 'data-testid': 'cloud-rain-icon' }),
  CloudSnow: () => React.createElement('div', { 'data-testid': 'cloud-snow-icon' }),
  CloudLightning: () => React.createElement('div', { 'data-testid': 'cloud-lightning-icon' }),
  Wind: () => React.createElement('div', { 'data-testid': 'wind-icon' }),
  Thermometer: () => React.createElement('div', { 'data-testid': 'thermometer-icon' }),
  Droplets: () => React.createElement('div', { 'data-testid': 'droplets-icon' }),
  Umbrella: () => React.createElement('div', { 'data-testid': 'umbrella-icon' }),
  Snowflake: () => React.createElement('div', { 'data-testid': 'snowflake-icon' }),
  Flame: () => React.createElement('div', { 'data-testid': 'flame-icon' }),
  TreePine: () => React.createElement('div', { 'data-testid': 'tree-pine-icon' }),
  TreeDeciduous: () => React.createElement('div', { 'data-testid': 'tree-deciduous-icon' }),
  Flower: () => React.createElement('div', { 'data-testid': 'flower-icon' }),
  Leaf: () => React.createElement('div', { 'data-testid': 'leaf-icon' }),
  Sprout: () => React.createElement('div', { 'data-testid': 'sprout-icon' }),
  Carrot: () => React.createElement('div', { 'data-testid': 'carrot-icon' }),
  Apple: () => React.createElement('div', { 'data-testid': 'apple-icon' }),
  Cherry: () => React.createElement('div', { 'data-testid': 'cherry-icon' }),
  Grape: () => React.createElement('div', { 'data-testid': 'grape-icon' }),
  Lemon: () => React.createElement('div', { 'data-testid': 'lemon-icon' }),
  Orange: () => React.createElement('div', { 'data-testid': 'orange-icon' }),
  Banana: () => React.createElement('div', { 'data-testid': 'banana-icon' }),
  Strawberry: () => React.createElement('div', { 'data-testid': 'strawberry-icon' }),
  Coffee: () => React.createElement('div', { 'data-testid': 'coffee-icon' }),
  Tea: () => React.createElement('div', { 'data-testid': 'tea-icon' }),
  Wine: () => React.createElement('div', { 'data-testid': 'wine-icon' }),
  Beer: () => React.createElement('div', { 'data-testid': 'beer-icon' }),
  Cookie: () => React.createElement('div', { 'data-testid': 'cookie-icon' }),
  Cake: () => React.createElement('div', { 'data-testid': 'cake-icon' }),
  Pizza: () => React.createElement('div', { 'data-testid': 'pizza-icon' }),
  Sandwich: () => React.createElement('div', { 'data-testid': 'sandwich-icon' }),
  Utensils: () => React.createElement('div', { 'data-testid': 'utensils-icon' }),
  UtensilsCrossed: () => React.createElement('div', { 'data-testid': 'utensils-crossed-icon' }),
  ChefHat: () => React.createElement('div', { 'data-testid': 'chef-hat-icon' }),
  ShoppingCart: () => React.createElement('div', { 'data-testid': 'shopping-cart-icon' }),
  ShoppingBag: () => React.createElement('div', { 'data-testid': 'shopping-bag-icon' }),
  CreditCard: () => React.createElement('div', { 'data-testid': 'credit-card-icon' }),
  DollarSign: () => React.createElement('div', { 'data-testid': 'dollar-sign-icon' }),
  Euro: () => React.createElement('div', { 'data-testid': 'euro-icon' }),
  PoundSterling: () => React.createElement('div', { 'data-testid': 'pound-sterling-icon' }),
  Yen: () => React.createElement('div', { 'data-testid': 'yen-icon' }),
  Bitcoin: () => React.createElement('div', { 'data-testid': 'bitcoin-icon' }),
  Wallet: () => React.createElement('div', { 'data-testid': 'wallet-icon' }),
  Receipt: () => React.createElement('div', { 'data-testid': 'receipt-icon' }),
  Package: () => React.createElement('div', { 'data-testid': 'package-icon' }),
  Truck: () => React.createElement('div', { 'data-testid': 'truck-icon' }),
  Ship: () => React.createElement('div', { 'data-testid': 'ship-icon' }),
  Plane: () => React.createElement('div', { 'data-testid': 'plane-icon' }),
  Train: () => React.createElement('div', { 'data-testid': 'train-icon' }),
  Bus: () => React.createElement('div', { 'data-testid': 'bus-icon' }),
  Car: () => React.createElement('div', { 'data-testid': 'car-icon' }),
  Bike: () => React.createElement('div', { 'data-testid': 'bike-icon' }),
  Scooter: () => React.createElement('div', { 'data-testid': 'scooter-icon' }),
  Fuel: () => React.createElement('div', { 'data-testid': 'fuel-icon' }),
  Gauge: () => React.createElement('div', { 'data-testid': 'gauge-icon' }),
  Speedometer: () => React.createElement('div', { 'data-testid': 'speedometer-icon' }),
  Navigation: () => React.createElement('div', { 'data-testid': 'navigation-icon' }),
  Compass: () => React.createElement('div', { 'data-testid': 'compass-icon' }),
  Map: () => React.createElement('div', { 'data-testid': 'map-icon' }),
  Route: () => React.createElement('div', { 'data-testid': 'route-icon' }),
  Flag: () => React.createElement('div', { 'data-testid': 'flag-icon' }),
  Building: () => React.createElement('div', { 'data-testid': 'building-icon' }),
  Building2: () => React.createElement('div', { 'data-testid': 'building2-icon' }),
  Factory: () => React.createElement('div', { 'data-testid': 'factory-icon' }),
  Warehouse: () => React.createElement('div', { 'data-testid': 'warehouse-icon' }),
  Store: () => React.createElement('div', { 'data-testid': 'store-icon' }),
  Hospital: () => React.createElement('div', { 'data-testid': 'hospital-icon' }),
  School: () => React.createElement('div', { 'data-testid': 'school-icon' }),
  University: () => React.createElement('div', { 'data-testid': 'university-icon' }),
  Library: () => React.createElement('div', { 'data-testid': 'library-icon' }),
  Museum: () => React.createElement('div', { 'data-testid': 'museum-icon' }),
  Theater: () => React.createElement('div', { 'data-testid': 'theater-icon' }),
  Cinema: () => React.createElement('div', { 'data-testid': 'cinema-icon' }),
  Music2: () => React.createElement('div', { 'data-testid': 'music2-icon' }),
  Headphones: () => React.createElement('div', { 'data-testid': 'headphones-icon' }),
  Mic: () => React.createElement('div', { 'data-testid': 'mic-icon' }),
  MicOff: () => React.createElement('div', { 'data-testid': 'mic-off-icon' }),
  Speaker: () => React.createElement('div', { 'data-testid': 'speaker-icon' }),
  SpeakerOff: () => React.createElement('div', { 'data-testid': 'speaker-off-icon' }),
  Radio: () => React.createElement('div', { 'data-testid': 'radio-icon' }),
  Tv: () => React.createElement('div', { 'data-testid': 'tv-icon' }),
  Camera: () => React.createElement('div', { 'data-testid': 'camera-icon' }),
  CameraOff: () => React.createElement('div', { 'data-testid': 'camera-off-icon' }),
  VideoOff: () => React.createElement('div', { 'data-testid': 'video-off-icon' }),
  Webcam: () => React.createElement('div', { 'data-testid': 'webcam-icon' }),
  WebcamOff: () => React.createElement('div', { 'data-testid': 'webcam-off-icon' }),
  Gamepad2: () => React.createElement('div', { 'data-testid': 'gamepad2-icon' }),
  Joystick: () => React.createElement('div', { 'data-testid': 'joystick-icon' }),
  Dice1: () => React.createElement('div', { 'data-testid': 'dice1-icon' }),
  Dice2: () => React.createElement('div', { 'data-testid': 'dice2-icon' }),
  Dice3: () => React.createElement('div', { 'data-testid': 'dice3-icon' }),
  Dice4: () => React.createElement('div', { 'data-testid': 'dice4-icon' }),
  Dice5: () => React.createElement('div', { 'data-testid': 'dice5-icon' }),
  Dice6: () => React.createElement('div', { 'data-testid': 'dice6-icon' }),
  Puzzle: () => React.createElement('div', { 'data-testid': 'puzzle-icon' }),
  PuzzlePiece: () => React.createElement('div', { 'data-testid': 'puzzle-piece-icon' }),
  Chess: () => React.createElement('div', { 'data-testid': 'chess-icon' }),
  ChessKing: () => React.createElement('div', { 'data-testid': 'chess-king-icon' }),
  ChessQueen: () => React.createElement('div', { 'data-testid': 'chess-queen-icon' }),
  ChessRook: () => React.createElement('div', { 'data-testid': 'chess-rook-icon' }),
  ChessBishop: () => React.createElement('div', { 'data-testid': 'chess-bishop-icon' }),
  ChessKnight: () => React.createElement('div', { 'data-testid': 'chess-knight-icon' }),
  ChessPawn: () => React.createElement('div', { 'data-testid': 'chess-pawn-icon' }),
  Cards: () => React.createElement('div', { 'data-testid': 'cards-icon' }),
  Spade: () => React.createElement('div', { 'data-testid': 'spade-icon' }),
  Heart2: () => React.createElement('div', { 'data-testid': 'heart2-icon' }),
  Diamond: () => React.createElement('div', { 'data-testid': 'diamond-icon' }),
  Club: () => React.createElement('div', { 'data-testid': 'club-icon' }),
  Crown: () => React.createElement('div', { 'data-testid': 'crown-icon' }),
  Gem: () => React.createElement('div', { 'data-testid': 'gem-icon' }),
  Ring: () => React.createElement('div', { 'data-testid': 'ring-icon' }),
  Necklace: () => React.createElement('div', { 'data-testid': 'necklace-icon' }),
  Earrings: () => React.createElement('div', { 'data-testid': 'earrings-icon' }),
  Bracelet: () => React.createElement('div', { 'data-testid': 'bracelet-icon' }),
  Watch: () => React.createElement('div', { 'data-testid': 'watch-icon' }),
  Clock2: () => React.createElement('div', { 'data-testid': 'clock2-icon' }),
  Timer: () => React.createElement('div', { 'data-testid': 'timer-icon' }),
  TimerOff: () => React.createElement('div', { 'data-testid': 'timer-off-icon' }),
  Stopwatch: () => React.createElement('div', { 'data-testid': 'stopwatch-icon' }),
  Hourglass: () => React.createElement('div', { 'data-testid': 'hourglass-icon' }),
  Calendar2: () => React.createElement('div', { 'data-testid': 'calendar2-icon' }),
  Calendar3: () => React.createElement('div', { 'data-testid': 'calendar3-icon' }),
  Calendar4: () => React.createElement('div', { 'data-testid': 'calendar4-icon' }),
  Calendar5: () => React.createElement('div', { 'data-testid': 'calendar5-icon' }),
  Calendar6: () => React.createElement('div', { 'data-testid': 'calendar6-icon' }),
  Calendar7: () => React.createElement('div', { 'data-testid': 'calendar7-icon' }),
  Calendar8: () => React.createElement('div', { 'data-testid': 'calendar8-icon' }),
  Calendar9: () => React.createElement('div', { 'data-testid': 'calendar9-icon' }),
  Calendar10: () => React.createElement('div', { 'data-testid': 'calendar10-icon' }),
  Calendar11: () => React.createElement('div', { 'data-testid': 'calendar11-icon' }),
  Calendar12: () => React.createElement('div', { 'data-testid': 'calendar12-icon' }),
  Calendar13: () => React.createElement('div', { 'data-testid': 'calendar13-icon' }),
  Calendar14: () => React.createElement('div', { 'data-testid': 'calendar14-icon' }),
  Calendar15: () => React.createElement('div', { 'data-testid': 'calendar15-icon' }),
  Calendar16: () => React.createElement('div', { 'data-testid': 'calendar16-icon' }),
  Calendar17: () => React.createElement('div', { 'data-testid': 'calendar17-icon' }),
  Calendar18: () => React.createElement('div', { 'data-testid': 'calendar18-icon' }),
  Calendar19: () => React.createElement('div', { 'data-testid': 'calendar19-icon' }),
  Calendar20: () => React.createElement('div', { 'data-testid': 'calendar20-icon' }),
  Calendar21: () => React.createElement('div', { 'data-testid': 'calendar21-icon' }),
  Calendar22: () => React.createElement('div', { 'data-testid': 'calendar22-icon' }),
  Calendar23: () => React.createElement('div', { 'data-testid': 'calendar23-icon' }),
  Calendar24: () => React.createElement('div', { 'data-testid': 'calendar24-icon' }),
  Calendar25: () => React.createElement('div', { 'data-testid': 'calendar25-icon' }),
  Calendar26: () => React.createElement('div', { 'data-testid': 'calendar26-icon' }),
  Calendar27: () => React.createElement('div', { 'data-testid': 'calendar27-icon' }),
  Calendar28: () => React.createElement('div', { 'data-testid': 'calendar28-icon' }),
  Calendar29: () => React.createElement('div', { 'data-testid': 'calendar29-icon' }),
  Calendar30: () => React.createElement('div', { 'data-testid': 'calendar30-icon' }),
  Calendar31: () => React.createElement('div', { 'data-testid': 'calendar31-icon' }),
  Calendar32: () => React.createElement('div', { 'data-testid': 'calendar32-icon' }),
  Calendar33: () => React.createElement('div', { 'data-testid': 'calendar33-icon' }),
  Calendar34: () => React.createElement('div', { 'data-testid': 'calendar34-icon' }),
  Calendar35: () => React.createElement('div', { 'data-testid': 'calendar35-icon' }),
  Calendar36: () => React.createElement('div', { 'data-testid': 'calendar36-icon' }),
  Calendar37: () => React.createElement('div', { 'data-testid': 'calendar37-icon' }),
  Calendar38: () => React.createElement('div', { 'data-testid': 'calendar38-icon' }),
  Calendar39: () => React.createElement('div', { 'data-testid': 'calendar39-icon' }),
  Calendar40: () => React.createElement('div', { 'data-testid': 'calendar40-icon' }),
  Calendar41: () => React.createElement('div', { 'data-testid': 'calendar41-icon' }),
  Calendar42: () => React.createElement('div', { 'data-testid': 'calendar42-icon' }),
  Calendar43: () => React.createElement('div', { 'data-testid': 'calendar43-icon' }),
  Calendar44: () => React.createElement('div', { 'data-testid': 'calendar44-icon' }),
  Calendar45: () => React.createElement('div', { 'data-testid': 'calendar45-icon' }),
  Calendar46: () => React.createElement('div', { 'data-testid': 'calendar46-icon' }),
  Calendar47: () => React.createElement('div', { 'data-testid': 'calendar47-icon' }),
  Calendar48: () => React.createElement('div', { 'data-testid': 'calendar48-icon' }),
  Calendar49: () => React.createElement('div', { 'data-testid': 'calendar49-icon' }),
  Calendar50: () => React.createElement('div', { 'data-testid': 'calendar50-icon' }),
  Calendar51: () => React.createElement('div', { 'data-testid': 'calendar51-icon' }),
  Calendar52: () => React.createElement('div', { 'data-testid': 'calendar52-icon' }),
  Calendar53: () => React.createElement('div', { 'data-testid': 'calendar53-icon' }),
  Calendar54: () => React.createElement('div', { 'data-testid': 'calendar54-icon' }),
  Calendar55: () => React.createElement('div', { 'data-testid': 'calendar55-icon' }),
  Calendar56: () => React.createElement('div', { 'data-testid': 'calendar56-icon' }),
  Calendar57: () => React.createElement('div', { 'data-testid': 'calendar57-icon' }),
  Calendar58: () => React.createElement('div', { 'data-testid': 'calendar58-icon' }),
  Calendar59: () => React.createElement('div', { 'data-testid': 'calendar59-icon' }),
  Calendar60: () => React.createElement('div', { 'data-testid': 'calendar60-icon' }),
  Calendar61: () => React.createElement('div', { 'data-testid': 'calendar61-icon' }),
  Calendar62: () => React.createElement('div', { 'data-testid': 'calendar62-icon' }),
  Calendar63: () => React.createElement('div', { 'data-testid': 'calendar63-icon' }),
  Calendar64: () => React.createElement('div', { 'data-testid': 'calendar64-icon' }),
  Calendar65: () => React.createElement('div', { 'data-testid': 'calendar65-icon' }),
  Calendar66: () => React.createElement('div', { 'data-testid': 'calendar66-icon' }),
  Calendar67: () => React.createElement('div', { 'data-testid': 'calendar67-icon' }),
  Calendar68: () => React.createElement('div', { 'data-testid': 'calendar68-icon' }),
  Calendar69: () => React.createElement('div', { 'data-testid': 'calendar69-icon' }),
  Calendar70: () => React.createElement('div', { 'data-testid': 'calendar70-icon' }),
  Calendar71: () => React.createElement('div', { 'data-testid': 'calendar71-icon' }),
  Calendar72: () => React.createElement('div', { 'data-testid': 'calendar72-icon' }),
  Calendar73: () => React.createElement('div', { 'data-testid': 'calendar73-icon' }),
  Calendar74: () => React.createElement('div', { 'data-testid': 'calendar74-icon' }),
  Calendar75: () => React.createElement('div', { 'data-testid': 'calendar75-icon' }),
  Calendar76: () => React.createElement('div', { 'data-testid': 'calendar76-icon' }),
  Calendar77: () => React.createElement('div', { 'data-testid': 'calendar77-icon' }),
  Calendar78: () => React.createElement('div', { 'data-testid': 'calendar78-icon' }),
  Calendar79: () => React.createElement('div', { 'data-testid': 'calendar79-icon' }),
  Calendar80: () => React.createElement('div', { 'data-testid': 'calendar80-icon' }),
  Calendar81: () => React.createElement('div', { 'data-testid': 'calendar81-icon' }),
  Calendar82: () => React.createElement('div', { 'data-testid': 'calendar82-icon' }),
  Calendar83: () => React.createElement('div', { 'data-testid': 'calendar83-icon' }),
  Calendar84: () => React.createElement('div', { 'data-testid': 'calendar84-icon' }),
  Calendar85: () => React.createElement('div', { 'data-testid': 'calendar85-icon' }),
  Calendar86: () => React.createElement('div', { 'data-testid': 'calendar86-icon' }),
  Calendar87: () => React.createElement('div', { 'data-testid': 'calendar87-icon' }),
  Calendar88: () => React.createElement('div', { 'data-testid': 'calendar88-icon' }),
  Calendar89: () => React.createElement('div', { 'data-testid': 'calendar89-icon' }),
  Calendar90: () => React.createElement('div', { 'data-testid': 'calendar90-icon' }),
  Calendar91: () => React.createElement('div', { 'data-testid': 'calendar91-icon' }),
  Calendar92: () => React.createElement('div', { 'data-testid': 'calendar92-icon' }),
  Calendar93: () => React.createElement('div', { 'data-testid': 'calendar93-icon' }),
  Calendar94: () => React.createElement('div', { 'data-testid': 'calendar94-icon' }),
  Calendar95: () => React.createElement('div', { 'data-testid': 'calendar95-icon' }),
  Calendar96: () => React.createElement('div', { 'data-testid': 'calendar96-icon' }),
  Calendar97: () => React.createElement('div', { 'data-testid': 'calendar97-icon' }),
  Calendar98: () => React.createElement('div', { 'data-testid': 'calendar98-icon' }),
  Calendar99: () => React.createElement('div', { 'data-testid': 'calendar99-icon' }),
  Calendar100: () => React.createElement('div', { 'data-testid': 'calendar100-icon' })
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
          'Warning: A suspended resource finished loading inside a test'
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