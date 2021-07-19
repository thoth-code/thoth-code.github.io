import Component from "../domain/component";

export default class SignIn extends Component {
    constructor() {
        super();
    }

    get template() {
        return `<article class="note">
                    <h1>Sign In to Thoth</h1>
                    <form>
                        <label class="signin-label">
                            Google Email
                            <input type="email" id="email-input" class="signin-input" />
                        </label>
                        <label class="signin-label">
                            Password
                            <input type="password" id="password-input" class="signin-input" />
                        </label>
                        <button id="signin-submit">Sign In</button>
                    <form>
                    <a href="/signup" id="signup-link">Create Account</a>
                </article>`;
    }

    addEvents() {
        this.querySelector('#signin-submit')?.addEventListener('click', event => {
            event.preventDefault();
            const email = this.querySelector('#email-input') as HTMLInputElement;
            const password = this.querySelector('#password-input') as HTMLInputElement;
            window.$store.dispatch('getAuth', {
                email: email.value, 
                password: password.value,
            });
        });

        this.querySelector('#signup-link')?.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target as HTMLElement;
            const path = target.getAttribute('href') as string;
            window.$router.push(path);
        });
    }
}