console.log("BOOKDEV UI LOADED");

window.addEventListener('message', (event) => {
    if (event.data.action === 'open') {
        document.getElementById('app').classList.remove('hidden')
    }

    if (event.data.action === 'close') {
        document.getElementById('app').classList.add('hidden')
    }
})

// 👇 ESC handler
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'e') {
        fetch(`https://${GetParentResourceName()}/close`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
    }
})
