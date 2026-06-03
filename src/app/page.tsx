import { AnimalCarousel } from "@/components/animal-carousel";
import { Hero } from "@/components/hero";
import { StatsGrid } from "@/components/stats-grid";

export default function HomePage() {
  const cards = [
    {
      title: "Social Impact",
      desc: "Trees planted: 1.2M | Animals protected: 18k",
      cls: "border-habitat/50"
    },
    {
      title: "Conservation News",
      desc: "Live updates from partner parks and research teams",
      cls: "border-water/50"
    },
    {
      title: "Blog",
      desc: "Wildlife, climate, ecosystems and sustainable tourism",
      cls: "border-caution/50"
    },
    {
      title: "Team",
      desc: "Experts, researchers, volunteers, and developers",
      cls: "border-endangered/50"
    }
  ];
  return (
    <div className="space-y-10">
      <Hero />
      <StatsGrid />
      <AnimalCarousel />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className={`glass rounded-2xl border p-5 ${card.cls}`}>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{card.desc}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
