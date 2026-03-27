/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const FeaturesMarquee = lazy(() => import('./components/FeaturesMarquee'));
const StatsSection = lazy(() => import('./components/StatsSection'));
const Services = lazy(() => import('./components/Services'));
const SocialProof = lazy(() => import('./components/SocialProof'));
const OpportunitiesSection = lazy(() => import('./components/OpportunitiesSection'));
const ScaleSection = lazy(() => import('./components/ScaleSection'));
const ScannerSection = lazy(() => import('./components/ScannerSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const StickyCTA = lazy(() => import('./components/StickyCTA'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-purple/30 selection:text-brand-purple">
      <Navbar />
      <main>
        <Hero />
        
        <Suspense fallback={<div className="min-h-screen" />}>
          <StatsSection />
          <OpportunitiesSection />
          <ScaleSection />
          <FeaturesMarquee />
          <Services />
          <SocialProof />
          <ScannerSection />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <StickyCTA />
      </Suspense>
    </div>
  );
}

