SecureAuth: Node.js Authentication & Authorization SystemA learning project built to master secure user authentication and authorization using a full MERN-style stack. Focus areas include Bcrypt for hashing and JSON Web Tokens (JWT) for stateless session management.🧠 Core Learning OutcomesThis project demonstrates practical skills in:Authentication (AuthN): Secure registration and login flow.Authorization (AuthZ): Protecting resources via access control.Security: Correct use of Bcrypt for password hashing.Session Management: Implementing JWT for stateless sessions.Middleware: Creating reusable Express middleware for token verification.✨ Key API EndpointsEndpointMethodDescription/api/auth/registerPOSTCreates a new user with a bcrypt-hashed password./api/auth/loginPOSTValidates credentials and issues a JWT./api/dataGETProtected route requiring a valid JWT for access.🛠️ Tech StackServer (Backend - server/ directory)TechnologyPurposeNode.js, ExpressAPI foundation.MongoDB / MongooseDatabase and ODM.BcryptPassword security.jsonwebtoken (JWT)Token-based security.Client (Frontend - client/ directory)TechnologyPurposeReact (via Vite)User Interface.Axios / FetchAPI communication.StorageJWT handling on the client side.🚀 Getting Started1. InstallationClone the repo and install dependencies in both the server and client folders:git clone <YOUR_REPO_URL>
cd <YOUR_REPO_NAME>

# Server setup
cd server
npm install

# Client setup
cd ../client
npm install
2. Configuration (/server/.env)Create a .env file in the /server directory:PORT=5000
MONGODB_URI=<Your connection string>
JWT_SECRET=<A long, random, and secure string>
3. Running the App# Start server
cd server
npm run start

# Start client (in a new terminal)
cd ../client
npm run dev
🔒 Security SnippetsPassword Hashing (Bcrypt)// Hashing for Registration
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(plaintextPassword, salt);

// Comparison for Login
const isMatch = await bcrypt.compare(providedPassword, storedHash);
JWT Flow// Token Generation (on successful login)
const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
);

// Token Verification Middleware
// 1. Check Authorization header
// 2. jwt.verify(token, process.env.JWT_SECRET)
// 3. Attach user data to req.user and call next()
