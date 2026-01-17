import { hero, whoIam, home, prices, header, footer, contacts, form, career, projects } from "../data";
import { Translations } from "./types";

export const en: Translations = {
  hero,
  whoIam,
  home,
  prices,
  header,
  footer,
  contacts,
  form,
  career,
  projects,
  privacy: {
    title: "🔒 Privacy Policy",
    updatedLabel: "Last updated",
    sections: [
      {
        heading: "1. Data Controller",
        paragraphs: [
          "The data controller responsible for the processing of personal data is:",
          "Angelo Falci\nWebsite: https://angelofalci.com\nContact email: a.falci@live.it",
        ],
      },
      {
        heading: "2. Types of Data Collected",
        paragraphs: [
          "This website does not directly collect personal data through contact forms, registrations, or comments.",
          "However, it uses Google Analytics, a web analytics service provided by Google LLC, which collects aggregated usage data, including:",
        ],
        list: [
          "IP address (partially anonymized)",
          "browsing data (pages visited, session duration)",
          "information about browser, device, and operating system",
          "approximate geographic location",
        ],
      },
      {
        heading: "3. Purpose of Data Processing",
        paragraphs: [
          "The data collected through Google Analytics are used exclusively to:",
        ],
        list: [
          "analyze website traffic",
          "improve content, performance, and user experience",
        ],
      },
      {
        heading: "4. Legal Basis for Processing",
        paragraphs: [
          "Data processing is carried out only after the user has given consent, expressed through the cookie banner.",
        ],
      },
      {
        heading: "5. Processing Methods",
        paragraphs: [
          "Data are processed using electronic and automated tools, in compliance with applicable security measures and data protection regulations.",
        ],
      },
      {
        heading: "6. Third-Party Services",
        paragraphs: [
          "This website uses:",
          "Google Analytics – Google LLC",
          "Data may be transferred to countries outside the EU (in particular, the United States), in accordance with the safeguards provided by the GDPR.",
          "More information: https://policies.google.com/privacy",
        ],
      },
      {
        heading: "7. Data Retention",
        paragraphs: [
          "Data collected through Google Analytics are stored for the period defined by the service settings and in any case no longer than necessary to achieve the stated purposes.",
        ],
      },
      {
        heading: "8. User Rights",
        paragraphs: [
          "Users have the right to:",
        ],
        list: [
          "access their data",
          "request rectification or erasure of data",
          "object to data processing",
          "withdraw consent at any time",
          "lodge a complaint with the competent Data Protection Authority",
        ],
      },
      {
        heading: "9. Changes to this Privacy Policy",
        paragraphs: [
          "The data controller reserves the right to modify this policy at any time. Any changes will be published on this page.",
        ],
      },
    ],
  },

  cookie: {
    title: "🍪 Cookie Policy",
    updatedLabel: "Last updated",
    sections: [
      {
        heading: "1. What Are Cookies",
        paragraphs: [
          "Cookies are small text files that websites visited by users send to their device, where they are stored and then retransmitted to the same websites upon subsequent visits.",
        ],
      },
      {
        heading: "2. Types of Cookies Used",
        paragraphs: [
          "Technical cookies",
          "This website uses technical cookies that are necessary for the proper functioning of the site. These cookies do not require user consent.",
        ],
      },
      {
        heading: "Analytics Cookies (Google Analytics)",
        paragraphs: [
          "This website uses Google Analytics to collect aggregated statistical information about how users use the site.",
          "Google Analytics cookies allow the website to:",
        ],
        list: [
          "understand how users interact with the site",
          "improve content and performance",
        ],
      },
      {
        heading: "3. Consent Management",
        paragraphs: [
          "Upon first access to the website, users can:",
        ],
        list: [
          "accept analytics cookies",
          "reject them",
          "change their preferences at any time",
        ],
      },
      {
        heading: "4. How to Disable Cookies via Browser Settings",
        paragraphs: [
          "Users can also manage or disable cookies directly through their browser settings. Disabling analytics cookies does not affect the proper functioning of the website.",
        ],
      },
      {
        heading: "5. Third-Party Cookies",
        paragraphs: [
          "Google Analytics cookies are managed by Google LLC.",
          "For more information: https://policies.google.com/privacy",
        ],
      },
      {
        heading: "6. Changes to the Cookie Policy",
        paragraphs: [
          "This Cookie Policy may be updated over time. Any changes will be published on this page.",
        ],
      },
    ],
  },

  cookieConsent: {
    title: "This site uses cookies",
    description: "This site uses third-party analytics cookies (Google Analytics) to collect statistical information about site usage. You can accept or decline the use of these cookies.",
    accept: "Accept",
    decline: "Decline",
  },

};
