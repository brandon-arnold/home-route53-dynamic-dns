import { fileExists, readFile } from '../fileHelpers';

import { cachedIpFilename } from '../config';
/**
 * reads the previously cached IP from local file, if exists
 * @returns {string} IPv4 IP
 */
export default async function getCachedIp(): Promise<string> {
  try {
    if (await fileExists(cachedIpFilename)) {
      return await readFile(cachedIpFilename);
    }
  } catch (e) {
    console.error(e);
  }
  return '';
}
