import { Result } from './result';

describe('Result', () => {
  it('should create an instance', () => {
    expect(new Result('piedra','papel','perdiste')).toBeTruthy();
  });
});
