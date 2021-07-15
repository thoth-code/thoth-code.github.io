function Style() {
    setAsideColor();
}

export default Style;

function setAsideColor() {
    const config = {
        color: [
            '#FFA0D5', // Pink
            '#FFD760', // Orange
            '#DAF7A6', // Green
            '#FFFAA0', // Yellow
            '#89CFF0', // Blue
        ],
    };
    const aside = document.getElementById('aside-items') as HTMLElement;
    const items = aside.children;
    for(let i = 0; i < items.length; i++) {
        let item = items.item(i) as HTMLElement;
        item.style.backgroundColor = config.color[i%config.color.length];
    }
}