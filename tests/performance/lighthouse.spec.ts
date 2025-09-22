await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    expect(loadTime).toBeLessThan(3000);
  });
'
  test('LCP is under 2.5 seconds', async ({ page }) => {'
    await page.goto('/');
    const lcp = await page.evaluate(() => {}
      return new Promise((resolve) => {}
        new PerformanceObserver((list) => {}
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          resolve(lastEntry.startTime);'
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      });
    });
    expect(lcp).toBeLessThan(2500);
  });
'
  test('FID is under 100ms', async ({ page }) => {'
    await page.goto('/');
    const fid = await page.evaluate(() => {}
      return new Promise((resolve) => {}
        new PerformanceObserver((list) => {}
          const entries = list.getEntries();
          const firstEntry = entries[0];
          resolve(firstEntry.processingStart - firstEntry.startTime);'
        }).observe({ entryTypes: ['first-input'] });
      });
    });
    expect(fid).toBeLessThan(100);
  });
'
  test('CLS is under 0.1', async ({ page }) => {'
    await page.goto('/');
    const cls = await page.evaluate(() => {}
      return new Promise((resolve) => {}
        let clsValue = 0;
        new PerformanceObserver((list) => {}
          for (const entry of list.getEntries()) {}
            if (!entry.hadRecentInput) {}
              clsValue += entry.value;
            }
          }
          resolve(clsValue);'
        }).observe({ entryTypes: ['layout-shift'] });
      });
    });
    expect(cls).toBeLessThan(0.1);
  });
});
