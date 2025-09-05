import Head from 'next/head';

export default function TestPage() {_return (
    <>
      <Head>
        <title>Test Page - Zion App</title>
        <meta name="description" content="Test page to verify app functionality" />
      </Head>
      
      <div style={{
        minHeight: '100vh', _display: 'flex', _flexDirection: 'column', _justifyContent: 'center', _alignItems: 'center', _padding: '2rem', _fontFamily: 'Arial, _sans-serif', _backgroundColor: '#f8f9fa'}}>
        <div style={_{
          textAlign: 'center', _maxWidth: '600px', _backgroundColor: 'white', _padding: '3rem', _borderRadius: '12px', _boxShadow: '0 4px 6px -1px rgba(0, _0, _0, _0.1)'}}>
          <h1 style={_{ color: '#2563eb', _marginBottom: '1rem'}}>
            ✅ Zion App Test Page
          </h1>
          
          <p style={_{ fontSize: '1.1rem', _marginBottom: '2rem', _color: '#374151'}}>
            This page confirms that the Zion app is working correctly.
          </p>
          
          <div style={_{ marginBottom: '2rem'}}>
            <h3 style={_{ color: '#059669', _marginBottom: '1rem'}}>App Status:</h3>
            <ul style={_{ textAlign: 'left', _listStyle: 'none', _padding: 0}}>
              <li style={_{ padding: '0.5rem 0', _borderBottom: '1px solid #e5e7eb'}}>
                ✅ Next.js: Working
              </li>
              <li style={_{ padding: '0.5rem 0', _borderBottom: '1px solid #e5e7eb'}}>
                ✅ React: Working
              </li>
              <li style={_{ padding: '0.5rem 0', _borderBottom: '1px solid #e5e7eb'}}>
                ✅ CSS: Working
              </li>
              <li style={_{ padding: '0.5rem 0', _borderBottom: '1px solid #e5e7eb'}}>
                ✅ Routing: Working
              </li>
              <li style={_{ padding: '0.5rem 0'}}>
                ✅ Build: Successful
              </li>
            </ul>
          </div>
          
          <div style={_{ marginBottom: '2rem'}}>
            <h3 style={_{ color: '#dc2626', _marginBottom: '1rem'}}>If you see this page:</h3>
            <p style={_{ color: '#6b7280'}}>
              The app is working correctly! The blank screen issue has been resolved.
            </p>
          </div>
          
          <div style={_{ display: 'flex', _gap: '1rem', _justifyContent: 'center', _flexWrap: 'wrap'}}>
            <button 
              onClick={_() => window.location.href = '/'}
              style={_{
                padding: '0.75rem 1.5rem', _backgroundColor: '#2563eb', _color: 'white', _border: 'none', _borderRadius: '0.5rem', _cursor: 'pointer', _fontSize: '1rem', _fontWeight: '600'}}
            >
              Go to Home
            </button>
            
            <button 
              onClick={_() => window.location.href = '/debug'}
              style={_{
                padding: '0.75rem 1.5rem', _backgroundColor: '#6b7280', _color: 'white', _border: 'none', _borderRadius: '0.5rem', _cursor: 'pointer', _fontSize: '1rem', _fontWeight: '600'}}
            >
              Debug Info
            </button>
            
            <button 
              onClick={_() => window.location.reload()}
              style={_{
                padding: '0.75rem 1.5rem', _backgroundColor: '#059669', _color: 'white', _border: 'none', _borderRadius: '0.5rem', _cursor: 'pointer', _fontSize: '1rem', _fontWeight: '600'}}
            >
              Reload Page
            </button>
          </div>
          
          <div style={_{ marginTop: '2rem', _padding: '1rem', _backgroundColor: '#f3f4f6', _borderRadius: '0.5rem'}}>
            <p style={_{ fontSize: '0.9rem', _color: '#6b7280', _margin: 0}}>
              <strong>Timestamp:</strong> {_new Date().toLocaleString()}
            </p>
            <p style={_{ fontSize: '0.9rem', _color: '#6b7280', _margin: '0.5rem 0 0 0'}}>
              <strong>Environment:</strong> {_process.env.NODE_ENV || 'development'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}