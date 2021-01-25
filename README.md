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

Computer Specs:

H/W path        Device           Class       Description
========================================================
                                 system      Computer
/0                               bus         Motherboard
/0/0                             memory      15GiB System memory
/0/1                             processor   AMD Ryzen 7 3750H with Radeon Vega Mobile Gfx
/0/100                           bridge      Advanced Micro Devices, Inc. [AMD]
/0/100/0.2                       generic     Advanced Micro Devices, Inc. [AMD]
/0/100/1.1                       bridge      Advanced Micro Devices, Inc. [AMD]
/0/100/1.1/0                     display     NVIDIA Corporation
/0/100/1.1/0.1                   multimedia  NVIDIA Corporation
/0/100/1.2                       bridge      Advanced Micro Devices, Inc. [AMD]
/0/100/1.2/0    enp2s0           network     RTL8111/8168/8411 PCI Express Gigabit Ethernet Controller
/0/100/1.3                       bridge      Advanced Micro Devices, Inc. [AMD]
/0/100/1.3/0                     storage     Non-Volatile memory controller
/0/100/1.7                       bridge      Advanced Micro Devices, Inc. [AMD]
/0/100/1.7/0    wlp4s0           network     RTL8822BE 802.11a/b/g/n/ac WiFi adapter
/0/100/8.1                       bridge      Advanced Micro Devices, Inc. [AMD]
/0/100/8.1/0                     display     Picasso
```