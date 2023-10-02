import { Button } from "@/components/ui/button"
import Link from "next/link"



const LandingPage = () => {
  return (
    <>
        <h1>Landing page(unprotected)</h1>
        <Link href={"/sign-in"}> 
            <Button>Signin</Button>
        </Link>
        <Link href={"/sign-up"}> 
            <Button>Signup</Button>
        </Link>
        
    </>
  )
}


export default LandingPage