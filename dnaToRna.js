function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence

  // create a variable to hold the RNA sequence
  var rna = "";

  // loop through the dna sequence
  for (var i = 0; i < dna.length; i++) {
    // if the current letter is a T, replace it with U
    if (dna[i] === "T") {
      rna += "U";
    } else {
      // if not, just add the current letter to the rna sequence
      rna += dna[i];
    }
  }

  // return the rna sequence
  return rna;
}
