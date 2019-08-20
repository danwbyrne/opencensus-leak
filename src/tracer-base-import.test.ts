test('importing tracer-base causes memory leak', async () => {
  const tracerBase = await import('@opencensus/core/build/src/trace/model/tracer-base');
  expect(tracerBase).toBeDefined();
})