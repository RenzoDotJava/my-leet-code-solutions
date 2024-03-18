function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0])

  let count = 0;
  let currentArrow = -2147483649;

  for (let i = 0; i < points.length; i++) {

    if (currentArrow < points[i][0] || currentArrow > points[i][1]) {
      if (i + 1 === points.length) count++;
      else {
        if (points[i][1] < points[i + 1][1]) currentArrow = points[i][1];
        else currentArrow = points[i + 1][1];
        count++;
      }
    }
  }

  return count
};

//NOT MINE (BETTER SOLUTION)

/* function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[0] - b[0]);

  let arrows = 1;
  let end = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      arrows++;
      end = points[i][1];
    } else {
      end = Math.min(end, points[i][1]);
    }
  }

  return arrows;
}; */

export default findMinArrowShots;