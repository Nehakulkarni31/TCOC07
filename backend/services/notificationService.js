const axios = require("axios");

const {
    getAccessToken
} = require("./authService");

const API =
"http://4.224.186.213/evaluation-service/notifications";

async function fetchNotifications() {

    try {

        console.log("Fetching notifications...");

        // Get auth token
        const token =
        await getAccessToken();

        // Call protected API
        const response =
        await axios.get(API, {

            timeout: 5000,

            headers: {
                Authorization:
                `Bearer ${token}`
            }
        });

        console.log(response.data);

        return response.data.notifications;

    } catch (error) {

        console.log("ERROR:");

        console.log(error.message);

        return [];
    }
}

module.exports = {
    fetchNotifications
};