"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      router.push("/admin/login");
      router.refresh();
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      disabled={loading}
      className="border-border text-text-primary hover:bg-bg-secondary hover:text-text-primary h-9 gap-2 cursor-pointer transition-colors duration-200"
    >
      <LogOut className="w-4 h-4 text-text-secondary" />
      <span>{loading ? "Signing Out..." : "Logout"}</span>
    </Button>
  );
}
