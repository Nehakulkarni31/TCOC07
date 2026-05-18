const axios = require("axios");

const AUTH_URL = "http://4.224.186.213/evaluation-service/auth";

async function getAccessToken() {
  try {
    const response = await axios.post(AUTH_URL, {
      email: "nehagirish31@gmail.com",
      name: "neha kulkarni",
      rollNo: "TCOC07",
      accessCode: "fzEQSQ",
      clientID: "839a81aa-950a-4e37-948e-09f90450cca0",
      clientSecret: "kayCMePCctefjHMw"
    });

    return response.data.access_token;
  } catch (error) {
    console.log("Auth Error:", error.message);

    return null;
  }
}

module.exports = {
  getAccessToken,
};
