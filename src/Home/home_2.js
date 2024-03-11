import React, { Component } from 'react'
import Header from './header'
import axios from 'axios';
import moment from 'moment';
import DatePicker from "react-datepicker";
import Footer from '../Home/footer';
import Loader from '../images/loader2.gif';


export class home_2 extends Component {


  constructor() {
    super();
    
    this.state = {
      LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      TodayDate: new Date(),
      Test : [] ,
      InProgressData: [],
      Assigned: [],
      project_data : [] ,
      ProjectName: 'All',
      ProjectId: '0',
      Auth:  JSON.parse(localStorage.getItem("auth")),
      LoaderShow: false,
    };
  }

    componentDidMount(){
      const Auth =  JSON.parse(localStorage.getItem("auth"));
    if(!Auth){
     this.props.history.push('/login');
    }
        this.GetDatas('0', 'All');
        axios.post('https://helpdeskservice.desss-portfolio.com/api/LodeProjectBasedEMP/Project?UserType_Id='+this.state.LoginDatas.UserTypeID+'&Emp_id=' + this.state.LoginDatas.EmpID + '&Dept_id=' + this.state.LoginDatas.DeptID)
        .then( project => {
          var data = project.data.data;
          console.log("project" , project.data.data)
          data.map((key) =>{
            this.setState({ project_data: [ ...this.state.project_data, {
              ProjectName: key.ProjectName ,
              ProjectID: key.ProjectID
           }]
         });
         });
        })
        .catch(error => {
            console.log(error);
        })
    
      }
GetDatas(Id, Name){
  var Inprogressdata1 = [];
  var Assigned1 = [];
  this.setState({ LoaderShow: true });  
  this.setState({ProjectName: Name});
  this.setState({ProjectId: Id});
  this.setState({ InProgressData: Inprogressdata1 });
  this.setState({ Assigned: Assigned1 });
    axios.get('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/GetProject_task?ProjectName=' + Name + '&ProjectId=' + Id + '&Emp_Id=' + this.state.LoginDatas.EmpID + '&usertype_id=' + this.state.LoginDatas.UserTypeID + '&dept_id=' + this.state.LoginDatas.DeptID)
    .then(Issues => {
      this.setState({ Test: Issues.data.data });
      var data = Issues.data.data;
      this.setState({ LoaderShow: false });  
      data.forEach((key, value) => {
        
        if(key.CardviewStatus === 'InProgress'){
          console.log('InProgress');
          Inprogressdata1.push({
            TaskName: key.TaskName, 
            CreatedBy: key.CreatedBy,
            FullName: key.FullName,
            CreatedDate: moment(key.CreatedDate).format("MM/DD/YYYY"),
            AllotedDate: moment(key.AllotedDate).format("MM/DD/YYYY"),
            AllotedHrs: key.AllotedHrs,
            Est_CompletedDate:  moment(key.Est_CompletedDate).format("MM/DD/YYYY"),
            PrjTaskID: key.PrjTaskID,
            ProjectName: key.ProjectName,
            ModuleName: key.ModuleName,
          });
       }else if(key.CardviewStatus === 'Assigned'){
          console.log('Assigned');
          Assigned1.push({
            TaskName: key.TaskName, 
            CreatedBy: key.CreatedBy,
            FullName: key.FullName,
            // CreatedDate: key.CreatedDate,
            CreatedDate:  moment(key.CreatedDate).format("MM/DD/YYYY"),
            AllotedDate: moment(key.AllotedDate).format("MM/DD/YYYY"),
            AllotedHrs: key.AllotedHrs,
            Est_CompletedDate: moment(key.Est_CompletedDate).format("MM/DD/YYYY"),
            PrjTaskID: key.PrjTaskID,
            ProjectName: key.ProjectName,
            ModuleName: key.ModuleName,
          });
       }
      })
      this.setState({ InProgressData: Inprogressdata1 });
      this.setState({ Assigned: Assigned1 });
      // console.log('InProgress', this.state.InProgressData);
      // console.log('Assigned', this.state.Assigned);
    }) 
    .catch(error => {
      this.setState({ LoaderShow: false });  
        console.log(error);
    })
}

ProjectChange = (e) => {
  document.getElementById('dateRequired').value = '';
  var data = e.target.value;
  var splitted = data.split("~");
  this.setState({ ProjectId: splitted[0] });
  this.setState({ ProjectName: splitted[1] });
  this.GetDatas(splitted[0], splitted[1]);
  console.log('projectChange', this.state.ProjectId, this.state.ProjectName);
}

TimeSheetMethod(res, datas){
  localStorage.setItem('PrjTaskID', datas.PrjTaskID);
  localStorage.setItem('TaskName', datas.TaskName);
  this.props.history.push('/timesheet');
}

DateChange = (e) => {
  console.log('Date Change', e.target.value);
  var date =  moment(e.target.value).format("MM/DD/YYYY");
  console.log('Date Change date', date);
  if(date === 'Invalid date'){
    this.GetDatas(this.state.ProjectId, this.state.ProjectName);
  }
  var Inprogressdata1 = [];
  var Assigned1 = [];
  this.setState({ InProgressData: Inprogressdata1 });
  this.setState({ Assigned: Assigned1 });
  this.setState({ LoaderShow: true });  
    axios.get('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/GetProject_task?ProjectName=' + this.state.ProjectName + '&ProjectId=' + this.state.ProjectId + '&Emp_Id=' + this.state.LoginDatas.EmpID + '&usertype_id=' + this.state.LoginDatas.UserTypeID + '&dept_id=' + this.state.LoginDatas.DeptID + '&date=' + date)
    .then(Issues => {
      this.setState({ Test: Issues.data.data });
      var data = Issues.data.data;
      data.forEach((key, value) => {
        this.setState({ LoaderShow: false });  
        if(key.CardviewStatus === 'InProgress'){
          console.log('InProgress');
          Inprogressdata1.push({
            TaskName: key.TaskName, 
            CreatedBy: key.CreatedBy,
            FullName: key.FullName,
            CreatedDate: moment(key.CreatedDate).format("MM/DD/YYYY"),
            AllotedDate: moment(key.AllotedDate).format("MM/DD/YYYY"),
            AllotedHrs: key.AllotedHrs,
            Est_CompletedDate:  moment(key.Est_CompletedDate).format("MM/DD/YYYY"),
            PrjTaskID: key.PrjTaskID,
            ProjectName: key.ProjectName,
            ModuleName: key.ModuleName,
          });
       }else if(key.CardviewStatus === 'Assigned'){
          console.log('Assigned');
          Assigned1.push({
            TaskName: key.TaskName, 
            CreatedBy: key.CreatedBy,
            FullName: key.FullName,
            // CreatedDate: key.CreatedDate,
            CreatedDate:  moment(key.CreatedDate).format("MM/DD/YYYY"),
            AllotedDate: moment(key.AllotedDate).format("MM/DD/YYYY"),
            AllotedHrs: key.AllotedHrs,
            Est_CompletedDate: moment(key.Est_CompletedDate).format("MM/DD/YYYY"),
            PrjTaskID: key.PrjTaskID,
            ProjectName: key.ProjectName,
            ModuleName: key.ModuleName,
          });
       }
      })
      this.setState({ InProgressData: Inprogressdata1 });
      this.setState({ Assigned: Assigned1 });
      // console.log('InProgress', this.state.InProgressData);
      // console.log('Assigned', this.state.Assigned);
    }) 
    .catch(error => {
      this.setState({ LoaderShow: false });  
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
            <table width="100%" border="{1}" style={{paddingleft:  '0', paddingright: '0'}}>
               <tbody>
                   <tr style={{borderBottom: "none"}}>
                       <td>
                        <table>
                            <tbody>
                                <tr className='dashboard'>
                                    <td>
                                        Dashboard
                                    </td>
                                    <td>
                                        {this.state.LoginDatas.EmpName + '-' + this.state.LoginDatas.IDNumber}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                       </td>
                   </tr>
                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    {/* <tr className='task-list'>
                                        <td>
                                            Reference
                                        </td>
                                        <td>
                                            Task Allotment vs TimeSheet
                                        </td>
                                        <td>
                                            Leaves
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                       </td>
                    </tr>
                    {/* <tr className='dashboard'>
                        <td style={{fontSize: '14px'}}>
                            Issues
                        </td>
                    </tr> */}
                    <tr>
                      <td>
                          <div className="active-tabs">
                              <input type="radio" name="active_tabs" id="btn-1" className="btn-1" defaultChecked />
                              <label htmlFor="btn-1" className="btn">
                                  TimeSheet
                              </label>
                              {/* <input type="radio" name="active_tabs" id="btn-2" className="btn-2" />
                              <label htmlFor="btn-2" className="btn">
                                  Today's Task
                              </label>
                              <input type="radio" name="active_tabs" id="btn-3" className="btn-3" />
                              <label htmlFor="btn-3" className="btn">
                                  Issues Uncompleted
                              </label>
                              <input type="radio" name="active_tabs" id="btn-4" className="btn-4" />
                              <label htmlFor="btn-4" className="btn">
                                  Issues Closed
                              </label> */}
                              <div className="tabs-container">
                              <div className="tab-1">
                                  <table>
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <div id="leadTab_C0">
                                                      <div style={{marginLeft: 138, marginTop: 19, paddingBottom: 10}}>
                                                          <span id="Label74">Project : </span>
                                                          <select name="system_ton" id="ddlTaskStatus" class="select_new MB10 fleft" onChange={this.ProjectChange} style={{marginleft:"10px", width:"135px", padding: "4px"}}>
                                                              <option value="0">All</option>
                                                                { this.state.project_data.map((element) => 
                                                                  <option value={element.ProjectID + '~' + element.ProjectName}>{element.ProjectName}</option>
                                                                )}
                                                            </select>
                                                            <div style={{width: "80%",float: "right",display: "flex"}}>
                                                            <p style={{fontSize: "14px",margin: "0px", paddingTop: "2px"}} >Date :</p>
                                                            <input id="dateRequired" type="date" name="dateRequired" onChange={this.DateChange}/>
                                                          {/* <DatePicker id="datepicker" 
                                                           selected={this.state.TodayDate}
                                                          //  onChange={this.DateChange}
                                                           dateFormat="MM/dd/yyyy"
                                                           /> */}
                                                           </div>
                                                           
                                                      </div>
                                                    <div id="sortable-div" className="drag_drop_main_container">
                                                      <div id="progessdiv" className="col-sm-3 col-xs-3 col-md-3 drag_drop_container"> 
                                                        <div className="drag_contant" id="assigned">
                                                          <h3 className="h3_head">Assigned</h3>
                                                          <ul className="sortable-list drag_drop_list">
                                                            <li className="sortable-item">
                                                              {
                                                                this.state.Assigned.map((item) => (
                                                                  <div className="drop_top progress_border" id="41956">
                                                                                  <h4 style={{fontSize: 15, fontWeight: 200 , cursor: 'pointer'}} className="testing" onClick={() => { this.TimeSheetMethod(this, item);}}>{item.ProjectName +'----'+ item.ModuleName}</h4>
                                                                                  <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                                    TaskName:
                                                                                    <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.TaskName}</span>
                                                                                  </p>
                                                                                  <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}>
                                                                                    Alloted By:
                                                                                    <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.CreatedBy}</span>
                                                                                  </p>
                                                                                  <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                                    Alloted To:  
                                                                                    <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.FullName}</span>
                                                                                  </p>
                                                                                  {/* <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                                    Crt Date:  
                                                                                    <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.CreatedDate}</span>
                                                                                  </p> */}
                                                                                  <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}>  
                                                                                    Assigned Date : 
                                                                                    <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.AllotedDate}</span>
                                                                                  </p>
                                                                                  <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                                    Alloted Hours:  
                                                                                    <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.AllotedHrs}</span>
                                                                                  </p>
                                                                                  <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                                    Est-Comp-Date :
                                                                                    <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.Est_CompletedDate}</span>
                                                                                  </p>
                                                                                  {/* <a href=" " className="Delete">Delete</a> */}
                                                                  </div>
                                                                ))
                                                              }
                                                            </li>
                                                          </ul>
                                                        </div>
                                                      </div>
                                                      <div id="pendingdiv" className="col-sm-3 col-xs-3 col-md-3 drag_drop_container"> 
                                                          <div className="drag_contant" id="progress">
                                                            <h3 className="h3_head">InProgress</h3>
                                                            <ul className="sortable-list drag_drop_list">
                                                              <li className="sortable-item">
                                                              {
                                                                this.state.InProgressData.map((item) => (
                                                                  <div className="drop_top progress_border" id="41956">
                                                                    <h4 style={{fontSize: 15, fontWeight: 200 , cursor: 'pointer'}} className="testing" onClick={() => { this.TimeSheetMethod(this, item);}}>{item.ProjectName +'----'+ item.ModuleName}</h4>
                                                                    <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                      TaskName:
                                                                      <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.TaskName}</span>
                                                                    </p>
                                                                    <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}>
                                                                      Alloted By:
                                                                      <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.CreatedBy}</span>
                                                                    </p>
                                                                    <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                      Alloted To:  
                                                                      <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.FullName}</span> 
                                                                    </p>
                                                                    {/* <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                      Crt Date:  
                                                                      <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.CreatedDate}</span>
                                                                    </p> */}
                                                                    <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}>  
                                                                      Assigned Date : 
                                                                      <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.AllotedDate}</span>
                                                                    </p>
                                                                    <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                      Alloted Hours:  
                                                                      <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.AllotedHrs}</span>
                                                                    </p>
                                                                    <p style={{color: '#cc0000', fontSize: 15, fontWeight: 150}}> 
                                                                      Est-Comp-Date :
                                                                      <span style={{color: 'black', fontSize: 15, fontWeight: 100}}>{item.Est_CompletedDate}</span>
                                                                    </p>
                                                                    {/* <a href=" " className="Delete">Delete</a> */}
                                                                  </div>
                                                                ))
                                                              }
                                                              </li>
                                                            </ul>
                                                          </div>
                                                        </div>
                                                      </div>
                                                  </div>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>  
                              <div className="tab-2">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td className="heading_bg">
                                          Today's Task
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                              </div>
                              <div className="tab-3">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td className="heading_bg">
                                          Issues Uncompleted
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                              </div>
                              <div className="tab-4">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <td className="heading_bg">
                                          Issues Closed
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                              </div>
                              </div>
                          </div>
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

export default home_2