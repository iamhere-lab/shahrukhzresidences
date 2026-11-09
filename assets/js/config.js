/*
 * Shahrukhz Residences by Danube landing page: deployment configuration.
 * Everything that differs between preview and production lives here.
 * Nothing secret belongs in this file: it is shipped to the browser.
 */
window.SS_CONFIG = {
  /* Lead delivery. POST target that accepts the lead and returns 2xx on success
   * (Pabbly / Zapier / Make webhook, Google Apps Script, Leadrat proxy).
   * Empty until a real endpoint exists: the form then refuses to submit
   * and offers the phone number instead of showing a fake success message. */
  leadEndpoint: "https://connect.pabbly.com/webhook-listener/webhook/IjU3NjUwNTY1MDYzNTA0MzY1MjZjNTUzNyI_3D_pc/IjU3NjcwNTZiMDYzNDA0M2M1MjZhNTUzNDUxM2Ei_pc",

  /* "form" = URL-encoded POST without a CORS preflight (right for Pabbly / Zapier / Make webhooks).
   * "json" = JSON POST (for your own endpoint that answers CORS). */
  leadEndpointMode: "form",
  leadEndpointSimpleRequest: false,

  /* Redirect here after a confirmed submission. Empty = inline success message. */
  thankYouUrl: "thank-you.html",

  /* Google Tag Manager container, e.g. "GTM-XXXXXXX". Loaded only when set. */
  gtmId: "",

  /* Phone shown on the page. CONFIRM the sales / channel-partner number for this project before launch. */
  phoneDisplay: "50 688 2021",
  phoneE164: "+971506882021",

  /* WhatsApp number, digits only with country code. WhatsApp buttons stay hidden until set. */
  whatsappNumber: "971506882021",
  whatsappMessage: "Hi, I'm interested in Shahrukhz Residences by Danube, Dubai Maritime City. Please share the price list, floor plans and payment plan.",

  /* Auto-open the enquiry popup after this many seconds (once per session). 0 disables. */
  popupDelaySeconds: 10,

  /* Optional public brochure URL, shown after a successful "Download Brochure" enquiry. */
  brochureUrl: "",

  /* Channel-partner registration (e.g. Dubai RERA ORN / BRN), shown in the footer when set. */
  agentRera: "",

  /* Named in the consent line: who will contact the enquirer. Confirm before launch. */
  consentEntity: "Danube Properties and its authorised sales partners",

  /* AED to INR rate for the approximate rupee prices shown beside every AED price.
   * Update both lines when the rate moves. Source: Wise mid-market rate, 6 Nov 2026. */
  aedToInr: 25.59,
  aedToInrDate: "6 Nov 2026",

  /* EOI deadline for the sticky countdown bar (ISO time with zone). The bar hides itself after this.
   * Empty = no bar. Paused for DLD compliance until the deadline is confirmed by Danube / the brokerage;
   * to switch it back on, set e.g. "2026-11-10T23:59:59+04:00". */
  eoiDeadline: "",

  siteUrl: "",
  privacyUrl: ""
};
