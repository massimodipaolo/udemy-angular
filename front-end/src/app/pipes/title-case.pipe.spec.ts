import { TitleCasePipe } from './title-case.pipe';

describe('TitlecasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleCasePipe();    
    expect(pipe).toBeTruthy();
  });
});
