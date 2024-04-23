// Importez Web3.js
const { Web3 } = require("web3");

// Adresse de votre contrat Token déployé avec Sepolia ou Hardhat
const contractAddress = "0x9E142Ad97e27CfEE114D0A7B28e6241a051F0042"; // Adresse de votre contrat

// ABI de votre contrat Token
const contractABI = [
  // ABI de votre contrat Token
];

// Créez une instance du contrat Token à partir de l'adresse et de l'ABI
const web3 = new Web3(
  "https://linea-sepolia.infura.io/v3/629801a6feed4849aedade2086047809"
);
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Exemple : Récupérer le solde d'un compte
async function getBalance(account) {
  const balance = await contract.methods.balanceOf(account).call();
  console.log(`Le solde de ${account} est de ${balance} tokens.`);
}

// Exemple : Transférer des tokens à un autre compte
async function transferTokens(to, value, from) {
  const receipt = await contract.methods
    .transfer(to, value)
    .send({ from: from });
  console.log(
    `Transfert de ${value} tokens à l'adresse ${to} effectué. Hash de la transaction : ${receipt.transactionHash}`
  );
}

// Exemples d'utilisation des fonctions
getBalance("ADRESSE_COMPTE");
// transferTokens("ADRESSE_DESTINATAIRE", MONTANT, "ADRESSE_EMETTEUR");

// Exemple de gestion d'erreurs
process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});
