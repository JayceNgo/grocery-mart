export default function ResetPassword() {
    return (
        <main className="auth">
            {/* <!-- Auth intro --> */}
            <div className="auth__intro d-md-none">
                <img src="/img/auth/reset-password.png" alt="" className="auth__intro-img" />
            </div>

            {/* <!-- Auth content --> */}
            <div className="auth__content">
                <div className="auth__content-inner">
                    <a href="./" className="logo">
                        <img src="/icons/logo.svg" alt="hiepgrocery" className="logo__img" />
                        <h2 className="logo__title">HiepGrocery</h2>
                    </a>
                    <h1 className="auth__heading">Create new password</h1>
                    <p className="auth__desc">Password should have at least 6 characters</p>

                    <form action="/reset-password-emailed" className="form auth__form auth__form-forgot">
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="New password"
                                    className="form__input"
                                    value="11111111"
                                    required
                                    minLength={6}
                                />
                                <img src="/icons/lock.svg" alt="" className="form__input-icon" />
                                <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Password should has at least 6 characters</p>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Confirm new password"
                                    className="form__input"
                                    value="11111111"
                                    required
                                    minLength={6}
                                />
                                <img src="/icons/lock.svg" alt="" className="form__input-icon" />
                                <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Password should has at least 6 characters</p>
                        </div>
                        <div className="form__group auth__btn-group">
                            <button className="btn btn--primary auth__btn form__submit-btn">Reset password</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
