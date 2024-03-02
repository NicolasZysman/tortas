import Link from "next/link"

type TitleProps = {
  title: string;
}

const Title = ({title}: TitleProps) => {
  return (
    <div className="flex mr-2 lg:ml-16 lg:mr-16 mb-2 border-b justify-between border-[#1aa64b]">
        <h1 className=" text-white text-2xl text-nowrap">{title}</h1>
        <Link href="/" className="text-gray-400 mr-1 mt-2">View all</Link>
    </div>
  )
}

export default Title