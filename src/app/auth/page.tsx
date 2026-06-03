"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import toast from "react-hot-toast";
import { getFirebaseAuth, getGoogleProvider, isFirebaseConfigured } from "@/lib/firebase";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebaseReady = isFirebaseConfigured();

  const signUp = async () => {
    if (!firebaseReady) {
      toast.error("Configure Firebase in .env.local to enable authentication.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(getFirebaseAuth(), email, password);
      toast.success("Account created.");
    } catch {
      toast.error("Sign up failed.");
    }
  };

  const login = async () => {
    if (!firebaseReady) {
      toast.error("Configure Firebase in .env.local to enable authentication.");
      return;
    }
    try {
      await signInWithEmailAndPassword(getFirebaseAuth(), email, password);
      toast.success("Welcome back.");
    } catch {
      toast.error("Login failed.");
    }
  };

  const forgot = async () => {
    if (!firebaseReady) {
      toast.error("Configure Firebase in .env.local to enable authentication.");
      return;
    }
    try {
      await sendPasswordResetEmail(getFirebaseAuth(), email);
      toast.success("Reset link sent.");
    } catch {
      toast.error("Password reset failed.");
    }
  };

  const google = async () => {
    if (!firebaseReady) {
      toast.error("Configure Firebase in .env.local to enable authentication.");
      return;
    }
    try {
      await signInWithPopup(getFirebaseAuth(), getGoogleProvider());
      toast.success("Google authentication successful.");
    } catch {
      toast.error("Google authentication failed.");
    }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold">User Account System</h1>
      <p className="mt-2 text-slate-300">Sign up, login, password recovery, and Google auth.</p>

      {!firebaseReady && (
        <p className="mt-4 rounded-xl border border-caution/50 bg-caution/10 px-4 py-3 text-sm text-caution">
          Firebase is not configured yet. Copy <code>.env.example</code> to <code>.env.local</code> and add your
          Firebase project keys to enable live authentication.
        </p>
      )}

      <div className="glass mt-6 space-y-4 rounded-2xl p-6">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full rounded-xl bg-black/20 p-3" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full rounded-xl bg-black/20 p-3" />
        <div className="flex flex-wrap gap-2">
          <button onClick={signUp} className="rounded-xl bg-habitat px-4 py-2 font-semibold text-black">Sign Up</button>
          <button onClick={login} className="rounded-xl bg-water px-4 py-2 font-semibold">Login</button>
          <button onClick={forgot} className="rounded-xl bg-caution px-4 py-2 font-semibold text-black">Forgot Password</button>
          <button onClick={google} className="rounded-xl border border-white/20 px-4 py-2 font-semibold">Google Authentication</button>
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {[
          "Saved animals",
          "Reports submitted",
          "Donations made",
          "Learning progress",
          "Badges earned"
        ].map((item) => (
          <div key={item} className="glass rounded-xl p-4 text-sm">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
