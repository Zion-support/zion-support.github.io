


interface Props {
  children: ReactNode;
  fallback?: ReactNode;

}

interface State {
  hasError: boolean;
  error?: Error;


class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {


  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';





  render() {
    if (this.state.hasError) {



            <h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>
            <p className="text-gray-300 mb-6">
              We&apos;re sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.
            </p>



            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mb-6 text-left">
                <summary className="text-sm text-gray-400 cursor-pointer mb-2">
                  Error Details (Development)
                </summary>
                <pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto">

                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}



            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>
                onClick={this.handleGoHome}
                className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                <Home className="w-4 h-4" />
                <span>Go Home</span>
            </div>



            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-400 mb-3">Still having trouble? Contact our support team:</p>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                <Phone className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>


      );

    return this.props.children;




