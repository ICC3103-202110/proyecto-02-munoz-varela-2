Math.random(); 
 


function upcities(input1,input2,input3,input4,model){

    if (input1 === 'Add city'){
        var bla = {name_city: input2.input2,
            temp: (Math.random() * (30 - 0) + 0).toFixed(2),
            max: (Math.random() * (30 - 0) + 0).toFixed(2),
            min: (Math.random() * (30 - 0) + 0).toFixed(2)}
        model.name_city.push(bla)
        return model.name_city
    } else {
        if (input1 === 'Update city'){
            return model.name_city
        } else{
            var x =  model.name_city.filter(function(name) { //x[0] es el diccionario completo
                return name.name_city == input4.input4;
            });
            const index = model.name_city.findIndex(value => value === x[0]); //encuenta el index en mi lista
            model.name_city.splice(index,1)
            return model.name_city
        }
    }
}

function update(input1,input2,input3,input4,model){
    //console.log(model.name_city)
    //console.log(model.lit_city)
    return {
        name_city: upcities(input1,input2,input3,input4,model),
    } 
}

module.exports = {
    update
}
