import { expect } from 'chai';
import 'mocha';
import { deleteFile, fileExists, writeFile } from '../fileHelpers';

import getCachedIp from './index';
import { cachedIpFilename } from '../config';

describe('getCachedIp', () => {
  it('should return empty string if file does not exist', async () => {
    if (await fileExists(cachedIpFilename)) {
      await deleteFile(cachedIpFilename);
    }
    const cachedIp = await getCachedIp();
    expect(cachedIp).to.equal('');
  });

  it('should return the contents of `cachedIpFilename`', async () => {
    await writeFile(cachedIpFilename, 'test text');
    expect(await getCachedIp()).to.equal('test text');
    await deleteFile(cachedIpFilename);
  });
});
