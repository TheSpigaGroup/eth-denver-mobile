import Web3 from 'web3';
import CustodyChain from './build/contracts/CustodyChain.json';

const custodyAddr = '0x7ba431d1f33cb44ebd5d2f6ba541e9ff6902120e';

class Web3Wrapper {
  constructor() {
    // (provider as any).sendAsync = (provider as any).send;
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://iris.local:8545'));
    this.contractInstance = null;

    this.getContractFromAbi();
  }

  isAddress(address) {
    return this.web3.isAddress(address);
  }

  getContractFromAbi() {
    this.contractInstance = new this.web3.eth.Contract(CustodyChain.abi,
                                                       custodyAddr);
  }

  async contractFunc(funcName, isMutable, args, opts) {
    if (isMutable === true) {
      try {
        return await (this.contractInstance.methods[`${funcName}()`]().call(opts));
      } catch (err) {
        return err;
      }
    }
    try {
      return await (this.contractInstance.methods[`${funcName}()`]().send(opts));
    } catch (err) {
      return err;
    }
  }
}

const web3Wrapper = new Web3Wrapper();

export default web3Wrapper;
