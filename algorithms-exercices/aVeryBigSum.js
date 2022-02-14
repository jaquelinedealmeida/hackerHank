function aVeryBigSum(ar) {
  let sum = 0;
   for (let index = 0; index < ar.length; index += 1) {
     sum = sum + ar[index];
   };
   return sum;
 };