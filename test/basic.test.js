import ArrayBufferConverter from '../src/js/app';

test('Проверка работы arrayBuffer', () => {
  const expected = '{"data":{"user":{"id":1, "name":"Hitman","level":10}}}';
  const testBuffer = new ArrayBufferConverter();
  testBuffer.load('{"data":{"user":{"id":1, "name":"Hitman","level":10}}}');
  const received = testBuffer.toString();
  expect(received).toEqual(expected);
});
