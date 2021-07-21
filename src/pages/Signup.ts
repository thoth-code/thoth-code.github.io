import Component from "../domain/component";

export default class SignUp extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<article class="note">
                    <h1>Sign Up to Thoth</h1>
                    <form>
                        <label class="sign-label">
                            User Name
                            <input type="text" id="uname-input" class="sign-input" />
                        </label>
                        <label class="sign-label">
                            Google Email
                            <input type="email" id="email-input" class="sign-input" />
                        </label>
                        <label class="sign-label">
                            Password
                            <input type="password" id="password-input" class="sign-input" />
                        </label>
                        <button class="sign-submit" id="signup-submit">Sign In</button>
                    <form>
                </article>`;
    }

    addEvents() {
        this.querySelector('#signup-submit')?.addEventListener('click', event => {
            event.preventDefault();
            const name = this.querySelector('#uname-input') as HTMLInputElement;
            const email = this.querySelector('#email-input') as HTMLInputElement;
            const password = this.querySelector('#password-input') as HTMLInputElement;
            window.$store.dispatch('postUserInfo', {
                uname: name.value,
                email: email.value,
                password: password.value,
            });
        });
    }
}