import React from 'react'

function Login() {
    return (
        <div>
            <>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form className='form-control m-4'>
                            <h4 className='my-3'>LogIN</h4>
                            <input type="text" name="username" id="" className='form-control my-4' placeholder='Username' />

                            <input type="password" name="password" id="" className='form-control my-4' placeholder='Password' />

                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </>
        </div>
    )
}

export default Login