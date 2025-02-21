let texts = [
    '欢迎访问王子的小窝，祝你开心啊。',
    '若命运不公，便和它奋斗到底。',
    '若前方无路，我便踏出一条路；若天地不容，我便扭转这乾坤。',
    '我命由我不由天，是魔是仙，我自己说了算！',
    '别人的看法都是狗屁，你是谁只有你自己说了才算。',
    '我若成佛，天下无魔；我若成魔，佛奈我何。',
    '人心中的成见是一座大山，任你怎么努力都休想搬动。',
    '难道你还想改变这世界？我想试试。',
    '以前我一直在躲、在藏，直到无路可走，我才明白该如何面对这个世界。',
    '你自诩照世明灯，却干着恃强凌弱、祸乱人间的勾当。',
    '无论你是“魔”是“妖”还是“仙”，你都是我儿，每一天与你在一起都是快乐的。',
    '从来生死都看淡，专和老天对着干。我命由我不由天，小爷成魔不成仙。',
    '哪怕肉身重塑，哪怕万丈火焰，我也是逆鳞一片，燃我自己。',
    '什么神仙妖魔，不过是禁锢异族命运的枷锁。',
    '难道你还想改变这世界？我想试试。',
    '安静的做，成功了再说。',
    '欲买桂花同载酒，终不似，少年游。',
    '虽不能至，心向往之。',
    '安静的做，成功了再说。',
    '松花酿酒，春水煎茶。',
    '虽不能至，心向往之。',
    '无人扶我青云志，我自踏雪至山巅。'
]
let textsIndex = 0;
let index = 0;
let dom = document.querySelector(".prince-website .prince .prince-info p");

let printText = async (text, dom) => {
    let index = 0
    let useTimeCount = 0;
    let len = text.length;
    while (index !== len) {
        let interval = Math.floor(Math.random() * 300);
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
        setTimeout(() => { success() }, interval)
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
