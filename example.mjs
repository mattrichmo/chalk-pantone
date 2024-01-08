import chalk from './chalk-pantone.mjs';

export const showColors = () => {

    console.log(`\n\n\n\n`)
    console.log(chalk.pantone.bgAuburn('bgAuburn'));
    console.log(chalk.pantone.aureolin('aureolin'));
    console.log(chalk.pantone.bgAureolin('bgAureolin'));
    console.log(chalk.pantone.avocado('avocado'));
    console.log(chalk.pantone.bgAvocado('bgAvocado'));
    console.log(chalk.pantone.azure('azure'));
    console.log(chalk.pantone.bgAzure('bgAzure'));
    console.log(chalk.pantone.babyBlue('babyBlue'));
    console.log(chalk.pantone.bgBabyBlue('bgBabyBlue'));
    console.log(`\n\n\n\n`)
}

showColors();