import { CaseStudy } from './CaseStudiesTypes';
import {
  FitnessBoltHero,
  FitnessBoltDesktop,
  FitnessBoltSchedule,
  HealthFirstHero,
  HealthFirstAbout,
  HealthcareHero,
  HealthcareAbout,
  HealthcareMockup,
  IgniteSelfHero,
  IgniteSelfLogin,
  IgniteSelfDashboard,
  BisqueriaHero,
  BisqueriaProducts,
  FarnajHero,
  FarnajAbout,
  FarnajMenu,
  FarnajStory,
} from '@/assets';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'Fitness Bolt – Gym Landing Page',
    category: 'Web Development',
    image: FitnessBoltHero,
    result: 'React & Tailwind CSS',
    description:
      'A fully responsive, high-conversion gym landing page built to showcase fitness programs, training services, and an innovative AI-powered personal coach experience.',
    challenge:
      'To design and develop a modern, energetic gym website that not only highlights services and transformations but also integrates an intelligent AI fitness coach while maintaining seamless performance across all devices.',
    solution:
      'Built a feature-rich landing page using React.js and Tailwind CSS with a bold hero section, dynamic class listings, transformation gallery, testimonials, and a streamlined contact form. Added an embedded AI Fitness Coach offering users personalized workout guidance in real time. Ensured full mobile responsiveness, fast load performance, and engaging UI animations.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'AI API Integration'],
    year: '2025',
    liveUrl: 'https://fitnesebolt.netlify.app/',
    gallery: [FitnessBoltHero, FitnessBoltDesktop, FitnessBoltSchedule],
  },
  {
    id: '2',
    client: 'HealthFirst – Personalized Medical Care Platform',
    category: 'Web Development',
    image: HealthFirstHero,
    result: 'React & Tailwind CSS',
    description:
      'A modern, patient-centered healthcare website emphasizing trust, accessibility, and compassionate care with seamless appointment booking and physician profiles.',
    challenge:
      'The previous digital presence lacked emotional appeal and user flow optimization. The goal was to create a trustworthy platform where patients can easily find doctors, understand services, and schedule appointments online.',
    solution:
      'Delivered a comprehensive web redesign with a calm green and white palette to evoke wellness and trust. Key sections include detailed physician profiles, comprehensive service listings, HIPAA compliance information, interactive appointment forms, and patient testimonials. Ensured accessibility and responsiveness across all devices.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Vercel'],
    year: '2025',
    liveUrl: 'https://trustcare-hub.lovable.app/',
    gallery: [HealthFirstHero, HealthFirstAbout],
  },
  {
    id: '3',
    client: 'HealthCare+ – Premium Healthcare Innovation',
    category: 'Web Development',
    image: HealthcareHero,
    result: 'React & Tailwind CSS',
    description:
      'A modern healthcare website showcasing innovation, compassion, and professional medical services with a focus on trust and patient engagement.',
    challenge:
      'The previous site lacked visual consistency and ease of navigation, making it difficult for users to find information or book appointments. A cohesive and trustworthy digital presence was required.',
    solution:
      'Implemented a clean, structured layout with a soothing green-and-white color palette symbolizing care and balance. Key enhancements include an intuitive appointment booking system, detailed service categories, specialist profiles, and patient testimonials. The mobile-optimized platform improves patient engagement and strengthens brand identity.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Vercel'],
    year: '2025',
    liveUrl: 'https://helix-zenith.lovable.app/',
    gallery: [HealthcareHero, HealthcareAbout, HealthcareMockup],
  },
  {
    id: '4',
    client: 'Ignite Self – AI-Powered Personal Growth Platform',
    category: 'Web Development',
    image: IgniteSelfHero,
    result: 'React & PWA',
    description:
      'An intelligent habit-tracking and self-improvement web app designed to help users visualize, track, and transform their lives using AI-powered insights and personalized motivation.',
    challenge:
      'Creating a platform that bridges technology and human potential — focusing on emotional intelligence, user motivation, and sustainable self-improvement with a sleek, engaging interface.',
    solution:
      'Developed a next-generation personal growth platform with AI-powered habit tracking, vision boards, and personalized daily motivation. Used a dark, futuristic theme with vibrant gradients to reflect transformation. Implemented secure user authentication, PWA installation support, and offline capabilities for seamless cross-device access.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Vercel', 'PWA'],
    year: '2025',
    liveUrl: 'https://ignite-self.lovable.app/',
    gallery: [IgniteSelfHero, IgniteSelfLogin, IgniteSelfDashboard],
  },
  {
    id: '5',
    client: 'Bisqueria – Artisan Bakery & Confectionery',
    category: 'Web Development',
    image: BisqueriaHero,
    result: 'React & E-commerce',
    description:
      'An elegant and mouth-watering bakery website showcasing handcrafted breads, pastries, and confections with a modern, cozy aesthetic and smooth shopping experience.',
    challenge:
      "Designing a warm, inviting digital storefront that highlights the bakery's premium handmade products while offering a smooth and intuitive e-commerce experience with strong visual appeal.",
    solution:
      'Created a beautifully crafted website with rich visuals, soft warm tones, and clean typography to evoke freshness and craftsmanship. Features include dynamic product listings with filtering, quick order buttons, highlighted promotional offers, customer testimonials, and eco-friendly brand values. Every detail crafted for an authentic bakery experience.',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Lovable'],
    year: '2025',
    liveUrl: 'https://bisqueria.netlify.app',
    gallery: [BisqueriaHero, BisqueriaProducts],
  },
  {
    id: '6',
    client: 'Farnaj Cuisine – Fine Dining Restaurant',
    category: 'Web Development',
    image: FarnajHero,
    result: 'React & Netlify',
    description:
      'An elegant and responsive restaurant website highlighting premium dining, chef expertise, and a curated culinary experience with immersive photography and refined aesthetics.',
    challenge:
      'Building a digital presence that reflects the sophistication and warmth of a high-end dining experience while showcasing gourmet cuisine, expert chefs, and an inviting ambience.',
    solution:
      "Designed a visually immersive website with a bold hero section, immersive photography, and strong brand identity. Key sections include interactive menu with pricing and ordering, chef spotlight featuring Muhammad Farnaj's culinary philosophy, customer testimonials, ambience gallery, and a blog-style articles section. Prioritized luxury aesthetics with functional clarity.",
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Figma', 'Netlify'],
    year: '2025',
    liveUrl: 'https://farnajcusine.netlify.app/',
    gallery: [FarnajHero, FarnajAbout, FarnajMenu, FarnajStory],
  },
];
