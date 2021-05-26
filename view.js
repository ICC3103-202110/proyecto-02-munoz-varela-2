const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
let valor = []

function getTitle(){
    return chalk.yellow( //color.
        figlet.textSync(
            'Wheather App', //mesage.
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
            message: 'Select action: ',
            default: input1,
            choices: ['Add city', 'Update city','Delete city']
        },
        {
            name: 'input2',
            type: function({input1} = model){
                if(input1 == 'Add city'){
                    return 'input'
                } else {
                    return 'list'
                } 
            },
            message: function({input1} = model){
                if(input1 == 'Add city'){
                    return 'Location?'
                } else {
                    return 'other'
                } 
            },
            choices: ['Add city', 'Update city','Delete city']
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
    inputForm
}