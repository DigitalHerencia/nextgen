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
import { TypographyH1, TypographyH2, TypographyH4, TypographyLarge, TypographyP, TypographySmall } from '@/components/ui/typography'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

interface PriceCardProps {
  planName: string;
  badgeText?: string;
  description: string;
  price: string;
  priceSubtext: string;
  features: string[];
  buttonText: string;
  onButtonClick?: () => void;
}

export function PriceCard({
  planName,
  badgeText,
  description,
  price,
  priceSubtext,
  features,
  buttonText,
  onButtonClick,
}: PriceCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <Card className="base-card">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-between">
            <TypographyH1 className="card-title">
              {planName}
            </TypographyH1>
              <Badge variant="default" className='mb-8'>
              {badgeText}
              </Badge>
          </CardTitle>
          <Separator className="my-2 border-b" />
          <CardDescription className="card-description">
            <TypographyH4>
              {description}
            </TypographyH4>
          </CardDescription>
        </CardHeader>

        <CardContent className="base-card-content">
          <TypographyH1 className="text-secondary card-title">
            {price}
          </TypographyH1>
          <TypographySmall className="text-primary card-text">
            {priceSubtext}
          </TypographySmall>
          <ul className="mt-4 space-y-1 text-base text-input">
            {features.map((feature, idx) => (
              <li key={idx}>• {feature}</li>
            ))}
          </ul>
        </CardContent>

        <CardFooter className="card-footer">
          <Button onClick={onButtonClick} className="base-button-primary">
          <TypographyLarge className=" base-button">  
          {buttonText}
          </TypographyLarge>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
