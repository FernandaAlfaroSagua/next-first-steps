import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "About us",
  keywords: ["about", "us"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  );
}
