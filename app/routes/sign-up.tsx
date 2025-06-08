import { useEffect } from "react";

export default function SignUp() {
    return (
        <main className="auth">
            {/* <!-- Auth intro --> */}
            <div className="auth__intro">
                <a href="./" className="logo auth__intro-logo d-none d-md-flex">
                    <img src="/icons/logo.svg" alt="hiepgrocery" className="logo__img" />
                    <h1 className="logo__title">HiepGrocery</h1>
                </a>
                <img src="/img/auth/intro.svg" alt="" className="auth__intro-img" />
                <p className="auth__intro-text">
                    The best of luxury brand values, high quality products, and innovative services
                </p>
                <button className="auth__intro-next d-none d-md-flex js-toggle" toggle-target="#auth-content">
                    <img src="/img/auth/intro-arrow.svg" alt="" />
                </button>
            </div>

            {/* <!-- Auth content --> */}
            <div id="auth-content" className="auth__content hide">
                <div className="auth__content-inner">
                    <a href="./" className="logo">
                        <img src="/icons/logo.svg" alt="hiepgrocery" className="logo__img" />
                        <h1 className="logo__title">HiepGrocery</h1>
                    </a>
                    <h1 className="auth__heading">Sign Up</h1>
                    <p className="auth__desc">Let’s create your account and Shop like a pro and save money.</p>
                    <form action="./home-logined" className="form auth__form">
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Email"
                                    // value="admin@grocerymart.com"
                                    className="form__input"
                                    required
                                />
                                <img src="/icons/message.svg" alt="" className="form__input-icon" />
                                <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Email Invalid</p>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Password"
                                    className="form__input"
                                    value="11111111"
                                    required
                                    minLength={6}
                                />
                                <img src="/icons/lock.svg" alt="" className="form__input-icon" />
                                <img src="/icons/form-error.svg" alt="" className="form__input-icon-error" />
                            </div>
                            <p className="form__error">Password should has at least 6 words</p>
                        </div>
                        <div className="form__group">
                            <div className="form__text-input">
                                <input
                                    type="password"
                                    name=""
                                    id=""
                                    placeholder="Confirm password"
                                    className="form__input"
                                    value="11111111"
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
                        </div>
                        <div className="form__group auth__btn-group">
                            <button className="btn btn--primary auth__btn form__submit-btn">Sign Up</button>
                            <button className="btn btn--outline auth__btn btn--no-margin">
                                <img src="/icons/google.svg" alt="" className="btn__icon icon" />
                                Sign in with Google
                            </button>
                        </div>
                    </form>

                    <p className="auth__text">
                        You have an account yet?
                        <a href="/sign-in" className="auth__link auth__text-link">
                            Sign In with Google
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
