import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { GermanCraft } from "@/components/GermanCraft";
import { WhyCasamelia } from "@/components/WhyCasamelia";
import { Materials } from "@/components/Materials";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Leadership } from "@/components/Leadership";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <GermanCraft />
      <Projects />
      <WhyCasamelia />
      <Materials />
      <Services />
      <Process />
      <Testimonials />
      <Leadership />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
