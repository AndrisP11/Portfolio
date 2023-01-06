This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Add .env with REACT_APP_API_KEY=your api key 

Add .env.d.ts with

declare namespace NodeJS {
interface ProcessEnv {
REACT_APP_API_KEY: string;
}
}

pages/index.tsx change username to your github username.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Uses

React 
Antd design library
marked
js-yaml

integration/github.ts contains most fetch requests to gitHub API user info to be used in project.

## Goal

To create portfolio page using React in Next.js. In this project it essential to use as much as possible Antd design library elements instead of CSS styling.
All portfolio page data are fetched from Github repositories or user profile. In all featured repositories there is portfolio.yml file which contains info about repo.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
