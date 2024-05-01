const Web3 = require("web3");

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running
  web3 = new Web3(window.ethereum);
  window.ethereum.enable(); // Request account access if needed
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    process.env.NEXT_PUBLIC_INFURA_URL
  );
  web3 = new Web3(provider);
}

module.exports = web3;
