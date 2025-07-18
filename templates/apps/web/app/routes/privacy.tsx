import { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight">
            Privacy Policy
          </h1>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: TODO
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Awesome Website ("we," "our," or "us"). We are
                committed to protecting your personal information and your right
                to privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website.
              </p>
              <p className="mb-4">
                Please read this Privacy Policy carefully. If you do not agree
                with the terms of this Privacy Policy, please do not access the
                site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The
                information we may collect on the site includes:
              </p>

              <h3 className="text-xl font-semibold mb-3">Personal Data</h3>
              <p className="mb-4">
                Personally identifiable information, such as your name, shipping
                address, email address, and telephone number, and demographic
                information, such as your age, gender, hometown, and interests,
                that you voluntarily give to us when you register with the site
                or when you choose to participate in various activities related
                to the site.
              </p>

              <h3 className="text-xl font-semibold mb-3">Derivative Data</h3>
              <p className="mb-4">
                Information our servers automatically collect when you access
                the site, such as your IP address, your browser type, your
                operating system, your access times, and the pages you have
                viewed directly before and after accessing the site.
              </p>

              <h3 className="text-xl font-semibold mb-3">Financial Data</h3>
              <p className="mb-4">
                Financial information, such as data related to your payment
                method (e.g., valid credit card number, card brand, expiration
                date) that we may collect when you purchase, order, return,
                exchange, or request information about our services from the
                site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="mb-4">
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you via the
                site to:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>Create and manage your account.</li>
                <li>
                  Process your transactions and send you related information.
                </li>
                <li>Email you regarding your account or order.</li>
                <li>
                  Fulfill and manage purchases, orders, payments, and other
                  transactions.
                </li>
                <li>
                  Generate a personal profile about you to make future visits to
                  the site more personalized.
                </li>
                <li>Increase the efficiency and operation of the site.</li>
                <li>
                  Monitor and analyze usage and trends to improve your
                  experience with the site.
                </li>
                <li>Notify you of updates to the site.</li>
                <li>
                  Offer new products, services, and/or recommendations to you.
                </li>
                <li>Perform other business activities as needed.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                4. Disclosure of Your Information
              </h2>
              <p className="mb-4">
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>

              <h3 className="text-xl font-semibold mb-3">
                By Law or to Protect Rights
              </h3>
              <p className="mb-4">
                If we believe the release of information about you is necessary
                to respond to legal process, to investigate or remedy potential
                violations of our policies, or to protect the rights, property,
                and safety of others, we may share your information as permitted
                or required by any applicable law, rule, or regulation.
              </p>

              <h3 className="text-xl font-semibold mb-3">Business Transfers</h3>
              <p className="mb-4">
                We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets,
                financing, or acquisition of all or a portion of our business to
                another company.
              </p>

              <h3 className="text-xl font-semibold mb-3">
                Third-Party Service Providers
              </h3>
              <p className="mb-4">
                We may share your information with third parties that perform
                services for us or on our behalf, including payment processing,
                data analysis, email delivery, hosting services, customer
                service, and marketing assistance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                5. Tracking Technologies
              </h2>
              <p className="mb-4">
                We may use cookies, web beacons, tracking pixels, and other
                tracking technologies on the site to help customize the site and
                improve your experience. For more information on how we use
                cookies, please refer to our Cookie Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                6. Third-Party Websites
              </h2>
              <p className="mb-4">
                The site may contain links to third-party websites and
                applications of interest, including advertisements and external
                services, that are not affiliated with us. Once you have used
                these links to leave the site, any information you provide to
                these third parties is not covered by this Privacy Policy, and
                we cannot guarantee the safety and privacy of your information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                7. Security of Your Information
              </h2>
              <p className="mb-4">
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                8. Policy for Children
              </h2>
              <p className="mb-4">
                We do not knowingly solicit information from or market to
                children under the age of 13. If we learn that we have collected
                personal information from a child under age 13 without
                verification of parental consent, we will delete that
                information as quickly as possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="list-disc ml-6 mb-4">
                <li>
                  The right to access – You have the right to request copies of
                  your personal data.
                </li>
                <li>
                  The right to rectification – You have the right to request
                  that we correct any information you believe is inaccurate or
                  complete information you believe is incomplete.
                </li>
                <li>
                  The right to erasure – You have the right to request that we
                  erase your personal data, under certain conditions.
                </li>
                <li>
                  The right to restrict processing – You have the right to
                  request that we restrict the processing of your personal data,
                  under certain conditions.
                </li>
                <li>
                  The right to object to processing – You have the right to
                  object to our processing of your personal data, under certain
                  conditions.
                </li>
                <li>
                  The right to data portability – You have the right to request
                  that we transfer the data that we have collected to another
                  organization, or directly to you, under certain conditions.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                10. Changes to This Privacy Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time in order to
                reflect, for example, changes to our practices or for other
                operational, legal, or regulatory reasons. We will notify you of
                any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="mb-4">
                If you have questions or comments about this Privacy Policy,
                please contact us at:
              </p>
              <p className="mb-4">Email: your@email.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
