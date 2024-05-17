beforeAll(() => console.log('outer - beforeAll'));
afterAll(() => console.log('outer - afterAll'));
beforeEach(() => console.log('outer - beforeEach'));
afterEach(() => console.log('outer - afterEach'));

describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('inner - beforeAll'));
  afterAll(() => console.log('inner - afterAll'));
  beforeEach(() => console.log('inner - beforeEach'));
  afterEach(() => console.log('inner - afterEach'));

  test('Inner test', () => console.log('inner - test'));
});
