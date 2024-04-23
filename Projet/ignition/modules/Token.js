const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const TokenModule = buildModule("TokenModule", (m) => {
  const Token = m.contract("Token");

  return { Token };
});

module.exports = TokenModule;

// Pour indiquer a Hardhat de se connecter
// a un reseau specifique, il faut utiliser la commande
