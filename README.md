# Minimal Blog built using NextJS + Notion
This has all but the blog from https://github.com/timolins/timo-sh.
It's built with following technologies:
* [React](https://reactjs.org/) – My frontend library of choice.
* [Next.js](https://nextjs.org/) – It's static site generation is amazing, especially when hosted on [Vercel](https://vercel.com).
* [react-notion](https://github.com/splitbee/react-notion) – Renders most of the content on the page. Notion as a CMS is super convenient. 
* [TypeScript](https://typescriptlang.org) – Typed JavaScript. I love it.
* [Tailwind CSS](https://tailwindcss.com/) – My favorite way of writting CSS nowadays.

## Local Development
Create .env file
```sh
NOTION_BLOG_TABLE_ID=<NOTION_BLOG_TABLE_ID>
```

```sh
yarn
yarn dev
```
## Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gparuthi/minimal-notion-blog/)
