document.getElementById("dia").showModal(); 


let texts = [
    '欢迎访问王子的小窝，祝你开心啊。',
    '我就是我，世间第一等，此间最上乘。',
    '安静的做，成功了再说。',
    '松花酿酒，春水煎茶。',
    '虽不能至，心向往之。'
]

let textsIndex = 0;
let index = 0;
let dom = document.querySelector(".prince-website .prince .prince-info p");

let printText = async (text, dom) => {
    let index = 0
    let useTimeCount = 0;
    while (index !== text.length) {
        let interval = Math.floor(Math.random() * 400);
        await sleep(interval);
        useTimeCount += interval;
        dom.textContent += text.charAt(index);
        index++;
    }
    await sleep(useTimeCount * 2.1);
    await cancelText(dom);
}

let sleep = (interval) => {
    return new Promise((success) => {
        setTimeout(() => {
            success()
        }, interval)
    })
}

let cancelText = async (dom) => {
    while (dom.textContent.length) {
        let interval = Math.floor(Math.random() * 150);
        dom.textContent = dom.textContent.slice(0, dom.textContent.length - 1);
        await sleep(interval)
    }
    await sleep(500)
}

let runPrintText = async () => {
    while (true) {
        await printText(texts[generIndex()], dom)
    }
}

let generRandomIndex = (length) => {
    return Math.floor(Math.random() * length);
}

let generIndex = () => {
    if (index < 1) {
        return index++;
    }
    let randomIndex = generRandomIndex(texts.length);
    if (randomIndex !== textsIndex) {
        textsIndex = randomIndex;
        return randomIndex;
    } else {
        return generIndex();
    }
}

runPrintText();