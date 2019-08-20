test('importing console exporter from opencensus causes a memory leak', async () => {
  const exporter = await import('@opencensus/core/build/src/exporters/console-exporter');
  expect(exporter).toBeDefined();
});