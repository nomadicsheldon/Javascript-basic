const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const cellsHorizontal = 3;
const cellsVertical = 3;
const width = window.innerWidth;
const height = window.innerHeight;

const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;

// create renderer
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false, // gives random color on shapes
    width,
    height,
  },
});

Render.run(render);

// create runner
const runner = Runner.create();
Runner.run(runner, engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
];

World.add(world, walls);

// Maze generation

// Helper
const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    const idx = Math.floor(Math.random() * counter);

    counter--;

    const temp = arr[counter];
    arr[counter] = arr[idx];
    arr[idx] = temp;
  }

  return arr;
};

// Making (cells * cells) matrix
const grid = Array(cellsVertical)
  .fill()
  .map(() => Array(cellsHorizontal).fill(false));

// making veritical blockers(if false i.e. you can't pass through it)
const verticals = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal - 1).fill(false));

// making Horizontal blockers(if false i.e. you can't pass through it)
const horizontals = Array(cellsVertical - 1)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const stepThroughCell = (row, column) => {
  // If i have visited the cell at [row, column], then return
  if (grid[row][column]) {
    return;
  }
  // Mark this cell as being visited
  grid[row][column] = true;
  // assemble randomly-ordered list of neighbors
  const neighbors = shuffle([
    [row - 1, column, "up"],
    [row, column + 1, "right"],
    [row + 1, column, "down"],
    [row, column - 1, "left"],
  ]);

  // For each neighbor...

  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;
    // 1. See if that neighbor is out of bounds
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextColumn < 0 ||
      nextColumn >= cellsHorizontal
    ) {
      continue;
    }

    // 2. If we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }

    // 3. Remove a wall from either horizontals or verticals
    if (direction === "left") {
      verticals[row][column - 1] = true;
    } else if (direction === "right") {
      verticals[row][column] = true;
    } else if (direction === "up") {
      horizontals[row - 1][column] = true;
    } else if (direction === "down") {
      horizontals[row][column] = true;
    }

    // 4. Visit that next cell
    stepThroughCell(nextRow, nextColumn);
  }
};

stepThroughCell(startRow, startColumn);

horizontals.forEach((row, rowIdx) => {
  row.forEach((open, columnIdx) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIdx * unitLengthX + unitLengthX / 2,
      rowIdx * unitLengthY + unitLengthY,
      unitLengthX,
      5,
      {
        label: "wall",
        isStatic: true,
        render: {
          fillStyle: "red",
        },
      }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIdx) => {
  row.forEach((open, columnIdx) => {
    if (open) {
      return;
    }

    const wall = Bodies.rectangle(
      columnIdx * unitLengthX + unitLengthX,
      rowIdx * unitLengthY + unitLengthY / 2,
      5,
      unitLengthY,
      {
        label: "wall",
        isStatic: true,
        render: {
          fillStyle: "red",
        },
      }
    );
    World.add(world, wall);
  });
});

// Goal

const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.7,
  unitLengthY * 0.7,
  {
    label: "goal",
    isStatic: true,
    render: {
      fillStyle: "green",
    },
  }
);

World.add(world, goal);

// Ball

const ball = Bodies.circle(
  unitLengthX / 2,
  unitLengthY / 2,
  Math.min(unitLengthX, unitLengthY) * 0.35,
  {
    label: "ball",
    render: {
      fillStyle: "blue",
    },
  }
);
World.add(world, ball);

document.addEventListener("keydown", (event) => {
  const { x, y } = ball.velocity;
  if (event.keyCode === 87) {
    // w
    Body.setVelocity(ball, { x, y: y - 5 });
    // console.log("Move up");
  }

  if (event.keyCode === 68) {
    // D
    Body.setVelocity(ball, { x: x + 5, y });
    // console.log("Move right");
  }

  if (event.keyCode === 83) {
    // s
    Body.setVelocity(ball, { x, y: y + 5 });
    // console.log("Move down");
  }

  if (event.keyCode === 65) {
    // A
    Body.setVelocity(ball, { x: x - 5, y });
    // console.log("Move left");
  }
});

// Win condition

Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];

    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      document.querySelector(".winner").classList.remove("hidden");
      world.gravity.y = 1;
      world.bodies.forEach((body) => {
        if (body.label === "wall") {
          Body.setStatic(body, false);
        }
      });
    }
  });
});
