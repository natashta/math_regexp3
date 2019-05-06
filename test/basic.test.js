import ArrayBufferConverter from '../src/js/function';
import getBuffer from '../src/js/getBuffer';

test('Проверка работы arrayBuffer', () => {
  const testBuffer = new ArrayBufferConverter(getBuffer());
  const received = testBuffer.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toEqual(expected);
});
