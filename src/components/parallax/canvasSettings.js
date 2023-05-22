/*const _updateCanvasWidth = (canvas) => {
  const computedStyle = window.getComputedStyle(canvas);
  canvas.width = parseInt(computedStyle.width, 10);
};*/
/**
 * <h1>handles screen resizes</h1>
 * sets initial size, and runs every time when user changes the screen size
 * */
export const handleResize = (canvas) => {
  canvas.width = parseInt(window.getComputedStyle(canvas).width, 10); // gets the width of parallax from scss
  canvas.height = parseInt(window.getComputedStyle(canvas).height, 10); // gets the height of parallax from scss
};

/**
 * <h1>set center for x,y</h1>
 *  calculates current mouse position from a center
 *  @param mouseRef - thing to persist mouse position between reloads
 *  @param e - event needs to get current x,y position
 * */
export const handleMouseMove = (mouseRef, e) => {
  const centerX = 10;
  // console.log(centerX, mouseRef.current.x);
  const centerY = 400;
  // console.log(centerY, mouseRef.current.y);
  // console.log(centerY);
  mouseRef.current.x = e.clientX - centerX;
  mouseRef.current.y = e.clientY - centerY;
};

/*  function that is needed for drawing line from center of the screen
        const drawLine = () => {
          if (mouseRef.current.clicked) {
            ctx.strokeStyle = "hsl(100,100%,50%)";
            ctx.beginPath();
            ctx.moveTo(ctx.canvas.width / 2, ctx.canvas.height / 2);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.stroke();
          }
        };*/
