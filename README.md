This is the practice app that helps you understand the basics of Next.js with typescript.
# Notes App

This is a Notes App built with Next.js and TypeScript, styled with Tailwind CSS, and connected to a Neon PostgreSQL database. The clerk handles user management, including webhook configurations. The project is deployed on Vercel.

## Features

- **User Authentication**: Powered by Clerk, with webhook support for real-time user data updates and signIn and signUp with google.
- **CRUD for Notes**: Users can create, read, update, and delete notes.
- **Persistent Data**: Notes are stored in a PostgreSQL database hosted on Neon.
- **Deployed on Vercel**: Efficient serverless deployment with automatic updates on push.

## Tech Stack

- **Next.js** - Framework for React apps with SSR support
- **TypeScript** - Statically typed language for more robust code
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Neon PostgreSQL** - Serverless PostgreSQL database
- **Clerk** - Authentication and user management
- **Vercel** - Hosting and deployment platform

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- Clerk account and project setup
- Neon PostgreSQL database set up with connection URL

### Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-username/notes-app.git
    cd notes-app
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Set Up Environment Variables**: In the root directory, create a `.env.local` file and add your environment variables:
    ```env
    DATABASE_URL=your-db-url
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=clerk-api-key
    CLERK_SECRET_KEY=clerk-secret-key
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    WEBHOOK_SECRET=webhook-secret
    ```

4. **Run Database Migrations** (if applicable):
    ```bash
    npx drizzle-kit db push
    ```

5. **Start the Development Server**:
    ```bash
    npm run dev
    ```

    Visit `http://localhost:3000` to view the app locally.

### Deployment

This project is configured to deploy seamlessly on **Vercel**. Push the repository on the github and once your environment variables are set on Vercel, Vercel will automatically build and deploy your application and keeps the track of deployments based on commits.

## Project Structure

- **/components** - Reusable UI components.
- **/pages** - Next.js pages for routing.
- **/lib** - Database and Clerk configuration.
- **/actions** - Functions for interacting with the database and user actions.

## Acknowledgments

- [Clerk](https://clerk.dev/) for authentication and user management.
- [Neon](https://neon.tech/) for serverless PostgreSQL database hosting.
- [Vercel](https://vercel.com/) for deployment and hosting.
