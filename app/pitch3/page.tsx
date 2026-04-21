"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  BriefcaseBusiness,
  DollarSign,
  HeartHandshake,
  Maximize2,
  Megaphone,
  Package,
  Turtle,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type RoleKey = "sales" | "marketing" | "product" | "customer-success";

type Solution = {
  title: string;
  bullets: string[];
  example: string;
};

type Role = {
  key: RoleKey;
  label: string;
  eyebrow: string;
  tagline: string;
  cardSubtitle: string;
  icon: typeof BriefcaseBusiness;
  solutions: Solution[];
};

const ROLES: Role[] = [
  {
    key: "marketing",
    label: "Marketing",
    eyebrow: "MARKETING",
    tagline: "Test campaigns before you ship them.",
    cardSubtitle: "Preview the campaign",
    icon: Megaphone,
    solutions: [
      {
        title: "Ad creative & messaging",
        bullets: [
          "Test creative variants before media spend",
          "Predict resonance across audience segments",
          "Cut losing concepts before launch",
        ],
        example:
          "See which of five headline variants drives the strongest response from lapsed subscribers.",
      },
      {
        title: "Landing page & UX variants",
        bullets: [
          "Simulate conversion across page layouts",
          "Surface friction points before traffic hits",
          "Validate UX changes before engineering spend",
        ],
        example:
          "Test a new pricing page layout against existing traffic patterns before the redesign ships.",
      },
      {
        title: "Campaign & offer strategy",
        bullets: [
          "Model offer response across customer segments",
          "Predict cannibalization and margin impact",
          "Find the offer mix that lifts without eroding",
        ],
        example:
          "See how a 30% off promo performs vs. a free-month offer on new and returning customers.",
      },
      {
        title: "Content & organic messaging",
        bullets: [
          "Test content angles against target segments",
          "Predict which themes drive engagement",
          "Validate messaging before production spend",
        ],
        example:
          "Compare three blog angles on the same topic to see which converts trial signups.",
      },
      {
        title: "Lifecycle & re-engagement flows",
        bullets: [
          "Simulate email and push sequence performance",
          "Identify which triggers re-engage vs. annoy",
          "Optimize cadence before sending to the list",
        ],
        example:
          "Model a 5-touch win-back flow on lapsed users before it hits production.",
      },
      {
        title: "Brand positioning shifts",
        bullets: [
          "Test positioning changes across segments",
          "Surface backlash risk before rollout",
          "Find the framing that lifts without alienating",
        ],
        example:
          "See how a premium repositioning lands with value-conscious customers before launch.",
      },
    ],
  },
  {
    key: "product",
    label: "Product",
    eyebrow: "PRODUCT",
    tagline: "Pressure-test changes before a single user sees them.",
    cardSubtitle: "Test the change",
    icon: Package,
    solutions: [
      {
        title: "Feature additions & removals",
        bullets: [
          "Predict adoption before building",
          "Surface which segments actually use it",
          "Spot engagement and retention impact early",
        ],
        example:
          "Model adoption and churn impact of sunsetting a legacy feature across your power users.",
      },
      {
        title: "Pricing & packaging changes",
        bullets: [
          "See churn and expansion tradeoffs before launch",
          "Test tier structures against real behavior",
          "Validate willingness-to-pay by segment",
        ],
        example:
          "Model who moves up, who leaves, and who stays flat on a new three-tier plan.",
      },
      {
        title: "Onboarding & activation flows",
        bullets: [
          "Simulate time-to-value across user types",
          "Spot drop-off points before they go live",
          "Test flow redesigns before engineering spend",
        ],
        example:
          "Compare a 3-step vs. 7-step onboarding flow on activation rate for new signups.",
      },
      {
        title: "Paywall & gating decisions",
        bullets: [
          "Predict conversion lift vs. churn risk",
          "Test which features drive upgrades",
          "Find gates that convert without backlash",
        ],
        example:
          "See the tradeoff of gating a popular free feature behind the Pro plan.",
      },
      {
        title: "Expansion & upgrade paths",
        bullets: [
          "Simulate upgrade triggers by segment",
          "Identify highest-intent expansion moments",
          "Test upsell placement before rollout",
        ],
        example:
          "Model which in-product upgrade prompts lift expansion without hurting engagement.",
      },
      {
        title: "Roadmap prioritization",
        bullets: [
          "Compare feature bets against customer response",
          "Rank roadmap items by predicted impact",
          "Align engineering effort to highest-yield work",
        ],
        example:
          "See which of three roadmap candidates drives the strongest retention lift before committing the quarter.",
      },
    ],
  },
  {
    key: "customer-success",
    label: "Customer Success",
    eyebrow: "CUSTOMER SUCCESS",
    tagline: "Rehearse retention plays before you run them live.",
    cardSubtitle: "Rehearse the play",
    icon: HeartHandshake,
    solutions: [
      {
        title: "Onboarding & activation playbooks",
        bullets: [
          "Simulate CSM touchpoint sequences",
          "Spot which segments need high-touch vs. low",
          "Validate playbooks before rollout",
        ],
        example:
          "Test a high-touch onboarding track against self-serve on activation and 90-day retention.",
      },
      {
        title: "Retention offers & save strategies",
        bullets: [
          "Predict save-rate lift by offer type",
          "Surface discount dependency risk",
          "Find offers that save without eroding LTV",
        ],
        example:
          "Compare a one-month free save vs. a downgrade offer on at-risk enterprise accounts.",
      },
      {
        title: "Expansion & upsell motions",
        bullets: [
          "Simulate upsell timing and triggers",
          "Identify accounts most likely to expand",
          "Test expansion plays before CSM rollout",
        ],
        example:
          "Model which upsell plays lift expansion revenue across your top 100 accounts.",
      },
      {
        title: "Churn intervention sequencing",
        bullets: [
          "Predict which interventions work by segment",
          "Spot churn signals earlier with simulation",
          "Sequence outreach for maximum save impact",
        ],
        example:
          "See whether a CSM call or an in-app offer saves more accounts showing early churn signals.",
      },
      {
        title: "Segment prioritization & risk targeting",
        bullets: [
          "Rank accounts by intervention likelihood",
          "Focus CSM effort on highest-yield saves",
          "Cut wasted touchpoints on low-risk accounts",
        ],
        example:
          "Identify which 20% of at-risk accounts drive 80% of the save opportunity this quarter.",
      },
      {
        title: "Renewal & negotiation strategy",
        bullets: [
          "Simulate renewal conversations by segment",
          "Test pricing and term tradeoffs before the call",
          "Surface concession risk before the table",
        ],
        example:
          "Model how enterprise accounts respond to a price increase vs. a multi-year lock-in at renewal.",
      },
    ],
  },
  {
    key: "sales",
    label: "Sales",
    eyebrow: "SALES",
    tagline: "Rehearse the conversation before the call.",
    cardSubtitle: "Simulate the conversation",
    icon: BriefcaseBusiness,
    solutions: [
      {
        title: "Pitch, objections & segment messaging",
        bullets: [
          "Test pitches against synthetic buyer personas",
          "Surface which objections land hardest by segment",
          "Refine messaging before live calls",
        ],
        example:
          "See how a mid-market CFO reacts to your ROI pitch before the real call.",
      },
      {
        title: "Pricing & packaging conversations",
        bullets: [
          "Simulate buyer response to price points",
          "Stress-test packaging tradeoffs in negotiation",
          "Identify which tiers close vs. stall",
        ],
        example:
          "Model how a three-tier SaaS offer lands across SMB, mid-market, and enterprise buyers.",
      },
      {
        title: "Discount & concession strategy",
        bullets: [
          "Predict deal impact before giving ground",
          "Spot which discounts create price anchoring risk",
          "Find concessions that close without eroding margin",
        ],
        example:
          "Compare a 15% discount vs. free onboarding on win rate and deal size.",
      },
      {
        title: "Territory & account prioritization",
        bullets: [
          "Simulate which accounts respond to which plays",
          "Rank segments by likelihood to close",
          "Focus rep effort on highest-yield targets",
        ],
        example:
          "See which of your top 200 accounts respond to a land-and-expand vs. full-platform pitch.",
      },
      {
        title: "Rep coaching & ramp",
        bullets: [
          "Run reps through synthetic buyer conversations",
          "Benchmark pitch quality across the team",
          "Shorten ramp time with repeatable practice",
        ],
        example:
          "New reps practice discovery calls against a synthetic VP of Product before touching pipeline.",
      },
    ],
  },
];

// Cardinal angle of each role (0° = 3 o'clock / right, positive = clockwise).
// Matches the Orbital design: sales top, product right, success bottom, marketing left.
const ROLE_ANGLE: Record<RoleKey, number> = {
  sales: -90,
  product: 0,
  "customer-success": 90,
  marketing: 180,
};

// Short class suffix used to position each pill on the orbit via CSS.
const POSITION_CLASS: Record<RoleKey, string> = {
  sales: "sales",
  product: "product",
  "customer-success": "success",
  marketing: "marketing",
};

// ------------------------ styles -------------------------------------
//
// Scoped under .p3-root so the design's CSS variables and class names don't
// collide with the rest of the site. Mirrors Orbital.html one-for-one where
// it matters (orbit geometry, rotate/scale/translate on click, counter-rotates
// on pills and core, card-in stagger on solutions).

const orbitalStyles = `
.p3-root{
  --p3-bg:#FFFDFB;
  --p3-ink:#111111;
  --p3-ink-2:#3A3A3A;
  --p3-ink-3:#6B6B6B;
  --p3-line:#E7E3DE;
  --p3-orange:#F26B2A;
  --p3-orange-2:#F9894F;
  --p3-orange-soft:#FFF1E8;
  --p3-orange-tint:#FFE3CF;
  --p3-orange-dash:#F8A76A;
  background:var(--p3-bg);
  color:var(--p3-ink);
  -webkit-font-smoothing:antialiased;
}

/* Hero */
.p3-hero{
  max-width:1200px;width:100%;padding:28px 32px 8px;margin:0 auto;
  display:flex;flex-direction:column;align-items:center;text-align:center;gap:14px;
  transition:opacity .45s ease;
}
.p3-hero.dimmed{opacity:.35}
.p3-eyebrow{
  display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border:1px solid var(--p3-orange-tint);
  color:var(--p3-orange);border-radius:999px;font-size:12px;font-weight:500;background:#fff;
}
.p3-eyebrow .p3-dot{width:6px;height:6px;border-radius:50%;background:var(--p3-orange);display:inline-block}
.p3-display{
  font-weight:700;letter-spacing:-0.035em;font-size:54px;line-height:1.05;margin:6px 0 0;max-width:880px;color:#0e0e0e;
}
.p3-display em{font-family:'Instrument Serif',ui-serif,Georgia,serif;font-style:italic;font-weight:400;color:var(--p3-orange);letter-spacing:-0.01em}
.p3-sub{max-width:640px;color:var(--p3-ink-3);font-size:16px;line-height:1.55;margin:6px 0 0}

/* Stage — height scaled down ~20% from the original reference so the orbital
   composition reads tighter, but not so tight that the counter-scaled active
   pill overlaps the core card or the 6-tile solutions grid + inline detail
   clip out of the detail column. The SVG shares a viewBox with
   preserveAspectRatio="xMidYMid meet", so stage-height changes scale the
   ring/arrows/particles proportionally. */
.p3-stage-wrap{
  width:100%;max-width:1400px;margin:0 auto;padding:20px 24px 80px;
  display:flex;justify-content:center;position:relative;min-height:790px;
}
.p3-stage{position:relative;width:100%;max-width:1400px;height:690px}

.p3-orbit-frame{
  position:absolute;inset:0;transform-origin:50% 50%;
  transition:transform .75s cubic-bezier(.22,1,.36,1);
  will-change:transform;
}

.p3-orbit-svg{
  position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;
  transition:opacity .5s ease;
}

/* Core card */
.p3-core{
  position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
  width:300px;padding:26px 26px 22px;border-radius:22px;background:#fff;
  border:1.5px dashed var(--p3-orange);
  box-shadow:0 18px 60px -28px rgba(242,107,42,0.45),0 2px 8px rgba(17,17,17,0.04);
  z-index:5;cursor:pointer;
  transition:transform .6s cubic-bezier(.22,1,.36,1),opacity .45s ease;
}
.p3-stage.p3-detail .p3-core{
  transform:translate(-50%,-50%) rotate(calc(-1 * var(--p3-rot, 0deg)));
}
.p3-chip{
  display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;
  background:var(--p3-orange-soft);color:var(--p3-orange);font-weight:600;font-size:11px;letter-spacing:.04em;text-transform:uppercase;
  border:1px solid var(--p3-orange-tint);
}
.p3-chip svg{width:10px;height:10px}
.p3-big{margin:12px 0 2px;font-size:30px;line-height:1.05;letter-spacing:-0.03em;font-weight:700;color:#0e0e0e}
.p3-big em{font-family:'Instrument Serif',ui-serif,Georgia,serif;font-style:italic;font-weight:400;color:var(--p3-orange)}
.p3-sm{color:var(--p3-ink-3);font-size:13px;line-height:1.5;margin-top:6px}

/* Pulse rings */
.p3-pulse-ring{
  position:absolute;left:50%;top:50%;width:300px;height:300px;border-radius:50%;
  transform:translate(-50%,-50%);border:1px dashed rgba(242,107,42,0.25);
  animation:p3-pulse 4s ease-in-out infinite;pointer-events:none;z-index:1;
  transition:opacity .4s ease;
}
.p3-pulse-ring.two{width:400px;height:400px;animation-delay:.7s;opacity:.6}
@keyframes p3-pulse{
  0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.55}
  50%{transform:translate(-50%,-50%) scale(1.04);opacity:.25}
}
.p3-stage.p3-detail .p3-pulse-ring{opacity:0;pointer-events:none}

/* Persona pills */
.p3-persona{
  position:absolute;z-index:4;cursor:pointer;
  padding:10px 18px 10px 10px;border-radius:999px;
  border:1.25px dashed var(--p3-orange-dash);background:#fff;
  display:inline-flex;align-items:center;gap:10px;
  box-shadow:0 8px 22px -14px rgba(17,17,17,0.22);
  transition:transform .55s cubic-bezier(.22,1,.36,1),opacity .4s ease,box-shadow .3s ease,border-color .3s ease,background .3s ease;
  will-change:transform,opacity;
  font-family:inherit;
}
.p3-persona:hover{
  border-color:var(--p3-orange);
  background:#FFFAF6;
  box-shadow:0 14px 32px -16px rgba(242,107,42,0.35);
}
.p3-persona .p3-badge{
  width:34px;height:34px;border-radius:999px;
  background:var(--p3-orange-soft);color:var(--p3-orange);
  display:flex;align-items:center;justify-content:center;
  border:1px solid var(--p3-orange-tint);flex:none;
  transition:background .3s ease,color .3s ease,border-color .3s ease;
}
.p3-persona .p3-badge svg{width:16px;height:16px}
.p3-persona h3{margin:0;font-size:15px;font-weight:600;letter-spacing:-0.005em;padding-right:4px;color:#0e0e0e}

/* Cardinal positions on a circle of r=320 around stage center. Shares the
   same scale factor as the stage-height reduction, so pills continue to land
   on the drawn orbit circle. */
.p3-persona.sales     {left:50%;top:calc(50% - 320px);transform:translate(-50%,-50%)}
.p3-persona.success   {left:50%;top:calc(50% + 320px);transform:translate(-50%,-50%)}
.p3-persona.product   {left:calc(50% + 320px);top:50%;transform:translate(-50%,-50%)}
.p3-persona.marketing {left:calc(50% - 320px);top:50%;transform:translate(-50%,-50%)}

/* Detail state — orbit frame rotates so active role is at 3 o'clock, then
   scales to half-size and docks in the left half of the stage. */
.p3-stage.p3-detail .p3-orbit-frame{
  transform:translateX(-25%) scale(.5) rotate(var(--p3-rot, 0deg));
}

/* Non-active pills: counter-rotate so they stay horizontal inside the rotated
   frame. We keep the white background fully opaque (rather than dropping the
   whole pill to opacity:.55) so the dashed axes and arrow tips behind it can't
   read through. Contrast is reduced instead via a softer border/shadow and
   muted badge + label colors. */
.p3-stage.p3-detail .p3-persona:not(.is-active){
  transform:translate(-50%,-50%) rotate(calc(-1 * var(--p3-rot, 0deg)));
  pointer-events:none;
  background:#fff;
  border-color:rgba(248,167,106,0.5);
  box-shadow:0 4px 14px -10px rgba(17,17,17,0.12);
}
.p3-stage.p3-detail .p3-persona:not(.is-active) .p3-badge{
  background:#FFF6EE;
  border-color:rgba(255,227,207,0.8);
  color:rgba(242,107,42,0.55);
}
.p3-stage.p3-detail .p3-persona:not(.is-active) h3{color:#9AA0A6}
/* Active pill: counter-scale (1/0.5) so its label stays full-size, and
   counter-rotate upright. The trailing translateX(40px) is applied first in
   the transform chain, then rotated by -rot and scaled — which nets out to a
   consistent +40 stage-pixel shift outward (i.e. away from the core card)
   regardless of which role is active. Without it, long labels like
   "Customer Success" overlap the Synthetic Personas core card. */
.p3-stage.p3-detail .p3-persona.is-active{
  border-color:var(--p3-orange);background:#fff;
  box-shadow:0 14px 34px -14px rgba(242,107,42,0.45);
  transform:translate(-50%,-50%) scale(calc(1 / 0.5)) rotate(calc(-1 * var(--p3-rot, 0deg))) translateX(40px);
}
.p3-stage.p3-detail .p3-persona.is-active .p3-badge{
  background:var(--p3-orange);color:#fff;border-color:var(--p3-orange);
}

/* In detail state, the orbit backdrop itself is the way back — clicking any
   non-interactive area inside the ring returns to the full wheel. */
.p3-stage.p3-detail .p3-orbit-frame{cursor:pointer}

/* Detail column (right half) — vertically centered with the orbit center */
.p3-detail-col{
  position:absolute;left:50%;top:0;right:0;bottom:0;
  padding:24px 0 24px 32px;min-width:0;
  opacity:0;pointer-events:none;
  transition:opacity .4s ease;
  display:flex;flex-direction:column;justify-content:center;gap:18px;
  overflow-y:auto;
}
.p3-stage.p3-detail .p3-detail-col{opacity:1;pointer-events:auto;transition-delay:.35s}

.p3-detail-header{display:flex;align-items:flex-start;gap:14px}
.p3-stage.p3-detail .p3-detail-header{animation:p3-fadeUp .55s cubic-bezier(.22,1,.36,1) .35s both}
.p3-dh-badge{
  width:48px;height:48px;border-radius:13px;background:var(--p3-orange-soft);color:var(--p3-orange);
  display:flex;align-items:center;justify-content:center;border:1px solid var(--p3-orange-tint);flex:none;
}
.p3-dh-badge svg{width:22px;height:22px}
.p3-eyebrow-lbl{
  font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--p3-orange);font-weight:600;
  display:block;margin-bottom:4px;
}
.p3-detail-header h2{margin:0;font-size:26px;font-weight:700;letter-spacing:-0.025em;line-height:1.12;color:#0e0e0e;max-width:460px}

/* Solutions grid */
.p3-solutions{
  display:grid;grid-template-columns:repeat(2,1fr);gap:14px;
  opacity:0;pointer-events:none;align-content:start;
  transition:opacity .4s ease;
}
.p3-stage.p3-detail .p3-solutions{opacity:1;pointer-events:auto}
.p3-stage.p3-detail .p3-solutions > *{animation:p3-cardIn .55s cubic-bezier(.22,1,.36,1) both}
.p3-stage.p3-detail .p3-solutions > *:nth-child(1){animation-delay:.40s}
.p3-stage.p3-detail .p3-solutions > *:nth-child(2){animation-delay:.45s}
.p3-stage.p3-detail .p3-solutions > *:nth-child(3){animation-delay:.50s}
.p3-stage.p3-detail .p3-solutions > *:nth-child(4){animation-delay:.55s}
.p3-stage.p3-detail .p3-solutions > *:nth-child(5){animation-delay:.60s}
.p3-stage.p3-detail .p3-solutions > *:nth-child(6){animation-delay:.65s}
@keyframes p3-cardIn{
  from{opacity:0;transform:translateY(14px) scale(.98)}
  to{opacity:1;transform:translateY(0) scale(1)}
}
@keyframes p3-fadeUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}

.p3-sol-card{
  position:relative;background:#fff;border-radius:14px;padding:14px 14px 14px 16px;
  border:1.25px dashed var(--p3-orange-dash);
  box-shadow:0 10px 28px -18px rgba(17,17,17,0.2);
  cursor:pointer;display:flex;gap:12px;align-items:center;text-align:left;font-family:inherit;width:100%;
  transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease,background .25s ease;
}
.p3-sol-card:hover{
  transform:translateY(-2px);
  border-color:var(--p3-orange);background:#FFFAF6;
  box-shadow:0 18px 40px -20px rgba(242,107,42,0.35);
}
.p3-sol-card.is-selected{
  border-color:var(--p3-orange);background:#FFFAF6;
  box-shadow:0 18px 40px -20px rgba(242,107,42,0.4);
}
.p3-sol-card.is-selected .p3-badge{
  background:var(--p3-orange);color:#fff;border-color:var(--p3-orange);
}
.p3-sol-card .p3-badge{
  width:34px;height:34px;border-radius:9px;background:var(--p3-orange-soft);color:var(--p3-orange);
  display:flex;align-items:center;justify-content:center;border:1px solid var(--p3-orange-tint);flex:none;
  transition:background .25s ease,color .25s ease,border-color .25s ease;
}
.p3-sol-card .p3-badge svg{width:16px;height:16px}
.p3-sol-card h4{margin:0;font-size:14px;font-weight:600;letter-spacing:-0.005em;color:#0e0e0e;line-height:1.3}

/* Inline detail card — pops up below the grid when a solution is clicked */
.p3-sol-detail{
  position:relative;background:#fff;border-radius:18px;padding:20px 22px;
  border:1.5px dashed var(--p3-orange);
  box-shadow:0 22px 48px -22px rgba(242,107,42,0.4);
}
.p3-sol-detail-close{
  position:absolute;top:12px;right:12px;width:30px;height:30px;border-radius:999px;
  background:#fff;border:1px solid var(--p3-line);
  display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--p3-ink-3);
  transition:background .2s ease,border-color .2s ease;
}
.p3-sol-detail-close:hover{background:#FAFAF8;border-color:#d4d0ca}
.p3-sol-detail-eyebrow{
  font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:var(--p3-orange);font-weight:600;
  display:inline-flex;align-items:center;gap:6px;
}
.p3-sol-detail-eyebrow .p3-dot{width:5px;height:5px;border-radius:50%;background:var(--p3-orange);display:inline-block}
.p3-sol-detail h3{margin:8px 0 0;font-size:20px;font-weight:700;letter-spacing:-0.02em;color:#0e0e0e;line-height:1.2;padding-right:32px}
.p3-sol-detail ul{margin:12px 0 0;padding:0;list-style:none;display:flex;flex-direction:column;gap:8px}
.p3-sol-detail li{display:flex;align-items:flex-start;gap:10px}
.p3-sol-detail li::before{
  content:"";display:inline-block;width:6px;height:6px;border-radius:50%;
  background:var(--p3-orange);margin-top:7px;flex:none;
}
.p3-sol-detail li p{margin:0;font-size:13px;line-height:1.45;color:var(--p3-ink-2)}
.p3-sol-detail .p3-example{
  margin-top:14px;padding:12px 14px;border-radius:12px;
  border:1.25px dashed var(--p3-orange-dash);background:var(--p3-orange-soft);
}
.p3-sol-detail .p3-example-lbl{
  font-size:10px;letter-spacing:0.14em;text-transform:uppercase;color:var(--p3-orange);font-weight:600;
}
.p3-sol-detail .p3-example p{margin:4px 0 0;font-size:13px;line-height:1.5;color:var(--p3-ink-2)}

.p3-particle{fill:var(--p3-orange);filter:drop-shadow(0 0 6px rgba(242,107,42,0.7))}
.p3-particle.small{opacity:.7}

@media (max-width:1100px){
  .p3-stage{height:670px}
  .p3-display{font-size:42px}
}
`;

// ------------------------ navbar -------------------------------------

function Navbar(): React.ReactElement {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/pitch3" className="flex items-center gap-2">
            <Image
              src="/swivel_orange.png"
              alt="Swivel"
              width={32}
              height={32}
            />
            <span className="text-xl font-semibold text-secondary">Swivel</span>
          </Link>
          <div className="flex items-center gap-3">
            <Button size="sm">
              Book a demo
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ------------------------ orbit SVG ----------------------------------

function OrbitSVG(): React.ReactElement {
  return (
    <svg
      className="p3-orbit-svg"
      viewBox="0 0 1080 760"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="p3-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F26B2A" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#F26B2A" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#F26B2A" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="540" cy="380" r="354" fill="url(#p3-glow)" />
      <circle
        cx="540"
        cy="380"
        r="354"
        fill="none"
        stroke="#F26B2A"
        strokeOpacity="0.55"
        strokeWidth="1.25"
        strokeDasharray="2 8"
      />
      <circle
        cx="540"
        cy="380"
        r="271"
        fill="none"
        stroke="#F26B2A"
        strokeOpacity="0.22"
        strokeWidth="1"
        strokeDasharray="1 7"
      />

      {/* Cardinal axis lines — run all the way to the orbit radius so each
          line reads as feeding into its persona pill (the pill's white fill
          occludes the portion that would otherwise draw over the label). */}
      <g
        stroke="#F26B2A"
        strokeOpacity="0.55"
        strokeWidth="1.25"
        strokeDasharray="4 6"
        fill="none"
      >
        <line x1="540" y1="380" x2="540" y2="26" />
        <line x1="540" y1="380" x2="894" y2="380" />
        <line x1="540" y1="380" x2="540" y2="734" />
        <line x1="540" y1="380" x2="186" y2="380" />
      </g>

      {/* Four particles flowing around the outer circle, offset in phase */}
      <circle className="p3-particle" r="3.5">
        <animateMotion
          dur="14s"
          repeatCount="indefinite"
          rotate="auto"
          path="M540,26 a354,354 0 1,1 -0.01,0"
        />
      </circle>
      <circle className="p3-particle small" r="2.5">
        <animateMotion
          dur="14s"
          begin="-3.5s"
          repeatCount="indefinite"
          rotate="auto"
          path="M540,26 a354,354 0 1,1 -0.01,0"
        />
      </circle>
      <circle className="p3-particle small" r="2.5">
        <animateMotion
          dur="14s"
          begin="-7s"
          repeatCount="indefinite"
          rotate="auto"
          path="M540,26 a354,354 0 1,1 -0.01,0"
        />
      </circle>
      <circle className="p3-particle small" r="2.5">
        <animateMotion
          dur="14s"
          begin="-10.5s"
          repeatCount="indefinite"
          rotate="auto"
          path="M540,26 a354,354 0 1,1 -0.01,0"
        />
      </circle>
    </svg>
  );
}

// ------------------------ core card ----------------------------------

function CoreCard({
  onClick,
}: {
  onClick: () => void;
}): React.ReactElement {
  return (
    <button
      type="button"
      className="p3-core"
      onClick={onClick}
      aria-label="What is a synthetic persona?"
      style={{ border: "1.5px dashed var(--p3-orange)" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span className="p3-chip">
          <Zap size={10} strokeWidth={2.5} />
          Swivel
        </span>
      </div>
      <div className="p3-big">
        Synthetic <em>Personas</em>
      </div>
      <div className="p3-sm">
      Replicas of your customers, that thinks and responds the way they actually would.
      </div>
    </button>
  );
}

// ------------------------ persona pill -------------------------------

function PersonaPill({
  role,
  isActive,
  onClick,
}: {
  role: Role;
  isActive: boolean;
  onClick: () => void;
}): React.ReactElement {
  const Icon = role.icon;
  return (
    <button
      type="button"
      className={`p3-persona ${POSITION_CLASS[role.key]} ${
        isActive ? "is-active" : ""
      }`}
      onClick={onClick}
    >
      <div className="p3-badge">
        <Icon size={16} strokeWidth={2} />
      </div>
      <h3>{role.label}</h3>
    </button>
  );
}

// ------------------------ detail header ------------------------------

function DetailHeader({ role }: { role: Role }): React.ReactElement {
  const Icon = role.icon;
  return (
    <div className="p3-detail-header">
      <div className="p3-dh-badge">
        <Icon size={22} strokeWidth={2} />
      </div>
      <div>
        <span className="p3-eyebrow-lbl">{role.eyebrow}</span>
        <h2>{role.tagline}</h2>
      </div>
    </div>
  );
}

// ------------------------ solutions grid -----------------------------

function SolutionsGrid({
  role,
  expandedIdx,
  onSelectSolution,
}: {
  role: Role;
  expandedIdx: number | null;
  onSelectSolution: (idx: number | null) => void;
}): React.ReactElement {
  const Icon = role.icon;
  return (
    <div className="p3-solutions">
      {role.solutions.map((solution, i) => {
        const isSelected = expandedIdx === i;
        return (
          <button
            key={solution.title}
            type="button"
            className={`p3-sol-card ${isSelected ? "is-selected" : ""}`}
            onClick={() => onSelectSolution(isSelected ? null : i)}
          >
            <div className="p3-badge">
              <Icon size={16} strokeWidth={2} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h4>{solution.title}</h4>
            </div>
          </button>
        );
      })}
    </div>
  );
}

// ------------------------ inline solution detail ---------------------

function SolutionDetailInline({
  role,
  solution,
  onClose,
}: {
  role: Role;
  solution: Solution;
  onClose: () => void;
}): React.ReactElement {
  return (
    <motion.div
      key={solution.title}
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="p3-sol-detail"
    >
      <button
        type="button"
        className="p3-sol-detail-close"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={14} />
      </button>
      <span className="p3-sol-detail-eyebrow">
        <span className="p3-dot" /> {role.eyebrow}
      </span>
      <h3>{solution.title}</h3>
      <ul>
        {solution.bullets.map((b, i) => (
          <motion.li
            key={b}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: 0.08 + i * 0.05 }}
          >
            <p>{b}</p>
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="p3-example"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.12 + solution.bullets.length * 0.05,
        }}
      >
        <span className="p3-example-lbl">Example</span>
        <p>{solution.example}</p>
      </motion.div>
    </motion.div>
  );
}

// ------------------------ persona modal ------------------------------

function PersonaModal({
  open,
  onClose,
  onSeeProblems,
  onSeeSimulation,
}: {
  open: boolean;
  onClose: () => void;
  onSeeProblems: () => void;
  onSeeSimulation: () => void;
}): React.ReactElement {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{
            background: "rgba(15,10,6,0.45)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl p-8 sm:p-10 bg-white"
            style={{
              border: "1.5px dashed var(--p3-orange)",
              borderRadius: 22,
              boxShadow: "0 40px 80px -30px rgba(0,0,0,0.4)",
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 h-9 w-9 rounded-full flex items-center justify-center hover:bg-gray-50"
              style={{ border: "1px solid var(--p3-line)" }}
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <div
                className="h-12 w-12 rounded-2xl flex items-center justify-center"
                style={{
                  background: "var(--p3-orange-soft)",
                  border: "1px solid var(--p3-orange-tint)",
                  color: "var(--p3-orange)",
                }}
              >
                <UsersRound className="h-6 w-6" />
              </div>
              <div>
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--p3-orange)" }}
                >
                  The core of Swivel
                </p>
                <h3
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: "#0e0e0e" }}
                >
                  What is a synthetic persona?
                </h3>
              </div>
            </div>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#3A3A3A" }}
            >
              A synthetic persona is a{" "}
              <span className="font-semibold" style={{ color: "#0e0e0e" }}>
                replica of your customer
              </span>
              . Not a profile that describes them, not a segment that groups
              them — a living version, built from your own data, that thinks
              and responds the way they would. Run a price change, a new
              offer, or a campaign past it, and you&apos;ll see how your
              actual customers would react, before a single one of them does.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                {
                  title: "Zero exposure",
                  body: "Pressure-test any decision against thousands of personas before a single real customer sees it.",
                },
                {
                  title: "Thousands of tests, instantly",
                  body: "Simulate every variant, segment, and scenario in parallel — no wait, no rollout, no risk.",
                },
                {
                  title: "Evidence-backed",
                  body: "Every response is grounded in your actual customer data and validated against real behavior.",
                },
                {
                  title: "Built for bold moves",
                  body: "Test the pricing changes, retention plays, and campaigns too risky to try on real customers.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="p-4"
                  style={{
                    border: "1.25px dashed var(--p3-orange-dash)",
                    borderRadius: 14,
                    background: "#FFFAF6",
                  }}
                >
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "#0e0e0e" }}
                  >
                    {b.title}
                  </p>
                  <p
                    className="text-sm leading-snug"
                    style={{ color: "#6B6B6B" }}
                  >
                    {b.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="rounded-full flex-1"
                onClick={onSeeProblems}
              >
                See the problems we solve
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full flex-1"
                onClick={onSeeSimulation}
              >
                See how simulation works
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

// ------------------------ problems modal -----------------------------

const PROBLEMS: {
  title: string;
  body: string;
  icon: typeof Turtle;
}[] = [
  {
    title: "Risky",
    body: "One mispriced retention offer spikes cancellations and trains loyal customers to be discount-dependent.",
    icon: AlertTriangle,
  },
  {
    title: "Expensive",
    body: "You burn your budget on an ad campaign that fails to generate revenue due to ineffective messaging.",
    icon: DollarSign,
  },
  {
    title: "Slow",
    body: "A single test eats a quarter clearing legal, QA, and statistical significance.",
    icon: Turtle,
  },
  {
    title: "Difficult to Scale",
    body: "Your team runs three experiments at a time while forty better ideas sit in the backlog.",
    icon: Maximize2,
  },
];

function ProblemsModal({
  open,
  onClose,
  onBackToPersona,
}: {
  open: boolean;
  onClose: () => void;
  onBackToPersona: () => void;
}): React.ReactElement {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{
            background: "rgba(15,10,6,0.45)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl p-8 sm:p-10 bg-white"
            style={{
              border: "1.5px dashed var(--p3-orange)",
              borderRadius: 22,
              boxShadow: "0 40px 80px -30px rgba(0,0,0,0.4)",
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 h-9 w-9 rounded-full flex items-center justify-center hover:bg-gray-50"
              style={{ border: "1px solid var(--p3-line)" }}
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>

            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "var(--p3-orange)" }}
              >
                The problems we solve
              </p>
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "#0e0e0e" }}
              >
                Marketing leaders have no way to test customer-facing strategies without putting real customers at risk.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {PROBLEMS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.1 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center text-center p-5"
                    style={{
                      border: "1.25px dashed var(--p3-orange-dash)",
                      borderRadius: 16,
                      background: "#fff",
                      minHeight: 200,
                    }}
                  >
                    <div
                      className="flex items-center justify-center mb-3"
                      style={{
                        width: 52,
                        height: 52,
                        color: "#1c1c1c",
                      }}
                    >
                      <Icon size={36} strokeWidth={1.75} />
                    </div>
                    <p
                      className="font-semibold mb-2"
                      style={{
                        fontSize: 15,
                        color: "var(--p3-orange)",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {p.title}
                    </p>
                    <p
                      style={{
                        fontSize: 13,
                        lineHeight: 1.5,
                        color: "var(--p3-ink-2)",
                      }}
                    >
                      {p.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="rounded-full flex-1"
                onClick={onBackToPersona}
              >
                Got it
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

// ------------------------ simulation steps modal ---------------------

const SIMULATION_STEPS: { title: string; body: string }[] = [
  {
    title: "Ingest your data",
    body: "Upload your customer data — profiles, segments, behavioral signals. We build semantic representations of each customer.",
  },
  {
    title: "Simulate scenarios",
    body: "Define a problem or let Swivel detect live issues. Synthetic personas simulate how customers respond to different strategies.",
  },
  {
    title: "Deploy playbooks",
    body: "We generate and rank personalized strategies with predictive impact and grounded reasoning — ready to act on, not just read.",
  },
];

function SimulationStepsModal({
  open,
  onClose,
  onBackToPersona,
}: {
  open: boolean;
  onClose: () => void;
  onBackToPersona: () => void;
}): React.ReactElement {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{
            background: "rgba(15,10,6,0.45)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl p-8 sm:p-10 bg-white"
            style={{
              border: "1.5px dashed var(--p3-orange)",
              borderRadius: 22,
              boxShadow: "0 40px 80px -30px rgba(0,0,0,0.4)",
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 h-9 w-9 rounded-full flex items-center justify-center hover:bg-gray-50"
              style={{ border: "1px solid var(--p3-line)" }}
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>

            <div className="mb-6">
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "var(--p3-orange)" }}
              >
                How simulation works
              </p>
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "#0e0e0e" }}
              >
                From your data to decisions, in three steps.
              </h3>
            </div>

            <ol className="space-y-3 list-none p-0 m-0">
              {SIMULATION_STEPS.map((step, i) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.1 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4 p-4"
                  style={{
                    border: "1.25px dashed var(--p3-orange-dash)",
                    borderRadius: 14,
                    background: "#fff",
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "var(--p3-orange-soft)",
                      border: "1px solid var(--p3-orange-tint)",
                      color: "var(--p3-orange)",
                      fontWeight: 800,
                      fontSize: 20,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4
                      style={{
                        margin: 0,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#0e0e0e",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {step.title}
                    </h4>
                    <p
                      className="mt-1"
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.55,
                        color: "var(--p3-ink-2)",
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="rounded-full flex-1"
                onClick={onBackToPersona}
              >
                Got it
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

// ------------------------ footer -------------------------------------

function Footer(): React.ReactElement {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary-dark">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Image src="/swivel_orange.png" alt="Swivel" width={22} height={22} />
          <span className="text-sm font-semibold text-white">Swivel</span>
        </div>
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Swivel AI. Built for discovery.
        </p>
      </div>
    </footer>
  );
}

// ------------------------ page ---------------------------------------

export default function PitchThreePage(): React.ReactElement {
  const [activeKey, setActiveKey] = useState<RoleKey | null>(null);
  const [solutionIdx, setSolutionIdx] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [problemsOpen, setProblemsOpen] = useState(false);
  const [simulationOpen, setSimulationOpen] = useState(false);

  const activeRole = ROLES.find((r) => r.key === activeKey) ?? null;
  const rotation = activeRole ? -ROLE_ANGLE[activeRole.key] : 0;

  // Reset the solution overlay if we navigate away from the active role.
  useEffect(() => {
    setSolutionIdx(null);
  }, [activeKey]);

  const handleSelectRole = (key: RoleKey): void => {
    if (activeKey === key) return;
    setActiveKey(key);
  };

  const handleBack = (): void => {
    setActiveKey(null);
  };

  const activeSolution =
    activeRole && solutionIdx !== null
      ? activeRole.solutions[solutionIdx]
      : null;

  return (
    <main className="p3-root min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: orbitalStyles }} />
      <Navbar />

      <section style={{ paddingTop: 88 }}>
        <div className={`p3-hero ${activeKey ? "dimmed" : ""}`}>
          <span className="p3-eyebrow">
            <span className="p3-dot" /> Synthetic Personas
          </span>
          <h1 className="p3-display">
            A flight simulator, for <em>customer strategy</em>.
          </h1>
          <p className="p3-sub">
            Swivel builds synthetic replicas of your real customers, then lets
            every team test, simulate, and deploy — from one shared source of
            truth.
          </p>
        </div>
      </section>

      <div className="p3-stage-wrap">
        <div
          className={`p3-stage ${activeKey ? "p3-detail" : ""}`}
          style={
            { "--p3-rot": `${rotation}deg` } as React.CSSProperties
          }
        >
          <div
            className="p3-orbit-frame"
            onClick={(e) => {
              if (!activeKey) return;
              const target = e.target as HTMLElement;
              // Clicks on a persona pill or the core card are handled by their
              // own onClick — only bare orbit/ring area triggers the back nav.
              if (target.closest(".p3-persona") || target.closest(".p3-core")) {
                return;
              }
              handleBack();
            }}
          >
            <OrbitSVG />

            <div className="p3-pulse-ring" />
            <div className="p3-pulse-ring two" />

            <CoreCard onClick={() => setModalOpen(true)} />

            {ROLES.map((role) => (
              <PersonaPill
                key={role.key}
                role={role}
                isActive={activeKey === role.key}
                onClick={() => handleSelectRole(role.key)}
              />
            ))}
          </div>

          <div className="p3-detail-col">
            {activeRole ? (
              <>
                <DetailHeader role={activeRole} />
                <SolutionsGrid
                  role={activeRole}
                  expandedIdx={solutionIdx}
                  onSelectSolution={setSolutionIdx}
                />
                <AnimatePresence mode="wait">
                  {activeSolution ? (
                    <SolutionDetailInline
                      key={`${activeRole.key}-${solutionIdx}`}
                      role={activeRole}
                      solution={activeSolution}
                      onClose={() => setSolutionIdx(null)}
                    />
                  ) : null}
                </AnimatePresence>
              </>
            ) : null}
          </div>
        </div>
      </div>

      <Footer />

      <PersonaModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSeeProblems={() => {
          setModalOpen(false);
          setProblemsOpen(true);
        }}
        onSeeSimulation={() => {
          setModalOpen(false);
          setSimulationOpen(true);
        }}
      />
      <ProblemsModal
        open={problemsOpen}
        onClose={() => setProblemsOpen(false)}
        onBackToPersona={() => {
          setProblemsOpen(false);
          setModalOpen(true);
        }}
      />
      <SimulationStepsModal
        open={simulationOpen}
        onClose={() => setSimulationOpen(false)}
        onBackToPersona={() => {
          setSimulationOpen(false);
          setModalOpen(true);
        }}
      />
    </main>
  );
}
