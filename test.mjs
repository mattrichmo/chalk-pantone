import chalk from './chalk-pantone.mjs';
import { pantone } from './chalk-pantone.mjs';



export const showColors = () => {
    let colors = '';
    for (const color in chalk.pantone) {
        colors += chalk.pantone[color](color) + ' ';
    }
    console.log(colors);
}

showColors();
