require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift remember pizza million guess clog slot genius'; 
let testAccounts = [
"0x133036e6b4129aed8b61f1288a4a3d93c3091d054b8b220c81a3a892556e22d0",
"0xea629dce58ccd880effc467b94e66ce06f1b7fb905f8da204196dfba66df3845",
"0x2d5e9fe97f59abc1fbd7b7ca68e0dc958917c0840526c293726dda4adf28f264",
"0xdff2d64546adb1230bd950e47abacd41481e07c2f1f5ded1f59280a6684a9c7c",
"0xcd8a705145f5fa73a3cf4804dd04aa937eef80fa0a726ded44494210c0b63b9b",
"0x43d129549f4005bb1cf01cc3bb8d1b7a231662733babaac515788639e7685a58",
"0x6a7010040283c5f676edb8aa786e070ca8141b6abd19ae51b07a45aff02fa8c2",
"0xa59e69ea0f0a349e13355a9b65e503ec1ce6c1c64cdb6c430a8a9e629a752b23",
"0x24ad1fb5a18b887bfdbcd435d08c2ec1cd47788b2b9a7f8eadde9ce53092b947",
"0x7743e8ca82969e197feba06503bf1fcee6ceaa353144dc2746bd890809669478"
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

