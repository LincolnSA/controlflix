require('dotenv').config()
require('../src/server')

const { app, BrowserWindow } = require('electron')
const path = require('path')

const APP_URL = process.env.APP_URL
const APP_PORT = process.env.APP_PORT
const URL = APP_URL + APP_PORT

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        show: false,
        titleBarStyle: "hidden",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        backgroundColor: '#000',

        icon: path.resolve(__dirname, "..", "public", "img", 'icon-electron.jpg')
    })

    mainWindow.removeMenu()

    mainWindow.loadURL(URL)

    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
