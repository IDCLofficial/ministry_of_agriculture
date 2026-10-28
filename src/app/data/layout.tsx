import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Data",
  description: "Data and statistics published by the Ministry of Agriculture and Food Security, Imo State Government.",
  path: "/data",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
