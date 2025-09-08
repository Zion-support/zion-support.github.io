import React from "react";
const News = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl mb-6">
                <Newspaper className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed about the latest developments in AI, quantum computing, cloud technology, and comp updates from Zion Tech Group.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {" "}
        <div className="text-center mb-12">
          {" "}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {" "}
            News & Updates{" "}
          </h1>{" "}
          <p className="text-xl text-gray-600">
            {" "}
            Stay informed with the latest news and updates from our team.{" "}
          </p>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              New AI Solutions Launch
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              We're excited to announce our latest AI-powered solutions for
              businesses.
            </p>{" "}
            <span className="text-sm text-blue-600">Read More</span>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Security Update
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Important security updates and best practices for protecting your
              data.
            </p>{" "}
            <span className="text-sm text-blue-600">Read More</span>{" "}
          </div>{" "}
          <div className="bg-white p-6 rounded-lg shadow-md">
            {" "}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Company Milestone
            </h3>{" "}
            <p className="text-gray-600 mb-4">
              Celebrating another year of growth and innovation in technology
              solutions.
            </p>{" "}
            <span className="text-sm text-blue-600">Read More</span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default News;
