import { writeFile } from '../fileHelpers';
import { cachedIpFilename } from '../config';

/**
 * sets the cached IP file to the string
 * @param {string} ip
 */
export default async function setCachedIp(ip: string) {
  try {
    await writeFile(cachedIpFilename, ip);
  } catch (e) {
    console.error(e);
  }
}
