// chalk-pantone.js
import chalk from 'chalk';

export const pantone = {
    absoluteZero: '#0048BA',
    acidGreen: '#B0BF1A',
    aero: '#7CB9E8',
    africanViolet: '#B284BE',
    airSuperiorityBlue: '#72A0C1',
    alabaster: '#EDEAE0',
    aliceBlue: '#F0F8FF',
    alloyOrange: '#C46210',
    almond: '#EFDECD',
    amaranth: '#E52B50',
    amber: '#FFBF00',
    amethyst: '#9966CC',
    antiqueBrass: '#CD9575',
    antiqueBronze: '#665D1E',
    antiqueRuby: '#841B2D',
    antiqueWhite: '#FAEBD7',
    aoEnglish: '#008000',
    appleGreen: '#8DB600',
    apricot: '#FBCEB1',
    aqua: '#00FFFF',
    aquamarine: '#7FFFD4',
    arcticLime: '#D0FF14',
    armyGreen: '#4B5320',
    artichoke: '#8F9779',
    arylideYellow: '#E9D66B',
    ashGray: '#B2BEB5',
    asparagus: '#87A96B',
    atomicTangerine: '#FF9966',
    auburn: '#A52A2A',
    aureolin: '#FDEE00',
    avocado: '#568203',
    azure: '#007FFF',
    babyBlue: '#89CFF0',
    babyBlueEyes: '#A1CAF1',
    babyPink: '#F4C2C2',
    babyPowder: '#FEFEFA',
    bakerMillerPink: '#FF91AF',
    bananaMania: '#FAE7B5',
    barbiePink: '#DA1884',
    barnRed: '#7C0A02',
    battleshipGrey: '#848482',
    bazaar: '#98777B',
    beauBlue: '#BCD4E6',
    beaver: '#9F8170',
    begonia: '#FA6E79',
    beige: '#F5F5DC'
};

const pantoneFunctions = {};

for (const color in pantone) {
    pantoneFunctions[color] = (text) => chalk.hex(pantone[color])(text);
}

// Attach Pantone themes to Chalk
chalk.pantone = pantoneFunctions;

export default chalk;
