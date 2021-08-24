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
                            Email
                            <input type="email" id="email-input" class="sign-input" />
                        </label>
                        <label class="sign-label">
                            Password
                            <input type="password" id="password-input" class="sign-input" />
                        </label>
                        <button class="sign-submit" id="signup-submit">Sign Up</button>
                    <form>
                </article>`;
    }

    addEvents() {
        this.querySelector('#signup-submit')?.addEventListener('click', event => {
            event.preventDefault();
            const email = this.querySelector('#email-input') as HTMLInputElement;
            const password = this.querySelector('#password-input') as HTMLInputElement;
            window.$store.dispatch('postUserInfo', {
                email: email.value,
                password: password.value,
            });
        });
    }
}