import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/shared/logout-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Shield } from "lucide-react";

export const dynamic = "force-dynamic";

interface Submission {
  id: string;
  business: "travels" | "tailoring";
  name: string;
  phone: string;
  message: string;
  created_at: string;
}

export default async function AdminDashboard() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  console.log("SERVER-SIDE USER:", JSON.stringify(user, null, 2));

  const { data: submissions, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  console.log("SUBMISSIONS DATA:", JSON.stringify(submissions, null, 2));
  console.log("SUBMISSIONS ERROR:", JSON.stringify(error, null, 2));

  return (
    <div className="relative min-h-screen w-full bg-bg-primary text-text-primary flex flex-col font-body">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-secondary/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="z-10 border-b border-border bg-bg-secondary/30 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Shield className="w-6 h-6 text-text-secondary" />
          <span className="font-display font-extrabold tracking-tight text-lg">
            Amhi Khairnar Admin
          </span>
        </div>
        <LogoutButton />
      </header>

      {/* Main Content */}
      <main className="z-10 flex-1 p-6 md:p-12 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-extrabold tracking-tight text-text-primary mb-2">
            Contact Submissions
          </h2>
          <p className="text-text-secondary text-sm font-light">
            View all messages and inquiries submitted from the travels and tailoring portals.
          </p>
        </div>

        {error ? (
          <div className="text-sm text-destructive font-medium bg-destructive/10 border border-destructive/20 rounded-lg p-4">
            Failed to load contact submissions: {error.message}
          </div>
        ) : !submissions || submissions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 border border-border bg-bg-secondary/20 rounded-2xl">
            <p className="text-text-secondary text-sm font-light">No submissions yet</p>
          </div>
        ) : (
          <div className="border border-border bg-bg-secondary/20 rounded-2xl overflow-hidden backdrop-blur-md">
            <Table>
              <TableHeader>
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-text-secondary font-semibold">Date</TableHead>
                  <TableHead className="text-text-secondary font-semibold">Business</TableHead>
                  <TableHead className="text-text-secondary font-semibold">Name</TableHead>
                  <TableHead className="text-text-secondary font-semibold">Phone</TableHead>
                  <TableHead className="text-text-secondary font-semibold">Message</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {submissions.map((submission: Submission) => (
                  <TableRow key={submission.id} className="border-border hover:bg-bg-secondary/30">
                    <TableCell className="font-medium">
                      {new Date(submission.created_at).toLocaleString("en-IN", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </TableCell>
                    <TableCell>
                      {submission.business === "travels" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-500 border border-amber-500/20">
                          Travels
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-500/10 text-rose-500 border border-rose-500/20">
                          Tailoring
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{submission.name}</TableCell>
                    <TableCell>{submission.phone}</TableCell>
                    <TableCell className="whitespace-pre-wrap max-w-md text-text-secondary font-light">
                      {submission.message}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
}
