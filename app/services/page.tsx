import Link from 'next/link';
import { Check, CheckCircle, Feather } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata = {
  title: 'Services | Author Portfolio & Blog',
  description: 'Professional writing services including content creation, ghostwriting, editing and more',
};

export default function ServicesPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Writing Services</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Professional writing solutions tailored to your specific needs and goals. From blog posts to full manuscripts, I'll help bring your vision to life.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Feather className="h-6 w-6 text-primary" /> Content Writing
                </CardTitle>
                <CardDescription className="text-lg">
                  Professional, engaging content for your blog or publication
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>SEO-optimized blog posts and articles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Newsletter content and email sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Website copy that converts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>In-depth guides and tutorials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Social media content and captions</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-accent" />
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Feather className="h-6 w-6 text-accent" /> Ghost Writing
                </CardTitle>
                <CardDescription className="text-lg">
                  Professional writing published under your name
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Full-length book manuscripts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Memoirs and personal stories</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Business books and thought leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Full confidentiality and non-disclosure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Capture your unique voice and perspective</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-primary" />
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Feather className="h-6 w-6 text-primary" /> Editing & Proofreading
                </CardTitle>
                <CardDescription className="text-lg">
                  Polish your writing to professional standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Developmental editing for structure and flow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Copy editing for grammar and style</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Proofreading for final polish</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Feedback and improvement suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Quick turnaround options available</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-2 bg-accent" />
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Feather className="h-6 w-6 text-accent" /> Book Marketing
                </CardTitle>
                <CardDescription className="text-lg">
                  Promote your book and build your author platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Author website development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Book launch strategy and execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Social media management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Newsletter setup and management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>PR and media outreach</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Process */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl mb-2">Initial Consultation</h3>
                <p className="text-muted-foreground">
                  We'll discuss your goals, timeline, and specific requirements to create a custom plan.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl mb-2">Development & Creation</h3>
                <p className="text-muted-foreground">
                  I'll work on your project, providing updates and opportunities for feedback throughout.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl mb-2">Delivery & Refinement</h3>
                <p className="text-muted-foreground">
                  Receive your completed project with time for revisions to ensure it meets your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-center mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-md">
              <p className="italic mb-4">
                "Working with this author was a game-changer for my business. The content was exceptional, delivered on time, and perfectly captured my brand voice."
              </p>
              <p className="font-medium">— Sarah Johnson, Entrepreneur</p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md">
              <p className="italic mb-4">
                "As a first-time author, I was nervous about the ghostwriting process. But the experience was collaborative, insightful, and resulted in a book I'm proud to put my name on."
              </p>
              <p className="font-medium">— Michael Carter, Business Coach</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-card p-8 md:p-12 rounded-xl shadow-md max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact me today to discuss your project and how I can help bring your vision to life.
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