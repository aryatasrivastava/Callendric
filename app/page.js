import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/testimonials";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];

const howItWorks = [
  { step:"Select a Date",
    description:
      "Pick a convenient date from the interactive calendar. It’s quick and easy to navigate.",},
  {
    step:"Choose a Time Slot",
    description: "Pick the time that fits best for you. Slots are dynamically updated to maintain smooth scheduling.",},
  
  {
    step: "Share Your Link",
    description: "Once your availability is set, share your personalized meeting link through email so others can easily book time with you.",
  },
  
  {
    step: "Get Booked",
    description:"Your invitees can now book a time using the link. Once booked, both parties receive a confirmation and the meeting is added to the calendar.",
  },
];

export default function Home() {
  return (
     <main className="container mx-auto px-4 py-16">
       <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold pb-6 text-blue-900">Simplify Your Scheduling</h1>
          <p className="text-xl text-grey-600 mb-10">
            Callendric helps you manage your time effectively.
            Create events, set availaibility, and let others book time with you seamlessly.
          </p>
          <Link href='/dashboard'>
          <Button size="lg" className="text-lg bg-blue-500 hover:bg-blue-600" >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
        </div>
       
       <div className="lg:w-1/2 flex justify-center">
       <div className="relative w-full max-w-md aspect-square">
         <Image
        src="/posternobg.png"
        alt="Illustration"
        layout="fill"
        objectFit="contain"
        />

       </div>
       
       </div>
      </div>

      <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature,index)=>{
          return(
            <Card key={index} className="bg-blue-50">
            <CardHeader>
              <feature.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
        <CardTitle className="text-center font-bold text-gray-600">{feature.title}</CardTitle>
        
      </CardHeader>
      <CardContent>
        <p className="text-center text-gray-600">
          {feature.description}
          </p>
      </CardContent>
             
            </Card>
          );
      })}</div>
       </div>

      <div className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">What Our Users Say?</h2>
          <Testimonials/>
      </div>

       <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
          How It Works?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 rounded-full border-2 border-blue-800 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-50 text-gray-600 rounded-lg border-2 border-blue-800 p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Simplify Your Scheduling?
        </h2>
        <p className="text-xl mb-6">
          Join thousands of professionals who trust Callendric for efficient time
          management.
        </p>
        <Link href={"/dashboard"}>
          <Button size="lg" variant="secondary" className="bg-blue-600 text-white">
            Start For Free <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>

     </main>
  )
   
}
    