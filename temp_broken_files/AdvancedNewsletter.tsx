                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center justify-center disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            <div
              className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 max-w-md mx-auto"
            >
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Successfully Subscribed!
              <p className="text-white/80">
                Thank you for subscribing. 'You', 'll receive our latest updates soon.
              </p>
            </div>
          )}
          <div className="mt-8 text-white/60 text-sm">
            <p>
              By subscribingyou agree to our privacy policy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );



export default AdvancedNewsletter;
import React from "react";

const function AdvancedNewsletter() { = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">function AdvancedNewsletter() {</h1>
          <p className="text-xl opacity-90">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default function AdvancedNewsletter() {;
