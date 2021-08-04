import Component from "../domain/component";
import * as codeUtils from '../tools/codeUtils';

export default class CodeNote extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<h1></h1>
                <pre><code></code></pre>
                <span></span>`;
    }

    propsHandler(props: string) {
        const title = this.querySelector('h1') as HTMLElement;
        title.innerText = this.getAttribute('title') as string;

        const code = this.querySelector('code') as HTMLElement;
        code.innerHTML = codeUtils.noHTML(props);

        const tag = this.querySelector('span') as HTMLElement;
        tag.innerText = this.getAttribute('tag') as string;
    }
}