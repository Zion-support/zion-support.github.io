const Status = () => {
    const currentTime = new Date().toLocaleString();
    const services = [
        {
            name: 'Website',
            status: 'operational',
            uptime: '99.99%',
            responseTime: '45ms',
            lastChecked: '2 minutes ago'
        },
        {
            name: 'API Services',
            status: 'operational',
            uptime: '99.95%',
            responseTime: '120ms',
            lastChecked: '1 minute ago'
        },
        {
            name: 'Database',
            status: 'operational',
            uptime: '99.98%',
            responseTime: '15ms',
            lastChecked: '30 seconds ago'
        },
        {
            name: 'Authentication',
            status: 'operational',
            uptime: '99.97%',
            responseTime: '85ms',
            lastChecked: '1 minute ago'
        },
        {
            name: 'File Storage',
            status: 'operational',
            uptime: '99.96%',
            responseTime: '200ms',
            lastChecked: '2 minutes ago'
        },
        {
            name: 'Email Services',
            status: 'operational',
            uptime: '99.94%',
            responseTime: '150ms',
            lastChecked: '1 minute ago'
        }
    ];
};
export {};
