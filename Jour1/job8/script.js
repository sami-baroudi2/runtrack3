function nombresPremiers(one) {
  for (let i = 2; i < one; i++) {
    if (one % i === 0) {
      return false;
    }
  }
  return true;
}
function sommesNombresPremiers(one, two) {
  if (nombresPremiers(one) == true && nombresPremiers(two) == true) {
    let result = one + two;
    console.log(result);
  } else {
    return false;
  }
}
console.log(sommesNombresPremiers(7, 23));
