import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"

function Login() {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        let obj = {
            ...data
        }
        dispatch({ type: 'login', data: obj })
        reset()
        console.log(obj);
    }
    return (
        
        <div className="login">
            <div className="regMenu w-25 mx-auto p-3 border bg-light">
                <h3>Log In</h3>
                <form

                    onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group mb-2"></div>
                    <label htmlFor="email">Email</label>
                    <input
                        className="form-control" {...register('email', { required: true })} />
                    {errors.title && <span>This field must be filled</span>}

                    <div className="form-group mb-2"></div>
                    <label htmlFor="password">Password</label>
                    <input
                        className="form-control" type='password'{...register('password', {
                            required: true, minLength: {
                                value: 3,
                                message: "min length is 3",
                            }
                        })} />
                    {errors.title && <span>This field must be filled</span>}
                    <br />
                    <button
                        className='btn btn-dark btn-sm'
                    >Save</button>

                </form>

                
            </div>
            <button onClick={()=> {
                    dispatch({type:"barev"})
                }}>Ok</button>
        </div>

    )
}

export default Login