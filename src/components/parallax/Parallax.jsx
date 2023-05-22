import { useEffect, useRef } from "react";
import "./_parallax.scss";
import * as stars from "./stars.js";
import * as canvasSettings from "./canvasSettings.js";

function Parallax() {
  const canvasRef = useRef(null); // points to the canvas
  const mouseRef = useRef({ x: undefined, y: undefined }); // persist mouse coords
  const randVelRef = useRef({
    x: Math.random() * 5 - 2.5,
    y: Math.random() * 5 - 2.5,
  }); //random speed for stars, when the cursor is out of the screen

  let doneStars = useRef([]);
  useEffect(() => {
    const canvas = canvasRef.current; // for drawing
    const ctx = canvas.getContext("2d"); // for drawing
    let animationFrameId; // for stoping animation
    // const handleMouseClick = () => {
    //   mouseRef.current.clicked = !mouseRef.current.clicked;
    // };

    /**
     * <h1>drives a animation</h1>
     * */
    const animate = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // clears stars

      for (let i = 0; i < doneStars.current.length; i++) {
        stars.updateStar(ctx, mouseRef, randVelRef, doneStars.current[i]); //update each star position and movement
      }
      // drawLine();
      animationFrameId = requestAnimationFrame(animate); //request next animation, animationFrameId is stored, so we can stop animation
    };

    canvasSettings.handleResize(canvas); //initial calculation of screen size
    stars.createAndSortStars(doneStars, ctx); //creates stars
    animate(); //stars animation
    window.addEventListener("resize", () =>
      canvasSettings.handleResize(canvas)
    ); //watching for window-resizing
    // window.addEventListener("click", handleMouseClick);
    window.addEventListener("mousemove", (e) =>
      canvasSettings.handleMouseMove(mouseRef, e)
    ); // watching for mouse moves

    return () => {
      cancelAnimationFrame(animationFrameId); //ends animation
      window.removeEventListener("resize", () =>
        canvasSettings.handleResize(canvas)
      ); //delete all event listeners
      // window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("mousemove", (e) =>
        canvasSettings.handleMouseMove(mouseRef, e)
      );
    };
  }, []); //0 deps
  return <canvas className="parallax" ref={canvasRef} />;
}

export default Parallax;
