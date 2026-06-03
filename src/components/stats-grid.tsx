"use client";

import { motion } from "framer-motion";
import { wildlifeStats } from "@/data/mock-data";
import { riskClasses } from "@/lib/utils";

export function StatsGrid() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">Wildlife Statistics</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {wildlifeStats.map((stat, idx) => (
          <motion.article
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.07 }}
            className={`glass rounded-2xl border p-5 ${riskClasses[stat.color]}`}
          >
            <p className="text-sm">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
