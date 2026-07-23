import type { ReactNode } from "react";

export default function RefundCancellationPolicy() {
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
            Refund &amp; Cancellation Policy
          </h1>

          <p className="mt-4 text-sm text-white/50">
            Effective Date: 22 July 2026
          </p>
        </header>

        <div className="mt-10 space-y-10 text-base leading-8 text-white/70">
          <section>
            <p>
              At XQUARE CLUB PRIVATE LIMITED (“XQUARE CLUB”, “we”, “us” or
              “our”), we are committed to providing a transparent and reliable
              experience for our users.
            </p>

            <p className="mt-4">
              This Refund &amp; Cancellation Policy explains the terms
              applicable to Early Access applications and to any eligible
              product or service orders placed through XQUARE CLUB.
            </p>

            <p className="mt-4">
              Please read this Policy carefully before submitting an application
              or placing an order.
            </p>
          </section>

          <PolicySection title="1. Early Access Applications">
            <p>
              Applications for Early Access are currently free for both
              influencers and businesses. No payment or application fee is
              collected when an Early Access application is submitted.
            </p>

            <p className="mt-4">
              Since no payment is collected for an Early Access application, no
              refund is applicable to its submission.
            </p>

            <p className="mt-4">
              Submitting an application does not guarantee approval, onboarding,
              listing or any collaboration opportunity. Every application may be
              reviewed and verified manually by the XQUARE CLUB team.
            </p>
          </PolicySection>

          <PolicySection title="2. Withdrawal of an Early Access Application">
            <p>
              An influencer or business may request withdrawal of an Early
              Access application by contacting us at{" "}
              <EmailLink>hello@xquareclub.com</EmailLink>.
            </p>

            <p className="mt-4">
              The request should include the applicant&apos;s full name, email
              address, mobile number and the type of application submitted so
              that we can identify it.
            </p>

            <p className="mt-4">
              Any request for deletion of personal information associated with
              an application will be handled in accordance with our{" "}
              <a
                href="/privacy-policy"
                className="font-medium text-blue-400 transition hover:text-blue-300"
              >
                Privacy Policy
              </a>
              .
            </p>
          </PolicySection>

          <PolicySection title="3. Cancellation Policy">
            <ul className="list-disc space-y-3 pl-6">
              <li>
                An eligible order may be cancelled only before it has been
                dispatched.
              </li>

              <li>
                Once an order has been dispatched, it cannot be cancelled.
              </li>

              <li>
                To request cancellation, contact us as soon as possible with
                your order number and registered contact details.
              </li>

              <li>
                If an eligible cancellation request is approved, the refund will
                be processed to the original payment method within 7–10 working
                days.
              </li>
            </ul>

            <p className="mt-4">
              The time taken for the refunded amount to appear in your account
              may also depend on your bank, card issuer or payment provider.
            </p>
          </PolicySection>

          <PolicySection title="4. Refund Policy">
            <p>
              We accept refund requests subject to all of the following
              conditions:
            </p>

            <ul className="mt-3 list-disc space-y-3 pl-6">
              <li>
                The refund request must be raised within 7 working days from the
                date of delivery.
              </li>

              <li>The product must be unused, undamaged and unaltered.</li>

              <li>
                The product must be returned in its original packaging with all
                tags, accessories and the original invoice.
              </li>

              <li>
                The returned product must meet any additional return conditions
                displayed at the time of purchase.
              </li>
            </ul>

            <p className="mt-4">
              After receiving the returned product, our team will inspect it to
              verify its condition and determine whether it is eligible for a
              refund.
            </p>

            <p className="mt-4">
              If the refund is approved, the eligible amount will be credited to
              the original payment method within 7–10 working days.
            </p>
          </PolicySection>

          <PolicySection title="5. Damaged, Defective or Incorrect Products">
            <p>
              If you receive a damaged, defective or incorrect product, please
              contact us within 7 working days from the date of delivery.
            </p>

            <p className="mt-4">Your request should include:</p>

            <ul className="mt-3 list-disc space-y-3 pl-6">
              <li>Your order number</li>
              <li>Your registered contact details</li>
              <li>A description of the issue</li>
              <li>
                Clear photographs or videos showing the product, packaging and
                reported issue
              </li>
            </ul>

            <p className="mt-4">
              After reviewing and verifying the request, we may arrange a
              replacement or issue a refund, as applicable.
            </p>
          </PolicySection>

          <PolicySection title="6. Non-Refundable Items">
            <p>Refunds will not be provided for:</p>

            <ul className="mt-3 list-disc space-y-3 pl-6">
              <li>
                Products returned after 7 working days from the date of delivery
              </li>

              <li>Used, damaged, washed, modified or altered products</li>

              <li>
                Products not returned in their original condition or packaging
              </li>

              <li>
                Products returned without their tags, accessories or invoice
              </li>

              <li>
                Items marked as non-returnable or non-refundable at the time of
                purchase
              </li>

              <li>
                Products damaged because of improper use, handling or storage
                after delivery
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="7. Return Shipping">
            <p>
              Return shipping instructions, including the applicable return
              address and approved method of return, will be communicated after
              a return request has been reviewed.
            </p>

            <p className="mt-4">
              Products should not be returned without first contacting XQUARE
              CLUB and receiving return instructions.
            </p>

            <p className="mt-4">
              Responsibility for return shipping costs will depend on the reason
              for the return and the conditions communicated for the relevant
              order.
            </p>
          </PolicySection>

          <PolicySection title="8. Inspection and Approval">
            <p>
              Receipt of a returned product does not automatically guarantee a
              refund.
            </p>

            <p className="mt-4">
              The product will be inspected to confirm that it satisfies the
              applicable return conditions. We may decline a return or refund if
              the product is found to be used, damaged, altered, incomplete or
              otherwise ineligible.
            </p>

            <p className="mt-4">
              We will communicate whether the refund or replacement request has
              been approved or rejected after completing the inspection.
            </p>
          </PolicySection>

          <PolicySection title="9. Refund Processing">
            <p>
              Approved refunds will ordinarily be processed to the original
              payment method used for the transaction.
            </p>

            <p className="mt-4">
              XQUARE CLUB will generally initiate an approved refund within 7–10
              working days. However, the actual date on which the amount appears
              in your account may depend on the bank, card issuer, payment
              gateway or payment provider.
            </p>

            <p className="mt-4">
              Where an original payment method cannot accept the refund, we may
              contact you to determine an appropriate alternative method,
              subject to verification.
            </p>
          </PolicySection>

          <PolicySection title="10. Services">
            <p>
              Where a service is offered through XQUARE CLUB, any applicable
              cancellation and refund conditions will be displayed or
              communicated before the service is purchased.
            </p>

            <p className="mt-4">
              Refund eligibility for a service may depend on whether the service
              has already been scheduled, activated, delivered or substantially
              performed.
            </p>

            <p className="mt-4">
              The specific terms communicated for the relevant service will
              apply together with this Policy.
            </p>
          </PolicySection>

          <PolicySection title="11. How to Submit a Request">
            <p>
              For cancellation, return or refund requests, contact our customer
              support team at <EmailLink>hello@xquareclub.com</EmailLink>.
            </p>

            <p className="mt-4">Please include:</p>

            <ul className="mt-3 list-disc space-y-3 pl-6">
              <li>Your full name</li>
              <li>Your registered email address and mobile number</li>
              <li>Your order number, where applicable</li>
              <li>The reason for the request</li>
              <li>
                Supporting photographs, videos, invoice or other relevant
                documents
              </li>
            </ul>

            <p className="mt-4">
              Providing complete and accurate information will help us review
              your request without unnecessary delay.
            </p>
          </PolicySection>

          <PolicySection title="12. Contact Us">
            <p>
              For questions regarding cancellations, returns or refunds,
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
                Email: <EmailLink>hello@xquareclub.com</EmailLink>
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

type EmailLinkProps = {
  children: string;
};

function EmailLink({ children }: EmailLinkProps) {
  return (
    <a
      href={`mailto:${children}`}
      className="font-medium text-blue-400 transition hover:text-blue-300"
    >
      {children}
    </a>
  );
}
