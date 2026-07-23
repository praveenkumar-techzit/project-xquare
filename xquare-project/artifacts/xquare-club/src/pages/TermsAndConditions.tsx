import type { ReactNode } from "react";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-black px-5 py-14 text-white sm:px-8 sm:py-20">
      <article className="mx-auto max-w-4xl">
        <a
          href="/"
          className="mb-10 inline-flex items-center text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          ← Back to XQUARE CLUB
        </a>

        <header className="border-b border-white/10 pb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">
            XQUARE CLUB
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms and Conditions
          </h1>

          <p className="mt-4 text-sm text-white/50">
            Last updated: 22 July 2026
          </p>
        </header>

        <div className="mt-10 space-y-10 text-base leading-8 text-white/70">
          <section>
            <p>
              These Terms and Conditions govern your access to and use of the
              XQUARE CLUB website, early-access applications, onboarding forms
              and related services operated by XQUARE CLUB PRIVATE LIMITED
              (“XQUARE CLUB”, “we”, “us” or “our”).
            </p>

            <p className="mt-4">
              By visiting the website, submitting an influencer application,
              applying to list a business or otherwise using XQUARE CLUB, you
              agree to these Terms and Conditions.
            </p>

            <p className="mt-4">
              If you do not agree with these Terms, please do not use the
              website or submit information through the platform.
            </p>
          </section>

          <PolicySection title="1. About XQUARE CLUB">
            <p>
              XQUARE CLUB is a community-driven platform being developed to
              connect businesses, influencers and customers within one
              ecosystem.
            </p>

            <p className="mt-4">
              The platform aims to help businesses showcase products and
              services, provide growing influencers with more accessible
              promotion opportunities and support customers in discovering
              products through creators and relatable content.
            </p>

            <p className="mt-4">
              XQUARE CLUB is currently accepting applications for early access.
              Applications are reviewed and verified manually before onboarding.
            </p>
          </PolicySection>

          <PolicySection title="2. Acceptance of These Terms">
            <p>By accessing or using XQUARE CLUB, you confirm that:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>You have read and understood these Terms</li>
              <li>You agree to comply with these Terms</li>
              <li>
                The information you provide is accurate, complete and lawful
              </li>
              <li>
                You are legally capable of entering into binding agreements
              </li>
            </ul>

            <p className="mt-4">
              If you use XQUARE CLUB on behalf of a company, business,
              partnership or other organisation, you confirm that you are
              authorised to act on its behalf.
            </p>
          </PolicySection>

          <PolicySection title="3. Eligibility">
            <p>
              XQUARE CLUB is intended for individuals who are at least 18 years
              old and legally capable of entering into agreements.
            </p>

            <p className="mt-4">
              Individuals below 18 years of age may use the platform only with
              the involvement and consent of a parent or legal guardian, where
              permitted by law.
            </p>

            <p className="mt-4">
              Businesses submitting applications must be legally operating or
              represented by a person authorised to provide the relevant
              information.
            </p>
          </PolicySection>

          <PolicySection title="4. Early-Access Applications">
            <p>
              Influencers and businesses may submit applications to express
              interest in joining XQUARE CLUB.
            </p>

            <p className="mt-4">
              Application submission is currently free. However:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Submitting an application does not guarantee approval</li>
              <li>
                Approval does not guarantee onboarding, listing, promotion or
                collaboration
              </li>
              <li>
                We may request additional information or verification documents
              </li>
              <li>
                We may approve, reject, defer or place an application on hold
              </li>
              <li>
                Future onboarding, listing or platform services may be subject
                to charges
              </li>
            </ul>

            <p className="mt-4">
              Any future charge will be communicated before payment is
              collected.
            </p>
          </PolicySection>

          <PolicySection title="5. Information Submitted by Users">
            <p>
              When submitting an application or using XQUARE CLUB, you agree to
              provide information that is:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Accurate and current</li>
              <li>Complete to the best of your knowledge</li>
              <li>Not misleading, fraudulent or deceptive</li>
              <li>Lawfully owned or authorised for submission</li>
              <li>Not harmful to another person or organisation</li>
            </ul>

            <p className="mt-4">
              You are responsible for the accuracy of all information,
              documents, photographs, links and materials you submit.
            </p>

            <p className="mt-4">
              We may remove, reject or request correction of information that
              appears inaccurate, incomplete, misleading, inappropriate or
              unlawful.
            </p>
          </PolicySection>

          <PolicySection title="6. Influencer Responsibilities">
            <p>Influencers using XQUARE CLUB agree to:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Provide genuine social media profile information</li>
              <li>
                Not misrepresent followers, reach, engagement or audience data
              </li>
              <li>
                Disclose paid, sponsored, gifted or affiliate content as
                required by law and platform rules
              </li>
              <li>
                Deliver agreed content honestly and within agreed timelines
              </li>
              <li>
                Respect brand guidelines, intellectual property and third-party
                rights
              </li>
              <li>
                Avoid false claims, misleading endorsements or deceptive
                promotions
              </li>
              <li>
                Comply with applicable advertising, consumer protection and
                social media requirements
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="7. Business and Seller Responsibilities">
            <p>Businesses and sellers using XQUARE CLUB agree to:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Provide accurate information about their business, products and
                services
              </li>
              <li>
                Ensure that products and services are lawful, genuine and fit
                for sale
              </li>
              <li>
                Avoid misleading claims, fake discounts or deceptive promotions
              </li>
              <li>
                Clearly communicate collaboration expectations, deliverables and
                compensation
              </li>
              <li>
                Honour valid commitments made directly to influencers or
                customers
              </li>
              <li>
                Comply with applicable tax, licensing, consumer protection and
                business laws
              </li>
              <li>Respect influencer content rights and agreed usage terms</li>
            </ul>
          </PolicySection>

          <PolicySection title="8. Collaboration Arrangements">
            <p>
              XQUARE CLUB may help businesses and influencers discover, evaluate
              or communicate about possible collaborations.
            </p>

            <p className="mt-4">
              Unless XQUARE CLUB is specifically named as a contracting party in
              a separate written agreement, any collaboration agreement is
              directly between the business and the influencer.
            </p>

            <p className="mt-4">The parties are responsible for agreeing on:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Deliverables</li>
              <li>Content format and publishing schedule</li>
              <li>Compensation and payment timelines</li>
              <li>Product delivery and return arrangements</li>
              <li>Content usage and intellectual property rights</li>
              <li>Performance expectations</li>
              <li>Cancellation and dispute terms</li>
              <li>Advertising disclosures</li>
            </ul>

            <p className="mt-4">
              Users should independently evaluate every proposed collaboration
              before accepting it.
            </p>
          </PolicySection>

          <PolicySection title="9. No Guaranteed Opportunities or Results">
            <p>XQUARE CLUB does not guarantee:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Approval of any application</li>
              <li>Any particular collaboration opportunity</li>
              <li>Any minimum number of leads, views, clicks or sales</li>
              <li>Income, revenue, follower growth or engagement</li>
              <li>The suitability or reliability of another user</li>
              <li>The success of a product, campaign or promotion</li>
            </ul>

            <p className="mt-4">
              Outcomes depend on many factors outside our control, including
              audience behaviour, content quality, pricing, product demand,
              platform algorithms and the conduct of other parties.
            </p>
          </PolicySection>

          <PolicySection title="10. Fees and Future Paid Services">
            <p>Applications for early access are currently free to submit.</p>

            <p className="mt-4">
              XQUARE CLUB may introduce paid services in the future, including
              subscriptions, listing fees, promotional packages, commissions or
              onboarding charges.
            </p>

            <p className="mt-4">
              Before payment is collected, the applicable price, scope, billing
              method and important conditions will be displayed or communicated
              to the purchaser.
            </p>

            <p className="mt-4">
              Additional terms may apply to individual paid services.
            </p>
          </PolicySection>

          <PolicySection title="11. User Conduct">
            <p>You must not use XQUARE CLUB to:</p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Submit false, fraudulent or misleading information</li>
              <li>Impersonate another person, influencer, brand or business</li>
              <li>Upload malware, harmful code or unlawful content</li>
              <li>Harass, threaten, exploit or discriminate against others</li>
              <li>
                Infringe copyrights, trademarks, privacy or other legal rights
              </li>
              <li>
                Attempt to gain unauthorised access to accounts, systems or data
              </li>
              <li>
                Scrape, copy or commercially exploit platform data without
                permission
              </li>
              <li>
                Manipulate engagement, followers, reviews, referrals or sales
              </li>
              <li>
                Promote prohibited, counterfeit, unsafe or unlawful products
              </li>
              <li>
                Use the platform for deceptive, abusive or illegal activity
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="12. Verification and Platform Safety">
            <p>
              We may request identity, business or social media verification to
              maintain trust and reduce fraud.
            </p>

            <p className="mt-4">
              Verification does not mean that XQUARE CLUB guarantees the
              honesty, performance, legality or financial reliability of a user.
            </p>

            <p className="mt-4">
              Users remain responsible for conducting their own checks before
              entering into collaborations, transferring money, shipping
              products or granting content usage rights.
            </p>
          </PolicySection>

          <PolicySection title="13. Content Submitted to XQUARE CLUB">
            <p>
              You retain ownership of the content and materials you submit,
              subject to the rights granted under these Terms.
            </p>

            <p className="mt-4">
              By submitting content, you grant XQUARE CLUB a limited,
              non-exclusive, worldwide and royalty-free licence to store,
              process, reproduce, display and use that content as reasonably
              necessary to:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Review and verify your application</li>
              <li>Create and manage your platform profile</li>
              <li>Operate and improve XQUARE CLUB</li>
              <li>Facilitate potential collaboration opportunities</li>
              <li>
                Promote XQUARE CLUB with your separate consent where needed
              </li>
            </ul>

            <p className="mt-4">
              You confirm that you have the rights and permissions required to
              submit the content.
            </p>
          </PolicySection>

          <PolicySection title="14. XQUARE CLUB Intellectual Property">
            <p>
              The XQUARE CLUB name, logo, brand identity, website design,
              software, graphics, written content and other platform materials
              are owned by or licensed to XQUARE CLUB PRIVATE LIMITED.
            </p>

            <p className="mt-4">
              You may not copy, reproduce, modify, distribute, sell, license or
              commercially exploit these materials without prior written
              permission.
            </p>
          </PolicySection>

          <PolicySection title="15. Third-Party Services and Links">
            <p>
              XQUARE CLUB may use or link to third-party services, including
              website hosts, API hosts, cloud storage providers, analytics
              providers, social media platforms and payment services.
            </p>

            <p className="mt-4">
              We do not control and are not responsible for the availability,
              content, security, performance or policies of third-party
              services.
            </p>

            <p className="mt-4">
              Your use of third-party services may be subject to their own terms
              and privacy policies.
            </p>
          </PolicySection>

          <PolicySection title="16. Suspension, Rejection and Termination">
            <p>
              We may reject an application, remove content, suspend access or
              terminate participation where we reasonably believe that:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>These Terms have been violated</li>
              <li>Information is false, misleading or incomplete</li>
              <li>Fraud, impersonation or misuse is suspected</li>
              <li>Another person, business or the platform may be at risk</li>
              <li>Applicable law or a lawful authority requires action</li>
              <li>
                Continued participation may damage the integrity or reputation
                of XQUARE CLUB
              </li>
            </ul>

            <p className="mt-4">
              Where appropriate, we may request clarification or correction
              before taking action.
            </p>
          </PolicySection>

          <PolicySection title="17. Availability of the Platform">
            <p>
              We aim to keep XQUARE CLUB available and functioning properly, but
              we do not guarantee uninterrupted or error-free operation.
            </p>

            <p className="mt-4">
              The website or services may be unavailable because of:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Maintenance or upgrades</li>
              <li>Technical failures</li>
              <li>Hosting or internet outages</li>
              <li>Security incidents</li>
              <li>Third-party service disruptions</li>
              <li>Events beyond our reasonable control</li>
            </ul>
          </PolicySection>

          <PolicySection title="18. Disclaimer">
            <p>XQUARE CLUB is provided on an “as available” basis.</p>

            <p className="mt-4">
              To the maximum extent permitted by law, we make no guarantee
              regarding:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>The accuracy of user-submitted information</li>
              <li>The suitability of any influencer or business</li>
              <li>The quality or legality of third-party products</li>
              <li>The success of a campaign or collaboration</li>
              <li>Continuous availability of the platform</li>
              <li>Specific commercial, financial or marketing results</li>
            </ul>

            <p className="mt-4">
              Nothing on XQUARE CLUB should be treated as legal, financial, tax,
              investment or professional advice.
            </p>
          </PolicySection>

          <PolicySection title="19. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, XQUARE CLUB PRIVATE
              LIMITED will not be liable for indirect, incidental, special,
              consequential or business losses arising from:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Use of or inability to use the platform</li>
              <li>Rejected or unsuccessful applications</li>
              <li>
                Actions or omissions of influencers, businesses or customers
              </li>
              <li>Failed or disputed collaborations</li>
              <li>Loss of profits, opportunities, data or reputation</li>
              <li>Third-party services or external platforms</li>
              <li>Unauthorised activity outside our reasonable control</li>
            </ul>

            <p className="mt-4">
              Nothing in these Terms excludes liability that cannot legally be
              excluded or limits mandatory consumer rights.
            </p>
          </PolicySection>

          <PolicySection title="20. Indemnity">
            <p>
              You agree to be responsible for claims, losses, liabilities or
              expenses arising from:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Your breach of these Terms</li>
              <li>Your unlawful or improper use of XQUARE CLUB</li>
              <li>False or misleading information submitted by you</li>
              <li>Your infringement of another person’s rights</li>
              <li>
                Your products, services, promotions or collaboration conduct
              </li>
            </ul>

            <p className="mt-4">
              This section applies only to the extent permitted by applicable
              law.
            </p>
          </PolicySection>

          <PolicySection title="21. Privacy">
            <p>
              Our collection and use of personal information is explained in the
              XQUARE CLUB Privacy Policy.
            </p>

            <p className="mt-4">
              By using the platform or submitting an application, you
              acknowledge that your information may be processed according to
              that Privacy Policy.
            </p>

            <p className="mt-4">
              You can review the Privacy Policy at{" "}
              <a
                href="/privacy-policy"
                className="font-medium text-blue-400 transition hover:text-blue-300"
              >
                /privacy-policy
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="22. Refunds and Cancellations">
            <p>
              Early-access applications are currently free, so no refund is
              applicable to application submission.
            </p>

            <p className="mt-4">
              Any future paid service will be subject to the applicable pricing
              and refund conditions communicated at the time of purchase.
            </p>

            <p className="mt-4">
              Please review our{" "}
              <a
                href="/refund-cancellation-policy"
                className="font-medium text-blue-400 transition hover:text-blue-300"
              >
                Refund and Cancellation Policy
              </a>{" "}
              for more information.
            </p>
          </PolicySection>

          <PolicySection title="23. Changes to These Terms">
            <p>
              We may update these Terms when the platform, services, commercial
              model or legal requirements change.
            </p>

            <p className="mt-4">
              Updated Terms will be published on this page with a revised “Last
              updated” date.
            </p>

            <p className="mt-4">
              Your continued use of XQUARE CLUB after revised Terms are
              published will constitute acceptance of the updated Terms.
            </p>
          </PolicySection>

          <PolicySection title="24. Governing Law and Jurisdiction">
            <p>These Terms are governed by the laws of India.</p>

            <p className="mt-4">
              Subject to applicable consumer rights and mandatory legal
              requirements, courts having jurisdiction over Ernakulam, Kerala
              will have jurisdiction over disputes arising from or connected
              with these Terms or the use of XQUARE CLUB.
            </p>
          </PolicySection>

          <PolicySection title="25. Contact Us">
            <p>
              For questions, concerns or complaints regarding these Terms,
              contact:
            </p>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <p className="font-semibold text-white">
                XQUARE CLUB PRIVATE LIMITED
              </p>

              <address className="mt-3 not-italic">
                55/956, Main Avenue Road
                <br />
                Panampilly Nagar
                <br />
                Ernakulam, Kerala 682036
                <br />
                India
              </address>

              <p className="mt-4">
                Email:{" "}
                <a
                  href="mailto:hello@xquareclub.com"
                  className="font-medium text-blue-400 transition hover:text-blue-300"
                >
                  hello@xquareclub.com
                </a>
              </p>

              <p className="mt-2">
                Phone:{" "}
                <a
                  href="tel:+919567089117"
                  className="font-medium text-blue-400 transition hover:text-blue-300"
                >
                  +91 95670 89117
                </a>
              </p>
            </div>
          </PolicySection>
        </div>
      </article>
    </main>
  );
}

type PolicySectionProps = {
  title: string;
  children: ReactNode;
};

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>

      <div>{children}</div>
    </section>
  );
}
