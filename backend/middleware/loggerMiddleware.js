const axios = require("axios");

const {
    getAccessToken
} = require("../services/authService");

const LOG_API =
"http://4.224.186.213/evaluation-service/logs";

async function Log(
    stack,
    level,
    packageName,
    message
) {

    try {

        const token =
        await getAccessToken();

        await axios.post(

            LOG_API,

            {
                stack,
                level,
                package: packageName,
                message
            },

            {
                headers: {
                    Authorization:
                    `Bearer ${token}`
                }
            }
        );

        console.log(
            "Log sent successfully"
        );

    } catch (error) {

        console.log(
            "Log Error:",
            error.message
        );
    }
}

module.exports = {
    Log
};