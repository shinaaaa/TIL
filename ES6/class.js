class Car {
    constructor(car) {
        this.name = car.name;
        this.price = car.price;
        this.year = car.year;
        console.log("생성되었어요.");

    };

    drive() {
        console.log("부릉부릉");
    };
};

const avante = new Car({ name: '아반떼', price: 2500, year: 2019 });
const morning = new Car({ name: '모닝', price: 1200, year: 2019 });

avante.drive();
morning.drive();

class SuperCar extends Car {
    constructor(options) {
        super(options); //규칙!
        console.log("슈퍼카가 생성됨.");
    }
    booster() {
        console.log("부아앙ㅇ아아아앙");
    }
}

const 벤틀리 = new SuperCar({ name: '벤틀리', price: 2000000000, year: 2019 });
벤틀리.drive();
벤틀리.booster();

//실습1 - RPG게임 개발 중...
class Monster {
    constructor(options) {
        this.name = options.name;
        this.health = 100;
    }
}

const 피카츄 = new Monster({ name: "피카츄" });
console.log(피카츄.name, " ", 피카츄.health);

//실습2
class Dinosaur extends Monster {
    constructor(options) {
        super(options);
    }
    몸통박치기(target) {
        target.health -= 10;
    };
};

const Tirano = new Dinosaur({ name: "Tirano" });

Tirano.몸통박치기(피카츄);
console.log(Tirano.name, " ", Tirano.health);
console.log(피카츄.name, " ", 피카츄.health);

