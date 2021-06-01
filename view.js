const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
let valor = []

function getTitle(){
    return chalk.yellow( // color.
        figlet.textSync(
            'Weather App', // mesage.
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){ // table.
    const {cities_info} = model
    return cities_info
}

function inputForm(model){
    const {input1} = model
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'list',
            default: input1,
            message: 'Select action: ',
            choices: ['Add city', 'Update city','Delete city']
        }
    ])
}

function inputForm2(){
    return inquirer.prompt([
        {
            name: 'input2',
            type: 'input', 
            message: 'Location?',
        }
    ])
}

function inputForm3(model){
    const {cities} = model
    return inquirer.prompt([
        {
            name: 'input3',
            type: 'list', 
            message: 'Update city',
            choices: cities
        }
    ])
}


function inputForm4(model){
    const {cities} = model
    return inquirer.prompt([
        {
            name: 'input4',
            type: 'list', 
            message: 'Delete city',
            choices: cities
        }
    ])
}


// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    inputForm2,
    inputForm3,
    inputForm4

}