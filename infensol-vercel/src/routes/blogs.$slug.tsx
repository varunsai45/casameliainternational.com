import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";
import { Reveal } from "@/components/Reveal";
import { blogPosts, getBlogPost, type BlogPost } from "@/lib/blog-data";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData ? [
      { title: `${loaderData.post.title} | CASAMELIA` },
      { name: "description", content: loaderData.post.metaDescription },
      { property: "og:title", content: loaderData.post.title },
      { property: "og:description", content: loaderData.post.metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:image", content: loaderData.post.image },
      { property: "og:url", content: `https://casamelia-internationalinternational.lovable.app/blogs/${params.slug}` },
    ] : [],
    links: [{ rel: "canonical", href: `https://casamelia-internationalinternational.lovable.app/blogs/${params.slug}` }],
  }),
  component: BlogArticle,
  notFoundComponent: () => <div className="min-h-screen flex items-center justify-center bg-background"><Link to="/blogs" className="text-champagne">← Back to Blogs</Link></div>,
});

function BlogArticle() {
  const { post } = Route.useLoaderData() as { post: BlogPost };
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <article>
        <header className="relative min-h-[760px] h-[88vh] overflow-hidden bg-onyx">
          <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/45 to-background" />
          <div className="absolute inset-0 bg-grain" />
          <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-16 max-w-[1400px] mx-auto">
            <Link to="/blogs" className="mb-8 text-[10px] tracking-luxury uppercase text-foreground/60 hover:text-champagne transition-colors">← Blogs & Insights</Link>
            <div className="text-[10px] tracking-wider-luxury uppercase text-bronze mb-6">{post.category} · {post.readTime}</div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] max-w-5xl">{post.title}</h1>
            <p className="mt-7 text-base lg:text-xl text-foreground/65 font-light max-w-2xl leading-relaxed">{post.excerpt}</p>
          </div>
        </header>
        <div className="py-20 lg:py-28 px-6 lg:px-16">
          <div className="max-w-[920px] mx-auto">
            <Reveal><p className="font-display text-3xl lg:text-5xl leading-[1.15] text-foreground/90">Thoughtful interiors emerge when design intent, precise engineering and daily life are considered as one.</p></Reveal>
            {post.sections.map((section, index) => (
              <Reveal key={section.heading} delay={80} className="grid md:grid-cols-12 gap-5 md:gap-12 py-12 lg:py-16 border-b border-border/50">
                <div className="md:col-span-1 text-[10px] tracking-luxury text-bronze">0{index + 1}</div>
                <div className="md:col-span-11"><h2 className="font-display text-3xl lg:text-5xl mb-6">{section.heading}</h2><p className="text-foreground/65 font-light leading-8 text-base lg:text-lg">{section.body}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </article>
      <section className="py-20 lg:py-28 bg-onyx bg-grain px-6 lg:px-16 text-center"><Reveal><div className="text-[10px] tracking-wider-luxury text-bronze uppercase mb-6">A Space Made Personal</div><h2 className="font-display text-4xl lg:text-6xl">Turn inspiration into <span className="italic">reality.</span></h2><Link to="/" hash="contact" className="mt-10 inline-flex bg-gradient-gold text-primary-foreground px-9 py-4 text-[11px] tracking-luxury uppercase shadow-glow hover:shadow-luxe transition-all duration-500">Book Consultation →</Link></Reveal></section>
      <section className="py-20 lg:py-28 px-6 lg:px-16"><div className="max-w-[1400px] mx-auto"><Reveal><h2 className="font-display text-4xl lg:text-6xl mb-12">Continue reading.</h2></Reveal><div className="grid md:grid-cols-3 gap-7">{related.map((item) => <Link key={item.slug} to="/blogs/$slug" params={{ slug: item.slug }} className="group"><div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" /></div><div className="text-[9px] tracking-luxury uppercase text-bronze mt-6">{item.category}</div><h3 className="font-display text-2xl lg:text-3xl mt-3 group-hover:text-champagne transition-colors">{item.title}</h3></Link>)}</div></div></section>
      <Footer /><FloatingCall />
    </main>
  );
}