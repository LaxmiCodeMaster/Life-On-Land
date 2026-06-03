"use client";

import { useState } from "react";

type Chat = { role: "user" | "assistant"; text: string };

export default function AssistantPage() {
  const [query, setQuery] = useState("");
  const [chats, setChats] = useState<Chat[]>([
    { role: "assistant", text: "Hello, I am EcoCopilot AI. Ask me about wildlife, conservation, tourism, or ecosystems." }
  ]);
  const [identification, setIdentification] = useState<string>("");

  const ask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    const message = query.trim();
    setQuery("");
    setChats((prev) => [...prev, { role: "user", text: message }]);

    const res = await fetch("/api/ai-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    setChats((prev) => [...prev, { role: "assistant", text: data.answer }]);
  };

  const identify = async (file?: File | null) => {
    if (!file) return;
    const res = await fetch("/api/identify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageName: file.name })
    });
    const data = await res.json();
    setIdentification(
      `${data.animalName} (${data.species}) | Habitat: ${data.habitat} | Status: ${data.conservationStatus} | ${data.facts}`
    );
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="glass rounded-2xl p-5">
        <h1 className="text-2xl font-bold">EcoCopilot AI</h1>
        <div className="mt-4 h-[420px] space-y-3 overflow-auto rounded-xl bg-black/20 p-3">
          {chats.map((chat, idx) => (
            <div key={idx} className={chat.role === "assistant" ? "text-habitat" : "text-water"}>
              <strong>{chat.role === "assistant" ? "EcoCopilot" : "You"}:</strong> {chat.text}
            </div>
          ))}
        </div>
        <form onSubmit={ask} className="mt-4 flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about animal behavior, conservation, tourism safety..."
            className="w-full rounded-xl bg-black/20 p-3"
          />
          <button className="rounded-xl bg-habitat px-4 py-2 font-semibold text-black">Send</button>
        </form>
      </section>

      <section className="glass rounded-2xl p-5">
        <h2 className="text-2xl font-bold">AI Wildlife Identification</h2>
        <p className="mt-2 text-sm text-slate-300">Upload a wildlife photo to identify species and conservation details.</p>
        <input
          type="file"
          accept="image/*"
          className="mt-4 w-full rounded-xl bg-black/20 p-3"
          onChange={(e) => identify(e.target.files?.[0])}
        />
        {identification && <div className="mt-4 rounded-xl border border-endangered/50 bg-endangered/10 p-3 text-sm">{identification}</div>}
      </section>
    </div>
  );
}
