import React, { Component } from 'react';
import Header from './header';
import refresh from '../images/refresh.png';
import Footer from './footer';
import axios from 'axios';
import Delete from '../images/delete_icon.png';
import ReactTable from "react-table-6";
import Swal from 'sweetalert2';
import Loader from '../images/loader2.gif';
import showmore from '../images/show_more_btn.png';
import Edit from '../images/edit_icon.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export class sprintdetails extends Component {

  constructor() {
		super();
		this.state = {
      ProjectDatas:[],
      LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      Auth:  JSON.parse(localStorage.getItem("auth")),
      LoaderShow: false,
      SetLoadEmpoyeeDatas:[],
      ProjectNamelist_data:[],
	  };
	}
  componentDidMount(){
    this.projectnext();
    const Auth =  JSON.parse(localStorage.getItem("auth"));
      if(!Auth){
       this.props.history.push('/login');
      }
      console.log('LoginDatas' , this.state.LoginDatas);
      this.setState({ LoaderShow: true });
    var Project = 'https://helpdeskservice.desss-portfolio.com/api/ProjectList/LoadGrid?UserTypeID=1&CompanyID=DESSS&EmpID=169';
    axios.post(Project)
    .then(res => {
    this.setState({ProjectDatas: res.data.data});
    this.setState({ LoaderShow: false });
    console.log('ProjectDatas',  this.state.ProjectDatas);
    })
    .catch(error => {
    console.log(error);
    })
  }


  projectnext() {

    var EmpoyeeDatas = [];
    this.state.SetLoadEmpoyeeDatas = [];
      var LoadEmpoyee = 'https://helpdeskservice.desss-portfolio.com/api/AssignResources/LoadEmpoyee?CompanyID=DESSS&ProjectID=2667'
      axios.post(LoadEmpoyee)
      .then(res => {
      this.setState({ SetLoadEmpoyeeDatas: res.data.data});
      console.log('SetLoadEmpoyee',  this.state.SetLoadEmpoyeeDatas);
      })
      .catch(error => {
      console.log(error);
      })



      this.state.ProjectMembersDatas = [];
      var ProjectMembers = 'https://helpdeskservice.desss-portfolio.com/api/ProjectMembers/LoadEmp?CompanyID=DESSS&ProjectID=2667'
      axios.post(ProjectMembers)
      .then(res2 => {
      this.setState({ ProjectMembersDatas: res2.data.data});
      console.log('ProjectMembersDatas',  this.state.ProjectMembersDatas);
      })
      .catch(error => {
      console.log(error);
      })
    
  }

  
filterCaseInsensitive = (filter, row) => {
  const id = filter.pivotId || filter.id;
  const content = row[id];
  if (typeof content !== 'undefined') {
      // filter by text in the table or if it's a object, filter by key
      if (typeof content === 'object' && content !== null && content.key) {
          return String(content.key).toLowerCase().includes(filter.value.toLowerCase());
      } else {
          return String(content).toLowerCase().includes(filter.value.toLowerCase());
      }
  }

  return true;
}



  render() {

       const columns = [
        {
          Header: 'Select',
          accessor: 'EmpID',
          sortable:false,
          style:{
              textAlign: "center"
          },
          Cell: props => {
            return (
              <input type='checkbox' onChange={this.addempycheckbox} value={props.original.EmpID} name="chk" style={{width:"100%"}} />
            )
        }
        },
        {
          Header: 'Employee Name',
          accessor: 'EmpName',
          sortable:false,
          style:{
              textAlign: "center"
          },
         },
        {
          Header: 'Department',
          accessor: 'Department',
          sortable:false,
          style:{
              textAlign: "center"
          },
         },
         {
          Header: 'Designation',
          accessor: 'Designation',
          sortable:false,
          style:{
              textAlign: "center"
          },
         }
      
]
    const columns2 = [
  {
      Header: 'Employee Name',
      accessor: 'EName',
      style:{
          textAlign: "left"
      },
      width: "100%",
     },
]
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
        <div className="centerBG" style={{width: "90%",margin: "20px auto", maxWidth: "1695px"}}>
        <div id="second-panel" className="panel animated slideInRight">

      <table cellSpacing={0} cellPadding={0} border={0} id="wzdEmpDetails" style={{backgroundColor: '#EFF3FB', borderColor: '#B5C7DE', borderWidth: 1, borderStyle: 'solid', width: '100%', borderCollapse: 'collapse'}}>
  <tbody><tr>
          <td style={{height: '100%'}}><table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse'}}>
          <tbody><tr style={{height: '100%'}}>
              <td style={{color: '#333333', fontSize: '0.8em'}}>
                <table className="table-content" cellPadding="0px" cellSpacing="0px" width="1020px">
                  <tbody>
                    <tr>
                      <td className="sub-head">Assign Resources</td>
                      <Link to="/sprint" className='backtomain'>
                        <span>Back to sprint</span>
                      </Link>
                    </tr>
                    <tr>
                      <td className="heading_bg1">
                        <table>
                          <tbody><tr>
                              {/* <td width="400px">Project Members
                              </td> */}
                              <td>
                                <span id="lblProject" style={{fontSize:"18px"}}>Project Name : {this.state.projectdetailsname}</span>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    <tr style={{width: "50%",float: "right"}}>
                      <td className="tdspace">
                        <table width="100%" className="table-content" cellPadding={0} cellSpacing={0} >
                          <tbody><tr>
                              <td className="sub-head">Members of the Project
                              </td>
                            </tr>
                            <tr>
                              <td className="table-inner">
                                <table>
                                  <tbody><tr>
                                      {/* <td style={{width: 150}}>
                                        <a id="lbtn" href="" style={{border: "1px solid #4c4a48",padding: "5px",borderRadius: "10px",color:"#4c4a48"}}>Show Assigned</a>
                                      </td> */}
                                      <td align="right" style={{width: 150}}>
                                        <a id="lbtnBack" href="/project" style={{border: "1px solid #4c4a48",padding: "5px",borderRadius: "10px",color:"#4c4a48"}}>Go To Project List</a>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-inner">
                                <table className="dxgvControl_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridEmps" border={0} style={{fontFamily: 'Calibri', fontSize: 14, width: 300, borderCollapse: 'separate'}}>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <ReactTable
                                          columns={columns2}
                                          data={this.state.ProjectMembersDatas}
                                          noDataText={"No Data..."}
                                          filterable
                                          defaultPageSize={25}
                                          defaultFilterMethod={this.filterCaseInsensitive}
                                          >
                                        </ReactTable>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    <tr style={{width: "50%" , float: "left"}}>
                      <td className="tdspace">
                        <table width="100%" className="table-content" cellPadding={0} cellSpacing={0}>
                          <tbody><tr>
                              <td className="sub-head">Available Programmers
                              </td>
                            </tr>
                            <tr>
                              <td className="table-inner">
                                <table>
                                  <tbody><tr>
                                      <td style={{width: 150}}> 
                                        <button id="btnNew" onClick={() => { this.AddEmpMethod(); }} style={{border: "1px solid #4c4a48",padding: "5px",borderRadius: "10px",color:"#4c4a48"}}>Add Employees</button>
                                      </td>
                                      <td style={{width: 100}}>
                                        <button style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} onClick={() => { this.selects(); }} value="Select All">Select All</button>
                                      </td>
                                      <td style={{width: 100}}>
                                      <button style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} onClick={() => { this.deSelect(); }} value="Deselect All">Unselect</button>
                                      </td>
                                      <td>
                                        <input type="image" onClick={() => { this.refresh(); }} id="imgbnRefresh" title="Reload Available Man Power" src={refresh} style={{borderWidth: 0,marginBottom:0}} />
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                            <tr>
                              <td className="table-inner">
                                <table className="dxgvControl_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridEmpList1" border={0} style={{fontFamily: 'Calibri', fontSize: 14,  borderCollapse: 'separate'}}>
                                  <tbody><tr>
                                      <td><table id="GridEmpList1_DXMainTable" className="dxgvTable_Office2003Blue" cellSpacing={0} cellPadding={0} onclick="aspxGVTableClick('GridEmpList1', event);" border={0} style={{fontFamily: 'Calibri', fontSize: 14, width: '100%', borderCollapse: 'collapse', emptyCells: 'show'}}>
                                          <tbody>
                                            <tr>
                                              <td>
                                                <ReactTable
                                                  columns={columns}
                                                  data={this.state.SetLoadEmpoyeeDatas}
                                                  noDataText={"No Data..."}
                                                  filterable
                                                  defaultPageSize={25}
                                                  defaultFilterMethod={this.filterCaseInsensitive}
                                                  >
                                                </ReactTable>
                                              </td>
                                            </tr>
                                          </tbody>
                                          </table>
                                         </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
          </tbody></table></td>
    </tr>
  </tbody></table>


  <label htmlFor="radio1" id="first-tab" className="tab">
      <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px",marginRight: "10px"}}  onClick={ () => {this.handletab1();}}>Previous</div>
    </label>
    </div>
    </div>

        <div className='free-space'></div>
        <Footer />
      </div>
    )
  }
}

export default sprintdetails
