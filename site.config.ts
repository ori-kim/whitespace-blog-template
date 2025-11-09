import type { SiteConfig } from "~/cfg-schema";

const config: SiteConfig = {
  siteUrl: "https://whitespace-blog-template.netlify.app",
  title: "Orik's Blog",
  titleTemplate: "%s",
  description: "Orik's Personal Blog",
  favicon: "/favicon.ico",
  ogImage: "/og.avif",
  // analytics: {
  //   provider: 'umami',
  //   websiteId: 'your-umami-website-id',
  // },
  bio: {
    name: "Orik",
    avatar: "/avatar.avif",
    description: "Orik's Personal Blog",
    links: [
      {
        label: "mail",
        url: "mailto:ateals@icloud.com",
      },
      {
        label: "github",
        url: "https://github.com/ori-kim",
      },
      {
        label: "linkedin",
        url: "https://www.linkedin.com/in/%EB%AF%BC%EC%9A%B0-%EA%B9%80-437019280",
      },
      // {
      //   label: "instagram",
      //   url: "https://www.instagram.com/your-instagram-username",
      // },
    ],
  },
  // @see https://giscus.app/
  giscus: {
    repo: "ori-kim/comments",
    // change this to your repo id
    repoId: "R_kgDOKEaPrQ",
  },
};

export default config;
