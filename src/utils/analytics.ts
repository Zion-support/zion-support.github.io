// Analytics utilities
export const analytics = {
  track: (event: string, data: any) => {
    console.log('Analytics - Track:', { event, data });
  },
  page: (url: string, title: string) => {
    console.log('Analytics - Page:', { url, title });
  },
  identify: (userId: string, traits: any) => {
    console.log('Analytics - Identify:', { userId, traits });
  }
};