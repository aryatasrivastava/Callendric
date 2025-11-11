"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"

export default function ScheduleMeeting() {
  const [date, setDate] = useState()
  const [success, setSuccess] = useState(false)
  const { register, handleSubmit, reset } = useForm()

  const onSubmit = (data) => {
    console.log("Meeting scheduled:", { ...data, date })
    setSuccess(true)
    reset()
    setDate(undefined)

    
    setTimeout(() => setSuccess(false), 5000)
  }

  return (
    <Card className="max-w-md mx-auto p-6 mt-10 shadow-lg border rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-center">
          Schedule a Meeting
        </CardTitle>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {/* Success Message */}
          {success && (
            <div className="p-3 text-sm text-green-700 bg-green-100 rounded-md text-center">
              ✅ Meeting Scheduled! A confirmation email has been sent.
            </div>
          )}

          
          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <Input placeholder="Enter your name" {...register("name", { required: true })} />
          </div>

         
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>

         
          <div>
            <label className="block mb-1 text-sm font-medium">Select Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          {/* Time Picker */}
          <div>
            <label className="block mb-1 text-sm font-medium">Select Time</label>
            <Input type="time" {...register("time", { required: true })} />
          </div>
        </CardContent>

        <CardFooter className="flex justify-center p-8">
          <Button type="submit" className="w-full bg-blue-900">
            Schedule Meeting
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
