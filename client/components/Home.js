import React, {Component, Fragment} from 'react';
import axios from 'axios'

import Test from './Test';


class Home extends Component{
	  state = {
           QType: "SB",
           tableList : []
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
    componentDidMount(){
           console.log(Test);
            // const menu = document.querySelector(".menu");
            // let menuVisible = false;
            // const toggleMenu = command => {
            //   menu.style.display = command === "show" ? "block" : "none";
            //   menuVisible = !menuVisible;
            // };
            // const setPosition = ({ top, left }) => {
            //   menu.style.left = `${left}px`;
            //   menu.style.top = `${top}px`;
            //   toggleMenu("show");
            // };
            // window.addEventListener("click", e => {
            //   let visible = "hide"
            //   if(e.target.classList.contains('uplaod-any')){
            //       visible = "show"
            //   }
            //   if(menuVisible)toggleMenu(visible);
            // });

            // window.addEventListener("contextmenu", e => {
            //   e.preventDefault();
            //   const origin = {
            //     left: e.pageX,
            //     top: e.pageY
            //   };
            //   setPosition(origin);
            //   return false;
            // });
            // window.onclick = function(e){
            //     console.log(e.target);
            // }
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
      	   let table_input = document.getElementById('table_input').value;
      	   console.log(table_input.split("\n"));
      	   let row = parseInt(document.getElementById("table_row").value),
      	       col = parseInt(document.getElementById("table_col").value);
      	   if(table_input.value!==''){
              row = table_input.split("\n").length-2;
              col = table_input.split("\n")[0].split("\t").length;
      	   }else{
      	   	  table_input = null;
      	   }
      	   this.tableDataList(row, col, table_input);
      }
      generateTableToEle = async ()=>{
           let table_input = document.getElementById('table_input').value;
           // console.log(table_input.split("\n"));
           // let row = parseInt(document.getElementById("table_row").value),
           //     col = parseInt(document.getElementById("table_col").value);
           let row = null, col = null;
           if(table_input.value!==''){
              row = table_input.split("\n").length-2;
              col = table_input.split("\n")[0].split("\t").length;
           }else{
              table_input = null;
           }
           await this.tableDataList(row, col, table_input);
 
      	  // let row = this.state.row, col = this.state.col;

          //console.log(row);
          //console.log(col);

      	let table1 = "<![CDATA[<p>"+document.getElementsByName(this.state.eleId)[0].value+"</p>"+
                     "<table><thead><tr class='header'>";
        let tableHeadings = document.getElementsByClassName('tblhead'),
            tableValues = document.getElementsByClassName('tblvalue');
        for(let x of tableHeadings){
            table1 += "<th><em>"+x.value+"</em></th>";
        }
        table1 += "</tr></thead><tbody><tr class='odd'>";
        let count = 1;
        for(let y of tableValues){
        	if(count%col==0){
        		table1 += "</tr><tr class='odd'>";
        	}
        	table1 += "<td>"+y.value+"</td>";
        	++count;
        }
        table1 += "</tr></tbody></table>]]>";
        console.log(this.state)
        document.getElementsByName(this.state.eleId)[0].value = table1;
        document.getElementById('popup_close').click();
      }
      tableDataList = async (row, col, tableInput)=>{
      	 // await this.setState({row, col});
      	  let a = [];
      	  let d = col;
      	  let k = row*col;
          let i = 1;
      	  let h = d;
          
          let tableHeader = '';
      	  if(tableInput){
             tableHeader = tableInput.split("\n")[0].split("\t");
      	  }
      	  while(i<=h){
      	  	 a.push(<input className={"input-table margin-ryt-10 tblhead"} type="text" value={tableHeader[i-1]} key={i} name="ques_topic" placeholder={'Heading'+i} />);
             ++i;
      	  }
      	  a.push(<p className="margin-botm-15"></p>);
      	  i = 1;
      	  let tableRow = 1;
      	  let tableCol = 0;
      	  while(i<=k){
      	  	  //console.log(tableInput.split("\n"));
      	  	  let data = (tableInput.split("\n")[tableRow]).split("\t")[tableCol];
      	  	  console.log(tableRow)
      	  	  if(i%d==0){
                 a.push(<input className={"input-table margin-ryt-10 tblvalue"} value={data} type="text" key={i+'_'} name="ques_topic" placeholder="Enter value" />);
                 a.push(<p className="margin-botm-15"></p>);
                 ++tableRow;
                 tableCol = -1;
      	  	  }else{
      	  	  	 a.push(<input className={"input-table margin-ryt-10 tblvalue"} value={data} type="text" key={i+'_'} name="ques_topic" placeholder="Enter value" />);
      	  	  }
      	  	  ++i;
      	  	  ++tableCol;
      	  }
      	  await this.setState({tableList: a})
      }   
      addImage = (e)=>{
         let files = e.target.files[0];
         let reader = new FileReader();
             reader.addEventListener("load", async function () {
                  let {name: imgName, size: imgSize, type: imgMime} = files,
                      imgBase64 = reader.result
                  let {data} = await axios.post('/image-data', {imgName, imgSize, imgMime, imgBase64});
                       document.getElementsByName('image_data')[0].value = data.data;
             }, false);
         reader.readAsDataURL(files);
      }
      addRandomVariables = async ()=>{
        let input = document.getElementById('random_input');
        let {data} = await axios.post('/random-variables', {random_info: input.value});
        console.log(data);
      }
      render(){
      	 return(
           <Fragment>
              <div id="popup1" className="overlay">
        				<div className="popup">
        					<a className="close" href="#" id="popup_close">&times;</a>
        					<div className="content">
        						 {this.state.tableList.length>0 && this.state.tableList.map(x=>x)}
        						 <textarea id="table_input" className="table-input" rows="10" cols="20" placeholder="Copy and Paste from csv"></textarea>
        					</div> 
        					<footer className="txt-right">
        					      <input className="input-table margin-ryt-10 hide" type="text" id="table_row" placeholder="No of rows"/>
        					      <input className="input-table margin-ryt-10 hide" type="text" id="table_col" placeholder="No of cols"/>
        					      <button className="btn-default margin-top-20 hide margin-ryt-10" onClick={this.addTable}>Create table</button>
        					      <button className="btn-default margin-top-20" onClick={this.generateTableToEle}>Generate</button>
        					</footer>
        				</div>
			        </div>

              <div id="random_variables_popup" className="overlay">
                <div className="popup">
                  <a className="close" href="#" id="popup_close">&times;</a>
                  <div className="content">
                     <textarea id="random_input" className="table-input" rows="10" cols="20" placeholder="Copy and Paste from csv"></textarea>
                  </div> 
                  <footer className="txt-right">
                        <button className="btn-default margin-top-20 margin-ryt-10" onClick={this.addRandomVariables}>Create Variables</button>
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
                            <td><a href="#random_variables_popup" className="btn-default margin-top-20">Add Random variable</a></td> 
                          </tr>


                          <tr className="margin-top-5">
                            <td></td>
                            <td><input type="file" onChange={this.addImage}/></td> 
                          </tr>
                        
                          <tr className="margin-top-5">
                            <td></td>
                            <td><textarea className="input-box" name="image_data" rows="5" cols="30"></textarea></td> 
                          </tr>

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
        
             {/*<div className="uplaod-any">
               <div className="menu">
                  <ul className="menu-options">
                    <li className="menu-option"><input type="file"/></li>
                  </ul>
               </div>
             </div>
            */}
           </Fragment>
      	 )
      }
}

export default Home;