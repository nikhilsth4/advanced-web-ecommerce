import React, { useEffect, useState } from "react";
import Web3 from "web3";
import PaymentContract from "../ethereum/build/PaymentContract.json"; // Import the compiled contract ABI
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../redux/order/order,action";
import { useAuth0 } from "@auth0/auth0-react";
import { clearCart } from "../redux/cart/cart.action";
import { useNavigate } from "react-router-dom";

function EthereumCheckout() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const { user } = useAuth0();

  const { cart_items, total_amount, shipping_fee } = cart;
  const calculateEther = () => {
    const etherPrice = 30000; // Price of one unit of ether in dollars
    const total = shipping_fee + total_amount;
    const totalInEther = total / etherPrice;
    return totalInEther.toFixed(1);
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [succeeded, setSucceeded] = useState(false);

  async function payWithEthereum() {
    setLoading(true);
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);

        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(
          PaymentContract.abi,
          "0xB5db48Ae17edfE8e7F09C1605Fe90ad616cD73a6"
        );

        console.log(process.env.DEPLOYED_CONTRACT_ADDRESS);

        const amount = web3.utils.toWei(calculateEther(), "ether");

        try {
          await contract.methods.contributes(amount).send({
            from: accounts[0],
            value: web3.utils.toWei(calculateEther(), "ether"),
          });
          setErrorMessage(null);
          setSucceeded(true);
          await postOrder({
            user: user.email,
            products: cart_items,
            totalAmount: Number(calculateEther()),
            shippingAddress: "USA",
            paymentMethod: "blockchain",
          });
          setTimeout(() => {
            dispatch(clearCart());
            navigate("/");
          }, 1000);
          console.log("Contribution successful!");
        } catch (error) {
          setErrorMessage(`Error contributing:${error?.innerError?.message}`);
          console.log({ error });
          console.error("Error contributing:", error);
        }
      } else {
        setErrorMessage(
          "MetaMask not detected. Please make sure you have MetaMask installed and unlocked."
        );
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
    setLoading(false);
  }

  return (
    <div>
      <button
        className="btn hero-btn"
        onClick={payWithEthereum}
        disabled={loading}
      >
        Pay with metamask <br />
        {calculateEther()} ether
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {succeeded && <p style={{ color: "green" }}>Payment Succeeded</p>}
    </div>
  );
}

export default EthereumCheckout;
