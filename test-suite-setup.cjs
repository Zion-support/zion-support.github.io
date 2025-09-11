#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Test Suite Setup - Comprehensive Testing Implementation');
console.log('==========================================================');

class TestSuiteSetup {
  constructor() {
    this.testsCreated = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async setupJest() {
    this.log('Setting up Jest testing framework...');

    // Install Jest and testing dependencies
    try {
      execSync(
        'npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom',
        { stdio: 'pipe' }
      );
      this.log('✅ Jest and testing libraries installed');
    } catch (error) {
      this.log('Jest installation failed, continuing...', 'warning');
    }

    // Create Jest configuration
    const jestConfig = {
      testEnvironment: 'jsdom',
      setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
      moduleNameMapping: {
        '^@/(.*)$': '<rootDir>/src/$1',
      },
      collectCoverageFrom: [
        'src/**/*.{js,jsx,ts,tsx}',
        '!src/**/*.d.ts',
        '!src/index.tsx',
        '!src/setupTests.ts',
      ],
      coverageThreshold: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70,
        },
      },
    };

    fs.writeFileSync('jest.config.json', JSON.stringify(jestConfig, null, 2));
    this.testsCreated.push('Jest configuration');
  }

  async setupCypress() {
    this.log('Setting up Cypress for E2E testing...');

    try {
      execSync('npm install --save-dev cypress @cypress/react', {
        stdio: 'pipe',
      });
      this.log('✅ Cypress installed');
    } catch (error) {
      this.log('Cypress installation failed, continuing...', 'warning');
    }

    // Create Cypress configuration
    const cypressConfig = {
      e2e: {
        baseUrl: 'http://localhost:3000',
        supportFile: 'cypress/support/e2e.ts',
        specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
        viewportWidth: 1280,
        viewportHeight: 720,
      },
      component: {
        devServer: {
          framework: 'react',
          bundler: 'vite',
        },
      },
    };

    fs.writeFileSync(
      'cypress.config.ts',
      `export default ${JSON.stringify(cypressConfig, null, 2)}`
    );
    this.testsCreated.push('Cypress configuration');
  }

  async createTestUtilities() {
    this.log('Creating test utilities...');

    const setupTests = `
import '@testing-library/jest-dom'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
}
`;

    const utilsPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(utilsPath)) {
      fs.mkdirSync(utilsPath, { recursive: true });
    }

    fs.writeFileSync(path.join(utilsPath, 'setupTests.ts'), setupTests);
    this.testsCreated.push('Test setup utilities');
  }

  async createComponentTests() {
    this.log('Creating component tests...');

    const testDir = path.join(process.cwd(), 'src', '__tests__');
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }

    // Create ErrorBoundary test
    const errorBoundaryTest = `
import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorBoundary from '../components/ErrorBoundary'

const ThrowError = () => {
  throw new Error('Test error')
}

describe('ErrorBoundary', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Test content</div>
      </ErrorBoundary>
    )
    
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  it('renders error UI when there is an error', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    )
    
    expect(screen.getByText('Something went wrong.')).toBeInTheDocument()
  })
})
`;

    fs.writeFileSync(
      path.join(testDir, 'ErrorBoundary.test.tsx'),
      errorBoundaryTest
    );
    this.testsCreated.push('ErrorBoundary component test');

    // Create performance monitoring test
    const performanceTest = `
import { performanceMonitor } from '../utils/performance'

describe('Performance Monitor', () => {
  it('should measure synchronous functions', () => {
    const mockFn = jest.fn(() => 'test')
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    
    const result = performanceMonitor.measure('test', mockFn)
    
    expect(result).toBe('test')
    expect(mockFn).toHaveBeenCalled()
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('test took'))
    
    consoleSpy.mockRestore()
  })

  it('should measure asynchronous functions', async () => {
    const mockAsyncFn = jest.fn(async () => 'async test')
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation()
    
    const result = await performanceMonitor.measureAsync('async test', mockAsyncFn)
    
    expect(result).toBe('async test')
    expect(mockAsyncFn).toHaveBeenCalled()
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('async test took'))
    
    consoleSpy.mockRestore()
  })
})
`;

    fs.writeFileSync(
      path.join(testDir, 'performance.test.ts'),
      performanceTest
    );
    this.testsCreated.push('Performance monitoring test');
  }

  async createE2ETests() {
    this.log('Creating E2E tests...');

    const cypressDir = path.join(process.cwd(), 'cypress', 'e2e');
    if (!fs.existsSync(cypressDir)) {
      fs.mkdirSync(cypressDir, { recursive: true });
    }

    // Create basic E2E test
    const e2eTest = `
describe('Application E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should load the homepage', () => {
    cy.get('body').should('be.visible')
  })

  it('should have proper page title', () => {
    cy.title().should('not.be.empty')
  })

  it('should be responsive', () => {
    cy.viewport(375, 667) // Mobile
    cy.get('body').should('be.visible')
    
    cy.viewport(768, 1024) // Tablet
    cy.get('body').should('be.visible')
    
    cy.viewport(1920, 1080) // Desktop
    cy.get('body').should('be.visible')
  })
})
`;

    fs.writeFileSync(path.join(cypressDir, 'app.cy.ts'), e2eTest);
    this.testsCreated.push('E2E test suite');
  }

  async createTestScripts() {
    this.log('Creating test scripts...');

    const packageJsonPath = path.join(process.cwd(), 'package.json');
    let packageJson = {};

    if (fs.existsSync(packageJsonPath)) {
      packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    }

    packageJson.scripts = {
      ...packageJson.scripts,
      test: 'jest',
      'test:watch': 'jest --watch',
      'test:coverage': 'jest --coverage',
      'test:e2e': 'cypress run',
      'test:e2e:open': 'cypress open',
      'test:all': 'npm run test && npm run test:e2e',
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    this.testsCreated.push('Test scripts in package.json');
  }

  async runTestSetup() {
    try {
      this.log('Starting test suite setup...');

      await this.setupJest();
      await this.setupCypress();
      await this.createTestUtilities();
      await this.createComponentTests();
      await this.createE2ETests();
      await this.createTestScripts();

      const endTime = Date.now();
      const duration = Math.round((endTime - this.startTime) / 1000);

      console.log('\n🎉 Test Suite Setup Complete!');
      console.log('=============================');
      console.log(`Duration: ${duration} seconds`);
      console.log(`Tests created: ${this.testsCreated.length}`);
      console.log('\nTest components:');
      this.testsCreated.forEach((test, index) => {
        console.log(`  ${index + 1}. ${test}`);
      });

      console.log('\n📋 Available test commands:');
      console.log('  npm run test          - Run unit tests');
      console.log('  npm run test:watch    - Run tests in watch mode');
      console.log('  npm run test:coverage - Run tests with coverage');
      console.log('  npm run test:e2e      - Run E2E tests');
      console.log('  npm run test:all      - Run all tests');
    } catch (error) {
      this.log(`Test setup failed: ${error.message}`, 'error');
    }
  }
}

// Run test setup
const testSetup = new TestSuiteSetup();
testSetup.runTestSetup();
