import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  GitBranch, 
  Server, 
  Monitor, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Users, 
  Clock, 
  DollarSign,
  BarChart3,
  Settings,
  Workflow,
  Database,
  Lock,
  Globe,
  Smartphone,
  Cpu,
  Network,
  Activity,
  TrendingUp,
  Target,
  Rocket,
  Wrench,
  FileText,
  Play,
  Pause,
  RefreshCw,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Trash2,
  Edit,
  Plus,
  Minus,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Share,
  Copy,
  ExternalLink,
  MessageCircle,
  Bell,
  Calendar,
  Timer,
  Stopwatch,
  Zap as ZapIcon,
  Layers,
  Box,
  Package,
  Archive,
  Folder,
  File,
  Image,
  Video,
  Music,
  Mic,
  Camera,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Signal,
  SignalHigh,
  SignalLow,
  Battery,
  BatteryLow,
  BatteryFull,
  Power,
  PowerOff,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Umbrella,
  TreePine,
  Mountain,
  Waves,
  Fish,
  Bird,
  Bug,
  Flower,
  Leaf,
  Apple,
  Carrot,
  Coffee,
  Pizza,
  Cake,
  Heart,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Award,
  Trophy,
  Medal,
  Crown,
  Gem,
  Diamond,
  Star as StarIcon,
  Sparkles,
  Gift,
  PartyPopper,
  Confetti,
  Balloon,
  Cake as CakeIcon,
  Cookie,
  IceCream,
  Lollipop,
  Candy,
  Popcorn,
  HotDog,
  Sandwich,
  Burger,
  Taco,
  Burrito,
  Sushi,
  Ramen,
  Spaghetti,
  Salad,
  Soup,
  Bread,
  Croissant,
  Bagel,
  Pretzel,
  Donut,
  Muffin,
  Pancake,
  Waffle,
  FrenchFries,
  Onion,
  Tomato,
  Corn,
  Broccoli,
  Pepper,
  Mushroom,
  Eggplant,
  Cucumber,
  Lettuce,
  Spinach,
  Kale,
  Cabbage,
  Radish,
  Beet,
  Carrot as CarrotIcon,
  Potato,
  SweetPotato,
  Yam,
  Squash,
  Pumpkin,
  Watermelon,
  Melon,
  Cantaloupe,
  Honeydew,
  Strawberry,
  Blueberry,
  Raspberry,
  Blackberry,
  Cherry,
  Grape,
  Orange,
  Lemon,
  Lime,
  Banana,
  Pineapple,
  Mango,
  Peach,
  Pear,
  Apple as AppleIcon,
  Kiwi,
  Coconut,
  Avocado,
  Olive,
  Fig,
  Date,
  Raisin,
  Cranberry,
  Pomegranate,
  Papaya,
  Guava,
  PassionFruit,
  DragonFruit,
  StarFruit,
  Lychee,
  Rambutan,
  Durian,
  Jackfruit,
  Breadfruit,
  Plantain,
  Taro,
  Cassava,
  Yam as YamIcon,
  SweetPotato as SweetPotatoIcon,
  Potato as PotatoIcon,
  Onion as OnionIcon,
  Garlic,
  Ginger,
  Turmeric,
  Cinnamon,
  Nutmeg,
  Clove,
  Cardamom,
  Vanilla,
  Mint,
  Basil,
  Oregano,
  Thyme,
  Rosemary,
  Sage,
  Parsley,
  Cilantro,
  Dill,
  Chives,
  Tarragon,
  BayLeaf,
  Lavender,
  Chamomile,
  Echinacea,
  Ginseng,
  Aloe,
  Tea,
  Coffee as CoffeeIcon,
  Espresso,
  Cappuccino,
  Latte,
  Macchiato,
  Mocha,
  Frappuccino,
  Americano,
  Doppio,
  Ristretto,
  Lungo,
  Affogato,
  Irish,
  Turkish,
  Greek,
  French,
  Italian,
  Spanish,
  German,
  British,
  American,
  Canadian,
  Mexican,
  Brazilian,
  Argentine,
  Chilean,
  Peruvian,
  Colombian,
  Venezuelan,
  Ecuadorian,
  Bolivian,
  Paraguayan,
  Uruguayan,
  Guyanese,
  Surinamese,
  FrenchGuianese,
  Falkland,
  SouthGeorgian,
  SouthSandwich,
  Bouvet,
  Heard,
  McDonald,
  Kerguelen,
  Crozet,
  PrinceEdward,
  Marion,
  Amsterdam,
  SaintPaul,
  NewAmsterdam,
  Tristan,
  Gough,
  Inaccessible,
  Nightingale,
  Middle,
  Stoltenhoff,
  Alex,
  Stoltenhoff as StoltenhoffIcon,
  Middle as MiddleIcon,
  Nightingale as NightingaleIcon,
  Inaccessible as InaccessibleIcon,
  Gough as GoughIcon,
  Tristan as TristanIcon,
  NewAmsterdam as NewAmsterdamIcon,
  SaintPaul as SaintPaulIcon,
  Amsterdam as AmsterdamIcon,
  Marion as MarionIcon,
  PrinceEdward as PrinceEdwardIcon,
  Crozet as CrozetIcon,
  Kerguelen as KerguelenIcon,
  McDonald as McDonaldIcon,
  Heard as HeardIcon,
  Bouvet as BouvetIcon,
  SouthSandwich as SouthSandwichIcon,
  SouthGeorgian as SouthGeorgianIcon,
  Falkland as FalklandIcon,
  FrenchGuianese as FrenchGuianeseIcon,
  Surinamese as SurinameseIcon,
  Guyanese as GuyaneseIcon,
  Uruguayan as UruguayanIcon,
  Paraguayan as ParaguayanIcon,
  Bolivian as BolivianIcon,
  Ecuadorian as EcuadorianIcon,
  Venezuelan as VenezuelanIcon,
  Colombian as ColombianIcon,
  Peruvian as PeruvianIcon,
  Chilean as ChileanIcon,
  Argentine as ArgentineIcon,
  Brazilian as BrazilianIcon,
  Mexican as MexicanIcon,
  Canadian as CanadianIcon,
  American as AmericanIcon,
  British as BritishIcon,
  German as GermanIcon,
  Spanish as SpanishIcon,
  Italian as ItalianIcon,
  French as FrenchIcon,
  Greek as GreekIcon,
  Turkish as TurkishIcon,
  Irish as IrishIcon,
  Affogato as AffogatoIcon,
  Lungo as LungoIcon,
  Ristretto as RistrettoIcon,
  Doppio as DoppioIcon,
  Americano as AmericanoIcon,
  Frappuccino as FrappuccinoIcon,
  Mocha as MochaIcon,
  Macchiato as MacchiatoIcon,
  Latte as LatteIcon,
  Cappuccino as CappuccinoIcon,
  Espresso as EspressoIcon,
  Coffee as CoffeeIcon2,
  Tea as TeaIcon,
  Aloe as AloeIcon,
  Ginseng as GinsengIcon,
  Echinacea as EchinaceaIcon,
  Chamomile as ChamomileIcon,
  Lavender as LavenderIcon,
  BayLeaf as BayLeafIcon,
  Tarragon as TarragonIcon,
  Chives as ChivesIcon,
  Dill as DillIcon,
  Cilantro as CilantroIcon,
  Parsley as ParsleyIcon,
  Sage as SageIcon,
  Rosemary as RosemaryIcon,
  Thyme as ThymeIcon,
  Oregano as OreganoIcon,
  Basil as BasilIcon,
  Mint as MintIcon,
  Vanilla as VanillaIcon,
  Cardamom as CardamomIcon,
  Clove as CloveIcon,
  Nutmeg as NutmegIcon,
  Cinnamon as CinnamonIcon,
  Turmeric as TurmericIcon,
  Ginger as GingerIcon,
  Garlic as GarlicIcon,
  Onion as OnionIcon2,
  Potato as PotatoIcon2,
  SweetPotato as SweetPotatoIcon2,
  Yam as YamIcon2,
  Cassava as CassavaIcon,
  Taro as TaroIcon,
  Plantain as PlantainIcon,
  Jackfruit as JackfruitIcon,
  Durian as DurianIcon,
  Rambutan as RambutanIcon,
  Lychee as LycheeIcon,
  StarFruit as StarFruitIcon,
  DragonFruit as DragonFruitIcon,
  PassionFruit as PassionFruitIcon,
  Guava as GuavaIcon,
  Papaya as PapayaIcon,
  Pomegranate as PomegranateIcon,
  Cranberry as CranberryIcon,
  Raisin as RaisinIcon,
  Date as DateIcon,
  Fig as FigIcon,
  Olive as OliveIcon,
  Avocado as AvocadoIcon,
  Coconut as CoconutIcon,
  Kiwi as KiwiIcon,
  Apple as AppleIcon2,
  Pear as PearIcon,
  Peach as PeachIcon,
  Mango as MangoIcon,
  Pineapple as PineappleIcon,
  Banana as BananaIcon,
  Lime as LimeIcon,
  Lemon as LemonIcon,
  Orange as OrangeIcon,
  Grape as GrapeIcon,
  Cherry as CherryIcon,
  Blackberry as BlackberryIcon,
  Raspberry as RaspberryIcon,
  Blueberry as BlueberryIcon,
  Strawberry as StrawberryIcon,
  Honeydew as HoneydewIcon,
  Cantaloupe as CantaloupeIcon,
  Melon as MelonIcon,
  Watermelon as WatermelonIcon,
  Pumpkin as PumpkinIcon,
  Squash as SquashIcon,
  Yam as YamIcon3,
  SweetPotato as SweetPotatoIcon3,
  Potato as PotatoIcon3,
  Beet as BeetIcon,
  Radish as RadishIcon,
  Cabbage as CabbageIcon,
  Kale as KaleIcon,
  Spinach as SpinachIcon,
  Lettuce as LettuceIcon,
  Cucumber as CucumberIcon,
  Eggplant as EggplantIcon,
  Mushroom as MushroomIcon,
  Pepper as PepperIcon,
  Broccoli as BroccoliIcon,
  Corn as CornIcon,
  Tomato as TomatoIcon,
  Onion as OnionIcon3,
  FrenchFries as FrenchFriesIcon,
  Waffle as WaffleIcon,
  Pancake as PancakeIcon,
  Muffin as MuffinIcon,
  Donut as DonutIcon,
  Pretzel as PretzelIcon,
  Bagel as BagelIcon,
  Croissant as CroissantIcon,
  Bread as BreadIcon,
  Soup as SoupIcon,
  Salad as SaladIcon,
  Spaghetti as SpaghettiIcon,
  Ramen as RamenIcon,
  Sushi as SushiIcon,
  Burrito as BurritoIcon,
  Taco as TacoIcon,
  Burger as BurgerIcon,
  Sandwich as SandwichIcon,
  HotDog as HotDogIcon,
  Popcorn as PopcornIcon,
  Candy as CandyIcon,
  Lollipop as LollipopIcon,
  IceCream as IceCreamIcon,
  Cookie as CookieIcon,
  Cake as CakeIcon2,
  Balloon as BalloonIcon,
  Confetti as ConfettiIcon,
  PartyPopper as PartyPopperIcon,
  Gift as GiftIcon,
  Sparkles as SparklesIcon,
  Star as StarIcon2,
  Diamond as DiamondIcon,
  Gem as GemIcon,
  Crown as CrownIcon,
  Medal as MedalIcon,
  Trophy as TrophyIcon,
  Award as AwardIcon,
  ThumbsDown as ThumbsDownIcon,
  ThumbsUp as ThumbsUpIcon,
  Meh as MehIcon,
  Frown as FrownIcon,
  Smile as SmileIcon,
  Heart as HeartIcon,
  Cake as CakeIcon3,
  Pizza as PizzaIcon,
  Coffee as CoffeeIcon3,
  Carrot as CarrotIcon2,
  Apple as AppleIcon3,
  Leaf as LeafIcon,
  Flower as FlowerIcon,
  Bug as BugIcon,
  Bird as BirdIcon,
  Fish as FishIcon,
  Waves as WavesIcon,
  Mountain as MountainIcon,
  TreePine as TreePineIcon,
  Umbrella as UmbrellaIcon,
  Snowflake as SnowflakeIcon,
  Flame as FlameIcon,
  Droplets as DropletsIcon,
  Thermometer as ThermometerIcon,
  Wind as WindIcon,
  CloudSnow as CloudSnowIcon,
  CloudRain as CloudRainIcon,
  Moon as MoonIcon,
  Sun as SunIcon,
  PowerOff as PowerOffIcon,
  Power as PowerIcon,
  BatteryFull as BatteryFullIcon,
  BatteryLow as BatteryLowIcon,
  Battery as BatteryIcon,
  SignalLow as SignalLowIcon,
  SignalHigh as SignalHighIcon,
  Signal as SignalIcon,
  WifiOff as WifiOffIcon,
  Wifi as WifiIcon,
  VolumeX as VolumeXIcon,
  Volume2 as Volume2Icon,
  Speaker as SpeakerIcon,
  Headphones as HeadphonesIcon,
  Camera as CameraIcon,
  Mic as MicIcon,
  Music as MusicIcon,
  Video as VideoIcon,
  Image as ImageIcon,
  File as FileIcon,
  Folder as FolderIcon,
  Archive as ArchiveIcon,
  Package as PackageIcon,
  Box as BoxIcon,
  Layers as LayersIcon,
  Zap as ZapIcon2,
  Timer as TimerIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  MessageCircle as MessageCircleIcon,
  ExternalLink as ExternalLinkIcon,
  Copy as CopyIcon,
  Share as ShareIcon,
  Save as SaveIcon,
  RotateCcw as RotateCcwIcon,
  Minimize as MinimizeIcon,
  Maximize as MaximizeIcon,
  Minus as MinusIcon,
  Plus as PlusIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  Upload as UploadIcon,
  Download as DownloadIcon,
  Filter as FilterIcon,
  Search as SearchIcon2,
  Eye as EyeIcon,
  RefreshCw as RefreshCwIcon,
  Pause as PauseIcon,
  Play as PlayIcon,
  FileText as FileTextIcon,
  Wrench as WrenchIcon,
  Rocket as RocketIcon,
  Target as TargetIcon,
  TrendingUp as TrendingUpIcon,
  Activity as ActivityIcon,
  Network as NetworkIcon,
  Cpu as CpuIcon,
  Smartphone as SmartphoneIcon,
  Globe as GlobeIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Workflow as WorkflowIcon,
  Settings as SettingsIcon,
  BarChart3 as BarChart3Icon,
  DollarSign as DollarSignIcon,
  Clock as ClockIcon,
  Users as UsersIcon,
  Star as StarIcon3,
  ArrowRight as ArrowRightIcon,
  CheckCircle as CheckCircleIcon,
  AlertTriangle as AlertTriangleIcon,
  Monitor as MonitorIcon,
  Server as ServerIcon,
  GitBranch as GitBranchIcon,
  Code as CodeIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon3,
  Brain as BrainIcon
} from 'lucide-react';

export function AIAutonomousDevOpsPlatform() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Automation',
      description: 'Intelligent automation that learns from your infrastructure patterns and optimizes deployments automatically.',
      benefits: ['Reduces deployment time by 80%', 'Eliminates human errors', 'Self-healing infrastructure', 'Predictive scaling']
    },
    {
      icon: GitBranch,
      title: 'Intelligent CI/CD',
      description: 'Advanced continuous integration and deployment with AI-driven code analysis and automated testing.',
      benefits: ['Smart code review', 'Automated testing strategies', 'Intelligent rollback decisions', 'Performance optimization']
    },
    {
      icon: Shield,
      title: 'Security-First DevOps',
      description: 'Built-in security scanning, compliance monitoring, and threat detection throughout the development lifecycle.',
      benefits: ['Real-time vulnerability scanning', 'Compliance automation', 'Zero-trust deployment', 'Security policy enforcement']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics and machine learning to predict infrastructure needs and optimize resource allocation.',
      benefits: ['Cost optimization predictions', 'Performance bottleneck detection', 'Capacity planning', 'Anomaly detection']
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Management',
      description: 'Seamless management across AWS, Azure, GCP, and hybrid environments with intelligent workload distribution.',
      benefits: ['Cross-cloud orchestration', 'Cost optimization', 'Disaster recovery automation', 'Workload balancing']
    },
    {
      icon: Monitor,
      title: 'Real-Time Monitoring',
      description: 'Comprehensive monitoring with AI-driven alerting and automated incident response.',
      benefits: ['Intelligent alerting', 'Automated incident response', 'Performance insights', 'Root cause analysis']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 applications',
        'Basic AI automation',
        'Standard monitoring',
        'Email support',
        'Basic security scanning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 applications',
        'Advanced AI automation',
        'Comprehensive monitoring',
        'Priority support',
        'Advanced security features',
        'Multi-cloud support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited applications',
        'Full AI automation suite',
        'Enterprise monitoring',
        '24/7 dedicated support',
        'Custom security policies',
        'On-premise deployment',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Platform',
      description: 'Automated deployment and scaling for high-traffic e-commerce applications during peak seasons.',
      results: ['99.9% uptime during Black Friday', '50% reduction in deployment time', '30% cost savings on infrastructure']
    },
    {
      title: 'SaaS Application',
      description: 'Intelligent CI/CD pipeline with automated testing and security scanning for rapid feature delivery.',
      results: ['3x faster feature delivery', 'Zero security incidents', '95% test automation coverage']
    },
    {
      title: 'Financial Services',
      description: 'Compliance-focused DevOps with automated security scanning and audit trail generation.',
      results: ['100% compliance automation', 'Zero audit findings', '60% faster compliance reporting']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered DevOps Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Autonomous DevOps
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your development workflow with AI-driven automation, intelligent monitoring, and self-healing infrastructure. 
              Deploy faster, scale smarter, and maintain higher reliability with our autonomous DevOps platform. 
              <strong className="text-blue-400">Average market price: $2,000-5,000/month</strong> - Our solution provides 60% cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent DevOps Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform automates every aspect of your DevOps workflow, from code deployment to infrastructure management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your team's needs. All plans include our core AI automation features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 ${tier.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-gray-700'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600' 
                      : 'border border-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Real-World Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              See how leading companies are transforming their DevOps with our AI platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-400">
                      <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using our AI-powered DevOps platform to deploy faster, scale smarter, and maintain higher reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIAutonomousDevOpsPlatform;