function countBy(x, n) {
    let z = [];
    
    // boucle qui décompte les multiples de x pendant n fois
    for (let i = 1; i <= n; i++) {
      z.push(x*i);
    }
    
    return z;
  }

console.log(countBy(2, 5));