import CreateNextApp from "@/components/create-next-app";
import { Button } from "@/components/ui/button";
import { cn, fadeIn } from "@/lib/utils";
import { GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default async function Page() {
  return (
    <main className="flex flex-col gap-4 pb-12 pt-4 text-center items-center sm:gap-8 sm:py-20">
      <section className={cn(fadeIn, "animation-delay-200 flex flex-col gap 2")}>
        <h1 className="text-4xl font-bold sm:text-7xl">Tech With mitchel</h1>
        <h2 className="text-lg font-light text-muted-foreground sm:text-xl">Getting Started with your tech journey</h2>
      </section>
      <section className={cn(fadeIn, "animation-delay-400")}>
        <span className="text-lg sm:text-xl">
          <div>I enjoy building and creating apps for the web.</div>
          <div>
            powered by&nbsp;
            <Link className="underline underline-offset-2" href="https://nextjs.org/" target="_blank">
              Next.js
            </Link>
            &nbsp;and&nbsp;
            <Link className="underline underline-offset-2" href="https://ui.shadcn.com/" target="_blank">
              shadcn/ui
            </Link>
          </div>
        </span>
      </section>
      <section className={cn(fadeIn, "flex items-center gap-8 animation-delay-600")}>
        <Button asChild size="lg">
          <Link
            href="/blog"
            target="_blank"
          >
            <VercelLogoIcon className="mr-2 h-4 w-4" /> Blog
          </Link>
        </Button>

        <Button asChild size="lg" variant="secondary">
          <Link href="https://www.mitchelinaju.com" target="_blank">
            <GitHubLogoIcon className="mr-2 h-4 w-4" /> Home
          </Link>
        </Button>
      </section>
    </main>
  );
}
