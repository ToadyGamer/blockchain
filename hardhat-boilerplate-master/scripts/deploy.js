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

  // Déploiement du contrat Token
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.deployed();

  console.log("Adresse du contrat Token :", token.address); // Ajout du console.log pour afficher l'adresse du contrat

  // Sauvegarde des fichiers frontaux
  saveFrontendFiles(token);
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

  const TokenArtifact = artifacts.readArtifactSync("Token");

  fs.writeFileSync(
    path.join(contractsDir, "Token.json"),
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
