export default function BlogPage() {
  const posts = [
    "Why mountain ecosystems matter for climate resilience",
    "Sustainable tourism: visiting responsibly in wildlife habitats",
    "How students can contribute to biodiversity protection"
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold">Wildlife Conservation Blog</h1>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {posts.map((title) => (
          <article key={title} className="glass rounded-xl p-5">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-sm text-slate-300">Climate change, ecosystems, conservation science, and public action.</p>
          </article>
        ))}
      </div>
    </div>
  );
}
