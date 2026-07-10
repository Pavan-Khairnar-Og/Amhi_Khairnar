"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      router.push("/admin");
      router.refresh();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to log in";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-bg-primary text-text-primary flex flex-col items-center justify-center p-6 md:p-12 font-body">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Back button */}
      <nav className="absolute top-6 left-6 md:top-12 md:left-12 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to gateway</span>
        </Link>
      </nav>

      {/* Login Box */}
      <div className="z-10 w-full max-w-md bg-bg-secondary/50 border border-border p-8 rounded-2xl backdrop-blur-xl">
        <div className="flex flex-col items-center mb-8">
          <div className="p-4 bg-bg-secondary border border-border rounded-full mb-4">
            <Shield className="w-8 h-8 text-text-secondary" />
          </div>
          <h1 className="text-2xl font-display font-extrabold tracking-tight text-text-primary">
            Admin Authentication
          </h1>
          <p className="text-text-secondary text-sm font-light mt-2 text-center">
            Sign in to access the administrator dashboard.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {error && (
            <div className="text-sm text-destructive font-medium bg-destructive/10 border border-destructive/20 rounded-lg p-3">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wider text-text-secondary"
            >
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-xs font-semibold uppercase tracking-wider text-text-secondary"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-accent-primary text-bg-primary hover:bg-accent-primary/90 font-bold h-10 rounded-lg cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
