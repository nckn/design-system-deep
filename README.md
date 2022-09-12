This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Deployed at:
```
https://design-system-use.netlify.app/
```

## Styling
Light and dark themes are defined in scss files
```
@media (prefers-color-scheme: dark) {...}
```


pull ui changes from amplify
```
$ amplify pull
```



Following this tutorial:

Learn Next.js With TypeScript in 30 Minutes
https://www.youtube.com/watch?v=OTuHnVvxTDs



resources

https://medium.com/@danhollick/a-designers-guide-to-the-figma-api-3a23a3f93d2

https://github.com/TomDoesTech/beginners-guide-to-next.js
https://app.quicktype.io/

Transitions
https://codesandbox.io/s/animated-page-transitions-in-nextjs-yb71o5


Tips
API and access tokens for Figma
https://www.figma.com/developers/api#access-tokens
Right click page and select 'Copy link to file' to see the uid



https://github.com/andrei-inc/Styler


With
```
$ npm run build:static
```
We build a static website. The output is in the out folder

Serve the static website:
```
npx serve out
```





Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
