import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "Contact us for more information",
  keywords: ["contact", "us", "information"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  );
}
