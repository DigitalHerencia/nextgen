'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function AdditionalRevenuePage() {
  return (
    <div className="mx-auto mt-8 max-w-7xl px-6 pb-16">
      {/* HEADER SECTION */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Additional Revenue Streams</h1>
        <p className="mt-2 text-gray-300">
          Explore more ways to monetize your content and expand your brand.
        </p>
      </header>

      {/* REVENUE STREAMS GRID */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Card: Content Creation */}
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
          <Card className="bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Content Creation
              </CardTitle>
              <Separator className="my-2" />
              <CardDescription className="text-gray-300">
                Video editing, graphic design, and photography
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Packages starting at $500/project
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card: Social Media Campaigns */}
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
          <Card className="bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Social Media Campaigns
              </CardTitle>
              <Separator className="my-2" />
              <CardDescription className="text-gray-300">
                Paid ad management (Instagram, Reddit)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Starting at $100/month
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card: Brand Partnerships */}
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
          <Card className="bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Brand Partnerships
              </CardTitle>
              <Separator className="my-2" />
              <CardDescription className="text-gray-300">
                Commission-based revenue model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Partner with top brands for sponsorship deals
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Card: Revenue Sharing */}
        <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
          <Card className="bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Revenue Sharing
              </CardTitle>
              <Separator className="my-2" />
              <CardDescription className="text-gray-300">
                20%-30% cut of creator earnings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">
                Full-service management in exchange for a percentage
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}