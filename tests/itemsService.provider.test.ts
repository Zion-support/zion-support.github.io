
beforeAll((done) => {
  server = http.createServer((req, res) => handler(req as any, res as any))
  server.listen(4000, done)})
afterAll((done) => {
  server.close(done)})
test('
  'ItemsService meets contract', async () => {

    pactUrls: [path.resolve(__dirname'../pact/QuoteWizard-ItemsService.json')]}
  await new Verifier(opts).verifyProvider()})

