import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Clock, Activity } from 'lucide-react';

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

    const getStatusIcon = (status) => {
        switch (status) {
            case 'operational':
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case 'degraded':
                return <AlertCircle className="w-5 h-5 text-yellow-500" />;
            case 'outage':
                return <XCircle className="w-5 h-5 text-red-500" />;
            default:
                return <Clock className="w-5 h-5 text-gray-500" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'operational':
                return 'text-green-500';
            case 'degraded':
                return 'text-yellow-500';
            case 'outage':
                return 'text-red-500';
            default:
                return 'text-gray-500';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent mb-4">
                        System Status
                    </h1>
                    <p className="text-xl text-zion-slate-light mb-2">
                        Real-time monitoring of Zion Tech Group services
                    </p>
                    <p className="text-sm text-zion-slate-light">
                        Last updated: {currentTime}
                    </p>
                </motion.div>

                {/* Overall Status */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 mb-8"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Activity className="w-8 h-8 text-zion-cyan" />
                            <div>
                                <h2 className="text-2xl font-bold text-white">Overall System Status</h2>
                                <p className="text-zion-slate-light">All systems operational</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-green-500">99.97%</div>
                            <div className="text-sm text-zion-slate-light">Uptime</div>
                        </div>
                    </div>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                                {getStatusIcon(service.status)}
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-zion-slate-light">Status:</span>
                                    <span className={`text-sm font-medium ${getStatusColor(service.status)}`}>
                                        {service.status}
                                    </span>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-zion-slate-light">Uptime:</span>
                                    <span className="text-sm font-medium text-white">{service.uptime}</span>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-zion-slate-light">Response:</span>
                                    <span className="text-sm font-medium text-white">{service.responseTime}</span>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-zion-slate-light">Last Check:</span>
                                    <span className="text-sm font-medium text-white">{service.lastChecked}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 text-center"
                >
                    <p className="text-zion-slate-light mb-4">
                        For real-time updates and incident reports, follow us on our status page or contact support.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                            Contact Support
                        </button>
                        <button className="px-6 py-3 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-300">
                            View History
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Status;
