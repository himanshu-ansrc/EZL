import express from 'express'
import path from 'path'
import CONFIG from './../config'
import bodyParser from 'body-parser'
import crypto from 'crypto'
import fs from 'fs'
import jsontoxml from 'jsontoxml'
import XMLFormatter from 'xml-formatter'
import Template from './../template.js'

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



const CURRENT_WORKING_DIR = process.cwd();

app.use(express.static(path.join(CURRENT_WORKING_DIR, 'public')));

//comment out before building for production
import devBundle from './devBundle'
//comment out before building for production
devBundle.compile(app)

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))


app.get('/list-wrksheets', (req, res)=>{
       res.send(JSON.parse(fs.readFileSync('public/xmls/worksheets.json')));
})

app.get('*', (req, res)=>{
   res.send(Template());
})

function tutelageTempalte(references){
		 let params = [];
		 if(references.paramsArr.length>0){
		 	for(let x of references.paramsArr){
	            params.push({
	            	   name: 'param',
	            	   attrs: {
	            	   	  name: x.key,
	            	   	  type: x.type
	            	   }
	            })
		 	}
		 }
	     return {
	     	  name : 'tutelage_tmpl',
	     	  attrs: {
	     	  	   'name': references.work_tmp_name
	     	  },
              children:[
                    {
                    	name:'params',children : params,
                    }
              ]
	     }
}

function worksheetTempalte(references){
	     let prob_refs = [];        
	     if(references.paramsArr.length>0){
		 	for(let x of references.paramsArr){
	            prob_refs.push({
	            	   name: 'bind',
	            	   attrs: {
	            	   	  name: x.key,
	            	   	  val: x.value
	            	   }
	            })
		 	}
	     }
	     return {
	     	  name : 'worksheet_tmpl',
	     	  attrs: {
	     	  	   'name': references.work_tmp_name
	     	  },
	     	  children:[
                    {name:'problem_ref', 
                    attrs: {
                         'name': references.prob_tmp_name
                    },
                    children : prob_refs}
              ]
	     }
}


function problemRefTemplate(references){
	     let prob_refs = [];        
	     if(references.paramsArr.length>0){
		 	for(let x of references.paramsArr){
	            prob_refs.push({
	            	   name: 'bind',
	            	   attrs: {
	            	   	  name: x.key,
	            	   	  val: x.value
	            	   }
	            })
		 	}
	     }
	     return {
                      name:'problem_ref', 
                      attrs: {
                         'name': references.prob_tmp_name
                      },
                      children : prob_refs
                }
}


function solutionTemplate(references){
	     if(references.ques_type==="normal"){
               return normalSolutionTemplate();
	     }else if(references.ques_type==="mcq"){
               return multipleChoiseSolutionTemplate(references);
	     }else if(references.ques_type==="fib"){
	     	   return fibSolutionTemplate(references);
	     }
	                   
}

function problemTemplate(references){
	 let params = [];
	 let multiQuesText = '';
	 if(references.paramsArr.length>0){
	 	for(let x of references.paramsArr){
            params.push({
            	   name: 'param',
            	   attrs: {
            	   	  name: x.key,
            	   	  type: x.type
            	   }
            })
	 	}
	 }
     let text = `<p>${references.ques_txt}</p>`;
 

     if(references.ques_type==="fib"){
	    let ques_txt = (references.ques_txt).replace('___', '<fib type="int" name="AA"/>');
		text = `<group><p>${ques_txt}</p>`;
      }



      if(references.ques_type==="mcq"){
	    let options = (references.ans_txt).split("\n");
		let optionsWrapper = '';
		let c = 0, sol='';
		for(let x=0; x<options.length; x++){
			let k = options[x].split('##');
			let opt = k[1]==1? "AA" : "c"+c
			optionsWrapper += '<choice name="'+opt+'">'+k[0]+'</choice>';
			++c;
		}

		if(references.ques_img!==''){
         let imgData = (references.ques_img).split("##");
         let src = (imgData[0]).trim(),
             width = (imgData[1]).trim(),
             height = (imgData[2]).trim();
            imgData = `<img src=${src} width=${width} height=${height} />`;
            text = `<group><p>${references.ques_txt}</p><p>${imgData}</p>${optionsWrapper}`;
        }else
	    	text = `<group><p>${references.ques_txt}</p>${optionsWrapper}`;
        }


      if(references.ques_img!=='' && references.ques_type!=="mcq"){
         let imgData = (references.ques_img).split("##");
            console.log(imgData)
         let src = (imgData[0]).replace("\n", "").trim(),
             width = (imgData[1]).replace("\n", "").trim(),
             height = (imgData[2]).replace("\n", "").trim();
            imgData = `<img src=${src} width=${width} height=${height} />`;
            text += imgData;
      }
    
	 return {
              name : `problem_tmpl`,
              attrs: {
                     'name': references.prob_tmp_name,
                      width: '400'
                 },
              text: text,
              children:[
                    {
                    	name:'params',children : params
                    },
                    {
                    	name:'solutions',
                    	text: solutionTemplate(references)
                    }
              ]
        }
}


function multipleChoiseSolutionTemplate(references){
	let options = (references.ans_txt).split("\n");
	let optionsWrapper = '';
	let c = 0, sol='';
	for(let x=0; x<options.length; x++){
		let k = options[x].split('##');
		let opt = k[1]==1? "AA" : "c"+c
		optionsWrapper += '<cond><choice_ref name="'+opt+'"/>== '+k[1]+'</cond>';
		++c;
	}
	return `<solution><grid columns="150px" gap="5px">${optionsWrapper}</grid></solution></group>`;
}


function fibSolutionTemplate(references){
	let ans_txt = references.ans_txt;
	return `<solution><cond><fib_ref name="AA"/>==${ans_txt}</cond></solution></group>`;
}

function normalSolutionTemplate(){
	return `<solution></solution>`;
}

function worksheetRefTempalte(references){
	 	 return {
	     	  name : 'worksheet_ref',
	     	  attrs: {
	     	  	   'name': references.work_tmp_name
	     	  }
	     }
}


function SB(question){
	return "<sectionBreak><stem><![CDATA[<p>"+question+"</p>]]></stem></sectionBreak>";		    
}

function TF(question){
	return `<trueFalse>
		      <stem><![CDATA[<p>${question.ques_txt}</p>]]></stem>
		      <commonFeedback><![CDATA[<p>${question.tf_ques_feed}</p>]]></commonFeedback>
		      <trueInfo>
		        <credit>1</credit>
		        <feedback><![CDATA[<p>${question.tf_true_feed}</p>]]></feedback>
		      </trueInfo>
		      <falseInfo>
		        <credit>0</credit>
		        <feedback><![CDATA[<p>${question.tf_false_feed}</p>]]></feedback>
		      </falseInfo>
            </trueFalse>`;		    
}

function CA(question){
	return `<checkAll>
		      <stem><![CDATA[<p>cata&nbsp; question</p>]]></stem>
		      <commonFeedback><![CDATA[<p>CATA feedback</p>]]></commonFeedback>
		      <choices>
		        <choice>
		          <distractor><![CDATA[<p>dist 1</p>]]></distractor>
		          <creditChecked>1</creditChecked>
		          <creditUnchecked>0</creditUnchecked>
		          <feedbackChecked></feedbackChecked>
		          <feedbackUnchecked></feedbackUnchecked>											 
		        </choice>
		        <choice>
		          <distractor><![CDATA[<p>dist 2</p>]]></distractor>
		          <creditChecked>1</creditChecked>
		          <creditUnchecked>0</creditUnchecked>
		          <feedbackChecked></feedbackChecked>
		          <feedbackUnchecked></feedbackUnchecked>											 
		        </choice>
		        <choice>
		          <distractor><![CDATA[<p>dist 3</p>]]></distractor>
		          <creditChecked>0</creditChecked>
		          <creditUnchecked>1</creditUnchecked>
		          <feedbackChecked></feedbackChecked>
		          <feedbackUnchecked></feedbackUnchecked>											 
		        </choice>
		      </choices>
		    </checkAll>`;		    
}


// function imageData(imgData){
// 	let {imgName, imgSize, imgMime, imgBase64} = 
// 	return `<media_set>
//               <internal_media>
//                   <name>${imgName}</name>
// 		          <mediaData>
// 		           <size>${imgSize}</size>
// 		           <mime_type>${imgMime}</mime_type>
// 		           <creation>1544473323754</creation>
// 		           <modified>1544473323754</modified>
// 		           <height>0</height>
// 		           <width>0</width>
// 		           <data>${imgBase64}</data>
// 		          </mediaData>
//                </internal_media>
//             </media_set>`;
// }

app.post('/image-data', (req, res)=>{
    let {imgName, imgSize, imgMime, imgBase64} = req.body;
    imgBase64 = imgBase64.split(',')[1];
	res.send({
		data: `<media_set>
          <internal_media>
              <name>${imgName}</name>
	          <mediaData>
	           <size>${imgSize}</size>
	           <mime_type>${imgMime}</mime_type>
	           <creation>1544473323754</creation>
	           <modified>1544473323754</modified>
	           <height>0</height>
	           <width>0</width>
	           <data>${imgBase64}</data>
	          </mediaData>
           </internal_media>
        </media_set>`
	}) ;
})


app.post('/random-variables', (req,res)=>{
	 const randomList = req.body.random_info.split('#');
	 let allVariables = '';
	 for(let x of randomList){
         let varible = x.split('\n');
         console.log(varible);
         let listData = '';
         varible = varible.filter(function (el) {
		  return el != '';
		 });
		 console.log(varible)
         for(let y=1; y<varible.length; y++){
         	 listData += `<row><![CDATA[${varible[y]}]]></row>`;
         }
         let data = `<pooledRandom>
                      <name>${(varible[0]).trim()}</name>
                      <arrayed>true</arrayed>
                      <rows>${listData}</rows>
                     </pooledRandom>`;
         allVariables += data;
	 }
     res.send(`<randomVariables>${allVariables}</randomVariables>`);
})


function categories(ques_type, level){
	 return `<categories>
		      <internal_category>
		        <catid>13570164620437362</catid>
		        <title><![CDATA[Learning Objective: 01-01 ${ques_type} Questions]]></title>
		      </internal_category>
		      <internal_category>
		        <catid>13570164620437396</catid>
		        <title><![CDATA[Topic: 01-01 ${ques_type}]]></title>
		      </internal_category>
		      <internal_category>
		        <catid>1136040701596</catid>
		        <title><![CDATA[Difficulty: ${level}]]></title>
		      </internal_category>
		      <internal_category>
		        <catid>1136040746617</catid>
		        <title><![CDATA[Bloom's: Remember]]></title>
		      </internal_category>
		    </categories>`;
}


function questionProperties(){
	return `<questionProperties>
		        <property name="layout" type="string" value="vertical" />
		        <property name="pageTag" type="string" value="" />
		        <property name="completeIncompleteGrading" type="string" value="false" />
		        <property name="instructor_info" type="string" value="" />
		        <property name="forceManualScoring" type="string" value="automatic" />
		        <property name="commonFeedback" type="string" value="&lt;p&gt;Feedback test - answer is B. There is an image below.&lt;/p&gt;
		        &lt;p&gt;%media:mgh_logo_rgb_57_96dpi_jpg.ext%&lt;/p&gt;" />
		        <property name="problemSolution" type="string" value="" />
		        <property name="audioPlayerPosition" type="string" value="above" />
		        <property name="otherItem" type="string" value="" />
		        <property name="useCommonFeedback" type="boolean" value="false" />
		        <property name="order" type="string" value="as listed" />
	        </questionProperties>`;
}

function MC(ques_items){
	  let count = ques_items.mc_answer.split("#")[0];
	  let answer = ques_items.mc_answer.split("#")[1];
      let data = ``;
      let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
      for(let x=1; x<=count; x++){
     	  let a = x==answer? 1: 0;
  	      data += `<choice>
	              <distractor><![CDATA[${alpha[x-1]}]]></distractor>
	                <credit>${a}</credit>
	              <feedback></feedback>
	             </choice>`;   	  
      }
	  return `<multipleChoice>
		        <stem><![CDATA[<p>${ques_items.ques_txt}</p>
		        </stem>
		         <commonFeedback><![CDATA[<p>Feedback test - ${ques_items.mc_ques_feed}</p>]]>
		         </commonFeedback>
			        <choices>
			        ${data}
			        </choices>
		      </multipleChoice>`;
}

function WK(ques_items){
	  console.log(ques_items)
	  let total_answers = ques_items.total_answers;
	  let multipleArray = [], booleanArray = [], numericArray = [];
	  for(let x=1; x<=total_answers; x++){
	  	    let booleanJSON  = {} , numericJSON = {};
	  	    let multipleChoise = ques_items["multiple_answer_"+x];
	  	    if(multipleChoise)
               multipleArray.push(multipleChoise);
	  	    if(ques_items["boolean_variable_"+x])
               booleanJSON['boolean_variable'] = ques_items["boolean_variable_"+x];
	  	    if(ques_items["boolean_answer_"+x])
               booleanJSON['boolean_answer'] = ques_items["boolean_answer_"+x];
            if(ques_items["numeric_variable_"+x])
               numericJSON['numeric_variable'] = ques_items["numeric_variable_"+x];	  	    
            if(ques_items["numeric_answer_"+x])
               numericJSON['numeric_answer'] = ques_items["numeric_answer_"+x];	
            if(ques_items["numeric_precisiontype_"+x])
               numericJSON['numeric_precisiontype'] = ques_items["numeric_precisiontype_"+x];
            if(ques_items["numeric_precisionstring_"+x])
               numericJSON['numeric_precisionstring'] = ques_items["numeric_precisionstring_"+x];
            if(ques_items["numeric_formatstring_"+x])
               numericJSON['numeric_formatstring'] = ques_items["numeric_formatstring_"+x];

            if(Object.keys(booleanJSON).length!==0)
               booleanArray.push(booleanJSON)
            if(Object.keys(numericJSON).length!==0) 
               numericArray.push(numericJSON)
           
	  }

	  console.log(booleanArray)
	  console.log(multipleArray);
	  console.log(numericArray);
      
      let booleanString = '', numericString = '', multipleString = '';
      if(booleanArray.length>0){
      	    for(let x of booleanArray){
      	        booleanString += `<booleanAnswer>
				           <name><![CDATA[${x['boolean_variable']}]]></name>
				              <weight>100</weight>
				           <answerProperties>
				               <property name="completeIncompleteGrading" type="string" value="false" />
				           </answerProperties>
				            <correctAnswer>${x['boolean_answer']}</correctAnswer>
			              </booleanAnswer>`;	
      	    }

      }  
      if(multipleArray.length>0){
      	    for(let x of multipleArray){
	            multipleString += `<multipleChoiceAnswer>
							          <name><![CDATA[C]]></name>
							          <weight>100</weight>
							          <answerProperties>
							            <property name="presentation" type="string" value="dropDown" />
							            <property name="completeIncompleteGrading" type="string" value="false" />
							            <property name="width" type="string" value="" />
							            <property name="prompt" type="string" value="" />
							            <property name="scramble" type="string" value="true" />
							          </answerProperties>
							          <choices>
							            <choice>
							              <distractor><![CDATA[&#8598;]]></distractor>
							              <correct>false</correct>
							            </choice>
							            <choice>
							              <distractor><![CDATA[&#8599;]]></distractor>
							              <correct>false</correct>
							            </choice>
							            <choice>
							              <distractor><![CDATA[&#8601;]]></distractor>
							              <correct>false</correct>
							            </choice>
							            <choice>
							              <distractor><![CDATA[&#8600;]]></distractor>
							              <correct>true</correct>
							            </choice>
							          </choices>
							        </multipleChoiceAnswer>`;
      	    }
      }
      if(numericArray.length>0){
      	    for(let x of numericArray){
	            numericString += `<numberAnswer>
						          <name><![CDATA[${x['numeric_variable']}]]></name>
						          <weight>100</weight>
						          <answerProperties>
						            <property name="completeIncompleteGrading" type="string" value="false" />
						          </answerProperties>
						          <fieldWidth>7</fieldWidth>
						          <correctAnswer><![CDATA[${x['numeric_answer']}]]></correctAnswer>
						          <formatString><![CDATA[${x['numeric_precisiontype']}]]></formatString>
						          <precisionString><![CDATA[${x['numeric_precisionstring']}]]></precisionString>
						          <units></units>
						          <precisionType>${x['numeric_formatstring']}</precisionType>
						          <engineeringUnits>false</engineeringUnits>
						          <currency>false</currency>
						       </numberAnswer>`;	
      	    }
      }
	  let answer = ``;
	  // if(ques_items.ans_type='0'){
	  // 	    answer = `<booleanAnswer>
			// 	          <name><![CDATA[A]]></name>
			// 	          <weight>100</weight>
			// 	          <answerProperties>
			// 	            <property name="completeIncompleteGrading" type="string" value="false" />
			// 	          </answerProperties>
			// 	          <correctAnswer>true</correctAnswer>
			//          </booleanAnswer>`;
	  // }else if(ques_items.ans_type='1'){
   //          answer = `<numberAnswer>
			// 	          <name><![CDATA[B]]></name>
			// 	          <weight>100</weight>
			// 	          <answerProperties>
			// 	            <property name="completeIncompleteGrading" type="string" value="false" />
			// 	          </answerProperties>
			// 	          <fieldWidth>7</fieldWidth>
			// 	          <correctAnswer><![CDATA[[A(3)]]]></correctAnswer>
			// 	          <formatString><![CDATA[#.####]]></formatString>
			// 	          <precisionString><![CDATA[2]]></precisionString>
			// 	          <units></units>
			// 	          <precisionType>2</precisionType>
			// 	          <engineeringUnits>false</engineeringUnits>
			// 	          <currency>false</currency>
			// 	       </numberAnswer>`;
	  // }else if(ques_items.ans_type='2'){
   //          answer = `<multipleChoiceAnswer>
			//           <name><![CDATA[C]]></name>
			//           <weight>100</weight>
			//           <answerProperties>
			//             <property name="presentation" type="string" value="dropDown" />
			//             <property name="completeIncompleteGrading" type="string" value="false" />
			//             <property name="width" type="string" value="" />
			//             <property name="prompt" type="string" value="" />
			//             <property name="scramble" type="string" value="true" />
			//           </answerProperties>
			//           <choices>
			//             <choice>
			//               <distractor><![CDATA[&#8598;]]></distractor>
			//               <correct>false</correct>
			//             </choice>
			//             <choice>
			//               <distractor><![CDATA[&#8599;]]></distractor>
			//               <correct>false</correct>
			//             </choice>
			//             <choice>
			//               <distractor><![CDATA[&#8601;]]></distractor>
			//               <correct>false</correct>
			//             </choice>
			//             <choice>
			//               <distractor><![CDATA[&#8600;]]></distractor>
			//               <correct>true</correct>
			//             </choice>
			//           </choices>
			//         </multipleChoiceAnswer>`;
	  // }
	  console.log(numericString);
	  answer = booleanString+numericString+multipleString;
  	  let data = `<worksheet>
	                  <stem><![CDATA[<p>${ques_items.ques_txt}</p></stem>
			          <commonFeedback><![CDATA[<p>Feedback test - ${ques_items.mc_ques_feed}</p>]]>
			          </commonFeedback>
			          <answers>${answer}</answers>
                  </worksheet>`;
	  return data;
}

app.post('/', (req, res)=>{
	    let text = null;
        let question =   `<question>
                          <title><![CDATA[I am a section break]]></title>
                          <multipart>${req.body.ques_id}</multipart>
                          <type>${req.body.ques_type}</type>`;
         
        req.body.ques_txt = req.body.ques_txt.replace(/<media>.+<\/media>/ig, function (match) {
        	      match = match.replace('<media>', '');
        	      match = match.replace('</media>', '');
        	      let k = match.split('.');
        	      let a = k.pop();
        	      let b = k.join('');
        	      if(a=='mml'){
                     return "%" + "media:" + b + "_"+ a+"%"  ;
        	      }else
				     return "%" + "media:" + b + "_"+ a + ".ext"+"%"  ;
				}
        );
        if(req.body.ques_type=="SB"){
           question += SB(req.body.ques_txt)
        }
        if(req.body.ques_type=="TF"){
           question += TF(req.body)
        }
        if(req.body.ques_type=="CA"){
           question += CA(req.body)
        }
        if(req.body.ques_type=="MC"){
           question += categories("Multiple Choice", req.body.ques_level);
           question += questionProperties();
           question += MC(req.body)
        }
        if(req.body.ques_type=="WK"){
           question += categories("Multiple Choice", req.body.ques_level);
           question += questionProperties();
           question += WK(req.body);
        }
        text = `${question}
               </question>`;
        
        let xml = `<questionSet>
                     ${text}
                  </questionSet>`
	    // let xml = jsontoxml([{
	    // 	 name: 'questionSet',
	    // 	 text: text
	    // }]);
	    res.send(xml.toString());
	    //console.log(`<?xml version="1.0" encoding="UTF-8"?>${xml}`)
	    // const wrksheetName = (req.body.work_tmp_name).trim();
	    // const newwrksheetName = req.body.new_work_tmp_name ? (req.body.new_work_tmp_name).trim() : '';
     //    if(newwrksheetName.length>0){
     //    	req.body.work_tmp_name = newwrksheetName;
     //    }
	    // const workSheets = JSON.parse(fs.readFileSync('public/xmls/worksheets.json'));
	    // if(workSheets[wrksheetName]){
     //       let problemTemp = problemTemplate(req.body),
     //           preWrkTemplate = JSON.parse(fs.readFileSync('public/xmls/'+wrksheetName+'.txt'));

     //           //ADD PROBLEM TO TEMPLATE 
     //           preWrkTemplate.unshift(problemTemp);

     //           //ADD PROBLEM REF TO TEMPLATE
     //           for(let x=0; x<preWrkTemplate.length; x++){
     //           	   if(preWrkTemplate[x]['name']=='worksheet_tmpl'){
     //           	   	  preWrkTemplate[x]['children'].unshift(problemRefTemplate(req.body))
     //           	   }
     //           }
     //           //STORE NEW TEMPALTE 
     //           fs.writeFileSync('public/xmls/'+wrksheetName+'.txt', JSON.stringify(preWrkTemplate))               
     //           let d = jsontoxml(
     //               preWrkTemplate
     //           )
     //           res.send(XMLFormatter(`<xml>${d}</xml>`))
	    // }else{
     //         let data = [
		   //  	 tutelageTempalte(req.body),
		   //       problemTemplate(req.body),
		   //       worksheetTempalte(req.body),
		   //       worksheetRefTempalte(req.body)
		   //  ]
	    //     let xml = jsontoxml(data);
	    //     workSheets[newwrksheetName] = newwrksheetName;
	    //     fs.writeFileSync('public/xmls/worksheets.json', JSON.stringify(workSheets))
	    //     fs.writeFileSync('public/xmls/'+newwrksheetName+'.txt', JSON.stringify(data))
	    //     res.send(XMLFormatter(`<xml>${xml}</xml>`))

	    // }
});

app.listen(CONFIG.port, (err)=>{
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', CONFIG.port)
})
