class Kapal {
    constructor(nama, jenis, panjang, lebar) {
      this.nama = nama;
      this.jenis = jenis;
      this.panjang = panjang;
      this.lebar = lebar;
    }
  
    infoKapal() {
      return `Kapal ${this.nama} merupakan jenis ${this.jenis} yang berukuran ${this.panjang} M x ${this.lebar}m.`;
    }
  
    displayDimensions() {
      console.log(`Panjang: ${this.panjang} M`);
      console.log(`Lebar: ${this.lebar} M`);
    }
  
    checkType() {
      console.log(`Jenis Kapal: ${this.jenis}`);
    }
  
    // **Method Baru 1: displayInfo**
    displayInfo() {
      console.log(`Nama Kapal: ${this.nama}`);
      console.log(`Jenis Kapal: ${this.jenis}`);
    }
  
    // **Method Baru 2: calculateArea**
    calculateArea() {
      console.log(`Luas Kapal: ${this.panjang * this.lebar} m^2`);
    }
  }
  
  class KapalFerry extends Kapal {
    constructor(nama, jenis, panjang, lebar, kapasitas) {
      super(nama, jenis, panjang, lebar);
      this.kapasitasPenumpang = kapasitas;
    }
  
    infoKapal() {
      return `${super.infoKapal()} Kapal ini memiliki kapasitas ${this.kapasitasPenumpang} orang.`;
    }
  
    displayCapacity() {
      console.log(`Kapasitas Penumpang: ${this.kapasitasPenumpang} orang`);
    }
  
    checkFerryType() {
      console.log(`Jenis Ferry: ${this.jenis}`);
    }
  }
  
  // **Subclass Baru 1: KapalPesiar**
  class KapalPesiar extends Kapal {
    constructor(nama, jenis, panjang, lebar, jumlahKabin) {
      super(nama, jenis, panjang, lebar);
      this.jumlahKabin = jumlahKabin;
    }
  
    infoKapal() {
      return `${super.infoKapal()} Kapal ini memiliki ${this.jumlahKabin} kabin.`;
    }
  
    displayCabinInfo() {
      console.log(`Jumlah Kabin: ${this.jumlahKabin}`);
    }
  
    checkLuxury() {
      console.log(`Kapal ini adalah kapal pesiar mewah`);
    }
  }
  
  // **Subclass Baru 2: KapalTunda**
  class KapalTunda extends Kapal {
    constructor(nama, jenis, panjang, lebar, dayaTunda) {
      super(nama, jenis, panjang, lebar);
      this.dayaTunda = dayaTunda;
    }
  
    infoKapal() {
      return `${super.infoKapal()} Kapal ini memiliki daya tunda ${this.dayaTunda} ton.`;
    }
  
    displayTowingInfo() {
      console.log(`Daya Tunda: ${this.dayaTunda} ton`);
    }
  
    checkTowingCapacity() {
      console.log(`Kapal ini dapat menunda kapal lain dengan daya tunda ${this.dayaTunda} ton`);
    }
  }
  
  const kapalFerry = new KapalFerry("Budiyono", "Ferry", 200, 100, 600);
  const kapalPenumpang = new Kapal("Budiyono Siregar", "Ferry", 200, 100);
  const kapalPesiar = new KapalPesiar("Titanic", "Kapal Pesiar", 300, 150, 1000);
  const kapalTunda = new KapalTunda("Tunda 1", "Kapal Tunda", 50, 20, 5000);
  
  console.log(kapalFerry.infoKapal());
  kapalFerry.displayDimensions();
  kapalFerry.displayCapacity();
  kapalFerry.checkFerryType();
  kapalFerry.displayInfo();
  kapalFerry.calculateArea();
  
  console.log(kapalPenumpang.infoKapal());
  kapalPenumpang.displayDimensions();
  kapalPenumpang.checkType();
  kapalPenumpang.displayInfo();
  kapalPenumpang.calculateArea();
  
  console.log(kapalPesiar.infoKapal());
  kapalPesiar.displayDimensions();
  kapalPesiar.displayCabinInfo();
  kapalPesiar.checkLuxury();
  kapalPesiar.displayInfo();
  kapalPesiar.calculateArea();
  
  console.log(kapalTunda.infoKapal());
  kapalTunda.displayDimensions();
  kapalTunda.displayTowingInfo();
  kapalTunda.checkT