"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface ImageCarouselProps {
  images: string[]
  className?: string
  imageClassName?: string
}

export function ImageCarousel({ images, className, imageClassName }: ImageCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className={`w-full h-full ${className}`}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="relative h-full w-full">
            <Image
              src={image}
              alt={`Carousel image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className={imageClassName}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
