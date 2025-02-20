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
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

interface AlternateCardProps {
  titleWords: string[]; 
  subtitle: string;
  content: string;
  buttonText: string;
  onClick?: () => void;
}

/**
 * This component shows how to alternate text colors for multiple words.
 * e.g. titleWords=["Brand","Partnerships"] => 
 *   <span className="text-primary">Brand</span> <span className="text-secondary">Partnerships</span>
 */
export function AlternateCard({
  titleWords,
  subtitle,
  content,
  buttonText,
  onClick,
}: AlternateCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      <Card className="base-card">
        <CardHeader>
          <CardTitle>
            <TypographyH2 className="card-title">
              {titleWords.map((word, index) => (
                <span
                  key={index}
                  className={index % 2 === 0 ? 'text-primary' : 'text-secondary'}
                >
                  {word}
                  {index < titleWords.length - 1 && ''}
                </span>
              ))}
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
