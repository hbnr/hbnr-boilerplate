// in this file you can append custom step methods to 'I' object

module.exports = function () {
    return actor({

        // Define custom steps here, use 'this' to access default methods of I.
        // It is recommended to place a general 'login' function here.

        login: async function (email, password) {
            const response = await this.sendPostRequest('/auth/signin', secret({
                email, password
            }));
            this.seeResponseCodeIsSuccessful();
            return response;
        },

        failLogin: async function(email, password) {
            const response = await this.sendPostRequest('/auth/signin', secret({
                email, password
            }));
            this.seeResponseCodeIsClientError();
            return response;
        },

        createUser: async function(email, password, rest = {}) {
            const response = await this.sendPostRequest('/auth/signin', secret({
                email, password
            }));
            this.seeResponseCodeIsSuccessful();
            return response;
        },
    });
}
