"use client";

import { NextReactP5Wrapper } from "@p5-wrapper/next";
import { Sketch } from "@p5-wrapper/react";

export default function Interactivity1() {
  // https://p5js.org/examples/hello-p5-interactivity-1.html
  const sketch: Sketch = (p5) => {
    let red: any, green: any, blue: any;
    let a: any = 200;

    p5.setup = () => {
      p5.createCanvas(720, 400);

      red = p5.random(255);
      green = p5.random(255);
      blue = p5.random(255);
    };

    p5.draw = () => {
      p5.background(127);
      p5.strokeWeight(2);
      p5.stroke(red, green, blue);
      p5.fill(red, green, blue, 127);
      p5.ellipse(p5.width * 0.5, p5.height * 0.5, a);
    };

    p5.mousePressed = () => {
      let d = p5.dist(p5.mouseX, p5.mouseY, p5.width * 0.5, p5.height * 0.5);
      if (d < a / 2) {
        red = p5.random(255);
        green = p5.random(255);
        blue = p5.random(255);
      }
    };
  };

  return <NextReactP5Wrapper sketch={sketch} />;
}
