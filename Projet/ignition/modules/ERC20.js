const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ERCModule = buildModule("ERCModule", (m) => {
  const ERC = m.contract("ERC20");

  return { ERC };
});

module.exports = ERCModule;

// Pour indiquer a Hardhat de se connecter
// a un reseau specifique, il faut utiliser la commande
//npx hardhat ignition deploy ./ignition/modules/ERC20.js --network sepolia
