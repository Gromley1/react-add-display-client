"use-strict";
const { clients } = require("../data");   


module.exports = async function (fastify ) {
    fastify.get("/clients", async function () {
        return {
            data: {
                clients
            }
        };
    });
}