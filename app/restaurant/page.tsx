"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  DollarSign,
  HeartHandshake,
  Turtle,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type RoleKey = "leak" | "radar" | "nudge" | "math";

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
  icon: typeof AlertTriangle;
  solutions: Solution[];
};

const ROLES: Role[] = [
  {
    key: "leak",
    label: "The leak",
    eyebrow: "THE LEAK",
    tagline: "The revenue walking out the door every week — without anyone noticing.",
    cardSubtitle: "Where the revenue goes",
    icon: AlertTriangle,
    solutions: [
      {
        title: "First-timers never come back",
        bullets: [
          "A customer comes in, has a good time, walks out, never returns",
          "Nothing after the visit reminds them you exist",
          "Most restaurants lose more than half of visit-1s this way",
        ],
        example:
          "Busy Friday, 50 covers, 30 are first-timers. If 22 never return, that's $880 in visit-2 revenue walking out — every single week.",
      },
      {
        title: "Regulars quietly disappear",
        bullets: [
          "Weekly becomes bi-weekly, then monthly, then never",
          "By the time you notice, the habit is already broken",
          "No system is catching the frequency decline in real time",
        ],
        example:
          "A regular worth $40 × three times a month × 12 = $1,440 a year gone. You find out when a friend mentions they've been going down the street.",
      },
      {
        title: "Generic blasts hit everyone the same",
        bullets: [
          "Mass texts and 'we miss you' emails are easy to ignore",
          "Nobody acts on messaging that doesn't feel personal",
          "Over time it trains your list to tune you out entirely",
        ],
        example:
          "A 'Happy Hour Tuesday' blast to 500 contacts gets 6 responses and 12 unsubscribes.",
      },
      {
        title: "POS marketing tools sit unused",
        bullets: [
          "You're already paying for Toast, Square, or Clover",
          "Their marketing features require time you don't have",
          "So the customer data sits there, doing nothing",
        ],
        example:
          "Toast knows exactly who your repeat customers are. Nobody on your team has time to log in and do anything with it.",
      },
      {
        title: "No early warning when a regular fades",
        bullets: [
          "The signal is in the visit pattern, not the review",
          "You only find out after the relationship is already over",
          "By then, winning them back is 5× harder",
        ],
        example:
          "A regular whose Thursday visits drop from weekly to monthly is still 'coming in' — but the relationship is already slipping.",
      },
      {
        title: "The invisible annual leak",
        bullets: [
          "First-timer drop-off plus silent regular churn compounds fast",
          "It's the single biggest revenue problem in independent restaurants",
          "And it's fully addressable — the data already exists in your POS",
        ],
        example:
          "Most independent restaurants we work with are leaking $25K–$50K a year to retention they didn't know they were losing.",
      },
    ],
  },
  {
    key: "radar",
    label: "The radar",
    eyebrow: "THE RADAR",
    tagline: "Swivel watches your customers so you don't have to.",
    cardSubtitle: "How Swivel sees",
    icon: Zap,
    solutions: [
      {
        title: "10-second customer opt-in",
        bullets: [
          "A QR code on the receipt or a small table tent",
          "Customer scans, drops phone or email, done",
          "A small incentive on visit 2 keeps conversion high",
        ],
        example:
          "On a simple table card that says 'Free dessert next time — scan to claim,' 40–60% of visitors opt in.",
      },
      {
        title: "Connects to your POS",
        bullets: [
          "Works with Toast, Square, Clover, and basic terminals",
          "We pull visit and order history automatically",
          "No manual data entry, ever",
        ],
        example:
          "If you're on Toast, we're live in under 15 minutes and we already have visibility into your last 90 days of customer activity.",
      },
      {
        title: "Per-customer behavioral profile",
        bullets: [
          "We track visit frequency, ordering patterns, and timing",
          "Each customer has their own rhythm — we learn it",
          "The model updates every single time they come in",
        ],
        example:
          "We know Sarah comes every other Thursday, usually orders the salmon, and doesn't come in during football season.",
      },
      {
        title: "Cooling / at-risk / lapsed detection",
        bullets: [
          "Four behavioral states: regular → cooling → at-risk → lapsed",
          "State transitions are detected automatically",
          "We catch the shift while they're still coming in",
        ],
        example:
          "A regular who goes 18 days without a visit when their normal is 7 moves to 'cooling' — before they've actually disappeared.",
      },
      {
        title: "Ordering-context memory",
        bullets: [
          "Remembers what each customer orders, not just when",
          "Enables a message that references their actual behavior",
          "This is what makes the nudge feel personal, not templated",
        ],
        example:
          "Instead of 'We miss you,' we send 'The salmon you like is on special this weekend.'",
      },
      {
        title: "Runs silently in the background",
        bullets: [
          "No dashboard you have to check every day",
          "Alerts only surface when something actually matters",
          "You see the outcome in your covers, not in software",
        ],
        example:
          "You'll know Swivel is working because Wednesday covers go up — not because you're staring at a graph.",
      },
    ],
  },
  {
    key: "nudge",
    label: "The nudge",
    eyebrow: "THE NUDGE",
    tagline: "A message that feels personal — not like a mass text.",
    cardSubtitle: "What the customer receives",
    icon: HeartHandshake,
    solutions: [
      {
        title: "First-timer follow-up",
        bullets: [
          "Sent 2–3 days after the first visit, while the memory is fresh",
          "References something they actually ordered",
          "Invites them back with an optional small incentive",
        ],
        example:
          "'Hi Maya — glad you tried the margherita on Saturday. We just added a burrata version. It's basically made for you.'",
      },
      {
        title: "Win-back when frequency drops",
        bullets: [
          "Fires automatically when a regular hits 'cooling'",
          "Acknowledges time has passed, without guilt-tripping",
          "Specific enough to feel like it came from you personally",
        ],
        example:
          "'Hey Jon — haven't seen you a couple Thursdays. New tap list just landed and your usual IPA is on it.'",
      },
      {
        title: "Tailored to each customer",
        bullets: [
          "Tone, timing, and content adapt per person",
          "Nothing generic, nothing templated",
          "We never send two identical messages",
        ],
        example:
          "Two regulars get win-backs the same week. One mentions brunch, one mentions the wine list. Because that's what each of them orders.",
      },
      {
        title: "Matches your restaurant's voice",
        bullets: [
          "We learn how you'd talk to a regular",
          "Formal, casual, warm, dry — whatever fits you",
          "You can preview and edit anything before it sends",
        ],
        example:
          "For a neighborhood spot, messages feel like a friendly text. For fine dining, they feel like a concierge note.",
      },
      {
        title: "Fully automatic after setup",
        bullets: [
          "No campaign management, no send schedules",
          "Messages go out when the customer signals they need one",
          "You get your time back to run the restaurant",
        ],
        example:
          "After 15 minutes of setup, the only work you do is running your restaurant.",
      },
      {
        title: "You stay in control",
        bullets: [
          "Approve, pause, or adjust tone any time",
          "See what went out and how each customer responded",
          "Nothing auto-sends unless you've said it's okay to",
        ],
        example:
          "Most owners switch to auto-send within a week. A few like to approve each message for the first month — also totally fine.",
      },
    ],
  },
  {
    key: "math",
    label: "The math",
    eyebrow: "THE MATH",
    tagline: "Pays for itself the first time it saves a customer.",
    cardSubtitle: "What it's worth",
    icon: DollarSign,
    solutions: [
      {
        title: "One first-timer converted ≈ $1,440/year",
        bullets: [
          "Average ticket $40, three times a month once they're a regular",
          "$40 × 3 × 12 = $1,440 in new recurring revenue",
          "Every first-timer you convert is a year of value, not one visit",
        ],
        example:
          "Convert 5 first-timers a month and by year-end you've added $86K to your annual run-rate.",
      },
      {
        title: "Three saved regulars/month ≈ $4,320/year",
        bullets: [
          "A lost regular worth $120/month compounds fast",
          "Catching 3 a month who were about to fade",
          "Over a year, that's $4,320 in revenue you'd otherwise lose",
        ],
        example:
          "Three Thursday-night couples and two Sunday-brunch families saved per month ≈ $7,200 a year in recovered revenue.",
      },
      {
        title: "Combined annual leak: $25K–$50K",
        bullets: [
          "First-timer drop-off plus silent regular churn compounds",
          "Middle-of-the-range for an independent restaurant",
          "Most of it is recoverable — it just isn't being recovered today",
        ],
        example:
          "A 150-cover-a-week restaurant with ~200 identifiable regulars typically leaks $35K–$40K a year on conservative numbers.",
      },
      {
        title: "15-minute setup",
        bullets: [
          "Connect POS, configure the QR, approve the first messages",
          "We do the heavy lifting on the onboarding call",
          "You're live the same day you sign up",
        ],
        example:
          "Tuesday afternoon, 15 minutes. By the weekend, Swivel is already following up with new visitors.",
      },
      {
        title: "Zero ongoing management",
        bullets: [
          "No campaigns to build, no messages to write",
          "No dashboards to check every morning",
          "Add it and forget it",
        ],
        example:
          "Most owners open Swivel once a month to see the 'saves' report — and that's it.",
      },
      {
        title: "Pays for itself on save #1",
        bullets: [
          "A single saved regular covers 2–3 months of Swivel",
          "Everything else is pure margin on top",
          "ROI math the owner can do in their head",
        ],
        example:
          "Save one regular worth $1,500/year and you've 10× your Swivel investment on that save alone.",
      },
    ],
  },
];

// Cardinal angle of each role (0° = 3 o'clock / right, positive = clockwise).
// Matches the Orbital design: leak top, radar right, nudge bottom, math left.
const ROLE_ANGLE: Record<RoleKey, number> = {
  leak: -90,
  radar: 0,
  nudge: 90,
  math: 180,
};

// Short class suffix used to position each pill on the orbit via CSS.
const POSITION_CLASS: Record<RoleKey, string> = {
  leak: "leak",
  radar: "radar",
  nudge: "nudge",
  math: "math",
};

// ------------------------ styles -------------------------------------

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

/* Stage */
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

/* Cardinal positions on a circle of r=320 around stage center. */
.p3-persona.leak   {left:50%;top:calc(50% - 320px);transform:translate(-50%,-50%)}
.p3-persona.nudge  {left:50%;top:calc(50% + 320px);transform:translate(-50%,-50%)}
.p3-persona.radar  {left:calc(50% + 320px);top:50%;transform:translate(-50%,-50%)}
.p3-persona.math   {left:calc(50% - 320px);top:50%;transform:translate(-50%,-50%)}

/* Detail state */
.p3-stage.p3-detail .p3-orbit-frame{
  transform:translateX(-25%) scale(.5) rotate(var(--p3-rot, 0deg));
}

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
.p3-stage.p3-detail .p3-persona.is-active{
  border-color:var(--p3-orange);background:#fff;
  box-shadow:0 14px 34px -14px rgba(242,107,42,0.45);
  transform:translate(-50%,-50%) scale(calc(1 / 0.5)) rotate(calc(-1 * var(--p3-rot, 0deg))) translateX(40px);
}
.p3-stage.p3-detail .p3-persona.is-active .p3-badge{
  background:var(--p3-orange);color:#fff;border-color:var(--p3-orange);
}

.p3-stage.p3-detail .p3-orbit-frame{cursor:pointer}

/* Detail column (right half) */
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

/* Inline detail card */
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

/* Below-stage section headings */
.p3-section-title{
  font-weight:700;letter-spacing:-0.03em;font-size:38px;line-height:1.1;margin:10px 0 0;color:#0e0e0e;
}
.p3-section-title em{font-family:'Instrument Serif',ui-serif,Georgia,serif;font-style:italic;font-weight:400;color:var(--p3-orange);letter-spacing:-0.01em}

@media (max-width:1100px){
  .p3-stage{height:670px}
  .p3-display{font-size:42px}
  .p3-section-title{font-size:30px}
}
`;

// ------------------------ navbar -------------------------------------

function Navbar(): React.ReactElement {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/restaurant" className="flex items-center gap-2">
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
              Start 15-min setup
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
      aria-label="What does Swivel actually watch?"
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
        Customer <em>Radar</em>
      </div>
      <div className="p3-sm">
        Swivel watches every customer&apos;s visit rhythm — so the moment a first-timer forgets you or a regular starts fading, you know.
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

// ------------------------ core modal ---------------------------------

function CoreModal({
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
                  What does Swivel actually watch?
                </h3>
              </div>
            </div>

            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#3A3A3A" }}
            >
              Swivel is not a marketing tool. It&apos;s a{" "}
              <span className="font-semibold" style={{ color: "#0e0e0e" }}>
                customer radar
              </span>
              . Every time someone comes in — first-timer, regular, or a
              customer starting to fade — Swivel updates their behavioral
              profile. When the pattern changes, a personalized message goes
              out. You don&apos;t run campaigns. You don&apos;t write copy. You
              run your restaurant.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                {
                  title: "Every visit tracked",
                  body: "POS sync means every order, every visit, every table is in the profile — automatically.",
                },
                {
                  title: "Every customer remembered",
                  body: "First name, order history, visit rhythm — stored and updated per customer.",
                },
                {
                  title: "Every drift caught",
                  body: "Frequency decline triggers a cooling state, and a personalized win-back follows.",
                },
                {
                  title: "Every nudge personal",
                  body: "Messages reference what each customer actually ordered — never generic.",
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
                See the two leaks
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full flex-1"
                onClick={onSeeSimulation}
              >
                See how it works in 3 steps
              </Button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

// ------------------------ problems modal -----------------------------

const LEAKS: {
  title: string;
  body: string;
  icon: typeof Turtle;
}[] = [
  {
    title: "First-timers who never come back",
    body:
      "A huge percentage of your first-time customers had a perfectly good experience — and never came back. Nothing went wrong. Nothing brought them back. If 20 first-timers a week don't return, at $40 a visit three times a month, that's $2,400 a month — nearly $29K a year — walking out the door.",
    icon: AlertTriangle,
  },
  {
    title: "Regulars who quietly disappear",
    body:
      "Your regulars don't tell you they're leaving. Their visits drop from weekly, to bi-weekly, to monthly — until they're gone. You find out when it's too late to win them back. Five silent lapses a month at $40 three times a month is $600 a month — over $7,200 a year — just from regulars.",
    icon: Turtle,
  },
];

function ProblemsModal({
  open,
  onClose,
  onBackToCore,
}: {
  open: boolean;
  onClose: () => void;
  onBackToCore: () => void;
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
                The two revenue leaks
              </p>
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "#0e0e0e" }}
              >
                Every restaurant has them. Most don&apos;t see them.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {LEAKS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.1 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center text-center p-6"
                    style={{
                      border: "1.25px dashed var(--p3-orange-dash)",
                      borderRadius: 16,
                      background: "#fff",
                      minHeight: 240,
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
                        fontSize: 16,
                        color: "var(--p3-orange)",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {p.title}
                    </p>
                    <p
                      style={{
                        fontSize: 13.5,
                        lineHeight: 1.55,
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
                onClick={onBackToCore}
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

// ------------------------ how-it-works modal -------------------------

const SETUP_STEPS: { title: string; body: string }[] = [
  {
    title: "Customers opt in",
    body:
      "QR code on the receipt, the table tent, or a small card at the counter. Customers scan, drop phone or email, and they're in — 10 seconds. A small incentive like a free drink on visit 2 keeps conversion high.",
  },
  {
    title: "Swivel learns their rhythm",
    body:
      "We connect to your POS — Toast, Square, Clover, or a basic terminal — and build a behavioral profile per customer: visit frequency, ordering patterns, timing. Every new visit updates the model automatically.",
  },
  {
    title: "Automatic outreach",
    body:
      "First-timers get a personalized follow-up to drive visit 2. Regulars who start fading get a behavioral win-back. Every message references what that specific customer actually orders. Fully automatic — you don't write copy or manage sends.",
  },
];

function HowItWorksModal({
  open,
  onClose,
  onBackToCore,
}: {
  open: boolean;
  onClose: () => void;
  onBackToCore: () => void;
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
                How it works
              </p>
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "#0e0e0e" }}
              >
                From first visit to automatic win-back, in three steps.
              </h3>
            </div>

            <ol className="space-y-3 list-none p-0 m-0">
              {SETUP_STEPS.map((step, i) => (
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
                onClick={onBackToCore}
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

// ------------------------ comparison section -------------------------

const WITHOUT_ROWS = [
  "First-timers leave with no follow-up",
  "Regulars disappear without anyone noticing",
  "Generic blasts to everyone on the list",
  "Owner has to build and manage campaigns",
  "You find out a regular left when it's too late",
];

const WITH_ROWS = [
  "Every first-timer gets a personalized message to drive visit 2",
  "Behavioral detection catches declining visit patterns early",
  "Each message is tailored to the individual's ordering behavior",
  "Fully automatic after 15-minute setup",
  "You intervene while there's still a relationship to save",
];

function ComparisonSection(): React.ReactElement {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-16">
      <div className="text-center mb-10">
        <span className="p3-eyebrow">
          <span className="p3-dot" /> The difference
        </span>
        <h2 className="p3-section-title">
          Without Swivel vs. <em>With Swivel</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          style={{
            background: "#fff",
            borderRadius: 18,
            border: "1px solid var(--p3-line)",
            padding: 28,
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: "var(--p3-ink-3)" }}
          >
            Without Swivel
          </p>
          <ul className="space-y-3 list-none p-0 m-0">
            {WITHOUT_ROWS.map((row) => (
              <li key={row} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 flex items-center justify-center"
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 999,
                    background: "#FFE8E8",
                    color: "#D95555",
                  }}
                >
                  <X size={12} strokeWidth={2.5} />
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "var(--p3-ink-2)",
                    lineHeight: 1.5,
                  }}
                >
                  {row}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            background: "#FFFAF6",
            borderRadius: 18,
            border: "1.5px dashed var(--p3-orange)",
            padding: 28,
            boxShadow: "0 18px 40px -22px rgba(242,107,42,0.35)",
          }}
        >
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: "var(--p3-orange)" }}
          >
            With Swivel
          </p>
          <ul className="space-y-3 list-none p-0 m-0">
            {WITH_ROWS.map((row) => (
              <li key={row} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-0.5 flex items-center justify-center"
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 999,
                    background: "var(--p3-orange)",
                    color: "#fff",
                  }}
                >
                  <Check size={12} strokeWidth={3} />
                </span>
                <span
                  style={{
                    fontSize: 14,
                    color: "#0e0e0e",
                    lineHeight: 1.5,
                  }}
                >
                  {row}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ------------------------ math section -------------------------------

const MATH_NUMBERS: { number: string; label: string; sub: string }[] = [
  {
    number: "$1,440/yr",
    label: "One first-timer converted to a regular",
    sub: "$40 avg ticket × 3 visits/month × 12 months",
  },
  {
    number: "$4,320/yr",
    label: "Three saved regulars each month",
    sub: "3 saves × $120/month value × 12 months",
  },
  {
    number: "$25K–$50K",
    label: "The invisible annual leak",
    sub: "First-timer drop-off + silent regular churn, combined",
  },
];

function MathSection(): React.ReactElement {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pb-24">
      <div className="text-center mb-10">
        <span className="p3-eyebrow">
          <span className="p3-dot" /> The math
        </span>
        <h2 className="p3-section-title">
          Pays for itself on <em>save #1</em>.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MATH_NUMBERS.map((m) => (
          <div
            key={m.number}
            style={{
              background: "#fff",
              borderRadius: 18,
              border: "1.25px dashed var(--p3-orange-dash)",
              padding: 28,
              textAlign: "center",
              boxShadow: "0 14px 32px -22px rgba(242,107,42,0.3)",
            }}
          >
            <div
              style={{
                fontSize: 44,
                fontWeight: 700,
                color: "var(--p3-orange)",
                letterSpacing: "-0.035em",
                lineHeight: 1,
              }}
            >
              {m.number}
            </div>
            <p
              className="mt-3 font-semibold"
              style={{ color: "#0e0e0e", fontSize: 15, lineHeight: 1.35 }}
            >
              {m.label}
            </p>
            <p
              className="mt-2"
              style={{
                color: "var(--p3-ink-3)",
                fontSize: 12.5,
                lineHeight: 1.5,
              }}
            >
              {m.sub}
            </p>
          </div>
        ))}
      </div>

      <p
        className="mt-6 text-center"
        style={{ color: "var(--p3-ink-3)", fontSize: 13 }}
      >
        15-minute setup. Zero ongoing management.
      </p>
    </section>
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
          &copy; {new Date().getFullYear()} Swivel AI. Built for restaurants.
        </p>
      </div>
    </footer>
  );
}

// ------------------------ page ---------------------------------------

export default function RestaurantPage(): React.ReactElement {
  const [activeKey, setActiveKey] = useState<RoleKey | null>(null);
  const [solutionIdx, setSolutionIdx] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [problemsOpen, setProblemsOpen] = useState(false);
  const [howItWorksOpen, setHowItWorksOpen] = useState(false);

  const activeRole = ROLES.find((r) => r.key === activeKey) ?? null;
  const rotation = activeRole ? -ROLE_ANGLE[activeRole.key] : 0;

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
            <span className="p3-dot" /> Swivel for Restaurants
          </span>
          <h1 className="p3-display">
            Turn first-time visitors into <em>regulars</em>. Catch regulars
            before they disappear.
          </h1>
          <p className="p3-sub">
            Automatic customer retention for independent restaurants. 15 minutes
            to set up. Runs itself from day one.
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

      <ComparisonSection />
      <MathSection />

      <Footer />

      <CoreModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSeeProblems={() => {
          setModalOpen(false);
          setProblemsOpen(true);
        }}
        onSeeSimulation={() => {
          setModalOpen(false);
          setHowItWorksOpen(true);
        }}
      />
      <ProblemsModal
        open={problemsOpen}
        onClose={() => setProblemsOpen(false)}
        onBackToCore={() => {
          setProblemsOpen(false);
          setModalOpen(true);
        }}
      />
      <HowItWorksModal
        open={howItWorksOpen}
        onClose={() => setHowItWorksOpen(false)}
        onBackToCore={() => {
          setHowItWorksOpen(false);
          setModalOpen(true);
        }}
      />
    </main>
  );
}
