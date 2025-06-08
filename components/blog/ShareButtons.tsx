'use client';

import { Copy, Facebook, Link, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const { toast } = useToast();
  const shareUrl = url || typeof window !== 'undefined' ? window.location.href : '';
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Link copied!",
        description: "The link has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Failed to copy",
        description: "The link could not be copied. Please try again.",
      });
    }
  };
  
  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };
  
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };
  
  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      '_blank'
    );
  };

  return (
    <div>
      <h4 className="font-medium mb-4">Share this post</h4>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={shareOnTwitter} aria-label="Share on Twitter">
          <Twitter className="h-4 w-4 mr-2" />
          Twitter
        </Button>
        <Button variant="outline" size="sm" onClick={shareOnFacebook} aria-label="Share on Facebook">
          <Facebook className="h-4 w-4 mr-2" />
          Facebook
        </Button>
        <Button variant="outline" size="sm" onClick={shareOnLinkedIn} aria-label="Share on LinkedIn">
          <Linkedin className="h-4 w-4 mr-2" />
          LinkedIn
        </Button>
        <Button variant="outline" size="sm" onClick={handleCopyLink} aria-label="Copy link">
          <Copy className="h-4 w-4 mr-2" />
          Copy Link
        </Button>
      </div>
    </div>
  );
}