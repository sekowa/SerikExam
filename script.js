const asyncFunction = async () => {

    let tabelUsers = document.querySelector('#users')
    let tabelHead = document.querySelector('#tabelHead')
    let tabelBody = document.querySelector('#tabelBody')

    const response = await fetch('https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users');
    const result = await response.json();
    console.log(result)

    const header = Object.keys(result[0])
    console.log(header)
    header.push('Edit Person', 'Delete Person')
    header.map(headerElement => {
        let th = document.createElement('th');
        th.innerText = headerElement;
        tabelHead.append(th)

        
    })

    result.map(bodyElement => {
        let tr = document.createElement('tr')
        tr.classList.add(`row-${bodyElement.id}`)
        let td = document.createElement('td')

        let tdCreatedAt = document.createElement('td')
        tdCreatedAt.innerText = bodyElement.createdAt
        tr.append(tdCreatedAt)

        let tdfirstName = document.createElement('td')
        tdfirstName.innerText = bodyElement.firstName
        tr.append(tdfirstName)

        let tdavatar = document.createElement('td')
        let imgAvatar = document.createElement('img') 
        imgAvatar.src = bodyElement.avatar
        tdavatar.append(imgAvatar)
        tr.append(tdavatar)

        let tdlastName = document.createElement('td')
        tdlastName.innerText = bodyElement.lastName
        tr.append(tdlastName)

        let tdcountry = document.createElement('td')
        tdcountry.innerText = bodyElement.country
        tr.append(tdcountry)

        let tdzip = document.createElement('td')
        tdzip.innerText = bodyElement.zip
        tr.append(tdzip)

        let tdcity = document.createElement('td')
        tdcity.innerText = bodyElement.city
        tr.append(tdcity)

        let tdphone = document.createElement('td')
        tdphone.innerText = bodyElement.phone
        tr.append(tdphone)

        let tdemail = document.createElement('td')
        tdemail.innerText = bodyElement.email
        tr.append(tdemail)

        let tdstatus = document.createElement('td')
        tdstatus.innerText = bodyElement.status
        tr.append(tdstatus)

        let tdid = document.createElement('td')
        tdid.innerText = bodyElement.id
        tr.append(tdid)

        let tdEdit = document.createElement('td')
        let tdDelete = document.createElement('td')

        let editLink = document.createElement('a')
        editLink.href = `updateForm.html?id=${bodyElement.id}`
        editLink.innerText = `Edit`
        tdEdit.append(editLink)
        tr.append(tdEdit)

        
        let btnDelete = document.createElement('button')
        btnDelete.onclick = () => {
            DeleteUser(bodyElement.id)
        }
        btnDelete.innerText = `Delete`
        tdDelete.append(btnDelete)
        tr.append(tdDelete)


        tr.append(td)
        tabelBody.append(tr)
    })

   

}
asyncFunction()

const DeleteUser = async (id) => {

        const response = await fetch(`https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
           
        })
        
        let deleteUser = document.querySelector(`.row-${id}`)
        deleteUser.remove()
}




// let status = function (response) {
    //     if (response.status !== 200) {
    //         return Promise.reject(new Error(response.statusText))
    //     }
    //     return Promise.resolve(response)
    // }
    // let json = function (response) {
    //     return response.json()
    // }

    // fetch('https://6296e8c014e756fe3b254bdd.mockapi.io/api/v1/users', {
    //     method: 'post',
    //     body: 'test=1'
    // })
    // .then(status)
    // .then(json)
    // .then(function(data){
    //     console.log('DATA: ', data)
    // })
    // .catch(function(error){
    //     console.log('ERROR: ', error)
    // })
