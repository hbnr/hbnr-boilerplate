Feature('Auth endpoints');

Scenario('User Profile returns 401 when no token is given', async ({I}) => {
    await I.sendGetRequest('/users/me');
    I.seeResponseCodeIsClientError();
});

Scenario('Sign Up User, Sign In User, Retrieve User Profile', async ({I}) => {
    // Sign Up
    // TODO create user

    // Sign In
    const response = await I.login('studio@hbnr.nl', 'secret');

    // Use token to gain access to profile data
    I.amBearerAuthenticated(response.data.access_token);
    await I.sendGetRequest('/users/me');
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsKeys(['id', 'createdAt', 'updatedAt', 'email', 'firstName', 'lastName', 'displayName']);
    I.seeResponseContainsJson({
        email: 'studio@hbnr.nl'
    });
    I.seeResponseValidByCallback(({ data, status, expect }) => {
        expect(data).not.to.include.keys(['hash', 'salt']);
    });

    // TODO delete user
})
