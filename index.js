const { 
  app, 
  BrowserWindow, 
  screen,
  Menu 
} = require('electron')
const path = require('path')
const {mainMenu} = require("./src/src/menu/mainMenu")
Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenu));
const isDev = require("electron-is-dev")
const createWindow = () => {

  var mainScreen = screen.getPrimaryDisplay().size;
  const mainWindow = new BrowserWindow({
    width: mainScreen.width,
    height: mainScreen.height,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  
  if(isDev) mainWindow.loadURL("http://localhost:3000")
  else mainWindow.loadFile("src/build/index.html")

  mainWindow.webContents.openDevTools();
  mainWindow.on('ready-to-show', ()=> {mainWindow.show(); mainWindow.maximize();})
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
     if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
