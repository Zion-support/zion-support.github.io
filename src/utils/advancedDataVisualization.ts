/**
 * Advanced Data Visualization Utilities
 * Comprehensive data visualization and charting utilities with real-time updates
 */

import {
  DataPoint,
  ChartData,
  StoredChart,
  VisualizationOptions,
} from '../types/comprehensive';

export interface ChartConfig {
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  colors: string[];
  animations: boolean;
  responsive: boolean;
  theme: 'light' | 'dark';
}

export class AdvancedDataVisualization {
  private config: ChartConfig;
  private container: HTMLElement | null = null;
  private charts: Map<
    string,
    {
      render: () => void;
      update: (data: DataPoint[]) => void;
      destroy: () => void;
      data?: ChartData;
      options?: VisualizationOptions;
      container?: HTMLElement;
    }
  > = new Map();
  private dataStreams: Map<string, DataPoint[]> = new Map();
  private updateIntervals: Map<string, NodeJS.Timeout> = new Map();

  constructor(config: Partial<ChartConfig> = {}) {
    this.config = {
      width: 800,
      height: 400,
      margin: { top: 20, right: 20, bottom: 40, left: 40 },
      colors: [
        '#3b82f6',
        '#ef4444',
        '#10b981',
        '#f59e0b',
        '#8b5cf6',
        '#06b6d4',
      ],
      animations: true,
      responsive: true,
      theme: 'light',
      ...config,
    };
  }

  public createLineChart(
    containerId: string,
    data: ChartData,
    options: VisualizationOptions = {},
  ): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.container = container;
    this.charts.set(containerId, {
      render: () => {},
      update: () => {},
      destroy: () => {},
      data,
      options,
      container,
    });

    this.renderLineChart(containerId);
  }

  public createBarChart(
    containerId: string,
    data: ChartData,
    options: VisualizationOptions = {},
  ): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.container = container;
    this.charts.set(containerId, {
      render: () => {},
      update: () => {},
      destroy: () => {},
      data,
      options,
      container,
    });

    this.renderBarChart(containerId);
  }

  public createPieChart(
    containerId: string,
    data: ChartData,
    options: VisualizationOptions = {},
  ): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.container = container;
    this.charts.set(containerId, {
      render: () => {},
      update: () => {},
      destroy: () => {},
      data,
      options,
      container,
    });

    this.renderPieChart(containerId);
  }

  public createScatterPlot(
    containerId: string,
    data: ChartData,
    options: VisualizationOptions = {},
  ): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.container = container;
    this.charts.set(containerId, {
      render: () => {},
      update: () => {},
      destroy: () => {},
      data,
      options,
      container,
    });

    this.renderScatterPlot(containerId);
  }

  public createAreaChart(
    containerId: string,
    data: ChartData,
    options: VisualizationOptions = {},
  ): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    this.container = container;
    this.charts.set(containerId, {
      render: () => {},
      update: () => {},
      destroy: () => {},
      data,
      options,
      container,
    });

    this.renderAreaChart(containerId);
  }

  private renderLineChart(containerId: string): void {
    const chart = this.charts.get(containerId);
    if (!chart) return;

    const { data, options, container } = chart as any;
    if (!data || !options || !container) return;

    const { width, height, margin, colors } = this.config;

    // Clear container
    if (container) container.innerHTML = '';

    // Create SVG
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    svg.style.border = '1px solid #e5e7eb';
    svg.style.borderRadius = '8px';

    // Calculate dimensions
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    // Create scales
    const xScale = this.createXScale(data.data, chartWidth);
    const yScale = this.createYScale(data.data, chartHeight);

    // Create line generator
    const line = this.createLineGenerator(xScale, yScale);

    // Create group for chart content
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${margin.left},${margin.top})`);

    // Add grid if enabled
    if (options.showGrid !== false) {
      this.addGrid(g, xScale, yScale, chartWidth, chartHeight);
    }

    // Add axes
    this.addAxes(g, xScale, yScale, chartWidth, chartHeight, options);

    // Add line
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', line(data.data));
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', data.color || colors[0] || '#3b82f6');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    if (this.config.animations) {
      path.style.opacity = '0';
      path.style.transition = 'opacity 0.5s ease-in-out';
      setTimeout(() => {
        path.style.opacity = '1';
      }, 100);
    }

    g.appendChild(path);

    // Add data points
    if (options.showDataLabels !== false) {
      this.addDataPoints(g, data.data, xScale, yScale);
    }

    svg.appendChild(g);
    container?.appendChild(svg);

    // Add title if provided
    if (options?.title || '') {
      this.addTitle(container!, options?.title || '', options?.subtitle);
    }
  }

  private renderBarChart(containerId: string): void {
    const chart = this.charts.get(containerId);
    if (!chart) return;

    const { data, options, container } = chart as any;
    if (!data || !options || !container) return;

    const { width, height, margin, colors } = this.config;

    if (container) container.innerHTML = '';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    svg.style.border = '1px solid #e5e7eb';
    svg.style.borderRadius = '8px';

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const xScale = this.createXScale(data.data, chartWidth);
    const yScale = this.createYScale(data.data, chartHeight);

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${margin.left},${margin.top})`);

    // Add grid
    if (options.showGrid !== false) {
      this.addGrid(g, xScale, yScale, chartWidth, chartHeight);
    }

    // Add axes
    this.addAxes(g, xScale, yScale, chartWidth, chartHeight, options);

    // Add bars
    data?.data?.forEach((point: DataPoint, index: number) => {
      const bar = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'rect',
      );
      const barWidth = (chartWidth / data.data.length) * 0.8;
      const barHeight = chartHeight - yScale(point.y);
      const x = xScale(point.x) - barWidth / 2;

      bar.setAttribute('x', x.toString());
      bar.setAttribute('y', yScale(point.y).toString());
      bar.setAttribute('width', barWidth.toString());
      bar.setAttribute('height', barHeight.toString());
      bar.setAttribute(
        'fill',
        point.color || data.color || colors[index % colors.length] || '#3b82f6',
      );
      bar.setAttribute('rx', '2');

      if (this.config.animations) {
        bar.style.opacity = '0';
        bar.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(() => {
          bar.style.opacity = '1';
        }, index * 50);
      }

      g.appendChild(bar);
    });

    svg.appendChild(g);
    container?.appendChild(svg);

    if (options?.title || '') {
      this.addTitle(container!, options?.title || '', options?.subtitle);
    }
  }

  private renderPieChart(containerId: string): void {
    const chart = this.charts.get(containerId);
    if (!chart) return;

    const { data, options, container } = chart as any;
    const { width, height, colors } = this.config;

    if (container) container.innerHTML = '';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    svg.style.border = '1px solid #e5e7eb';
    svg.style.borderRadius = '8px';

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40;

    const total =
      data?.data?.reduce((sum: number, point: DataPoint) => sum + point.y, 0) ||
      0;
    let currentAngle = 0;

    data?.data?.forEach((point: DataPoint, index: number) => {
      const sliceAngle = (point.y / total) * 2 * Math.PI;
      const startAngle = currentAngle;
      const endAngle = currentAngle + sliceAngle;

      const path = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path',
      );
      const startX = centerX + radius * Math.cos(startAngle);
      const startY = centerY + radius * Math.sin(startAngle);
      const endX = centerX + radius * Math.cos(endAngle);
      const endY = centerY + radius * Math.sin(endAngle);
      const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;

      const pathData = [
        `M ${centerX} ${centerY}`,
        `L ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
        'Z',
      ].join(' ');

      path.setAttribute('d', pathData);
      path.setAttribute('fill', point.color || colors[index % colors.length]);
      path.setAttribute('stroke', '#ffffff');
      path.setAttribute('stroke-width', '2');

      if (this.config.animations) {
        path.style.opacity = '0';
        path.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(() => {
          path.style.opacity = '1';
        }, index * 100);
      }

      svg.appendChild(path);
      currentAngle += sliceAngle;
    });

    container?.appendChild(svg);

    if (options?.title || '') {
      this.addTitle(container!, options?.title || '', options?.subtitle);
    }
  }

  private renderScatterPlot(containerId: string): void {
    const chart = this.charts.get(containerId);
    if (!chart) return;

    const { data, options, container } = chart as any;
    if (!data || !options || !container) return;

    const { width, height, margin, colors } = this.config;

    if (container) container.innerHTML = '';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    svg.style.border = '1px solid #e5e7eb';
    svg.style.borderRadius = '8px';

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const xScale = this.createXScale(data.data, chartWidth);
    const yScale = this.createYScale(data.data, chartHeight);

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${margin.left},${margin.top})`);

    // Add grid
    if (options.showGrid !== false) {
      this.addGrid(g, xScale, yScale, chartWidth, chartHeight);
    }

    // Add axes
    this.addAxes(g, xScale, yScale, chartWidth, chartHeight, options);

    // Add scatter points
    data?.data?.forEach((point: DataPoint, index: number) => {
      const circle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle',
      );
      circle.setAttribute('cx', xScale(point.x).toString());
      circle.setAttribute('cy', yScale(point.y).toString());
      circle.setAttribute('r', '4');
      circle.setAttribute(
        'fill',
        point.color || data.color || colors[0] || '#3b82f6',
      );
      circle.setAttribute('opacity', '0.7');

      if (this.config.animations) {
        circle.style.opacity = '0';
        circle.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(() => {
          circle.style.opacity = '0.7';
        }, index * 20);
      }

      g.appendChild(circle);
    });

    svg.appendChild(g);
    container?.appendChild(svg);

    if (options?.title || '') {
      this.addTitle(container!, options?.title || '', options?.subtitle);
    }
  }

  private renderAreaChart(containerId: string): void {
    const chart = this.charts.get(containerId);
    if (!chart) return;

    const { data, options, container } = chart as any;
    if (!data || !options || !container) return;

    const { width, height, margin, colors } = this.config;

    if (container) container.innerHTML = '';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', width.toString());
    svg.setAttribute('height', height.toString());
    svg.style.border = '1px solid #e5e7eb';
    svg.style.borderRadius = '8px';

    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;

    const xScale = this.createXScale(data.data, chartWidth);
    const yScale = this.createYScale(data.data, chartHeight);

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.setAttribute('transform', `translate(${margin.left},${margin.top})`);

    // Add grid
    if (options.showGrid !== false) {
      this.addGrid(g, xScale, yScale, chartWidth, chartHeight);
    }

    // Add axes
    this.addAxes(g, xScale, yScale, chartWidth, chartHeight, options);

    // Create area path
    const areaPath = this.createAreaGenerator(xScale, yScale, chartHeight);
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', areaPath(data.data));
    path.setAttribute('fill', data.color || colors[0] || '#3b82f6');
    path.setAttribute('opacity', '0.3');

    if (this.config.animations) {
      path.style.opacity = '0';
      path.style.transition = 'opacity 0.5s ease-in-out';
      setTimeout(() => {
        path.style.opacity = '0.3';
      }, 100);
    }

    g.appendChild(path);

    // Add line on top
    const line = this.createLineGenerator(xScale, yScale);
    const linePath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path',
    );
    linePath.setAttribute('d', line(data.data));
    linePath.setAttribute('fill', 'none');
    linePath.setAttribute('stroke', data.color || colors[0] || '#3b82f6');
    linePath.setAttribute('stroke-width', '2');

    g.appendChild(linePath);
    svg.appendChild(g);
    container?.appendChild(svg);

    if (options?.title || '') {
      this.addTitle(container!, options?.title || '', options?.subtitle);
    }
  }

  private createXScale(
    data: DataPoint[],
    width: number,
  ): (value: number | string) => number {
    const values = data.map(d => (typeof d.x === 'number' ? d.x : 0));
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;

    return (value: number | string) => {
      const numValue = typeof value === 'number' ? value : 0;
      return ((numValue - min) / range) * width;
    };
  }

  private createYScale(
    data: DataPoint[],
    height: number,
  ): (value: number) => number {
    const values = data.map(d => d.y);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;

    return (value: number) => {
      return height - ((value - min) / range) * height;
    };
  }

  private createLineGenerator(
    xScale: (value: number | string) => number,
    yScale: (value: number) => number,
  ): (data: DataPoint[]) => string {
    return (data: DataPoint[]) => {
      return data
        .map((point, index) => {
          const x = xScale(point.x);
          const y = yScale(point.y);
          return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        })
        .join(' ');
    };
  }

  private createAreaGenerator(
    xScale: (value: number | string) => number,
    yScale: (value: number) => number,
    height: number,
  ): (data: DataPoint[]) => string {
    return (data: DataPoint[]) => {
      const line = this.createLineGenerator(xScale, yScale);
      const linePath = line(data);
      const firstX = xScale(data[0].x);
      const lastX = xScale(data[data.length - 1].x);
      return `${linePath} L ${lastX} ${height} L ${firstX} ${height} Z`;
    };
  }

  private addGrid(
    g: SVGElement,
    xScale: (value: number | string) => number,
    yScale: (value: number) => number,
    width: number,
    height: number,
  ): void {
    // Add horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = (height / 5) * i;
      const line = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line',
      );
      line.setAttribute('x1', '0');
      line.setAttribute('y1', y.toString());
      line.setAttribute('x2', width.toString());
      line.setAttribute('y2', y.toString());
      line.setAttribute('stroke', '#e5e7eb');
      line.setAttribute('stroke-width', '1');
      line.setAttribute('opacity', '0.5');
      g.appendChild(line);
    }

    // Add vertical grid lines
    for (let i = 0; i <= 5; i++) {
      const x = (width / 5) * i;
      const line = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line',
      );
      line.setAttribute('x1', x.toString());
      line.setAttribute('y1', '0');
      line.setAttribute('x2', x.toString());
      line.setAttribute('y2', height.toString());
      line.setAttribute('stroke', '#e5e7eb');
      line.setAttribute('stroke-width', '1');
      line.setAttribute('opacity', '0.5');
      g.appendChild(line);
    }
  }

  private addAxes(
    g: SVGElement,
    xScale: (value: number | string) => number,
    yScale: (value: number) => number,
    width: number,
    height: number,
    options: VisualizationOptions,
  ): void {
    // X-axis
    const xAxis = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line',
    );
    xAxis.setAttribute('x1', '0');
    xAxis.setAttribute('y1', height.toString());
    xAxis.setAttribute('x2', width.toString());
    xAxis.setAttribute('y2', height.toString());
    xAxis.setAttribute('stroke', '#374151');
    xAxis.setAttribute('stroke-width', '2');
    g.appendChild(xAxis);

    // Y-axis
    const yAxis = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'line',
    );
    yAxis.setAttribute('x1', '0');
    yAxis.setAttribute('y1', '0');
    yAxis.setAttribute('x2', '0');
    yAxis.setAttribute('y2', height.toString());
    yAxis.setAttribute('stroke', '#374151');
    yAxis.setAttribute('stroke-width', '2');
    g.appendChild(yAxis);

    // Add axis labels
    if (options.xAxisLabel) {
      const xLabel = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text',
      );
      xLabel.setAttribute('x', (width / 2).toString());
      xLabel.setAttribute('y', (height + 35).toString());
      xLabel.setAttribute('text-anchor', 'middle');
      xLabel.setAttribute('font-size', '12');
      xLabel.setAttribute('fill', '#6b7280');
      xLabel.textContent = options.xAxisLabel;
      g.appendChild(xLabel);
    }

    if (options.yAxisLabel) {
      const yLabel = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text',
      );
      yLabel.setAttribute('x', '-20');
      yLabel.setAttribute('y', (height / 2).toString());
      yLabel.setAttribute('text-anchor', 'middle');
      yLabel.setAttribute('font-size', '12');
      yLabel.setAttribute('fill', '#6b7280');
      yLabel.setAttribute('transform', `rotate(-90, -20, ${height / 2})`);
      yLabel.textContent = options.yAxisLabel;
      g.appendChild(yLabel);
    }
  }

  private addDataPoints(
    g: SVGElement,
    data: DataPoint[],
    xScale: (value: number | string) => number,
    yScale: (value: number) => number,
  ): void {
    data.forEach((point, index) => {
      const circle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle',
      );
      circle.setAttribute('cx', xScale(point.x).toString());
      circle.setAttribute('cy', yScale(point.y).toString());
      circle.setAttribute('r', '3');
      circle.setAttribute('fill', point.color || '#3b82f6');
      circle.setAttribute('stroke', '#ffffff');
      circle.setAttribute('stroke-width', '2');

      if (this.config.animations) {
        circle.style.opacity = '0';
        circle.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(() => {
          circle.style.opacity = '1';
        }, index * 50);
      }

      g.appendChild(circle);
    });
  }

  private addTitle(
    container: HTMLElement,
    title: string,
    subtitle?: string,
  ): void {
    const titleDiv = document.createElement('div');
    titleDiv.style.cssText = `
      text-align: center;
      margin-bottom: 16px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `;

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    titleElement.style.cssText = `
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: #111827;
    `;

    titleDiv.appendChild(titleElement);

    if (subtitle) {
      const subtitleElement = document.createElement('p');
      subtitleElement.textContent = subtitle;
      subtitleElement.style.cssText = `
        margin: 4px 0 0 0;
        font-size: 14px;
        color: #6b7280;
      `;
      titleDiv.appendChild(subtitleElement);
    }

    container.insertBefore(titleDiv, container.firstChild);
  }

  public updateChart(containerId: string, newData: ChartData): void {
    const chart = this.charts.get(containerId);
    if (!chart) return;

    chart.data = newData as any;
    this.renderChart(containerId);
  }

  private renderChart(containerId: string): void {
    const chart = this.charts.get(containerId);
    if (!chart) return;

    switch ((chart as unknown as StoredChart)?.type) {
      case 'line':
        this.renderLineChart(containerId);
        break;
      case 'bar':
        this.renderBarChart(containerId);
        break;
      case 'pie':
        this.renderPieChart(containerId);
        break;
      case 'scatter':
        this.renderScatterPlot(containerId);
        break;
      case 'area':
        this.renderAreaChart(containerId);
        break;
    }
  }

  public startDataStream(
    streamId: string,
    updateInterval: number = 1000,
  ): void {
    const interval = setInterval(() => {
      this.updateDataStream();
    }, updateInterval);

    this.updateIntervals.set(streamId, interval);
  }

  public stopDataStream(streamId: string): void {
    const interval = this.updateIntervals.get(streamId);
    if (interval) {
      clearInterval(interval);
      this.updateIntervals.delete(streamId);
    }
  }

  private updateDataStream(): void {
    // This would be implemented to update real-time data streams
    // Implementation depends on the specific data source
  }

  public exportChart(
    containerId: string,
    format: 'svg' | 'png' | 'jpg' = 'svg',
  ): string {
    const chart = this.charts.get(containerId);
    if (!chart) return '';

    if (format === 'svg') {
      return chart?.container?.innerHTML || '';
    }

    // For PNG/JPG, would need to convert SVG to canvas
    return '';
  }

  public cleanup(): void {
    this.charts.clear();
    this.dataStreams.clear();
    this.updateIntervals.forEach(interval => clearInterval(interval));
    this.updateIntervals.clear();
  }
}

// Singleton instance
let dataVisualization: AdvancedDataVisualization | null = null;

export function getDataVisualization(
  config?: Partial<ChartConfig>,
): AdvancedDataVisualization {
  if (!dataVisualization) {
    dataVisualization = new AdvancedDataVisualization(config);
  }
  return dataVisualization;
}

// Convenience functions
export const charts = {
  line: (
    containerId: string,
    data: ChartData,
    options?: VisualizationOptions,
  ) => getDataVisualization().createLineChart(containerId, data, options),
  bar: (containerId: string, data: ChartData, options?: VisualizationOptions) =>
    getDataVisualization().createBarChart(containerId, data, options),
  pie: (containerId: string, data: ChartData, options?: VisualizationOptions) =>
    getDataVisualization().createPieChart(containerId, data, options),
  scatter: (
    containerId: string,
    data: ChartData,
    options?: VisualizationOptions,
  ) => getDataVisualization().createScatterPlot(containerId, data, options),
  area: (
    containerId: string,
    data: ChartData,
    options?: VisualizationOptions,
  ) => getDataVisualization().createAreaChart(containerId, data, options),
};
