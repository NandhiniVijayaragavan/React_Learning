import { useState } from 'react';
import {useHistory,withRouter} from 'react-router-dom';
function Login(props) {
  const history = useHistory();
  var formvalidation=false;
  var disableBtn = true;
  const [valid,formvalidate] = useState({formvalidation,disableBtn});

  const validate= ()=> {
    var data={username:"Nandhini", password:"nandy"}
    if ((document.getElementById('username').value == data.username) && (document.getElementById('password').value == data.password)) {
      history.push('/Home')
    } else {
      formvalidation=true;
      formvalidate({formvalidation,disableBtn});
    }
  };

  const handleChange=()=>{
    if (document.getElementById('username').value != ''  && document.getElementById('password').value!='') {
      disableBtn = false;
      formvalidate({formvalidation, disableBtn});
    }
  }

  return (
    <div>
      <div className="row cls-login">
        <div className="col-sm-12">
          <h1 className="text-center colour"> Login</h1>
          <input type="text" className="form-control mb-4" onChange={handleChange} placeholder="User Name" id="username"/>
          <input type="password" className="form-control" onChange={handleChange} placeholder="Password" id="password"/>
          <div className="text-center d-grid">
            <button type="submit" className="btn btn-primary mt-3 text-center" onClick={validate} disabled={valid.disableBtn}>Login</button>
          </div>
          {valid.formvalidation?
            (<div className='cls-alert'>
            Invalid User
            </div>) :<></>
        }
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);