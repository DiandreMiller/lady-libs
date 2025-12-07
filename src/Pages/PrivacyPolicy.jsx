const PrivacyPolicy = () => {
    return (
      <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-950 text-yellow-50 px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-3xl rounded-3xl bg-purple-950/70 backdrop-blur-md border border-purple-700/40 shadow-xl shadow-purple-950/70 p-8 sm:p-12">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-yellow-100/80">
              Last updated: December 2025
            </p>
          </header>
  
          <section className="space-y-6 text-sm sm:text-base text-yellow-100/85 leading-relaxed">
            <p>
              Lady Libs respects your privacy and is committed to protecting your
              personal information. This Privacy Policy explains how your data is
              collected, used, and safeguarded when you visit this website or
              submit a form.
            </p>
  
            <div>
              <h2 className="text-lg font-semibold text-yellow-50 mb-2">
                Information We Collect
              </h2>
              <p>
                When you interact with Lady Libs, we may collect the following
                information:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Your name and email address</li>
                <li>Messages sent through the contact form</li>
                <li>Basic usage data such as pages visited</li>
              </ul>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-yellow-50 mb-2">
                How We Use Your Information
              </h2>
              <p>
                Your information is used solely to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Respond to inquiries and messages</li>
                <li>Provide customer support</li>
                <li>Improve the Lady Libs experience</li>
              </ul>
              <p className="mt-2">
                We do not sell, rent, or share your personal information with
                third parties.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-yellow-50 mb-2">
                Form Submissions
              </h2>
              <p>
                Contact form submissions are securely handled through Netlify’s
                form services. Messages may be retained for customer support
                purposes but are never shared outside of Lady Libs.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-yellow-50 mb-2">
                Cookies & Analytics
              </h2>
              <p>
                This site may use minimal analytics to understand site performance.
                No personally identifiable information is tracked without consent.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-yellow-50 mb-2">
                Your Rights
              </h2>
              <p>
                You may request access to, correction of, or deletion of your
                personal information at any time by contacting Lady Libs directly.
              </p>
            </div>
  
            <div>
              <h2 className="text-lg font-semibold text-yellow-50 mb-2">
                Contact
              </h2>
              <p>
                If you have questions about this Privacy Policy or how your data is
                handled, please reach out via the contact form on the website.
              </p>
            </div>
          </section>
        </div>
      </main>
    );
  };
  
  export default PrivacyPolicy;