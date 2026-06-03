"use client";

import { create } from "zustand";

type AlertState = {
  geofenceAlert: string | null;
  visitorAlert: string | null;
  setGeofenceAlert: (message: string | null) => void;
  setVisitorAlert: (message: string | null) => void;
};

export const useAlertStore = create<AlertState>((set) => ({
  geofenceAlert: null,
  visitorAlert: null,
  setGeofenceAlert: (message) => set({ geofenceAlert: message }),
  setVisitorAlert: (message) => set({ visitorAlert: message })
}));
