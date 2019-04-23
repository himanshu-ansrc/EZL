import React, {Component, Fragment} from 'react';
import axios from 'axios'

class Home extends Component{
	  state = {
           QType: "SB"
	       // TF: "TF",
	       // CA: "CA",
	       // ES: "ES",
	       // FB: "FB",
	       // MA: "MA",
	       // NU: "NU",
	       // RA: "RA",
	       // SA: "SA",
	       // YN: "YN",
	       // MC: "MC"
	  }
	  handleChange = (e)=>{
	  	 this.setState({ QType: e.target.value })
	  }
	  dataSubmit = async (e)=>{
         e.preventDefault();
         let obj = {};
         for(let x of e.target.elements){
         	if(x.type!=='submit'){
               console.log(x.name)
               obj[x.name] = x.value; 
         	}
         }
         const {data} = await axios.post('/', obj);
         document.getElementById('show_xml').value = data;
	  }
      SB = ()=>{
            return (
			 <tr className="margin-top-5">
			    <td><label>Question</label></td>
			    <td><textarea className="input-box" name="ques_txt" rows="5" cols="30"></textarea></td> 
			  </tr>
            )
      }

      TF = ()=>{
            return (
			  <tr className="margin-top-5">
			    <td><label>Question2</label></td>
			    <td><textarea className="input-box" name="ques_txt" rows="5" cols="30"></textarea></td> 
			  </tr>
            )
      }
      CA = ()=>{
            return (
			 <tr className="margin-top-5">
			    <td><label>Question3</label></td>
			    <td><textarea className="input-box" name="ques_txt" rows="5" cols="30"></textarea></td> 
			  </tr>
            )
      }
      render(){
      	 return(
           <Fragment>
	           <main className="main-content-box">
	        	 <div className="flex main-content-wrapper">
		        	 <div className="flex space-bw main-content">
		        	          <div className="ques-table">
									<form method="post" onSubmit={this.dataSubmit} id="main_form">
										<table className="prob-table">
										   <tbody>
										      <tr className="margin-top-5">
											    <td><label>ID</label></td>
											    <td><input className="input-box" type="text" name="ques_id" placeholder="Enter ID"/></td> 
											  </tr>
										      <tr className="margin-top-5">
											    <td><label>Problem type</label></td>
											    <td>
									        	  <select className="input-box" name="ques_type" onChange={this.handleChange}>
									        	    <option value="SB">SB</option>
										            <option value="TF">TF</option>
										            <option value="CA">CA</option>
										            <option value="ES">ES</option>
										            <option value="FB">FB</option>
										            <option value="MA">MA</option>
										            <option value="NU">NU</option>
										            <option value="RA">RA</option>
										            <option value="SA">SA</option>
										            <option value="YN">YN</option>
										            <option value="MC">MC</option>
										          </select>
											    </td> 
											  </tr>
											  <tr className="margin-top-5">
											    <td><label>Learning Obj</label></td>
											    <td><input className="input-box" type="text" name="ques_obj" placeholder="Enter question objective"/></td> 
											  </tr>
											  <tr className="margin-top-5">
											    <td><label>Topic</label></td>
											    <td><input className="input-box" type="text" name="ques_topic" placeholder="Enter question topic"/></td> 
											  </tr>

                                              {this.state.QType=='SB' && this.SB()}
                                              {this.state.QType=='TF' && this.TF()}
                                              {this.state.QType=='CA' && this.CA()}

										  	  <tr className="margin-top-5">
										        <td></td>
											    <td><button  className="btn-default margin-top-20">Generate</button></td> 
											  </tr>
										   </tbody>
										</table>									
									</form>
			        	 	  </div>
	                          <div>
	                          	<textarea id="show_xml" rows="30" cols="50" placeholder="Output as XML"></textarea>
	                          </div>
			        	 	  
		        	 </div>
		        </div>
	           </main>
           </Fragment>
      	 )
      }
}

export default Home;