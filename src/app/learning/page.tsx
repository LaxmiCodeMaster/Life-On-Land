"use client";

import { useState } from "react";

export default function LearningPage() {
  const [score, setScore] = useState<number | null>(null);
  const [answer, setAnswer] = useState("");

  const submitQuiz = () => {
    setScore(answer.toLowerCase().includes("biodiversity") ? 100 : 60);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Student Learning Hub</h1>
      <p className="mt-2 text-slate-300">Quizzes, educational modules, interactive tasks, and certificates.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {["Wildlife Quiz", "Interactive Activities", "Certificate Generator"].map((item) => (
          <article key={item} className="glass rounded-xl p-4">
            <h2 className="font-semibold">{item}</h2>
            <p className="mt-2 text-sm text-slate-300">Engaging educational tools for students and conservation volunteers.</p>
          </article>
        ))}
      </div>
      <div className="glass mt-6 rounded-2xl p-6">
        <h3 className="font-semibold">Quick Quiz</h3>
        <p className="mt-1 text-sm text-slate-300">Why is protecting biodiversity important?</p>
        <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} className="mt-3 h-24 w-full rounded-xl bg-black/20 p-3" />
        <button onClick={submitQuiz} className="mt-3 rounded-xl bg-water px-4 py-2 font-semibold">
          Submit
        </button>
        {score !== null && <p className="mt-3 text-sm">Learning score: {score}%</p>}
      </div>
    </div>
  );
}
