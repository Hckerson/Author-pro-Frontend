import Image from 'next/image';
import Link from 'next/link';
import { Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/data/testimonials';

export const metadata = {
  title: 'Testimonials | Author Portfolio & Blog',
  description: 'See what clients and readers have to say about my work',
};

export default function TestimonialsPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Feedback from clients and readers I've had the pleasure of working with.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <Quote className="h-12 w-12 text-primary/60 mb-4" />
                <p className="italic mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-center mb-12">Featured Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
            <div className="w-32 h-16 relative">
              <Image 
                src="https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg" 
                alt="Client logo" 
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative">
              <Image 
                src="https://images.pexels.com/photos/3987286/pexels-photo-3987286.jpeg" 
                alt="Client logo" 
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative">
              <Image 
                src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg" 
                alt="Client logo" 
                fill
                className="object-contain"
              />
            </div>
            <div className="w-32 h-16 relative">
              <Image 
                src="https://images.pexels.com/photos/5611073/pexels-photo-5611073.jpeg" 
                alt="Client logo" 
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="bg-card p-8 md:p-12 rounded-xl shadow-md max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contact me today to discuss your project and how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}