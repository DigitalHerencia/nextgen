'use client'

{ /* IMPORTS */ }

import React from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { TypographyH1, TypographyP, TypographyH4, TypographyH2 } from '@/components/ui/typography'

{ /* DEFAULT COMPONENT FUNCTION */ }

export default function RevenueAndToolsPage() {
  
  { /* MAIN RETURN */ }
  
  return (
    <div className="bg-transparent text-primary-foreground mx-auto mt-24 max-w-7xl px-6 pb-16">
      
      {/* PAGE TITLE */}
      
      <div className="mb-12 text-center">
        <TypographyH1 className="text-5xl font-extrabold tracking-wide">
          <span className='text-secondary'>next-level</span> tools<br />designed to empower <span className='text-secondary'>digital creators</span>  
        </TypographyH1>
        <TypographyH4 className="mt-4 text-secondary tracking-wide">
          Explore more ways to monetize your content and leverage cutting-edge tools to streamline your workflow.
        </TypographyH4>
      </div>

      {/* TOOLS SECTION */}
      
      <section className="mb-12">
                <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
      
          {/* Tool 1: ScoutHub */}
      
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/50 backdrop-blur-lg h-full">
              <CardHeader>
                <CardTitle className="font-bold text-primary">
                  <TypographyH2>Scout<span className='text-secondary'>Hub</span></TypographyH2>
                </CardTitle>
                <CardDescription className="text-secondary text-xl">
                  Discover Hidden Gems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-base text-input">
                  Discover top talent: ScoutHub enables you to find the best emerging creators from niche and underserved markets.
                  <br />
                  Data-driven outreach: Advanced algorithms and local engagement strategies ensure you connect with high-potential talent.
                  <br />
                  Curated talent pool: We identify creators ready to take the next step in their career.
                </TypographyP>
              </CardContent>
              <CardFooter>
                <Button className="fixed-bottom w-full text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                  Unlock ScoutHub
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Tool 2: OnboardPro */}
      
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/50 backdrop-blur-lg h-full">
              <CardHeader>
                <CardTitle className="font-bold text-primary">
                <TypographyH2>Onboard<span className='text-secondary'>Pro</span></TypographyH2>
                </CardTitle>
                <CardDescription className="text-secondary text-xl">
                  Seamless Onboarding
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-base text-input">
                  Smooth start: Simplify onboarding with clear contract structures and personalized strategy sessions.
                  <br />
                  Tools for success: Creators get the resources they need from day one, including branding audits and content guides.
                  <br />
                  Maximize efficiency: Get creators up to speed quickly to minimize downtime.
                </TypographyP>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg mt-5 bg-secondary text-background hover:bg-primary rounded-lg">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Tool 3: CreateFlow */}
          
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/50 backdrop-blur-lg h-full">
              <CardHeader>
                <CardTitle className="font-bold text-primary">
                <TypographyH2>Create<span className='text-secondary'>Flow</span></TypographyH2>
                </CardTitle>
                <CardDescription className="text-secondary text-xl">
                  Streamlined Creation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-base text-input">
                  Efficiency at your fingertips: Our drag-and-drop scheduling UI makes managing content production effortless.
                  <br />
                  Professional editing: Integrated tools help polish your work to perfection.
                  <br />
                  Analytics for improvement: Track performance to refine strategies and boost engagement.
                </TypographyP>
              </CardContent>
              <CardFooter>
                <Button className="w-full mt-5 text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                  Try CreateFlow
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Tool 4: EngageMax */}
          
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/50 backdrop-blur-lg h-full">
              <CardHeader>
                <CardTitle className="font-bold text-primary">
                <TypographyH2>Engage<span className='text-secondary'>Max</span></TypographyH2>
                </CardTitle>
                <CardDescription className="text-secondary text-xl">
                  Deepen Fan Connections
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-base text-input">
                  Foster loyalty: Manage custom fan requests, direct messages, and live interactions.
                  <br />
                  Track engagement: Use advanced metrics to understand fan preferences.
                  <br />
                  Boost monetization: Increase revenue through deeper fan connections and custom content opportunities.
                </TypographyP>
              </CardContent>
              <CardFooter>
                <Button className="w-full mt-10 text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                  Engage Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Tool 5: SocialBoost */}
          
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/50 backdrop-blur-lg h-full">
              <CardHeader>
                <CardTitle className="font-bold text-primary">
                <TypographyH2>Social<span className='text-secondary'>Boost</span></TypographyH2>
                </CardTitle>
                <CardDescription className="text-secondary text-xl">
                  Elevate Your Presence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-base text-input">
                  Custom social audits: Optimize your online presence and grow your audience.
                  <br />
                  Cross-platform strategies: Tailored for Instagram, Reddit, and Twitter to maximize engagement.
                  <br />
                  Results-driven growth: Data-driven insights to bring more eyes to your content.
                </TypographyP>
              </CardContent>
              <CardFooter>
                <Button className="w-full mt-3 text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                  Boost Social
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ADD-ONS SECTION */}
    
      <section className="mb-12">
        <TypographyH1 className="mb-6 text-4xl font-bold tracking-wide text-center text-input">
        Additional Revenue & Tools
        </TypographyH1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        
          {/* Add-on 1: Content Creation */}
        
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/50 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center font-bold">
                  <TypographyH2 className="tracking-wide text-primary">Content Creation</TypographyH2>
                </CardTitle>
                <CardDescription className="text-secondary text-xl">
                  Video Editing, Graphic Design, and Photography
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-base text-input">
                  High-Quality Content: Professional video editing, stunning photography, and eye-catching graphic design.
                  <br />
                  Tailored Packages: Customized packages starting at $500/project to elevate your brand.
                  <br />
                  Enhancing Brand Presence: Ensure your materials are polished and appealing.
                </TypographyP>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Add-on 2: Social Media Campaigns */}
          
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/50 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center font-bold text-secondary">
                  <TypographyH2 className="tracking-wide text-primary">Social Media Campaigns</TypographyH2>
                </CardTitle>
                <CardDescription className="text-secondary text-xl">
                  Paid Ad Management (Instagram, Reddit)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-base text-input">
                  Social Media Mastery: Targeted campaigns designed to drive traffic and boost engagement.
                  <br />
                  Targeted Campaigns: Using demographic and interest-based strategies.
                  <br />
                  Affordable Pricing: Starting at just $100/month.
                </TypographyP>
              </CardContent>
              <CardFooter>
                <Button className="w-full mt-4 text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Add-on 3: Brand Partnerships */}
        
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/50 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center font-bold text-secondary">
                  <TypographyH2 className="tracking-wide text-primary">Brand Partnerships</TypographyH2>
                </CardTitle>
                <CardDescription className="text-secondary text-xl">
                  Commission-Based Revenue Model
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-base text-input">
                  Strategic Partnerships: Connect with top brands for lucrative sponsorship opportunities.
                  <br />
                  Revenue Model: Commission-based to ensure mutual success.
                  <br />
                  Exclusive Deals: Access exclusive sponsorship deals tailored to your brand.
                </TypographyP>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Add-on 4: Revenue Sharing */}
          
          <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
            <Card className="bg-black/50 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="flex items-center font-bold text-secondary">
                  <TypographyH2 className="tracking-wide text-primary">Revenue Sharing</TypographyH2>
                </CardTitle>
                <CardDescription className="text-secondary text-xl">
                  20%-30% Cut of Creator Earnings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="text-base text-input">
                  Comprehensive Management: Full-service support covering content strategy, marketing, fan engagement, and administrative tasks.
                  <br />
                  Strategic Support: Our success is tied to your performance.
                </TypographyP>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
