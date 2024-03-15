function numSubarraysWithSum(nums: number[], goal: number): number {
  let count = 0;
  let sum, j, subCount;

  for (let i = 0; i < nums.length; i++) {
    j = i;
    sum = 0;
    subCount = 0;

    while (1) {
      sum += nums[j];
      subCount++;
      j++;
      if (sum === goal) count++;
      if (j === nums.length || sum > goal) break;
    }
  }

  return count;
};


/* Better solution (not mine) Sliding Window */

/*
  Es mejor calcular la diferencia entre don una funcion que devuelvan todas las opciones posibles,
  que calcular directamente una funcion que devuelva la cantidad exacta.

  Es mejor crear una funcion que devuelva la cantidad de subarrays que sumen una cantidad menor o igual a la meta
  si el goal = 3, entonces abarcaria [3, 2 ,1]. Entonces para obtener la cantidad exacta de subarrays que sumen 3, se resta la
  funcion que devueva la cantidad de subarrays que sumen una cantidad menor o igual a un goal = 2, que abarcaria [2, 1].
*/

/* function numSubarraysWithSum(nums: number[], goal: number) {
  return atmostK(nums, goal) - atmostK(nums, goal - 1);
}

function atmostK(nums: number[], goal: number): number {
  let i = 0;
  let j = 0;
  let sum = 0;
  let ans = 0;

  while (i < nums.length) {
    sum += nums[i];

    while (j <= i && sum > goal) {
      sum -= nums[j];
      j++;
    }
    ans += i - j + 1;
    i++;
  }

  return ans;
}; */

export default numSubarraysWithSum;