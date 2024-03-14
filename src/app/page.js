import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Collaboration from "@/components/Collaboration"
export default function Home() {
  return (
    <main className="px-[18px] md:mx-[2vw] md:border-x border-gray-800">
      <Hero/>
      <Features/>
      <Collaboration/>
    </main>
  );
}
