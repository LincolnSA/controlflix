const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        try {

            const users = await connection('users')

            return res.render('index', { users })

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

            return res.render('user/edit', { user })

        } catch (error) {
            console.log(error)
        }
    },

    async store(req, res) {
        try {

            const newUser = {
                ...req.body
            }

            await connection('users').insert(newUser)

            return res.redirect('/')

        } catch (error) {
            console.log(error)
        }
    },

    async update(req, res) {
        try {

            const { id } = req.params
            const updateUser = {
                ...req.body
            }

            await connection('users').where('id', id).update(updateUser)

            return res.redirect('/')

        } catch (error) {
            console.log(error)
        }
    },

    async showDelete(req, res) {
        try {
            const { id } = req.params

            const user = await connection('users').where('id', id).first()

            if (!user) {
                return res.status(400).json({ error: "No ONG found this ID." });
            }

            return res.render('user/delete', { user })

        } catch (error) {
            console.log(error)
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.params

            await connection('users').where('id', id).delete()

            return res.redirect("/")

        } catch (error) {
            console.log(error)
        }
    }
}