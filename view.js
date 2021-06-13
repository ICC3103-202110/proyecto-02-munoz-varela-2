const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

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
    const {tableInfo} = model
    return tableInfo
}

function noCitiesOptions(model){ //  No cities options menu.
    const {mainInput} = model
    return inquirer.prompt([
        {
            name: 'mainInput',
            type: 'list',
            default: mainInput,
            message: 'Select action: ',
            choices: ['Add city']
        }
    ])
}


function mainOptions(model){ // Main options menu.
    const {mainInput} = model
    return inquirer.prompt([
        {
            name: 'mainInput',
            type: 'list',
            default: mainInput,
            message: 'Select action: ',
            choices: ['Add city', 'Update city','Delete city']
        }
    ])
}

function addLocation(){ // Location to add.
    return inquirer.prompt([
        {
            name: 'addInput',
            type: 'input', 
            message: 'Location?',
        }
    ])
}

function updateLocation(model){ // Location to update.
    const {nameCities} = model
    return inquirer.prompt([
        {
            name: 'updateInput',
            type: 'list', 
            message: 'Update city',
            choices: nameCities
        }
    ])
}

function deleteLocation(model){ // Location to delete.
    const {nameCities} = model
    return inquirer.prompt([
        {
            name: 'deleteInput',
            type: 'list', 
            message: 'Delete city',
            choices: nameCities
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
    noCitiesOptions, 
    mainOptions,
    addLocation,
    updateLocation,
    deleteLocation
}