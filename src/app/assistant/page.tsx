"use client";

import { useState } from "react";

type Chat = { role: "user" | "assistant"; text: string };

export default function AssistantPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [identifying, setIdentifying] = useState(false);
  const [chats, setChats] = useState<Chat[]>([
    {
      role: "assistant",
      text: "Hello, I am EcoCopilot AI. Ask me about wildlife, conservation, tourism safety, GPS tracking, or endangered species."
    }
  ]);
  const [identification, setIdentification] = useState<string>("");

  const ask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const message = query.trim();
    setQuery("");
    setChats((prev) => [...prev, { role: "user", text: message }]);
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.answer ?? "Request failed");
      }

      setChats((prev) => [...prev, { role: "assistant", text: data.answer ?? "No response received." }]);
    } catch {
      setChats((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, EcoCopilot could not respond right now. Please check your connection and try again."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const identify = async (file?: File | null) => {
    if (!file || identifying) return;
    setIdentifying(true);
    setIdentification("");

    try {
      const res = await fetch("/api/identify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageName: file.name })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Identification failed");
      }

      setIdentification(
        `${data.animalName} (${data.species}) | Habitat: ${data.habitat} | Status: ${data.conservationStatus} | ${data.facts}`
      );
    } catch {
      setIdentification("Could not identify this image. Try renaming the file with the animal name (e.g. elephant.jpg) and upload again.");
    } finally {
      setIdentifying(false);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="glass rounded-2xl p-5">
        <h1 className="text-2xl font-bold">EcoCopilot AI</h1>
        <p className="mt-1 text-sm text-slate-400">
          Works offline with built-in wildlife knowledge. Add OPENAI_API_KEY in .env.local for enhanced AI.
        </p>
        <div className="mt-4 h-[420px] space-y-3 overflow-auto rounded-xl bg-black/20 p-3">
          {chats.map((chat, idx) => (
            <div key={idx} className={`whitespace-pre-wrap ${chat.role === "assistant" ? "text-habitat" : "text-water"}`}>
              <strong>{chat.role === "assistant" ? "EcoCopilot" : "You"}:</strong> {chat.text}
            </div>
          ))}
          {loading && <p className="text-sm text-slate-400">EcoCopilot is thinking...</p>}
        </div>
        <form onSubmit={ask} className="mt-4 flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try: Tell me about the Asian Elephant"
            disabled={loading}
            className="w-full rounded-xl bg-black/20 p-3 outline-none focus:ring-2 focus:ring-habitat/50 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-habitat px-4 py-2 font-semibold text-black disabled:opacity-60"
          >
            {loading ? "..." : "Send"}
          </button>
        </form>
      </section>

      <section className="glass rounded-2xl p-5">
        <h2 className="text-2xl font-bold">AI Wildlife Identification</h2>
        <p className="mt-2 text-sm text-slate-300">
          Upload a wildlife photo. Filename hints (e.g. elephant.jpg, leopard.png) improve identification.
        </p>
        <input
          type="file"
          accept="image/*"
          disabled={identifying}
          className="mt-4 w-full rounded-xl bg-black/20 p-3 disabled:opacity-60"
          onChange={(e) => identify(e.target.files?.[0])}
        />
        {identifying && <p className="mt-3 text-sm text-slate-400">Analyzing image...</p>}
        {identification && (
          <div className="mt-4 rounded-xl border border-endangered/50 bg-endangered/10 p-3 text-sm whitespace-pre-wrap">
            {identification}
          </div>
        )}
      </section>
    </div>
  );
}
