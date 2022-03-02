const employee = {
    name: "Rob",
    streetAddress: "140 East"
}

function updateEmployeeWithKeyAndValue(employee, key, value) { 
    return Object.assign({}, employee, {[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
employee[key] = value;
 return employee;
}





// function deleteFromEmployeeByKey(employee, key) {
//     return {...employee, ...{key}
// }
// }


function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}


// function  destructivelyDeleteFromEmployeeByKey(employee, key) {
//     return employee = "Jamie";
// }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee

}