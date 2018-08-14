export function isNullOrUndefined(obj: any) {
  return 'undefined' === typeof obj || null === obj;
}

/**
 * safely reads json from the isomorphic-fetch response
 * @param {Response} fetchResponse isomorphic-fetch response
 * @returns {object} json contained in response
 * @throws
 */
export async function getJsonFromResponse(fetchResponse: any) {
  let status = fetchResponse.status;
  if (status >= 400) {
    throw new Error('Error completing fetch');
  }
  let body;
  try {
    body = await fetchResponse.json();
  } catch (error) {
    throw new Error('Error getting JSON after fetch');
  }
  return body;
}

