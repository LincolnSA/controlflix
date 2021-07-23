const generateDate = () => {

    const months = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ]

    const date = new Date

    const currentDate = {
        day: date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`,
        month: months[date.getMonth() + 1],
        year: date.getFullYear()
    }

    return currentDate
}
module.exports = generateDate