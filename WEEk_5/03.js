class car {
    constructor (Modelname,ModelYear,type,price)
    {
        this.Modelname = Modelname;
        this.ModelYear = ModelYear;
        this.type = type;
        this.price = price;
    }
    makeNoise() {
        console.log(`${this.Modelname}BBANGBBANG`);
    }
    Year() {
        console.log(`${this.ModelYear}b`);
    }

}


const car1 = new car("홍길동", "30","인력거","3000");
const car2 = new car("홍길순", "25","인력거","3000");
const car3 = new car("엄복동", "28","인력거","3000");

car1.makeNoise();
car2.makeNoise();
car3.makeNoise();

car1.Year();
car2.Year();
car3.Year();