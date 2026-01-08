local uiOpen = false

RegisterCommand('bookui', function()
    uiOpen = not uiOpen

    SetNuiFocus(uiOpen, uiOpen)
    SendNUIMessage({
        action = uiOpen and "open" or "close"
    })
end)

RegisterKeyMapping('bookui', 'Open BookDev UI', 'keyboard', 'e')

-- 👇 รับสัญญาณปิดจาก NUI
RegisterNUICallback('close', function(_, cb)
    uiOpen = false
    SetNuiFocus(false, false)

    SendNUIMessage({
        action = 'close'
    })

    cb('ok')
end)
