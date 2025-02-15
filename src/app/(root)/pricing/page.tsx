'use client'

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
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { TypographyH1, TypographyH2, TypographyP  } from '@/components/ui/typography'

export default function PricingPage() {
  return (
    <div className="bg-transparent text-white mx-auto mt-8 max-w-7xl px-6 pb-16">
      {/* Title & Subtitle */}
      <div className="mb-8 text-center">
        <TypographyH1 className="text-5xl font-bold tracking-wide">Subscription Plans &amp; Pricing</TypographyH1>
        <TypographyP className="mt-2 text-gray-300">
          Choose a plan that fits your goals. Upgrade or cancel anytime.
        </TypographyP>
      </div>

      {/* Tabs for Monthly vs Yearly */}
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="mx-auto mb-8 flex justify-center bg-transparent">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>

        {/* Monthly Plans */}
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Basic Plan */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-[#0a0a0a]/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-56 text-2xl font-bold text-[#00ffff]">
                    Basic
                   <Badge variant="default" className="bg-[#00ffff] text-[#0a0a0a]">Starter</Badge>
                  </CardTitle>
                  <Separator className="my-2" />
                  <CardDescription className="text-gray-300">
                    Perfect for emerging creators looking for essential tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyH2 className="mt-4 text-4xl text-[#ff00ff] font-extrabold">$50</TypographyH2>
                  <TypographyP className="text-sm text-gray-400">per month</TypographyP>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    <li>• Basic analytics &amp; scheduling tools</li>
                    <li>• Community support resources</li>
                    <li>• Email support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#00ffff] text-[black] hover:bg-[#ff00ff]">
                    Sign Up Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-[#0a0a0a]/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-56 text-2xl font-bold text-[#00ffff]">
                    Pro
                   <Badge variant="default" className="bg-[#00ffff] text-[#0a0a0a]">Popular</Badge>
                  </CardTitle>
                  <Separator className="my-2" />
                  <CardDescription className="text-gray-300">
                    Perfect for emerging creators looking for essential tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyH2 className="mt-4 text-4xl text-[#ff00ff] font-extrabold">$50</TypographyH2>
                  <TypographyP className="text-sm text-gray-400">per month</TypographyP>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    <li>• Advanced analytics (revenue trends, engagement)</li>
                    <li>• Personalized growth consultations &amp; content review</li>
                    <li>• Premium editing &amp; marketing tools</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#00ffff] text-[black] hover:bg-[#ff00ff]">
                    Sign Up Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-[#0a0a0a]/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-56 text-2xl font-bold text-[#00ffff]">
                    Enterprise
                   <Badge variant="default" className="bg-[#00ffff] text-[#0a0a0a]">Custom</Badge>
                  </CardTitle>
                  <Separator className="my-2" />
                  <CardDescription className="text-gray-300">
                  Scaled solutions for agencies &amp; multiple creators.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyH2 className="mt-4 text-4xl text-[#ff00ff] font-extrabold">Custom</TypographyH2>
                  <TypographyP className="text-sm text-gray-400">Contact for pricing</TypographyP>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    <li>• Dedicated account managers</li>
                    <li>• Advanced growth strategies &amp; analytics</li>
                    <li>• Flexible, volume-based pricing</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#00ffff] text-[black] hover:bg-[#ff00ff]">
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        {/* Yearly Plans */}
        <TabsContent value="yearly">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Basic Yearly */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Basic</CardTitle>
                  <Separator className="my-2" />
                  <CardDescription className="text-gray-300">
                    $540 / year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyP className="text-sm text-gray-400">
                    Save 10% with annual billing.
                  </TypographyP>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#00ffff] text-black hover:opacity-90">
                    Sign Up
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Pro Yearly */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                  <Separator className="my-2" />
                  <CardDescription className="text-gray-300">
                    $1620 / year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyP className="text-sm text-gray-400">
                    Save 10% with annual billing.
                  </TypographyP>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#ff00ff] text-black hover:opacity-90">
                    Get Pro
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* Enterprise Yearly */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                  <Separator className="my-2" />
                  <CardDescription className="text-gray-300">
                    Custom / year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyP className="text-sm text-gray-400">
                    Flexible pricing for agencies.
                  </TypographyP>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#00ffff] text-black hover:opacity-90">
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Typical add-on services, disclaimers, or CTA */}
      <div className="mt-12 text-center">
        <TypographyP className="text-gray-400">
          Need custom services like video editing or ad campaigns?
        </TypographyP>
        <Button variant="outline" className="mt-4 border-white/50 text-white hover:bg-white/10">
          View Our Services
        </Button>
      </div>
    </div>
  )
}
