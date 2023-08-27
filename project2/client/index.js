const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {

  const merkle = new MerkleTree(niceList);
  const name = "Anna"
  const index = niceList.findIndex(n => n === name);
  const proofArr = merkle.getProof(index);
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof : proofArr,
    name : name,
  });

  console.log({ gift });
}

main();