# opencensus-leak
Minimal repo of opencensus memory leak

```
yarn install
yarn test
```

I believe the problem is confined to `internal/cls`, 2 of these tests trigger the memory leak warning while 2 (which directly import modules not using `cls`) do not fail.
