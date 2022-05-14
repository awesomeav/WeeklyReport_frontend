import React,{useState} from 'react'
function SignupForm() {
const handleFormSubmut =(event)=>{
    event.preventDefault();
}
const [values, setvalue] = useState(
    {
        fullname:"",
        email:"",
        password:"",
        role:"",
        project:"",
        department:"",
        dateofjoining:""

    }
)
const handleChange=(event)=>{
setvalue({
    ...values,
    [event.target.name]:event.target.value,

})

}
  return (
    <div className='container'>
    <div className='app-wrapper' >
    <div>
        <h1 className='title'> Signup</h1>
    </div>
<form className='form-wrapper' >
<div className='name'>
    {/* NAME */}
    <label className='label'> Name </label>
<input className='input'type="text"
 name="fullname" 
 value={values.fullname}
     onChange={handleChange}
 />

</div>
{/* Email */}
<div className='email'>
    <label className='label'> Email </label>
<input className='input'type="email"  name='email'
onChange={handleChange}
 value={values.email}/>

</div>
{/* Password */}
<div className='password'>
    <label className='label'> Password </label>
<input className='input'type="text"  name='password'

 value={values.password}
 onChange={handleChange}
 />

</div>
{/* Role */}
<div className='password'>
    <label className='label'> Role </label>
<input className='input'type="text"  name='role'

 value={values.role}
 onChange={handleChange}
 />

</div>



<div>
    <button className='submit' onClick={handleFormSubmut}>
        Signup
    </button>
</div>


</form>

    </div>
    </div>
  )
}

export default SignupForm