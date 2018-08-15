import * as Route53 from 'aws-sdk/clients/route53';

import { hostedZoneId, recordSetName } from '../config';

export default async function setARecord(ip: string): Promise<void> {
  const route53 = new Route53();
  const route53Params = {
    HostedZoneId: hostedZoneId,
    ChangeBatch: {
      Comment: 'route53-dynamic-dns upsert',
      Changes: [{
        Action: 'UPSERT',
        ResourceRecordSet: {
          Name: recordSetName,
          Type: 'A',
          TTL: 300,
          ResourceRecords: [{
            Value: ip,
          }],
        },
      }]
    }
  };
  return new Promise<void>((resolve, reject) => {
    route53.changeResourceRecordSets(route53Params, (error: any, data: any) => {
      if (error) {
        console.log(error, error.stack);
        reject(new Error(`Something went wrong setting the A record for hosted zone ID ${hostedZoneId} and record set name ${recordSetName}`));
      } else {
        resolve();
      }
    });
  });
}
