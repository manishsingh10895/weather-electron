"use strict";

let electron = require('electron');
let app = electron.app;
let path = require('path');
let url = require('url');
let fs = require('fs');
let Menu = electron.Menu;
let Tray = electron.Tray;
let ipcMain = electron.ipcMain;
let request = require('request');
let config = require('./config/config.js');
let server = require('./server');

let iconPath = path.join(__dirname, 'src/app/public/images/weather-icon.png');

let BrowserWindow = electron.BrowserWindow;

//System Tray Implementation
let tray; 
let makeTray = ()=> {
    tray = new Tray('weather-icon.png');
    // const contextMenu = Menu.buildFromTemplate([
    //     { label: 'Weather', type: 'radio', 'click': ()=> {console.log("Menu clicked")} }
    // ]);
    tray.on('click', (e) => {
        server.getLocation((err, city)=> { 
            if(err) console.log(err);
            console.log(city);
            mainWindow.send('tray-click', { city: city }) 
        } );
    });
    tray.setToolTip('Check your weather');
    // tray.setContextMenu(contextMenu);

};

// Tray ends

// mainWindow
let mainWindow;
app.on('ready', ()=> {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800
    });

    // Initalize System Tray
    makeTray();

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/src/public/index.html'),
        protocol: 'file:',
        slashes: true
    }));   

    // mainWindow.webContents.openDevTools();

    mainWindow.on('closed', ()=> {
        mainWindow = null;
    });
});