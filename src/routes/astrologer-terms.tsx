import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, type LegalBlock } from "@/components/LegalLayout";

const blocks: LegalBlock[] = [
  { type: "heading", text: "1. Registration and KYC" },
  {
    type: "p",
    text: "All registration details must be filled in accurately. KYC details must be updated and verified as required. A valid PAN card is mandatory during registration.",
  },

  { type: "heading", text: "2. Bank and Payment Information" },
  {
    type: "p",
    text: "Astrologers must provide their bank account details or UPI ID to enable the withdrawal process.",
  },

  { type: "heading", text: "3. Payments and Fees" },
  {
    type: "p",
    text: "Clients are required to pay the full consultation amount along with 18% GST. The platform will deduct a 30% service fee, and the remaining 70% will be credited to the astrologer's wallet immediately after the session.",
  },

  { type: "heading", text: "4. Withdrawal Policy" },
  {
    type: "p",
    text: "Withdrawals can be initiated only when there is a minimum balance of ₹500 in the astrologer's wallet.",
  },
  {
    type: "p",
    text: "The entire wallet balance must be withdrawn at once — partial withdrawals are not allowed.",
  },
  {
    type: "p",
    text: "A 2% TDS (Tax Deducted at Source) will be applied during the withdrawal process.",
  },
  {
    type: "p",
    text: "The withdrawn amount will be credited to the astrologer's registered bank account within 3–5 working days.",
  },

  { type: "heading", text: "5. Financial Transactions" },
  {
    type: "p",
    text: "All financial dealings with clients must be conducted only through the platform.",
  },
  {
    type: "p",
    text: "If any off-platform transactions are discovered, the astrologer's account may be permanently banned, and any remaining wallet balance may be forfeited.",
  },

  { type: "heading", text: "6. External Work and Promotion" },
  {
    type: "p",
    text: "Astrologers are free to work with other platforms or offer personal consultations outside this platform.",
  },
  {
    type: "p",
    text: "However, promotion or advertisement of such services through Hindustanijyotish.com is strictly prohibited.",
  },
  {
    type: "p",
    text: "Any violation may result in a permanent ban, and the astrologer may lose access to their wallet balance.",
  },

  { type: "heading", text: "7. Professional Conduct" },
  {
    type: "p",
    text: "If a client behaves inappropriately or uses abusive, insulting, or obscene language, the astrologer has the right to immediately end the chat or call and may block the client.",
  },
  {
    type: "p",
    text: "Similarly, astrologers are strictly prohibited from using inappropriate, abusive, insulting, or obscene language towards clients.",
  },
  {
    type: "p",
    text: "If such behaviour is reported or verified, the astrologer's account may be permanently removed from the platform without prior notice.",
  },
  {
    type: "p",
    text: "Astrologers are expected to maintain professional, respectful, and appropriate conduct at all times.",
  },

  { type: "heading", text: "8. Monitoring and Compliance" },
  {
    type: "p",
    text: "All chats and calls between astrologers and clients may be monitored by the admin team for quality assurance, dispute resolution, safety, and internal training purposes.",
  },
  {
    type: "p",
    text: "By registering and using Hindustanijyotish.com, astrologers agree to comply with these Terms and Conditions, platform policies, and applicable laws.",
  },
];

export const Route = createFileRoute("/astrologer-terms")({
  head: () => ({
    meta: [
      { title: "Astrologer Terms & Conditions | Hindustani Jyotish" },
      {
        name: "description",
        content: "Terms and Conditions for astrologers registering on Hindustanijyotish.com.",
      },
    ],
  }),
  component: AstrologerTermsPage,
});

function AstrologerTermsPage() {
  return <LegalLayout title="Astrologer Terms and Conditions" blocks={blocks} />;
}
