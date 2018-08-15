import * as Route53 from 'aws-sdk/clients/route53';
import { get, filter } from 'lodash';

import { isNullOrUndefined } from '../helpers';
import { hostedZoneId, recordSetName } from '../config';

export default async function getARecord(): Promise<string> {
  const route53 = new Route53();
  const route53Params = {
    HostedZoneId: hostedZoneId,
  };
  return new Promise<string>((resolve, reject) => {
    route53.listResourceRecordSets(route53Params, (error: any, data: any) => {
      if (error) {
        console.error(error);
        const errorText = `Failed to retrieve A record for hosted zone ID ${hostedZoneId} and record set name ${recordSetName}`;
        reject(new Error(errorText));
      } else {
        const resourceRecordSets = get(data, 'ResourceRecordSets');
        if (isNullOrUndefined(resourceRecordSets)) {
          const errorText = `No recordsets available for hosted zone ID ${hostedZoneId}`;
          reject(new Error(errorText));
        } else {
          const aRecords = filter(resourceRecordSets, recordSet => {
            return recordSet['Name'] === recordSetName && recordSet['Type'] === 'A';
          });
          if (aRecords.length !== 1) {
            const errorText = `Must be exactly one A record on ${hostedZoneId} with record set name ${recordSetName}.`;
            reject(new Error(errorText));
          } else {
            const resourceRecords = get(aRecords[0], 'ResourceRecords');
            if (resourceRecords.length < 1) {
              resolve('');
            } else {
              resolve(get(resourceRecords[0], 'Value'));
            }
          }
        }
      }
    });
  });
}
