# Financial Services Website Starter

A professional, fully-responsive Next.js 14 + TypeScript + Tailwind CSS starter template for financial services and accounting firms.

## Features

- 📱 Fully responsive for all screen sizes (mobile, tablet, desktop)
- 🎨 Light and dark mode support
- 🧩 Modular, component-based architecture
- 📊 Interactive financial calculator with compound interest visualization
- 📝 Blog system with category filtering
- 💼 Comprehensive page structure for financial services
- 📈 Dynamic charts with Recharts
- 🔒 Accessible form components with client-side validation
- 🛠️ Built with modern technologies and best practices

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form + Zod
- **Charts**: Recharts
- **Theme**: next-themes for theme handling
- **Icons**: Lucide React

## Pages

- **Home**: Hero section, core value propositions, primary CTA
- **About**: Company mission, vision, and team grid
- **Services**: Interactive compound interest calculator + service overviews
- **Blog**: Article list with category filter + dynamic `[slug]` template
- **Testimonials**: Client quotes in a grid layout
- **Pricing**: Tiered plan comparison table
- **Contact**: Form with validation for name, email, and message
- **FAQ**: Accordion listing of common questions
- **Legal**: Privacy Policy & Terms of Service under `/legal`

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/financial-services-starter.git
cd financial-services-starter
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
/app                      # App Router pages
  /about                  # About page
  /blog                   # Blog pages
  /contact                # Contact page
  /faq                    # FAQ page
  /legal                  # Legal pages
  /pricing                # Pricing page
  /services               # Services page
  /testimonials           # Testimonials page
  
/components               # Reusable components
  /ui                     # UI components from shadcn
  /IndustrySpecific       # Industry specific components
  
/data                     # Data files for content
/lib                      # Utility functions
/public                   # Static assets
```

## Customization

### Branding

- Update the logo and branding colors in `tailwind.config.ts`
- Replace placeholder images in components with your own images
- Update the company information in the footer component

### Content

- Modify text content in each page component
- Update the sample blog posts in `data/blog-posts.ts`
- Replace team member information in the About page

### Deployment

This project can be deployed on any platform that supports Next.js, such as Vercel, Netlify, or a traditional hosting service.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the UI components
- [Tailwind CSS](https://tailwindcss.com/) for the styling
- [Next.js](https://nextjs.org/) for the framework
- [Pexels](https://www.pexels.com/) for the placeholder images

## Support

For questions or support, please open an issue in the GitHub repository.