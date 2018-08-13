import { expect } from 'chai';
import 'mocha';

import isValidIp from './index';

describe('isValidIp', () => {
  it('should not allow "Failed to get an IP address"', () => {
    expect(isValidIp("Failed to get an IP address")).to.be.false;
  });

  it('should not allow "Your IP address is 192.168.1.1"', () => {
    expect(isValidIp("Your IP address is 192.168.1.1")).to.be.false;
  });

  it('should allow "192.168.0.1"', () => {
    expect(isValidIp("192.168.0.1")).to.be.true;
  });

  it('should allow "127.0.0.1"', () => {
    expect(isValidIp("127.0.0.1")).to.be.true;
  });

  it('should allow "999.999.999.999" (which isn\'t a valid IP, I get it)', () => {
    expect(isValidIp("999.999.999.999")).to.be.true;
  });
});
