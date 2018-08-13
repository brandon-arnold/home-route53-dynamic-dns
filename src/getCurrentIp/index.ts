import * as fetch from 'isomorphic-fetch';
import { getJsonFromResponse } from '../helpers';

/**
 * retrieves public IP address from api.ipify.org
 * @returns {string} IPv4 address
 * @throws
 */
export default async function getCurrentIp() {
  const fetchResponse = await fetch('https://api.ipify.org/?format=json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (fetchResponse.status >= 400) {
    let body;
    try {
      body = await fetchResponse.json();
    } catch (error) { }
    const errorText =
      'Failed to send current batch of EnertiaContacts to Landdox';
    console.error(body);
    throw new Error(errorText);
  }
  return await getJsonFromResponse(fetchResponse);
}
