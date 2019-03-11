import { NormalizeFileNamePipe } from './normalize-file-name.pipe';

describe('NormalizeFileNamePipe', () => {
  it('create an instance', () => {
    const pipe = new NormalizeFileNamePipe();
    expect(pipe).toBeTruthy();
  });
});
