"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-hero-gradient p-8 md:p-16">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-25" />
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold md:text-6xl"
      >
        Life on Land
      </motion.h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-200 md:text-xl">
        Protecting Wildlife, Preserving Ecosystems, Securing the Future.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/encyclopedia" className="rounded-xl bg-habitat px-5 py-3 font-semibold text-slate-950">
          Explore Wildlife
        </Link>
        <Link href="/report" className="rounded-xl bg-danger px-5 py-3 font-semibold text-white">
          Report Incident
        </Link>
        <Link href="/donate" className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold">
          Donate Now
        </Link>
      </div>
    </section>
  );
}
