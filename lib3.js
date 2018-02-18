import Web3 from 'web3';
// import { Web3Wrapper } from '@0xproject/web3-wrapper';

class Web3Wrapper {
  constructor(provider) {
    // (provider as any).sendAsync = (provider as any).send;
    this.web3 = new Web3();
    this.web3.setProvider(provider);
  }

  isAddress(address) {
    return this.web3.isAddress(address);
  }

  getContractFromAbi(abi) {
    const web3Contract = this.web3.eth.contract(abi);
    return web3Contract;
  }

  getContractInstance(abi, address) {
    const web3ContractInstance = this.getContractFromAbi(abi).at(address);
    return web3ContractInstance;
  }

  async sendTransactionAsync(txData) {
    const txHash = await (this.web3.eth.sendTransaction)(txData);
    return txHash;
  }
}

const web3 = new Web3(new Web3.providers.HttpProvider('http://iris.local:8545'));
const web3Wrapper = new Web3Wrapper(web3.currentProvider);
export default web3Wrapper;
