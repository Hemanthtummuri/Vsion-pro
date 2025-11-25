import { Service, Testimonial, PricingPlan, FaqItem } from './types';
import { 
  ShieldCheck, 
  Home, 
  FileText, 
  Key, 
  Bell, 
  TrendingUp,
  Clock,
  UserCheck,
  Globe,
  Award
} from 'lucide-react';

export const SERVICES: Service[] = [
  {
    id: 'property-monitoring',
    title: 'Property Monitoring',
    description: 'Regular physical inspections with detailed digital reports.',
    icon: 'ShieldCheck',
    fullContent: 'Our Property Monitoring service is the eyes and ears for NRIs and remote owners. We conduct bi-weekly physical inspections to check for dampness, pests, security breaches, and general wear and tear. You receive a comprehensive digital report with high-res photos and videos directly to your dashboard.',
    benefits: ['Bi-weekly Physical Visits', 'Digital Photo Reports', 'Storm/Rain Damage Checks', 'Mail Collection']
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Upkeep',
    description: 'Proactive repairs, cleaning, and deep sanitization services.',
    icon: 'Home',
    fullContent: 'Maintain the value of your asset with our premium maintenance packages. From deep cleaning before a visit to emergency plumbing and electrical repairs, our vetted vendor network ensures quality work at fair prices. We handle the coordination, supervision, and payment.',
    benefits: ['Deep Cleaning', 'Plumbing & Electrical', 'Painting Services', 'Pest Control']
  },
  {
    id: 'documentation',
    title: 'Documentation Support',
    description: 'Handling taxes, utility bills, and legal paperwork effortlessly.',
    icon: 'FileText',
    fullContent: 'Indian property bureaucracy can be overwhelming. We manage property tax payments, utility bill transfers, khata transfers, and rental agreements. Our legal experts ensure your property documents are always up to date and compliant with local laws.',
    benefits: ['Property Tax Payment', 'Khata Transfer', 'Rental Agreements', 'Legal Disputes Assistance']
  },
  {
    id: 'rental-management',
    title: 'Rental Management',
    description: 'Tenant screening, rent collection, and agreement management.',
    icon: 'Key',
    fullContent: 'Turn your vacant property into a passive income stream without the headache. We find verified tenants, conduct background checks, draft robust rental agreements, and handle monthly rent collection and depositing into your account.',
    benefits: ['Tenant Screening', 'Rent Collection', 'Agreement Renewal', 'Exit Inspection']
  },
  {
    id: 'security',
    title: 'Security & Alert System',
    description: 'Smart lock installation and 24/7 emergency response.',
    icon: 'Bell',
    fullContent: 'Secure your premises with modern technology. We facilitate the installation of smart locks, CCTV cameras, and motion sensors. In case of any breach, our local team is the first responder to assess the situation and coordinate with local authorities.',
    benefits: ['CCTV Installation', 'Smart Locks', '24/7 Emergency Contact', 'Neighborhood Watch']
  },
  {
    id: 'buy-sell',
    title: 'Buy/Sell Assistance',
    description: 'Expert valuation and brokerage for premium properties.',
    icon: 'TrendingUp',
    fullContent: 'Looking to liquidate an asset or invest in a new one? Our market experts provide accurate valuations and connect you with serious buyers or sellers. We handle negotiations and paperwork to ensure a smooth transaction.',
    benefits: ['Property Valuation', 'Buyer Vetting', 'Sale Deed Registration', 'Capital Gains Advice']
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "NRI based in USA",
    location: "Bangalore Property Owner",
    content: "Living in California, managing my parents' old house in Indiranagar was a nightmare until I found Vision Properties. The photo reports give me absolute peace of mind.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Software Architect",
    location: "Mumbai & Pune Investor",
    content: "The transparency in billing is what sets them apart. No hidden charges for maintenance work. The app dashboard is sleek and easy to use.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Business Owner",
    location: "Ahmedabad",
    content: "Their tenant screening is rigorous. I've had the same tenant for 3 years now, rent is always on time, and the property is kept in mint condition.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

export const PRICING: PricingPlan[] = [
  {
    name: "Basic Care",
    price: "₹2,499",
    features: [
      "Monthly Property Inspection",
      "Basic Photo Report",
      "Key Holding Service",
      "Mail Collection",
      "Bill Payment Assistance"
    ]
  },
  {
    name: "Standard",
    price: "₹4,999",
    features: [
      "Bi-Weekly Inspections",
      "Detailed Video Report",
      "Minor Repairs Included",
      "Tenant Management",
      "24/7 Emergency Support",
      "Deep Cleaning (2x/year)"
    ],
    isPopular: true
  },
  {
    name: "Premium Elite",
    price: "₹9,999",
    features: [
      "Weekly Inspections",
      "Live Video Walkthrough",
      "Dedicated Relationship Manager",
      "Legal & Tax Filing",
      "Priority Maintenance",
      "Airport Transfers for Owners",
      "Unlimited Deep Cleaning"
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Do you serve all cities in India?",
    answer: "Currently, we operate in Bangalore, Mumbai, Pune, Hyderabad, Chennai, and Delhi-NCR. We are expanding to Tier-2 cities soon."
  },
  {
    question: "How do you handle tenant background checks?",
    answer: "We use a 3-step verification process: Police verification, employment check, and previous landlord references."
  },
  {
    question: "What happens if a repair exceeds the estimated cost?",
    answer: "We never proceed with repairs over ₹1,000 without your explicit digital approval. You receive three quotes for major works."
  },
  {
    question: "Is there a lock-in period for the contract?",
    answer: "No. We believe in earning your trust every month. You can cancel with a 30-day notice period."
  },
  {
    question: "How do I receive updates about my property?",
    answer: "You will get a dedicated dashboard login where reports, photos, and bills are uploaded in real-time. You also get WhatsApp alerts."
  },
  {
    question: "Do you help with property taxes?",
    answer: "Yes, our Documentation Support covers property tax payments and filing."
  },
  {
    question: "Can you help me sell my property?",
    answer: "Absolutely. Our Buy/Sell Assistance team specializes in premium property transactions."
  },
  {
    question: "Are your vendors internal or outsourced?",
    answer: "We have a hybrid model. Core supervisors are employees, while specialized labor comes from our verified partner network."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, international bank transfers, UPI, and NRE checks."
  },
  {
    question: "How secure is my data?",
    answer: "We use bank-grade encryption for all your documents and personal data. We are ISO 27001 certified."
  },
  {
    question: "Do you handle eviction?",
    answer: "While we minimize the risk with screening, we provide full legal support and representation if eviction becomes necessary."
  },
  {
    question: "Can I customize a package?",
    answer: "Yes, contact our sales team to build a bespoke package that suits your specific portfolio needs."
  }
];

export const TEAM_MEMBERS = [
  { name: "Arjun Reddy", role: "Founder & CEO", img: "https://picsum.photos/300/300?random=10" },
  { name: "Sana Mir", role: "Head of Operations", img: "https://picsum.photos/300/300?random=11" },
  { name: "Vikram Singh", role: "Chief Legal Officer", img: "https://picsum.photos/300/300?random=12" },
  { name: "Meera Kapoor", role: "Client Relations Lead", img: "https://picsum.photos/300/300?random=13" },
];
