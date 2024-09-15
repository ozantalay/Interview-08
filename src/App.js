import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" }
  ]);

  const onSubmit = (e) => {
    // KODUNUZ BURAYA GELECEK
    e.preventDefault();
    if(username.length>20 || password.length>20){
      alert('kullanıcı adı ve şifre 20 karakterden fazla olamaz.')
      return
        }
        if(username.length<6 || password.length<6){
          alert('kullanıcı adı ve şifre 6 karakterden az olmamalı')
          return
        }
          const availableAccount = accounts.find(account => account.username === username && account.password === password);
         
        
        if(availableAccount){
          alert(`hoş geldin ${username}!`)
          setUsername('')
          setPassword('')
        }
        else{
          const newAccount={username,password}
          setAccounts([...accounts,newAccount])
          alert(`yeni bir hesap oluşturdun ${username}!`)
          setUsername('')
          setPassword('')
        
        }
       
    
  };


  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid",
        padding: 10
      }}
      onSubmit={onSubmit}
    >
      <h3>Login</h3>
      <input
        value={username}
        type="text"
        onChange={/* KODUNUZ BURAYA GELECEK */ (e) => setUsername(e.target.value)}
        style={{ marginBottom: 5 ,border:'1px solid black'}}
      />
      <input
        value={password}
        type="text"
        onChange={/* KODUNUZ BURAYA GELECEK */ (e) => setPassword(e.target.value)}
        style={{ marginBottom: 10 ,border:'1px solid black'}}
      />
      <button style={{ alignSelf: "center" }} onClick={onSubmit}>
        Submit
      </button>
    </form>
  );
};

export default App;
