// const { connect, keyStores, WalletConnection } = nearAPI;

// const config = {
//   networkId: "testnet",
//   keyStore: new keyStores.BrowserLocalStorageKeyStore(),
//   nodeUrl: "https://rpc.testnet.near.org",
//   walletUrl: "https://wallet.testnet.near.org",
//   helperUrl: "https://helper.testnet.near.org",
//   explorerUrl: "https://explorer.testnet.near.org",
// };

// // connect to NEAR
// const near = await connect(config);

// // create wallet connection
// const wallet = new WalletConnection(near);

// signIn = () => {
//   const near = await connect(this.config);
//   var wallet = new WalletConnection(near,null);
//   wallet.requestSignIn(
//     "example-contract.testnet", // contract requesting access
//     "Example App", // optional
//     "http://YOUR-URL.com/success", // optional
//     "http://YOUR-URL.com/failure" // optional
//   );
// };