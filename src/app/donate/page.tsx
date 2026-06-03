"use client";

import { useState } from "react";

export default function DonatePage() {
  const [amount, setAmount] = useState(50);
  return (
    <div>
      <h1 className="text-3xl font-bold">Donation Platform</h1>
      <p className="mt-2 text-slate-300">One-time, monthly, and sponsor-an-animal donation experiences.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {["One-time donation", "Monthly donation", "Sponsor an animal"].map((item) => (
          <article key={item} className="glass rounded-xl p-4">
            <h2 className="font-semibold">{item}</h2>
            <p className="mt-2 text-sm text-slate-300">Supports anti-poaching, habitat restoration, and rescue operations.</p>
          </article>
        ))}
      </div>
      <div className="glass mt-6 rounded-2xl p-6">
        <label className="text-sm">Donation amount (USD)</label>
        <input
          type="range"
          min={10}
          max={1000}
          step={10}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-3 w-full"
        />
        <p className="mt-2 text-2xl font-semibold">${amount}</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-300">Funding Goal: $2,000,000</p>
            <div className="mt-2 h-3 rounded-full bg-white/10">
              <div className="h-3 w-2/3 rounded-full bg-habitat" />
            </div>
            <p className="mt-1 text-xs text-slate-400">67% funded</p>
          </div>
          <button className="rounded-xl bg-habitat px-4 py-3 font-semibold text-black">Complete Donation</button>
        </div>
      </div>
    </div>
  );
}
