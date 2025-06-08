export default function ResetPasswordEmailed() {
    return (
        <main className="auth">
            {/* <!-- Auth intro --> */}
            <div className="auth__intro d-md-none">
                <img src="/img/auth/forgot-password.png" alt="" className="auth__intro-img" />
            </div>

            {/* <!-- Auth content --> */}
            <div className="auth__content">
                <div className="auth__content-inner">
                    <a href="./" className="logo">
                        <img src="/icons/logo.svg" alt="hiepgrocery" className="logo__img" />
                        <h2 className="logo__title">HiepGrocery</h2>
                    </a>
                    <h1 className="auth__heading">Forgot your password?</h1>
                    <p className="auth__desc">Enter your email and we'll send you a link to reset your password.</p>
                    <div className="auth__message message message--success">
                        We have e-mailed your password reset link!
                    </div>
                    <form action="/home-logined" className="form auth__form auth__form-forgot">
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email"
                                    className="form__input"
                                    required
                                />
                                <img src="/icons/message.svg" alt="" className="form__input-icon" />
                                <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Invalid email</p>
                        </div>
                        <div className="form__group auth__btn-group">
                            <button className="btn btn--primary auth__btn form__submit-btn">Reset password</button>
                        </div>
                    </form>

                    <p className="auth__text">
                        <a href="/sign-in" className="auth__link auth__text-link">
                            Back to Sign In
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
