"use client";

import { useEffect, useMemo, useState } from "react";
import { animals } from "@/data/mock-data";
import { useAlertStore } from "@/lib/store";

type Tracker = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  health: "Good" | "Monitor" | "Critical";
  lastUpdate: string;
};

export default function GPSDashboardPage() {
  const [trackers, setTrackers] = useState<Tracker[]>(
    animals.map((a) => ({
      id: a.id,
      name: a.name,
      lat: a.coordinates[0],
      lng: a.coordinates[1],
      health: "Good",
      lastUpdate: new Date().toLocaleTimeString()
    }))
  );
  const { setGeofenceAlert, setVisitorAlert } = useAlertStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setTrackers((current) =>
        current.map((item) => {
          const lat = Number((item.lat + (Math.random() - 0.5) * 0.02).toFixed(4));
          const lng = Number((item.lng + (Math.random() - 0.5) * 0.02).toFixed(4));
          const outside = lat > 28.1 || lat < 27.3 || lng > 85.8 || lng < 84.8;
          if (outside) {
            setGeofenceAlert("Warning: Animal has moved outside the protected zone.");
            if (navigator.vibrate) navigator.vibrate([160, 100, 160]);
            void new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg").play().catch(() => undefined);
          }
          return { ...item, lat, lng, lastUpdate: new Date().toLocaleTimeString() };
        })
      );
    }, 3500);

    const visitorTimer = setInterval(() => {
      if (Math.random() > 0.6) {
        setVisitorAlert("You are approaching a restricted wildlife zone.");
      } else {
        setVisitorAlert(null);
      }
    }, 6000);

    return () => {
      clearInterval(timer);
      clearInterval(visitorTimer);
    };
  }, [setGeofenceAlert, setVisitorAlert]);

  const heatLevel = useMemo(() => Math.round((trackers.length / animals.length) * 100), [trackers]);

  return (
    <div>
      <h1 className="text-3xl font-bold">GPS Animal Tracking Dashboard</h1>
      <p className="mt-2 text-slate-300">Real-time collar simulation, movement history, heat index, and boundary monitoring.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="glass rounded-xl p-4">
          <p className="text-sm text-slate-400">Live animals</p>
          <p className="text-2xl font-semibold">{trackers.length}</p>
        </article>
        <article className="glass rounded-xl p-4">
          <p className="text-sm text-slate-400">Heat map activity</p>
          <p className="text-2xl font-semibold text-endangered">{heatLevel}%</p>
        </article>
        <article className="glass rounded-xl p-4">
          <p className="text-sm text-slate-400">Boundary monitor</p>
          <p className="text-2xl font-semibold text-danger">Active</p>
        </article>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {trackers.map((item) => (
          <article key={item.id} className="glass rounded-xl p-4">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-slate-300">Coordinates: {item.lat}, {item.lng}</p>
            <p className="text-sm text-slate-300">Health: {item.health}</p>
            <p className="text-xs text-slate-400">Last update: {item.lastUpdate}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
