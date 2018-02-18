import wallets from '../keys.json';
import web3Wrapper from '../lib3.js';

// Set wallet
const setWalletResult = (address, privateKey) => {
  return {
    type: 'SET_WALLET',
    address,
    privateKey
  }
};

// Set wallet thunk
const setWallet = () => {
  return((dispatch) => {
    dispatch(setWalletResult(
      Object.keys(wallets.private_keys)[0],
      Object.values(wallets.private_keys)[0]
    ));
  });
}

// Set wallet
const getWhiteListResult = (whiteList) => {
  return {
    type: 'GET_WHITELIST',
    whiteList
  }
};

// Get whitelist thunk
const getWhiteList = (address) => {
  return((dispatch) => {
    console.log(address);
    return web3Wrapper.contractFunc('getWhiteList', true, null, { from: address })
      .then(whiteList => {
        console.log(whiteList);
        dispatch(getWhiteListResult(whiteList));
      }).catch(err => {
        console.log(err);
      });
  });
}


export { setWallet, getWhiteList };
