"use client";

import { NextReactP5Wrapper } from "@p5-wrapper/next";
import type { P5CanvasInstance, Sketch } from "@p5-wrapper/react";

export default function Coordinates() {
  // https://p5js.org/examples/structure-coordinates.html
  const sketch: Sketch = (p5: P5CanvasInstance) => {
    p5.setup = () => p5.createCanvas(720, 400);

    p5.draw = () => {
      p5.background(0);
      p5.noFill();

      p5.stroke(255);
      p5.point(p5.width * 0.5, p5.height * 0.5);
      p5.point(p5.width * 0.5, p5.height * 0.25);

      p5.stroke(0, 153, 255);
      p5.line(0, p5.height * 0.33, p5.width, p5.height * 0.33);

      p5.stroke(255, 153, 0);
      p5.rect(
        p5.width * 0.25,
        p5.height * 0.1,
        p5.width * 0.5,
        p5.height * 0.8,
      );
    };
  };

  return <NextReactP5Wrapper sketch={sketch} />;
}
