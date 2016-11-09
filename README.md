# [Benchmark]: Promise Filtered Catch

## Libraries Tested

- [Bluebird](https://www.npmjs.com/package/bluebird) `v3.4.1`
- [Smart Promise](https://www.npmjs.com/package/smart-promise) `v1.0.0`

## Results

### `Node.js v6.3.1` *(Aug 07, 2016)*

###### Fastest
```
  smart-promise x 99,766 ops/sec ±1.24% (86 runs sampled)
```
###### Slowest
```
  bluebird      x  3,541 ops/sec ±1.70% (82 runs sampled)
```
###### Results
```
  bluebird      x  3,541 ops/sec ±1.70% (82 runs sampled)
  smart-promise x 99,766 ops/sec ±1.24% (86 runs sampled)
```
