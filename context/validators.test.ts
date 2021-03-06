import { validateFindKeys } from './validators';
import { ConfigurationException } from '../base/exceptions';

test('validateFindKeys throws on already used indexes', () => {
  const findKeys = [
    { indexName: 'testi1', partitionKey: 'key1', sortKey: 'sort1' },
    { indexName: 'testi1', partitionKey: 'key1', sortKey: 'sort1' },
  ];

  expect(() => validateFindKeys(findKeys)).toThrow(ConfigurationException);
});

test('validateFindKeys passes on valid index configuration', () => {
  const findKeys = [
    { indexName: 'testi1', partitionKey: 'key1', sortKey: 'sort1' },
    { indexName: 'testi2', partitionKey: 'key2', sortKey: 'sort2' },
  ];

  expect(() => validateFindKeys(findKeys)).not.toThrow(ConfigurationException);
});
