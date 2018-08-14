import getCurrentIp from './getCurrentIp';
import isValidIp from './isValidIp';
import getCachedIp from './getCachedIp';
import setCachedIp from './setCachedIp';
// import getARecord from './getARecord';
// import setARecord from './setARecord';

async function main() {
  const currentIp = await getCurrentIp();
  if (!isValidIp(currentIp)) {
    throw new Error(`${currentIp} is not a valid IP address.`);
  }
  const cachedIp = await getCachedIp();
  if (!isValidIp(cachedIp) || currentIp !== cachedIp) {
    //   const aRecord = await getARecord();
    //   if (currentIp !== aRecord) {
    //     setARecord(currentIp);
    //   }
    await setCachedIp(currentIp);
  }
}

main();
