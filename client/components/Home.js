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
			    <td className="flex-base"><textarea className="input-box" name="ques_txt" rows="5" cols="30"></textarea><a href="#popup1" className="btn-default"  onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a></td> 
			  </tr>
            )
      }

      TF = ()=>{
            return (
               <Fragment>
	              <tr className="margin-top-5">
				    <td><label>Question</label></td>
			         <td className="flex-base"><textarea className="input-box" name="ques_txt" rows="5" cols="30"></textarea><a href="#popup1" className="btn-default" onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a></td> 
				  </tr>
				  <tr className="margin-top-5">
				    <td><label>Common feed</label></td>
				    <td className="flex-base"><textarea className="input-box" name="tf_ques_feed" rows="2" cols="10"></textarea><a href="#popup1" className="btn-default" onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a></td> 
				  </tr>
				  <tr className="margin-top-5">
				    <td><label>TrueInfo feed</label></td>
				    <td className="flex-base"><textarea className="input-box" name="tf_true_feed" rows="2" cols="10"></textarea><a href="#popup1" className="btn-default" onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a></td> 
				  </tr>
				  <tr className="margin-top-5">
				    <td><label>FalseInfo feed</label></td>
				    <td className="flex-base"><textarea className="input-box" name="tf_false_feed" rows="2" cols="10"></textarea><a href="#popup1" className="btn-default" onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a></td> 
				  </tr>
               </Fragment>
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

      addTable = (e)=>{
      	 //  e.preventDefault();
      	   let row = parseInt(document.getElementById("table_row").value),
      	       col = parseInt(document.getElementById("table_col").value);

            console.log(document.getElementById("table_row"))

               this.tableDataList(row, col);
      //      let prev = document.getElementsByName(this.state.eleId)[0];
 
      //      let data = `<![CDATA[<p></p><table><thead>
						// <tr class="header">
						// <th><em>Sept 2</em></th>
						// <th><em>Sept 6</em></th>
						// <th><em>Sept 10</em></th>
						// </tr>
						// </thead>
						// <tbody>
						// <tr class="odd">
						// <td>1,000</td>
						// <td>4,000</td>
						// <td>200</td>
						// </tr>
					 //   </tbody></table>]]>`;
      //      prev.value = data;
      }

      tableDataList = (row, col)=>{
      	  let a = [];
      	  let d = row*col;
      	  let k = row;
          let i = 1;
      	  let h = d;

      	  while(i<=h){
      	  	 a.push(<input className={"input-table margin-ryt-10 tblhead_"+i} type="text" key={i} name="ques_topic" placeholder={'Heading'+i} />);
             ++i;
      	  }
      	  a.push(<p className="margin-botm-15"></p>);
      	  i = 1;
      	  while(i<=k){
      	  	  if(i%d==0){
                 a.push(<input className="input-table margin-ryt-10" type="text" key={i+'_'} name="ques_topic" placeholder="Enter question topic" />);
                 a.push(<p className="margin-botm-15"></p>);
      	  	  }else{
      	  	  	 a.push(<input className="input-table margin-ryt-10" type="text" key={i+'_'} name="ques_topic" placeholder="Enter question topic" />);
      	  	  }
      	  	  ++i;
      	  }
      	  return a;
      }   

      render(){
      	 return(
           <Fragment>


              <div id="popup1" className="overlay">
				<div className="popup">
					<a className="close" href="#">&times;</a>
					<div className="content">
						 {this.tableDataList() && this.tableDataList().map(x=>x)}
					</div> 
					<footer className="txt-right">
					      <input className="input-table margin-ryt-10" type="text" id="table_row" placeholder="No of rows"/>
					      <input className="input-table margin-ryt-10" type="text" id="table_col" placeholder="No of cols"/>
					      <button className="btn-default margin-top-20" onClick={this.addTable}>Generate</button>
					</footer>
				</div>
			</div>

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
											    <td><label>Type</label></td>
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
	                          	<textarea id="show_xml" rows="30" cols="70" placeholder="Output as XML"></textarea>
	                          </div>
			        	 	  
		        	 </div>
		        </div>
	           </main>
           </Fragment>
      	 )
      }
}

export default Home;