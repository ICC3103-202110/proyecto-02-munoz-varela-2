function pushear(input2,model){
    model.name_city.push(input2)
    return model.name_city
}

function update(input1,input2,input3,input4,model){
    return {
        ...model,
        input1: input1,
        input2: input2,
        input3: input3,
        input4: input4,
        name_city: pushear(input2,model),
        temp: ['value'],
        max: ['value'],
        min: ['value'],
    } 
}

module.exports = {
    update
}
