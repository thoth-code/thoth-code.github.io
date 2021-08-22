import Component from "../domain/component";

export default class SignIn extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<article class="note">
                    <h1>Sign In to Thoth</h1>
                    <form>
                        <label class="sign-label">
                            Google Email
                            <input type="email" id="email-input" class="sign-input" />
                        </label>
                        <label class="sign-label">
                            Password
                            <input type="password" id="password-input" class="sign-input" />
                        </label>
                        <button class="sign-submit" id="signin-submit">Sign In</button>
                    <form>
                    <a href="/signup" id="signup-link">Create Account</a>
                </article>`;
    }

    addEvents() {
        this.querySelector('#signin-submit')?.addEventListener('click', event => {
            event.preventDefault();
            const email = this.querySelector('#email-input') as HTMLInputElement;
            const password = this.querySelector('#password-input') as HTMLInputElement;
            window.$store.dispatch('postAuth', {
                email: email.value, 
                password: password.value,
            });
        });

        this.querySelector('#signup-link')?.addEventListener('click', event => {
            event.preventDefault();
            window.$router.push("/signup");
        });
    }
}