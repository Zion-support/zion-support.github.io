/**
  width: number;
  height: number;
  margin: {
    top: number;
    right: number;
    bottom: number;
  };
  colors: string[];
  animations: boolean;
  responsive: boolean;
    {
      render: () => void;
      update: (data: DataPoint[]) => void;
      destroy: () = > void;
      data?: ChartData;
      options?: VisualizationOptions;
    });

    this.renderLineChart(containerId);
  }

    });

    this.renderBarChart(containerId);
  }

    });

    this.renderPieChart(containerId);
  }

    });

    this.renderScatterPlot(containerId);
  }

    });

    this.renderAreaChart(containerId);
  }

    }

    g.appendChild(path);

      }

      g.appendChild(bar);
    });

    svg.appendChild(g);
    container?.appendChild(svg);

    if (options?.title || '') {
      }

      svg.appendChild(path);
      currentAngle += sliceAngle;
    });

    container?.appendChild(svg);

    if (options?.title || '') {
      }

      g.appendChild(circle);
    });

    svg.appendChild(g);
    container?.appendChild(svg);

    if (options?.title || '') {
    }

    g.appendChild(path);


    g.appendChild(linePath);
    svg.appendChild(g);
    container?.appendChild(svg);

    if (options?.title || '') {
        })
        .join(' ');
    };
  }

      g.appendChild(line);
    }
  }

      }

      g.appendChild(circle);
    });
  }

      margin: 0; font-size: 18px;
      font-weight: 600;
      color: #111827;
    `;

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
      case 'area' : this.renderAreaChart(containerId);
  };
