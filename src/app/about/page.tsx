import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from "@/components/SocialIcons";
import myImage from "@/images/me.jpg";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex")}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-500 dark:text-zinc-200 dark:hover:text-pink-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "I’m Shirley Wang. I like coding, drawing and anime.",
};
const About = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="font-sans lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={myImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="font-sans lg:order-first lg:row-span-2">
          <h1 className="text-xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Shirley Wang.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I currently in Stockholm Sweden but originally I am from China. I
              like coding, drawing and anime. I was majored in economics and
              literature back in the university. I’ve always been drawn to
              stories, fantasies and mythologies, which lead to graphics and
              animation as well as to the decision of moving to Sweden, a land
              that is filled with fansinating stories.
            </p>{" "}
            <p>
              Meanwhile the fast development of the web have intrigued me and
              let me into the world of Front-End Development where I can further
              grow and improve as a designer and a developer. As a person I have
              the curiosity for obtaining knowledge and the persistency for
              improving my skills.
            </p>
            <h2 className="mb-4 mt-20 text-xl font-bold leading-loose text-white">
              A not-very-smooth-sailing-journey into coding
            </h2>
            <p>
              {" "}
              I used to imagine myself being a manga artist or animator but in
              2014 I was told that a 4.5 centimeter in diameter tumor was lodged
              in my brain causing headaches, migraines, halluciations and what
              not. The surgery was a success but the following rehab was long
              and painful. Long story short, I began coding after some
              convincing and cheering. In 2018 I started going to Nackademin in
              Stockholm Sweden for an official education. I was hooked.
            </p>
            <p>
              I graduated from college in 2020 from{" "}
              <a
                href="https://nackademin.se/en/"
                className="font-bold text-accent underline"
              >
                Nackademin
              </a>{" "}
              with a degree in Front-end development.
            </p>
            <p>
              After college, I did not get employed right away due to Covid19
              pandemic. So I became a freelancer, developing templates as well
              as designing logos. A few month later, I joined a web company on
              connecting talents with product owners called
              <a
                href="https://objecta.com/"
                className="font-bold text-accent underline"
              >
                Object A
              </a>
              . I worked there for a few month, before going to{" "}
              <a
                href="https://www.gigapay.co/"
                className="font-bold text-accent underline"
              >
                Gigapay
              </a>
              . I genuinely enjoyed the company and the time working there. But
              all good things have to come to an end. After that, I had a
              shockingly brief employment with{" "}
              <a
                href="https://compileit.com/"
                className="font-bold text-accent underline"
              >
                Compileit
              </a>
              . Unfortutely, I had to leave. It was a good thing, too, because
              two months after I found my favorite job at{" "}
              <a
                href="https://www.devup.solutions/"
                className="font-bold text-accent underline"
              >
                DevUp Solutions
              </a>
              .
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/ahaywood" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/amy-dutton"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="https://twitter.com/selfteachme"
              icon={XIcon}
              className="mt-4"
            >
              Follow on X
            </SocialLink>
            <SocialLink
              href="mailto:shirleywang527@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 font-sans dark:border-zinc-700/40"
            >
              shirleywang527@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default About;
