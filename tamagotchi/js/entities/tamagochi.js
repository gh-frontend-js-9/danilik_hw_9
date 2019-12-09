class Tamagochi {
    constructor(type, food, clean, happiness) {
        this._type = type;
        this._clean = clean;
        this._food = food;
        this._happiness = happiness;
    }

    get type() {
        return this._type;
    }

    set type(newValue) {
        this._type = newValue;
    }

    get clean() {
        return this._clean;
    }

    set clean(newValue) {
        this._clean = newValue;
    }

    get food() {
        return this._food;
    }

    set food(newValue) {
        this._food = newValue;
    }

    get happiness() {
        return this._happiness;
    }

    set happiness(newValue) {
        this._happiness = newValue;
    }

}