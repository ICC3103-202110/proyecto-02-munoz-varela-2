const {inputForm,inputForm2,inputForm3,inputForm4} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        console.clear()
        console.log(title)
        if (model['cities_info'].length == 0){
            console.log("NO CITIES")
        }
        else{
            printTable(table)
        }
        // FORM (Ask user input1, input2, input3 and input4)
        let input2 = ''
        let input3 = ''
        let input4 = '' 
        const {input1} = await inputForm(model)
        if (input1 === 'Add city'){
            input2 = await inputForm2()
        } else {if (input1 === 'Update city'){
            input3 = await inputForm3(model)
        } else {
            input4 = await inputForm4(model)
        }
        }
        
        const updatedModel = update(input1,input2,input3,input4,model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}
module.exports = {
    app
}