require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind hour hunt brick fold stadium'; 
let testAccounts = [
"0x6cde8dc194f828974ffef0109104929c532e2b9080444b3bd11f952258c27712",
"0x778cea3813563a0c22dfb5888dcea1b510654a647925661858b679b9069b671c",
"0x356ebc4f80f1f81478e3d3ad740839e77e1ffb1acd63d2a951c093821ee33abc",
"0x6d9875b1f505a973a6ed2d9d11451f26636440aee35cc5b9aee790531c316949",
"0x3b0680e46e2ee348cd5cfa67f22a9fec0d43e7eed000f602451b507cbf1b2c20",
"0x222154c7df21932aa580799098905c445c8b2f854dd0a03b348ef9d7c5f7a388",
"0x5ddf710cdcf43e21879efc0d9c956333dcda45d66512a18ad11a1054624ae20c",
"0x5de9694318ea352a58d4314efbd003c47aa31a94a9a4b33ed2821c90dc88c1b3",
"0x35d75448d365a5b49944c3d32cf1490a6ed1bf05712e0a1c280a4411b716a577",
"0xfb31740db026ff3ef13df0e1203a219010cd26250363eb5a602ee0d66bac8a2e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

