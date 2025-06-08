export default function SignIn() {
    return (
        <main className="auth">
            {/* <!-- Auth intro --> */}
            <div className="auth__intro d-md-none">
                <img src="/img/auth/intro.svg" alt="" className="auth__intro-img" />
                <p className="auth__intro-text">
                    The best of luxury brand values, high quality products, and innovative services
                </p>
            </div>

            {/* <!-- Auth content --> */}
            <div className="auth__content">
                <div className="auth__content-inner">
                    <a href="./" className="logo">
                        <img src="/icons/logo.svg" alt="hiepgrocery" className="logo__img" />
                        <h2 className="logo__title">HiepGrocery</h2>
                    </a>
                    <h1 className="auth__heading">Hello Again!</h1>
                    <p className="auth__desc">
                        Welcome back to sign in. As a returning customer, you have access to your previously saved all
                        information.
                    </p>
                    <form action="/home-logined" className="form auth__form">
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email"
                                    value="admin@grocerymart.com"
                                    className="form__input"
                                    required
                                />
                                <img src="/icons/message.svg" alt="" className="form__input-icon" />
                                <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Invalid Email</p>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Password"
                                    className="form__input"
                                    value="111111111"
                                    required
                                    minLength={6}
                                />
                                <img src="/icons/lock.svg" alt="" className="form__input-icon" />
                                <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Password should has at least 6 words</p>
                        </div>
                        <div className="form__group form__group--inline">
                            <label className="form__checkbox">
                                <input type="checkbox" name="" id="" className="form__checkbox-input d-none" />
                                <span className="form__checkbox-label">Set as default card</span>
                            </label>
                            <a href="/reset-password" className="auth__link form__pull-right">
                                Forgot password?
                            </a>
                        </div>
                        <div className="form__group auth__btn-group">
                            <button className="btn btn--primary auth__btn form__submit-btn">Sign In</button>
                            <button className="btn btn--outline auth__btn btn--no-margin">
                                <img src="/icons/google.svg" alt="" className="btn__icon icon" />
                                Sign in with Google
                            </button>
                        </div>
                    </form>

                    <p className="auth__text">
                        Don’t have an account yet?
                        <a href="/sign-up" className="auth__link auth__text-link">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
