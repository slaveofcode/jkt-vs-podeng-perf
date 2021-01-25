# JKT vs Podeng Perf.

Simple script to running performance comparison between JKT & Podeng library when processing data serialization

## How To

1. Clone this repository
2. `npm i` to install dependencies
3. `node index.js` to run the benchmark

## Results

```
|---------|---------|---------|
| Records |   JKT   |  Podeng |
|---------|---------|---------|
|     2   |   3ms   |  10ms   |
|     4   |   2ms   |   6ms   |
|     8   |   3ms   |   6ms   |
|    16   |   1ms   |   6ms   |
|    32   |   3ms   |   4ms   |
|    64   |   1ms   |  11ms   |
|   128   |   1ms   |   6ms   |
|   256   |   2ms   |   3ms   |
|   512   |   1ms   |   6ms   |
|  1024   |   5ms   |   3ms   |
|  2048   |   2ms   |   3ms   |
|  4096   |   1ms   |   5ms   |
|  8192   |   1ms   |   2ms   |
| 16384   |   2ms   |   4ms   |
| 32768   |   0ms   |   3ms   |
| 65536   |   0ms   |   2ms   |
| 131072  |   1ms   |   3ms   |
| 262144  |   1ms   |   3ms   |
| 524288  |   1ms   |   4ms   |
| 1048576 |   1ms   |   2ms   |
|---------|---------|---------|
```