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
import { TypographyH1, TypographyH2, TypographyH4, TypographyLarge, TypographyP } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { Separator } from '@radix-ui/react-separator'

interface MainCardProps {
  titlePart1: string
  titlePart2?: string
  subtitle: string
  content: string
  buttonText: string
  onClick?: () => void
}

export function MainCard({
  titlePart1,
  titlePart2,
  subtitle,
  content,
  buttonText,
  onClick,
}: MainCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <Card className="base-card">
        <CardHeader>
          <CardTitle>
            <TypographyH2 className="card-title">
              {titlePart1}
              {titlePart2 && <span className="text-secondary">{titlePart2}</span>}
            </TypographyH2>
          </CardTitle>
          <Separator className="my-2 border-b" />
          <CardDescription> 
           <TypographyH4  className="card-description">
            {subtitle}
          </TypographyH4>
          </CardDescription>
        </CardHeader>

        <CardContent className="base-card-content">
          <TypographyP className="card-content">
            {content}
          </TypographyP>
        </CardContent>

        <CardFooter className="card-footer">
          <Button onClick={onClick} className="base-button-primary">
          <TypographyLarge className=" base-button">  
          {buttonText}
          </TypographyLarge>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
