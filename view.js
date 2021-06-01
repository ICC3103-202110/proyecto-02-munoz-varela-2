const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
let valor = []

function getTitle(){
    return chalk.yellow( //color.
        figlet.textSync(
            'Weather App', //mesage.
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){ //table.
    const {name_city} = model

    return name_city
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
    const {name_city} = model
    return inquirer.prompt([
        {
            name: 'input3',
            type: 'list', 
            message: 'Update city',
            choices: name_city
        }
    ])
}


function inputForm4(model){
    const {name_city} = model
    return inquirer.prompt([
        {
            name: 'input4',
            type: 'list', 
            message: 'Delete city',
            choices: ['a','b','c']
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