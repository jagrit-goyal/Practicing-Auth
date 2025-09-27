SecureAuth: Node.js Authentication & Authorization SystemA focused learning project demonstrating secure user authentication and authorization using a full MERN-style stack. This application implements essential security features using Bcrypt for hashing and JSON Web Tokens (JWT) for stateless session management.🧠 Core Learning OutcomesThe project was designed to demonstrate mastery over key security concepts:ConceptImplementation FocusAuthentication (AuthN)Verifying the identity of a user (Login/Sign-up).Authorization (AuthZ)Granting or denying access to specific resources after identity is verified (Protected Routes).Password HashingSecurely storing user passwords using the Bcrypt algorithm.Token-Based SecurityImplementing stateless sessions using JWTs for secure communication.MiddlewareCreating reusable Express middleware for tasks like request validation and token verification.✨ Key Features ImplementedUser Registration (/api/auth/register): Securely accepts user credentials, hashes the password using bcrypt, and saves the user data to the database.User Login (/api/auth/login): Compares the provided password with the stored hash using bcrypt.compare(). If successful, generates a JWT and sends it back to the client.Token Verification Middleware: A custom Express middleware that verifies the JWT's signature and expiration.Protected Route (/api/data): An example route accessible only to users with a valid, non-expired JWT, demonstrating authorization.🛠️ Tech StackServer (Backend)TechnologyPurposeNode.js, ExpressAPI foundation.MongoDB / MongooseNoSQL database and its object data modeling (ODM) library.BcryptLibrary for securely hashing passwords.jsonwebtoken (JWT)Library for generating and verifying access tokens.dotenvEnvironment variable management for configuration and secrets.Client (Frontend)TechnologyPurposeReact (via Vite)Frontend library for building the user interface.Axios / FetchHTTP client for making API calls to the server.Local/Session StorageTemporary storage for the JWT after successful login.🚀 Getting StartedFollow these steps to get the development environment running on your local machine.1. PrerequisitesNode.js (LTS version recommended)npm (or yarn)MongoDB instance (local or cloud-hosted)2. Installation & SetupClone the repository:git clone <YOUR_REPO_URL>
cd <YOUR_REPO_NAME>
Server SetupNavigate to the server directory:cd server
Install dependencies:npm install
Create a file named .env in the /server directory and add your configuration variables (these are ignored by Git):PORT=5000
MONGODB_URI=<Your MongoDB connection string>
JWT_SECRET=<A long, random, and secure string for token signing>
Start the server:npm run start
# or npm run dev
Client SetupNavigate to the client directory:cd ../client
Install dependencies:npm install
Start the client application:npm run dev
The client application should now be running, typically at http://localhost:5173.🔒 Authentication Flow Deep DiveThis section details the security mechanisms implemented on the server:1. Password Hashing (Bcrypt)Passwords are never stored in plain text.Registration: When a new user signs up, the plaintext password is passed through the bcrypt.hash() function before being saved.// Server-side example logic:
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(plaintextPassword, salt);
// ... save hashedPassword to DB
Login: When a user attempts to log in, the provided password is compared against the stored hash using bcrypt.compare().// Server-side example logic:
const isMatch = await bcrypt.compare(providedPassword, storedHash);
if (!isMatch) return res.status(400).send('Invalid credentials');
2. Session Management (JWT)A stateless and scalable method to manage user sessions.Token Generation: Upon successful login, a JWT is created containing a secure payload (typically just the user ID and username).// Server-side example logic:
const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: '1h' } // Token expires after 1 hour
);
res.json({ token });
Token Verification: The server's middleware verifies the token using jwt.verify(). If verification fails, the request is rejected with a 401 Unauthorized status.