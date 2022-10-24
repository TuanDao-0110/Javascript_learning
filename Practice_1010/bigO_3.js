function logAtMost5(n)
{
  for (let i = 1; i <= Math.min(5, n); i++)
  {    console.log(i);
  }
}
// O (1)
console.log(logAtMost5(10))
