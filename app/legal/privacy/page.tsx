export const metadata = {
  title: 'Privacy Policy | Author Portfolio & Blog',
  description: 'Our privacy policy and how we protect your data',
};

export default function PrivacyPage() {
  return (
    <div className="fade-in">
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <h2>Overview</h2>
            <p>
              This Privacy Policy describes how I collect, use, and share your personal information when you visit my website, contact me for services, or engage in a business relationship with me.
            </p>
            
            <h2>Information I Collect</h2>
            <p>
              When you visit my website, I may collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
            </p>
            <p>
              When you contact me through my website or directly, I collect the personal information you provide, such as your name, email address, phone number, and any other information you choose to share.
            </p>
            
            <h3>Personal Information</h3>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Mailing address (if provided)</li>
              <li>Payment information (if purchasing services)</li>
            </ul>
            
            <h3>Usage Data</h3>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent</li>
              <li>Referral sources</li>
              <li>Device information</li>
            </ul>
            
            <h2>How I Use Your Information</h2>
            <p>
              I use the information I collect to:
            </p>
            <ul>
              <li>Provide, operate, and maintain my website and services</li>
              <li>Communicate with you about inquiries, projects, or services</li>
              <li>Send you updates, newsletters, or marketing materials (only with your consent)</li>
              <li>Improve my website and service offerings</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>Sharing Your Information</h2>
            <p>
              I may share your personal information with service providers who help me operate my business, such as email service providers, payment processors, or web hosting services. These third parties are only permitted to use your information to provide services to me and are required to keep your information confidential.
            </p>
            <p>
              I will not sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
            
            <h2>Cookies</h2>
            <p>
              My website uses cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect your ability to use certain features of the website.
            </p>
            
            <h2>Data Retention</h2>
            <p>
              I will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul>
              <li>The right to access the personal information I hold about you</li>
              <li>The right to request correction of inaccurate information</li>
              <li>The right to request deletion of your information</li>
              <li>The right to restrict or object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent at any time</li>
            </ul>
            
            <h2>Security</h2>
            <p>
              I take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
            
            <h2>Contact Me</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact me at:
            </p>
            <p>
              Email: privacy@authorname.com<br />
              Phone: +1 (234) 567-8901
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}