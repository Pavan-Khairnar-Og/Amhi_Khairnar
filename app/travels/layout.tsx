import ThemeProvider from "@/components/shared/theme-provider";

export default function TravelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme="travels">{children}</ThemeProvider>;
}
