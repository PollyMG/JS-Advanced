function getInfo() {
    // get all elements by ID
    // fetch data from server
    // forEach bus create li element with text
    // append li tags to ul

    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let inputElement = document.getElementById('stopId');
    let ulElements = document.getElementById('buses');
    let divElement = document.getElementById('stopName');

    fetch(`${baseUrl}/${inputElement.value}`)
        .then(response => response.json())
        .then(data => {
            let buses = data.buses;
            let name = data.name;

            divElement.textContent = name;
            ulElements.innerHTML = '';
            Object.keys(buses).forEach(bus => {
                let liElement = document.createElement('li');
                liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`
                ulElements.appendChild(liElement)
            })
    })
}