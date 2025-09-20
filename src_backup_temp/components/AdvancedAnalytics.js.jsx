<<<<<<< HEAD
=======
import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
;
export function AdvancedAnalytics("props": "any) {;
    const [analyticsData", setAnalyticsData] = useState({;
        "visitors": "0",;
        "conversions": "0",;
        "revenue": "0",;
        "bounceRate": "0",;
        "avgSessionDuration": "0",;
        "topPages": "[]",;
        "trafficSources": "[]",;
        "deviceTypes": "[];
    "});
import React,{useState,useEffect} from &apos;react&apos;; import {motion} from &apos;framer-motion&apos;; export function AdvancedAnalytics($1) { const [analyticsData,setAnalyticsData] = useState({ visitors: 0,conversions: 0,revenue: 0,bounceRate: 0,avgSessionDuration: 0,topPages: [],trafficSources: [],deviceTypes: [] };); const [timeRange,setTimeRange] = useState(&apos;7d&apos;); const [isLoading,setIsLoading] = useState(true); useEffect(() => { const fetchData = async () => { setIsLoading(true); await new Promise(resolve => setTimeout(resolve,1500)); setAnalyticsData({ visitors: Math.floor(Math.random() * 10000) + 5000,conversions: Math.floor(Math.random() * 500) + 100,revenue: Math.floor(Math.random() * 50000) + 10000,bounceRate: Math.random() * 30 + 20,avgSessionDuration: Math.floor(Math.random() * 300) + 120,topPages: [ { page: &apos;/&apos;,views: Math.floor(Math.random() * 5000) + 2000 },{page: &apos;/services&apos;,views: Math.floor(Math.random() * 3000) + 1500},{page: &apos;/contact&apos;,views: Math.floor(Math.random() * 2000) + 1000},{page: &apos;/about&apos;,views: Math.floor(Math.random() * 1500) + 800},{page: &apos;/pricing&apos;,views: Math.floor(Math.random() * 1000) + 500} ],trafficSources: [ {source: &apos;Organic Search&apos;,percentage: 45},{source: &apos;Direct&apos;,percentage: 25},{source: &apos;Social Media&apos;,percentage: 20},{source: &apos;Referral&apos;,percentage: 10} ],deviceTypes: [ {device: &apos;Desktop&apos;,percentage: 60},{device: &apos;Mobile&apos;,percentage: 35},{device: &apos;Tablet&apos;,percentage: 5} ] }); setIsLoading(false)}; fetchData()},[timeRange]); const formatNumber = (props) => {if (num >= 1000000)&apos;; return (num / 1000000).toFixed(1) + &apos;M&apos;; if (num >= 1000)&apos;;&apos;; return (num / 1000).toFixed(1) + &apos;K&apos;; return num.toString()}; const formatCurrency = (props) => { return new Intl.NumberFormat(&apos;en-US&apos;,{ style: &apos;currency&apos;,currency: &apos;USD&apos; };).format(num)}; if (isLoading) {return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500&quot;></div> </div> )} return ( <div className=&quot;min-h-screen bg-white&quot;> <div className=&quot;text-center&quot;> <h2 className=&quot;text-3xl font-bold text-blue-600 mb-4&quot;> Advanced Analytics Dashboard </h2> <p className=&quot;text-gray-600 text-lg&quot;> Real-time insights and performance metrics </p> {} <divclassName=&quot;flex justify-center mt-4 space-x-2&quot;> {[&apos;1d&apos;,&apos;7d&apos;,&apos;30d&apos;,&apos;90d&apos;].map((range) => ( <button key={range} onClick={() => setTimeRange(range)} className={`px-4 py-2 rounded-lg transition-colors ${ timeRange === range&apos;;&apos;; ? &apos;bg-blue-500 text-white&apos; : &apos;bg-gray-100 text-gray-600 hover:bg-gray-200&apos; }`} > {range} </button> ))} </div> </div> {} <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6&quot;> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ delay: 0.1 }} className=&quot;p-6 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl&quot; > <div className=&quot;text-2xl font-bold text-blue-600&quot;> {formatNumber(analyticsData.visitors)} </div> <div className=&quot;text-gray-600 text-sm&quot;>Total Visitors</div> <div className=&quot;text-green-500 text-xs mt-2&quot;>+12.5% vs last period</div> </motion.div> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ delay: 0.2 }} className=&quot;p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl&quot; > <div className=&quot;text-2xl font-bold text-purple-600&quot;> {formatNumber(analyticsData.conversions)} </div> <div className=&quot;text-gray-600 text-sm&quot;>Conversions</div> <div className=&quot;text-green-500 text-xs mt-2&quot;>+8.3% vs last period</div> </motion.div> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ delay: 0.3 }} className=&quot;p-6 bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl&quot; > <div className=&quot;text-2xl font-bold text-green-600&quot;> {formatCurrency(analyticsData.revenue)} </div> <div className=&quot;text-gray-600 text-sm&quot;>Revenue</div> <div className=&quot;text-green-500 text-xs mt-2&quot;>+15.7% vs last period</div> </motion.div> <motion.div initial={{ opacity: 0,y: 20 }} animate={{ opacity: 1,y: 0 }} transition={{ delay: 0.4 }} className=&quot;p-6 bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-xl&quot; > <div className=&quot;text-2xl font-bold text-gray-700&quot;> {analyticsData.bounceRate.toFixed(1)}% </div> <div className=&quot;text-gray-600 text-sm&quot;>Bounce Rate</div> <div className=&quot;text-red-500 text-xs mt-2&quot;>-2.1% vs last period</div> </motion.div> </div> {} <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-6&quot;> {} <motion.div initial={{ opacity: 0,x: -20 }} animate={{ opacity: 1,x: 0 }} transition={{ delay: 0.5 }} className=&quot;p-6 bg-white border border-gray-200 rounded-xl shadow-sm&quot; > <h3 className=&quot;text-xl font-semibold text-gray-800 mb-4&quot;> Top Pages </h3> <div className=&quot;space-y-3&quot;> {analyticsData.topPages.map((page,index) => ( <div key={page.page} className=&quot;flex items-center justify-between&quot;> <divclassName=&quot;flex items-center space-x-3&quot;> <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${ index === 0 ? &apos;bg-yellow-500 text-black&apos; :&apos;;&apos;; index === 1 ? &apos;bg-gray-400 text-black&apos; :&apos;;&apos;; index === 2 ? &apos;bg-amber-600 text-white&apos; : &apos;bg-gray-200 text-gray-600&apos; }`}> {index + 1} </div> <span className=&quot;text-gray-700&quot;>{page.page}</span> </div> <span className=&quot;text-gray-600 font-medium&quot;>{formatNumber(page.views)}</span> </div> ))} </div> </motion.div> {} <motion.div initial={{ opacity: 0,x: 20 }} animate={{ opacity: 1,x: 0 }} transition={{ delay: 0.6 }} className=&quot;p-6 bg-white border border-gray-200 rounded-xl shadow-sm&quot; > <h3 className=&quot;text-xl font-semibold text-gray-800 mb-4&quot;> Traffic Sources </h3> <div className=&quot;space-y-3&quot;> {analyticsData.trafficSources.map((source,index) => ( <div key={source.source} className=&quot;flex items-center justify-between&quot;> <span className=&quot;text-gray-700&quot;>{source.source}</span> <div className=&quot;flex items-center space-x-2&quot;> <div className=&quot;w-20 bg-gray-200 rounded-full h-2&quot;> <div className=&quot;bg-blue-500 h-2 rounded-full&quot; style=&quot;{{{ width: `${source.percentage}}&quot;%` }} ></div> </div> <span className=&quot;text-gray-600 font-medium w-8&quot;>{source.percentage}%</span> </div> </div> ))} </div> </motion.div> </div> </div> )} export default AdvancedAnalytics; </motion> </motion> </motion>;&apos;;&apos;;
export function AdvancedAnalytics(props: any) {
    const [analyticsData, setAnalyticsData] = useState({
        visitors: 0,
        conversions: 0,
        revenue: 0,
        bounceRate: 0,
        avgSessionDuration: 0,
        topPages: [],
        trafficSources: [],
        deviceTypes: []
    }
    );
    const [timeRange, setTimeRange] = useState('7d');
    const [isLoading, setIsLoading] = useState(true);
;
    useEffect(() => {;
        // Simulate API call;
        const fetchData = async () => {;
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1500));
            setAnalyticsData({;
                "visitors": "Math.floor(Math.random() * 10000) + 5000",;
                "conversions": "Math.floor(Math.random() * 500) + 100",;
                "revenue": "Math.floor(Math.random() * 50000) + 10000",;
                "bounceRate": "Math.random() * 30 + 20",;
                "avgSessionDuration": "Math.floor(Math.random() * 300) + 120",;
                "topPages": "[;
                    { "page": '/'", "views": "Math.floor(Math.random() * 5000) + 2000 "},;
                    {"page": '/services', "views": "Math.floor(Math.random() * 3000) + 1500"},;
                    {"page": '/contact', "views": "Math.floor(Math.random() * 2000) + 1000"},;
                    {"page": '/about', "views": "Math.floor(Math.random() * 1500) + 800"},;
                    {"page": '/pricing', "views": "Math.floor(Math.random() * 1000) + 500"}
                ],;
                "trafficSources": "[;
                    {"source": 'Organic Search'", "percentage": "45"},;
                    {"source": 'Direct', "percentage": "25"},;
                    {"source": 'Social Media', "percentage": "20"},;
                    {"source": 'Referral', "percentage": "10"}
                ],;
                "deviceTypes": "[;
                    {"device": 'Desktop'", "percentage": "60"},;
                    {"device": 'Mobile', "percentage": "35"},;
                    {"device": 'Tablet', "percentage": "5"}
                ];
            });
            setAnalyticsData({
                visitors: Math.floor(Math.random() * 10000) + 5000,
                conversions: Math.floor(Math.random() * 500) + 100,
                revenue: Math.floor(Math.random() * 50000) + 10000,
                bounceRate: Math.random() * 30 + 20,
                avgSessionDuration: Math.floor(Math.random() * 300) + 120,
                topPages: [
                    { page: '/', views: Math.floor(Math.random() * 5000) + 2000 },
                    {page: '/services', views: Math.floor(Math.random() * 3000) + 1500},
                    {page: '/contact', views: Math.floor(Math.random() * 2000) + 1000},
                    {page: '/about', views: Math.floor(Math.random() * 1500) + 800},
                    {page: '/pricing', views: Math.floor(Math.random() * 1000) + 500}
                ],
                trafficSources: [
                    {source: 'Organic Search', percentage: 45},
                    {source: 'Direct', percentage: 25},
                    {source: 'Social Media', percentage: 20},
                    {source: 'Referral', percentage: 10}
                ],
                deviceTypes: [
                    {device: 'Desktop', percentage: 60},
                    {device: 'Mobile', percentage: 35},
                    {device: 'Tablet', percentage: 5}
                ]
            }
    );
            setIsLoading(false);
        };
        fetchData();
    }, [timeRange]);
;
    const formatNumber = ("props": "any) => {if (num >= 1000000);
            return (num / 1000000).toFixed(1) + 'M';
        if (num >= 1000);
            return (num / 1000).toFixed(1) + 'K';
        return num.toString();"};
;
    const formatCurrency = ("props": "any) => {;
        return new Intl.NumberFormat('en-US'", {;
            "style": 'currency',;
            "currency": 'USD';
        }).format(num);
    };
;
    if (isLoading) {return (;
            <div className="flex items-center justify-center h-64">;
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>;
            </div>;
        );}
;
    return (;
        <div className="space-y-6 p-6">;
            <div className="text-center">;
                <h2 className="text-3xl font-bold text-blue-600 mb-4">;
                    Advanced Analytics Dashboard;
                </h2>;
                <p className="text-gray-600 text-lg">;
                    Real-time insights and performance metrics;
                </p>;
                ;
    if (isLoading) {return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
    );}
    return (
        <div className="space-y-6 p-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-blue-600 mb-4">
                    Advanced Analytics Dashboard
                </h2>
                <p className="text-gray-600 text-lg">
                    Real-time insights and performance metrics
                </p>
                {/* Time Range Selector */}
                <div className="flex justify-center mt-4 space-x-2">;
                    {['1d', '7d', '30d', '90d'].map((range) => (;
                        <button ;
                            key={range} ;
                            onClick={() => setTimeRange(range)} ;
                            className={`px-4 py-2 rounded-lg transition-colors ${;
                                timeRange === range;
                                    ? 'bg-blue-500 text-white';
                                    : 'bg-gray-100 text-gray-600 "hover": "bg-gray-200';
                            "}`}
                        >;
                            {range}
                        </button>;
                    ))}
                </div>;
            </div>;
            {/* Key Metrics */}
            <div className="grid grid-cols-1 "md": "grid-cols-2 "lg":grid-cols-4 gap-6">;
                <motion.div ;
                    initial={{ "opacity": 0", "y": "20 "}} ;
                    animate={{ "opacity": "1", "y": "0 "}} ;
                    transition={{ "delay": "0.1 "}} ;
                    className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl";
                >;
                    <div className="text-2xl font-bold text-blue-600">;
                        {formatNumber(analyticsData.visitors)}
                    </div>;
                    <div className="text-gray-600 text-sm">Total Visitors</div>;
                    <div className="text-green-500 text-xs mt-2">+12.5% vs last period</div>;
                </motion.div>;
                <motion.div ;
                    initial={{ "opacity": "0", "y": "20 "}} ;
                    animate={{ "opacity": "1", "y": "0 "}} ;
                    transition={{ "delay": "0.2 "}} ;
                    className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl";
                >;
                    <div className="text-2xl font-bold text-purple-600">;
                        {formatNumber(analyticsData.conversions)}
                    </div>;
                    <div className="text-gray-600 text-sm">Conversions</div>;
                    <div className="text-green-500 text-xs mt-2">+8.3% vs last period</div>;
                </motion.div>;
                <motion.div ;
                    initial={{ "opacity": "0", "y": "20 "}} ;
                    animate={{ "opacity": "1", "y": "0 "}} ;
                    transition={{ "delay": "0.3 "}} ;
                    className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl";
                >;
                    <div className="text-2xl font-bold text-green-600">;
                        {formatCurrency(analyticsData.revenue)}
                    </div>;
                    <div className="text-gray-600 text-sm">Revenue</div>;
                    <div className="text-green-500 text-xs mt-2">+15.7% vs last period</div>;
                </motion.div>;
                <motion.div ;
                    initial={{ "opacity": "0", "y": "20 "}} ;
                    animate={{ "opacity": "1", "y": "0 "}} ;
                    transition={{ "delay": "0.4 "}} ;
                    className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 border border-gray-200 rounded-xl";
                >;
                    <div className="text-2xl font-bold text-gray-700">;
                        {analyticsData.bounceRate.toFixed(1)}%;
                    </div>;
                    <div className="text-gray-600 text-sm">Bounce Rate</div>;
                    <div className="text-red-500 text-xs mt-2">-2.1% vs last period</div>;
                </motion.div>;
            </div>;
            {/* Detailed Analytics */}
            <div className="grid grid-cols-1 "lg": "grid-cols-2 gap-6">;
                {/* Top Pages */"}
                <motion.div ;
                    initial={{ "opacity": "0", "x": "-20 "}} ;
                    animate={{ "opacity": "1", "x": "0 "}} ;
                    transition={{ "delay": "0.5 "}} ;
                    className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm";
                >;
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">;
                        Top Pages;
                    </h3>;
                    <div className="space-y-3">;
                        {analyticsData.topPages.map((page, index) => (;
                            <div key={page.page} className="flex items-center justify-between">;
                                <div className="flex items-center space-x-3">;
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${;
                                        index === 0 ? 'bg-yellow-500 text-black' : ";
                                        index === 1 ? 'bg-gray-400 text-black' :;
                                        index === 2 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600';
                                    "}`}>;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Pages */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.5 }} 
                    className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm"
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Top Pages
                    <div className="space-y-3">
                        {analyticsData.topPages.map((page, index) => (
                            <div key={page.page} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                        index === 0 ? 'bg-yellow-500 text-black' :
                                        index === 1 ? 'bg-gray-400 text-black' :
                                        index === 2 ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-600'
                                    }`}>
                                        {index + 1}
                                    </div>;
                                    <span className="text-gray-700">{page.page}</span>;
                                </div>;
                                <span className="text-gray-600 font-medium">{formatNumber(page.views)}</span>;
                            </div>;
                        ))}
                    </div>;
                </motion.div>;
                {/* Traffic Sources */}
                <motion.div ;
                    initial={{ "opacity": "0", "x": "20 "}} ;
                    animate={{ "opacity": "1", "x": "0 "}} ;
                    transition={{ "delay": "0.6 "}} ;
                    className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm";
                >;
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">;
                        Traffic Sources;
                    </h3>;
                    <div className="space-y-3">;
                        {analyticsData.trafficSources.map((source, index) => (;
                            <div key={source.source} className="flex items-center justify-between">;
                                <span className="text-gray-700">{source.source}</span>;
                                <div className="flex items-center space-x-2">;
                                    <div className="w-20 bg-gray-200 rounded-full h-2">;
                                        <div ;
                                            className="bg-blue-500 h-2 rounded-full" ;
                                            style="{{{ "width": "`${source.percentage"}}"%` }}
                                        ></div>;
                                    </div>;
                                    <span className="text-gray-600 font-medium w-8">{source.percentage}%</span>;
                                </div>;
                            </div>;
                <motion.div 
                    initial={{ opacity: 0, x: 20 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.6 }} 
                    className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm"
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Traffic Sources
                    <div className="space-y-3">
                        {analyticsData.trafficSources.map((source, index) => (
                            <div key={source.source} className="flex items-center justify-between">
                                <span className="text-gray-700">{source.source}</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-20 bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-blue-500 h-2 rounded-full" 
                                            style="{{{ width: `${source.percentage}}"%` }}
                                        ></div>
                                    </div>
                                    <span className="text-gray-600 font-medium w-8">{source.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>;
                </motion.div>;
            </div>;
        </div>;
    );
}
;
export default AdvancedAnalytics;
;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>;
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
