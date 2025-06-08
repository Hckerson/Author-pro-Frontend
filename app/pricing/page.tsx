import Link from 'next/link';
import { Check, CheckCircle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import FAQAccordion from '@/components/common/FAQAccordion';
import { pricingFAQs } from '@/lib/data/faqs';

export const metadata = {
  title: 'Pricing | Author Portfolio & Blog',
  description: 'Transparent pricing for all writing and editing services',
};

export default function PricingPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the plan that fits your needs, or contact me for a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 md:py-24">
        <div className="container">
          <Tabs defaultValue="content" className="max-w-5xl mx-auto mb-16">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="content">Content Writing</TabsTrigger>
              <TabsTrigger value="books">Book Writing</TabsTrigger>
              <TabsTrigger value="editing">Editing</TabsTrigger>
            </TabsList>
            
            {/* Content Writing Pricing */}
            <TabsContent value="content">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <CardTitle>Basic</CardTitle>
                    <CardDescription>For small projects and businesses</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$99</span>
                      <span className="text-muted-foreground ml-1">/ post</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Up to 800 words per post</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Topic research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>1 revision round</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>SEO basics</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Keyword research</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Featured images</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="relative overflow-hidden border-primary">
                  <div className="absolute top-0 right-0 left-0 h-1.5 bg-primary" />
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>For growing businesses</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$199</span>
                      <span className="text-muted-foreground ml-1">/ post</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Up to 1,500 words per post</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>In-depth topic research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>2 revision rounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Full SEO optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Keyword research</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Featured images</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <CardTitle>Premium</CardTitle>
                    <CardDescription>For established businesses</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$349</span>
                      <span className="text-muted-foreground ml-1">/ post</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Up to a 3,000 words post</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Expert-level research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Unlimited revision rounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Advanced SEO strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Comprehensive keyword analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Custom featured images</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            {/* Book Writing Pricing */}
            <TabsContent value="books">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>For short books and guides</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$3,999</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Up to 15,000 words</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Topic research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>2 revision rounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Basic formatting</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Interviews & research</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Publishing assistance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="relative overflow-hidden border-primary">
                  <div className="absolute top-0 right-0 left-0 h-1.5 bg-primary" />
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Standard</CardTitle>
                    <CardDescription>For full-length books</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$7,999</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Up to, 40,000 words</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>In-depth research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>3 revision rounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Professional formatting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Interviews & research</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Publishing assistance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <CardTitle>Premium</CardTitle>
                    <CardDescription>Comprehensive package</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$12,999</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Up to 60,000 words</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Expert-level research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Unlimited revision rounds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Premium formatting & design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Extensive interviews & research</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Full publishing assistance</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            {/* Editing Pricing */}
            <TabsContent value="editing">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <CardTitle>Proofreading</CardTitle>
                    <CardDescription>For final polish</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$0.02</span>
                      <span className="text-muted-foreground ml-1">/ word</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Spelling errors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Grammar issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Punctuation fixes</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Structural improvements</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Content enhancement</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Comprehensive feedback</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="relative overflow-hidden border-primary">
                  <div className="absolute top-0 right-0 left-0 h-1.5 bg-primary" />
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg">
                    Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Copy Editing</CardTitle>
                    <CardDescription>For style and clarity</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$0.04</span>
                      <span className="text-muted-foreground ml-1">/ word</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>All proofreading services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Style consistency</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Clarity improvements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Flow enhancements</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Content restructuring</span>
                      </li>
                      <li className="flex items-start gap-2 text-muted-foreground">
                        <span className="h-5 w-5 mt-0.5 flex-shrink-0">✕</span>
                        <span>Comprehensive feedback</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="relative overflow-hidden">
                  <CardHeader>
                    <CardTitle>Developmental</CardTitle>
                    <CardDescription>Comprehensive editing</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$0.08</span>
                      <span className="text-muted-foreground ml-1">/ word</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>All copy editing services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Content restructuring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Character development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Plot enhancement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Pacing improvements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>Comprehensive feedback</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
            <p className="text-muted-foreground mb-8">
              I also offer custom packages tailored to your specific needs and budget.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Request a Custom Quote</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-center mb-12">What's Included in Every Package</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                All work undergoes thorough quality checks before delivery.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2">Timely Delivery</h3>
              <p className="text-muted-foreground">
                Projects delivered on schedule, every time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2">Revision Policy</h3>
              <p className="text-muted-foreground">
                Revisions included to ensure your complete satisfaction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl mb-2">Client Support</h3>
              <p className="text-muted-foreground">
                Responsive communication throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Frequently Asked Questions</h2>
            <FAQAccordion items={pricingFAQs} />
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Have more questions? I'm here to help.
              </p>
              <Button asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}