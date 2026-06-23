import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";
import { Reveal } from "@/components/Reveal";
import { blogCategories, blogPosts } from "@/lib/blog-data";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Luxury Interior Design Blogs | CASAMELIA" },
      { name: "description", content: "Expert insights on luxury interiors, villa design, modular kitchens, German manufacturing, architecture and smart homes." },
      { property: "og:title", content: "Blogs & Insights | CASAMELIA International" },
      { property: "og:description", content: "Ideas and practical guidance for considered spaces, written by CASAMELIA's design and manufacturing team." },
      { property: "og:url", content: "https://casamelia-internationalinternational.lovable.app/blogs" },
    ],
    links: [{ rel: "canonical", href: "https://casamelia-internationalinternational.lovable.app/blogs" }],
  }),
  component: BlogsPage,
});

function BlogsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <section className="relative pt-44 pb-20 lg:pt-52 lg:pb-28 bg-onyx bg-grain px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-7"><span className="h-px w-12 bg-bronze" /><span className="text-[10px] tracking-wider-luxury text-bronze uppercase">The CASAMELIA Journal</span></div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95]">Blogs & <span className="italic text-gradient-gold">Insights.</span></h1>
            <p className="mt-8 max-w-2xl text-foreground/60 font-light text-base lg:text-lg leading-relaxed">Ideas, expertise and practical guidance for considered spaces—from our design studio and manufacturing floor.</p>
          </Reveal>
          <Reveal delay={120} className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/50 pt-7">
            {blogCategories.map((category) => <span key={category} className="text-[10px] tracking-luxury uppercase text-foreground/50">{category}</span>)}
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-16">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={(index % 3) * 100}>
              <article className="group">
                <Link to="/blogs/$slug" params={{ slug: post.slug }} className="block relative aspect-[4/3] overflow-hidden bg-card border-gradient">
                  <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 to-transparent" />
                  <span className="absolute left-6 bottom-5 text-[9px] tracking-wider-luxury uppercase text-champagne">{post.category}</span>
                </Link>
                <div className="pt-7">
                  <div className="text-[10px] tracking-luxury uppercase text-foreground/40 mb-4">{post.readTime}</div>
                  <h2 className="font-display text-3xl lg:text-4xl leading-[1.05] group-hover:text-champagne transition-colors"><Link to="/blogs/$slug" params={{ slug: post.slug }}>{post.title}</Link></h2>
                  <p className="mt-4 text-sm text-foreground/55 font-light leading-relaxed">{post.excerpt}</p>
                  <Link to="/blogs/$slug" params={{ slug: post.slug }} className="inline-flex mt-6 text-[10px] tracking-luxury uppercase text-champagne">Read Insight →</Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-onyx bg-grain px-6 text-center">
        <Reveal><div className="text-[10px] tracking-wider-luxury text-bronze uppercase mb-6">Translate Ideas Into Space</div><h2 className="font-display text-4xl lg:text-6xl">Begin your <span className="italic">design story.</span></h2><Link to="/" hash="contact" className="mt-10 inline-flex bg-gradient-gold text-primary-foreground px-9 py-4 text-[11px] tracking-luxury uppercase shadow-glow hover:shadow-luxe transition-all duration-500">Book Consultation →</Link></Reveal>
      </section>
      <Footer /><FloatingCall />
    </main>
  );
}