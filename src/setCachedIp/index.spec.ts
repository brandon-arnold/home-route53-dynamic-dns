import { expect } from 'chai';
import 'mocha';
import { deleteFile, readFile } from '../fileHelpers';

import setCachedIp from './index';
import { cachedIpFilename } from '../config';

describe('setCachedIp', () => {
  it('should set the IP to the cached IP filename', async () => {
    await setCachedIp('test test test');
    const cachedIp = await readFile(cachedIpFilename);
    expect(cachedIp).to.equal('test test test');
    await deleteFile(cachedIpFilename);
  });
});
