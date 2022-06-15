let params = (new URL(document.location)).searchParams;
let id = params.get('id');

// let createdAt = document.querySelector('#createdAt')
let firstName = document.querySelector('#firstName')
// let avatar = document.querySelector('#avatar')
let lastName = document.querySelector('#lastName')
let country = document.querySelector('#country')
let zip = document.querySelector('#zip')
let city = document.querySelector('#city')
let phone = document.querySelector('#phone')
let email = document.querySelector('#email')
let personalStatus = document.querySelector('#status')

const createteNewUser = async () => {
    let firstName = document.querySelector('#firstName')

    try {
        const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
                country: country.value,
                zip: zip.value,
                city: city.value,
                phone: phone.value,
                email: email.value,
                personalStatus: personalStatus.value

            })
        })
        const content = await response.json()

    } catch (e) {
        alert(e)
        console.log('ERROR: ', e)
    }
}
