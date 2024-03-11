import React, { Component } from 'react';
import Delete from '../images/delete_icon.png';
import Call from '../images/callicon.png';
import Prev from '../images/DXR.gif';
import {Header} from './header';
import axios from 'axios';
import editbtn from '../images/edit_icon.png'
import addnew from '../images/imgadd.png'
import ReactTable from "react-table-6";
import Footer from '../Home/footer';
import moment from 'moment';
import Swal from 'sweetalert2';
import Loader from '../images/loader2.gif';
// import "react-table-6/react-table.css";


export class Tickets extends Component {

  constructor() {
		super();
		this.state = {
		  LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      OpenTicketDatas: [],
      ProgressingTicketDatas: [],
      ClosedTaskDatas: [],
      Auth:  JSON.parse(localStorage.getItem("auth")),
      LoaderShow: false,
	  };
	}

componentDidMount(){
  const Auth =  JSON.parse(localStorage.getItem("auth"));
    if(!Auth){
     this.props.history.push('/login');
    }
  console.log('LoginDatas', this.state.LoginDatas);
  this.GetOpenTicketDatas();
  this.GetProgressingTicketsDatas();
  this.GetClosedTaskDatas();
}
GetOpenTicketDatas(){
  this.setState({ LoaderShow: true });
  var OpenTickets = 'https://helpdeskservice.desss-portfolio.com/api/Login/GetTicketsDetails?UserTypeID='+this.state.LoginDatas.UserTypeID+'&EmpID='+this.state.LoginDatas.ClientUserID+'&CompanyID='+this.state.LoginDatas.CompanyID;
  axios.get(OpenTickets)
  .then(res => {
    this.setState({ LoaderShow: false });
    // alert('ji');
   this.setState({OpenTicketDatas: res.data.data});
   console.log('OpenTicketDatas 2' , res.data.data)
   console.log('OpenTicketDatas',  this.state.OpenTicketDatas);
   
   var OpenTicketDatas1 = [];
   var data1 = res.data.data;
   data1.forEach((key, value) => {
       console.log('OpenTicketDatas1');
       OpenTicketDatas1.push({
          CreatedBy:key.CreatedBy,
          CreatedOn:  moment(key.CreatedOn).format("MM/DD/YYYY"),
          ProjectID:key.ProjectID,
          Subject:key.Subject,
          Source:key.Source,
          TaskType:key.TaskType,
          TicketSeverityName:key.TicketSeverityName,
          TicketStatus:'Open',
          MiscEID:key.MiscEID,
          ToEmail: key.ToEmail,
          HTMLBody: key.HTMLBody,
          Body: key.Body,
          TicketSeverityID: key.TicketSeverity
       });
    })
    this.setState({ OpenTicketDatas: OpenTicketDatas1 });
    console.log('OpenTicketDatas 1' , this.state.OpenTicketDatas);
 })
  .catch(error => {
  console.log(error);
  this.setState({ LoaderShow: false });
 })
}
GetProgressingTicketsDatas(){
  var URL = 'https://helpdeskservice.desss-portfolio.com/api/ProgressTickets/GetTicketsProgressDetails?UserTypeID='+this.state.LoginDatas.UserTypeID+'&EmpID='+this.state.LoginDatas.ClientUserID+'&CompanyID='+this.state.LoginDatas.CompanyID;
  axios.get(URL)
  .then(res => {
    // alert('ji');
   this.setState({ProgressingTicketDatas: res.data.data});
   console.log('ProgressingTicketDatas',  this.state.ProgressingTicketDatas);

   var ProgressingTicketDatas1 = [];
   var data1 = res.data.data;
   data1.forEach((key, value) => {
       console.log('ProgressingTicketDatas1');
       ProgressingTicketDatas1.push({
          CreatedBy:key.CreatedBy,
          CreatedOn:  moment(key.CreatedOn).format("MM/DD/YYYY"),
          ProjectID:key.ProjectID,
          Subject:key.Subject,
          Source:key.Source,
          TaskType:key.TaskType,
          TicketSeverityName:key.TicketSeverityName,
          TicketStatus:'Progress',
          MiscEID:key.MiscEID,
          ToEmail: key.ToEmail,
          HTMLBody: key.HTMLBody,
          Body: key.Body,
          TicketSeverityID: key.TicketSeverity
       });
    })
    this.setState({ ProgressingTicketDatas: ProgressingTicketDatas1 });
    console.log('ClosedTaskDatas 1' , this.state.ProgressingTicketDatas);
     
 })
  .catch(error => {
  console.log(error);
 })
}

GetClosedTaskDatas(){
  var URL = 'https://helpdeskservice.desss-portfolio.com/api/ClosedTickets/GetTicketsClosedDetails?UserTypeID='+this.state.LoginDatas.UserTypeID+'&EmpID='+this.state.LoginDatas.ClientUserID+'&CompanyID='+this.state.LoginDatas.CompanyID;
  axios.get(URL)
  .then(res => {
    // alert('ji');
   this.setState({ClosedTaskDatas: res.data.data});
   console.log('ClosedTaskDatas',  this.state.ClosedTaskDatas);

   var ClosedTaskDatas1 = [];
   var data1 = res.data.data;
   data1.forEach((key, value) => {
       console.log('ClosedTaskDatas1');
       ClosedTaskDatas1.push({
          CreatedBy:key.CreatedBy,
          CreatedOn:  moment(key.CreatedOn).format("MM/DD/YYYY"),
          ProjectID:key.ProjectID,
          Subject:key.Subject,
          Source:key.Source,
          TaskType:key.TaskType,
          TicketSeverityName:key.TicketSeverityName,
          TicketStatus:'Close',
          MiscEID:key.MiscEID,
          ToEmail: key.ToEmail,
          HTMLBody: key.HTMLBody,
          Body: key.Body,
          TicketSeverityID: key.TicketSeverity
       });
    })
    this.setState({ ClosedTaskDatas: ClosedTaskDatas1 });
    console.log('ClosedTaskDatas 1' , this.state.ClosedTaskDatas);
     
 })
  .catch(error => {
  console.log(error);
 })
}

NewTicket(){
  this.props.history.push('/NewTickets');
}
// DeleteTicket(res, datas){
//   console.log('DeleteTicket 1' , datas);
//   var URL = 'https://helpdeskservice.desss-portfolio.com/api/ProgressTickets/DeleteTicketbyid?MiscEID=' + datas.MiscEID;
//   axios.delete(URL)
//   .then(res => {
//    console.log('Delete Ticket',  res);
//    this.componentDidMount();
     
//  })
//   .catch(error => {
//   console.log(error);
//  })
// }

DeleteTicket(res, datas){
  Swal.fire({
    title: "Are you sure?",
    text: "",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    

    if (result.isConfirmed) {

      console.log('DeleteTicket 1' , datas);
      var URL = 'https://helpdeskservice.desss-portfolio.com/api/ProgressTickets/DeleteTicketbyid?MiscEID=' + datas.MiscEID;
      axios.delete(URL)
      .then(res => {
       console.log('Delete Ticket',  res);

       Swal.fire({
        icon: "success",
        title: "Ticket has been deleted",
        showConfirmButton: false,
        timer: 1500
       });

       this.componentDidMount();
         
     })
      .catch(error => {
      console.log(error);
     })
      
    }

  });

}






EditTicket(res, datas){
  console.log('Edit Datas', datas);
  localStorage.setItem("EditTicketDatas", JSON.stringify(datas));
  this.props.history.push('/EditTickets');
}

EmailMethod(res, datas){
  console.log('ticketStatus', datas.TicketStatus);
  localStorage.setItem("EmailDatas", JSON.stringify(datas));
  localStorage.setItem("TicketStatus", datas.TicketStatus);
  this.props.history.push('/email');
}

// EmailMethod(res, datas, ticketStatus){
//   console.log('ticketStatus', ticketStatus);
//   localStorage.setItem("EmailDatas", JSON.stringify(datas));
//   localStorage.setItem("TicketStatus", ticketStatus);
//   this.props.history.push('/email');
// }

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
          Header: 'Created By',
          accessor: 'CreatedBy',
          style:{
              textAlign: "center"
          },
          width: "100%",
         },
      {
       Header: 'Created On',
       accessor: 'CreatedOn',
       style:{
           textAlign: "center"
       },
       width: "100%",
      },
      {
        Header: 'Subject',
        accessor: 'Subject',
        style:{
          textAlign: "center"
      },
      width: "100%",
      },
      {
          Header: 'Source',
          accessor: 'Source',
          style:{
            textAlign: "center"
        },
        width: "100%",
        },
      {
        Header: 'Ticeket Severity',
        accessor: 'TicketSeverityName',
        style:{
          textAlign: "center"
      },
      width: "100%",
      },
      {
        Header: 'Tickets Status',
        accessor: 'TicketStatus',
        style:{
          textAlign: "center"
      },
      width: "100%",
      },
      {
          Header: 'Edit',
          width: "100%",
          Cell: props => {
              return (
                  <button className='edit-btn' style={{width:"100%"}} onClick={ () => {this.EditTicket(this, props.original);}}>
                    <img src={editbtn} alt="add new" style={{color: '#06638F', height: '20px', borderWidth: '0px'}} /></button>
              )
          }
        },
        {
            Header: 'Delete',
            width: "100%",
            Cell: props => {
                return (
                    <button className='del-btn'style={{width:"100%"}} onClick={() => {this.DeleteTicket(this, props.original);}}>
                      <img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Delete} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} /></button>
                )
            },
          },
          {
            Header: 'Chat',
            width: "100%",
            Cell: props => {
                return (
                    <button className='email-btn'style={{width:"100%"}} 
                    onClick={ () => {
                      this.EmailMethod(this, props.original);
                    }}
                    >Email</button>
                )
            }
          },
]
    return (
      <div>
      <Header />

      {this.state.LoaderShow === true ? (
          <div className='loader-img'>
            <img   src={Loader} height="50" width="50" alt="Helpdesk" />
          </div>
        ) : (
          ''
        )}

    <div className="centerBG" style={{width: '90%'}}>
        <table width="100%" cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <td>
              <table>
        <tbody>
          <tr>
          <button className='newticket-btn' onClick={() => { this.NewTicket();}} >
              <img src={addnew} alt="add new" />
              New Ticket
              </button>
          </tr>
          <tr>
            <td>
              <div className="active-tabs">
                <input type="radio" name="active_tabs" id="btn-1" className="btn-1" defaultChecked />
                <label htmlFor="btn-1" className="btn">
                Open Tickets
                </label>
                <input type="radio" name="active_tabs" id="btn-2" className="btn-2" />
                <label htmlFor="btn-2" className="btn">
                Progressing Tickets
                </label>
               {/* <input type="radio" name="active_tabs" id="btn-3" className="btn-3" />
                <label htmlFor="btn-3" className="btn">
                Completed Task Status
                </label>*/}
                <input type="radio" name="active_tabs" id="btn-4" className="btn-4" />
                <label htmlFor="btn-4" className="btn">
                Closed Tickets
                </label>
                {/* <input type="radio" name="active_tabs" id="btn-5" className="btn-5" />
                <label htmlFor="btn-5" className="btn">
                  Closed Tickets
                </label> */}
                
                <div className="tabs-container">
                  <div className="tab-1">
                    <table>
                      <tbody>
                        <tr>
                          <td className="heading_bg">
                            Open Tickets
                          </td>
                        </tr>
                        <tr style={{width: '100%'}}>
                          <td>
                          <ReactTable
                            columns={columns}
                            data={this.state.OpenTicketDatas}
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
                  <div className="tab-2">
                    <table>
                      <tbody>
                        <tr>
                          <td className="heading_bg">
                            Progressing Tickets
                          </td>
                        </tr>
                        <tr>
                          <td>
                          <ReactTable
                            columns={columns}
                            data={this.state.ProgressingTicketDatas}
                            noDataText={"No Data..."}
                            filterable
                            defaultPageSize={10}
                            defaultFilterMethod={this.filterCaseInsensitive}
                            >
                          </ReactTable>
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
                            Completed Task Status
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-4">
                    <div className='four-tab'>
                    <table>
                      <tbody>
                        <tr>
                          <td className="heading_bg">
                            Closed Tickets
                          </td>
                        </tr>
                        <tr>
                          <td>
                          <ReactTable
                            columns={columns}
                            data={this.state.ClosedTaskDatas}
                            noDataText={"No Data..."}
                            filterable
                            defaultPageSize={15}
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

export default Tickets