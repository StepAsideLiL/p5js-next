import P5js from "@/components/p5js";
import Coordinates from "@/components/p5js/01_Coordinates";
import Interactivity1 from "@/components/p5js/02_interactivity1";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 py-10">
      <Interactivity1 />

      <Coordinates />

      <P5js />
    </main>
  );
}
