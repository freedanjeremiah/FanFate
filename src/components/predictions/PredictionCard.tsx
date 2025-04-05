import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Prediction } from "@/types/market";

export function PredictionCard({ prediction, onClaim, isClaiming }: { prediction: Prediction; onClaim: (prediction: Prediction) => Promise<void>; isClaiming: boolean }) {
  const calcPL = (p: Prediction) => (p.prediction - p.currentProbability) * 1000;

  return (
    <motion.div whileHover={{ y: 10, x: 10, filter: "invert(1) hue-rotate(20deg)" }} className="p-shadow p-6 w-full mb-6 flex flex-col items-center rounded bg-black text-white">
      <h2 className="text-xl font-semibold mb-4">{prediction.marketTitle}</h2>
      <div className="grid grid-cols-2 gap-4 mb-4 mt-auto w-full">
        {[{ label: "Your Prediction", value: prediction.prediction }, { label: "Current Market", value: prediction.currentProbability }].map(({ label, value }, i) =>
          <div key={i} className={`p-3 ${i ? "bg-blue-500/20" : "bg-green-500/20"}`}>
            <div className="text-sm font-medium">{label}</div>
            <div className="text-lg font-bold text-${i ? "blue" : "green"}-700">{(value * 100).toFixed(1)}%</div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm mb-4 w-full">
        <div><span className="font-medium">Predicted On:</span> {prediction.timestamp}</div>
        <div><span className="font-medium">Resolves On:</span> {prediction.endDate}</div>
      </div>
      <div className="flex w-full justify-between text-sm border-t pt-4 border-zinc-700">
        <div><span className="font-medium">P/L:</span> ${calcPL(prediction).toFixed(2)}</div>
        <div><span className="font-medium">Position:</span> {prediction.position}</div>
      </div>
      <div className="flex w-full justify-between text-sm border-t pt-4 border-zinc-700">
        {prediction.resolved && <Button className="text-black" onClick={() => onClaim(prediction)} disabled={isClaiming}>Claim Winnings</Button>}
        <Link href={`/markets/${prediction.marketId}`}><Button className="text-black">View Market</Button></Link>
      </div>
    </motion.div>
  );
}
