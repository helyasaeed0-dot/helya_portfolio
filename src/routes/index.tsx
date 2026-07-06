import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Rocket,
  Sparkles,
  Layers,
  Globe,
  Code2,
  Cpu,
  Palette,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import heroPortrait from "@/assets/helya-portrait.png";
import pEcom1 from "@/assets/p-ecommerce-1.jpg";
import pEcom2 from "@/assets/p-ecommerce-2.jpg";
import pAi1 from "@/assets/p-ai-1.jpg";
import pAi2 from "@/assets/p-ai-2.jpg";
import pPm1 from "@/assets/p-pm-1.jpg";
import pPm2 from "@/assets/p-pm-2.jpg";
import pRe1 from "@/assets/p-realestate-1.jpg";
import pRe2 from "@/assets/p-realestate-2.jpg";
import pSocial1 from "@/assets/p-social-1.jpg";
import pSocial2 from "@/assets/p-social-2.jpg";
import pHosp1 from "@/assets/p-hospital-1.jpg";
import pHosp2 from "@/assets/p-hospital-2.jpg";
import pJob1 from "@/assets/p-job-1.jpg";
import pJob2 from "@/assets/p-job-2.jpg";
import pLms1 from "@/assets/p-lms-1.jpg";
import pLms2 from "@/assets/p-lms-2.jpg";
import pVideo1 from "@/assets/p-video-1.jpg";
import pVideo2 from "@/assets/p-video-2.jpg";
import pInter1 from "@/assets/p-interview-1.jpg";
import pInter2 from "@/assets/p-interview-2.jpg";
import pInv1 from "@/assets/p-inventory-1.jpg";
import pInv2 from "@/assets/p-inventory-2.jpg";
import pBiz1 from "@/assets/p-biz-1.jpg";
import pBiz2 from "@/assets/p-biz-2.jpg";
import pBiz3 from "@/assets/p-biz-3.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

// ---------- data ----------
type Project = {
  id: string;
  title: string;
  tag: string;
  year: string;
  summary: string;
  detail: string;
  stack: string[];
  highlights: string[];
  images: string[];
};

const PROJECTS: Project[] = [
  {
    id: "ecom",
    title: "Multi-Vendor E-Commerce Platform",
    tag: "Marketplace",
    year: "2025",
    summary:
      "A scalable marketplace where hundreds of vendors sell, ship and manage stores under one roof.",
    detail:
      "Built a full multi-vendor commerce engine with per-vendor storefronts, split payouts, order routing, product moderation and a rich admin control plane. Handles thousands of SKUs with sub-second search and lazy-loaded catalog pages.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe Connect", "Redis"],
    highlights: [
      "Vendor onboarding with KYC",
      "Split payouts + escrow",
      "Real-time inventory & orders",
      "Advanced faceted search",
    ],
    images: [pEcom1, pEcom2],
  },
  {
    id: "ai",
    title: "AI SaaS Platform",
    tag: "AI · SaaS",
    year: "2025",
    summary: "Multi-tenant AI product with chat, workflows and analytics for teams.",
    detail:
      "Designed and shipped a production AI SaaS with authenticated workspaces, prompt libraries, streaming chat, usage metering and Stripe subscriptions. Includes an analytics dashboard for admins.",
    stack: ["React", "TypeScript", "OpenAI API", "Supabase", "Stripe"],
    highlights: ["Streaming responses", "Team workspaces", "Usage-based billing", "Admin analytics"],
    images: [pAi1, pAi2],
  },
  {
    id: "pm",
    title: "Project Management Tool",
    tag: "Productivity",
    year: "2024",
    summary: "A Kanban + timeline app for cross-functional teams with realtime collaboration.",
    detail:
      "Drag-and-drop Kanban, Gantt timelines, comment threads, mentions and file attachments — all synced live across clients. Built for speed with optimistic updates.",
    stack: ["React", "Node.js", "WebSockets", "PostgreSQL"],
    highlights: ["Realtime sync", "Gantt + Kanban", "Threaded comments", "Role-based access"],
    images: [pPm1, pPm2],
  },
  {
    id: "re",
    title: "Real Estate Marketplace",
    tag: "Marketplace",
    year: "2024",
    summary: "Property listings with map search, favorites, agent chat and virtual tours.",
    detail:
      "Full-stack property portal with geospatial search, saved searches, agent inbox and lead management. Optimized image galleries and progressive loading for slow connections.",
    stack: ["Next.js", "Mapbox", "PostgreSQL / PostGIS", "AWS S3"],
    highlights: ["Geospatial search", "Agent CRM", "Saved searches & alerts", "Media-rich listings"],
    images: [pRe1, pRe2],
  },
  {
    id: "social",
    title: "Social Media Platform",
    tag: "Social",
    year: "2024",
    summary: "Feeds, stories, reels, DMs and notifications — built to scale.",
    detail:
      "Instagram-style social product with follow graph, stories, reels, direct messages and push notifications. Uses feed fan-out on write for hot users and fan-out on read for the long tail.",
    stack: ["React Native", "Node.js", "Redis", "Kafka", "PostgreSQL"],
    highlights: ["Stories & reels", "Realtime DMs", "Fan-out feed", "Push notifications"],
    images: [pSocial1, pSocial2],
  },
  {
    id: "hospital",
    title: "Hospital Management System",
    tag: "Healthcare",
    year: "2024",
    summary: "End-to-end HMS for patients, doctors, appointments, billing and pharmacy.",
    detail:
      "Modules for OPD, IPD, appointments, EMR, prescriptions, lab reports, billing and pharmacy inventory. Role-based access for admin, doctor, nurse, receptionist and patient portals.",
    stack: ["React", "Laravel", "MySQL", "Chart.js"],
    highlights: ["EMR & prescriptions", "Appointment scheduling", "Billing & insurance", "Pharmacy inventory"],
    images: [pHosp1, pHosp2],
  },
  {
    id: "job",
    title: "Job Portal",
    tag: "Recruitment",
    year: "2024",
    summary: "Two-sided hiring platform: employers post, candidates apply, recruiters track.",
    detail:
      "Employer branding pages, resume parsing, application pipeline, saved jobs, alerts and a recruiter dashboard with kanban-style hiring pipeline.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    highlights: ["Resume parsing", "Hiring pipeline", "Employer branding", "Email alerts"],
    images: [pJob1, pJob2],
  },
  {
    id: "lms",
    title: "Learning Management System",
    tag: "EdTech",
    year: "2024",
    summary: "Courses, lessons, quizzes, certificates and instructor dashboards.",
    detail:
      "LMS with video lessons, HLS streaming, quizzes with question bank, progress tracking, certificates and Stripe checkout for course purchases.",
    stack: ["React", "Node.js", "MongoDB", "HLS.js"],
    highlights: ["Video streaming", "Quiz engine", "Certificates", "Instructor payouts"],
    images: [pLms1, pLms2],
  },
  {
    id: "video",
    title: "Video Streaming Platform",
    tag: "Streaming",
    year: "2024",
    summary: "Netflix-style OTT platform with adaptive streaming and recommendations.",
    detail:
      "Content library with adaptive bitrate streaming, watch history, continue-watching row, personalized recommendations and multi-profile accounts.",
    stack: ["Next.js", "AWS MediaConvert", "CloudFront", "PostgreSQL"],
    highlights: ["Adaptive streaming", "Multi-profile", "Recommendations", "DRM ready"],
    images: [pVideo1, pVideo2],
  },
  {
    id: "interview",
    title: "AI Interview Platform",
    tag: "AI · HR Tech",
    year: "2025",
    summary: "AI-powered interviews with live video, scoring and post-call analytics.",
    detail:
      "Candidates take structured interviews with an AI agent over video. Speech-to-text, sentiment and answer scoring produce a detailed report for recruiters.",
    stack: ["React", "WebRTC", "OpenAI", "Whisper", "Supabase"],
    highlights: ["Live AI interviews", "Speech-to-text scoring", "Candidate reports", "Bias-aware rubrics"],
    images: [pInter1, pInter2],
  },
  {
    id: "inventory",
    title: "Inventory Management System",
    tag: "Operations",
    year: "2024",
    summary: "Warehouse-grade stock, purchase and sales tracking with barcodes.",
    detail:
      "Multi-warehouse inventory, barcode scanning, purchase orders, sales orders, low-stock alerts and analytics dashboards for owners.",
    stack: ["React", "Node.js", "PostgreSQL", "Barcode API"],
    highlights: ["Barcode scanning", "Multi-warehouse", "Low-stock alerts", "P&L dashboards"],
    images: [pInv1, pInv2],
  },
  {
    id: "biz",
    title: "3 Business Websites — UK Clients",
    tag: "Client Work · UK",
    year: "2024 – 2025",
    summary: "High-conversion marketing sites for UK-based consultancies and boutique brands.",
    detail:
      "Three bespoke marketing websites delivered end-to-end for UK clients — brand identity, copy direction, responsive design, CMS, SEO and analytics. Each site was tuned for lead generation and pagespeed.",
    stack: ["Next.js", "Sanity CMS", "Tailwind", "Framer Motion"],
    highlights: ["Custom brand systems", "Headless CMS", "SEO + schema", "Sub-1s load times"],
    images: [pBiz1, pBiz2, pBiz3],
  },
];

const SERVICES = [
  {
    icon: Rocket,
    title: "Web apps for startups",
    body: "MVPs shipped fast — from idea, to product, to first paying customers. Auth, payments, dashboards, done.",
  },
  {
    icon: Layers,
    title: "SaaS & marketplaces",
    body: "Multi-tenant SaaS, two-sided marketplaces, subscription billing and admin control planes at scale.",
  },
  {
    icon: Cpu,
    title: "AI product engineering",
    body: "GPT-powered chat, agents, RAG pipelines and AI dashboards wired into your existing product.",
  },
  {
    icon: Globe,
    title: "Business websites",
    body: "Fast, beautiful marketing sites for founders and SMBs — brand, copy, CMS, SEO and analytics.",
  },
  {
    icon: Code2,
    title: "Full-stack development",
    body: "React, Next.js, Node, Postgres, Supabase — architected for maintainability and long-term speed.",
  },
  {
    icon: Palette,
    title: "Product design & UX",
    body: "Design systems, flows and interfaces that make users feel like your product was made just for them.",
  },
];

const STACK_MARQUEE = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "TailwindCSS",
  "Framer Motion",
  "Prisma",
  "Stripe",
  "OpenAI",
  "AWS",
  "MongoDB",
  "GraphQL",
  "React Native",
];

const WHATSAPP_URL = "https://wa.me/923157852526";
const EMAIL = "helyasaeed0@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/helya-saeed-397394326";
const GITHUB = "https://github.com/helyasaeed0-dot";

// ---------- component ----------
function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <BackgroundFX />
      <Nav />
      <main id="main">
        <Hero />
        <StackMarquee />
        <About />
        <Services />
        <Projects onOpen={setActiveProject} />
        <Contact />
      </main>
      <Footer />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onImageOpen={(images, index) => setLightbox({ images, index })}
      />
      <Lightbox
        data={lightbox}
        onClose={() => setLightbox(null)}
        onNav={(dir) =>
          setLightbox((prev) =>
            prev
              ? {
                  ...prev,
                  index: (prev.index + dir + prev.images.length) % prev.images.length,
                }
              : prev,
          )
        }
      />
    </div>
  );
}

// ---------- sections ----------
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-noise opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-ember/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-ember/10 blur-[140px]" />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 ${
          scrolled ? "my-3 rounded-2xl border border-border/60 bg-background/60 py-3" : "py-5"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2 font-display text-lg font-semibold">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-ember text-ink transition-transform group-hover:rotate-12">
            <span className="font-mono text-sm font-bold">H</span>
            <span className="absolute inset-0 animate-pulse-ring rounded-xl border border-ember" />
          </span>
          <span className="hidden sm:inline">Helya Saeed</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-border/60 bg-background/40 p-1.5 backdrop-blur">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition hover:bg-accent hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-ember-glow md:inline-flex"
        >
          Hire me
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border md:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mx-4 rounded-2xl border border-border bg-background/95 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base hover:bg-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-between rounded-xl bg-ember px-4 py-3 font-medium text-ink"
                >
                  Hire me <ArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate flex min-h-[100dvh] flex-col justify-center px-5 pb-16 pt-32 sm:px-8"
    >
      <motion.div style={{ y, opacity }} className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            Available for new projects · Q3 2026
          </motion.div>

          <h1 className="font-display text-[clamp(2.8rem,8vw,6.5rem)] font-semibold leading-[0.95] tracking-tight">
            <SplitLine text="Full-stack" delay={0.1} />
            <span className="block">
              <SplitLine text="developer" delay={0.25} />{" "}
              <span className="text-gradient-ember animate-gradient bg-[length:200%_200%]">
                <SplitLine text="&amp; product" delay={0.4} className="inline" />
              </span>
            </span>
            <span className="block">
              <span className="text-gradient-ember">
                <SplitLine text="engineer." delay={0.55} />
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            I&apos;m <span className="text-foreground">Helya Saeed</span> — I design and build ambitious
            web products for startups, businesses and agencies. From AI SaaS platforms to global
            marketplaces, I ship work recruiters and founders can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ember px-6 py-3 font-medium text-ink ember-glow transition hover:bg-ember-glow"
            >
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 font-medium text-foreground backdrop-blur transition hover:border-ember hover:text-ember"
            >
              Start a project
              <Sparkles className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {[
              { k: "13+", v: "Products shipped" },
              { k: "3", v: "UK client sites" },
              { k: "5★", v: "Client rating" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border ember-glow">
            <img
              src={heroPortrait}
              alt="Portrait of Helya Saeed illuminated by warm amber light"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-ember">
                  ~/portfolio
                </div>
                <div className="mt-1 font-display text-lg">Helya Saeed</div>
              </div>
              <div className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs backdrop-blur">
                since 2020
              </div>
            </div>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="glass-panel absolute -left-10 -top-6 hidden rounded-2xl p-4 lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-ember/20 text-ember">
                <Cpu className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Currently building</div>
                <div className="text-sm font-medium">AI Interview Platform v2</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="glass-panel absolute -right-8 -bottom-6 hidden rounded-2xl p-4 lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-ember/20 text-ember">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Loved by</div>
                <div className="text-sm font-medium">UK · US · MENA clients</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function SplitLine({
  text,
  delay = 0,
  className = "block",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pr-3 align-bottom">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
            dangerouslySetInnerHTML={{ __html: w }}
          />
        </span>
      ))}
    </span>
  );
}

function StackMarquee() {
  const items = [...STACK_MARQUEE, ...STACK_MARQUEE];
  return (
    <section aria-label="Tech stack" className="relative border-y border-border/60 bg-background/40 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-mono text-sm uppercase tracking-widest text-muted-foreground">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-12">
            {s}
            <span className="h-1 w-1 rounded-full bg-ember" />
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <SectionLabel index="01" title="About" />
        <div>
          <p className="font-display text-2xl leading-tight text-foreground sm:text-4xl">
            I build the kind of software that makes founders say{" "}
            <span className="text-gradient-ember">&ldquo;finally, someone got it.&rdquo;</span>
          </p>
          <div className="mt-8 grid gap-6 text-muted-foreground sm:grid-cols-2">
            <p>
              For 4+ years I&apos;ve been shipping production web apps — marketplaces, SaaS, AI
              platforms, healthcare systems and business sites — for founders and agencies across
              the UK, US and MENA.
            </p>
            <p>
              I care about details recruiters and users notice: fast loads, tight interactions,
              clean code and interfaces that feel effortless. If you&apos;re hiring, let&apos;s
              talk.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Full-stack", v: "React · Next · Node" },
              { k: "AI native", v: "OpenAI · RAG · Agents" },
              { k: "Design led", v: "Systems · UX · Motion" },
            ].map((c) => (
              <div
                key={c.k}
                className="glass-panel rounded-2xl p-5 transition hover:-translate-y-1 hover:border-ember/60"
              >
                <div className="font-display text-lg font-semibold">{c.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <SectionLabel index="02" title="Services" />
          <p className="max-w-2xl text-lg text-muted-foreground">
            End-to-end product engineering. Whether you&apos;re a founder validating an idea or a
            company scaling to millions of users — I can help you ship.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-ember/60"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-ember/15 text-ember ring-1 ring-ember/30 transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ember transition hover:gap-2.5"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <section id="work" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <SectionLabel index="03" title="Selected work" />
          <p className="max-w-2xl text-lg text-muted-foreground">
            A slice of {PROJECTS.length} products I&apos;ve designed and built end-to-end. Click
            any card to see the case study, screens and stack.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const [hover, setHover] = useState(false);
  const [imgIdx, setImgIdx] = useState(0);

  // Cycle images on hover / focus for keyboard users
  useEffect(() => {
    if (!hover || project.images.length < 2) return;
    const id = setInterval(
      () => setImgIdx((i) => (i + 1) % project.images.length),
      1400,
    );
    return () => clearInterval(id);
  }, [hover, project.images.length]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-ember/50 focus-within:border-ember/60"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setImgIdx(0);
      }}
      onFocus={() => setHover(true)}
      onBlur={() => {
        setHover(false);
        setImgIdx(0);
      }}
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`View case study for ${project.title}`}
        className="block w-full text-left focus:outline-none"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          {project.images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} — screen ${i + 1}`}
              width={1280}
              height={896}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                i === imgIdx ? "scale-105 opacity-100" : "scale-100 opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
              {project.tag}
            </span>
            <span className="rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest backdrop-blur">
              {project.year}
            </span>
          </div>

          {project.images.length > 1 && (
            <div className="absolute right-4 top-4 flex gap-1.5">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all ${
                    i === imgIdx ? "w-6 bg-ember" : "w-3 bg-background/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold sm:text-2xl">{project.title}</h3>
            <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border transition-all group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-md bg-accent px-2 py-1 font-mono text-[10px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-ember">
            View case study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </button>
    </motion.article>
  );
}

function ProjectModal({
  project,
  onClose,
  onImageOpen,
}: {
  project: Project | null;
  onClose: () => void;
  onImageOpen: (images: string[], index: number) => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-background/80 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto my-6 max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl sm:my-12"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/95 px-5 py-4 backdrop-blur sm:px-8">
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ember">
                  {project.tag} · {project.year}
                </div>
                <div className="truncate font-display text-lg font-semibold sm:text-xl">
                  {project.title}
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition hover:bg-accent"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-2 p-2 sm:p-4">
              <button
                type="button"
                onClick={() => onImageOpen(project.images, 0)}
                className="group relative block overflow-hidden rounded-2xl"
                aria-label={`Open ${project.title} screen 1 fullscreen`}
              >
                <img
                  src={project.images[0]}
                  alt={`${project.title} main screen`}
                  width={1280}
                  height={896}
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </button>
              {project.images.length > 1 && (
                <div className="grid grid-cols-2 gap-2">
                  {project.images.slice(1).map((src, i) => (
                    <button
                      type="button"
                      key={src}
                      onClick={() => onImageOpen(project.images, i + 1)}
                      className="group relative block overflow-hidden rounded-2xl"
                      aria-label={`Open ${project.title} screen ${i + 2} fullscreen`}
                    >
                      <img
                        src={src}
                        alt={`${project.title} screen ${i + 2}`}
                        width={1280}
                        height={896}
                        className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <h4 className="font-display text-2xl font-semibold">Overview</h4>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.detail}</p>

                <h4 className="mt-10 font-display text-xl font-semibold">Highlights</h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 rounded-xl border border-border bg-background/50 p-3 text-sm"
                    >
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-ember" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <aside className="space-y-6">
                <div className="rounded-2xl border border-border bg-background/50 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Tech stack
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-accent px-2.5 py-1 font-mono text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-background/50 p-5">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Role
                  </div>
                  <div className="mt-2 text-sm">Full-stack engineering, design & delivery</div>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="group flex items-center justify-between rounded-2xl bg-ember px-5 py-4 font-medium text-ink transition hover:bg-ember-glow"
                >
                  Build something like this
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Lightbox({
  data,
  onClose,
  onNav,
}: {
  data: { images: string[]; index: number } | null;
  onClose: () => void;
  onNav: (dir: number) => void;
}) {
  useEffect(() => {
    if (!data) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [data, onClose, onNav]);

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-ink/95 p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Project image gallery"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-border bg-background/60 backdrop-blur hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </button>

          {data.images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNav(-1);
                }}
                className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/60 backdrop-blur hover:bg-accent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next image"
                onClick={(e) => {
                  e.stopPropagation();
                  onNav(1);
                }}
                className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/60 backdrop-blur hover:bg-accent"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          <motion.img
            key={data.images[data.index]}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            src={data.images[data.index]}
            alt={`Project screen ${data.index + 1}`}
            className="max-h-[90vh] max-w-[95vw] rounded-2xl border border-border object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-border bg-background/60 px-4 py-1.5 font-mono text-xs backdrop-blur">
            {data.index + 1} / {data.images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-5 py-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <SectionLabel index="04" title="Contact" />
          <p className="max-w-2xl text-lg text-muted-foreground">
            Have a project in mind, hiring for a role, or want to say hi? The fastest way to reach
            me is WhatsApp or email — I usually reply within a few hours.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <ContactCard
            href={`mailto:${EMAIL}`}
            icon={Mail}
            label="Email"
            value={EMAIL}
            hint="Best for detailed briefs"
          />
          <ContactCard
            href={WHATSAPP_URL}
            icon={MessageCircle}
            label="WhatsApp"
            value="+92 315 7852526"
            hint="Fastest reply"
            external
          />
          <ContactCard
            href={LINKEDIN}
            icon={Linkedin}
            label="LinkedIn"
            value="/in/helya-saeed"
            hint="Recruiters & collabs"
            external
          />
          <ContactCard
            href={GITHUB}
            icon={Github}
            label="GitHub"
            value="@helyasaeed0-dot"
            hint="Code + open source"
            external
          />
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight sm:text-5xl">
                Let&apos;s build something{" "}
                <span className="text-gradient-ember">worth remembering.</span>
              </h3>
              <p className="mt-5 max-w-xl text-muted-foreground">
                Whether it&apos;s an ambitious SaaS, an AI product or a business site — I&apos;d
                love to hear about it.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-ember px-6 py-4 font-medium text-ink transition hover:bg-ember-glow"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center justify-between rounded-2xl border border-border bg-background/50 px-6 py-4 font-medium transition hover:border-ember"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  Send an email
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
  hint,
  external,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
  value: string;
  hint: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-ember/60"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-ember/15 text-ember ring-1 ring-ember/30">
          <Icon className="h-5 w-5" />
        </div>
        <div className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 break-all font-display text-lg font-semibold">{value}</div>
      </div>
      <div className="relative mt-6 flex items-center justify-between text-xs text-muted-foreground">
        {hint}
        <ArrowUpRight className="h-4 w-4 text-ember transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </a>
  );
}

function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div>
      <div className="font-mono text-xs uppercase tracking-widest text-ember">— {index}</div>
      <h2 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">{title}</h2>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <div className="font-display text-lg font-semibold">Helya Saeed</div>
          <div className="mt-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Designed & built with care.
          </div>
        </div>
        <div className="flex items-center gap-3">
          <IconLink href={`mailto:${EMAIL}`} label="Email" icon={Mail} />
          <IconLink href={WHATSAPP_URL} label="WhatsApp" icon={MessageCircle} external />
          <IconLink href={LINKEDIN} label="LinkedIn" icon={Linkedin} external />
          <IconLink href={GITHUB} label="GitHub" icon={Github} external />
        </div>
      </div>
    </footer>
  );
}

function IconLink({
  href,
  label,
  icon: Icon,
  external,
}: {
  href: string;
  label: string;
  icon: typeof Mail;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid h-11 w-11 place-items-center rounded-full border border-border transition hover:border-ember hover:text-ember"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
