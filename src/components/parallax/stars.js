/**
 * <h1> Generate stars and sort them </h1>
 * this function is needed to don't stop the execution of the code
 * */
export const createAndSortStars = async (doneStars, ctx) => {
  doneStars.current = await _generateStars(ctx, 100);
};

/**
 * <h1> Generate stars method</h1>
 * generates star's array;
 * each star gets:
 * random X, Y coordinates in range of width and height,
 * random radius
 * random color
 * @param ctx  current context
 * @param count - quantity of stars
 * @return [] array sorted promise, sorted to display small stars faster than big one
 *
 * */
export const _generateStars = async (ctx, count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const rndX = Math.round(Math.random() * ctx.canvas.width);
    const rndY = Math.round(Math.random() * ctx.canvas.height);
    const radius = Math.random();
    const rndC = _randomStarColor();
    stars.push({ x: rndX, y: rndY, radius: radius * 3, color: rndC });
  }
  return stars.sort((a, b) => a.radius - b.radius); // sort is for draw small stars behind big one
};

/**
 * <h1> Generate stars color</h1>
 * possible color for star is from pink to red
 * @return color of star
 * */
const _randomStarColor = () => {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const r = randomNumber(136, 213);
  const g = randomNumber(38, 78);
  const b = randomNumber(87, 174);
  return `rgb(${r}, ${g}, ${b})`;
};

/**
 * <h1>draws a single star </h1>
 * draws a star in particular coordinates, fill that star
 * @param ctx current context
 * @param x coord
 * @param y coord
 * @param radius size of circle
 * @param color size of circle
 * */
const _drawStar = (ctx, x, y, radius, color) => {
  ctx.fillStyle = color; //sets a color that will be painted
  ctx.beginPath(); // drawing begins
  ctx.arc(x, y, radius, 0, Math.PI * 2, false); // draws a circle in specific coords
  ctx.fill(); //fills the circle with a specific color
};

/**
 * <h1>is responsible for updating the position and movement of the star.</h1>
 * @param ctx current context
 * @param mouseRef current position of star
 * @param randVelRef random speeds of star
 * @param star object with its own characteristics
 * */
export const updateStar = (ctx, mouseRef, randVelRef, star) => {
  const { x: randX, y: randY } = randVelRef.current;
  _drawStar(ctx, star.x, star.y, star.radius, star.color); //draw star

  //calculation speed of star
  let velX = (mouseRef.current.x - ctx.canvas.width / 2) * star.radius * 0.001;
  let velY = (mouseRef.current.y - ctx.canvas.height / 2) * star.radius * 0.001;

  if (mouseRef.current.x || mouseRef.current.y) {
    // If mouseRef.current.x or mouseRef.current.y have a value (the mouse cursor is in the browser window),
    // then the position of the star changes based on the velocities of velX and velY.
    star.x += velX;
    star.y += velY;
  } else {
    // If mouseRef.current.x or mouseRef.current.y does not matter (the mouse cursor is outside the browser window),
    // then the star's position is changed using the random rates of randX and randY.
    star.x += randX;
    star.y += randY;
  }
  if (star.x - star.radius > ctx.canvas.width) {
    // Якщо зірка виходить праву межу полотна (star.x - star.radius > ctx.canvas.width), вона переміщається на ліву межу полотна (star.x = -star.radius).
    star.x = -star.radius;
  }
  if (star.y - star.radius > ctx.canvas.height) {
    // Якщо зірка виходить за нижню межу полотна (star.y - star.radius > ctx.canvas.height), вона переміщається на верхню межу полотна (star.y = -star.radius).
    star.y = -star.radius;
  }
  if (star.x + star.radius < 0) {
    // Якщо зірка виходить за ліву межу полотна (star.x + star.radius < 0), вона переміщається на праву межу полотна (star.x = ctx.canvas.width + star.radius).
    star.x = ctx.canvas.width + star.radius;
  }
  if (star.y + star.radius < 0) {
    // Якщо зірка виходить за верхню межу полотна (star.y + star.radius < 0), вона переміщається на нижню межу полотна (star.y = ctx.canvas.height + star.radius).
    star.y = ctx.canvas.height + star.radius;
  }
};
