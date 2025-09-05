import React from 'react';
interface DataSyncProps {;
  "syncedData": "an y;
  "onNext": () => void;
  "onBack": () => void;
;
}
const DataSync: Reac t.FC<DataSyncProps> = ({ syncedData, onNext, onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      <h2 className="text-2xl font-bold mb-6">Data Synchronization</h2>
      <div className="grid grid-cols-1 md: gri d-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Key Metrics</h3>
          <div className="space-y-3">
            <div className="flex justify-between">';
              <span className="text-gray-600">Active Users (30d)</span>';';
              <span className="font-semibold">{syncedData?.activeUsers30d || 'N/A'}</span>
            </div>
            <div className="flex justify-between">';
              <span className="text-gray-600">GMV</span>';';
              <span className="font-semibold">{syncedData?.gmv || 'N/A'}</span>
            </div>
            <div className="flex justify-between">';
              <span className="text-gray-600">MRR</span>';';
              <span className="font-semibold">{syncedData?.mrr || 'N/A'}</span>
            </div>
            <div className="flex justify-between">';
              <span className="text-gray-600">YoY Growth</span>';';
              <span className="font-semibold">{syncedData?.yoyGrowth || 'N/A'}</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Project Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">';
              <span className="text-gray-600">Completed Projects</span>';';
              <span className="font-semibold">{syncedData?.totalCompletedProjects || 'N/A'}</span>
            </div>
            <div className="flex justify-between">';
              <span className="text-gray-600">Global Reach</span>';';
              <span className="font-semibold">{syncedData?.globalReach || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
        <div className="grid grid-cols-2 md: gri d-cols-4 gap-4">
          <div className="text-center">';
            <div className="text-2xl font-bold text-blue-600">';';
              {syncedData?.marketplaceConversionFunnel?.visitors?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Visitors</div>
          </div>
          <div className="text-center">';
            <div className="text-2xl font-bold text-green-600">';';
              {syncedData?.marketplaceConversionFunnel?.signups?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Signups</div>
          </div>
          <div className="text-center">';
            <div className="text-2xl font-bold text-yellow-600">';';
              {syncedData?.marketplaceConversionFunnel?.activeListings?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Active Listings</div>
          </div>
          <div className="text-center">';
            <div className="text-2xl font-bold text-purple-600">';';
              {syncedData?.marketplaceConversionFunnel?.completedTransactions?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Transactions</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold mb-4">Notable Clients</h3>
        <div className="grid grid-cols-1 md: gri d-cols-2 gap-4">
          {syncedData?.notableClients?.map((client: an y, index: number) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">{client.name}</span>
              <a 
                href={client.caseStudyUrl} 
                className="text-blue-600 hover: tex t-blue-800 text-sm"
              >
                View Case Study
              </a>
            </div>
          )) || (
            <div className="text-gray-500">No client data available    </div>
  );
}
        </div>
      </div>
      <div className="flex justify-between">
        <button
"}
;
const "DataSync": "React.FC<DataSyncProps> = ({ syncedData", onNext, onBack }) => {;
  return (;
    <div className="max-w-4xl mx-auto p-6">;
      <h2 className="text-2xl font-bold mb-6">Data Synchronization</h2>;
      <div className="grid grid-cols-1 "md": "gri d-cols-2 gap-6 mb-8">;
        <div className="bg-white p-6 rounded-lg border border-gray-200">;
          <h3 className="text-lg font-semibold mb-4">Key Metrics;
          <div className="space-y-3">;
            <div className="flex justify-between">;
              <span className="text-gray-600">Active Users (30d)</span>;
              <span className="font-semibold">{syncedData?.activeUsers30d || 'N/A'"}</span>;
            </div>;
            <div className="flex justify-between">;
              <span className="text-gray-600">GMV</span>;
              <span className="font-semibold">{syncedData?.gmv || 'N/A'}</span>;
            </div>;
            <div className="flex justify-between">;
              <span className="text-gray-600">MRR</span>;
              <span className="font-semibold">{syncedData?.mrr || 'N/A'}</span>;
            </div>;
            <div className="flex justify-between">;
              <span className="text-gray-600">YoY Growth</span>;
              <span className="font-semibold">{syncedData?.yoyGrowth || 'N/A'}</span>;
            </div>;
          </div>;
        </div>;
        <div className="bg-white p-6 rounded-lg border border-gray-200">;
          <h3 className="text-lg font-semibold mb-4">Project Stats;
          <div className="space-y-3">;
            <div className="flex justify-between">;
              <span className="text-gray-600">Completed Projects</span>;
              <span className="font-semibold">{syncedData?.totalCompletedProjects || 'N/A'}</span>;
            </div>;
            <div className="flex justify-between">;
              <span className="text-gray-600">Global Reach</span>;
              <span className="font-semibold">{syncedData?.globalReach || 'N/A'}</span>;
            </div>;
          </div>;
        </div>;
      </div>;
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">;
        <h3 className="text-lg font-semibold mb-4">Conversion Funnel;
        <div className="grid grid-cols-2 "md": "gri d-cols-4 gap-4">;
          <div className="text-center">;
            <div className="text-2xl font-bold text-blue-600">;
              {syncedData?.marketplaceConversionFunnel?.visitors?.toLocaleString() || 'N/A'"}
            </div>;
            <div className="text-sm text-gray-600">Visitors</div>;
          </div>;
          <div className="text-center">;
            <div className="text-2xl font-bold text-green-600">;
  "syncedData": an y;
  onNext: () => void;
  onBack: () => void;
}
const DataSync: React.FC<DataSyncProps> = ({ syncedData, onNext, onBack }) => {
const "DataSync": Reac t.FC<DataSyncProps> = ({ syncedData, onNext, onBack };) => {
  return (
    <div className="min-h-screen bg-white">
      <h2 className="text-2xl font-bold mb-6">Data Synchronization</h2>
      <div className="grid grid-cols-1 "md": gri d-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Key Metrics
          <div className="space-y-3">
            <divclassName="flex justify-between">
              <span className="text-gray-600">Active Users (30d)</span>';
              <span className="font-semibold">{syncedData?.activeUsers30d || 'N/A'}</span>
            </div>
            <divclassName="flex justify-between">
              <span className="text-gray-600">GMV</span>';
              <span className="font-semibold">{syncedData?.gmv || 'N/A'}</span>
            </div>
            <divclassName="flex justify-between">
              <span className="text-gray-600">MRR</span>';
              <span className="font-semibold">{syncedData?.mrr || 'N/A'}</span>
            </div>
            <divclassName="flex justify-between">
              <span className="text-gray-600">YoY Growth</span>';
              <span className="font-semibold">{syncedData?.yoyGrowth || 'N/A'}</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold mb-4">Project Stats
          <div className="space-y-3">
            <divclassName="flex justify-between">
              <span className="text-gray-600">Completed Projects</span>';
              <span className="font-semibold">{syncedData?.totalCompletedProjects || 'N/A'}</span>
            </div>
            <divclassName="flex justify-between">
              <span className="text-gray-600">Global Reach</span>';
              <span className="font-semibold">{syncedData?.globalReach || 'N/A'}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold mb-4">Conversion Funnel
        <div className="grid grid-cols-2 md: gri d-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">
        <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
        <div className="grid grid-cols-2 "md": gri d-cols-4 gap-4">
          <divclassName="text-center">
            <divclassName="text-2xl font-bold text-blue-600">';
              {syncedData?.marketplaceConversionFunnel?.visitors?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Visitors</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-2xl font-bold text-green-600">';
              {syncedData?.marketplaceConversionFunnel?.signups?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Signups</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-2xl font-bold text-yellow-600">';
              {syncedData?.marketplaceConversionFunnel?.activeListings?.toLocaleString() || 'N/A'}
            </div>
            <div className="text-sm text-gray-600">Active Listings</div>
          </div>
          <divclassName="text-center">
            <divclassName="text-2xl font-bold text-purple-600">';
              {syncedData?.marketplaceConversionFunnel?.completedTransactions?.toLocaleString() || 'N/A'}
            </div>;
            <div className="text-sm text-gray-600">Transactions</div>;
          </div>;
        </div>;
      </div>;
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">;
        <h3 className="text-lg font-semibold mb-4">Notable Clients;
        <div className="grid grid-cols-1 "md": "gri d-cols-2 gap-4">;
          {syncedData?.notableClients?.map(("client": an y", "index": "number) => (;
            <div key={index"} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">;
              <span className="font-medium">{client.name}</span>;
              <a;
                href={client.caseStudyUrl} ;
                className="text-blue-600 "hover": "tex t-blue-800 text-sm";
              >;
                View Case Study;
              </a>;
            </div>;
          )) || (;
            <div className="text-gray-500">No client data available</div>;
          )"}
        </div>;
      </div>;
      <div className="flex justify-between">;
        <button;
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 rounded-lg "hover": "b g-gray-50 transition-colors";
            </div>
            <div className="text-sm text-gray-600">Transactions</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
        <h3 className="text-lg font-semibold mb-4">Notable Clients
        <div className="grid grid-cols-1 md: gri d-cols-2 gap-4">
          {syncedData?.notableClients?.map((client: an y, index: number) => (
        <h3 className="text-lg font-semibold mb-4">Notable Clients</h3>
        <div className="grid grid-cols-1 "md": gri d-cols-2 gap-4">
          {syncedData?.notableClients?.map((client: an y, "index": number) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">{client.name}</span>
              <a
                href={client.caseStudyUrl}
                className="text-blue-600 "hover": tex t-blue-800 text-sm"
              >
                View Case Study
              </a>
            </div>
          )) || (
            <div className="text-gray-500">No client data available    </div>
  );
}
        </div>
      </div>
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-6 py-3 border border-gray-300 rounded-lg "hover": b g-gray-50 transition-colors";
        >;
          Back;
        </button>;
        <button;
          onClick={onNext"}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg "hover": "b g-blue-700 transition-colors";
          onClick={onNext}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover: b g-blue-700 transition-colors"
        >
          Continue to Slide Editor
        </button>
      </div>
    </div>
    );
          className="px-6 py-3 bg-blue-600 text-white rounded-lg "hover": b g-blue-700 transition-colors";
        >;
          Continue to Slide Editor;
        </button>;
      </div>;
    </div>;
  );
};
export default DataSync;';
</DataSyncProps>;';;';
;
export default DataSync;
</DataSyncProps>;
"};
;
export default DataSync;
</DataSyncProps>;
};
export default DataSync;';
</DataSyncProps>;';';
import React from 'react'; ; interface DataSyncProps {; syncedData: an y; onNext: () => void; onBack: () => void} const DataSync: Reac t.FC<DataSyncProps> = ({ syncedData,onNext,onBack };) => { return ( <div className="min-h-screen bg-white"> <h2 className="text-2xl font-bold mb-6">Data Synchronization</h2> <div className="grid grid-cols-1 md: gri d-cols-2 gap-6 mb-8"> <div className="bg-white p-6 rounded-lg border border-gray-200"> <h3 className="text-lg font-semibold mb-4">Key Metrics</h3> <div className="space-y-3"> <divclassName="flex justify-between"> <span className="text-gray-600">Active Users (30d)</span>'; <span className="font-semibold">{syncedData?.activeUsers30d || 'N/A'}</span> </div> <divclassName="flex justify-between"> <span className="text-gray-600">GMV</span>'; <span className="font-semibold">{syncedData?.gmv || 'N/A'}</span> </div> <divclassName="flex justify-between"> <span className="text-gray-600">MRR</span>'; <span className="font-semibold">{syncedData?.mrr || 'N/A'}</span> </div> <divclassName="flex justify-between"> <span className="text-gray-600">YoY Growth</span>'; <span className="font-semibold">{syncedData?.yoyGrowth || 'N/A'}</span> </div> </div> </div> <div className="bg-white p-6 rounded-lg border border-gray-200"> <h3 className="text-lg font-semibold mb-4">Project Stats</h3> <div className="space-y-3"> <divclassName="flex justify-between"> <span className="text-gray-600">Completed Projects</span>'; <span className="font-semibold">{syncedData?.totalCompletedProjects || 'N/A'}</span> </div> <divclassName="flex justify-between"> <span className="text-gray-600">Global Reach</span>'; <span className="font-semibold">{syncedData?.globalReach || 'N/A'}</span> </div> </div> </div> </div> <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8"> <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3> <div className="grid grid-cols-2 md: gri d-cols-4 gap-4"> <divclassName="text-center"> <divclassName="text-2xl font-bold text-blue-600">'; {syncedData?.marketplaceConversionFunnel?.visitors?.toLocaleString() || 'N/A'} </div> <div className="text-sm text-gray-600">Visitors</div> </div> <divclassName="text-center"> <divclassName="text-2xl font-bold text-green-600">'; {syncedData?.marketplaceConversionFunnel?.signups?.toLocaleString() || 'N/A'} </div> <div className="text-sm text-gray-600">Signups</div> </div> <divclassName="text-center"> <divclassName="text-2xl font-bold text-yellow-600">'; {syncedData?.marketplaceConversionFunnel?.activeListings?.toLocaleString() || 'N/A'} </div> <div className="text-sm text-gray-600">Active Listings</div> </div> <divclassName="text-center"> <divclassName="text-2xl font-bold text-purple-600">'; {syncedData?.marketplaceConversionFunnel?.completedTransactions?.toLocaleString() || 'N/A'} </div> <div className="text-sm text-gray-600">Transactions</div> </div> </div> </div> <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8"> <h3 className="text-lg font-semibold mb-4">Notable Clients</h3> <div className="grid grid-cols-1 md: gri d-cols-2 gap-4"> {syncedData?.notableClients?.map((client: an y,index: number) => ( <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"> <span className="font-medium">{client.name}</span> <a href={client.caseStudyUrl} className="text-blue-600 hover: tex t-blue-800 text-sm" > View Case Study </a> </div> )) || ( <div className="text-gray-500">No client data available </div> )} </div> </div> <div className="flex justify-between"> <button onClick={onBack} className="px-6 py-3 border border-gray-300 rounded-lg hover: b g-gray-50 transition-colors"; >; Back; </button>; <button; onClick={onNext} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover: b g-blue-700 transition-colors"; >; Continue to Slide Editor; </button>; </div>; </div>; )}; export default DataSync;'; </DataSyncProps>;';';