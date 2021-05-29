const {inputForm,inputForm2} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        // I/O
        //console.clear()
        console.log(title)
        if (table.length == 0){
            console.log("NO CITIES")
        }
        else{
            printTable(table)
        }
        // FORM (Ask user input1 and input2)
        const {input3,input4} = model
        const {input1} = await inputForm(model) //here you put the names
                                                      //of the ask`s in views.
        const {input2} = await inputForm2()
        
        
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

