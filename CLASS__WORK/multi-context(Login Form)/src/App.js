import React, { createContext, useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserData = createContext();

const ModeChange = createContext();

function App() {

  const [CurrentUser, SetCurrentUser] = useState("");

  const [Theme, SetTheme] = useState("bg-white text-dark");

  // console.log(CurrentUser);

  const ModeChanger = () => {
    SetTheme(
         (prevetheme)=>(prevetheme=="bg-white text-dark"?"bg-dark text-white":"bg-white text-dark")
       )
     }
  return (
    <>
      <ModeChange.Provider value={{Theme, SetTheme}}>
      <UserData.Provider value={{CurrentUser, SetCurrentUser}}>
          <LoginForm ModeChanger={ModeChanger} />
      </UserData.Provider>
      </ModeChange.Provider>
    </>
  )
}

function LoginForm({ModeChanger}) {

  const [Fname, SetFname] = useState("");
  const [Lname, SetLname] = useState("");

  const SendData = useContext(UserData);
  const ChangeAgain  = useContext(ModeChange);

  // console.log(ChangeAgain.Theme);

  const FullName = `${Fname} ${Lname}`

  const SubmitData = (e) => {
    SendData.SetCurrentUser(FullName);
    SetFname("");
    SetLname("");
    e.preventDefault();   
  }

  const CanLogin = Fname!="" && Lname!="";

  return (
    <>
      <form action="" onSubmit={SubmitData}>
      <div className={`Container col-3 shadow border border-2 m-auto my-5 p-5 ${ChangeAgain.Theme}`}>

<label htmlFor="">First Name</label>
<br />

<input type="text" className='form-control' value={Fname} onChange={(e)=>SetFname(e.target.value)}/>
<br />
<br />

<label htmlFor="">Last Name</label>
<br />

<input type="text" className='form-control' value={Lname} onChange={(e)=>SetLname(e.target.value)}/>
<br />
<br />

<input type="checkbox" className='mb-5' onChange={ModeChanger} />
<span> Change Mode</span>

<div className="row">
  <div className="col-6">
    {CanLogin ? <button className='btn btn-primary'>Submit</button> : !CanLogin}
  </div>

  <div className="col-6">
    <button className='btn btn-primary' disabled={!CanLogin}>Reset</button>
  </div>
</div>
</div>
</form>
    </>
  )
}

export default App;