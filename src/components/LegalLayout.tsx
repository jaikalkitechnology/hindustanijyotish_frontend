import { Link } from "@tanstack/react-router";
import { BrandLogo, SiteFooter } from "@/components/HindustaniJyotishHome";

export type LegalBlock =
  { type: "p"; text: string } | { type: "heading"; text: string } | { type: "ul"; items: string[] };

export function LegalContent({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="display-serif mt-10 text-2xl text-primary first:mt-0 sm:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul
              key={index}
              className="mt-3 flex list-disc flex-col gap-2 pl-5 text-sm leading-7 text-muted-foreground"
            >
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={index} className="mt-3 text-sm leading-7 text-muted-foreground">
            {block.text}
          </p>
        );
      })}
    </>
  );
}

export function LegalLayout({
  title,
  lastUpdated,
  blocks,
}: {
  title: string;
  lastUpdated?: string;
  blocks: LegalBlock[];
}) {
  return (
    <main className="site-shell min-h-screen">
      <header className="border-b border-border/60">
        <div className="site-container flex h-[88px] items-center justify-between">
          <Link to="/" className="flex items-center">
            <BrandLogo />
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary">
            ← Back to Home
          </Link>
        </div>
      </header>

      <section className="py-16 sm:py-20">
        <div className="site-container max-w-3xl">
          <h1 className="display-serif text-4xl text-foreground sm:text-5xl">{title}</h1>
          {lastUpdated && <p className="mt-3 text-xs text-muted-foreground">{lastUpdated}</p>}
          <div className="gold-rule mt-6" />
          <div className="mt-8">
            <LegalContent blocks={blocks} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
