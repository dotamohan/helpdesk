import React, { Component } from 'react'
import Header from './header'
import empty from '../images/DXR-1.gif'
import editbtn from '../images/icon-edit.gif'
import del from '../images/icon-delete.gif'
import newbtn from '../images/imgadd.png'
import clear from '../images/clear.png'
import refresh from '../images/refresh.png'
import Footer from '../Home/footer'
import axios from 'axios';
import Delete from '../images/delete_icon.png';
import ReactTable from "react-table-6";
import Swal from 'sweetalert2';
import Loader from '../images/loader2.gif';
 
export class Project extends Component {

  constructor() {
		super();
		this.state = {
      ProjectDatas:[],
      LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      Auth:  JSON.parse(localStorage.getItem("auth")),
      LoaderShow: false,
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
  projectdetails(){
    
    this.props.history.push('/projectdetails');
  }
  createproject(){
    this.props.history.push('/createproject');
  }


  
  Editproject(res, datas){
  console.log('Edit Datas', datas);

  localStorage.setItem("EditProjectName", JSON.stringify(datas.ProjectName));
  localStorage.setItem("EditTotalHrs", JSON.stringify(datas.TotalHrs));
  localStorage.setItem("EditprojectDatas", JSON.stringify(datas));
  this.props.history.push('/projectdetails');
}


// Deleteprojectlist = (res, datas) => {

//   console.log('Deleteprojectlist', datas);


//   var Delprojectlist = 'https://helpdeskservice.desss-portfolio.com/api/DeleteProjectinList/Delete?ProjectID='+datas.ProjectID
//   axios.delete(Delprojectlist)
//   .then(res3 => {
//     this.componentDidMount();
//     console.log('Delete project list',  res3);
//   })
//   .catch(error => {
//   console.log(error);
//   })

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




Deleteprojectlist(res, datas){
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
      var Delprojectlist = 'https://helpdeskservice.desss-portfolio.com/api/DeleteProjectinList/Delete?ProjectID='+datas.ProjectID
      axios.delete(Delprojectlist)
      .then(res3 => {
      console.log('Delete project list',  res3);
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



  render() {

    const columns = [
      {
        Header: 'Quick Edit',
        width: 100,
        minWidth: 100,
        maxWidth: 100,
        filterable: false ,
        Cell: props => {
          return (
              <button className='edit-btn' style={{width:"100%"}} onClick={ () => {this.Editproject(this, props.original);}}>Quick Edit</button>
          )
      }
      },
      {
        Header: 'Project Name',
        accessor: 'ProjectName',
        width: "100%",
        style:{
          textAlign: "center"
        },
        Cell: props => {
          return (
              <button className='edit-btn animi' style={{width:"auto"}} onClick={ () => {this.Editproject(this, props.original);}}>{props.original.ProjectName}</button>
          )
      }
      },
      // {
      //     Header: 'Project Name',
      //     accessor: 'ProjectName',
      //     style:{
      //         textAlign: "center"
      //     },
      //     width: "100%",
      //    },
      {
       Header: 'Project Type',
       accessor: 'ProjectTypename',
       style:{
           textAlign: "center"
       },
       width: "100%",
      },
      {
        Header: 'Current Task',
        accessor: 'CurrentTask',
        style:{
          textAlign: "center"
      },
      width: "100%",
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
       <table style={{border: "1px solid #ccc"}}>
  <tbody>
    <tr>
      <td className="heading_bg">Projects List</td>
    </tr>
    <tr>
      <td>
        <table className='project-table' >
          <tbody>
            <tr>
              <td width="150px" style={{padding: 10}}>
                <a id="hylnkProject1" href="" style={{fontFamily: 'Calibri', paddingRight: "10px",fontSize: "20px" , textDecoration: 'none'}} 
                onClick={ () => { this.createproject();}}>Create Quick Project</a>
                <img src={refresh} alt title="Reload Project List" />
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr id="Grid_DXDataRow0" className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
                      <td></td>
                      <td>
                        <ReactTable
                          columns={columns}
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

export default Project