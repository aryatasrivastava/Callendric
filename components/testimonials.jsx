"use client"
const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Founder, PixelCraft",
    content:
      "Callendric has transformed how I manage my team's meetings. It's intuitive and saves us hours every week!",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Ishan Mehta",
    role: "Freelance Designer",
    content:
      "As a freelancer, Callendric helps me stay organized. My clients love how easy it is to book time with me.",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Rohan Verma",
    role: "Startup Founder",
    content:
      "Callendric streamlined our hiring process. Setting up interviews has never been easier!",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Michael Jackson",
    role: "Sales Executive",
    content:
       "Absolutely love the clean UI and smooth functionality.",
    image: "https://i.pravatar.cc/150?img=4",
  },
];
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Card, CardContent } from './ui/card';
import Autoplay from 'embla-carousel-autoplay';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from './ui/avatar';

const Testimonials = () => {
  return (
    
         <Carousel
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full mx-auto"
    >
      
      <CarouselContent >
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            
              <Card className="bg-blue-50 h-full">
                <CardContent className="flex flex-col h-full justify-between items-center p-6">
                 <p className="text-gray-600 mb-4">
                    &quot;{testimonial.content}&quot;
                 </p>
                 <div className="flex items-center mt-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage 
                      src={testimonial.image}
                      alt={testimonial.name}
                      
                      />
                      <AvatarFallback>{testimonial.name.split(" ").map((n)=>n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-center">{testimonial.name}</p>
                        <p className="text-sm text-gray-500 text-center">{testimonial.role}</p>
                    </div>
                 </div>
                </CardContent>
              </Card>
            
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    
  )
}

export default Testimonials;