// Importing Head component from Next.js for managing document head
import Head from 'next/head';

// Cookies Policy page component
export default function CookiesPolicy() {
  return (
    <>
      {/* Head section with document title */}
      <Head>
        <title>Cookies Policy</title>
      </Head>

      {/* Main content container */}
      <div className="container mx-auto my-8">
        {/* Heading for Cookies Policy */}
        <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>

        {/* Section 1: Introduction */}
        <section>
          {/* Subheading */}
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          {/* Explanation */}
          <p>
            Welcome to Your Website ("we," "us," or "our"). This Cookies Policy explains how we use cookies and similar technologies on our website. By using our website, you agree to the use of cookies as described in this policy.
          </p>
        </section>

        {/* Section 2: What are Cookies? */}
        <section>
          {/* Subheading */}
          <h2 className="text-xl font-semibold mb-2">2. What are Cookies?</h2>
          {/* Explanation */}
          <p>
            Cookies are small pieces of data stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
        </section>

        {/* Section 7: Contact Us */}
        <section>
          {/* Subheading */}
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          {/* Explanation */}
          <p>
            If you have any questions about our Cookies Policy, please contact us at [your contact information].
          </p>
        </section>
      </div>
    </>
  );
};


