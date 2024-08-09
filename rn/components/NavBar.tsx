import AuthButton from "./AuthButton"
import Link from "next/link"
import { Button } from "./ui/button"

export default function NavBar() {
    return (
        <div className='w-full items-center mx-auto border-b flex justify-between py-2'>
            <div className="flex w-full max-w-5xl mx-auto items-center">
            <nav className="w-full">
                <Link href='/'><Button variant='link'>Home</Button></Link>
                
            </nav>
            <AuthButton/>
            </div>
        </div>
    )
}