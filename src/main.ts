// This is our main TypeScript file for Quantum Ledger AI.
// We will add interactive logic for our website here.

/**
 * A utility function to safely get an HTML element by its ID.
 * It returns the element if found, or null if not found, and logs an error.
 * @param id The ID of the HTML element to find.
 * @returns HTMLElement | null
 */
function getElementById<T extends HTMLElement>(id: string): T | null {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Error: Element with ID "${id}" not found.`);
        return null;
    }
    return element as T;
}

/**
 * Handles clicks on navigation links.
 * @param linkName The name of the navigation link clicked.
 */
function handleNavLinkClick(linkName: string): void {
    console.log(`Navigation link "${linkName}" clicked!`);
    // In a real website, this would navigate to a different page or scroll to a section.
    // Example: window.location.href = `/${linkName.toLowerCase()}.html`;
}

/**
 * Handles clicks on main call-to-action buttons.
 * @param buttonName The name of the button clicked.
 */
function handleCtaButtonClick(buttonName: string): void {
    console.log(`Call to Action button "${buttonName}" clicked!`);
    // In a real website, this might open a contact form, a modal, or lead to a specific service page.
}

/**
 * Handles clicks on feature cards.
 * This function now navigates to a new page in the same tab.
 * @param featureName The name of the feature card clicked.
 */
function handleFeatureCardClick(featureName: string): void {
    console.log(`Feature card for "${featureName}" clicked!`);
    let url: string = '';
    // Determine the URL for the new page based on the feature name
    switch (featureName) {
        case "Automated Support Chatbots":
            url = "chatbots.html"; // Relative path to the new HTML file
            break;
        case "Intelligent Email Analysis":
            url = "email-analysis.html"; // Relative path to the new HTML file
            break;
        case "Automated Invoice Processing":
            url = "invoice-processing.html"; // Relative path to the new HTML file
            break;
        default:
            console.warn(`No specific URL defined for feature: ${featureName}`);
            return; // Stop the function if no URL is defined
    }
    // window.location.href changes the current page in the same tab.
    window.location.href = url;
    console.log(`Navigating to: ${url}`);
}

/**
 * Handles the mobile menu button click.
 */
function handleMobileMenuClick(): void {
    console.log("Mobile menu button clicked! Toggling mobile navigation.");
    // Get the mobile menu element
    const mobileMenu = getElementById('mobile-menu');

    if (mobileMenu) {
        // Check if the menu currently has the 'hidden' class
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            // If it's hidden, remove 'hidden' and add 'block' to show it
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('block');
            console.log("Mobile menu shown.");
        } else {
            // If it's visible, remove 'block' and add 'hidden' to hide it
            mobileMenu.classList.remove('block');
            mobileMenu.classList.add('hidden');
            console.log("Mobile menu hidden.");
        }
    }
}

/**
 * Handles newsletter subscription form submission.
 * @param event The form submission event.
 */
function handleNewsletterSubmit(event: Event): void {
    // event.preventDefault() stops the browser from doing its default action (like reloading the page)
    // when a form is submitted. We want to handle it with our JavaScript instead.
    event.preventDefault();

    // Try to get the email input field by its ID.
    const emailInput = getElementById<HTMLInputElement>('newsletter-email');

    // Check if the email input element was found and has a value.
    if (emailInput && emailInput.value) {
        const email = emailInput.value;
        console.log(`Newsletter subscription requested for: ${email}`);
        // In a real website, you would send this email to a server for subscription.
        // For now, we'll clear the input field and give a simple console message.
        emailInput.value = ''; // Clear the input field
        console.log("Thank you for subscribing to our newsletter!");
    } else {
        console.warn("Newsletter subscription attempt: Email input not found or empty.");
    }
}

/**
 * Shows a modal by removing the 'hidden' class and adding 'flex'.
 * @param modalId The ID of the modal container element.
 */
function showModal(modalId: string): void {
    const modal = getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex'); // 'flex' is used to center content with Tailwind
        console.log(`Modal "${modalId}" shown.`);
    }
}

/**
 * Hides a modal by removing the 'flex' class and adding 'hidden'.
 * @param modalId The ID of the modal container element.
 */
function hideModal(modalId: string): void {
    const modal = getElementById(modalId);
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        console.log(`Modal "${modalId}" hidden.`);
    }
}

/**
 * Initializes all event listeners for buttons and links on the page.
 */
function initializeEventListeners(): void {
    // Header Navigation Links
    getElementById('logo-link')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Logo"); });
    getElementById('nav-services')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Services"); });
    getElementById('nav-solutions')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Solutions"); });
    getElementById('nav-about')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("About Us"); });
    getElementById('nav-blog')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Blog"); });
    getElementById('nav-contact')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Contact"); });

    // Header Call to Action Button
    getElementById('header-quote-button')?.addEventListener('click', (e) => { e.preventDefault(); handleCtaButtonClick("Get a Free Quote (Header)"); });

    // Mobile Menu Button
    getElementById('mobile-menu-button')?.addEventListener('click', handleMobileMenuClick);

    // Feature Cards - NOW NAVIGATE TO NEW PAGES IN SAME TAB
    getElementById('feature-chatbot-card')?.addEventListener('click', (e) => { e.preventDefault(); handleFeatureCardClick("Automated Support Chatbots"); });
    getElementById('feature-email-card')?.addEventListener('click', (e) => { e.preventDefault(); handleFeatureCardClick("Intelligent Email Analysis"); });
    getElementById('feature-invoice-card')?.addEventListener('click', (e) => { e.preventDefault(); handleFeatureCardClick("Automated Invoice Processing"); });

    // Main Call to Action Button (bottom section) - STILL SHOWS CONSULTATION MODAL
    getElementById('consultation-button')?.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        handleCtaButtonClick("Schedule a Free Consultation"); // Log to console
        showModal('consultation-modal'); // Show the modal!
    });

    // Consultation Modal Close Button
    getElementById('close-modal-button')?.addEventListener('click', () => hideModal('consultation-modal'));

    // Close consultation modal if clicking outside the modal content (on the overlay)
    const consultationModal = getElementById('consultation-modal');
    if (consultationModal) {
        consultationModal.addEventListener('click', (event) => {
            if (event.target === consultationModal) {
                hideModal('consultation-modal');
            }
        });
    }

    // Footer Links
    getElementById('footer-home-link')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Home (Footer)"); });
    getElementById('footer-pricing-link')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Pricing (Footer)"); });
    getElementById('footer-case-studies-link')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("Case Studies (Footer)"); });
    getElementById('footer-faqs-link')?.addEventListener('click', (e) => { e.preventDefault(); handleNavLinkClick("FAQs (Footer)"); });
    getElementById('footer-email-link')?.addEventListener('click', (e) => { e.preventDefault(); console.log("Email link clicked."); });
    getElementById('footer-phone-link')?.addEventListener('click', (e) => { e.preventDefault(); console.log("Phone link clicked."); });

    // Newsletter Form Submission
    getElementById<HTMLFormElement>('newsletter-form')?.addEventListener('submit', handleNewsletterSubmit);
}

// This code runs when the entire HTML document is loaded and ready.
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all our button and link listeners.
    initializeEventListeners();
    console.log("Website interactive elements initialized.");
});