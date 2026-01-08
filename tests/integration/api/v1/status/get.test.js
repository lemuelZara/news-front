test("GET to /api/v1/status returns 200 and the correct response body", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");

  expect(res.status).toBe(200);
});
