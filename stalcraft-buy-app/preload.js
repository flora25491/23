const { contextBridge, clipboard } = require('electron');
contextBridge.exposeInMainWorld('stalcraftClipboard', {
  writeText: (value) => clipboard.writeText(String(value ?? ''))
});
