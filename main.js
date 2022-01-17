window.addEventListener('DOMContentloaded', (event) => {
    getVisitCount();
})

const functionApi = '';

const getVisitCount = () => {
    let count = 0;
    fetch(functionApi).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById('counter').innerHTML = count;
    }).catch(function(error) => {
        console.log("Error: " + error);
    });
    return count;
}    