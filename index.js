import { franc, francAll } from 'franc'
import { default as langs } from 'langs'
import { default as colors } from 'colors'

const input = process.argv[2];
const langCode = franc(input);
if (langCode === 'und') {
    console.log(colors.red("Sorry, the language cannot be determined from your input."));
} else {
    const langauge = langs.where("3", langCode);
    if (langauge !== undefined) {
        console.log(colors.green(langauge.name));
    } else {
        console.log(colors.red("Sorry, the language cannot be determined from your input."));
    }
}