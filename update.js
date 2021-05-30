Math.random();  
function fname(input1,input2,model){
    if (input1 === 'Add city'){
        model.name_city.push(input2.input2)//pushing the city
        return model.name_city
    } else {
        return model.name_city
    }
}
function ftemp(input1,input2,model){
    if (input1 === 'Add city'){
        model.temp.push((Math.random() * (30 - 0) + 0).toFixed(2))//randomvalue
        return model.temp
    } else {
        return model.temp
    }
}
function fmax(input1,input2,model){
    if (input1 === 'Add city'){
        model.max.push((Math.random() * (30 - 0) + 0).toFixed(2))//randomvalue
        return model.max
    } else {
        return model.max
    }
}
function fmin(input1,input2,model){
    if (input1 === 'Add city'){
        model.min.push((Math.random() * (30 - 0) + 0).toFixed(2))//randomvalue
        return model.min
    } else{
        return model.min
    }
}

function update(input1,input2,input3,input4,model){
    console.log(input2.input2)
    return {
        ...model,
        input1: input1,
        input2: input2,
        input3: input3,
        input4: input4,
        name_city: fname(input1,input2,model),
        temp: ftemp(input1,input2,model),
        max: fmax(input1,input2,model),
        min: fmin(input1,input2,model),
    } 
}

module.exports = {
    update
}
