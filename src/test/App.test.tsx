<<<<<<< HEAD
import { describe, it, expect } from 'vitest';""
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';""
import App from '../App';
<<<<<<< HEAD
// Mock the components that might not exist yet
vi.mock('../components/ChatAssistant', () => ({ ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div>
  }))
vi.mock('../layout/AppHeader', () => ({ AppHeader: () => <div data-testid="app-header">App Header</div>
  }))
vi.mock('../components/Footer', () => ({ Footer: () => <div data-testid="footer">Footer</div>
  }))
=======
// Mock the components that might not exist yet'
vi.mock('../components/ChatAssistant', () => ({'
  ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div>
}));"
vi.mock('../layout/AppHeader', () => ({'
  AppHeader: () => <div data-testid="app-header">App Header</div>
}));"
vi.mock('../components/Footer', () => ({'
  Footer: () => <div data-testid="footer">Footer</div>
}));"
describe('App', () => {'
  it('renders without crashing', () => {
    render(
      <BrowserRouter>'
        <App /" >
=======
<<<<<<< HEAD
import {describe, it, expect } from 'vitest';"
import {render, screen } from '@testing-library/react';
import {BrowserRouter } from 'react-router-dom';"
import App from '../App';
<<<<<<< HEAD
;
// Mock the components that might not exist yet;
vi.mock('../components/ChatAssistant', () => ({;
  ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div>;
}));
;
vi.mock('../layout/AppHeader', () => ({;
  AppHeader: () => <div data-testid="app-header">App Header</div>;
}));
;
vi.mock('../components/Footer', () => ({;
  Footer: () => <div data-testid="footer">Footer</div>;
}));
;
describe('App', () => {;
  it('renders without crashing', () => {;
    render(;
      <BrowserRouter>;
        <App />;
      </BrowserRouter>;
    );
    // Basic test to ensure the app renders;
    expect(document.body).toBeInTheDocument();
  });
;
  it('renders main navigation elements', () => {;
    render(;
      <BrowserRouter>;
        <App />;
      </BrowserRouter>;
    );
    // Test that key components are rendered;
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
=======
// Mock the components that might not exist yet
vi.mock('../components/ChatAssistant', () => ({ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div>
}));
vi.mock('../layout/AppHeader', () => ({AppHeader: () => <div data-testid="app-header">App Header</div>
}));
vi.mock('../components/Footer', () => ({Footer: () => <div data-testid="footer">Footer</div>
}));
describe('App', () => {it('renders without crashing', () => {
=======
<<<<<<< HEAD
import { describe, it, expect } from 'vitest;"
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from react-router-dom';"
import App from '../App;
=======
<<<<<<< HEAD
import { describe, it, expect } from &apos;vitest';
import { render, screen } from &apos;@testing-library/react';
import { BrowserRouter } from &apos;react-router-dom';
import App from &apos;../App';

>>>>>>> main
// Mock the components that might not exist yet
vi.mock(&apos;../components/ChatAssistant&apos;, () => ({
  ChatAssistant: () =>&apos;}&apos; <div data-testid=&quot;chat-assistant&quot;>Chat Assistant&quot;</div>
}));
<<<<<<< HEAD
vi.mock(../layout/AppHeader', () => ({
  AppHeader: () => <div data-testid="app-header">App Header</div>
}));
vi.mock('../components/Footer, () => ({
  Footer: () => <div data-testid="footer">Footer</div>
}));
>>>>>>> main
describe('App', () => {
  it(renders without crashing', () => {
=======

vi.mock(&apos;../layout/AppHeader&apos;, () => ({
  AppHeader: () =>&apos;} <div data-testid=&quot;app-header&quot;>App Header&quot;</div>
}));

vi.mock(&apos;../components/Footer&apos;, () => ({
  Footer: () =>&apos;} <div data-testid=&quot;footer&quot;>Footer&quot;</div>
}));

describe(&apos;App&apos;, () => {
  it(&apos;renders without crashing&apos;, () => {
    render(&apos;}}
      <BrowserRouter>
        <App />
=======
<<<<<<< HEAD
import { describe, it, expect } from 'vitest';""
import { render, screen } from '@testing-library/react';""
import { BrowserRouter } from 'react-router-dom';""
import App from '../App';
// Mock the components that might not exist yet""
vi.mock('../components/ChatAssistant', () => ({""
  ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div>, }));""
vi.mock('../layout/AppHeader', () => ({""
  AppHeader: () => <div data-testid="app-header">App Header</div>, }));""
vi.mock('../components/Footer', () => ({""
  Footer: () => <div data-testid="footer">Footer</div>, }));""
describe('App', () => {""
  it('renders without crashing', () => {
>>>>>>> main
    render(
      <BrowserRouter>""
        <App /"" >
=======
import { describe, it, expect } from 'vitest
import { render, screen } from '@testing-library/react
import { BrowserRouter } from 'react-router-dom
import App from '../App'
// Mock the components that might not exist yet"
vi.mock('../components/ChatAssistant', () => ({"
  ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div>
}));"
vi.mock('../layout/AppHeader', () => ({"
  AppHeader: () => <div data-testid="app-header">App Header</div>
}));"
vi.mock('../components/Footer', () => ({"
  Footer: () => <div data-testid="footer">Footer</div>
}));"
describe('App', () => {"
  it('renders without crashing', () => {
>>>>>>> main
    render(
      <BrowserRouter>'
        <App /  >
>>>>>>> main
>>>>>>> main
>>>>>>> main
      </BrowserRouter>
    )
    // Basic test to ensure the app renders
<<<<<<< HEAD
    expect(document.body).toBeInTheDocument();
<<<<<<< HEAD
  })
=======
<<<<<<< HEAD
  });"
>>>>>>> main
  it('renders main navigation elements', () => {
    render(
      <BrowserRouter>'
        <App /" >
      </BrowserRouter>
    );"
    // Test that key components are rendered""
    expect(screen.getByTestId('app-header')).toBeInTheDocument();""
    expect(screen.getByTestId('footer')).toBeInTheDocument()})})""
=======
  });
<<<<<<< HEAD
  it('renders main navigation elements', () => {render(
=======
<<<<<<< HEAD
  it('renders main navigation elements, () => {
    render(
=======

  it(&apos;renders main navigation elements&apos;, () => {
    render(&apos;}
>>>>>>> main
>>>>>>> main
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // Test that key components are rendered
    expect(screen.getByTestId(&apos;app-header&apos;)).toBeInTheDocument();
    expect(screen.getByTestId(&apos;footer&apos;)).toBeInTheDocument();
>>>>>>> main
  });
<<<<<<< HEAD
})
=======
});&apos;'
=======
<<<<<<< HEAD
    expect(document.body).toBeInTheDocument();, });""
  it('renders main navigation elements', () => {
    render(
      <BrowserRouter>""
        <App /"" >
      </BrowserRouter>
    );""
    // Test that key components are rendered""
    expect(screen.getByTestId('app-header')).toBeInTheDocument();""
    expect(screen.getByTestId('footer')).toBeInTheDocument()})})""
""
=======
    expect(document.body).toBeInTheDocument();
})
  it('renders main navigation elements', () => {
    render(
      <BrowserRouter>'
        <App /  >
      </BrowserRouter>
    );'
    // Test that key components are rendered"
    expect(screen.getByTestId('app-header')).toBeInTheDocument();"
<<<<<<< HEAD
    expect(screen.getByTestId(footer')).toBeInTheDocument()})})"
=======
    expect(screen.getByTestId('footer')).toBeInTheDocument()})})"
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
