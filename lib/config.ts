import { Car, Zap, Sparkles } from "lucide-react";

export const allowedCities = ["Ludhiana", "Delhi", "New Delhi"];

export const siteConfig = {
  name: "Köelnr",
  tagline: "Premium Car Care",
  description:
    "Premium car wash services at your doorstep. Subscribe for unlimited quick washes and exclusive benefits.",
  hero: {
    title: "Welcome to Köelnr",
    subtitle:
      "Premium car wash services at your doorstep. Subscribe for unlimited quick washes and exclusive benefits.",
    primaryCTA: "Start Your Subscription",
    secondaryCTA: "Book Quick Wash",
  },
  features: {
    title: "Why Choose Köelnr?",
    subtitle: "Premium service, unmatched convenience",
    items: [
      {
        icon: Car,
        title: "Doorstep Service",
        description:
          "No need to drive anywhere. We come to your location at your scheduled time.",
      },
      {
        icon: Zap,
        title: "Quick & Efficient",
        description:
          "15-minute quick washes with professional equipment and eco-friendly products.",
      },
      {
        icon: Sparkles,
        title: "Satisfaction Guaranteed",
        description:
          "Not satisfied? Get a free re-wash within 48 hours. No questions asked.",
      },
    ],
  },
  carCare: {
    title: "Professional Car Care",
    description:
      "Our trained professionals use premium products and advanced techniques to make your car shine like new.",
    benefits: [
      "Eco-friendly, waterless wash technology",
      "Trained and verified professionals",
      "Premium microfiber cloths and solutions",
    ],
    imageUrl: "https://placehold.harshsandhu.com/api/img?w=600&h=400",
    imageAlt: "Car Wash Service",
  },
  pricing: {
    title: "Choose Your Plan",
    subtitle: "Flexible options for every need",
    tiers: {
      premium: {
        name: "Premium Monthly",
        badge: "MOST POPULAR",
        description: "Perfect for individuals who want the best care",
        price: "1,499",
        currency: "₹",
        period: "month",
        features: [
          {
            title: "4 Deep Washes Monthly",
            detail: "Worth ₹300 each (₹1,200 value)",
          },
          {
            title: "Unlimited Quick Washes",
            detail: "15 min service, normally ₹200/wash",
          },
          {
            title: "Fixed Weekly Time Slot",
            detail: "Recurring schedule, no rebooking hassle",
          },
          {
            title: "24-Hour Flexible Rescheduling",
            detail: "No penalties for changes",
          },
          {
            title: "Re-wash Guarantee",
            detail: "Free re-wash within 48 hours if unsatisfied",
          },
        ],
        exclusions:
          "Excludes: Interior detailing, wax, polish (available as add-ons)",
        cta: "Subscribe Now",
      },
      onDemand: {
        name: "On-Demand Quick Wash",
        description: "No commitment, book when you need",
        price: "200-250",
        currency: "₹",
        period: "wash",
        features: [
          {
            title: "15-Minute Express Service",
            detail: "Exterior wash + vacuum",
          },
          {
            title: "Flexible Booking",
            detail: "Subject to availability",
          },
          {
            title: "No Recurring Commitment",
            detail: "Pay as you go",
          },
        ],
        badge: "Limited slots: 25% capacity per day",
        cta: "Book Now",
      },
      alaCarte: {
        name: "À La Carte Services",
        description: "Premium add-ons for enhanced care",
        priceRange: "300-5,000",
        currency: "₹",
        period: "service",
        services: [
          { name: "Deep Wash", price: "300" },
          { name: "Wax Polish", price: "400" },
          { name: "Interior Detailing", price: "500" },
          { name: "Engine Wash", price: "600" },
          { name: "Ceramic Coating", price: "2,000-5,000" },
        ],
        note: "Can be combined with any subscription or booked standalone",
        cta: "View All Services",
      },
      corporate: {
        name: "Corporate Fleet Management",
        badge: "FOR BUSINESSES",
        description: "Comprehensive solutions for fleets",
        priceRange: "15K-25K",
        currency: "₹",
        period: "month",
        features: [
          {
            title: "₹800-1,500 per vehicle/month",
            detail: "Minimum 5-10 vehicles",
          },
          {
            title: "Monthly Deep Wash",
            detail: "+ Quarterly detailing included",
          },
          {
            title: "Dedicated Account Manager",
            detail: "Personalized fleet management",
          },
          {
            title: "Invoiced Billing",
            detail: "Corporate payment terms",
          },
          {
            title: "Predictable Costs",
            detail: "Stable revenue, reduced churn risk",
          },
        ],
        cta: "Contact Sales",
      },
    },
  },
  process: {
    title: "How It Works",
    subtitle: "Simple, fast, and hassle-free",
    steps: [
      {
        number: 1,
        title: "Choose Your Plan",
        description: "Select the subscription or service that fits your needs",
      },
      {
        number: 2,
        title: "Schedule Service",
        description: "Pick your weekly slot or book on-demand",
      },
      {
        number: 3,
        title: "We Come to You",
        description: "Our team arrives at your location on time",
      },
      {
        number: 4,
        title: "Enjoy Your Clean Car",
        description: "Sparkling clean in just 15 minutes",
      },
    ],
  },
  cta: {
    title: "Ready to Get Started?",
    description:
      "Join thousands of satisfied customers who trust Köelnr for their car care needs",
    primaryButton: "Start Your Subscription",
    secondaryButton: "Contact Us",
  },
  footer: {
    description: "Premium car wash services at your doorstep.",
    sections: [
      {
        title: "Services",
        links: [
          "Premium Subscription",
          "Quick Wash",
          "Add-on Services",
          "Corporate Plans",
        ],
      },
      {
        title: "Company",
        links: ["About Us", "Careers", "Contact", "Blog"],
      },
      {
        title: "Legal",
        links: ["Privacy Policy", "Terms of Service", "Refund Policy"],
      },
    ],
    copyright: "2026 Köelnr. All rights reserved.",
  },
  comingSoon: (city: string) => {
    return allowedCities.includes(city)
      ? {
          badge: "Coming Soon",
          title: `Launching in ${city} this February`,
          subtitle:
            "We're working hard to bring you the best car wash experience. Stay tuned!",
          description:
            "Köelnr is launching soon with premium car wash services at your doorstep. Be the first to know when we launch.",
          features: [
            {
              icon: Car,
              title: "Doorstep Service",
              description: "Premium car wash at your location",
            },
            {
              icon: Zap,
              title: "Quick Service",
              description: "15-minute express washes",
            },
            {
              icon: Sparkles,
              title: "Premium Quality",
              description: "Professional care for your car",
            },
          ],
          notifyButton: "Notify Me",
          emailPlaceholder: "Enter your email",
          socialLinks: {
            twitter: "#",
            instagram: "#",
            facebook: "#",
          },
        }
      : {
          badge: "Coming Soon",
          title: "Something Exciting is Coming",
          subtitle:
            "We're working hard to bring you the best car wash experience. Stay tuned!",
          description:
            "Köelnr is launching soon with premium car wash services at your doorstep. Be the first to know when we launch.",
          features: [
            {
              icon: Car,
              title: "Doorstep Service",
              description: "Premium car wash at your location",
            },
            {
              icon: Zap,
              title: "Quick Service",
              description: "15-minute express washes",
            },
            {
              icon: Sparkles,
              title: "Premium Quality",
              description: "Professional care for your car",
            },
          ],
          notifyButton: "Notify Me",
          emailPlaceholder: "Enter your email",
          socialLinks: {
            twitter: "#",
            instagram: "#",
            facebook: "#",
          },
        };
  },
};
