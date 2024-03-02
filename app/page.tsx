import Card from "@/components/Card";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="ml-2 mt-2">
      <Title title="Top albums this month"/>
      <div className=" grid lg:grid-cols-5 grid-cols-2">
        <Card name="Frank Ocean" title="Blonde" img="/blonde-ocean.jpg" border="border-b-[1px]"/>
        <Card name="Injury Reserve" title="By The Time I Get to Phoenix" img="/phoenix.jpg" border="border-t-[1px]"/>
        <Card name="Anderson .Paak" title="Malibu" img="/malibu.jpg" border="border-b-[1px]"/>
        <Card name="Young Fathers" title="Heavy Heavy" img="/fathers.jpg" border="border-b-[1px]"/>
        <Card name="Weyes Blood" title="Titanic Rising" img="/titanic.jpg" border="border-b-[1px]"/>      
      </div>
      <Title title="Top songs this month"/>
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
