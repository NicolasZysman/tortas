import Image from "next/image"
import Link from "next/link"
import Button from "./Button"


const Navbar = () => {
  return (
    <nav className=" lg:bg-[#000000] bg-[#1aa64b] flex items-center justify-between mx-2 max-w-[1440px] px-6 lg:px-18 relative z-30 py-4 mt-2 rounded-md">
      <Link className=" bg-[#1aa64b] rounded-full hover:shadow-2xl hover:rounded-full hover:bg-[#212121]" href="/">
        <Image src="/spotify.png" alt="logo" width={60} height={30} />
      </Link>

      {/* <ul className="hidden h-full gap-12 lg:flex">
        Pepe
      </ul> */}

      <div className="lg:flex items-center justify-center hidden">
        <button className={" bg-[#1aa64b] flex items-center justify-center gap-3 rounded-full border border-transparent px-8 py-4 text-white transition-all hover:bg-[#212121]"}>
            <Image src="/user.svg" alt="Login" width={24} height={24}/>
        {/* <label className="text-[16px] font-[700] whitespace-nowrap cursor-pointer">Login</label> */}
    </button>
      </div>
      {/* <div className="bg-[#1aa64b] hover:bg-[#ffffff98] rounded-full"> */}
        <Image 
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar