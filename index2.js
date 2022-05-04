let user = {
    'key': 'ad4a0c864a5536eee42b163190aeb3e7',
    'action': 'balance'
}

fetch('https://smmpanelus.com/api/v2', {
    method: 'POST',
    //mode: 'no-cors',
    headers: {},
    body: JSON.stringify(user)
}).then(res => console.log(res))
