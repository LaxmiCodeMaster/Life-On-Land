"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { year: "2020", criticallyEndangered: 1200, endangered: 4500, vulnerable: 9000 },
  { year: "2021", criticallyEndangered: 1260, endangered: 4600, vulnerable: 9400 },
  { year: "2022", criticallyEndangered: 1310, endangered: 4720, vulnerable: 9800 },
  { year: "2023", criticallyEndangered: 1380, endangered: 4900, vulnerable: 10320 },
  { year: "2024", criticallyEndangered: 1430, endangered: 5150, vulnerable: 10890 }
];

export default function EndangeredTrackerPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Endangered Species Tracker</h1>
      <p className="mt-2 text-slate-300">
        Monitoring critically endangered, endangered, and vulnerable species with trend analytics.
      </p>
      <div className="glass mt-6 h-[360px] rounded-2xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="year" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="criticallyEndangered" stroke="#ef4444" />
            <Line type="monotone" dataKey="endangered" stroke="#f97316" />
            <Line type="monotone" dataKey="vulnerable" stroke="#facc15" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="glass rounded-xl p-4">
          <h3 className="font-semibold text-danger">Critically Endangered</h3>
          <p className="mt-2 text-sm text-slate-300">Emergency action plans and active rescue missions in place.</p>
        </article>
        <article className="glass rounded-xl p-4">
          <h3 className="font-semibold text-endangered">Endangered</h3>
          <p className="mt-2 text-sm text-slate-300">Population recovery through habitat restoration programs.</p>
        </article>
        <article className="glass rounded-xl p-4">
          <h3 className="font-semibold text-caution">Vulnerable</h3>
          <p className="mt-2 text-sm text-slate-300">Preventive conservation and community awareness campaigns.</p>
        </article>
      </div>
    </div>
  );
}
