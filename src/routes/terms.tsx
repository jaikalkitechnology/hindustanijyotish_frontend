import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, type LegalBlock } from "@/components/LegalLayout";

const blocks: LegalBlock[] = [
  {
    type: "p",
    text: 'Welcome to Hindustanijyotish.com ("we", "us", "our").',
  },
  {
    type: "p",
    text: 'By downloading, accessing, or using our mobile application or services, you ("User") agree to these Terms & Conditions.',
  },
  { type: "p", text: "If you do not agree, please discontinue using the Platform." },

  { type: "heading", text: "1. Service Overview" },
  { type: "p", text: "Hindustanijyotish.com is a digital astrology platform offering:" },
  {
    type: "ul",
    items: [
      "Live astrology consultations",
      "Chat, call, and video sessions",
      "Live broadcasting by astrologers",
      "Personalized reports",
      "Horoscope-based services",
    ],
  },
  { type: "p", text: "These services are for guidance and personal insight purposes only." },

  { type: "heading", text: "2. Eligibility" },
  { type: "p", text: "To use the Platform, you must:" },
  {
    type: "ul",
    items: [
      "Be at least 18 years old",
      "Use the Platform for lawful and personal purposes",
      "Provide accurate information during registration",
    ],
  },
  { type: "p", text: "If you are below 18, parental or guardian consent is required." },

  { type: "heading", text: "3. User Account & Login" },
  { type: "p", text: "Login is done using OTP-based authentication." },
  {
    type: "p",
    text: "You are responsible for maintaining the confidentiality of your account details.",
  },
  { type: "p", text: "Any activity performed through your account will be treated as yours." },
  {
    type: "p",
    text: "Misuse, fraudulent activity, or impersonation may lead to account suspension or permanent ban.",
  },

  { type: "heading", text: "4. Consultations & Predictions" },
  {
    type: "p",
    text: "All predictions, advice, and suggestions are based on astrologers' interpretation of astrological principles.",
  },
  { type: "p", text: "The Platform does not guarantee the accuracy of predictions." },
  { type: "p", text: "Astrology is a guidance tool, not a substitute for:" },
  {
    type: "ul",
    items: ["Medical advice", "Legal advice", "Financial advice", "Psychological counseling"],
  },
  {
    type: "p",
    text: "We are not responsible for decisions you take based on astrology consultations.",
  },

  { type: "heading", text: "5. Payments & Charges" },
  {
    type: "p",
    text: "Payments are processed through secure payment partners (UPI, wallet, etc.).",
  },
  {
    type: "p",
    text: "Prices for consultations may vary based on astrologer, category, or duration.",
  },
  {
    type: "p",
    text: "All payments are final and non-refundable except in cases of technical failure or duplicate deduction, which will be verified by our team.",
  },
  {
    type: "p",
    text: "The Platform is not responsible for issues arising from the user's bank, UPI app, wallet partner, or network failure.",
  },

  { type: "heading", text: "6. Session Monitoring & Recording" },
  { type: "p", text: "To ensure safety, transparency, and dispute resolution:" },
  {
    type: "ul",
    items: [
      "Chat sessions may be reviewed",
      "Calls may be monitored or recorded",
      "Live broadcasts may be stored",
    ],
  },
  {
    type: "p",
    text: "Recordings are used only for quality monitoring, fraud detection, dispute resolution, or legal compliance.",
  },

  { type: "heading", text: "7. Astrologer Conduct" },
  { type: "p", text: "Astrologers on the Platform are independent service providers." },
  { type: "p", text: "They are expected to:" },
  {
    type: "ul",
    items: [
      "Maintain professionalism",
      "Not demand personal contact details",
      "Not offer harmful, illegal, or abusive suggestions",
    ],
  },
  {
    type: "p",
    text: "If you find an astrologer violating the rules, please report it immediately.",
  },

  { type: "heading", text: "8. User Responsibilities" },
  { type: "p", text: "You agree not to:" },
  {
    type: "ul",
    items: [
      "Harass, abuse, or threaten astrologers or other users",
      "Share vulgar, offensive, or illegal content",
      "Record or distribute astrologer sessions without permission",
      "Copy or misuse any content, reports, or predictions",
      "Attempt unauthorized access to the Platform",
    ],
  },
  { type: "p", text: "Violation may result in:" },
  {
    type: "ul",
    items: [
      "Account warning",
      "Temporary suspension",
      "Permanent ban",
      "Legal action where necessary",
    ],
  },

  { type: "heading", text: "9. Intellectual Property" },
  {
    type: "p",
    text: "All content, designs, logos, text, images, reports, and software on the Platform are owned by Hindustanijyotish.com or are used under applicable rights and permissions.",
  },
  {
    type: "p",
    text: "You may not copy, reproduce, modify, distribute, or misuse any content without written permission.",
  },

  { type: "heading", text: "10. Service Availability" },
  {
    type: "p",
    text: "We strive to provide uninterrupted services, but we do not guarantee:",
  },
  {
    type: "ul",
    items: ["24/7 availability", "Error-free operation", "Zero downtime", "Zero technical issues"],
  },
  {
    type: "p",
    text: "We reserve the right to modify, pause, suspend, or discontinue any service at any time.",
  },

  { type: "heading", text: "11. Refund & Cancellation Policy" },
  { type: "p", text: "A separate Refund & Cancellation Policy is provided below." },
  { type: "p", text: "That policy is an integral part of these Terms & Conditions." },

  { type: "heading", text: "12. Limitation of Liability" },
  { type: "p", text: "Hindustanijyotish.com is not liable for:" },
  {
    type: "ul",
    items: [
      "Decisions taken based on astrology advice",
      "Financial, emotional, or psychological losses",
      "Service interruptions, technical failures, or network issues",
      "Actions of third-party payment providers",
      "Misconduct by astrologers (though we take strict action upon report)",
    ],
  },
  {
    type: "p",
    text: "Maximum liability, if applicable, shall be limited to the amount paid by the user for the affected service.",
  },

  { type: "heading", text: "13. Changes to Terms" },
  { type: "p", text: "We may update or revise these Terms & Conditions at any time." },
  {
    type: "p",
    text: "Continued use of the Platform after changes indicates your acceptance of the updated Terms & Conditions.",
  },

  { type: "heading", text: "14. Governing Law" },
  { type: "p", text: "These Terms are governed by the laws applicable in India." },
  {
    type: "p",
    text: "Any disputes shall be resolved under the appropriate jurisdiction as per applicable legal requirements.",
  },

  { type: "heading", text: "15. Contact Information" },
  { type: "p", text: "For questions, feedback, complaints, or support, contact:" },
  { type: "p", text: "Email: hindustanijyotish.com@gmail.com" },

  { type: "heading", text: "Refund & Cancellation Policy" },
  {
    type: "p",
    text: "All payments made for chat, call, video, or live sessions are final and non-refundable.",
  },
  { type: "p", text: "Refunds may be considered only in the following cases:" },
  {
    type: "ul",
    items: [
      "Double payment deducted",
      "Payment deducted but session not started due to a technical issue",
      "Astrologer fails to join the session",
    ],
  },
  { type: "p", text: "Refunds are NOT issued for:" },
  {
    type: "ul",
    items: [
      "User dissatisfaction with predictions",
      "Change of mind",
      "Wrong question asked by the user",
      "Network issue on the user's side",
      "User leaving the session early",
    ],
  },
  {
    type: "p",
    text: "Refund requests should be made within 24 hours and may require transaction proof.",
  },
  { type: "p", text: "Contact: hindustanijyotish.com@gmail.com" },
];

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Hindustani Jyotish" },
      {
        name: "description",
        content: "Terms & Conditions and Refund & Cancellation Policy for Hindustanijyotish.com.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      lastUpdated="Last updated: 5 September 2026"
      blocks={blocks}
    />
  );
}
