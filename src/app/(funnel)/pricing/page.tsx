'use client'

{ /* IMPORTS */ }

import { motion } from 'framer-motion'
import Link from 'next/link'
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
import { TypographyH1, TypographyH2, TypographyP, TypographyH3, TypographyH4 } from '@/components/ui/typography'

{ /* VARIABLES */ }

const MotionButton = motion.create( Button );

{ /* DEFAULT COMPONENT FUNCTION */ }

export default function PricingPage ()
{

  { /* MAIN RETURN */ }

  return (
    <div className="bg-transparent text-primary-foreground mx-auto mt-24 max-w-7xl px-6 pb-16">
      
      {/* TITLE */}
      
      <div className="mb-4 text-center">
        <TypographyH1 className="text-5xl font-extrabold tracking-wide">
          Subscription Plans &amp; Pricing
        </TypographyH1>
        <TypographyP className="text-secondary">
          Choose a plan that fits your goals. Upgrade or cancel anytime.
        </TypographyP>
      </div>

      {/* TABS FOR MONTHLY VS YEARLY */}
      
      <Tabs defaultValue="monthly" className="w-full">
        <TabsList className="w-36 bg-card mx-auto mb-4 flex justify-center">
          <TabsTrigger
            className="rounded-lg data-[state=active]:bg-gradient"
            value="monthly"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            className="rounded-lg data-[state=active]:bg-gradient"
            value="yearly"
          >
            Yearly
          </TabsTrigger>
        </TabsList>

        {/* MONTHLY PLANS */}
        
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            {/* BASIC PLAN */}
            
            <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
              <Card className=" bg-[#000000]/50 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-bold text-secondary">
                    <TypographyH1 className="tracking-wide">Basic</TypographyH1>
                    <Badge
                      variant="default"
                      className="bg-secondary text-background tracking-normal mb-2 ml-auto rounded-lg"
                    >
                      Starter
                    </Badge>
                  </CardTitle>
                  <Separator className="my-2 border-b" />
                  <CardDescription className="text-input">
                    <TypographyH4 className="tracking-wide">
                      Perfect for emerging creators looking for essential tools.
                    </TypographyH4>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyH2 className="mt-4 tracking-wide text-primary text-4xl font-extrabold">
                    $19.99
                  </TypographyH2>
                  <TypographyP className="text-sm text-secondary">
                    per month
                  </TypographyP>
                  <ul className="mt-4 space-y-2 text-base text-input">
                    <li>• Basic analytics &amp; scheduling tools</li>
                    <li>• Community support resources</li>
                    <li>• Email support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                    Sign Up Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* PRO PLAN */}
            
            <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
              <Card className="bg-[#000000]/50 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-bold text-secondary">
                    <TypographyH1 className="tracking-wide">Pro</TypographyH1>
                    <Badge
                      variant="default"
                      className="bg-secondary text-background tracking-normal mb-2 ml-auto rounded-lg"
                    >
                      Popular
                    </Badge>
                  </CardTitle>
                  <Separator className="my-2 border-b" />
                  <CardDescription className="text-input">
                    <TypographyH4 className="tracking-wide">
                      Perfect for emerging creators looking for essential tools.
                    </TypographyH4>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyH2 className="mt-4 text-4xl tracking-wide text-primary font-extrabold">
                    $49.99
                  </TypographyH2>
                  <TypographyP className="text-sm text-secondary">
                    per month
                  </TypographyP>
                  <ul className="mt-4 space-y-2 text-base text-input">
                    <li>• Advanced analytics (revenue trends, engagement)</li>
                    <li>• Personalized growth consultations &amp; content review</li>
                    <li>• Premium editing &amp; marketing tools</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                    Sign Up Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* ENTERPRISE PLAN */}
            
            <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
              <Card className="bg-[#000000]/50 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-bold text-secondary">
                    <TypographyH1 className="tracking-wide">Enterprise</TypographyH1>
                    <Badge
                      variant="default"
                      className="bg-secondary text-background tracking-normal mb-2 ml-auto rounded-lg"
                    >
                      Custom
                    </Badge>
                  </CardTitle>
                  <Separator className="my-2 border-b" />
                  <CardDescription className="text-input">
                    <TypographyH4 className="tracking-wide">
                      Scaled solutions for agencies &amp; multiple creators.
                    </TypographyH4>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyH2 className="mt-4 text-4xl tracking-wide text-primary font-extrabold">
                    Custom
                  </TypographyH2>
                  <TypographyP className="text-sm text-secondary">
                    Contact for pricing
                  </TypographyP>
                  <ul className="mt-4 space-y-2 text-base text-input">
                    <li>• Dedicated account managers</li>
                    <li>• Advanced growth strategies &amp; analytics</li>
                    <li>• Flexible, volume-based pricing</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-secondary text-lg  text-background hover:bg-primary rounded-lg">
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        {/* YEARLY PLANS */}
        <TabsContent value="yearly">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            {/* BASIC PLAN */ }
            
            <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
              <Card className=" bg-[#000000]/50 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-bold text-secondary">
                    <TypographyH1 className="tracking-wide">Basic</TypographyH1>
                    <Badge
                      variant="default"
                      className="bg-secondary text-background tracking-normal mb-2 ml-auto rounded-lg"
                    >
                      Starter
                    </Badge>
                  </CardTitle>
                  <Separator className="my-2 border-b" />
                  <CardDescription className="text-input">
                    <TypographyH4 className="tracking-wide">
                      Perfect for emerging creators looking for essential tools.
                    </TypographyH4>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyH2 className="mt-4 tracking-wide text-primary text-4xl font-extrabold">
                    $549.99
                  </TypographyH2>
                  <TypographyP className="text-sm text-secondary">
                    per month
                  </TypographyP>
                  <ul className="mt-4 space-y-2 text-base text-input">
                    <li>• Basic analytics &amp; scheduling tools</li>
                    <li>• Community support resources</li>
                    <li>• Email support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                    Sign Up Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* PRO PLAN */ }
            
            <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
              <Card className="bg-[#000000]/50 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-bold text-secondary">
                    <TypographyH1 className="tracking-wide">Pro</TypographyH1>
                    <Badge
                      variant="default"
                      className="bg-secondary text-background tracking-normal mb-2 ml-auto rounded-lg"
                    >
                      Popular
                    </Badge>
                  </CardTitle>
                  <Separator className="my-2 border-b" />
                  <CardDescription className="text-input">
                    <TypographyH4 className="tracking-wide">
                      Perfect for emerging creators looking for essential tools.
                    </TypographyH4>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyH2 className="mt-4 text-4xl tracking-wide text-primary font-extrabold">
                    $1,599.99
                  </TypographyH2>
                  <TypographyP className="text-sm text-secondary">
                    per year
                  </TypographyP>
                  <ul className="mt-4 space-y-2 text-base text-input">
                    <li>• Advanced analytics (revenue trends, engagement)</li>
                    <li>• Personalized growth consultations &amp; content review</li>
                    <li>• Premium editing &amp; marketing tools</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-lg bg-secondary text-background hover:bg-primary rounded-lg">
                    Sign Up Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            {/* ENTERPRISE PLAN */ }
            <motion.div whileHover={ { scale: 1.03 } } transition={ { duration: 0.3 } }>
              <Card className="bg-[#000000]/50 backdrop-blur-lg">
                <CardHeader>
                  <CardTitle className="flex items-center font-bold text-secondary">
                    <TypographyH1 className="tracking-wide">Enterprise</TypographyH1>
                    <Badge
                      variant="default"
                      className="bg-secondary text-background tracking-normal mb-2 ml-auto rounded-lg"
                    >
                      Custom
                    </Badge>
                  </CardTitle>
                  <Separator className="my-2 border-b" />
                  <CardDescription className="text-input">
                    <TypographyH4 className="tracking-wide">
                      Scaled solutions for agencies &amp; multiple creators.
                    </TypographyH4>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <TypographyH2 className="mt-4 text-4xl tracking-wide text-primary font-extrabold">
                    Custom
                  </TypographyH2>
                  <TypographyP className="text-sm text-secondary">
                    Contact for pricing
                  </TypographyP>
                  <ul className="mt-4 space-y-2 text-base text-input">
                    <li>• Dedicated account managers</li>
                    <li>• Advanced growth strategies &amp; analytics</li>
                    <li>• Flexible, volume-based pricing</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-secondary text-lg  text-background hover:bg-primary rounded-lg">
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>

      {/* CTA */}
      
      <div className="mt-10 text-center">
        <TypographyH3 className="text-input tracking-wide">
          Need custom services like <span className='text-primary'>video editing</span>  or  <span className='text-secondary'>custom social media </span>ad campaigns?
        </TypographyH3>
        <Link href="/services">
          <MotionButton
            whileHover={ { scale: 1.1 } }
            transition={ { type: "spring", stiffness: 300 } }
            variant="outline"
            className="mt-4 bg-primary text-lg rounded-lg border-primary text-input hover:bg-secondary hover:text-primary"
          >
          View Our Services
          </MotionButton>
        </Link>
      </div>
    </div>
  )
}
