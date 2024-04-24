const { Contract } = require("ethers");
const path = require("path"); // Ajout de l'import pour le module path

async function main() {
  // Vérification pour le réseau Hardhat
  if (network.name === "hardhat") {
    console.warn(
      "Vous essayez de déployer un contrat sur le réseau Hardhat, qui est créé et détruit automatiquement à chaque fois. Utilisez l'option Hardhat '--network localhost'"
    );
  }

  // Récupération du déployeur
  const [deployer] = await ethers.getSigners();
  console.log(
    "Déploiement des contrats avec le compte :",
    await deployer.getAddress()
  );

  console.log("Solde du compte :", (await deployer.getBalance()).toString());

  const Contract = await ethers.getContractFactory("Marriage");
  const contract = await Contract.deploy();
  await contract.deployed();

  console.log("Contrat déployé à l'adresse :", contract.address);

  // Sauvegarde des fichiers frontaux
  saveFrontendFiles(contract);
}

function saveFrontendFiles(token) {
  const fs = require("fs");
  const contractsDir = path.join(
    __dirname,
    "..",
    "frontend",
    "src",
    "contracts"
  );

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    path.join(contractsDir, "contract-address.json"),
    JSON.stringify({ Token: token.address }, undefined, 2)
  );

  const TokenArtifact = artifacts.readArtifactSync("Marriage");

  fs.writeFileSync(
    path.join(contractsDir, "Marriage.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
