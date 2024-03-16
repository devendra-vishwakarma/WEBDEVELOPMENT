import React from "react";

export default function LoginForm() {
    return <>
        <div className="container borders text-center dflex" >
            <div className="bord border border-success p-5 bg-dark">
                <form>
                    <div className="form-group row">
                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label text-white">
                            <h6>Email</h6>
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control "
                                id="staticEmail"
                                // id="inputPassword"
                                placeholder="enter your email here"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label text-white">
                            <h6>Password</h6>
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                placeholder="Enter your Password here"
                            />
                        </div>
                    </div>



                </form>
                <div className="row">
                    <div className="col-md-4">
                        <div class="wrapper">
                            <div class="link_wrapper">
                                <a href="#">Submit</a>
                                <div class="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}


