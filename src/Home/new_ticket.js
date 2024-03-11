import React, { Component } from 'react';
import {Header} from './header';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

var modules = {
  toolbar: [
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { align: [] }
    ],
    [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
  ]
};

var formats = [
  "header", "height", "bold", "italic",
  "underline", "strike", "blockquote",
  "list", "color", "bullet", "indent",
  "link", "image", "align", "size",
];

const validate = Yup.object({

    subject: Yup.string()
      .required('Subject is required'),
    project: Yup.string()
      .required('Project is required'),
    tasktype: Yup.string()
    .required('Task Type is required'),
    ticketseverity: Yup.string()
      .required("Ticket Severity is requrired"),
  });

  
export class new_ticket extends Component {
  constructor() {
		super();
		this.state = {
		  LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      ProjectList: [],
      EmailTo: '',
      HTMLBody: '',
      Auth:  JSON.parse(localStorage.getItem("auth")),
	  };
	}

componentDidMount(){
  const Auth =  JSON.parse(localStorage.getItem("auth"));
    if(!Auth){
     this.props.history.push('/login');
    }
	console.log('Pathname', window.location.pathname);
  var GetProject  = 'https://helpdeskservice.desss-portfolio.com/api/ClientCRUD/GetProjectNamebyEmpID?CompanyID='+this.state.LoginDatas.CompanyID+'&ClientID='+this.state.LoginDatas.ClientID+'&UserTypeID='+this.state.LoginDatas.UserTypeID+'&EmpID='+this.state.LoginDatas.ClientUserID;
  axios.get(GetProject)
  .then(res => {
   console.log('GetProject ',  res.data.data);
   this.setState({ ProjectList: res.data.data });
 })
  .catch(error => {
  console.log(error);
 })
}

GetTaskType(){
  var GetTaskType = 'https://helpdeskservice.desss-portfolio.com/api/ClientCRUD/GettblLookupModuleTypes';
  axios.get(GetTaskType)
  .then(res => {
     console.log('GetTaskType',  res.data.data);
     
 })
  .catch(error => {
  console.log(error);
 })
}

EmailToData = (e) =>{
  var emailTo = 'https://helpdeskservice.desss-portfolio.com/api/ClientCRUD/GetEmailTobyProjectName?ProjectID=1341';
  axios.get(emailTo)
  .then(res => {
     console.log('EmailTo',  res.data.data);
     this.setState({ EmailTo: res.data.data });
     
 })
  .catch(error => {
  console.log(error);
 })
}

TextChange = (e) => {
  this.setState({ HTMLBody: e });
  console.log("content---->", this.state.HTMLBody);

};

CancelMethod(){
  this.props.history.push('/tickets');
}
  render() {
    return (
      <div>
         <Header />
         <Formik
          initialValues={{
            subject: '',
            project: '',
            tasktype: '',
            ticketseverity: '',
          }}
          validationSchema={validate}
          onSubmit={values => {
            var Body = document.getElementById('Body').value;
            // var HTMLBody = document.getElementById('Body').value;
            var HTMLBody = this.state.HTMLBody;

                var TicketSeverityID;
                var Tktsev = values.ticketseverity;
                if(Tktsev === 'Critical'){
                  TicketSeverityID = 1;
                }else if(Tktsev === 'High'){
                  TicketSeverityID = 2;
                }else if(Tktsev === 'Medium'){
                  TicketSeverityID = 3;
                }else if(Tktsev === 'Low'){
                  TicketSeverityID = 4;
                }


            console.log(values);
            var insert = 'https://helpdeskservice.desss-portfolio.com/api/ClientCRUD/InsertTicketbyEmp?EmpID='+this.state.LoginDatas.ClientUserID+'&ToEmail=kamali@desss.com,dev@desss.com,yogesh@desss.com&ProjectID='+values.project+'&Subject='+values.subject+'&HTMLBody='+HTMLBody+'&Body='+Body+'&TicketSeverity='+TicketSeverityID+'&TaskType='+values.tasktype+'&ClientName='+ this.state.LoginDatas.ClientName;
            axios.post(insert)
            .then(res => {
              console.log('Insert Ticket',  res.data.data);
              this.props.history.push('/tickets');
            })
            .catch(error => {
              console.log(error);
            })
            // alert('sucessfully');
            // this.props.history.push('/tickets');
          }}
        >

{formik => (




<div classname="centerBG" style={{width:'90%',margin:'auto', maxWidth: "1695px"}}>
  <table width="100%">
    <tbody>
      <tr>
        <td align="right" style={{position:"relative"}}>
          <a className='ticket-back' href='/tickets' >Go To Ticket List</a>
        </td>
      </tr>
      <tr>
        <td className="heading_bg" style={{padding: "23px 10px"}}>Assign Task</td>
      </tr>
      <tr className='edit-page'>
        <td>
         <Form>
         <table>
            <tbody>
              <tr id="trsubject">
                <td className="auto-style2">Subject :
                </td>
                <td className="auto-style1">
                <Field id="txtSubject" name="subject" type="text" defaultValue="Good morning" style={{fontFamily: 'Calibri', fontSize: '14', width: '500'}} />
                <ErrorMessage component="label" className=" form-label text-danger" name="subject" />
                  {/* <input name="ctl00$MainContent$txtSubject" type="text" defaultValue="Good morning" id="txtSubject" style={{fontFamily: 'Calibri', fontSize: '14', width: '500'}} /> */}
                </td>
              </tr>
              <tr id="project">
                <td id="tkprojecttd" className="auto-style2">Project :</td>
                <td id="tkprojecttd1" className="auto-style1">
                  <Field id="ddlTkproject" name="project" as="select" style={{fontFamily: 'Calibri', fontSize: '14', width: '500'}} >
                  <option selected="selected" value="">---Select---</option>
                    <option value={1750}>Award QB integration</option>
                    <option value={1341}>Awards</option>
                  </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="project" />
                </td>
              </tr>
              <tr id="Tasktypeid">
                <td id="tkTaskTypetd" className="auto-style2">Task Type :</td>
                <td id="tkTaskTypetd1" className="auto-style1">
                <Field id="ddlTkTaskType" name="tasktype" as="select" style={{fontFamily: 'Calibri', fontSize: 14}} >
                <option selected="selected" value="">---Select---</option>
                    <option value={2}>Bug</option>
                    <option value={27}>Content Writing</option>
                    <option value={3}>Enchancement</option>
                    <option selected="selected" value={25}>Knowledge Transfer</option>
                    <option value={22}>Maintenance Server  ubuntu AWS</option>
                    <option value={29}>Python</option>
                    <option value={28}>SEO</option>
                    <option value={14}>Team Meeting</option>
                    <option value={5}>Testing</option>
                    <option value={15}>Training</option>
                    <option value={26}>Website changes</option>
                  </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="tasktype" />
                </td>
              </tr>
              <tr id="TicketSeverity">
                <td className="auto-style2">
                  Ticket Severity:
                </td>
                <td className="auto-style1">
                <Field id="ddlTicketSeverity" name="ticketseverity" as="select" style={{fontFamily: 'Calibri', fontSize: 14}} >
                <option selected="selected" value="">---Select---</option>
                    <option value={'Critical'}>Critical</option>
                    <option selected="selected" value={'High'}>High</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'Low'}>Low</option>
                  </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="ticketseverity" />
                </td>
              </tr>
              {/* <tr id="attachmentid">
                <td className="auto-style2">Attachment :</td>
                <td className="auto-style1">
                  <input type="file" name="Attachment" id="flTicket" />
                  <a href="#" id="hplAttach" style={{textDecoration: 'none'}}>
                    <span id="lbtnView" /></a>
                  <a id="hl_file" href="" target="_blank">Attachment</a>
                </td>
              </tr>
              <tr id="ticketRow">
                <td className="auto-style2">Screen Shot :</td>
                <td className="auto-style1">
                  <input type="file" name="ScreenShot" id="flScreenShot" />
                  <a href="#" id="hplScreen" style={{textDecoration: 'none'}}>
                    <span id="Label1" /></a>
                  <a id="Hl_scheernshot" href="" target="_blank">ScreenShot</a>
                </td>
              </tr> */}
              <tr id="notes">
                <td className="auto-style2">Notes :</td>
                <td className="auto-style1">
                  <textarea name="ctl00$MainContent$txtNotes" rows={2} cols={20} id="Body" style={{fontFamily: 'Calibri', fontSize: 14}} />
                </td>
              </tr>
              <tr id="notes">
                <td className="auto-style2">HTML Body :</td>
                <td className="auto-style1">
                  {/* <textarea name="ctl00$MainContent$txtNotes" rows={2} cols={20} id="HTMLBody" style={{fontFamily: 'Calibri', fontSize: 14, width: 400}} /> */}


            <div>
              <ReactQuill
               theme="snow"
               modules={modules}
               formats={formats}
               placeholder="write your content ...."
               onChange={this.TextChange}
              >
           </ReactQuill>
         </div>

                </td>
              </tr>
              <tr>
                <td></td>
                <td style={{display: 'flex'}}>
                <button name="ctl00$MainContent$bnCancel" value="update" class="save-bnOk" >Save</button>
                <span id="lblMsg" style={{color:'Red'}}></span>
                <button name="ctl00$MainContent$bnCancel" value="Cancel" class="save-bncal" onClick={() => { this.CancelMethod();}}>Cancel</button>
                </td>
              </tr>
            </tbody>
          </table>
         </Form>
        </td>
      </tr>
    </tbody>
  </table>
</div>

)}

</Formik>
    </div>
    )
  }
}

export default new_ticket