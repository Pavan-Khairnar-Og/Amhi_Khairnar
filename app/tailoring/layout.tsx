import ThemeProvider from "@/components/shared/theme-provider";

export default function TailoringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme="tailoring">{children}</ThemeProvider>;
}
