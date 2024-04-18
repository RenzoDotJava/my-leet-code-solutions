function islandPerimeter(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let perimeter = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        if ((i - 1 < 0 || grid[i - 1][j] === 0)) perimeter++
        if ((i + 1 >= rows || grid[i + 1][j] === 0)) perimeter++
        if ((j - 1 < 0 || grid[i][j - 1] === 0)) perimeter++
        if ((j + 1 >= cols || grid[i][j + 1] === 0)) perimeter++
      }
    }
  }
  return perimeter;
}

export default islandPerimeter;