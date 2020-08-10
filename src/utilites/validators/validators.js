export const inputLoginValidation = value => {
    let error;
    if (!value) {
        error = 'Field is Required';
    } else if (value !== "admin" && value !== "user") {
        error= `User not found`;
    } 

    return error;  
}
export const inputValidation = value => {
    let error;
    if (!value) {
        error = 'Field is Required';
    } 

    return error;  
}

export const inputNumberValidation = value => {
    let error;
    if (!value) {
        error = 'Field is Required';
    } else if (isNaN(Number(value))) {
        error = 'Insert the figure';
    } 

    return error;  
}
