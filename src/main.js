"use strict";
// This is our main TypeScript file for Quantum Ledger AI.
// We will add interactive logic for our website here.
/**
 * A utility function to safely get an HTML element by its ID.
 * It returns the element if found, or null if not found, and logs an error.
 * @param id The ID of the HTML element to find.
 * @returns HTMLElement | null
 */
function getElementById(id) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Error: Element with ID "${id}" not found.`);
        return null;
    }
    return element;
}
/**
 * Handles clicks on navigation links.
 * @param linkName The name of the navigation link clicked.
 */
function handleNavLinkClick(linkName) {
    console.log(`Navigation link "${linkName}" clicked!`);
    // In a real website, this would navigate to a different page or scroll to a section.
    // Example: window.location.href = `/${linkName.toLowerCase()}.html`;
}
/**
 * Handles clicks on main call-to-action buttons.
 * @param buttonName The name of the button clicked.
 */
function handleCtaButtonClick(buttonName) {
    console.log(`Call to Action button "${buttonName}" clicked!`);
    // In a real website, this might open a contact form, a modal, or lead to a specific service page.
}
/**
 * Handles clicks on feature cards.
 * @param featureName The name of the feature card clicked.
 */
function handleFeatureCardClick(featureName) {
    console.log(`Feature card for "${featureName}" clicked!`);
    // In a real website, this might open a detailed page about the feature.
}
/**
 * Handles the mobile menu button click.
 */
function handleMobileMenuClick() {
    console.log("Mobile menu button clicked! (Toggle mobile navigation)");
    // In a real website, this would typically show/hide a mobile navigation menu.
}
/**
 * Handles newsletter subscription form submission.
 * @param event The form submission event.
 */
function handleNewsletterSubmit(event) {
    // event.preventDefault() stops the browser from doing its default action (like reloading the page)
    // when a form is submitted. We want to handle it with our JavaScript instead.
    event.preventDefault();
    // Try to get the email input field by its ID.
    const emailInput = getElementById('newsletter-email');
    // Check if the email input element was found and has a value.
    if (emailInput && emailInput.value) {
        const email = emailInput.value;
        console.log(`Newsletter subscription requested for: ${email}`);
        // In a real website, you would send this email to a server for subscription.
        // For now, we'll clear the input field and give a simple console message.
        emailInput.value = ''; // Clear the input field
        console.log("Thank you for subscribing to our newsletter!");
    }
    else {
        console.warn("Newsletter subscription attempt: Email input not found or empty.");
    }
}
/**
 * Initializes all event listeners for buttons and links on the page.
 */
function initializeEventListeners() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    // Header Navigation Links
    (_a = getElementById('logo-link')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Logo"); });
    (_b = getElementById('nav-services')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Services"); });
    (_c = getElementById('nav-solutions')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Solutions"); });
    (_d = getElementById('nav-about')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("About Us"); });
    (_e = getElementById('nav-blog')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Blog"); });
    (_f = getElementById('nav-contact')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Contact"); });
    // Header Call to Action Button
    (_g = getElementById('header-quote-button')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', (e) => { e.preventDefault(); handleCtaButtonClick("Get a Free Quote (Header)"); });
    // Mobile Menu Button
    (_h = getElementById('mobile-menu-button')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', handleMobileMenuClick);
    // Hero Section Buttons
    (_j = getElementById('hero-explore-button')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', (e) => { e.preventDefault(); handleCtaButtonClick("Explore Services (Hero)"); });
    (_k = getElementById('hero-contact-button')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', (e) => { e.preventDefault(); handleCtaButtonClick("Contact Sales (Hero)"); });
    // Feature Cards (using optional chaining ?. to ensure element exists before adding listener)
    (_l = getElementById('feature-chatbot-card')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', () => handleFeatureCardClick("Automated Support Chatbots"));
    (_m = getElementById('feature-email-card')) === null || _m === void 0 ? void 0 : _m.addEventListener('click', () => handleFeatureCardClick("Intelligent Email Analysis"));
    (_o = getElementById('feature-invoice-card')) === null || _o === void 0 ? void 0 : _o.addEventListener('click', () => handleFeatureCardClick("Automated Invoice Processing"));
    // Main Call to Action Button (bottom section)
    (_p = getElementById('consultation-button')) === null || _p === void 0 ? void 0 : _p.addEventListener('click', (e) => { e.preventDefault(); handleCtaButtonClick("Schedule a Free Consultation"); });
    // Footer Links
    (_q = getElementById('footer-home-link')) === null || _q === void 0 ? void 0 : _q.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Home (Footer)"); });
    (_r = getElementById('footer-pricing-link')) === null || _r === void 0 ? void 0 : _r.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Pricing (Footer)"); });
    (_s = getElementById('footer-case-studies-link')) === null || _s === void 0 ? void 0 : _s.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Case Studies (Footer)"); });
    (_t = getElementById('footer-faqs-link')) === null || _t === void 0 ? void 0 : _t.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("FAQs (Footer)"); });
    (_u = getElementById('footer-email-link')) === null || _u === void 0 ? void 0 : _u.addEventListener('click', (e) => { e.preventDefault(); console.log("Email link clicked."); });
    (_v = getElementById('footer-phone-link')) === null || _v === void 0 ? void 0 : _v.addEventListener('click', (e) => { e.preventDefault(); console.log("Phone link clicked."); });
    // Newsletter Form Submission
    (_w = getElementById('newsletter-form')) === null || _w === void 0 ? void 0 : _w.addEventListener('submit', handleNewsletterSubmit);
}
// This code runs when the entire HTML document is loaded and ready.
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all our button and link listeners.
    initializeEventListeners();
    console.log("Website interactive elements initialized.");
});
