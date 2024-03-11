import React, { Component } from 'react'
import Header from './header'
import refresh from '../images/refresh.png'
import Footer from './footer'
import axios from 'axios';
import Delete from '../images/delete_icon.png';
import ReactTable from "react-table-6";
import Swal from 'sweetalert2';
import Loader from '../images/loader2.gif';
import showmore from '../images/show_more_btn.png'
import Edit from '../images/edit_icon.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import New from '../images/add.png';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const AddBoardValidation = Yup.object({
  ProjectName: Yup.string()
  .required('Project Name is Required'),
  BoardName: Yup.string()
  .required('Board Name is Required'),
});

const EditBoardValidation = Yup.object({
  ProjectName: Yup.string()
  .required('Project Name is Required'),
  BoardName: Yup.string()
  .required('Board Name is Required'),
});


export class Board extends Component {

  constructor() {
		super();
		this.state = {
      ProjectDatas:[],
      LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      Auth:  JSON.parse(localStorage.getItem("auth")),
      LoaderShow: false,
      AddShowPopup: false,
      EditShowPopup: false,
      BoardMemberPopup: false,
      EditBoardName: '',
      EditBoardID: '',
      EditProjectID: '',
      showModal1: false,
      showModal2: false,
      showModal3: false,
      BoardDatas:[],
      BoardMembersDatas: [],
	  };
	}

componentDidMount(){
    const Auth =  JSON.parse(localStorage.getItem("auth"));
      if(!Auth){
       this.props.history.push('/login');
      }

    this.BoardDatasMethod();
    this.ProjectDatasMethod();
  }

BoardDatasMethod(){
  var Datas = [];
  this.setState({ BoardDatas: Datas });
  this.setState({ LoaderShow: true });

  var URL = 'https://helpdeskservice.desss-portfolio.com/api/GetBoard/LoadGrid';
  axios.post(URL)
  .then(res => {

  var data = res.data.data;
  if(data[0].errorMsg === "No Data Found"){
    return;
  }else{
   data.forEach((key, value) => {
     Datas.push({
      ProjectName: key.ProjectName,
      BoardName: key.BoardName,
      ProjectID:  key.ProjectID,
      BoardID:  key.BoardID,
      });
     })
     this.setState({ BoardDatas: Datas }); 
     console.log('BoardDatas', this.state.BoardDatas);
  }
     this.setState({ LoaderShow: false });
  })
  .catch(error => {
    this.setState({ LoaderShow: false });
    console.log(error);
  })
}


ProjectDatasMethod(){
  var Datas = [];
  this.setState({ ProjectDatas: Datas });
  this.setState({ LoaderShow: true });

  var URL = 'https://helpdeskservice.desss-portfolio.com/api/GetProjectName/GetProjectName?CompanyID=DESSS&UserTypeID=2&Est&Empid=10';
  axios.get(URL)
  .then(res => {

  var data = res.data.data;
  if(data[0].errorMsg === "No Data Found"){
    return;
  }else{
   data.forEach((key, value) => {
     Datas.push({
      ProjectName: key.ProjectName,
      ProjectID:  key.ProjectID,
      });
     })
     this.setState({ ProjectDatas: Datas }); 
     console.log('BoardDatas', this.state.ProjectDatas);
  }
     this.setState({ LoaderShow: false });
  })
  .catch(error => {
    this.setState({ LoaderShow: false });
    console.log(error);
  })
}



AddPopupOpen = () => {
  this.setState({ AddShowPopup: true });
};

AddPopupClose = () => {
  this.setState({ AddShowPopup: false });
};

EditPopupOpen = (res, datas) => {
  console.log('Edit Board Datas', datas);
  this.setState({ EditBoardName: datas.BoardName });
  this.setState({ EditBoardID: datas.BoardID });
  this.setState({ EditProjectID: datas.ProjectID });
  this.setState({ EditShowPopup: true });
};

EditPopupClose = () => {
  this.setState({ EditShowPopup: false });
};

DeleteBoardMethod = (res, datas) => {

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

  console.log('Delete Board' , datas);
  var URL = 'https://helpdeskservice.desss-portfolio.com/api/DeleteBoard/Delete?BoardID='+datas.BoardID;
  axios.delete(URL)
  .then(res3 => {
    Swal.fire({
      icon: "success",
      title: "Board has been deleted",
      showConfirmButton: false,
      timer: 1500
     });
     this.BoardDatasMethod();
     console.log('Delete Board',  res3);
  })
  .catch(error => {
    this.BoardDatasMethod();
    console.log(error);
  })
 }

  });

}

BoardMemberModalOpen = (res, datas) => {
  console.log('Board Members Data', datas)
  this.setState({ BoardMemberPopup: true });
  var Datas = [];
  this.setState({ BoardMembersDatas: Datas });
  this.setState({ LoaderShow: true });

  var URL = 'https://helpdeskservice.desss-portfolio.com/api/BoardMembers/LoadGrid?BoardID=' + datas.BoardID;
  axios.post(URL)
  .then(res => {

  var data = res.data.data;
  if(data[0].errorMsg === "No Data Found"){
    return;
  }else{
   data.forEach((key, value) => {
     Datas.push({
      BoardMemberName: key.BoardMemberName,
      BoardName:  key.BoardName,
      Role:  key.Role,
      BoardMemberID:  key.BoardMemberID,
      BoardID:  key.BoardID,
      });
     })
     this.setState({ BoardMembersDatas: Datas }); 
     console.log('BoardMembersDatas', this.state.BoardMembersDatas);
  }
     this.setState({ LoaderShow: false });
  })
  .catch(error => {
    this.setState({ LoaderShow: false });
    console.log(error);
  })
};

BoardMemberModalClose = () => {
  this.setState({ BoardMemberPopup: false });
};


handleCloseModal2 = () => {
  this.setState({ showModal2: false });
};

  handleOpenModal2 = () => {
    this.setState({ showModal2: true });
  };

  handleCloseModal3 = () => {
    this.setState({ showModal3: false });
  };

  handleOpenModal3 = () => {
    this.setState({ showModal3: true });
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

    const BoardColumns = [
      {
        Header: 'Expand',
        width: 100,
        minWidth: 100,
        maxWidth: 100,
        sortable:false,
        filterable: false ,
        Cell: props => {
          return (
              <button className='edit-btn' style={{width:"100%"}} onClick={ () => {this.BoardMemberModalOpen(this, props.original);}}>
                <img src={showmore} alt="Edit" style={{color: '#06638F', height: '20px', borderWidth: '0px'}} />
              </button>
          )
      }
      },
      {
          Header: 'Project Name',
          accessor: 'ProjectName',
          style:{
              textAlign: "center"
          },
          width: "100%",
         },
      {
       Header: 'BoardName',
       accessor: 'BoardName',
       style:{
           textAlign: "center"
       },
       width: "100%",
      },
      {
        Header: 'Add Board Members',
        style:{
          textAlign: "center"
      },
      width: "100%",
      Cell: props => {
        return (
            <Link to="/boardmembers" className='edit-btn' style={{color: "rgb(76 74 71)", borderBottom: "1px solid rgb(76, 74, 72)" }} >
             Add Board Members
            </Link>
        )
      }
      },
      {
        Header: 'Sprints',
        style:{
          textAlign: "center"
      },
      width: "100%",
      Cell: props => {
        return (
            <Link to="/sprint" className='edit-btn' style={{color: "rgb(76 74 71)",borderBottom: "1px solid rgb(76, 74, 72)"}}>
             Sprints
            </Link>
        )
      }
      },
      {
        Header: 'Edit',
        style:{
          textAlign: "center"
      },
        width: 100,
        minWidth: 100,
        maxWidth: 100,
        sortable:false,
        filterable: false ,
      Cell: props => {
        return (
            <button className='del-btn'style={{width:"100%"}}   onClick={() => {this.EditPopupOpen(this, props.original);}}> 
              <img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Edit} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} />
            </button>
        )
    },
      },
      {
        Header: 'Delete',
        style:{
          textAlign: "center"
      },
        width: 100,
        minWidth: 100,
        maxWidth: 100,
        sortable:false,
        filterable: false ,
      Cell: props => {
        return (
            <button className='del-btn'style={{width:"100%"}} 
            onClick={() => {this.DeleteBoardMethod(this, props.original);
          }}><img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Delete} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} /></button>
        )
    },
      }
]

const BoardMemberColumns = [

  {
      Header: 'Board',
      accessor: 'BoardName',
      style:{
          textAlign: "center"
      },
      width: "100%",
     },
  {
   Header: 'BoardMember',
   accessor: 'BoardMemberName',
   style:{
       textAlign: "center"
   },
   width: "100%",
  },
  {
    Header: 'Role',
    accessor: 'Role',
    style:{
        textAlign: "center"
    },
    width: "100%",
   },
//   {
//     Header: 'Delete',
//     style:{
//       textAlign: "center"
//   },
//     width: 100,
//     minWidth: 100,
//     maxWidth: 100,
//   Cell: props => {
//     return (
//         <button className='del-btn'style={{width:"100%"}} 
//         onClick={() => {this.DeleteBoardMethod(this, props.original);
//       }}><img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Delete} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} /></button>
//     )
// },
//   }
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
      <td>
        <table>
          <tbody>
            <tr className="heading_bg">
              <td >
                Board
              </td>
              <td>
                <Link className='edit-btn-submodule' style={{width:"130px"}} onClick={ () => {this.AddPopupOpen();}} >
                  <img src={New} alt="add new" style={{color: '#06638F', height: '20px', borderWidth: '0px'}} />
                  <span>New Board</span>
                </Link>
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
            <tr id="Grid_DXDataRow0" className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
              <td>
                <ReactTable
                  columns={BoardColumns}
                  data={this.state.BoardDatas}
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



{/* Popup  */}


 {/*Add Board Popup Start*/}

 {this.state.AddShowPopup && (
          <div className="popup-create">
          <div className='popup-body'>
        <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 698, cursor: 'default', visibility: 'visible',overflow:"auto",minHeight: "300px", maxHeight: "500px"}}>
  <div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
    <div className="dxpc-headerContent" style={{float:'left'}}>
      <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Add New Board</span>
    </div>
    <button className='popup-closebtn' onClick={this.AddPopupClose} style={{float:'right'}}>X</button>
    <b className="dx-clear" />
  </div><div className="dxpc-contentWrapper" >
    <div className="dxpc-content" style={{fontFamily: 'Calibri', fontSize: 15, padding: 0, display: 'block'}} id="Grid_DXPEForm_PWC-1">
      <div className="dxgvPopupEditForm_Office2003Blue" style={{overflowX: 'hidden'}}>
     

      <Formik
          initialValues={{
            ProjectName:'',
            BoardName:'',
          }}
          validationSchema={AddBoardValidation}
          onSubmit={Values => {
            console.log('Add Board Values', Values);
            this.setState({ LoaderShow: true });
            var AddBoard = 'https://helpdeskservice.desss-portfolio.com/api/InsertBoard/InsertData?ProjectID='+Values.ProjectName+'&BoardName=' + Values.BoardName;
            axios.post(AddBoard)
            .then(Res => {
              this.setState({ LoaderShow: false });
              this.setState({ AddShowPopup: false });
               Swal.fire({
                icon: "success",
                title: "Board Added Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              this.BoardDatasMethod();
            })
            .catch(error => {
              this.BoardDatasMethod();
              this.setState({ AddShowPopup: false });
              this.setState({ LoaderShow: false });
              console.log(error);
            })
          }}
        >

{formik => (
   <Form>
        <table id="Grid_DXPEForm_DXEFT" class="submodule-newpopup" cellSpacing={0} cellPadding={0} border={0} style={{fontFamily: 'Calibri', fontSize: 15, width: '100%', borderCollapse: 'collapse'}}>
          <tbody>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Project Name</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
               {/* <Field name="ProjectName" type="text" style={{width: '100%'}} /> */}
               <Field name="ProjectName" id='ProjectName' as="select" style={{width: '100%'}}>
              <option>--Select--</option>
                    { this.state.ProjectDatas.map((element) => 
                      <option  value={element.ProjectID}>{element.ProjectName}</option>
                    )}
              </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="ProjectName" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Board Name</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
               <Field name="BoardName" type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="BoardName" />
              </td>
            </tr>

          </tbody>
        </table>

       <div class="popup-update">
        <button type='submit'>Save</button>
        <button onClick={this.AddPopupClose}>Close</button>
        </div>
        </Form>
    )}

    </Formik>



     
      </div>
    </div>
  </div>

  
        </div>

          </div>            

            
          </div>
        )}

  {/* Add Board Popup End */}





{/*Edit Board Popup Start*/}

{this.state.EditShowPopup && (
          <div className="popup-create">
            
          <div className='popup-body'>
        <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 698, cursor: 'default', visibility: 'visible',overflow:"auto",minHeight: "300px", maxHeight: "500px"}}>
  <div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
    <div className="dxpc-headerContent" style={{float:'left'}}>
      <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Edit Board</span>
    </div>
    <button className='popup-closebtn' onClick={this.EditPopupClose} style={{float:'right'}}>X</button>
    <b className="dx-clear" />
  </div><div className="dxpc-contentWrapper" >
    <div className="dxpc-content" style={{fontFamily: 'Calibri', fontSize: 15, padding: 0, display: 'block'}} id="Grid_DXPEForm_PWC-1">
      <div className="dxgvPopupEditForm_Office2003Blue" style={{overflowX: 'hidden'}}>
     

      <Formik
          initialValues={{
            ProjectName: this.state.EditProjectID,
            BoardName: this.state.EditBoardName,
          }}
          validationSchema={EditBoardValidation}
          onSubmit={Values => {
            console.log('Edit Board Values', Values);
            this.setState({ LoaderShow: true });
            var EditBoard = 'https://helpdeskservice.desss-portfolio.com/api/UpdateBoard/Update?BoardID='+this.state.EditBoardID+'&ProjectID='+Values.ProjectName+'&BoardName=' + Values.BoardName;
            axios.post(EditBoard)
            .then(Res => {
              this.setState({ LoaderShow: false });
              this.setState({ EditShowPopup: false });
               Swal.fire({
                icon: "success",
                title: "Board Updated Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              this.BoardDatasMethod();
            })
            .catch(error => {
              this.BoardDatasMethod();
              this.setState({ EditShowPopup: false });
              this.setState({ LoaderShow: false });
              console.log(error);
            })
          }}
        >

{formik => (
   <Form>
        <table id="Grid_DXPEForm_DXEFT" class="submodule-newpopup" cellSpacing={0} cellPadding={0} border={0} style={{fontFamily: 'Calibri', fontSize: 15, width: '100%', borderCollapse: 'collapse'}}>
          <tbody>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Project Name</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
               {/* <Field name="ProjectName" type="text" style={{width: '100%'}} /> */}
               <Field name="ProjectName" id='ProjectName' as="select" style={{width: '100%'}}>
              <option>--Select--</option>
                    { this.state.ProjectDatas.map((element) => 
                      <option  value={element.ProjectID}>{element.ProjectName}</option>
                    )}
              </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="ProjectName" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Board Name</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
               <Field name="BoardName" type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="BoardName" />
              </td>
            </tr>

          </tbody>
        </table>

       <div class="popup-update">
        <button type='submit'>Update</button>
        <button onClick={this.EditPopupClose}>Close</button>
        </div>
        </Form>
    )}

    </Formik>



     
      </div>
    </div>
  </div>

  
        </div>

          </div>            

            
          </div>
        )}

  {/* Edit Board Popup End */}


  {/* Board Membes popup Start */}

  {this.state.BoardMemberPopup && (
          <div className="popup-create">
            
          <div className='popup-body'>
        <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 698, cursor: 'default', visibility: 'visible',overflow:"auto",minHeight: "300px", maxHeight: "500px"}}>
  <div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
    <div className="dxpc-headerContent" style={{float:'left'}}>
      <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Board Members</span>
    </div>
    <button className='popup-closebtn' onClick={this.BoardMemberModalClose} style={{float:'right'}}>X</button>
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
                  columns={BoardMemberColumns}
                  data={this.state.BoardMembersDatas}
                  noDataText={"No Data..."}
                  filterable
                  defaultPageSize={5}
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

 {/* Board Membes popup End */}

  {/* new */}

  {this.state.showModal2 && (
          <div className="popup-create">
            
          <div className='popup-body'>
        <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 698, cursor: 'default', visibility: 'visible',overflow:"auto",minHeight: "300px", maxHeight: "500px"}}>
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
                  columns={BoardColumns}
                  data={this.state.BoardDatas}
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

  {this.state.showModal3 && (
          <div className="popup-create">
            
          <div className='popup-body'>
        <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 698, cursor: 'default', visibility: 'visible',overflow:"auto",minHeight: "300px", maxHeight: "500px"}}>
  <div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
    <div className="dxpc-headerContent" style={{float:'left'}}>
      <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Add New Submodule</span>
    </div>
    <button className='popup-closebtn' onClick={this.handleCloseModal3} style={{float:'right'}}>X</button>
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
                  columns={BoardColumns}
                  data={this.state.BoardDatas}
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

export default Board