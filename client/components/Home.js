import React, {Component, Fragment} from 'react';
import axios from 'axios'
import Test from './Test';
import ReactDND from './ReactDND'

class Home extends Component{
    xmlComponentsdata = {};
	  state = {
           QType: "SB",
           tableList : [],
           xmlList : [],
           ansType: [],
           typeBoolean: [],
           typeNumeric: [],
           typeMultiple: []
	  }
    componentDidMount(){
         
    }
	  handleChange = (e)=>{
	  	 this.setState({ QType: e.target.value })
	  }
	  dataSubmit = async (e)=>{
         e.preventDefault();
         let obj = {};
        // console.log( e.target.elements)
         for(let x of e.target.elements){
         	if(x.type!=='submit'){
               console.log(x.type)
               if(x.type=='radio'){

               }
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
        		     <td className="flex-base"><textarea className="input-box" name="ques_txt" rows="5" cols="30"></textarea>{/*<a href="#popup1" className="btn-default"  onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a>*/}</td> 
        		   </tr>
          )
    }
    TF = ()=>{
            return (
               <Fragment>
	              <tr className="margin-top-5">
      				       <td><label>Question</label></td>
      			         <td className="flex-base"><textarea className="input-box" name="ques_txt" rows="5" cols="30"></textarea>{/*<a href="#popup1" className="btn-default" onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a>*/}</td> 
      				  </tr>
      				  <tr className="margin-top-5">
      				    <td><label>Common feed</label></td>
      				    <td className="flex-base"><textarea className="input-box" name="tf_ques_feed" rows="2" cols="10"></textarea>{/*<a href="#popup1" className="btn-default" onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a>*/}</td> 
      				  </tr>
      				  <tr className="margin-top-5">
      				    <td><label>TrueInfo feed</label></td>
      				    <td className="flex-base"><textarea className="input-box" name="tf_true_feed" rows="2" cols="10"></textarea>{/*<a href="#popup1" className="btn-default" onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a>*/}</td> 
      				  </tr>
      				  <tr className="margin-top-5">
      				    <td><label>FalseInfo feed</label></td>
      				    <td className="flex-base"><textarea className="input-box" name="tf_false_feed" rows="2" cols="10"></textarea>{/*<a href="#popup1" className="btn-default" onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a>*/}</td> 
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
      MC = ()=>{
            return (
               <Fragment>
                 <tr className="margin-top-5">
                   <td><label>Question3</label></td>
                   <td><textarea className="input-box" name="ques_txt" rows="5" cols="30"></textarea></td> 
                 </tr>
                 <tr className="margin-top-5">
                    <td><label>Choises with Answer</label></td>
                    <td className="flex-base"><textarea className="input-box" name="mc_answer" rows="2" cols="10"></textarea></td> 
                 </tr>
                 <tr className="margin-top-5">
                    <td><label>Common feed</label></td>
                    <td className="flex-base"><textarea className="input-box" name="mc_ques_feed" rows="2" cols="10"></textarea></td> 
                 </tr>
               </Fragment>
            )
      }
      handleAnswerTypeChange = (e)=>{
            let a = this.state.ansType;
            let count = a.length;
            document.getElementById('total_answers').value = count+1;
            if(e.target.value=='0'){
               a.push(this.generateBoolean(count+1));
               this.setState({ansType: a});
            }else if(e.target.value=='1'){
               a.push(this.generateNumeric(count+1));
               this.setState({ansType: a});
            }else{
               a.push(this.generateMultiple(count+1));
               this.setState({ansType: a});
            }
      }
      deleteAnswerType = (e, index)=>{
            let a = this.state.ansType;
            a = a.filter((x, y)=>y!==(index-1))
            this.setState({ansType: a});
      }
      generateBoolean = (index)=>{
          return (<Fragment>
                        <tr className="margin-top-5">
                          <td><label>Boolean Var</label></td>
                          <td className="flex-base"><textarea className="input-box" name={"boolean_variable_"+index} rows="2" cols="10"></textarea></td> 
                          <td className="delete"><a href="#" onClick={(e)=>this.deleteAnswerType(e, index)}><i class="icon wb-trash color-ff5722"></i></a></td>
                        </tr>
                        <tr className="margin-top-5">
                          <td><label>Answer</label></td>
                          <td className="flex-base"><textarea className="input-box" value="True" name={"boolean_answer_"+index} rows="2" cols="10"></textarea></td> 
                        </tr>
                        <hr/>
                 </Fragment>);
      }
      generateNumeric = (index)=>{
          return (<Fragment>
                        <tr className="margin-top-5">
                          <td><label>Numeric Var</label></td>
                          <td className="flex-base"><textarea className="input-box" name={"numeric_variable_"+index} rows="2" cols="10"></textarea></td> 
                          <td className="delete"><a href="#" onClick={(e)=>this.deleteAnswerType(e, index)}><i class="icon wb-trash color-ff5722"></i></a></td>
                        </tr>
                        <tr className="margin-top-5">
                          <td><label>Answer</label></td>
                          <td className="flex-base"><textarea className="input-box" name={"numeric_answer_"+index} rows="2" cols="10"></textarea></td> 
                        </tr>
                        <tr className="margin-top-5">
                          <td><label>precisionType</label></td>
                          <td className="flex-base">
                                <select className="input-box" name={"numeric_precisiontype_"+index}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="3">2</option>
                                </select>
                          </td> 
                        </tr>
                        <tr className="margin-top-5">
                          <td><label>precisionString</label></td>
                          <td className="flex-base"><textarea className="input-box" value="2" name={"numeric_precisionstring_"+index} rows="2" cols="10"></textarea></td> 
                        </tr>
                        <tr className="margin-top-5">
                          <td><label>formatString</label></td>
                          <td className="flex-base"><textarea className="input-box" value="#.####" name={"numeric_formatstring_"+index} rows="2" cols="10"></textarea></td> 
                        </tr>
                        <hr/>
                  </Fragment>);
      }
      generateMultiple = (index)=>{
          return (<Fragment>
                        <tr className="margin-top-5">
                          <td><label>Choises with Answer</label></td>
                          <td className="flex-base"><textarea className="input-box" name={"multiple_answer_"+index} rows="2" cols="10"></textarea></td> 
                          <td className="delete"><a href="#" onClick={(e)=>this.deleteAnswerType(e, index)}><i class="icon wb-trash color-ff5722"></i></a></td>
                        </tr>
                        <hr/>
                  </Fragment>);
      }
      WK = ()=>{
            return (
               <Fragment>
                 <tr className="margin-top-5">
                   <td><label>Question</label></td>
                   <td><textarea className="input-box" name="ques_txt" rows="5" cols="30"></textarea></td> 
                 </tr>
                 <hr/>
                 {this.state.ansType.length>0 && this.state.ansType.map(x=>x)}
                 <input type="hidden" id="total_answers" name="total_answers"/>
                 <tr className="margin-top-5">
                    <td><label>Question Type</label></td>
                    <td className="flex-base">
                        <select className="input-box" name="ans_type" onChange={this.handleAnswerTypeChange}>
                                <option value="0">Boolean</option>
                                <option value="1">Numeric</option>
                                <option value="3">Multiple</option>
                        </select>
                    </td> 
                  </tr>
               </Fragment>
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

      	// let table1 = "<![CDATA[<p>"+document.getElementsByName(this.state.eleId)[0].value+"</p>"+
       //               "<table><thead><tr class='header'>";

        let table1 = "<table><thead><tr class='header'>";
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
        //table1 += "</tr></tbody></table>]]>";
        table1 += "</tr></tbody></table>";
        console.log(this.state);
        document.getElementsByName(this.state.eleId)[0].value = table1;
        document.getElementById('show_xml').value = vkbeautify.xml(table1);
        this.xmlComponentsdata['table'] = vkbeautify.xml(table1);
        document.getElementById('popup_close').click();
        this.addXmlButton("table");
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
                       document.getElementById('show_xml').value = vkbeautify.xml(data.data);
                       this.xmlComponentsdata['image'] = vkbeautify.xml(data.data);
             }, false);
         reader.readAsDataURL(files);
         this.addXmlButton("image");
      }
      addRandomVariables = async ()=>{
        let input = document.getElementById('random_input');
        let {data} = await axios.post('/random-variables', {random_info: input.value});
        document.getElementById('random_input').value = data;
        document.getElementById('show_xml').value = vkbeautify.xml(data);
        this.xmlComponentsdata['randomvariable'] = vkbeautify.xml(data);
        document.getElementById('popup_close').click();
        this.addXmlButton("randomvariable");
      }
      toogleForm = ()=>{
          document.getElementById('main_form').classList.toggle('display-none');
      }
      addXmlButton(eletype){
          let a = this.state.xmlList;
              a.push(eletype);
          this.setState({xmlList : a});
      }
      removeXmlElement = (e)=>{
           let {id} = e.target.dataset;
           let a = this.state.xmlList.filter((x)=>x!==id);
           console.log(a);
           this.setState({xmlList: a});
      }
      exportXML = (e)=>{
          e.preventDefault();
          let a = document.getElementById('example1').getElementsByClassName('xml-list');
          let b = [];
          for(let x of a){           
              b.push(this.xmlComponentsdata[x.id]);
          }
          console.log(b)
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
                    {/*<table className="prob-table">
                      <tbody>
                         <tr className="margin-top-5">
                           <td><label>Open form</label></td>
                           <td><input type="checkbox" onClick={this.toogleForm}/></td> 
                         </tr>
                      </tbody>
                    </table>*/}
									<form method="post" onSubmit={this.dataSubmit} className="" id="main_form">
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
                                <option value="MC">MC</option>
                                <option value="WK">WK</option>
										            <option value="TF">TF</option>
										            <option value="CA">CA</option>
										            <option value="ES">ES</option>
										            <option value="FB">FB</option>
										            <option value="MA">MA</option>
										            <option value="NU">NU</option>
										            <option value="RA">RA</option>
										            <option value="SA">SA</option>
										            <option value="YN">YN</option>
										          </select>
											    </td> 
											  </tr>
											  <tr className="margin-top-5">
											    <td><label>Level</label></td>
											    <td><input className="input-box" type="text" name="ques_level" value="Easy" placeholder="Enter question objective"/></td> 
											  </tr> 
											  <tr className="margin-top-5">
											    <td><label>Topic</label></td>
											    <td><input className="input-box" type="text" name="ques_topic" placeholder="Enter question topic"/></td> 
											  </tr>
                          {this.state.QType=='SB' && this.SB()}
                          {this.state.QType=='TF' && this.TF()}
                          {this.state.QType=='CA' && this.CA()}
                          {this.state.QType=='MC' && this.MC()}
                          {this.state.QType=='WK' && this.WK()}
                          {/*
                           <tr className="margin-top-5">
                            <td></td>
                            <td><a href="#random_variables_popup" className="btn-default margin-top-20">Add Random variable</a></td> 
                          </tr>
                        
                            <tr className="margin-top-5">
                              <td></td>
                              <td><input type="file" onChange={this.addImage}/></td> 
                            </tr>
                          */}
                        
                          {/*<tr className="margin-top-5">
                            <td></td>
                            <td><textarea className="input-box" name="image_data" rows="5" cols="30"></textarea></td> 
                          </tr>*/}
                          
										  	  <tr className="margin-top-5">
										        <td></td>
											      <td><button  className="btn-default margin-top-20">Generate</button></td> 
											    </tr>
										   </tbody>
										</table>									
									</form>
                  {/*<table className="prob-table">
                      <tbody>
                         <tr className="margin-top-5">
                           <td><label>Generate table</label></td>
                           <td><a href="#popup1" className="btn-default" onClick={()=>this.setState({eleId: 'ques_txt'})}>Add</a></td> 
                         </tr>
                      </tbody>
                    </table>
                    <table className="prob-table">
                      <tbody>
                         <tr className="margin-top-5">
                           <td><label>Random variable</label></td>
                           <td><a href="#random_variables_popup" className="btn-default margin-top-20">Generate</a></td> 
                         </tr>
                      </tbody>
                    </table>
                    <table className="prob-table">
                      <tbody>
                         <tr className="margin-top-5">
                           <td><label>Add image</label></td>
                           <td><input type="file" onChange={this.addImage}/></td> 
                         </tr>
                      </tbody>
                    </table>
                    <table className="prob-table">
                      <tbody>
                         <tr className="margin-top-5">
                           <td></td>
                           <td><a href="" className="btn-default" onClick={this.exportXML}>Add to xml</a></td> 
                         </tr>
                      </tbody>
                    </table>
                    */}
			        	 	  </div>
                    <div>
                    	<textarea id="show_xml" rows="30" cols="50" placeholder="Output as XML"></textarea>
                    </div>
                    <div className="xml-list-box">
                            <div className="margin-top-7">
                              <div id="example1" className="list-group col">
                              {this.state.xmlList.length>0 && this.state.xmlList.map((res)=>{
                                  return (<div className="display-block">
                                              <div className="list-group-item">
                                                   <a className="btn-default display-inline margin-top-20 xml-list" id={res}>{res}</a>
                                                   <a onClick={this.removeXmlElement} className="margin-lft-20 pointer" data-id={res}>X</a>
                                              </div>
                                          </div> );
                              })}
                              </div>
                            </div>
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