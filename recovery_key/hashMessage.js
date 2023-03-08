const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    const strBytes = utf8ToBytes(message);
    const strHash = keccak256(strBytes);
    return strHash;
}

module.exports = hashMessage;