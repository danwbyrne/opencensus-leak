test('importing the entire package causes leak', async () => {
  const opencensus = await import('@opencensus/core');
  expect(opencensus).toBeDefined();
})