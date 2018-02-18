import Web3 from 'web3';
import CustodyToken from './build/contracts/CustodyChain.json';

const custodyAddr = '0x7ba431d1f33cb44ebd5d2f6ba541e9ff6902120e';

class Web3Wrapper {
  constructor(provider) {
    // (provider as any).sendAsync = (provider as any).send;
    this.web3 = new Web3();
    this.web3.setProvider(provider);
    this.contractInstance = null;

    this.getContractFromAbi();
  }

  isAddress(address) {
    return this.web3.isAddress(address);
  }

  getContractFromAbi() {
    this.contractInstance = new this.web3.eth.Contract(CustodyToken.abi, custodyAddr);
  }

  async contractFunc(funcName, isMutable, opts) {
    if (isMutable) {
      return await this.contractInstance[funcName]().call();
    }
    // ...send(arg, { from: someAddr, to: someAddr, gas: someGas })
    return await this.contractInstance[funcName]().send(opts);
  }
}

const web3 = new Web3(new Web3.providers.HttpProvider('http://iris.local:8545'));
const web3Wrapper = new Web3Wrapper(web3.currentProvider);

export default web3Wrapper;
