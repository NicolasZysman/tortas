import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="ml-2 mt-2">
      <div className="flex lg:ml-16 lg:mr-16 mb-2 border-b justify-between border-[#1aa64b]">
        <h1 className=" text-white text-2xl text-nowrap">Top albums this month</h1>
        <Link href="/" className="text-gray-400 mr-1 mt-2">View all</Link>
      </div>
      <div className=" grid lg:grid-cols-5 grid-cols-2">
        <Card name="Frank Ocean" title="Blonde" img="/blonde-ocean.jpg" border="border-b-[1px]"/>
        <Card name="Injury Reserve" title="By The Time I Get to Phoenix" img="/phoenix.jpg" border="border-t-[1px]"/>
        <Card name="Anderson .Paak" title="Malibu" img="/malibu.jpg" border="border-b-[1px]"/>
        <Card name="Young Fathers" title="Heavy Heavy" img="/fathers.jpg" border="border-b-[1px]"/>
        <Card name="Weyes Blood" title="Titanic Rising" img="/titanic.jpg" border="border-b-[1px]"/>      
      </div>
      <div className="flex lg:ml-16 lg:mr-16 mb-2 border-b justify-between border-[#1aa64b]">
        <h1 className=" text-white text-2xl text-nowrap">Top songs this month</h1>
        <Link href="/" className="text-gray-400 mr-1 mt-2">View all</Link>
      </div>
      <div className=" grid lg:grid-cols-5 grid-cols-2">
        <Card name="Maruja" title="The Invisible Man" img="/maruja.jpg" border="border-b-[1px]"/>
        <Card name="Quadeca" title="TEXAS BLUE" img="/quad.jpg" border="border-t-[1px]"/>
        <Card name="The Smile" title="Wall of Eyes" img="/smile.jpg" border="border-b-[1px]"/>
        <Card name="The Last Dinner Party" title="Burn Alive" img="/party.webp" border="border-b-[1px]"/>
        <Card name="Yeat" title="Breathe" img="/2093.webp" border="border-b-[1px]"/>      
      </div>
    </main>
  );
}
