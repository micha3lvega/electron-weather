const { app, BrowserWindow, Menu } = require("electron");
const path = require("node:path");

// Metodo para cargar la vista del index.html
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "./images/icons8-sol-64.png",
    transparent: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");

};

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
