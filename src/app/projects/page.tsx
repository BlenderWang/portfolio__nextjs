import { type Metadata } from "next";
import Image from "next/image";

import { Card } from "@/components/Card";
import { Container } from "@/components/Container";

const projects = [
  {
    name: "Helium Contoso Dashboard (mini clone)",
    description:
      "Made with React, Tailwindcss, Typescript. The demo shows a simplified version of the app.",
    link: {
      href: "https://nextjs13-workapp-mini-clone.vercel.app/",
      label: "nextjs13-workapp-mini-clone-git-master-blenderwang.vercel.app",
    },
    thumbnail:
      "https://res.cloudinary.com/shirlzzz9/image/upload/v1698950488/PortfolioAsset/Screenshot_from_2023-11-02_19-38-05.png",
  },
  {
    name: "Search with GitHub API",
    description:
      "Made with NextJs, Bulma CSS, Typescript and GitHub API. Deployed on Vercel.",
    link: {
      href: "https://nextjs-gihub-api.vercel.app/",
      label: "github.com/BlenderWang/nextjs-gihub-api",
    },
    thumbnail:
      "https://res.cloudinary.com/shirlzzz9/image/upload/v1657880714/PortfolioAsset/Screenshot_3.jpg",
  },
  {
    name: "Gigapay (payslip)",
    description:
      "It has never been easier to make payout and receiving salary. Please visit gigapay.co to learn more.",
    link: {
      href: "",
      label: "Visit Gigapay",
    },
    thumbnail:
      "https://res.cloudinary.com/shirlzzz9/image/upload/v1648979815/PortfolioAsset/payout1.jpg",
  },
  {
    name: "E-Shop - MERN e-commerce project",
    description:
      "An e-commerce project taking advantage of the MERN stack and fully incorporate Redux with React.",
    link: {
      href: "https://eshop-ecommerce-app.herokuapp.com/",
      label: "github.com/BlenderWang/eshop-ecommerce-app",
    },
    thumbnail:
      "https://res.cloudinary.com/shirlzzz9/image/upload/v1617961167/PortfolioAsset/Screenshot_from_2021-04-09_11-37-01.jpg",
  },
  {
    name: "NextJs & Strapi",
    description:
      "Server-side rendered news website. Strapi cms headless main content hub.",
    link: {
      href: "https://github.com/BlenderWang/nordic_news_center_nextjs_strapi",
      label: "nordic_news_center_nextjs_strapi",
    },
    thumbnail:
      "https://res.cloudinary.com/shirlzzz9/image/upload/v1648989687/PortfolioAsset/Home_desktop.png",
  },
  {
    name: "Skilldar",
    description: "A coding test for Skilldar",
    link: {
      href: "https://github.com/BlenderWang/challenge-solution",
      label: "challenge-solution",
    },
    thumbnail:
      "https://res.cloudinary.com/shirlzzz9/image/upload/v1648988293/PortfolioAsset/Screenshot_20200810_222718.png",
  },
  {
    name: "A Simple Website Template",
    description:
      "A freelance job I had done for a friend's friend. There was a little bit implementation of parallax effect and pulling images from source.unsplash.com.",
    link: {
      href: "https://reverent-swirles-2fac9c.netlify.com",
      label: "github.com/BlenderWang/simpleWebsite",
    },
    thumbnail:
      "https://res.cloudinary.com/shirlzzz9/image/upload/v1569525067/PortfolioAsset/carlos-website-template.jpg",
  },
  {
    name: "HTML & CSS Only (flexbox vs css grid)",
    description:
      "My favorite school project done by only HTML and CSS in such psychodelic color scheme. Needless to say without SCSS it took me quite a while to build it up. It made me love CSS even more!",
    link: {
      href: "https://codepen.io/blenderWang/pen/ebvqVz?editors=1100",
      label: "codepen.io/blenderWang/pen/ebvqVz?editors=1100",
    },
    thumbnail:
      "https://res.cloudinary.com/shirlzzz9/image/upload/v1569525066/PortfolioAsset/school-project-02.jpg",
  },
];

function LinkIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Projects",
  description: "My previous projects.",
};

export default function Projects() {
  return (
    <Container className="mt-16 font-sans sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Projects
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          My previous projects.
        </p>
      </header>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="justify-centerbg-white relative z-10 flex items-center shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.thumbnail}
                alt="project thumbnail"
                className="rounded"
                width={500}
                height={200}
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-accent dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </Container>
  );
}
