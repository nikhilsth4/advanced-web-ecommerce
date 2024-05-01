import axios from "axios";

export const postOrder = async (order) => {
  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/orders`, {
      order,
    });
  } catch (error) {
    console.error({ error });
  }
};
