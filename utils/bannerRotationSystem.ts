/**
 * Banner Rotation System Utility
 */
export interface RotationConfig {
  interval: number;
  randomize: boolean;
  categories: string[];
}

export class BannerRotationSystem {
  private config: RotationConfig;
  private currentIndex = 0;
  private intervalId: NodeJS.Timeout | null = null;

  constructor(config: RotationConfig) {
    this.config = config;
  }

  start(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }

    this.intervalId = setInterval(() => {
      this.rotate();
    }, this.config.interval);
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private rotate(): void {
    // Implementation for banner rotation
    this.currentIndex = this.config.randomize 
      ? Math.floor(Math.random() * this.config.categories.length)
      : (this.currentIndex + 1) % this.config.categories.length;
  }

  getCurrentCategory(): string {
    return this.config.categories[this.currentIndex] || '';
  }
}

export const bannerRotationSystem = new BannerRotationSystem({
  interval: 5000,
  randomize: false,
  categories: ['default']
});

export default bannerRotationSystem;
