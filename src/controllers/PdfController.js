const connection = require('../database/connection')
const puppeteer = require('puppeteer')
const generateDate = require('../utils/generateDate')

module.exports = {
    async download(req, res) {
        try {
            const { id } = req.params
            const browser = await puppeteer.launch()
            const page = await browser.newPage()

            await page.goto(`http://localhost:3000/usuarios/${id}/model-pdf`, {
                waitUntil: 'networkidle0'
            })

            const pdf = await page.pdf({
                printBackground: true,
                format: 'Letter'
            })

            await browser.close()

            res.contentType("application/pdf")

            return res.send(pdf)

        } catch (error) {
            console.log(error)
        }
    },
    async show(req, res) {
        try {
            const { id } = req.params

            const user = await connection('users').where('id', id).first()

            if (!user) {
                return res.status(400).json({ error: "No ONG found this ID." });
            }
            const date = generateDate()

            return res.render('model-pdf', { user, date })

        } catch (error) {
            console.log(error)
        }
    },
}