import { createFileRoute } from "@tanstack/react-router";
import { HindustaniJyotishHome } from "@/components/HindustaniJyotishHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hindustani Jyotish | India’s Next Astrology Platform" },
      {
        name: "description",
        content:
          "Join Hindustani Jyotish and connect with thousands of astrology seekers across India.",
      },
      { property: "og:title", content: "Hindustani Jyotish | India’s Next Astrology Platform" },
      {
        property: "og:description",
        content: "A trusted platform for astrologers to build, connect, and grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HindustaniJyotishHome,
});

