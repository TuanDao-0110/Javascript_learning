function logAtMost10(n)
{
  for (let i = 1; i <= Math.min(n, 10); i++)
  {
    console.log(i);
  }
}
// O(10) ==> O(1)
console.log(logAtMost10(11))