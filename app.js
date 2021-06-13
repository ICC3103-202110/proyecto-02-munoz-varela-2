const {noCitiesOptions,mainOptions,addLocation,updateLocation,
    deleteLocation} = require('./view')
const {printTable} = require('console-table-printer')
const axios = require('axios') // import axios for take info from api.

// Impure.
async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        
        // Setting variables of inputs.
        let mainInput = ''
        let addInput = ''
        let updateInput = ''
        let deleteInput = '' 
        let info = ''

        console.clear()
        console.log(title)
        if (model['tableInfo'].length == 0){ //  check if some city exist in
            console.log("NO CITIES")         //  nameCities.
            mainInput = await noCitiesOptions(model)
        }
        else{
            printTable(table)
            mainInput = await mainOptions(model)
        }
        mainInput = mainInput.mainInput //  set correctly mainInput.

        if (mainInput === 'Add city'){
            while (true){
                addInput = await addLocation()
                try{
                    info = await(axios.get(`https://api.openweathermap.org/da`+
                    `ta/2.5/weather?q=${addInput.addInput}&units=metric&appid`+
                    `=1a25a393f909771caf207128cb17ecad`))
                    break
                } 
                catch(error){
                    console.log("City not found\n")
                }
            }
        } else {if (mainInput === 'Update city'){
            updateInput = await updateLocation(model)
            info = await(axios.get(`https://api.openweathermap.org/data/2.5/w`+
            `eather?q=${updateInput.updateInput}&units=metric&appid=1a25a393f`+
            `909771caf207128cb17ecad`))
        } else {
            deleteInput = await deleteLocation(model)
        }
        }
        model.apiInfo = info // set the apiInfo for be utilized in update.
        const updatedModel = update(mainInput,addInput,updateInput,deleteInput,
            model)
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