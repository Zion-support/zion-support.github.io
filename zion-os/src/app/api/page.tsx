>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function APIPage() {;
  return (;


    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">;
      <div className="max-w-6xl mx-auto">;
<<<<<<< HEAD
              <h3 className="text-xl font-semibold mb-4">Create a Digital Economy</h3>;
              <div className="bg-gray-900/50 rounded-lg p-4">;
                <div className="text-sm text-gray-400 mb-2">Node.js</div>;
                <pre className="text-sm text-gray-300 overflow-x-auto">;
{`const { ZionOS } = require('@zion-os/sdk');
const client = new ZionOS('YOUR_API_KEY');
const economy = await client.economies.create({name: 'My Digital Economy';
  description: 'A sovereign digital economy';
  features: ['marketplacegovernancetokens'];
<<<<<<< HEAD
=======
=======
======={`const { ZionOS } = require('@zion-os/sdk'),;
const client = new ZionOS('YOUR_API_KEY'),;
const economy = await client.economies.create({;
  name: 'My Digital Economy',;
  description: 'A sovereign digital economy',;
  features: ['marketplacegovernancetokens'],;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662  blockchain: 'ethereum';
});
// // // console.log ('Economy created:', economy.id), `}
                </pre>;
              </div>;
            </div>;
            <div className="card">;
              <h3 className="text - xl font - semibold mb - 4">Deploy an Economy</h3>;
              <div className="bg - gray - 900 / 50 rounded - lg p - 4">;
                <div className="text - sm text - gray - 400 mb - 2">Python</div>;
                <pre className="text - sm text - gray - 300 overflow - x-auto">;
{`from zion_os import ZionOS;
client = ZionOS ('YOUR_API_KEY');
# Deploy the economy;
deployment = client.economies.deploy ('economy_id');
# Wait for deployment to complete;
deployment.wait_for_completion ();
print (f"Economy deployed at: {deployment.url}")`}
                </pre>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Rate Limits & Authentication */}
        <div className="mb - 12">;
          <h2 className="text - 3xl font - bold mb - 8 text - center">Rate Limits & Authentication</h2>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 6">;
            <div className="card">;
              <h3 className="text - xl font - semibold mb - 4">Rate Limits</h3>;
              <div className="space - y-3 text - gray - 300">;
                <p><strong > Free Tier:</strong> 1, 000 requests / hour</p>;
                <p><strong > Pro Tier:</strong> 10, 000 requests / hour</p>;
                <p><strong > Enterprise:</strong> Custom limits</p>;
                <p className="text - sm text - gray - 400">Rate limits are applied per API key</p>;
              </div>;
            </div>;
            <div className="card">;
              <h3 className="text - xl font - semibold mb - 4">Authentication</h3>;
              <div className="space - y-3 text - gray - 300">;
                <p><strong > API Key:</strong> Include in Authorization header</p>;
                <p><strong > JWT Tokens:</strong> For user - specific operations</p>;
                <p><strong > Webhooks:</strong> HMAC signature verification</p>;
                <p className="text - sm text - gray - 400">All requests must be authenticated</p>;
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Support & Resources */}
        <div className="text - center">;
          <div className="card bg - gradient - to - r from - blue - 600 / 20 to - purple - 600 / 20 border - blue - 500 / 30">;
            <h2 className="text - 3xl font - bold mb - 4">Need Help?</h2>;
            <p className="text - xl text - gray - 300 mb - 8">;
              Our team is here to help you integrate Zion OS into your applications;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <a href="/contact" className="btn - primary text - lg px - 8 py - 4">;
                Contact Support;
              </a>;
              <a href="/community" className="btn - secondary text - lg px - 8 py - 4">;
                Join Community;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>);
}