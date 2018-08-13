import { isNullOrUndefined } from '../helpers';

/**
 * Validates ip address on a regex
 * @param {string} ip
 * @returns {boolean}
 */
export default function isValidIp(ip: string) {
  const ipRegex = /^\b(?:\d{1,3}\.){3}\d{1,3}\b$/g;
  return !isNullOrUndefined(ip.match(ipRegex));
}
