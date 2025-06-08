import Link from 'next/link';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FAQAccordion from '@/components/common/FAQAccordion';
import { generalFAQs, serviceFAQs, pricingFAQs, processFAQs } from '@/lib/data/faqs';

export const metadata = {
  title: 'FAQ | Author Portfolio & Blog',
  description: 'Answers to frequently asked questions about writing services and processes',
};

export default function FAQPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find answers to common questions about my services, process, and more.
            </p>
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search for a question..."
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* General FAQs */}
            <div>
              <h2 className="text-2xl font-bold mb-6">General Questions</h2>
              <FAQAccordion items={generalFAQs} />
            </div>
            
            {/* Services FAQs */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Services</h2>
              <FAQAccordion items={serviceFAQs} />
            </div>
            
            {/* Pricing FAQs */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Pricing & Payments</h2>
              <FAQAccordion items={pricingFAQs} />
            </div>
            
            {/* Process FAQs */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Working Process</h2>
              <FAQAccordion items={processFAQs} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              If you couldn't find the answer you were looking for, feel free to reach out directly.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}