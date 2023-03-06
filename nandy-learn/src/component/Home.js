import { useState } from "react";
var tabledata =[];
function Home() {
  console.log('home')
  const [state, setValue] = useState({tabledata});
  const get = ()=> {
    console.log('get')
    console.log(document.forms);
    let datas= { 
      emailid:document.getElementById('emailid').value,
      name:document.getElementById('name').value,
      address : document.getElementById('address').value,
      mobileno:document.getElementById('mobileno').value,
      feedback:document.getElementById('feedback').value
    }
    tabledata.push(datas);
    setValue({tabledata})
  }
  return (
    <div>
      <form name="formData">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="emailid" placeholder="name@example.com" name="email" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
          <input type="name" className="form-control" id="name" placeholder="Nandhini Ragav" name="candidateName" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
          <input type="address" className="form-control" id="address" placeholder="chennai -632114" name="address" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Mobile Number</label>
          <input type="number" className="form-control" id="mobileno" placeholder="8883814577" name="mobileNo" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Feedback</label>
          <textarea className="form-control" id="feedback" rows="3" name="feedback" required></textarea>
          <button type="submit" className="btn btn-primary mt-3 text-center" onClick={get}>Submit</button>
        </div>
      </form>
      <div>
        <table className="table-border" cellPadding="8">
          <thead>
          <tr>
            <th>Email id </th>
            <th>Name</th>
            <th>Address</th>
          </tr>
          </thead>
          <tbody>
            {state.tabledata.length !=0 ? 
              state.tabledata.map((data1,index) => {
                return(
                  <tr>
                    <td>{data1.emailid}</td>
                    <td>{data1.name}</td>
                    <td>{data1.address}</td>
                  </tr>
                )}) : (<></>)}
          </tbody>
        </table>
        <div>
        <table className="table-border" cellPadding="8">
        <thead>
          <tr>
            <th>Mobile Number  </th>
            <th>Feedback</th>
          </tr>
          </thead>
          <tbody>
            {state.tabledata.length !=0 ? 
              state.tabledata.map((data2,index) => {
                return(
                  <tr>
                    <td>{data2.mobileno}</td>
                    <td>{data2.feedback}</td>
                  </tr>
                )}) : (<></>)}
          </tbody>
        </table>
        </div>
      </div>
      </div>
  )
}
export default Home;