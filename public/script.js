const sendRequest = async () => {
    try {
        const requestMethod = document.getElementById('requestMethod').value;
        const submitButton = document.getElementById('submit-button')
        const endPoint = document.getElementById('endpoint').value;
        let bodyResponse = document.getElementById('floatingTextarea2').value;

        const response = await fetch(`http://localhost/${endPoint}`, {
            method: requestMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: bodyResponse || null
        });
        if (response) {
            const jsonResponse = await response.json();
            console.log(jsonResponse)
        }
    } catch (err) {
        console.log(err)
    }
}


const showData = () => {
    fetch('http://localhost/students').then(response => {
        if (!response.ok) {
            throw Error('Error')
        }
        return response.json();
    }).then(data => {
        document.getElementById('renderHTML').innerHTML = JSON.stringify(data);
    })
}

showData();