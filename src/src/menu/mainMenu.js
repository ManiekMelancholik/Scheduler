const {dataMenu} = require("./data.js")
const {fileMenu} = require("./file.js")
const {preferencesMenu} = require("./preferences.js")

const mainMenu = [
    {
        label:"App",
        submenu:[
            { role: 'minimize' },
            { role: 'zoom' },
            ...(process.platform === 'darwin'
              ? [
                  { type: 'separator' },
                  { role: 'front' },
                  { type: 'separator' },
                  { role: 'window' }
                ]
              : [
                  { role: 'close' }
                ])
          ]
    },
    dataMenu,
    fileMenu,
    preferencesMenu
]
module.exports={mainMenu};