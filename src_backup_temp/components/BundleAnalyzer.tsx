import React,{ useEffect,useState } from 'react'; interface BundleInfo { "totalSize": "number; "jsSize": number; "cssSize": number; "imageSize": number"} const "BundleAnalyzer": "React.FC = () => { const [bundleInfo",setBundleInfo] = useState<BundleInfo>({ "totalSize": "0","jsSize": "0","cssSize": "0","imageSize": "0 "}); useEffect(() => { const analyzeBundle = () => { setBundleInfo({ "totalSize": "1024 * 1024","jsSize": "800 * 1024","cssSize": "200 * 1024","imageSize": "24 * 1024 "})}; analyzeBundle()},[]); const formatBytes = ("bytes": "number) => { if (bytes === 0) return '0 Bytes'; const k = 1024; const sizes = ['Bytes'",'KB','MB','GB']; const i = Math.floor(Math.log(bytes) / Math.log(k)); return parseFloat((bytes / Math.pow(k,i)).toFixed(2)) + ' ' + sizes[i]}; return ( <div className="bg-white p-6 rounded-lg shadow-lg"> <h3 className="text-xl font-bold mb-4">Bundle Analysis</h3> <div className="space-y-4"> <div className="flex justify-between items-center p-3 bg-gray-50 rounded"> <span className="font-medium">Total Bundle Size</span> <span className="text-lg font-bold text-blue-600"> {formatBytes(bundleInfo.totalSize)} </span> </div> <div className="space-y-2"> <div className="flex justify-between items-center p-2 bg-blue-50 rounded"> <span>JavaScript</span> <span className="font-medium">{formatBytes(bundleInfo.jsSize)}</span> </div> <div className="flex justify-between items-center p-2 bg-green-50 rounded"> <span>CSS</span> <span className="font-medium">{formatBytes(bundleInfo.cssSize)}</span> </div> <div className="flex justify-between items-center p-2 bg-purple-50 rounded"> <span>Images</span> <span className="font-medium">{formatBytes(bundleInfo.imageSize)}</span> </div> </div> </div> </div> )}; export default BundleAnalyzer;
import React, { useEffect, useState } from 'react';
interface BundleInfo {
  totalSize: number;
  jsSize: number;
  cssSize: number;
  imageSize: number;
}
const BundleAnalyzer: React.FC = () => {
  const [bundleInfo, setBundleInfo] = useState<BundleInfo>({
    totalSize: 0,
    jsSize: 0,
    cssSize: 0,
    imageSize: 0
  }
    );
  useEffect(() => {
    // Simulate bundle analysis
    const analyzeBundle = () => {
      // In a real implementation, this would analyze the actual bundle
      setBundleInfo({
        totalSize: 1024 * 1024, // 1MB
        jsSize: 800 * 1024,      // 800KB
        cssSize: 200 * 1024,     // 200KB
        imageSize: 24 * 1024     // 24KB
      }
    );
    };
    analyzeBundle();
  }, []);
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Bundle Analysis
      <div className="space-y-4">
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
          <span className="font-medium">Total Bundle Size</span>
          <span className="text-lg font-bold text-blue-600">
            {formatBytes(bundleInfo.totalSize)}
          </span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
            <span>JavaScript</span>
            <span className="font-medium">{formatBytes(bundleInfo.jsSize)}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-green-50 rounded">
            <span>CSS</span>
            <span className="font-medium">{formatBytes(bundleInfo.cssSize)}</span>
          </div>
          <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
            <span>Images</span>
            <span className="font-medium">{formatBytes(bundleInfo.imageSize)}</span>
          </div>
        </div>
      </div>
    </div>
    );
};
export default BundleAnalyzer;
import React,{ useEffect,useState } from 'react'; interface BundleInfo { totalSize: number; jsSize: number; cssSize: number; imageSize: number} const BundleAnalyzer: React.FC = () => { const [bundleInfo,setBundleInfo] = useState<BundleInfo>({ totalSize: 0,jsSize: 0,cssSize: 0,imageSize: 0 }); useEffect(() => { const analyzeBundle = () => { setBundleInfo({ totalSize: 1024 * 1024,jsSize: 800 * 1024,cssSize: 200 * 1024,imageSize: 24 * 1024 })}; analyzeBundle()},[]); const formatBytes = (bytes: number) => { if (bytes === 0) return '0 Bytes'; const k = 1024; const sizes = ['Bytes','KB','MB','GB']; const i = Math.floor(Math.log(bytes) / Math.log(k)); return parseFloat((bytes / Math.pow(k,i)).toFixed(2)) + ' ' + sizes[i]}; return ( <div className="bg-white p-6 rounded-lg shadow-lg"> <h3 className="text-xl font-bold mb-4">Bundle Analysis</h3> <div className="space-y-4"> <div className="flex justify-between items-center p-3 bg-gray-50 rounded"> <span className="font-medium">Total Bundle Size</span> <span className="text-lg font-bold text-blue-600"> {formatBytes(bundleInfo.totalSize)} </span> </div> <div className="space-y-2"> <div className="flex justify-between items-center p-2 bg-blue-50 rounded"> <span>JavaScript</span> <span className="font-medium">{formatBytes(bundleInfo.jsSize)}</span> </div> <div className="flex justify-between items-center p-2 bg-green-50 rounded"> <span>CSS</span> <span className="font-medium">{formatBytes(bundleInfo.cssSize)}</span> </div> <div className="flex justify-between items-center p-2 bg-purple-50 rounded"> <span>Images</span> <span className="font-medium">{formatBytes(bundleInfo.imageSize)}</span> </div> </div> </div> </div> )}; export default BundleAnalyzer;