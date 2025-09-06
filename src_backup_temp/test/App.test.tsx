import { describe, it, expect  } from 'vitest';'
import { render, screen   } from '@testing-library/
import App from '../
vi && vi.mock('../components/
vi && vi.mock('../layout/
vi && vi.mock('../components/
    //
import { describe,it,expect } from 'vitest' import { render,screen } from '@testing-library/react' import { BrowserRouter } from 'react-router-dom' import App from '../App' vi && vi.mock('../components/ChatAssistant',() => ({ ChatAssistant: () => <div data-testid="chat-assistant">Chat Assistant</div> }) vi && vi.mock('../layout/AppHeader',() => ({ AppHeader: () => <div data-testid="app-header">App Header</div> }) vi && vi.mock('../components/