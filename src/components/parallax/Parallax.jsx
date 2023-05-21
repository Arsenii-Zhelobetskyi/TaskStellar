import React, { useEffect, useRef } from "react";
import "./_parallax.scss";
const Parallax = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: undefined, y: undefined, clicked: false });
  const randVelRef = useRef({
    x: Math.random() * 5 - 2.5,
    y: Math.random() * 5 - 2.5,
  });

  let doneStars = useRef([]);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const handleMouseClick = () => {
      mouseRef.current.clicked = !mouseRef.current.clicked;
    };

    const handleMouseMove = (e) => {
      const centerX = 10;
      // console.log(centerX, mouseRef.current.x);
      const centerY = 400;
      console.log(centerY, mouseRef.current.y);
      // console.log(centerY);
      mouseRef.current.x = e.clientX - centerX;
      mouseRef.current.y = e.clientY - centerY;
    };
    const updateCanvasWidth = () => {
      canvas.width = window.innerWidth;
    };
    const fullScreen = () => {
      updateCanvasWidth();
      canvas.height = 333;
    };
    const handleResize = () => {
      fullScreen();
    };

    const drawStar = (x, y, radius, color) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false);
      ctx.fill();
    };

    const updateStar = (star) => {
      const { x: randX, y: randY } = randVelRef.current;
      drawStar(star.x, star.y, star.radius, star.color);

      let velX =
        (mouseRef.current.x - ctx.canvas.width / 2) * star.radius * 0.001;
      let velY =
        (mouseRef.current.y - ctx.canvas.height / 2) * star.radius * 0.001;

      if (mouseRef.current.x || mouseRef.current.y) {
        star.x += velX;
        star.y += velY;
      } else {
        star.x += randX;
        star.y += randY;
      }

      if (star.x - star.radius > ctx.canvas.width) {
        star.x = -star.radius;
      }
      if (star.y - star.radius > ctx.canvas.height) {
        star.y = -star.radius;
      }
      if (star.x + star.radius < 0) {
        star.x = ctx.canvas.width + star.radius;
      }
      if (star.y + star.radius < 0) {
        star.y = ctx.canvas.height + star.radius;
      }
    };

    const drawBackground = () => {
      ctx.fillStyle = "#0D0D0D";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    const animate = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      drawBackground();
      for (let i = 0; i < doneStars.current.length; i++) {
        updateStar(doneStars.current[i]);
      }
      // drawLine();
      animationFrameId = requestAnimationFrame(animate);
    };
    /*
    const drawLine = () => {
      if (mouseRef.current.clicked) {
        ctx.strokeStyle = "hsl(100,100%,50%)";
        ctx.beginPath();
        ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
        ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
        ctx.stroke();
      }
    };*/

    const instantiateStars = async (count) => {
      let stars = [];
      for (let i = 0; i < count; i++) {
        let rndX = Math.round(Math.random() * ctx.canvas.width);
        let rndY = Math.round(Math.random() * ctx.canvas.height);
        let radius = Math.random();
        // let rndC = `hsl(100,76%, ${Math.trunc(radius * 100)}%)`;
        let rndC = getRandomColorInRange();
        stars.push({ x: rndX, y: rndY, radius: radius * 2, color: rndC });
      }
      return stars.sort((a, b) => a.radius - b.radius);
    };
    /*    const getRandomColor = () => {
      const r = Math.round(Math.random() * 255);
      const g = Math.round(Math.random() * 255);
      const b = Math.round(Math.random() * 255);
      return `rgb(${r}, ${g}, ${b})`;
    };*/
    const getRandomColorInRange = () => {
      const minR = parseInt("A6", 16); // Минимальное значение красного компонента (в шестнадцатеричном формате)
      const maxR = parseInt("EF", 16); // Максимальное значение красного компонента (в шестнадцатеричном формате)
      const minG = parseInt("32", 16); // Минимальное значение зеленого компонента (в шестнадцатеричном формате)
      const maxG = parseInt("58", 16); // Максимальное значение зеленого компонента (в шестнадцатеричном формате)
      const minB = parseInt("C4", 16); // Минимальное значение синего компонента (в шестнадцатеричном формате)
      const maxB = parseInt("64", 16); // Максимальное значение синего компонента (в шестнадцатеричном формате)

      const r = Math.floor(Math.random() * (maxR - minR + 1) + minR);
      const g = Math.floor(Math.random() * (maxG - minG + 1) + minG);
      const b = Math.floor(Math.random() * (maxB - minB + 1) + minB);

      return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
    };

    const sortStars = async () => {
      doneStars.current = await instantiateStars(100);
    };

    fullScreen();
    sortStars();
    animate();

    window.addEventListener("resize", handleResize);
    // window.addEventListener("click", handleMouseClick);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      // window.removeEventListener("click", handleMouseClick);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <canvas className="parallax" ref={canvasRef} />;
};

export default Parallax;
