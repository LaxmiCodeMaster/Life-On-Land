export default function NewsPage() {
  const news = [
    "Tiger corridor restoration increased safe migration by 21%",
    "New wetlands protection policy approved for key river habitats",
    "Community patrol program reduced illegal hunting incidents"
  ];
  return (
    <div>
      <h1 className="text-3xl font-bold">Conservation News</h1>
      <div className="mt-5 space-y-3">
        {news.map((item) => (
          <article key={item} className="glass rounded-xl p-4">
            {item}
          </article>
        ))}
      </div>
    </div>
  );
}
