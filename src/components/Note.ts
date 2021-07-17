import Component from "../lib/component";
import * as strconv from '../modules/parseCode';

export default class Note extends Component {
    constructor() {
        super();
    };

    get template() {
        return `<h1></h1>
                <pre><code></code></pre>
                <span></span>`;
    }

    propsHandler(props: string) {
        const title = this.children.item(0) as HTMLElement;
        title.innerText = this.getAttribute('title') as string;

        const code = this.children.item(1)?.children.item(0) as HTMLElement;
        code.innerHTML = strconv.noHTML(props);

        const tag = this.children.item(2) as HTMLElement;
        tag.innerText = this.getAttribute('tag') as string;
    }
}