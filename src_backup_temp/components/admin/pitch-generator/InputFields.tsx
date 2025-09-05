import React from 'react';
interface InputFieldsProps {;
<<<<<<< HEAD
=======
  "inputData": "an y;
  "setInputData": ("data": an y) => void;
  "onNext": () => void;
;
"}
;
const "InputFields": "React.FC<InputFieldsProps> = ({ inputData", setInputData, onNext }) => {;
  const handleInputChange = ("props": "any) => {;
    setInputData({;
      ...inputData",;
      [field]: "value;
    "});
  };
;
  const handleSubmit = ("props": "any) => {;
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
  "inputData": an y;
  setInputData: (data: an y) => void;
  onNext: () => void;
}
<<<<<<< HEAD
=======
const InputFields: React.FC<InputFieldsProps> = ({ inputData, setInputData, onNext }) => {
  const handleInputChange = (props: any) => {
    setInputData({
      ...inputData,
      [field]: value
    }
    );
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
;
const "InputFields": React.FC<InputFieldsProps> = ({ inputData, setInputData, onNext };) => {;
  const handleInputChange = (props) => {;
    setInputData({;
      ...inputData,;
      [field]: value;
    });
  };
  const handleSubmit = (props) => {;
    e.preventDefault();
    if (inputData?.companyName && inputData?.industry) {;
      onNext();
    "}
  };
  return (
    <div className="min-h-screen bg-white">
      <h2 className="text-2xl font-bold mb-6">Company Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Company Name</label>
          <input';
            type="text";';
            value={inputData?.companyName || "}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
<<<<<<< HEAD
=======
            className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
            placeholder="Enter company name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Industry</label>';
          <select';';
            value={inputData?.industry || ''}';';
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
            required
          >
            <option value="">Select industry</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
            <option value="retail">Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Company Description</label>';
          <textarea';';
            value={inputData?.description || ''}';';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
;
  return (;
    <div className="max-w-2xl mx-auto p-6">;
      <h2 className="text-2xl font-bold mb-6">Company Information</h2>;
      <form onSubmit={handleSubmit} className="space-y-4">;
        <div>;
          <label className="block text-sm font-medium mb-2">Company Name</label>;
          <input;
            type="text";
            value={inputData?.companyName || ''}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent";
<<<<<<< HEAD
=======
            className="w-full p-3 border border-gray-300 rounded-lg "focus": "rin g-2 "focus": rin g-blue-500 "focus": borde r-transparent";
            placeholder="Enter company name";
            required;
          />;
        </div>;
        <div>;
          <label className="block text-sm font-medium mb-2">Industry</label>;
          <select;
            value={inputData?.industry || ''"}
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg "focus": "rin g-2 "focus": rin g-blue-500 "focus": borde r-transparent";
            required;
          >;
            <option value="">Select industry</option>;
            <option value="technology">Technology</option>;
            <option value="healthcare">Healthcare</option>;
            <option value="finance">Finance</option>;
            <option value="education">Education</option>;
            <option value="retail">Retail</option>;
            <option value="manufacturing">Manufacturing</option>;
            <option value="other">Other</option>;
          </select>;
        </div>;
        <div>;
          <label className="block text-sm font-medium mb-2">Company Description</label>;
          <textarea;
            value={inputData?.description || ''}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent";
            rows={4}
            placeholder="Brief description of your company"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Target Audience</label>
          <input';
            type="text"';';
            value={inputData?.targetAudience || ''}';';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
            value={inputData?.description || ''"}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg "focus": "rin g-2 "focus": rin g-blue-500 "focus": borde r-transparent";
            rows={4"}
            placeholder="Brief description of your company";
          />;
        </div>;
        <div>;
          <label className="block text-sm font-medium mb-2">Target Audience</label>;
          <input;
            type="text";
            value={inputData?.targetAudience || ''}
            onChange={(e) => handleInputChange('targetAudience', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg "focus": "rin g-2 "focus": rin g-blue-500 "focus": borde r-transparent";
            placeholder="e.g.", Small businesses, Enterprise clients";
            className="w-full p-3 border border-gray-300 rounded-lg "focus": rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
            placeholder="Enter company name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Industry</label>
          <select';';
            value={inputData?.industry || "}
            onChange={(e) => handleInputChange('industry', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg "focus": rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
            required
          >
            <option value=">Select industry</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="education">Education</option>
            <option value="retail">Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Company Description</label>
          <textarea';';
            value={inputData?.description || "}
            onChange={(e) => handleInputChange('description', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg "focus": rin g-2 focus: rin g-blue-500 focus: borde r-transparent";
            rows={4}
            placeholder="Brief description of your company"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Target Audience</label>
          <input';
            type="text";';
            value={inputData?.targetAudience || "}
            onChange={(e) => handleInputChange('targetAudience', e.target.value)}
<<<<<<< HEAD
=======
            className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"
            placeholder="e.g., Small businesses, Enterprise clients"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover: b g-blue-700 transition-colors"
        >
          Continue to Data Sync
        </button>
      </form>
    </div>
    );
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
            className="w-full p-3 border border-gray-300 rounded-lg "focus": rin g-2 focus: rin g-blue-500 focus: borde r-transparent";
            placeholder="e.g., Small businesses, Enterprise clients";
          />;
        </div>;
        <button;
          type="submit";
<<<<<<< HEAD
=======
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg "hover": "b g-blue-700 transition-colors";
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg "hover": b g-blue-700 transition-colors";
        >;
          Continue to Data Sync;
        </button>;
      </form>;
    </div>;
  );
<<<<<<< HEAD
};
export default InputFields;
=======
"};
;
};
export default InputFields;
</textarea>';
</InputFieldsProps>;';;';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
</textarea>;
</InputFieldsProps>;
</textarea>
</InputFieldsProps>;';';
<<<<<<< HEAD
import React from 'react'; ; interface InputFieldsProps {; inputData: an y; setInputData: (data: an y) => void; onNext: () => void} ; const InputFields: React.FC<InputFieldsProps> = ({ inputData,setInputData,onNext };) => {; const handleInputChange = (props) => {; setInputData({; ...inputData,; [field]: value})}; ; const handleSubmit = (props) => {; e.preventDefault(); if (inputData?.companyName && inputData?.industry) {; onNext()} }; return ( <div className="min-h-screen bg-white"> <h2 className="text-2xl font-bold mb-6">Company Information</h2> <form onSubmit={handleSubmit} className="space-y-4"> <div> <label className="block text-sm font-medium mb-2">Company Name</label> <input'; type="text";'; value={inputData?.companyName || "} onChange={(e) => handleInputChange('companyName',e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter company name" required /> </div> <div> <label className="block text-sm font-medium mb-2">Industry</label> <select';'; value={inputData?.industry || "} onChange={(e) => handleInputChange('industry',e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" required > <option value=">Select industry</option> <option value="technology">Technology</option> <option value="healthcare">Healthcare</option> <option value="finance">Finance</option> <option value="education">Education</option> <option value="retail">Retail</option> <option value="manufacturing">Manufacturing</option> <option value="other">Other</option> </select> </div> <div> <label className="block text-sm font-medium mb-2">Company Description</label> <textarea';'; value={inputData?.description || "} onChange={(e) => handleInputChange('description',e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"; rows={4} placeholder="Brief description of your company" /> </div> <div> <label className="block text-sm font-medium mb-2">Target Audience</label> <input'; type="text";'; value={inputData?.targetAudience || "} onChange={(e) => handleInputChange('targetAudience',e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"; placeholder="e.g.,Small businesses,Enterprise clients"; />; </div>; <button; type="submit"; className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover: b g-blue-700 transition-colors"; >; Continue to Data Sync; </button>; </form>; </div>; )}; ; export default InputFields; </textarea> </InputFieldsProps>;';';
=======
import React from 'react'; ; interface InputFieldsProps {; inputData: an y; setInputData: (data: an y) => void; onNext: () => void} ; const InputFields: React.FC<InputFieldsProps> = ({ inputData,setInputData,onNext };) => {; const handleInputChange = (props) => {; setInputData({; ...inputData,; [field]: value})}; ; const handleSubmit = (props) => {; e.preventDefault(); if (inputData?.companyName && inputData?.industry) {; onNext()} }; return ( <div className="min-h-screen bg-white"> <h2 className="text-2xl font-bold mb-6">Company Information</h2> <form onSubmit={handleSubmit} className="space-y-4"> <div> <label className="block text-sm font-medium mb-2">Company Name</label> <input'; type="text";'; value={inputData?.companyName || "} onChange={(e) => handleInputChange('companyName',e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" placeholder="Enter company name" required /> </div> <div> <label className="block text-sm font-medium mb-2">Industry</label> <select';'; value={inputData?.industry || "} onChange={(e) => handleInputChange('industry',e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent" required > <option value=">Select industry</option> <option value="technology">Technology</option> <option value="healthcare">Healthcare</option> <option value="finance">Finance</option> <option value="education">Education</option> <option value="retail">Retail</option> <option value="manufacturing">Manufacturing</option> <option value="other">Other</option> </select> </div> <div> <label className="block text-sm font-medium mb-2">Company Description</label> <textarea';'; value={inputData?.description || "} onChange={(e) => handleInputChange('description',e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"; rows={4} placeholder="Brief description of your company" /> </div> <div> <label className="block text-sm font-medium mb-2">Target Audience</label> <input'; type="text";'; value={inputData?.targetAudience || "} onChange={(e) => handleInputChange('targetAudience',e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent"; placeholder="e.g.,Small businesses,Enterprise clients"; />; </div>; <button; type="submit"; className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover: b g-blue-700 transition-colors"; >; Continue to Data Sync; </button>; </form>; </div>; )}; ; export default InputFields; </textarea> </InputFieldsProps>;';';
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
