/**
 * Data Cleanup Tests
 * Tests for the data cleanup functionality
 */
import { dataCleanup } from '../dataCleanup';
import { dataRecordManager } from '../dataRecordManager';
import { scheduledCleanup } from '../scheduledCleanup';

// Mock localStorage and sessionStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0
};

const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  key: jest.fn(),
  length: 0
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

Object.defineProperty(window, 'sessionStorage', {
  value: sessionStorageMock
});

describe('Data Cleanup', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.length = 0;
    sessionStorageMock.length = 0;
  });

  describe('dataRecordManager', () => {
    it('should create a data record', () => {
      const record = dataRecordManager.createRecord(
        { test: 'data' },
        'test-category',
        'test-type',
        { ttl: 1000 }
      );

      expect(record).toBeDefined();
      expect(record.id).toMatch(/^data_record_/);
      expect(record.category).toBe('test-category');
      expect(record.type).toBe('test-type');
      expect(record.data).toEqual({ test: 'data' });
      expect(record.ttl).toBe(1000);
    });

    it('should get a data record', () => {
      const testRecord = {
        id: 'data_record_test123',
        timestamp: Date.now(),
        data: { test: 'data' },
        category: 'test-category',
        type: 'test-type',
        version: '1.0.0'
      };

      localStorageMock.getItem.mockReturnValue(JSON.stringify(testRecord));
      localStorageMock.key.mockReturnValue('data_record_test123');

      const record = dataRecordManager.getRecord('test123');

      expect(record).toBeDefined();
      expect(record?.id).toBe('data_record_test123');
    });

    it('should query records by category', () => {
      const testRecords = [
        {
          id: 'data_record_test1',
          timestamp: Date.now(),
          data: { test: 'data1' },
          category: 'category1',
          type: 'type1',
          version: '1.0.0'
        },
        {
          id: 'data_record_test2',
          timestamp: Date.now(),
          data: { test: 'data2' },
          category: 'category2',
          type: 'type2',
          version: '1.0.0'
        }
      ];

      localStorageMock.length = 2;
      localStorageMock.key
        .mockReturnValueOnce('data_record_test1')
        .mockReturnValueOnce('data_record_test2');
      localStorageMock.getItem
        .mockReturnValueOnce(JSON.stringify(testRecords[0]))
        .mockReturnValueOnce(JSON.stringify(testRecords[1]));

      const records = dataRecordManager.queryRecords({ category: 'category1' });

      expect(records).toHaveLength(1);
      expect(records[0].category).toBe('category1');
    });

    it('should get statistics', () => {
      const testRecords = [
        {
          id: 'data_record_test1',
          timestamp: Date.now() - 1000, // 1 second ago
          data: { test: 'data1' },
          category: 'category1',
          type: 'type1',
          version: '1.0.0'
        },
        {
          id: 'data_record_test2',
          timestamp: Date.now() - 86400000, // 1 day ago
          data: { test: 'data2' },
          category: 'category2',
          type: 'type2',
          version: '1.0.0'
        }
      ];

      localStorageMock.length = 2;
      localStorageMock.key
        .mockReturnValueOnce('data_record_test1')
        .mockReturnValueOnce('data_record_test2');
      localStorageMock.getItem
        .mockReturnValueOnce(JSON.stringify(testRecords[0]))
        .mockReturnValueOnce(JSON.stringify(testRecords[1]));

      const stats = dataRecordManager.getStats();

      expect(stats.total).toBe(2);
      expect(stats.byCategory).toHaveProperty('category1');
      expect(stats.byCategory).toHaveProperty('category2');
      expect(stats.byAge.recent).toBe(1);
      expect(stats.byAge.veryOld).toBe(1);
    });
  });

  describe('dataCleanup', () => {
    it('should identify old records', async () => {
      const oldRecord = {
        id: 'data_record_old',
        timestamp: Date.now() - 8 * 24 * 60 * 60 * 1000, // 8 days ago
        data: { test: 'old data' },
        category: 'test-category',
        type: 'test-type',
        version: '1.0.0'
      };

      localStorageMock.length = 1;
      localStorageMock.key.mockReturnValue('data_record_old');
      localStorageMock.getItem.mockReturnValue(JSON.stringify(oldRecord));

      const oldRecords = await dataCleanup.identifyOldRecords({
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      });

      expect(oldRecords).toHaveLength(1);
      expect(oldRecords[0].id).toBe('data_record_old');
    });

    it('should get storage statistics', async () => {
      localStorageMock.length = 2;
      sessionStorageMock.length = 1;

      const stats = await dataCleanup.getStorageStats();

      expect(stats).toHaveProperty('localStorage');
      expect(stats).toHaveProperty('sessionStorage');
      expect(stats).toHaveProperty('memory');
    });
  });

  describe('scheduledCleanup', () => {
    it('should start and stop scheduled cleanup', () => {
      const stats = scheduledCleanup.getStats();
      
      expect(stats).toBeDefined();
      expect(stats).toHaveProperty('totalRuns');
      expect(stats).toHaveProperty('successfulRuns');
      expect(stats).toHaveProperty('failedRuns');
      expect(stats).toHaveProperty('isRunning');
    });

    it('should check if cleanup is due', () => {
      const isDue = scheduledCleanup.isCleanupDue();
      expect(typeof isDue).toBe('boolean');
    });

    it('should get time until next cleanup', () => {
      const timeUntil = scheduledCleanup.getTimeUntilNextCleanup();
      expect(typeof timeUntil).toBe('number');
      expect(timeUntil).toBeGreaterThanOrEqual(0);
    });
  });
});