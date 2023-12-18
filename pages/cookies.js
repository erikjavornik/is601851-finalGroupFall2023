import Head from 'next/head';

export default function CookiesPolicy() {
  return (
    <>
      <Head>
        <title>Cookies Policy</title>
      </Head>

      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-bold mb-4">Cookies Policy</h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to Your Website ("we," "us," or "our"). This Cookies Policy explains how we use cookies and similar technologies on our website. By using our website, you agree to the use of cookies as described in this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. What are Cookies?</h2>
          <p>
            Cookies are small pieces of data stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
          <p>
            If you have any questions about our Cookies Policy, please contact us at [your contact information].
          </p>
        </section>
      </div>
    </>
  );
};

