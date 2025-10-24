import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button} from "./ui/button";
import { PenBox } from "lucide-react";

const Header= () => {
  return(
<nav className="mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2">
   <Link href={"/"} className="flex items-center">
   <Image
          src="/logo.jpg"
          width="200"
          height="200"
          alt="Callendric Logo"
          className="h-20 w-auto"
        />
   </Link>
    <div className="flex items-center gap-4">
        <Link href="/events?create=true">
          <Button variant="default" className="flex items-center gap-2">
            <PenBox size={30} />
            <span className="hidden sm:inline">Create Event</span>
          </Button>
        </Link>
         <Button variant="outline">Login</Button>
    </div>
  </nav>
 );
};

export default Header;