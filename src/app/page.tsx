import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import clsx from "clsx";

import { Container } from "@/components/Container";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";
import { Button } from "@/components/Button";

import logoDevUp from "@/images/logos/devup_solutions_logo.jpg";
import logoCompileit from "@/images/logos/compile_it_logo.jpg";
import logoGigapay from "@/images/logos/gigapay_logo.jpg";
import coverImage from "@/images/computer-ai.png";
import logoEntryscape from "@/images/logos/es_logo.svg";

interface Role {
  company: string;
  title: string;
  logo: ImageProps["src"];
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
}

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  let startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  let endLabel = typeof role.end === "string" ? role.end : role.end.label;
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {role.logo ? (
          <Image
            src={role.logo}
            alt=""
            className="h-7 w-7 rounded-full"
            unoptimized
          />
        ) : (
          <BriefcaseIcon className="h-6 w-6" />
        )}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: "MetaSolutions",
      title: "Front-end Developer",
      logo: logoEntryscape,
      start: "2024",
      end: "",
    },
    {
      company: "DevUp Solutions",
      title: "Front-end Developer",
      logo: logoDevUp,
      start: "2022",
      end: "2023",
    },
    {
      company: "Compileit",
      title: "Front-end Developer",
      logo: logoCompileit,
      start: "2022",
      end: "2022",
    },
    {
      company: "Gigapay",
      title: "Front-end Developer",
      logo: logoGigapay,
      start: "2021",
      end: "2022",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="https://drive.google.com/file/d/1qVDsI7rGN-gjbDyjdkiLoC7FwgFH_BAA/view?usp=drive_link"
        variant="secondary"
        className="group mt-6 w-full"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Container className="mt-16 xl:mt-32">
        <div className="max-w-2xl font-sans">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Shirley Wang
          </h1>
          <p className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
            I&apos;m a Front-end developer, a 3D hobbist and anime lover.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/BlenderWang"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/shirley-wang-37b7457b"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
            <SocialLink
              href="https://twitter.com/Shirley36838704"
              aria-label="Follow on X"
              icon={XIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 lg:gap-x-10">
          <div className="space-y-10 font-sans">
            <div className="flex items-center rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
              <SocialLink
                href="mailto:shirleywang527@gmail.com"
                icon={MailIcon}
              >
                shirleywang527@gmail.com
              </SocialLink>
              <span className="ml-3 xl:ml-10">shirleywang527@gmail.com</span>
            </div>
            <Resume />
          </div>

          <Image
            src={coverImage}
            alt=""
            sizes="(min-width: 640px) 30vw, 1rem"
            className="h-full w-full rounded object-cover lg:-mt-40"
          />
        </div>
      </Container>
    </>
  );
}
