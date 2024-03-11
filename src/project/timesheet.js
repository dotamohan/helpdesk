import React, { Component } from 'react'
import Header from '../Home/header'
import calelogo from '../images/DXR.gif'
import DatePicker from "react-datepicker";
import moment from 'moment';
import axios from 'axios';
import Footer from '../Home/footer';
import Loader from '../images/loader2.gif';


export class timesheet extends Component {

  constructor() {
    super();
    
    this.state = {
      LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      PrjTaskAllotID:  localStorage.getItem("PrjTaskID"),
      TaskName:  localStorage.getItem("TaskName"),
      Emptimesheet : [] ,
      profile_data : [] ,
      alloted_data : [] ,
      task_data : [] ,
      tool_data : [] ,
      GetTask_data : [] ,
      timesheet : [] ,
      WorkDate: moment(new Date()).format("MM/DD/YYYY"),
      ModuleID: '',
      ProjectId: '',
      Task_Screen_Name: '',
      TaskCategoryID: '',
      ModuleData: [],
      TaskDatas: [],
      time: [],
      TaskID: '',
      TaskStatusID: '',
      return_leakage: '',
      supply_leakage: '',
      Auth:  JSON.parse(localStorage.getItem("auth")),
      LoaderShow: false,
    };
  }
 
  componentDidMount(){

    // console.log("time" , time.ProjectID);
    const Auth =  JSON.parse(localStorage.getItem("auth"));
    if(!Auth){
     this.props.history.push('/login');
    }
    console.log("LoginDatas" , this.state.LoginDatas);
    console.log("time" , this.state.Emptimesheet);
    


    axios.post('https://helpdeskservice.desss-portfolio.com/api/TaskCategorys/Taskcategory?CompanyID='+this.state.LoginDatas.CompanyID)
    .then(task => {
      var data3 = task.data.data;
      data3.map((key2) =>{
        this.setState({ task_data: [ ...this.state.task_data, {
          Description: key2.Description ,
          TaskCategoryID : key2.TaskCategoryID
       }]
     });
     });
    })
    .catch(error => {
        console.log(error);
    })


   


    
    axios.post('https://helpdeskservice.desss-portfolio.com/api/TaskStatus/LodeTaskStatus')
    .then(GetTask => {
      var data5 = GetTask.data.data;
      this.setState({ GetTask_data: data5 }, () => { });
    })
    .catch(error => {
        console.log(error);
    })
    this.setState({ LoaderShow: true });  
    axios.get('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/GettblProjectTaskAllotment1?PrjTaskAllotID=' + this.state.PrjTaskAllotID)
    .then(timesheet => {
      this.setState({ LoaderShow: false });  
      var time = timesheet.data.data[0]
      this.setState({ EmpID: time.EmpID }, () => { });
      this.setState({ AllotedHrs: time.AllotedHrs }, () => { });
      this.setState({ ActualHours: time.ActualHours }, () => { });
      this.setState({ Notes: time.Notes }, () => { });
      this.setState({ ProjectId: time.ProjectID }, () => { });
      this.setState({ ModuleID: time.ModuleID }, () => { });
      this.setState({ Task_Screen_Name: time.TaskName }, () => { });
      this.setState({ TaskCategoryID: time.TaskCategory }, () => { });
      this.setState({ TaskID: time.TaskID }, () => { });
      this.setState({ TaskStatusID: time.TaskStausID }, () => { });

      // console.log("time.TaskStatusID" , time.TaskStausID)

      var date = moment(time.TaskDate).format("MM/DD/YYYY")
      this.setState({ WorkDate: date }, () => { });
      console.log("time.DAte" , time);
      this.setState({ Emptimesheet: time }, () => { });
      console.log("time" , this.state.Emptimesheet);
      axios.post('https://helpdeskservice.desss-portfolio.com/api/ModelFrom_project/Modulefromproject?ProjectID='+time.ProjectID+'&CompanyID='+this.state.LoginDatas.CompanyID)
      .then(GetModule=> {
        var Mdata = GetModule.data.data;
        this.setState({ ModuleData: Mdata}, () => { });
     
      })
      .catch(error => {
          console.log(error);
      })

      axios.post('https://helpdeskservice.desss-portfolio.com/api/Lode_tblProjectModelodeByproject/proc_tblProjectModuleLoadByProject?CompanyID='+this.state.LoginDatas.CompanyID+'&EmpID=' + this.state.Emptimesheet.EmpID)
      .then(Issues => {
        var data1 = Issues.data.data;
        console.log("project id" , data1);
        data1.map((key) =>{
          this.setState({ profile_data: [ ...this.state.profile_data, {
            ProjectName: key.ProjectName ,
            ProjectID :key.ProjectID
         }]
       });
       });
      })
      .catch(error => {
          console.log(error);
      })
      
      axios.post('https://helpdeskservice.desss-portfolio.com/api/proc_LoadToolsByEmp12/loadtool?CompanyID='+this.state.LoginDatas.CompanyID+'&EmpID=' + this.state.Emptimesheet.EmpID)
      .then(tool => {
        var data4 = tool.data.data;
        console.log("Tool" , data4);
        data4.map((key3) =>{
          this.setState({ tool_data: [ ...this.state.tool_data, {
            Technology: key3.Technology ,
            TechID: key3.TechID
         }]
       });
       });
      })
      .catch(error => {
          console.log(error);
      })

    axios.post('https://helpdeskservice.desss-portfolio.com/api/AllotedToDropdown/AllotedTO?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+time.ProjectID)
    .then(allot => {
      var data2 = allot.data.data;
      console.log("Alloted TO" , data2);
      data2.map((key) =>{
        this.setState({ alloted_data: [ ...this.state.alloted_data, {
          EName: key.EName ,
          EmpID: key.EmpID
       }]
     });
    //  console.log("EName" , EName);
    //  console.log("EmpID" , EmpID);
     });
    })
    .catch(error => {
        console.log(error);
    })


      axios.post('https://helpdeskservice.desss-portfolio.com/api/TaskDropdown/loadTask?TaskCategory=' + time.TaskCategory)
      .then(TaskCategory=> {
        var Taskdata = TaskCategory.data.data;
        this.setState({ TaskDatas: Taskdata}, () => { });
     
      })
      .catch(error => {
          console.log(error);
      })


    })
    .catch(error => {
      this.setState({ LoaderShow: false });  
        console.log(error);
    })

  }

TaskStatusIDChange = (e) =>{
  this.setState({'TaskStatusID': e.target.value})
}

CancelMethod(){
  this.props.history.push('/home');
}

UpdateMethod(){
  var TaskScreenName = document.getElementById('txtTaskName').value;
  var tool = document.getElementById('ddlTools').value;
  var SpentHours = document.getElementById('txtHours').value;
  var TaskStatus = document.getElementById('ddlTaskStatus').value;
  var comments = document.getElementById('txtComments').value;
  var KBNotes = document.getElementById('txtKBNotes').value;

  if(tool === '' && SpentHours === '0'){
    alert('Please Enter Tool and Hours Spent');
    return;
  }else if(tool === ''){
    alert('Please Select Tool');
    return;
  }else if(SpentHours === '0'){
    alert('Please Enter Hours Spent');
    return;
  }


  axios.get('https://helpdeskservice.desss-portfolio.com/api/Login/getEmpTask?TaskAllotmentID='+this.state.PrjTaskAllotID+'&TaskName='+TaskScreenName+'&Tools='+tool+'&HoursSpend='+SpentHours+'&TaskStatus='+TaskStatus+'&DocsCount=&Billable=&Comments='+comments+'&KBNotes=' + KBNotes)
      .then(Data=> {
       console.log("Update Datas", Data.data);
       this.props.history.push('/home');
      })
      .catch(error => {
          console.log(error);
      })

}

  render() {
    return (
      <div>
        {this.state.LoaderShow === true ? (
          <div className='loader-img'>
            <img   src={Loader} height="50" width="50" alt="Helpdesk" />
          </div>
        ) : (
          ''
        )}

 <Header />
 
        <div className="centerBG" style={{width: '90%'}}>
            <table>
                <tbody>
                    <tr className='border'>
                       <td>
                        <table>
                            <tbody>
                                <tr class="dashboard">
                                    <td style={{width:"500px"}}>
                                        Employee Timesheet
                                    </td>
                                    <td>
                                        <span id="lblEmpName" style={{color:"#4c4a48"}}>{this.state.LoginDatas.EmpName + '-' + this.state.LoginDatas.IDNumber}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                       </td>
                    </tr>
                    <tr className='border'>
                       <td>
                            <table>
                                <tbody>
                                    <tr className='submit-grp'>
                                        <td style={{width:"90px"}}>
                                            <button className='timesheet-submit' onClick={() => { this.UpdateMethod(); }}>Submit</button>
                                        </td>
                                        <td style={{width:"90px"}}>
                                            <button className='cancel-btn' onClick={() => { this.CancelMethod();}} >Cancel</button>
                                        </td>
                                        <td style={{width:"130px"}}>
                                            {/* <a id="lnkEntry" href="javascript:__doPostBack('ctl00$MainContent$lnkEntry','')" >New Manual Entry</a> */}
                                            {/* <a id="lnkEntry" >New Manual Entry</a> */}
                                        </td>
                                        <td style={{width:"130px"}}>
                                            {/* <a id="lnkTSList" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$MainContent$lnkTSList&quot;, &quot;&quot;,     false, &quot;&          quot;, &quot;TimesheetList.aspx&quot;, false, true))">Goto Timesheet List</a> */}
                                            {/* <a id="lnkTSList" href="/home">Goto Timesheet List</a> */}
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                       </td>
                    </tr>
                    <tr className='border'>
                        <td class="tdspace">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="sub-head">
                                            Timesheet Entry
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="table-inner">
                                            <table>
                                              <tbody>
                                                <tr className='inner-line'>
                                                  <td width="140px">Project :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <div className="leftEditor content">
                                                            <select name="system_ton" id="system_ton1" class="select_new MB10 fleft" disabled="disabled" value={this.state.ProjectId} style={{marginleft:"10px"}}>
                                                              <option value="">-</option>
                                                                { this.state.profile_data.map((element) => 
                                                                  <option  value={element.ProjectID}>{element.ProjectName}</option>
                                                                )}
                                                            </select>
                                                            </div>
                                                          </td>
                                                          <td>
                                                            <span id="rfvProject" style={{color: 'Red', visibility: 'hidden'}}>*</span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Module :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                            <select id="ddlModule" name="ctl00$MainContent$ddlModule" size={1} value={this.state.ModuleID}  style={{fontFamily: 'Calibri', fontSize: 14}}>
                                                              <option value={0}>--Select--</option>
                                                              { this.state.ModuleData.map((element) => 
                                                                  <option  value={element.ModuleID}>{element.ModuleName}</option>
                                                                )}
                                                            </select>
                                                          </td>
                                                          <td>
                                                            <span id="rfvModule" style={{color: 'Red', visibility: 'hidden'}}>*</span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Task / Screen Name
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                            <input name="ctl00$MainContent$txtTaskName" type="text" defaultValue={this.state.TaskName} readOnly="readonly" id="txtTaskName" style={{fontFamily: 'Calibri', fontSize: 14}} />
                                                          </td>
                                                          <td>
                                                            <span id="rfvTaskName" style={{color: 'Red', visibility: 'hidden'}}>*</span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Task Category / Group :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                            <select name="system_ton" id="system_ton1" class="select_new MB10 fleft" value={this.state.TaskCategoryID} disabled="disabled" style={{marginleft:"10px"}}>
                                                              <option value="">-</option>
                                                                { this.state.task_data.map((element2) => 
                                                                  <option value={element2.TaskCategoryID}>{element2.Description}</option>
                                                                )}
                                                            </select>
                                                          </td>
                                                          <td />
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Task :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                            <select id="ddlTask" name="ctl00$MainContent$ddlTask" size={1} disabled="disabled" value={this.state.TaskID} style={{fontFamily: 'Calibri', fontSize: 14}}>
                                                              <option value={0}> --Select-- </option>
                                                              { this.state.TaskDatas.map((element2) => 
                                                                  <option value={element2.TaskID}>{element2.TaskDescription}</option>
                                                                )}
                                                            </select>
                                                          </td>
                                                          <td />
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Hours Alloted :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                            <input type="number" id="txtAllotedHour_Raw" disabled="disabled" name="txtAllotedHour_Raw" defaultValue={this.state.AllotedHrs} style={{width: 95}} />
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Tools :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                          <select name="ctl00$MainContent$ddlTools" id="ddlTools" class="select_new MB10 fleft"style={{marginleft:"10px"}}>
                                                              <option value=""> --Select-- </option>
                                                                { this.state.tool_data.map((element3) => 
                                                                  <option value={element3.TechID}>{element3.Technology}</option>
                                                                )}
                                                            </select>
                                                          </td>
                                                          <td>
                                                            <span id="tfvddAllotedTo" style={{color: 'Red', visibility: 'hidden'}}>*
                                                            </span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td>Allotted To :
                                                  </td>
                                                    <td>
                                                        <table>
                                                          <tbody>
                                                              <tr>
                                                                <td className="leftEditor content">
                                                                  <select id="ddlTask" name="ctl00$MainContent$ddlTask" size={1} disabled="disabled" value={this.state.EmpID} style={{fontFamily: 'Calibri', fontSize: 14}}>
                                                                    <option value={0}> --Select-- </option>
                                                                   { this.state.alloted_data.map((element2) => 
                                                                    <option value={element2.EmpID}>{element2.EName}</option>
                                                                  )}
                                                                  </select>
                                                                </td>
                                                                <td>
                                                                  <span id="tfvddAllotedTo" style={{color:'Red',visibility:"hidden"}}>*
                                                                  </span>
                                                                </td>
                                                              </tr>
                                                          </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Hours Spent :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                            <input className="dxeTextBoxSys" id="txtHours" type="number" maxLength={15} defaultValue={this.state.ActualHours} name="ctl00$MainContent$txtHours" style={{width: 95}} />
                                                          </td>
                                                          <td>
                                                            <label id="lblhours" />
                                                            <span id="rnghors" style={{color: 'Red', display: 'none'}}>Please enter Hours Spent <br />
                                                              must be Less than or equal 15.<br /></span>
                                                            <span id="rfvHour" style={{color: 'Red', visibility: 'hidden'}}>*</span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Work Date :</td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                          <input className="dxeTextBoxSys" id="WorkDate" type="text" value={this.state.WorkDate} name="ctl00$MainContent$txtHours" readOnly/>
                                                          {/* <DatePicker id="datepicker"
                                                           selected={this.state.WorkDate}
                                                           onChange={this.DateChange}
                                                           dateFormat="MM/DD/YYYY"
                                                           /> */}
                                                          </td>
                                                          <td>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Task Status :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                          <select name="system_ton" id="ddlTaskStatus" class="select_new MB10 fleft"style={{marginleft:"10px"}} value={this.state.TaskStatusID}  onChange={this.TaskStatusIDChange}>
                                                              <option value="">-</option>
                                                                { this.state.GetTask_data.map((element4) => 
                                                                  <option value={element4.TaskStatusID}>{element4.TaskStatusDescription}</option>
                                                                )}
                                                            </select>
                                                          </td>
                                                          <td>
                                                            <span id="rfvWork0" style={{color: 'Red', visibility: 'hidden'}}>*
                                                            </span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Documents Count :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td className="leftEditor content">
                                                            <input name="ctl00$MainContent$txtDocCount" type="text" id="txtDocCount" style={{fontFamily: 'Calibri', fontSize: 14}} />
                                                          </td>
                                                          <td />
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td>Billable :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <span style={{fontFamily: 'Calibri', fontWeight: 'normal'}}><input id="ckbillable" type="checkbox" name="ctl00$MainContent$ckbillable" /><label htmlFor="ckbillable">Yes</label></span>
                                                          </td>
                                                          <td />
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td valign="top">Details/ Comments :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <textarea name="ctl00$MainContent$txtDetails" rows={2} cols={20} id="txtComments" style={{fontFamily: 'Calibri', fontSize: 14, height: 70, width: 500}} defaultValue={this.state.Notes} />
                                                          </td>
                                                          <td valign="top">
                                                            <span id="rfvDetails" style={{color: 'Red', visibility: 'hidden'}}>*</span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td valign="top">KB Notes :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td>
                                                            <textarea name="ctl00$MainContent$txtKBNotes" rows={2} cols={20} id="txtKBNotes" style={{fontFamily: 'Calibri', fontSize: 14, height: 70, width: 500}} defaultValue={""} />
                                                          </td>
                                                          <td valign="top">
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr className='inner-line'>
                                                  <td valign="top">Upload Attachments :
                                                  </td>
                                                  <td>
                                                    <table>
                                                      <tbody>
                                                        <tr>
                                                          <td align="left" style={{verticalAlign: 'top'}}>
                                                            <input type="file" name="ctl00$MainContent$FUAttachments" id="FUAttachments" />
                                                            <a id="HlAttachment" href="../TaskFilesAttachment.aspx?TASID=43332" target="_blank">Attachments</a>
                                                          </td>
                                                          {/* <td valign="top">
                                                            <a id="HlAttachment" href="../TaskFilesAttachment.aspx?TASID=43332" target="_blank">Attachments</a>
                                                          </td> */}
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className='free-space'></div>
        <Footer />
      </div>
    )
  }
}

export default timesheet