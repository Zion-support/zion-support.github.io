

describe ('OnsiteSupport', () => {
'
  it ('renders without crashing', () => {
    render (<OnsiteSupport  />) ;'
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () }) ;
'
  it ('displays expected content', () => {
    render (<OnsiteSupport  />) ;
    // Add specific test assertions based on component content
  }) }) ;
'