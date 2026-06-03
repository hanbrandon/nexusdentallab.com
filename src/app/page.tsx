"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Box,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Mail,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  Quote,
  Send,
  X,
  type LucideIcon,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

// --- Types & Data ---
interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote:
      "I've been working with Nexus Dental Lab for the past two years and I've consistently been impressed by the quality of their restorations. They use the latest technology to create incredibly natural-looking crowns and bridges, and their turnaround times are excellent. This allows me to see patients more quickly and efficiently.",
    author: "Dr. Sarah Jones, DDS",
    role: "Smile Design Dental",
  },
  {
    quote:
      "From the very first case I sent to Nexus, I knew they were different. Their team is incredibly collaborative and they take the time to understand my specific needs for each patient. The communication throughout the process is fantastic, which makes it a pleasure to work with them.",
    author: "Dr. David Lee, DMD",
    role: "Whitehaven Family Dentistry",
  },
  {
    quote:
      "Since switching to Nexus Dental Lab, I've noticed a significant increase in patient satisfaction. Their restorations are not only beautiful but also incredibly comfortable. My patients consistently comment on how natural their new teeth look and feel. I can't recommend Nexus Dental Lab highly enough.",
    author: "Dr. Emily Garcia, DDS",
    role: "City Dental Care",
  },
  {
    quote:
      "As a dentist who embraces the latest technology, I was very impressed with Nexus' fully digital workflow. It eliminates the need for messy impressions and allows for a smoother, more streamlined process. This translates to a better experience for both me and my patients.",
    author: "Dr. William Chen, DDS",
    role: "Advanced Dental Solutions",
  },
];

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What types of dental restorations do you offer?",
    answer:
      "We offer a wide range of dental restorations, including crowns, bridges, dentures, implants, veneers, and orthodontic appliances.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We use only the highest quality materials from reputable manufacturers. We can discuss the specific materials used for each restoration type on a case-by-case basis.",
  },
  {
    question: "Do you offer digital dentistry services?",
    answer:
      "Yes, we are a digital-first laboratory. We support digital impressions from all major intraoral scanners (iTero, 3Shape, Medit, etc.) to streamline your workflow.",
  },
  {
    question: "Can I work directly with Nexus Dental Lab as a patient?",
    answer:
      "No, we are a dental laboratory and can only work with licensed dentists. However, we can help you find a dentist in your area who utilizes our services.",
  },
  {
    question: "What are your fees?",
    answer:
      "Our fees vary depending on the type of restoration and the materials used. We can provide you with a quote for your specific case upon request.",
  },
  {
    question: "Do you offer any warranties on your restorations?",
    answer:
      "Yes, we offer warranties on all of our restorations. Please contact us for more information on our warranty policy.",
  },
];

const galleryImages = [
  { src: "/assets/nexus/gallery-01.jpg", alt: "Nexus Dental Lab restoration case" },
  { src: "/assets/nexus/gallery-02.jpg", alt: "Nexus Dental Lab restoration case on model" },
  { src: "/assets/nexus/gallery-03.jpg", alt: "Dental crown and bridge case" },
  { src: "/assets/nexus/gallery-04.jpg", alt: "Dental model work" },
  { src: "/assets/nexus/gallery-05.jpg", alt: "Finished dental restoration" },
  { src: "/assets/nexus/gallery-06.jpg", alt: "Dental lab model restoration" },
  { src: "/assets/nexus/gallery-07.jpg", alt: "Precision dental restoration" },
  { src: "/assets/nexus/gallery-08.jpg", alt: "Dental lab crown case" },
  { src: "/assets/nexus/gallery-09.jpg", alt: "Dental prosthetic case" },
  { src: "/assets/nexus/gallery-10.jpg", alt: "Dental restoration close up" },
  { src: "/assets/nexus/gallery-11.jpg", alt: "Nexus Dental Lab model work" },
  { src: "/assets/nexus/gallery-12.jpg", alt: "Nexus Dental Lab restorative work" },
];

const businessEmail = "nexusdentalab@gmail.com";

const iconMap = {
  add: Plus,
  arrow_forward: ArrowRight,
  call: Phone,
  check_circle: CheckCircle,
  chevron_left: ChevronLeft,
  chevron_right: ChevronRight,
  close: X,
  dentistry: BadgeCheck,
  deployed_code: Box,
  error: CircleAlert,
  format_quote: Quote,
  layers: Box,
  location_on: MapPin,
  mail: Mail,
  menu: Menu,
  remove: Minus,
  send: Send,
  workspace_premium: Award,
} satisfies Record<string, LucideIcon>;

type IconName = keyof typeof iconMap;

function IconSymbol({
  className,
  name,
}: {
  className?: string;
  name: IconName;
}) {
  const Icon = iconMap[name];
  return <Icon aria-hidden="true" className={className} strokeWidth={2} />;
}

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://nexusdentallab.com/#localbusiness",
    name: "Nexus Dental Lab",
    url: "https://nexusdentallab.com/",
    logo: "https://nexusdentallab.com/assets/nexus/logo-black.png",
    image: [
      "https://nexusdentallab.com/assets/nexus/hero-bg.webp",
      "https://nexusdentallab.com/assets/nexus/about-restoration.jpg",
      "https://nexusdentallab.com/assets/nexus/gallery-01.jpg",
    ],
    description:
      "Nexus Dental Lab provides full zirconia, layered zirconia, CAD/CAM, and digital dental laboratory services for dentists.",
    telephone: "+1-714-225-7019",
    email: businessEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: "10564 Progress way #F",
      addressLocality: "Cypress",
      addressRegion: "CA",
      postalCode: "90630",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cypress",
      },
      {
        "@type": "State",
        name: "California",
      },
      {
        "@type": "Country",
        name: "United States",
      },
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Zirconia Crowns and Bridges",
          description:
            "High-quality full zirconia crowns and bridges for durable and aesthetically pleasing restorations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Layered Zirconia Restorations",
          description:
            "Precision-crafted layered zirconia restorations combining strength and natural-looking aesthetics.",
        },
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://nexusdentallab.com/#website",
    name: "Nexus Dental Lab",
    url: "https://nexusdentallab.com/",
    publisher: {
      "@id": "https://nexusdentallab.com/#localbusiness",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
];

export default function Home() {
  // Mobile Nav Drawer State
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Testimonials Slider State
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Gallery State
  const [visibleGalleryCount, setVisibleGalleryCount] = useState(6);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<(typeof galleryImages)[number] | null>(null);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // --- Handlers ---
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (!selectedGalleryImage) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedGalleryImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedGalleryImage]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setFormStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* TopNavBar */}
      <header className="bg-white/80 backdrop-blur-md font-label-caps text-label-caps top-0 sticky z-50 border-b border-gray-200 shadow-sm w-full">
        <div className="max-w-container-max mx-auto px-gutter h-20 flex justify-between items-center w-full">
          <div className="flex items-center select-none cursor-pointer">
            <Image
              alt="Nexus Dental Lab"
              className="h-12 w-auto"
              height={217}
              priority
              src="/assets/nexus/logo-black.png"
              width={632}
            />
          </div>
          <nav className="hidden md:flex gap-8 items-center">
            <a className="text-orange font-bold nav-link-underline pb-1" href="#about">
              About
            </a>
            <a className="text-gray-600 hover:text-orange nav-link-underline transition-all duration-300 pb-1" href="#services">
              For Dentist
            </a>
            <a className="text-gray-600 hover:text-orange nav-link-underline transition-all duration-300 pb-1" href="#gallery">
              Gallery
            </a>
            <a className="text-gray-600 hover:text-orange nav-link-underline transition-all duration-300 pb-1" href="#testimonials">
              Testimonials
            </a>
            <a className="text-gray-600 hover:text-orange nav-link-underline transition-all duration-300 pb-1" href="#faq">
              FAQ
            </a>
            <a className="text-gray-600 hover:text-orange nav-link-underline transition-all duration-300 pb-1" href="#contact">
              Contact
            </a>
          </nav>
          <div className="hidden md:block">
            <a href="#contact">
              <button className="bg-orange text-white px-6 py-3 rounded hover:bg-orange/90 transition-all active:scale-95 flex items-center gap-2 font-label-caps text-label-caps shadow-sm">
                Get Started
                <IconSymbol className="h-[18px] w-[18px]" name="arrow_forward" />
              </button>
            </a>
          </div>
          <button
            className="md:hidden text-navy p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IconSymbol className="h-6 w-6" name={isMenuOpen ? "close" : "menu"} />
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 bg-white overflow-hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-6 font-label-caps text-label-caps">
                <a
                  className="text-gray-600 hover:text-orange py-2 border-b border-gray-100"
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a
                  className="text-gray-600 hover:text-orange py-2 border-b border-gray-100"
                  href="#services"
                  onClick={() => setIsMenuOpen(false)}
                >
                  For Dentist
                </a>
                <a
                  className="text-gray-600 hover:text-orange py-2 border-b border-gray-100"
                  href="#gallery"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
                <a
                  className="text-gray-600 hover:text-orange py-2 border-b border-gray-100"
                  href="#testimonials"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  className="text-gray-600 hover:text-orange py-2 border-b border-gray-100"
                  href="#faq"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  className="text-gray-600 hover:text-orange py-2 border-b border-gray-100"
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  <button className="bg-orange text-white px-6 py-3 rounded hover:bg-orange/90 transition-colors flex items-center justify-center gap-2 font-label-caps text-label-caps shadow-sm w-full mt-2">
                    Get Started
                    <IconSymbol className="h-[18px] w-[18px]" name="arrow_forward" />
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            alt="Dental professional working in a laboratory"
            className="w-full h-full object-cover"
            fill
            priority
            sizes="100vw"
            src="/assets/nexus/hero-bg.webp"
          />
          <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/75 md:via-black/55 md:to-black/20"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-8">
              <h1 className="font-display-lg text-display-lg text-white">
                Building Smiles,<br />
                <span className="text-orange">Building Relationships</span>
              </h1>
              <p className="font-body-lg text-body-lg text-white/90 max-w-xl leading-relaxed">
                Nexus Dental Lab combines 24 years of technical mastery with cutting-edge digital innovation. We aren&apos;t just a laboratory; we are a strategic partner dedicated to elevating the standard of restorative dentistry and enhancing patient outcomes nationwide through precision-engineered solutions.
              </p>
              <div className="pt-4">
                <a href="#services">
                  <button className="bg-orange text-white px-10 py-5 rounded-lg hover:bg-orange/90 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3 font-label-caps text-label-caps shadow-lg w-fit">
                    Partner with Nexus
                    <IconSymbol className="h-5 w-5" name="arrow_forward" />
                  </button>
                </a>
              </div>
            </div>
          </ScrollReveal>
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full light-surface-override py-32 scroll-mt-20">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                alt="Dental restoration and prosthetic guide work"
                className="w-full h-full object-cover"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                src="/assets/nexus/about-restoration.jpg"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-orange animate-pulse"></span>
                <span className="font-label-caps text-label-caps text-gray-600">Our Philosophy</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-navy">Shaping Dentistry&apos;s Future Together</h2>
              <p className="font-body-md text-body-md text-gray-600">
                Nexus Dental Lab, with 24 years of unwavering dedication to excellence, is more than a provider of superior dental restorations; it&apos;s a catalyst for empowering dental professionals and enhancing patient smiles nationwide. Our commitment to uncompromising quality is reflected in every restoration, crafted by highly skilled technicians using premium materials. Embracing the forefront of digital dentistry, we leverage CAD/CAM technology and 3D printing for precise and efficient results.
              </p>
              <p className="font-body-md text-body-md text-gray-600">
                At the core of our ethos lies a collaborative approach, fostering open communication with dentists to ensure optimal patient outcomes. With a fusion of experience and innovation, each product we deliver surpasses industry standards, earning the trust of our esteemed clients. Join the Nexus Dental Lab family today and witness the transformative power of our relentless pursuit of perfection in dental care.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-32 scroll-mt-20">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col gap-12">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
              <h2 className="font-headline-lg text-headline-lg text-navy">Services for Dentists</h2>
              <p className="font-body-md text-body-md text-gray-600">
                High-quality dental restorations built for strength, aesthetics, and dependable clinical outcomes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Card 1 */}
            <ScrollReveal direction="right" delay={0.1}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group h-full flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="w-12 h-12 bg-light-surface-override rounded-full flex items-center justify-center mb-6">
                    <IconSymbol className="h-6 w-6 text-orange" name="dentistry" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-navy mb-4">Full Zirconia</h3>
                  <p className="font-body-md text-body-md text-gray-600 mb-6">
                    High-quality full zirconia crowns and bridges for durable and aesthetically pleasing restorations.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Service Card 2 */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group h-full flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div>
                  <div className="w-12 h-12 bg-light-surface-override rounded-full flex items-center justify-center mb-6">
                    <IconSymbol className="h-6 w-6 text-orange" name="layers" />
                  </div>
                  <h3 className="font-headline-md text-headline-md text-navy mb-4">Layered Zirconia</h3>
                  <p className="font-body-md text-body-md text-gray-600 mb-6">
                    Precision-crafted layered zirconia restorations combining strength and natural-looking aesthetics.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { src: "/assets/nexus/service-lab-1.jpg", alt: "Dental lab digital workflow" },
                { src: "/assets/nexus/service-lab-2.jpg", alt: "Precision CAD/CAM design" },
                { src: "/assets/nexus/service-lab-3.jpg", alt: "3D printed model work" },
                { src: "/assets/nexus/lab-work.jpg", alt: "Nexus Dental Lab technician work" },
              ].map((image) => (
                <button
                  aria-label={`Open ${image.alt}`}
                  className="relative h-48 md:h-56 rounded-xl overflow-hidden shadow-sm group bg-white cursor-zoom-in focus:outline-none"
                  key={image.src}
                  onClick={() => setSelectedGalleryImage(image)}
                  type="button"
                >
                  <Image
                    alt={image.alt}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    src={image.src}
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Section (Bento Grid) */}
      <section id="gallery" className="w-full light-surface-override py-32 scroll-mt-20">
        <div className="max-w-container-max mx-auto px-gutter flex flex-col gap-12">
          <ScrollReveal direction="up">
            <div className="flex justify-between items-end">
              <h2 className="font-headline-lg text-headline-lg text-navy">Our Precision Work</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[170px] md:auto-rows-[210px]">
            {galleryImages.slice(0, visibleGalleryCount).map((image, idx) => (
              <ScrollReveal
                className={`${idx === 0 ? "col-span-2 row-span-2" : ""} ${idx === 7 ? "md:col-span-2" : ""}`}
                delay={idx * 0.03}
                direction="up"
                key={image.src}
              >
                <button
                  aria-label={`Open ${image.alt}`}
                  className="relative h-full w-full rounded-xl overflow-hidden shadow-sm group bg-white cursor-zoom-in focus:outline-none"
                  onClick={() => setSelectedGalleryImage(image)}
                  type="button"
                >
                  <Image
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fill
                    sizes={idx === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                    src={image.src}
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </button>
              </ScrollReveal>
            ))}
          </div>

          {visibleGalleryCount < galleryImages.length && (
            <button
              className="self-center bg-orange text-white px-7 py-4 rounded hover:bg-orange/90 transition-all active:scale-95 flex items-center gap-2 font-label-caps text-label-caps shadow-sm"
              onClick={() =>
                setVisibleGalleryCount((current) =>
                  Math.min(current + 6, galleryImages.length)
                )
              }
              type="button"
            >
              Load More
              <IconSymbol className="h-[18px] w-[18px]" name="add" />
            </button>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-32 relative overflow-hidden bg-black scroll-mt-20">
        <div className="absolute inset-0 bg-[url('/assets/nexus/lab-work.jpg')] bg-cover bg-center opacity-15"></div>
        <div className="max-w-container-max mx-auto px-gutter relative z-10 text-center flex flex-col items-center gap-8">
          <IconSymbol className="h-10 w-10 text-orange opacity-80" name="format_quote" />

          {/* Testimonial slider content */}
          <div className="min-h-[160px] flex items-center justify-center max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonialIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="font-headline-lg text-headline-lg leading-tight text-white mb-8">
                  &ldquo;{testimonialsData[currentTestimonialIndex].quote}&rdquo;
                </blockquote>
                <div className="flex flex-col items-center gap-2">
                  <p className="font-label-caps text-label-caps text-orange">
                    {testimonialsData[currentTestimonialIndex].author}
                  </p>
                  <p className="font-body-md text-body-md text-white/70">
                    {testimonialsData[currentTestimonialIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrevTestimonial}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-white/30 text-white hover:bg-white/10 focus:outline-none"
            >
              <IconSymbol className="h-5 w-5" name="chevron_left" />
            </button>
            <button
              onClick={handleNextTestimonial}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors border-white/30 text-white hover:bg-white/10 focus:outline-none"
            >
              <IconSymbol className="h-5 w-5" name="chevron_right" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-32 scroll-mt-20">
        <div className="max-w-container-max mx-auto px-gutter max-w-3xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Frequently Asked Questions</h2>
              <p className="font-body-md text-body-md text-gray-600">Everything you need to know about partnering with us.</p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {faqData.map((item, idx) => (
              <ScrollReveal direction="up" delay={idx * 0.05} key={idx}>
                <div className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center py-4 text-left group focus:outline-none"
                  >
                    <span className="font-headline-md text-body-lg font-semibold text-navy group-hover:text-orange transition-colors">
                      {item.question}
                    </span>
                    <IconSymbol
                      className="h-5 w-5 text-gray-400 group-hover:text-orange transition-colors"
                      name={openFaqIndex === idx ? "remove" : "add"}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="font-body-md text-gray-600 pb-4 pr-10 leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full light-surface-override py-32 scroll-mt-20">
        <div className="max-w-container-max mx-auto px-gutter">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-headline-lg text-navy mb-4">Get in Touch</h2>
              <p className="font-body-md text-body-md text-gray-600">
                Have questions about our restorations or want to start a partnership? Reach out to our team.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <ScrollReveal direction="right">
              <div className="flex flex-col gap-8 h-full justify-between">
                <div className="flex flex-col gap-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                      <IconSymbol className="h-6 w-6 text-orange" name="location_on" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-label-caps text-label-caps text-gray-400 uppercase">Our Location</h4>
                      <p className="font-body-md text-navy">
                        10564 Progress way #F,<br />
                        Cypress, CA 90630
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                      <IconSymbol className="h-6 w-6 text-orange" name="call" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-label-caps text-label-caps text-gray-400 uppercase">Call Us</h4>
                      <a className="font-body-md text-navy hover:text-orange transition-colors" href="tel:714-225-7019">
                        714-225-7019
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 flex-shrink-0">
                      <IconSymbol className="h-6 w-6 text-orange" name="mail" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-label-caps text-label-caps text-gray-400 uppercase">Email Us</h4>
                      <a className="font-body-md text-navy hover:text-orange transition-colors" href={`mailto:${businessEmail}`}>
                        {businessEmail}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm mt-8">
                  <p className="font-body-md text-gray-600 italic">
                    &ldquo;Precision in every piece, relationship in every restoration. We look forward to working with your practice.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-label-caps text-label-caps text-gray-600" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        className="border border-gray-200 rounded-lg focus:ring-orange focus:border-orange font-body-md p-3 outline-none transition-all"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={formStatus === "loading"}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-label-caps text-label-caps text-gray-600" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        className="border border-gray-200 rounded-lg focus:ring-orange focus:border-orange font-body-md p-3 outline-none transition-all"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={formStatus === "loading"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-gray-600" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className="border border-gray-200 rounded-lg focus:ring-orange focus:border-orange font-body-md p-3 outline-none transition-all"
                      id="subject"
                      name="subject"
                      placeholder="New Partnership Inquiry"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={formStatus === "loading"}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-gray-600" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="border border-gray-200 rounded-lg focus:ring-orange focus:border-orange font-body-md p-3 outline-none transition-all"
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={formStatus === "loading"}
                    />
                  </div>

                  {/* Submission status feedback */}
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-600 text-sm font-semibold flex items-center gap-2"
                    >
                      <IconSymbol className="h-5 w-5" name="check_circle" />
                      Message sent successfully!
                    </motion.div>
                  )}

                  {formStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm font-semibold flex items-center gap-2"
                    >
                      <IconSymbol className="h-5 w-5" name="error" />
                      {errorMessage}
                    </motion.div>
                  )}

                  <button
                    className="bg-orange text-white px-8 py-4 rounded hover:bg-orange/90 transition-all flex items-center justify-center gap-2 font-label-caps text-label-caps shadow-sm w-full md:w-fit disabled:opacity-50 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={formStatus === "loading"}
                  >
                    {formStatus === "loading" ? "Sending..." : "Send Message"}
                    <IconSymbol className="h-5 w-5" name="send" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white font-body-md text-body-md w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-gutter py-section-padding-sm max-w-container-max mx-auto">
          <div className="flex flex-col gap-4">
            <Image
              alt="Nexus Dental Lab"
              className="h-14 w-fit"
              height={217}
              src="/assets/nexus/logo-white.png"
              width={632}
            />
            <p className="text-white/60 text-sm mt-4">
              Copyright © {new Date().getFullYear()} Nexus Dental Lab.
              <br />
              All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-white/50">Our Menu</h4>
            <div className="flex flex-col gap-2">
              <a className="text-white/70 hover:text-orange underline-offset-4 hover:underline transition-all duration-200" href="#">
                Home
              </a>
              <a className="text-white/70 hover:text-orange underline-offset-4 hover:underline transition-all duration-200" href="#about">
                About Us
              </a>
              <a className="text-white/70 hover:text-orange underline-offset-4 hover:underline transition-all duration-200" href="#services">
                Services
              </a>
              <a className="text-white/70 hover:text-orange underline-offset-4 hover:underline transition-all duration-200" href="#testimonials">
                Testimonials
              </a>
              <a className="text-white/70 hover:text-orange underline-offset-4 hover:underline transition-all duration-200" href="#faq">
                FAQ
              </a>
              <a className="text-white/70 hover:text-orange underline-offset-4 hover:underline transition-all duration-200" href="#gallery">
                Gallery
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-caps text-label-caps text-white/50">Contact us</h4>
            <div className="flex flex-col gap-2">
              <p className="text-white/70">
                Nexus Dental Lab
                <br />
                10564 Progress way #F
                <br />
                Cypress, CA 90630
              </p>
              <a className="text-white/70 hover:text-orange underline-offset-4 hover:underline transition-all duration-200" href="tel:714-225-7019">
                714-225-7019
              </a>
              <a className="text-white/70 hover:text-orange underline-offset-4 hover:underline transition-all duration-200" href={`mailto:${businessEmail}`}>
                {businessEmail}
              </a>
            </div>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedGalleryImage && (
          <motion.div
            key="gallery-modal"
            aria-modal="true"
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGalleryImage(null)}
            role="dialog"
          >
            <motion.div
              className="relative max-w-6xl w-full h-[88vh]"
              exit={{ opacity: 0, scale: 0.98 }}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                aria-label="Close gallery image"
                className="absolute -top-12 right-0 w-10 h-10 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                onClick={() => setSelectedGalleryImage(null)}
                type="button"
              >
                <IconSymbol className="h-5 w-5" name="close" />
              </button>
              <Image
                alt={selectedGalleryImage.alt}
                className="object-contain rounded-xl shadow-2xl bg-black"
                fill
                sizes="100vw"
                src={selectedGalleryImage.src}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

