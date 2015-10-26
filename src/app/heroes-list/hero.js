var Hero = (function () {
    function Hero(name) {
        this.id = Hero.cpt;
        Hero.cpt++;
        this.name = name;
    }
    Hero.cpt = 0;
    return Hero;
})();
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map