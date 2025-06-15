import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'About Me | Author Portfolio & Blog',
  description: 'Learn about my journey as an author, writer and content creator',
};

export default function AboutPage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-full max-w-sm mx-auto md:w-2/5 aspect-[3/4]">
              <Image
                src="https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg"
                alt="Author portrait"
                fill
                className="object-cover rounded-lg shadow-md"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="w-full md:w-3/5">
              <h1 className="mb-6">About Me</h1>
              <p className="text-xl text-muted-foreground mb-6">
                Author, storyteller, and creative mind based in New York City.
              </p>
              <div className="flex gap-4 mb-8">
                <Link href="https://twitter.com/hckerson_jnr" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://instagram.com/hckerson_jnr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Instagram className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://facebook.com/hckerson_jnr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://linkedin.com/hckerson_jnr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <Button asChild className="mb-8">
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" /> Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto prose dark:prose-invert">
            <h2>My Story</h2>
            <p>
              I started my writing journey over a decade ago, fueled by a passion for storytelling and a desire to connect with readers around the world. What began as a personal blog has evolved into a career spanning multiple books, hundreds of articles, and collaborations with leading publications.
            </p>
            <p>
              My writing focuses on themes of personal growth, human connection, and the small moments that define our lives. I believe in the power of words to transform, heal, and inspire, and I bring this philosophy to everything I create.
            </p>
            
            <h3>Professional Background</h3>
            <p>
              With a background in literature and journalism, I've developed a versatile writing style that adapts to different audiences and purposes. My work has been featured in publications such as The New Yorker, The Atlantic, and Literary Hub, among others.
            </p>
            <p>
              I hold an MFA in Creative Writing from Columbia University and have taught writing workshops at various institutions. My debut novel, "The Silent Echo," was published in 2018 and received critical acclaim for its lyrical prose and compelling narrative.
            </p>
            
            <h3>Creative Philosophy</h3>
            <p>
              I believe that the best writing comes from a place of authenticity and curiosity. My creative process involves deep observation, empathetic listening, and a commitment to crafting stories that resonate on a human level.
            </p>
            <p>
              Whether I'm working on a novel, a personal essay, or content for a client, I approach each project with the same dedication to quality and emotional truth. I'm constantly exploring new forms and techniques, pushing the boundaries of my craft to create work that engages and endures.
            </p>
            
            <h3>Beyond Writing</h3>
            <p>
              When I'm not at my desk, you can find me hiking in the mountains, exploring local bookstores, or experimenting with new recipes in my kitchen. I'm an avid traveler and draw inspiration from different cultures and environments.
            </p>
            <p>
              I'm also deeply committed to fostering a community of writers and readers. Through my newsletter and writing workshops, I aim to create spaces where creativity can flourish and stories can be shared.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary/20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mb-6">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're looking for a ghostwriter, editor, or content creator, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/services">View Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}