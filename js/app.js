let button = document.querySelector('.dice')

button.addEventListener('click', () => {
fetch('https://api.adviceslip.com/advice')
.then((response) => response.json())
.then((data) => {
    console.log(data)
        document.getElementById('quote').innerText = `${data.slip.advice}`
        document.getElementById('advice').innerText = `${data.slip.id}`
    })
})