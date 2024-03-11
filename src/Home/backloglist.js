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
import New from '../images/add.png'

export class backloglist extends Component {

  constructor() {
		super();
		this.state = {
            ProjectDatas:[],
            LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
            Auth:  JSON.parse(localStorage.getItem("auth")),
            LoaderShow: false,
            showtab1: true,
            showtab2: false,
            showModal1: false,
            showModal2: false,
            ProjectDatas:[],
	  };
	}
  componentDidMount(){
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


  
  
  handletab1 = () => {
    // var tabproject	=	document.getElementById('tabproject').value;
    // var tabtotalhrs	=	document.getElementById('tabtotalhrs').value;
    //     this.setState({ projectdetailsname: tabproject });  
    //     this.setState({ projectdetailstotalhrs: tabtotalhrs });  
    //     console.log('projectdetailsname',  this.state.projectdetailsname);
    //     console.log('projectdetailstotalhrs',  this.state.projectdetailstotalhrs);
    this.setState({ showtab1: true });
    this.setState({ showtab2: false });
   
    const tab1 = document.getElementById('first-tab');
    const tab2 = document.getElementById('second-tab');
   
        tab1.classList.add('active');
        tab2.classList.remove('active');
       
  
  };
  handletab2(){
    const tab1 = document.getElementById('first-tab');
    const tab2 = document.getElementById('second-tab');
   
      tab1.classList.remove('active');
      tab2.classList.add('active');
     
  
      this.setState({ showtab1: false });
      this.setState({ showtab2: true });
     
  }


  handleCloseModal1 = () => {
    this.setState({ showModal1: false });
  };

  handleOpenModal1 = () => {
    this.setState({ showModal1: true });
  };
  
  handleCloseModal2 = () => {
    this.setState({ showModal2: false });
  };

  handleOpenModal2 = () => {
    this.setState({ showModal2: true });
  };

  
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

    const columns1 = [
        {
          Header: 'Project Name',
          accessor: 'ProjectName',
          style:{
              textAlign: "center"
          },
          width: "100%",
         },
         {
          Header: 'Board',
          accessor: 'ProjectName',
          style:{
              textAlign: "center"
          },
          width: "100%",
         },
         {
          Header: 'Sprint Name',
          accessor: 'ProjectName',
          style:{
              textAlign: "center"
          },
          width: "100%",
         },
         {
          Header: 'SprintStartDate',
          accessor: 'ProjectName',
          style:{
              textAlign: "center"
          },
          width: "100%",
         },
         {
          Header: 'SprintEndDate',
          accessor: 'ProjectName',
          style:{
              textAlign: "center"
          },
          width: "100%",
         },
         {
          Header: 'SprintDeliveryDate',
          accessor: 'ProjectName',
          style:{
              textAlign: "center"
          },
          width: "100%",
         },
         {
          Header: 'SprintEstimatedhours',
          accessor: 'ProjectName',
          style:{
              textAlign: "center"
          },
          width: "100%",
         },
      {
       Header: 'SprintCompletedHours',
       accessor: 'ProjectTypename',
       style:{
           textAlign: "center"
       },
       width: "100%",
      },
      {
        Header: 'Comments',
        accessor: 'CurrentTask',
        style:{
          textAlign: "center"
      },
      width: "100%",
      Cell: props => {
        return (
            <Link to="/sprintdetails" className='edit-btn' style={{color: "rgb(76 74 71)", borderBottom: "1px solid rgb(76, 74, 72)" }} >
             Allot Task to Sprint
            </Link>
        )
      }
      },
      {
        Header: 'Sprints ID',
        accessor: 'Sprints',
        style:{
          textAlign: "center"
      },
      width: "100%",
      Cell: props => {
        return (
            <Link to="/burnchart" className='edit-btn' style={{color: "rgb(76 74 71)",borderBottom: "1px solid rgb(76, 74, 72)"}}>
              Burn Out Chart	
            </Link>
        )
      }
      },
      {
        Header: 'Edit',
        accessor: 'CurrentTask',
        style:{
          textAlign: "center"
      },
        width: 100,
        minWidth: 100,
        maxWidth: 100,
      Cell: props => {
        return (
            <button className='del-btn'style={{width:"100%"}}   onClick={() => {this.handleOpenModal2(this, props.original);}}> 
              <img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Edit} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} />
            </button>
        )
    },
      },
      {
        Header: 'Delete',
        accessor: 'CurrentTask',
        style:{
          textAlign: "center"
      },
        width: 100,
        minWidth: 100,
        maxWidth: 100,
      Cell: props => {
        return (
            <button className='del-btn'style={{width:"100%"}} 
            onClick={() => {this.Deleteprojectlist(this, props.original);
          }}><img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Delete} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} /></button>
        )
    },
      }
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

  <table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse'}}>
  <tbody>
    <tr style={{height: '100%'}}>
      <td style={{color: '#333333', fontSize: '0.8em'}}>
        <table className="table-content" cellPadding="0px" cellSpacing="0px" width="100%">
          <tbody><tr>
              <td className="sub-head" style={{backgroundColor: "#ffdead00",float: "left" , padding:"7px"}}>Current Sprint</td>
              <Link className='edit-btn-submodule'  onClick={ () => {this.handleOpenModal1();}} >
              <img src={New} alt="add new" style={{color: '#06638F', height: '20px', borderWidth: '0px'}} />
              <span>New Submodule</span>
            </Link>
            </tr>
            <tr>
            </tr></tbody></table><table className="table-content" cellPadding="0px" cellSpacing="0px" width="100%">
          <tbody>
            <tr>
              <td>
                <ReactTable
                  columns={columns1}
                  data={this.state.ProjectDatas}
                  noDataText={"No Data..."}
                  selectableRows
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
  </tbody>
</table>


<label htmlFor="radio1" id="first-tab" className="tab" style={{width:"100%"}}>
  <button className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px",marginRight: "10px"}}  onClick={ () => {this.handletab1();}}>Previous</button>
</label>

</div>



{/* Popup  */}

{/* new */}

{this.state.showModal1 && (
        <div className="popup-create">
          
        <div className='popup-body'>
      <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 498, cursor: 'default', visibility: 'visible',overflow:"auto",minHeight: "300px", maxHeight: "500px"}}>
<div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
  <div className="dxpc-headerContent" style={{float:'left'}}>
    <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Add New Submodule</span>
  </div>
  <button className='popup-closebtn' onClick={this.handleCloseModal1} style={{float:'right'}}>X</button>
  <b className="dx-clear" />
</div><div className="dxpc-contentWrapper" >
  <div className="dxpc-content" style={{fontFamily: 'Calibri', fontSize: 15, padding: 0, display: 'block'}} id="Grid_DXPEForm_PWC-1">
    <div className="dxgvPopupEditForm_Office2003Blue" style={{overflowX: 'hidden'}}>
    <table>
        <tbody>
          <tr id="Grid_DXDataRow0" className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
            <td></td>
            <td>
              <ReactTable
                columns={columns1}
                data={this.state.ProjectDatas}
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
    </div>
  </div>
</div>


      </div>

        </div>            

          
        </div>
      )}

{/* new end */}

{/* edit */}

{this.state.showModal2 && (
        <div className="popup-create">
          
        <div className='popup-body'>
      <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 498, cursor: 'default', visibility: 'visible',overflow:"auto",minHeight: "300px", maxHeight: "500px"}}>
<div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
  <div className="dxpc-headerContent" style={{float:'left'}}>
    <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Add New Submodule</span>
  </div>
  <button className='popup-closebtn' onClick={this.handleCloseModal2} style={{float:'right'}}>X</button>
  <b className="dx-clear" />
</div><div className="dxpc-contentWrapper" >
  <div className="dxpc-content" style={{fontFamily: 'Calibri', fontSize: 15, padding: 0, display: 'block'}} id="Grid_DXPEForm_PWC-1">
    <div className="dxgvPopupEditForm_Office2003Blue" style={{overflowX: 'hidden'}}>
    <table>
        <tbody>
          <tr id="Grid_DXDataRow0" className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
            <td></td>
            <td>
              <ReactTable
                columns={columns1}
                data={this.state.ProjectDatas}
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
    </div>
  </div>
</div>


      </div>

        </div>            

          
        </div>
      )}

{/* edit end */}



    </div>

        <div className='free-space'></div>
        <Footer />
      </div>
    )
  }
}

export default backloglist