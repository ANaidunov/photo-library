import { RequestOptionsBuilder } from './request-options-builder';

describe('RequestOptionsBuilder', () => {
  let requestOptionsBuilder: RequestOptionsBuilder;

  beforeEach(() => {
    requestOptionsBuilder = new RequestOptionsBuilder();
  });

  it('should add header to headers object', () => {
    const options = requestOptionsBuilder.addHeader('Content-Type', 'application/json').getOptions();;

    expect(options.headers.get('Content-Type')).toBe('application/json');
  });

  it('should add parameter to params object', () => {
    const options = requestOptionsBuilder.addParam('page', '1').getOptions();

    expect(options.params.get('page')).toBe('1');
  });

  it('should get options object', () => {
    const options = requestOptionsBuilder
      .addHeader('Content-Type', 'application/json')
      .addParam('page', '1')
      .getOptions();

    expect(options.headers.get('Content-Type')).toBe('application/json');
    expect(options.params.get('page')).toBe('1');
  });
});
