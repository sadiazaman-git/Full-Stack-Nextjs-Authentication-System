
# User Profile With Proper Authentication System and Email Verification Using NextJS 14
This project is an end-to-end user authentication system created using Next.js and MongoDB. It provides sign-in and sign-up functionality with various features and technologies.

Live Demo: [User Authentication Next.js](https://user-auth-nextjs-flax.vercel.app/profile)

## Features

- User Sign-Up: Allow users to create new accounts by providing their information, which is securely stored in a MongoDB database.
- User Sign-In: Existing users can log in with their credentials, and their passwords are encrypted using bcryptjs for security.
- Email Verification: Utilizes nodemailer to send email verification messages to users for account activation.
- User Profile: Users can access their profiles after signing in.
- Front-end Design: Designed with tailwindcss to provide an appealing user interface.
- Notifications: Implemented react-hot-toast for displaying user-friendly notifications.
- REST API created
- Middleware used
- Authentication is implemented using Json Web Token.
## Technologies Used

- [Next.js](https://nextjs.org/): A popular React framework for building server-rendered React applications.
- [MongoDB](https://www.mongodb.com/): A NoSQL database used for storing user data.
- [axios](https://github.com/axios/axios): Used for making HTTP requests.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Used for password encryption.
- [nodemailer](https://nodemailer.com/): Used for sending email verifications.
- [tailwindcss](https://tailwindcss.com/): A utility-first CSS framework for styling the front end.
- [react-hot-toast](https://react-hot-toast.com/): Used for displaying user notifications.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/user-auth-nextjs.git
```

2. Install dependencies
```bash
cd user-auth-nextjs
npm install
```
3. Configure environment variables. Create a .env.local file with the following variables:

```bash
MONGO_DB_URL=your-mongodb-uri
JWT_SECRET=your-jwt-secret
USER_NAME=your-email
USER_PASSWORD=your-email
=your-email-password
```
4. Run the application

```bash
npm run dev
```

Your application will be available at `http://localhost:3000`

## Contribution
Contributions are welcome! Feel free to open issues and pull requests to help improve this project.