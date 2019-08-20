test('importing internal/cls causes memory leak', async () => {
  const cls = await import ('@opencensus/core/build/src/internal/cls');
  expect(cls).toBeDefined();
})



