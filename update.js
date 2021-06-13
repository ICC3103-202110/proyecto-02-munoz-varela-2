function update_table(mainInput,addInput,updateInput,deleteInput,model){
    if (mainInput === 'Add city'){
        var bla = {name: addInput.addInput,
            temp: model.apiInfo.data.main.temp,
            max: model.apiInfo.data.main.temp_max,
            min: model.apiInfo.data.main.temp_min}
        model.tableInfo.push(bla)
        model.nameCities.push(addInput.addInput)
        return model.tableInfo
    } else {
        if (mainInput === 'Update city'){
            var x =  model.tableInfo.filter(function(name) {
                return name.name == updateInput.updateInput;
            }); // x[0] its the full dictionary.

            // find the index in the list.
            const index = model.tableInfo.findIndex(value => value === x[0]); 
            var bla = {name: updateInput.updateInput,
                temp: model.apiInfo.data.main.temp,
                max: model.apiInfo.data.main.temp_max,
                min: model.apiInfo.data.main.temp_min}
            model.tableInfo.splice(index,1,bla)
            return model.tableInfo
        } else{ // 'Delete city'
            var x =  model.tableInfo.filter(function(name) {
                return name.name == deleteInput.deleteInput;
            });// x[0] its the full dictionary.

            // find the index in the list.
            const index = model.tableInfo.findIndex(value => value === x[0]);
            model.tableInfo.splice(index,1)
            model.nameCities.splice(index,1)
            return model.tableInfo
        }
    }
}

function update(mainInput,addInput,updateInput,deleteInput,model){
    return {
        tableInfo: update_table(mainInput,addInput,updateInput,deleteInput,
            model),
        nameCities: model.nameCities
    } 
}

module.exports = {
    update
}