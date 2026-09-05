import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, type LegalBlock } from "@/components/LegalLayout";

const blocks: LegalBlock[] = [
  { type: "heading", text: "1. Disclaimer" },
  {
    type: "p",
    text: "Hindustanijyotish.com provides astrology-related guidance through chat, call, video, and live broadcasting.",
  },
  { type: "p", text: "By using our platform, you agree to the following:" },

  { type: "heading", text: "1. Not Professional Advice" },
  { type: "p", text: "Astrology is a traditional and interpretive science." },
  { type: "p", text: "Predictions offered by astrologers:" },
  {
    type: "ul",
    items: [
      "do not guarantee accuracy,",
      "do not claim certainty,",
      "should not be used as a substitute for professional medical, legal, financial, psychological, or relationship advice.",
    ],
  },
  { type: "p", text: "Always seek certified professionals for serious issues." },

  { type: "heading", text: "2. User Responsibility" },
  {
    type: "p",
    text: "All decisions you make based on astrology consultations are your personal responsibility.",
  },
  { type: "p", text: "The platform is not liable for:" },
  {
    type: "ul",
    items: [
      "financial loss",
      "emotional impact",
      "relationship outcomes",
      "legal or business consequences",
    ],
  },

  { type: "heading", text: "3. Independent Astrologers" },
  {
    type: "p",
    text: "Astrologers are independent service providers, not employees of the platform.",
  },
  {
    type: "p",
    text: "Their opinions do not represent the official opinion of Hindustanijyotish.com.",
  },

  { type: "heading", text: "4. No Guaranteed Outcomes" },
  { type: "p", text: "We do not promise:" },
  {
    type: "ul",
    items: [
      "marriage results",
      "job results",
      "health outcomes",
      "lottery numbers",
      "guaranteed predictions",
    ],
  },
  { type: "p", text: "Astrology is guidance only." },

  { type: "heading", text: "5. Platform Usage" },
  { type: "p", text: "Use the app at your own risk." },
  { type: "p", text: "By accessing or using the platform, you accept this disclaimer." },

  { type: "heading", text: "2. Community Guidelines (Users + Astrologers)" },
  { type: "p", text: "These guidelines ensure a safe, respectful, and positive environment." },

  { type: "heading", text: "For Users" },
  { type: "p", text: "Users must NOT:" },
  {
    type: "ul",
    items: [
      "Harass, insult, or abuse astrologers",
      "Ask for astrologer's personal phone number, WhatsApp, social media, etc.",
      "Share sexual, vulgar, hateful, or illegal content",
      "Promote violence, self-harm, drugs, or fraud",
      "Threaten astrologers or other users",
      "Use the platform for dating, adult content, or inappropriate behavior",
      "Share misinformation or fake documents",
      "Record sessions without platform permission",
    ],
  },
  { type: "p", text: "Violations may result in:" },
  {
    type: "ul",
    items: [
      "Warning",
      "Temporary suspension",
      "Permanent account ban",
      "Legal action in severe cases",
    ],
  },

  { type: "heading", text: "For Astrologers" },
  { type: "p", text: "Astrologers must:" },
  {
    type: "ul",
    items: [
      "Maintain professional, respectful behavior",
      "Provide clear and polite communication",
      "Avoid creating fear, panic, or superstition",
      "Not force users into unnecessary remedies",
      "Not request personal contact details from users",
      "Not offer medical, legal, or financial advice",
      "Not perform black magic, tantrik activities, or harmful rituals",
      "Not guarantee outcomes (marriage/job/court cases etc.)",
    ],
  },
  { type: "p", text: "Astrologers must follow:" },
  { type: "ul", items: ["Platform rules", "Country laws", "Ethical practice standards"] },
  { type: "p", text: "Violations can lead to:" },
  { type: "ul", items: ["Profile removal", "Payment withholding", "Permanent ban"] },

  { type: "heading", text: "3. Live Broadcasting Rules" },
  { type: "p", text: "These rules apply to all astrologers using the Live feature." },

  { type: "heading", text: "Allowed on Live" },
  {
    type: "ul",
    items: [
      "General astrology talks",
      "Horoscope readings",
      "Audience Q&A (within platform pricing)",
      "Educational content",
      "Festival or daily predictions",
    ],
  },

  { type: "heading", text: "NOT Allowed on Live" },
  {
    type: "ul",
    items: [
      "Asking users for personal contact",
      "Abuse, shouting, or disrespect",
      "Promoting religion, politics, or hate speech",
      "Sexual, adult, or vulgar content",
      "Negative language that causes psychological harm",
      "Guaranteeing marriage/job/health results",
      "Tantrik/black magic claims",
      "Display of dangerous objects or symbols",
      "Encouraging viewers toward self-harm, drugs, gambling, or illegal acts",
    ],
  },

  { type: "heading", text: "Recording" },
  { type: "p", text: "All live sessions:" },
  {
    type: "ul",
    items: ["may be monitored,", "may be recorded,", "may be reviewed for quality and safety."],
  },

  { type: "heading", text: "Monetization Rules" },
  {
    type: "ul",
    items: [
      "Paid questions must follow platform pricing",
      "30% platform fee applies (or as updated in your contract)",
      "Manipulating payments or asking users to pay externally is not allowed",
    ],
  },

  { type: "heading", text: "4. Content & Conduct Policy" },
  { type: "p", text: "This policy applies to ALL users and astrologers." },

  { type: "heading", text: "Prohibited Content" },
  {
    type: "ul",
    items: [
      "Nudity or sexually explicit content",
      "Hate speech or caste/religion-based discrimination",
      "Extreme negativity, threats, self-harm encouragement",
      "Fake documents",
      "Spam or promotional links",
      "Violence or dangerous activities",
      "Sharing someone else's personal information",
      "Recording the app's content without permission",
    ],
  },

  { type: "heading", text: "Allowed Content" },
  {
    type: "ul",
    items: [
      "Astrology advice",
      "Educational material",
      "Horoscope-based content",
      "Motivational guidance",
      "General well-being discussions",
    ],
  },

  { type: "heading", text: "Action Against Violations" },
  { type: "p", text: "Depending on severity:" },
  {
    type: "ul",
    items: [
      "Warning",
      "Temporary block",
      "Permanent ban",
      "Payment withholding",
      "Reporting to authorities",
    ],
  },

  { type: "heading", text: "5. Report & Complaint Handling Policy" },
  { type: "heading", text: "How to Report" },
  { type: "p", text: "Users can report:" },
  { type: "ul", items: ["Abuse", "Astrologer misconduct", "Technical issues", "Payment problems"] },
  { type: "p", text: "via: hindustanijyotish.com@gmail.com" },
  { type: "p", text: "Provide:" },
  {
    type: "ul",
    items: ["Registered mobile number", "Screenshot/video (if available)", "Brief description"],
  },

  { type: "heading", text: "How We Handle Complaints" },
  {
    type: "ul",
    items: [
      "Acknowledge complaint within 24–48 hours",
      "Investigate case internally",
      "Check chat/call/live recordings (if required)",
      "Respond with a solution",
    ],
  },
  { type: "p", text: "Possible actions:" },
  {
    type: "ul",
    items: ["Refund (only if eligible)", "Warning to astrologer", "Suspension", "Permanent ban"],
  },

  { type: "heading", text: "Refund Complaints" },
  { type: "p", text: "Applicable only for:" },
  {
    type: "ul",
    items: ["Double deduction", "Session not started due to technical issue", "Astrologer no-show"],
  },
  { type: "p", text: "Proof may be required." },

  { type: "heading", text: "6. Short In-App Legal Notices" },
  { type: "p", text: "Use these short lines on different screens of your app." },

  { type: "heading", text: "Signup / Login Screen" },
  { type: "p", text: '"By continuing, you agree to our Terms & Conditions and Privacy Policy."' },

  { type: "heading", text: "Before Chat Session" },
  { type: "p", text: '"Chats may be monitored for quality and safety."' },

  { type: "heading", text: "Before Call / Video Session" },
  { type: "p", text: '"Calls may be recorded for dispute resolution and quality improvement."' },

  { type: "heading", text: "Before Live Broadcast (Astrologers)" },
  {
    type: "p",
    text: '"Your live session may be recorded and reviewed. Follow all Live Broadcast Rules."',
  },

  { type: "heading", text: "Wallet / Payment Screen" },
  {
    type: "p",
    text: '"All payments are final. Refunds are only applicable for technical failures or double deductions."',
  },

  { type: "heading", text: "Report Screen" },
  {
    type: "p",
    text: '"We review all reports seriously. Misuse of reporting may result in account action."',
  },

  { type: "heading", text: "Customer Support" },
  {
    type: "p",
    text: "For questions, complaints, technical issues, payment-related concerns, or other support matters, please contact:",
  },
  { type: "p", text: "hindustanijyotish.com@gmail.com" },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Hindustani Jyotish" },
      {
        name: "description",
        content:
          "Privacy Policy, disclaimer, community guidelines, and content policy for Hindustanijyotish.com.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      lastUpdated="Last updated: 5 September 2026"
      blocks={blocks}
    />
  );
}
