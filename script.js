let array = [];  

function updateDisplay() {  
    document.getElementById('arrayDisplay').innerText = JSON.stringify(array);  
}  

function addToArray() {  
    const input = document.getElementById('arrayInput').value;  
    if (input !== '') {  
        array.push(input);  
        updateDisplay();  
        document.getElementById('arrayInput').value = ''; // Clear the input  
    }  
}  

function pushValue() {  
    const input = prompt("Enter value to push:");  
    if (input !== null) {  
        array.push(input);  
        updateDisplay();  
    }  
}  

function popValue() {  
    if (array.length) {  
        array.pop();  
        updateDisplay();  
    } else {  
        alert('Array is already empty.');  
    }  
}  

function shiftValue() {  
    if (array.length) {  
        array.shift();  
        updateDisplay();  
    } else {  
        alert('Array is already empty.');  
    }  
}  

function unshiftValue() {  
    const input = prompt("Enter value to unshift:");  
    if (input !== null) {  
        array.unshift(input);  
        updateDisplay();  
    }  
}  

function spliceValue() {  
    const index = prompt("Enter the index to splice from:");  
    const deleteCount = prompt("Enter the number of elements to remove:");  
    const newValues = prompt("Enter new values separated by commas:");  

    if (index !== null && deleteCount !== null && newValues !== null) {  
        const newArray = newValues.split(',').map(val => val.trim());  
        array.splice(parseInt(index), parseInt(deleteCount), ...newArray);  
        updateDisplay();  
    }  
}  

function sliceValue() {  
    const start = prompt("Enter the start index for slice:");  
    const end = prompt("Enter the end index for slice:");  
    
    if (start !== null && end !== null) {  
        const slicedArray = array.slice(parseInt(start), parseInt(end));  
        alert("Sliced Array: " + JSON.stringify(slicedArray));  
    }  
}