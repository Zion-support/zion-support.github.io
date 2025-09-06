export default function analytics() {
  // Analytics functionality would go here
  return {
    track: (event: string, data: any) => {
      console.log('Analytics event:', event, data);
    }
  };
}