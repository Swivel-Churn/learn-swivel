"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  TrendingDown,
  Brain,
  BarChart3,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar(): React.ReactElement {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src="/swivel_orange.png"
              alt="Swivel"
              width={32}
              height={32}
            />
            <span className="text-xl font-semibold text-secondary">
              Swivel
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-sm text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button size="sm">
              Get Started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero(): React.ReactElement {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary-bg/30 to-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-bg text-primary text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            AI-Powered Retention Platform
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary tracking-tight leading-tight">
            Stop Losing Customers.
            <br />
            <span className="text-primary">Start Predicting Churn.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Swivel uses machine learning to identify at-risk customers before
            they leave. Get actionable insights, automate retention strategies,
            and reduce churn by up to 40%.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" className="rounded-full text-base px-8">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="rounded-full text-base px-8"
            >
              Watch Demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required. 14-day free trial.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative"
        >
          <div className="bg-white rounded-xl shadow-elevation3 border border-gray-200 p-6 sm:p-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard
                label="Churn Reduction"
                value="40%"
                trend="down"
                color="text-success-main"
              />
              <StatCard
                label="Revenue Saved"
                value="$2.4M"
                trend="up"
                color="text-primary"
              />
              <StatCard
                label="Prediction Accuracy"
                value="94%"
                trend="up"
                color="text-info-main"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  trend,
  color,
}: {
  label: string;
  value: string;
  trend: "up" | "down";
  color: string;
}): React.ReactElement {
  return (
    <div className="text-center p-4">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className={`text-3xl sm:text-4xl font-bold ${color}`}>{value}</p>
      <div className="flex items-center justify-center gap-1 mt-1">
        <TrendingDown
          className={`h-4 w-4 ${trend === "down" ? "text-success-main" : "text-primary rotate-180"}`}
        />
        <span className="text-xs text-gray-500">vs. industry avg</span>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: "Predictive AI Models",
    description:
      "Our ML models analyze hundreds of behavioral signals to predict which customers are likely to churn, weeks before they leave.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboards",
    description:
      "Interactive dashboards give your team a live view of customer health scores, risk segments, and retention KPIs.",
  },
  {
    icon: Shield,
    title: "Automated Interventions",
    description:
      "Set up automated workflows that trigger personalized retention actions based on customer risk level and behavior.",
  },
  {
    icon: Users,
    title: "Customer Segmentation",
    description:
      "AI-driven segmentation groups customers by risk profile, enabling targeted campaigns that resonate with each segment.",
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description:
      "Connect your CRM, billing, and support tools in minutes. Swivel pulls data from your existing stack with zero engineering effort.",
  },
  {
    icon: TrendingDown,
    title: "Impact Analytics",
    description:
      "Measure the ROI of every retention action. See exactly how much revenue your team saved and which strategies work best.",
  },
];

function Features(): React.ReactElement {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Everything You Need to
            <span className="text-primary"> Retain Customers</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A complete retention platform that combines predictive analytics
            with actionable automation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-gray-200 hover:border-primary-border hover:shadow-elevation2 transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary-bg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-200" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    step: "01",
    title: "Connect Your Data",
    description:
      "Integrate your CRM, billing, and support platforms. Swivel ingests data automatically and builds a unified customer view.",
  },
  {
    step: "02",
    title: "AI Analyzes Patterns",
    description:
      "Our models identify churn signals across behavioral, transactional, and engagement data to generate risk scores.",
  },
  {
    step: "03",
    title: "Take Action",
    description:
      "Use insights to launch targeted retention campaigns, or let Swivel automate interventions for at-risk customers.",
  },
];

function HowItWorks(): React.ReactElement {
  return (
    <section
      id="how-it-works"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            How Swivel <span className="text-primary">Works</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get up and running in minutes, not months.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white rounded-xl p-8 shadow-elevation1 border border-gray-200 h-full">
                <span className="text-5xl font-bold text-primary/20">
                  {item.step}
                </span>
                <h3 className="text-xl font-semibold text-secondary mt-4 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ChevronRight className="h-8 w-8 text-primary/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Swivel helped us reduce churn by 35% in the first quarter. The predictive models are incredibly accurate and the team loves the dashboards.",
    author: "Sarah Chen",
    role: "VP of Customer Success",
    company: "StreamScale",
    stars: 5,
  },
  {
    quote:
      "We were losing customers without understanding why. Swivel gave us visibility into the signals we were missing and the tools to act on them.",
    author: "Marcus Johnson",
    role: "Head of Retention",
    company: "FitConnect",
    stars: 5,
  },
  {
    quote:
      "The ROI was immediate. Within weeks, we identified high-risk segments and launched targeted campaigns that saved over $500K in annual revenue.",
    author: "Emily Rodriguez",
    role: "Chief Revenue Officer",
    company: "DataBridge",
    stars: 5,
  },
];

function Testimonials(): React.ReactElement {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how companies are using Swivel to transform their retention
            strategies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-secondary">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "For growing teams getting started with retention analytics.",
    features: [
      "Up to 10,000 customers",
      "Churn prediction models",
      "Basic dashboards",
      "Email support",
      "2 team members",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "/month",
    description:
      "For teams ready to scale their retention strategy with automation.",
    features: [
      "Up to 100,000 customers",
      "Advanced AI models",
      "Custom dashboards & reports",
      "Automated interventions",
      "API access",
      "10 team members",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description:
      "For large organizations with custom needs and dedicated support.",
    features: [
      "Unlimited customers",
      "Custom ML models",
      "Dedicated success manager",
      "SLA guarantees",
      "SSO & advanced security",
      "Unlimited team members",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

function Pricing(): React.ReactElement {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary">
            Simple, Transparent{" "}
            <span className="text-primary">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your team. All plans include a 14-day free
            trial.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl p-8 border h-full flex flex-col ${
                plan.highlighted
                  ? "bg-white border-primary shadow-elevation3 ring-2 ring-primary/20 relative"
                  : "bg-white border-gray-200 shadow-elevation1"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-xl font-semibold text-secondary">
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-secondary">
                  {plan.price}
                </span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{plan.description}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success-main shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full rounded-full"
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA(): React.ReactElement {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Reduce Churn?
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Join hundreds of companies using Swivel to keep their customers
            engaged and reduce revenue loss.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="rounded-full text-base px-8 bg-primary hover:bg-primary-hover"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="rounded-full text-base px-8 border-gray-500 text-white hover:bg-white/10 hover:text-white"
            >
              Schedule a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer(): React.ReactElement {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/swivel_orange.png"
                alt="Swivel"
                width={28}
                height={28}
              />
              <span className="text-lg font-semibold text-white">Swivel</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AI-powered customer retention platform that helps businesses
              predict and prevent churn.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  API Docs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Swivel AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home(): React.ReactElement {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
