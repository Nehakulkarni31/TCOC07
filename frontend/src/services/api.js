import axios from "axios";

const API = "http://localhost:5000/notifications";

export const fetchNotifications = async () => {
  try {
    const response = await axios.get(API);

    console.log("API RESPONSE:", response.data);

    return response.data.data;
  } catch (error) {
    console.log(error);

    return [];
  }
};
