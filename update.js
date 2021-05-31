Math.random(); 
 
function fname(input1,input2,input3,input4,model){
    if (input1 === 'Add city'){
        model.name_city.push(input2.input2)//pushing the city
        return model.name_city
    } else {
        if (input1 === 'Update city'){
            return model.name_city
        } else{
            console.log(model.name_city) //lista
            console.log(input4.input4) //elemento
            model.name_city.splice(0,1)
            return model.name_city
        }
    }
}
function ftemp(input1,input2,input3,input4,model){
    if (input1 === 'Add city'){
        model.temp.push((Math.random() * (30 - 0) + 0).toFixed(2))//randomvalue
        return model.temp
    } else {
        if (input1 === 'Update city'){
            return model.temp
        } else{
            model.temp.splice(0,1)
            return model.temp
        }
    }
}
function fmax(input1,input2,input3,input4,model){
    if (input1 === 'Add city'){
        model.max.push((Math.random() * (30 - 0) + 0).toFixed(2))//randomvalue
        return model.max
    } else {
        if (input1 === 'Update city'){
            return model.max
        } else{
            model.max.splice(0,1)
            return model.max
        }
    }
}
function fmin(input1,input2,input3,input4,model){
    if (input1 === 'Add city'){
        model.min.push((Math.random() * (30 - 0) + 0).toFixed(2))//randomvalue
        return model.min
    } else {
        if (input1 === 'Update city'){
            return model.min
        } else{
            model.min.splice(0,1)
            return model.min
        }
    }
}

function update(input1,input2,input3,input4,model){
    return {
        ...model,
        input1: input1,
        input2: input2,
        input3: input3,
        input4: input4,
        name_city: fname(input1,input2,input3,input4,model),
        temp: ftemp(input1,input2,input3,input4,model),
        max: fmax(input1,input2,input3,input4,model),
        min: fmin(input1,input2,input3,input4,model),
    } 
}

module.exports = {
    update
}
