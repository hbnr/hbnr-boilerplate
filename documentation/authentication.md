# Authentication

## Salt And Pepper

We all have been taught to never save passwords. So what should we store? Well, we should store a hashed
version of the password so that if the database gets breached. Nobody will be able to retrieve your password.

But even just hashing the password isn't enough, that is why on creating the user account we also create 
a unique salt for the user. This way when two users share the same password, the hash will look different.

Last we add a pepper which is a unique string for the application. It's stored in the code separate from the 
database. Just as an extra measure.

## JWT
So how does JWT work again? After we verify that the user is who he is, we don't want to verify this every time
the user needs something from the backend. Because verifying is expensive. So instead we return the user a special 
token which is cheaper to verify. This JSON Web Token or JWT contains public information of the user, it would 
usually contain the users role and ID. 

### Lifetime
JWT tokens can live as long as the developer has set. For safety reasons, we don't want it to be too long. 

### Validation
So how does it validate it so quickly? A JWT is divided in three parts: header, payload and the signature. The header
and payload are easily decoded as they are base64 encoded themself. The signature is the header and payload encrypted
with a secret key that only the backend knows. This prevents the client to make changes to the payload as the client
is not able to create the signature without knowing the jwt-secret. The backend does not need to look up in the database
and can easily verify the validity of the jwt.

### JWT secret
By changing the JWT secret you can invalidate all tokens that have previously been created. This could be handy
if you made the token's lifetime too long.
