<div align="center">

<!-- Header with gradient-style title -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=BookDev&fontSize=70&fontColor=fff&animation=fadeIn&fontAlignY=35" width="100%"/>

### 🎯 Modern FiveM Development Resource
**Lua • NUI • Scalable Architecture**

<p align="center">
  <img src="https://img.shields.io/badge/FiveM-Ready-00d4ff?style=for-the-badge&logo=lua&logoColor=white" alt="FiveM Ready"/>
  <img src="https://img.shields.io/badge/Lua-5.4-2C2D72?style=for-the-badge&logo=lua&logoColor=white" alt="Lua"/>
  <img src="https://img.shields.io/badge/NUI-Framework-FF6B35?style=for-the-badge&logo=html5&logoColor=white" alt="NUI"/>
  <img src="https://img.shields.io/badge/Status-Active-00C853?style=for-the-badge" alt="Status"/>
</p>

<p align="center">
  <a href="#-features">Features</a> •
  <a href="#-installation">Installation</a> •
  <a href="#-usage">Usage</a> •
  <a href="#-roadmap">Roadmap</a> •
  <a href="#-license">License</a>
</p>

---

</div>

## 🌟 Overview

**BookDev** is a professional-grade FiveM development template designed for modern resource creation. Built with clean architecture, scalability, and developer experience in mind. Perfect for both learning and production-ready projects.

<table>
<tr>
<td width="50%">

### 🎨 Modern UI/UX
- Responsive NUI interface
- Smooth animations
- Thai language support
- DevTools integration

</td>
<td width="50%">

### ⚡ Performance
- Optimized resource usage
- Clean code structure
- Efficient event handling
- Production-ready

</td>
</tr>
</table>

---

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🎮 **Client/Server Scripts** | Full Lua implementation with proper event handling |
| 🖥️ **Modern NUI** | HTML5/CSS3/JavaScript interface with smooth animations |
| 🇹🇭 **Thai Support** | Complete Thai language integration |
| ⌨️ **Keybind System** | F7 to toggle, ESC to close |
| 🏗️ **Scalable Structure** | Clean architecture ready for expansion |
| 🧪 **Dev-Friendly** | Built for rapid prototyping and learning |

</div>

---

## 📂 Project Structure

```
bookdev/
│
├── 📄 fxmanifest.lua       # Resource manifest
├── 💻 client.lua           # Client-side logic
├── 🖥️  server.lua           # Server-side logic
│
└── 🎨 ui/
    ├── 🌐 index.html       # Main UI structure
    ├── 🎨 style.css        # Styling & animations
    └── ⚙️  app.js           # UI logic & callbacks
```

---

## 🔧 Requirements

<div align="center">

| Requirement | Version | Status |
|------------|---------|--------|
| FiveM FXServer | Latest | ✅ Required |
| txAdmin | Latest | ⭐ Recommended |
| Git | 2.x+ | 💡 Optional |

</div>

---

## 📦 Installation

### 1️⃣ **Download Resource**
```bash
git clone https://github.com/yourusername/bookdev.git
```
Or download ZIP and extract

### 2️⃣ **Place in Resources**
```
your-server/
└── resources/
    └── bookdev/
```

### 3️⃣ **Configure Server**
Add to `server.cfg`:
```cfg
ensure bookdev
```

### 4️⃣ **Start Resource**
```bash
restart bookdev
```

<div align="center">

**🎉 Ready to use!**

</div>

---

## 🎮 Usage

<div align="center">

### Keyboard Controls

<table>
<tr>
<th>Action</th>
<th>Key</th>
<th>Description</th>
</tr>
<tr>
<td>🔓 Toggle UI</td>
<td><kbd>F7</kbd></td>
<td>Open or close the interface</td>
</tr>
<tr>
<td>❌ Close UI</td>
<td><kbd>ESC</kbd></td>
<td>Quick close</td>
</tr>
</table>

</div>

---

## 🛠️ Development

### **Event Communication**

```lua
-- Lua → JS (SendNUIMessage)
SendNUIMessage({
    action = "showNotification",
    data = { message = "Hello from Lua!" }
})
```

```javascript
// JS → Lua (RegisterNUICallback)
$.post(`https://${GetParentResourceName()}/myCallback`, 
    JSON.stringify({ data: "value" })
);
```

### **Debugging Tools**

Open NUI DevTools:
1. Press <kbd>F8</kbd> in-game
2. Type: `ui_devtools`
3. Press <kbd>Enter</kbd>

---

## 🗺️ Roadmap

<div align="center">

| Status | Feature |
|--------|---------|
| ✅ | Basic UI Framework |
| ✅ | Keybind System |
| ✅ | Thai Language Support |
| 🔄 | Multi-page Navigation |
| 📋 | Responsive Design System |
| 📋 | State Management |
| 📋 | ESX/QBCore Integration |
| 📋 | Advanced UI Components |

</div>

**Legend:** ✅ Complete | 🔄 In Progress | 📋 Planned

---

## 🤝 Contributing

Contributions are always welcome! Feel free to:

- 🐛 Report bugs
- 💡 Suggest features
- 🔧 Submit pull requests
- ⭐ Star the project

---

## 👨‍💻 Author

<div align="center">

<img src="https://github.com/identicons/bookdev.png" width="100" height="100" style="border-radius: 50%"/>

### **Book (SivakornCR7)**
*Full-stack Developer • FiveM Developer*

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SivakornCR7)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/yourserver)

</div>

---

## 📄 License

<div align="center">

This project is licensed under the **MIT License**

```
Feel free to use, modify, and distribute.
See LICENSE file for details.
```

</div>

---

<div align="center">

### 💖 Support This Project

If you find **BookDev** useful, please consider:

⭐ **Starring** the repository  
🔄 **Sharing** with others  
☕ **Supporting** development  

---

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

**Made with ❤️ by the FiveM Community**

</div>