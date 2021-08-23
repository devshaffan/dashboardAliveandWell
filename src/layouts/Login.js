

import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
// import createBrowserHistory from 'history/createBrowserHistory';
import React, { useState, useEffect } from "react";


export default function Login(props) {
    const history = createBrowserHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const [mounted, setMounted] = useState(false)
    var checkBtn;
    var form;


    const required = value => {
        if (!value) {
            return (
                <div className="alert alert-danger" role="alert">
                    This field is required!
                </div>
            );
        }
    };
    const validEmail = value => {
        if (!isEmail(value)) {
            return (
                <div className="alert alert-danger" role="alert">
                    This is not a valid email.
                </div>
            );
        }
    };
    if (!mounted) {
        const user = AuthService.getCurrentUser()
        if (user) {
            history.push("/patients");
            window.location.reload();
        }
    }

    useEffect(() => {
        setMounted(true)
    }, [])



    function handleLogin(e) {
        e.preventDefault();

        setMessage("")
        setLoading(true)

        form.validateAll();


        if (checkBtn.context._errors.length === 0) {
            AuthService.login(email, password).then(
                () => {
                    history.push("/patients");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setLoading(false)
                    setMessage(resMessage)
                }
            );
        } else {
            setLoading(false)
        }
    }
    return (

        <div className="col-md-12">
            <div className="card card-container">


                <Form className="employeeSigninForm"
                    onSubmit={(e) => handleLogin(e)}
                    ref={c => {
                        form = c;
                    }}
                >
                    <div className="form-group">
                        <h3 htmlFor="email" style={{ textAlign: "center" }}><strong>Dashboard</strong></h3>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            validations={[required, validEmail]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Input
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-primary btn-block"
                            disabled={loading}
                        >
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                        </button>
                    </div>

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{ display: "none" }}
                        ref={c => {
                            checkBtn = c;
                        }}
                    />
                </Form>
            </div>
        </div>

    );
}