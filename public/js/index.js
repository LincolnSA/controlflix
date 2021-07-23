
const input = document.querySelector('nav input')
const allCards = document.querySelectorAll('.accordion-item')

input.addEventListener('keydown', () => {

    allCards.forEach(card => {

        const inputData = input.value.toUpperCase()
        const buttonData = card.querySelector('button').innerHTML.toUpperCase()

        if (!buttonData.includes(inputData)) {
            card.style.display = 'none'
        } else {
            card.style.display = 'block'
        }

    });

})

input.addEventListener('click', () => {

    const inputData = input.value.toUpperCase()

    if (!inputData == "") {

        allCards.forEach(card => {
            card.style.display = "block"
        })

    }

})