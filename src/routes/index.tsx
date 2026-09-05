import { createFileRoute } from "@tanstack/react-router";
import { HindustaniJyotishHome } from "@/components/HindustaniJyotishHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hindustani Jyotish — India's Premium Astrology Platform for Astrologers" },
      {
        name: "description",
        content:
          "Apply as an astrologer on Hindustani Jyotish — built by the Jyotishi Online Kerala team. Instant chat, voice & video consultations across India.",
      },
      { property: "og:title", content: "Hindustani Jyotish — Apply as Astrologer" },
      {
        property: "og:description",
        content:
          "Join India's next premium astrology platform. Verified clients, flexible hours, high earnings. From the makers of Jyotishi Online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: HindustaniJyotishHome,
});
