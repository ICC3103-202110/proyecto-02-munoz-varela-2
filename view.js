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
    const {temp} = model
    const {max} = model
    const {min} = model
    const {input2} = model

    valor = []
    for (let k =0;k<name_city.length;k++){
        valor.push({"name": name_city[k],"temp": temp[k],"max": max[k],"min": min[k]}) 
    }
    console.log(input2)
    return valor
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
            type: 'input', 
            message: 'Location?',
            choices: name_city
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
    inputForm3
}