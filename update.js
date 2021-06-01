Math.random(); 

function upcities(input1,input2,input3,input4,model){
    if (input1 === 'Add city'){
        var bla = {name: input2.input2,
            temp: (Math.random() * (30 - 0) + 0).toFixed(2),
            max: (Math.random() * (30 - 0) + 0).toFixed(2),
            min: (Math.random() * (30 - 0) + 0).toFixed(2)}
        model.cities_info.push(bla)
        model.cities.push(input2.input2)
        return model.cities_info
    } else {
        if (input1 === 'Update city'){
            var x =  model.cities_info.filter(function(name) {
                return name.name == input3.input3; // choised city for update.
            }); // x[0] its the full dictionary.

            // find the index in the list.
            const index = model.cities_info.findIndex(value => value === x[0]); 
            var bla = {name: input3.input3,
            temp: (Math.random() * (30 - 0) + 0).toFixed(2),
            max: (Math.random() * (30 - 0) + 0).toFixed(2),
            min: (Math.random() * (30 - 0) + 0).toFixed(2)}
            model.cities_info.splice(index,1,bla)
            return model.cities_info
        } else{ // 'Delete city'
            var x =  model.cities_info.filter(function(name) {
                return name.name == input4.input4;
            });// x[0] its the full dictionary.

            // find the index in the list.
            const index = model.cities_info.findIndex(value => value === x[0]);
            model.cities_info.splice(index,1)
            model.cities.splice(index,1)
            return model.cities_info
        }
    }
}

function update(input1,input2,input3,input4,model){

    return {
        cities_info: upcities(input1,input2,input3,input4,model),
        cities: model.cities
    } 
}

module.exports = {
    update
}