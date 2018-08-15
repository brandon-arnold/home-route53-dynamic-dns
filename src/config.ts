export const cachedIpFilename = process.env.ROUTE_53_DYNDNS_CACHED_IP || '/tmp/route53-dyndns-ip.cache';
export const hostedZoneId = process.env.ROUTE_53_DYNDNS_HOSTED_ZONE_ID || '';
export const recordSetName = process.env.ROUTE_53_DYNDNS_RECORD_SET_NAME || '';
