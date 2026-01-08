<div align="center">

# 🚀 BookDev  
### FiveM Development Resource (Lua + NUI)

Modern FiveM resource for development & testing  
Designed for scalability, clean structure, and real-world usage

![FiveM](https://img.shields.io/badge/FiveM-cerulean-blue)
![Lua](https://img.shields.io/badge/Lua-5.4-blue)
![NUI](https://img.shields.io/badge/NUI-HTML%20%7C%20CSS%20%7C%20JS-orange)
![Status](https://img.shields.io/badge/status-active-success)

</div>

---

## ✨ Features
- 🎮 FiveM Client & Server Script (Lua)
- 🖥 Modern NUI (HTML / CSS / JavaScript)
- 🇹🇭 Full Thai language support via NUI
- ⌨️ Open / Close UI with keybinding (**F7**)
- ❌ Close UI with **ESC**
- 🧱 Clean structure ready for scaling
- 🧪 Perfect for learning & prototyping

---

## 📁 Project Structure
```text
bookdev/
├─ fxmanifest.lua
├─ client.lua
├─ server.lua
└─ ui/
   ├─ index.html
   ├─ style.css
   └─ app.js
⚙️ Requirements
FiveM FXServer

txAdmin (recommended)

Git (optional but recommended)

▶️ Start FXServer (Development Mode)
Run FXServer using the following command:

powershell
Copy code
.\FXServer.exe +set serverProfile server-data
server-data refers to your server profile directory
(Automatically managed by txAdmin)

📦 Installation
Clone or download this repository

Place the bookdev folder into:

text
Copy code
resources/bookdev
Add to your server.cfg

cfg
Copy code
ensure bookdev
Restart server or resource

cfg
Copy code
restart bookdev
🎮 Usage
Action	Key
Open / Close UI	F7
Close UI	ESC

🛠 Development & Debugging
Lua → JS: SendNUIMessage

JS → Lua: RegisterNUICallback

Open NUI DevTools
Press F8

Run:

text
Copy code
ui_devtools
🗺 Roadmap
 Multi-page UI system

 Responsive scaling for all resolutions

 UI state management

 Framework support (ESX / QBCore)

 Production-ready UI template

👤 Author
Book (SivakornCR7)
Full-stack Developer · FiveM Developer

📄 License
This project is licensed under the MIT License
Feel free to use, modify, and distribute.

<div align="center">
⭐ If you find this useful, consider giving it a star!

</div> ```
