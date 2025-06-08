export const metadata = {
  title: 'Terms of Service | Author Portfolio & Blog',
  description: 'Terms and conditions for using our services',
};

export default function TermsPage() {
  return (
    <div className="fade-in">
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Terms of Service</h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your use of my website and services. By accessing my website or engaging my services, you agree to be bound by these Terms. Please read them carefully.
            </p>
            
            <h2>Use of Website</h2>
            <p>
              You may use my website for lawful purposes only. You agree not to:
            </p>
            <ul>
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use the website to transmit viruses, malware, or other malicious code</li>
              <li>Engage in any activity that disrupts or interferes with the website's functionality</li>
              <li>Collect or harvest any personal information from other users</li>
            </ul>
            
            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, audio clips, and software, is my property or the property of my licensors and is protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may not reproduce, distribute, modify, display, or create derivative works of any content from this website without my express written permission.
            </p>
            
            <h2>Service Terms</h2>
            <p>
              When you engage my writing services, the following terms apply:
            </p>
            
            <h3>Project Scope</h3>
            <p>
              All projects will be defined by a written agreement specifying deliverables, timeline, and compensation. Any changes to the project scope must be agreed upon in writing.
            </p>
            
            <h3>Payment</h3>
            <p>
              Payment terms will be specified in the project agreement. For most projects, I require a 50% deposit before work begins, with the remaining balance due upon completion. Late payments may incur additional fees.
            </p>
            
            <h3>Revisions</h3>
            <p>
              Each service package includes a specified number of revision rounds. Additional revisions beyond the included amount may incur additional fees.
            </p>
            
            <h3>Delivery & Deadlines</h3>
            <p>
              I strive to meet all agreed-upon deadlines. However, I am not responsible for delays caused by factors outside my control, including but not limited to: client delays in providing necessary information, force majeure events, or technical failures.
            </p>
            
            <h3>Cancellation</h3>
            <p>
              If you need to cancel a project after work has begun, you will be billed for work completed up to the cancellation date. Depending on the project stage, this may be up to the full project fee.
            </p>
            
            <h2>Confidentiality</h2>
            <p>
              I respect the confidentiality of all client information and projects. I will not disclose any confidential information unless required by law or with your explicit permission. For ghostwriting services, I maintain complete anonymity and transfer all rights to the client upon final payment.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, I shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or goodwill, arising out of or in connection with your use of my website or services.
            </p>
            
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold me harmless from any claims, damages, liabilities, and expenses (including legal fees) arising from your use of my website or services, your violation of these Terms, or your infringement of any intellectual property or other right of any person or entity.
            </p>
            
            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
            </p>
            
            <h2>Changes to Terms</h2>
            <p>
              I reserve the right to modify these Terms at any time. I will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date.
            </p>
            
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact me at:
            </p>
            <p>
              Email: terms@authorname.com<br />
              Phone: +1 (234) 567-8901
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}