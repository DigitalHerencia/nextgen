'use client'

import React from 'react'
import { TypographyH1, TypographyH2, TypographyH4, TypographyP } from '@/components/ui/typography'
import { AlternateCard } from '@/components/cards/alernate.card'
import { MainCard } from '@/components/cards/main.card'

export default function ServicesPage ()
{
  return (
    <div className="utility-main">
      {/* PAGE TITLE */}
      <div className="page-header-container">
        <TypographyH1 className="page-title">
          <span className="text-secondary">next-level</span> tools<br />
          designed to<span className="text-primary"> empower</span> digital creators
        </TypographyH1>
        <TypographyH4 className="page-subtitle">
          Explore more ways to monetize your content and leverage cutting-edge tools to streamline your workflow.
        </TypographyH4>
      </div>

      {/* TOOLS SECTION */}
      <section className="utility-main-section">
        <div className="main-grid">
          <AlternateCard
            titleWords={ [ "Scout", "Hub" ] }
            subtitle="Discover Hidden Gems"
            content="Discover top talent: ScoutHub enables you to find the best emerging creators from niche and underserved markets. Data-driven outreach: Advanced algorithms and local engagement strategies ensure you connect with high-potential talent. Curated talent pool: We identify creators ready to take the next step in their career."
            buttonText="Unlock ScoutHub"
          />

          <AlternateCard
            titleWords={ [ "Onboard", "Pro" ] }
            subtitle="Seamless Onboarding"
            content="Smooth start: Simplify onboarding with clear contract structures and personalized strategy sessions. Tools for success: Creators get the resources they need from day one, including branding audits and content guides. Maximize efficiency: Get creators up to speed quickly to minimize downtime."
            buttonText="Get Started"
          />

          <AlternateCard
            titleWords={ [ "Create", "Flow" ] }
            subtitle="Streamlined Creation"
            content="Efficiency at your fingertips: Our drag-and-drop scheduling UI makes managing content production effortless. Professional editing: Integrated tools help polish your work to perfection. Analytics for improvement: Track performance to refine strategies and boost engagement."
            buttonText="Try CreateFlow"
          />

          <AlternateCard
            titleWords={ [ "Engage", "Max" ] }
            subtitle="Deepen Fan Connections"
            content="Foster loyalty: Manage custom fan requests, direct messages, and live interactions. Track engagement: Use advanced metrics to understand fan preferences. Boost monetization: Increase revenue through deeper fan connections and custom content opportunities."
            buttonText="Engage Now"
          />

          <AlternateCard
            titleWords={ [ "Social", "Boost" ] }
            subtitle="Elevate Your Presence"
            content="Custom social audits: Optimize your online presence and grow your audience. Cross-platform strategies: Tailored for Instagram, Reddit, and Twitter to maximize engagement. Results-driven growth: Data-driven insights to bring more eyes to your content."
            buttonText="Boost Social"
          />
        </div>
      </section>

      {/* ADD-ONS SECTION */}
      <section className="utility-secondary-section">
        <TypographyH1 className="secondary-section-title">
          Additional Revenue & Tools
        </TypographyH1>
        <div className="secondary-grid">
          <MainCard
            titlePart1="Content "
            titlePart2="Creation"
            subtitle="Video Editing, Graphic Design, and Photography"
            content="High-Quality Content: Professional video editing, stunning photography, and eye-catching graphic design. Tailored Packages: Customized packages starting at $500/project to elevate your brand. Enhancing Brand Presence: Ensure your materials are polished and appealing."
            buttonText="Learn More"
          />

          <MainCard
            titlePart1="Social Media"
            titlePart2=" Campaigns"
            subtitle="Paid Ad Management (Instagram, Reddit)"
            content="Social Media Mastery: Targeted campaigns designed to drive traffic and boost engagement. Targeted Campaigns: Using demographic and interest-based strategies. Affordable Pricing: Starting at just $100/month."
            buttonText="Learn More"
          />

          <MainCard
            titlePart1="Brand"
            titlePart2=" Partnerships"
            subtitle="Commission-Based Revenue Model"
            content="Strategic Partnerships: Connect with top brands for lucrative sponsorship opportunities. Revenue Model: Commission-based to ensure mutual success. Exclusive Deals: Access exclusive sponsorship deals tailored to your brand."
            buttonText="Learn More"
          />

          <MainCard
            titlePart1="Revenue"
            titlePart2=" Sharing"
            subtitle="20%-30% Cut of Creator Earnings"
            content="Comprehensive Management: Full-service support covering content strategy, marketing, fan engagement, and administrative tasks. Strategic Support: Our success is tied to your performance."
            buttonText="Learn More"
          />
        </div>
      </section>
    </div>
  )
}
