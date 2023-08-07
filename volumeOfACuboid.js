class Kata {
    static getVolumeOfCuboid(length, width, height) {
      // your code here
      //1 - calculer le volume du cuboïde
        let volume = length * width * height;
        //2 - retourner le volume
        return volume;
    }
  }

    console.log(Kata.getVolumeOfCuboid(1, 2, 2));