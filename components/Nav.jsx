// components/Nav.jsx
"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link href="/">
          <span className="text-2xl font-black tracking-wide">
            <span className="text-orange-500">GRIND</span>
            <span>FIT</span>
          </span>
        </Link>

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';   // ⬅ add this

export default function Nav() {
  const router = useRouter();              // ⬅ add this
  if (router.pathname.startsWith('/member')) {
    // Don't render the marketing nav on member pages
    return null;                           // ⬅ add this block
  }

  const [open, setOpen] = useState(false);

  // keep the rest of your nav as-is (with the absolute anchors)
  const links = [
    { href: '/#why',        label: 'Why GrindFit' },
    { href: '/#nutrition',  label: 'Nutrition' },
    { href: '/#reset',      label: 'Reset & Recover' },
    { href: '/#membership', label: 'Membership' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/60 backdrop-blur">
      {/* ...the rest of your Nav.jsx exactly as you have it... */}
    </header>
  );
}

        
        {/* Marketing nav + CTA */}
        <nav className="space-x-6 text-white/80">
          <Link href="#why"        scroll={false} className="hover:text-white">
            Why GrindFit
          </Link>
          <Link href="#nutrition"  scroll={false} className="hover:text-white">
            Nutrition
          </Link>
          <Link href="#reset"      scroll={false} className="hover:text-white">
            Reset &amp; Recover
          </Link>
          <Link href="#membership" scroll={false} className="hover:text-white">
            Membership
          </Link>

          {/* Open-App button */}
          <Link
            href="/member"
            className="inline-block rounded-md bg-orange-500 px-4 py-1.5 text-sm font-semibold text-black hover:bg-orange-400"
          >
            Open App
          </Link>
        </nav>
      </div>
    </header>
  );
}
