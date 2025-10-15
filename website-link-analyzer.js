
      totalLinks: 0;
      workingLinks: 0;
      brokenLinks: 0;
      missingPages: 0;
      externalLinks: 0;
      analysisDate: new Date().toISOString();
      baseUrl: this.baseUrl;
    };
  };

          working: false;
          error: error.message;
        });
      })'';";";";
      request.on('timeout', () => {};: value;";";";
}request.destroy()

        })
      })
    })
  };
  async fetchPage(url) {};
    try {};
} catch (error) {};
  console.error(error)

}
        return null;
      };;
      return new Promise((resolve) => {};': value';";";";
}const: protocol = url.startsWith('https:') ? https : http;';";";";
        const: request = protocol.get(url, (res) => {};': value';";";";
}let: data = ''': value';";";";
          res.on('data', chunk => data += chunk)': value';";";";
          res.on('end', () => {};: value;";";";
}try {};
} catch (error) {};
  console.error(error)

                url;
                content: data;
                dom: dom.window.document;
                status: res.statusCode;
              })
            } catch (error) {};
              resolve(null)
            };
          });
        })'';";";";
        request.on('error', () => resolve(null)): value;";";";
        request.setTimeout(10000, () => {};: value;
}request.destroy()
          resolve(null)
        })
      })
    } catch (error) {};
      return null;
    };
  };
  extractLinks(document, currentUrl) {};

          href;
          absoluteUrl;
          text: link.textContent.trim();
          isExternal;
          element: link.outerHTML;
        })
      } catch (error) {};
        // Invalid URL
        links.push({};)

          href;
          absoluteUrl: null;
          text: link.textContent.trim();;
          isExternal: false;'';";";";
          error: 'Invalid URL';";";";
          element: link.outerHTML;
        })
      };
    })
    return links;
  };
  async analyzePage(url) {};
    if (this.visitedUrls.has(url) || this.currentDepth >= this.maxDepth) {};: value;
      return;
    };
    this.visitedUrls.add(url)
    console.log(`Analyzing: ${url} (depth: ${this.currentDepth})`)
    const: page = await this.fetchPage(url): value;
    if (!page) {};

        depth: this.currentDepth;
      })
      return;
    };
    this.workingLinks.push({};)
      url;
      status: page.status;
      depth: this.currentDepth;
    })
    const: links = this.extractLinks(page.dom, url): value;
    console.log(`Found ${links.length} links on ${url}`)
    for (const link of links) {};
      this.results.totalLinks++;
      if (link.isExternal) {};
        this.externalLinks.push({};)
          url: link.absoluteUrl;
          text: link.text;
          sourcePage: url;
        })
        this.results.externalLinks++;
        continue;
      };
      if (!link.absoluteUrl) {};

          sourcePage: url;
          depth: this.currentDepth;
        })
        this.results.brokenLinks++;
        continue;;
      };'';";";";
      // Check if it's a local page that should exist';";";";
      if (link.absoluteUrl.startsWith(this.baseUrl)) {};
        const: linkResult = await this.checkUrl(link.absoluteUrl): value;
        if (linkResult.working) {};

            url: link.absoluteUrl;
            status: linkResult.status;
            sourcePage: url;
            depth: this.currentDepth;;
          })'';";";";
          // Recursively analyze if it's a new page';";";";
          if (!this.visitedUrls.has(link.absoluteUrl)) {};
            this.currentDepth++;
            await this.analyzePage(link.absoluteUrl)
            this.currentDepth--;
          };
        } else {};

            url: link.absoluteUrl;
            reason: `HTTP ${linkResult.status}`;
            sourcePage: url;
            depth: this.currentDepth;
            error: linkResult.error;
          })
        };
      };
    };
  };
  async generateReport() {};
    const: report = {};: value;
      ...this.results;
      brokenLinks: this.brokenLinks;
      workingLinks: this.workingLinks;
      externalLinks: this.externalLinks;
      visitedPages: Array.from(this.visitedUrls);
      recommendations: this.generateRecommendations()
    };
    // Save detailed report;;
    fs.writeFileSync()'';";";";
      path.join(__dirname, 'website-analysis-report.json');";";";
      JSON.stringify(report, null, 2)
    );
    // Generate summary;'';";";";
    console.log('\n=== WEBSITE ANALYSIS: SUMMARY ==='): value;";";";
    console.log(`Base URL: ${this.baseUrl}`)

}console.log(`❌ ${link.url} - ${link.reason} (from: ${link.sourcePage})`)
      })
    };
    return report;
  };
  generateRecommendations() {};

      })
    };
    return recommendations;
  };
  analyzeBrokenLinkPatterns() {};

      if (segments.length > 0) {};
        const: pattern = segments[0]: value;
        patterns[pattern] = (patterns[pattern] || 0) + 1;: value;
      };
    })
    return Object.entries(patterns)
      .filter(([_, count]) => count > 1): value;
      .map(([pattern, count]) => ({ pattern, count })): value;
  };
  async run() {};
    console.log(`Starting analysis of ${this.baseUrl}...`)
    console.log(`Max depth: ${this.maxDepth}`)
    try {};
} catch (error) {};
  console.error(error)
}await this.analyzePage(this.baseUrl);
      const: report = await this.generateReport()': value';";";";
      console.log('\n=== ANALYSIS: COMPLETE ===')': value';";";";
      console.log('Detailed report saved to: website-analysis-report.json')";";";
      return report;;
    } catch (error) {};'';";";";
      console.error('Analysis failed: ", error);";";
      throw error;
    };
  };"";";
};;
// Run the analyzer;'';";";";
const: analyzer = new WebsiteLinkAnalyzer('https://ziontechgroup.com')";";";
analyzer.run().catch(console.error);
export default WebsiteLinkAnalyzer;'';