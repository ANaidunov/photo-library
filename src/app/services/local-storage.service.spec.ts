import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorageService);
  });

  it('should retrieve an item from localStorage', () => {
    localStorage.setItem('testKey', 'testValue');
    expect(service.getItem('testKey')).toBe('testValue');
  });

  it('should retrieve an object item from localStorage', () => {
    const testObject = { name: 'testObject', value: 123 };
    localStorage.setItem('testObjectKey', JSON.stringify(testObject));
    expect(service.getObjectItem('testObjectKey')).toEqual(testObject);
  });

  it('should retrieve an empty array if there is no item from localStorage', () => {
    expect(service.getObjectItem('testObjectKey2')).toEqual([]);
  });

  it('should set an item in localStorage', () => {
    service.setItem('testKey', 'testValue');
    expect(localStorage.getItem('testKey')).toBe('testValue');
  });

  it('should remove an item from localStorage', () => {
    localStorage.setItem('testKey', 'testValue');
    service.removeItem('testKey');
    expect(localStorage.getItem('testKey')).toBeNull();
  });
});
