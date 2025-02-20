'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PriceCard } from '@/components/cards/price.card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyLarge, TypographyP } from '@/components/ui/typography'

export default function PricingPage ()
{
  return (
    <div className="utility-main">
      {/* TITLE */}
      <div className="page-header-container">
        <TypographyH1 className="page-title">
          Subscription <span className="text-primary">Plans</span> &amp; <span className="text-secondary">Pricing</span>
        </TypographyH1>
        <TypographyH4 className="page-subtitle">
          Choose a plan that fits your goals. Upgrade or cancel anytime.
        </TypographyH4>
      </div>

      {/* TABS FOR MONTHLY VS YEARLY */}
      <Tabs defaultValue="monthly" className="w-full lg:px-12 md:px-2 flex flex-col items-center">
        <TabsList className="rounded-lg mb-4 bg-card py-6 px-2">
          <TabsTrigger value="monthly" className="rounded-lg text-secondary tabs-trigger">
            <TypographyLarge>
            Monthly
            </TypographyLarge>
          </TabsTrigger>
          <TabsTrigger value="yearly" className="rounded-lg text-secondary tabs-trigger">
            <TypographyLarge>
            Yearly
            </TypographyLarge>
          </TabsTrigger>
        </TabsList>

        {/* MONTHLY PLANS */ }
        <TabsContent value="monthly">
          <div className="tabs-content-grid">
            <PriceCard
              planName="Basic"
              badgeText="Starter"
              description="Perfect for emerging creators looking for essential tools."
              price="$19.99"
              priceSubtext="per month"
              features={ [
                "Basic analytics & scheduling tools",
                "Community support resources",
                "Email support"
              ] }
              buttonText="Sign Up Now"
            />

            <PriceCard
              planName="Pro"
              badgeText="Popular"
              description="Perfect for emerging creators looking for essential tools."
              price="$49.99"
              priceSubtext="per month"
              features={ [
                "Advanced analytics (revenue trends, engagement)",
                "Personalized growth consultations & content review",
                "Premium editing & marketing tools"
              ] }
              buttonText="Sign Up Now"
            />

            <PriceCard
              planName="Enterprise"
              badgeText="Custom"
              description="Scaled solutions for agencies & multiple creators."
              price="Custom"
              priceSubtext="Contact for pricing"
              features={ [
                "Dedicated account managers",
                "Advanced growth strategies & analytics",
                "Flexible, volume-based pricing"
              ] }
              buttonText="Contact Us"
            />
          </div>
        </TabsContent>

        {/* YEARLY PLANS */}
        <TabsContent value="yearly">
          <div className="tabs-content-grid">
            <PriceCard
              planName="Basic"
              badgeText="Starter"
              description="Perfect for emerging creators looking for essential tools."
              price="$549.99"
              priceSubtext="per month"
              features={ [
                "Basic analytics & scheduling tools",
                "Community support resources",
                "Email support"
              ] }
              buttonText="Sign Up Now"
            />

            <PriceCard
              planName="Pro"
              badgeText="Popular"
              description="Perfect for emerging creators looking for essential tools."
              price="$1,599.99"
              priceSubtext="per year"
              features={ [
                "Advanced analytics (revenue trends, engagement)",
                "Personalized growth consultations & content review",
                "Premium editing & marketing tools"
              ] }
              buttonText="Sign Up Now"
            />

            <PriceCard
              planName="Enterprise"
              badgeText="Custom"
              description="Scaled solutions for agencies & multiple creators."
              price="Custom"
              priceSubtext="Contact for pricing"
              features={ [
                "Dedicated account managers",
                "Advanced growth strategies & analytics",
                "Flexible, volume-based pricing"
              ] }
              buttonText="Contact Us"
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA */}
      <div className="pricing-cta-container">
        <TypographyH2 className="pricing-cta-text">
          Need custom services like <span className="highlighted-text text-primary">video editing</span> or <span className="highlighted-text text-secondary">custom social media </span>ad campaigns?
        </TypographyH2>
        <Link href="/services">
          <motion.button
            whileHover={ { scale: 1.1 } }
            transition={ { type: "spring", stiffness: 300 } }
            className="pricing-cta-button"
          >
            View Our Services
          </motion.button>
        </Link>
      </div>
    </div>
  )
}
