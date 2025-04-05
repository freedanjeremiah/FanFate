import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const HeroSection = () => (
  <AuroraBackground className="relative bg-black text-white" showRadialGradient>
    <div className="flex flex-col items-center space-y-6 px-4 py-12">
      <motion.h1
        className="text-4xl font-bold text-transparent bg-gradient-to-r from-neo-green to-red-300 bg-clip-text"
        animate={{ backgroundPosition: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        style={{ backgroundSize: "200%" }}
      >
        Radish Markets
      </motion.h1>

      <motion.h4 className="text-xl text-transparent bg-gradient-to-r from-white to-zinc-300 bg-clip-text">
        Say Rad or Not?
      </motion.h4>

      <motion.p className="text-sm text-zinc-300 max-w-xs mx-auto text-center">
        Bet on content creators' milestones.
      </motion.p>

      <Link href="/markets">
        <Button className="px-6 py-2 bg-neo-green text-black hover:bg-neo-green/90">
          Explore Markets
        </Button>
      </Link>
    </div>
  </AuroraBackground>
);
