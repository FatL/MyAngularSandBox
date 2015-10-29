var Hero = (function () {
    function Hero(name, type) {
        this.id = Hero.cpt;
        Hero.cpt++;
        this.name = name;
        this.type = type;
    }
    Hero.cpt = 0;
    return Hero;
})();
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map