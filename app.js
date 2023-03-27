const readline = require('readline');
const fetch = require('node-fetch')

const func = async (image) => {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '0de1721a76mshd2e75c1ba56173cp1c05c7jsn4bbd22494230',
            'X-RapidAPI-Host': 'image-captcha-solver.p.rapidapi.com'
        },
        body: JSON.stringify({
            url: image
        })
    };

    try {
        let tmp = await fetch('https://image-captcha-solver.p.rapidapi.com/recognizeUrl', options)
        tmp = await tmp.json()
        return tmp.result // returning solved captcha
    } catch (error) {
        return 'captcha is not solved !!!'
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the URl => ', async (url) => {
    const answer = await func(url)
    console.log(answer); // printing solved captcha
    rl.close();
});
