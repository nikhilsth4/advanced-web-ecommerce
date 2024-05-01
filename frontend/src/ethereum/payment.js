import web3 from "./web3";
import PaymentContract from "./build/PaymentContract.json";

const instance = new web3.eth.Contract(
  PaymentContract.abi,
  process.env.DEPLOYED_CONTRACT_ADDRESS
);

console.log(process.env.DEPLOYED_CONTRACT_ADDRESS);

export default instance;
