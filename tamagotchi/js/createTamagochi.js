class createTamagochi {
    createTamagochi(type) {
        let food = this.getRandomTamagochiStat();
        let clean = this.getRandomTamagochiStat();
        let happiness = this.getRandomTamagochiStat();
        const entity = new Tamagochi(type, food, clean, happiness);
        return entity;
    }        

    getRandomTamagochiStat(){
        let rand = Math.floor(Math.random() * (100 - 50) + 50);
        return rand;
    }

}

