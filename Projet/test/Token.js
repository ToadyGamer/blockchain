const { expect } = require("chai");

//ether.js est une librairie qui permet d'interargir avec les contrats

describe("On s'apprete a tester le deploiement du token", function () {
  it("should send the total to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.deployContract("Token");

    const ownerBalance = await Token.balanceOf(owner.address);

    expect(await Token.totalSupply()).to.equal(ownerBalance);
  });
});

//DEPLOYER UN CONTRAT SUR SEPOLIA
//CREER UN PROJET REACT POUR INTERARGIR AVEC UN CONTRAT DEJA DEPLOYER
//UTILISE INFURA POUR HEBERGER UN CONTRAT
