import Link from "next/link";

export default function NavBar() {
    return (
        <div className="bg-[#f8ad9d] w-[98%] h-14 flex shadow-lg mx-auto">
            <Link href="/">
                <img src="https://static.thenounproject.com/png/102872-200.png" alt="No img?" className="ml-4 h-full hover:cursor-pointer hover:h-[3.7rem] transition-all"></img>
            </Link>
        </div>
    )
}