import getCurrentIp from './getCurrentIp';
import isValidIp from './isValidIp';

async function main() {
  const currentIp = await getCurrentIp();
  if (!isValidIp(currentIp)) {
    throw new Error(`${currentIp} is not a valid IP address.`);
  }
  // const prevIp = IP address stored in /tmp/route53-dynamic-dns-ip
  // if (!prevIp || prevIp !== curIp) {
  //   set the A record to curIp
  //   save curIp to /tmp/route53-dynamic-dns-ip
  // }
}

main();
