import React, { Component } from 'react'
import empty from '../images/DXR-1.gif'
import refresh from '../images/refresh.png'
import Header from './header'
import gotask from '../images/menu-img.gif'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import ReactTable from "react-table-6";
import moment from 'moment';
import ReactDOM from 'react-dom';
import Edit from '../images/edit_icon.png'
import New from '../images/add.png'
import Delete from '../images/delete_icon.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import Loader from '../images/loader2.gif';
import Createtable from '../Home/createtable';
import NewTable from './NewTable'


  const Editprojectvalidate = Yup.object({

    ProjectName: Yup.string()
      .required('Project Name is Required'),
      TotalHrs: Yup.string()
      .required('Total hours estimated is Required'),
  });



  const Popupvalidate = Yup.object({
      submodulename:Yup.string()
      .required('Module Name is Required'),
      subtaskname: Yup.string()
      .required('Task Name is Required'),
      subphase: Yup.string()
      .required('Phase Name is Required'),
      subtaskcategory: Yup.string()
      .required('Module Name is Required'),
      subissuetype:Yup.string()
      .required('Issue type is Required'),
      substartdate: Yup.string()
      .required('Start date is Required'),
      subenddate:Yup.string()
      .required('End Date is Required'),
      subestimatedhrs:Yup.string()
      .required('Estimated hours is Required'),
      subtaskstatus:Yup.string()
      .required('Task status is Required'),
  });



  const Editpopupvalidate = Yup.object({

    subeditmodulename: Yup.string()
    .required('Module name is Required'),
    subedittaskname: Yup.string()
    .required('Task name is Required'),
    subeditticketno: Yup.string()
    .required('Ticket no is Required'),
    subeditphase: Yup.string()
    .required('Phase is Required'),
    subedittaskcategory: Yup.string()
    .required('Task category is Required'),
    subeditissuetype: Yup.string()
    .required('Issue type is Required'),
    subeditstartdate: Yup.string()
    .required('Start date is Required'),
    subeditenddate: Yup.string()
    .required('Enddate is Required'),
    subedittotalhours: Yup.string()
    .required('Total hours is Required'),
    subeditPriority: Yup.string()
    .required('Priority is Required'),
    subedittaskstatus: Yup.string()
    .required('Task status is Required'),
  });


  const ModuleEditpopupvalidate = Yup.object({

      editmodulename: Yup.string()
      .required('Sub project is Required'),
      editmodulecompleted: Yup.string()
      .required('Completed is Required'),
      editmodulestartdate: Yup.string()
      .required('Start Date is Required'),
      editmoduleenddate: Yup.string()
      .required('End Date is Required'),
      editmoduleFinaldate: Yup.string()
      .required('Delivery Date is Required'),
      editmoduleActualhours: Yup.string()
      .required('Actual Hours is Required'),
      editmoduleEstTotalHours: Yup.string()
      .required('Estimated Hours is Required'),
  });


  const TaskAllotPopUpvalidation = Yup.object({

    // Taskdate: Yup.string()
    // .required('Task Date is Required'),
    Projectname: Yup.string()
    .required('Project Name is Required'),
    Modulename: Yup.string()
    .required('Module Name is Required'),
    Screenname1: Yup.string()
    .required('Screen Name is Required'),
    Task: Yup.string()
    .required('Task is Required'),
    Board: Yup.string()
    .required('Board is Required'),
    Scrum: Yup.string()
    .required('Scrum is Required'),
    Assingedby: Yup.string()
    .required('Assinged By is Required'),
    Assingedto: Yup.string()
    .required('Assinged To is Required'),
    Tasktype: Yup.string()
    .required('Task Type is Required'),
    Hours: Yup.string()
    .required('Hours is Required'),
    // DocCount: Yup.string(),
    Taskstatus: Yup.string()
    .required('Task Status is Required'),
    // Notes: Yup.string(),
    // Billable: Yup.string(),
    // Eststartdate: Yup.string()
    // .required('Start Date is Required'),
    // Estenddate: Yup.string()
    // .required('End Date is Required')
  });
  
  const modulevalidate = Yup.object({

    txtModuleName: Yup.string()
    .required('Project name is Required'),
    TextBox1: Yup.string()
    .required('TotalHrs is Required'),
    modulestartdate: Yup.string()
    .required('Start date is Required'),
    moduleenddate: Yup.string()
    .required('End date is Required'),
    moduledeliverydate: Yup.string()
    .required('Delivery date is Required'),
  });




export class createproject extends Component {

    constructor() {
		super();
		this.state = {
            LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
            projectdetailsprojectID1:  JSON.parse(localStorage.getItem("projectdetailsprojectID1")),
            EditprojectDatas:  JSON.parse(localStorage.getItem("EditprojectDatas")),
            createProjectDatas:[],
            SetLoadEmpoyeeDatas:[],
            ProjectNamelist_data:[],
            ProjectMembersDatas:[],
            ModuleListDatas:[],
            Submodule:[],
            GetModulelist_data:[],
            GetScreenNamelist_data:[],
            submodulelist_data:[],
            subphaselist_data:[],
            subtaskcategorylist_data:[],
            SubModIssueType_data:[],
            projectdetailsprojectID:'',
            submoduleEditpopup:[],
            projectdetailstotalhrs:'',
            projectdetailsname:'',
            startdate:'',
            enddate:'',
            deliverydate:'',
            popupstartdate:'',
            popupenddate:'',
            system_ton:'',
            saveandcontinuedata:[],
            subModulegridListDatas:[],
            submoduleprjtaskid1:[],
            editmodulegrid1:[],
            PrjTaskID: '',
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showtab1: true,
            showtab2: false,
            showtab3: false,
            showtab4: false,
            showtab5: false,
            PROJECTNAME:'',
            TOTALHRS:'',
            EstStartDate: null,
            EstEndDate: null,
            FinalEndDate: null,
            subEditpopup:[],
            AddEmpList: [],
            projectdatas:[],
            Auth:  JSON.parse(localStorage.getItem("auth")),
            selectedCheckboxes: [],
            ModulelistGridData:[],
            ScreenNameListGridData:[],
            TaskNameList:[],
            AddTaskList:[],
            PushTaskList:[],
            GridAllotTableData: [],
            ScreenName:'',
            SelectedModuleID:'',
            Task_Category_ID:'',
            Project_Task_Id:'',
            TableShow: false,
            TextBox1:[],
            TextBox11:[],
            editmodulegrid1start:[],
            editmodulegrid1end:[],
            editmodulegrid1final:[],
            subEditpopupstart:[],
            subEditpopupend:[],
            LoaderShow: false,
            oncedone:false,
            projectdatas:[],
            active:'',
            Billable:'',
            BoardDatas:[],
            SprintDatas:[],
            AssingedbyDatas:[],
            AssingedToDatas:[],
            TaskTypeDatas: [],
            TaskstatusDatas: [],
            IsBillable : false,
            Notes1 : '',
            DocCount: '',
            PrjTaskAllotID: '',
            ModuleID: '',
            SubModuleID: '',
	  };
    this.updateStateValue = this.updateStateValue.bind(this);
	}


  componentDidMount(){
    const Auth =  JSON.parse(localStorage.getItem("auth"));
      if(!Auth){
       this.props.history.push('/login');
      }
      this.modulelistgrid();
      this.submodulegrid();
      this.projectnext();
      this.ModulelistGridMethod();

      this.BoardDatasMethod();
      this.SprintDatasMethod();
      this.AssingedbyDataMethod();
      this.AssingedToDataMethod();
      this.TaskTypeDataMethod();
      this.TaskstatusDatasMethod();

    var ProjectNamelist = 'https://helpdeskservice.desss-portfolio.com/api/GetProjectName/GetProjectName?CompanyID='+this.state.LoginDatas.CompanyID+'&UserTypeID=4&Est='+this.state.projectdetailstotalhrs+'&Empid=' + this.state.LoginDatas.EmpID;
    axios.get(ProjectNamelist)
    .then(ProjectNamelist => {
      var data = ProjectNamelist.data.data;
      console.log('ProjectNamelist',  ProjectNamelist.data.data);
      data.map((key) =>{
        this.setState({ ProjectNamelist_data: [ ...this.state.ProjectNamelist_data, {
          ProjectName: key.ProjectName ,
          ProjectID :key.ProjectID
       }]
     });
     });

    })
    .catch(error => {
    console.log(error);
    })


    var SubModIssueType = 'https://helpdeskservice.desss-portfolio.com/api/SubModIssueType/GetIssueType';
    axios.get(SubModIssueType)
    .then(SubModIssueType => {
      var data3 = SubModIssueType.data.data;
      console.log('SubModIssueTypelist',  SubModIssueType.data.data);
      data3.map((key) =>{
        this.setState({ SubModIssueType_data: [ ...this.state.SubModIssueType_data, {
          subModuleTypeName: key.ModuleTypeName ,
          subModuleTypeID :key.ModuleTypeID
       }]
     });
     });
    })
    .catch(error => {
    console.log(error);
    })



    var Submoduledata1 = [];
    this.setState({ Submodule: Submoduledata1 });
    var Submodule = 'https://helpdeskservice.desss-portfolio.com/api/LoadSubModule/LoadGrid?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID;
    axios.post(Submodule)
    .then(res3 => {
    this.setState({ SubmoduleDatas: res3.data.data});
    console.log('Submodule',  this.state.SubmoduleDatas);

    var data1 = res3.data.data;
    data1.forEach((key, value) => {
        console.log('Submoduledata1');
        Submoduledata1.push({
          ModuleName:key.ModuleName,
          TaskName:key.TaskName,
          TicketNo:key.TicketNo,
          PhaseDescriptionName:key.PhaseDescriptionName,
          Description:key.Description,
          EstStartDate: moment(key.EstStartDate).format("MM/DD/YYYY"),
          EstEndDate: moment(key.EstEndDate).format("MM/DD/YYYY"),
          EstTotalHours:key.EstTotalHours,
          Source:key.Source,
          CardviewStatus:key.CardviewStatus,
          Active:key.Active,
          Billable:key.Billable,
          PrjTaskID:key.PrjTaskID,
        });
    })
    this.setState({ Submodule: Submoduledata1 });
    // localStorage.setItem("submoduleEditpopup", JSON.stringify(Submoduledata1.PrjTaskID));
    console.log('Submoduledata1' , this.state.Submodule);
    })
    .catch(error => {
    console.log(error);
    })


    var GetModulelist = 'https://helpdeskservice.desss-portfolio.com/api/GetModule/GetModule?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID;
    axios.get(GetModulelist)
    .then(GetModulelist => {
      var GetModule = GetModulelist.data.data;
      console.log('GetModulelist',  GetModulelist.data.data);
      GetModule.map((key) =>{
        this.setState({ GetModulelist_data: [ ...this.state.GetModulelist_data, {
         ModuleName: key.ModuleName ,
         ModuleID :key.ModuleID
       }]
     });
     });

    })
    .catch(error => {
    console.log(error);
    })


    var GetScreenNamelist = 'https://helpdeskservice.desss-portfolio.com/api/GetScreenName/DropDownScreenName?CompanyID='+this.state.LoginDatas.CompanyID+'&ModuleID=2135';
    axios.post(GetScreenNamelist)
    .then(GetScreenNamelist => {
      var GetScreenName = GetScreenNamelist.data.data;
      console.log('GetScreenNamelist',  GetScreenNamelist.data.data);
      GetScreenName.map((key) =>{
        this.setState({ GetScreenNamelist_data: [ ...this.state.GetScreenNamelist_data, {
          TaskName: key.TaskName ,
         ProjectID :key.ProjectID
       }]
     });
     });

    })
    .catch(error => {
    console.log(error);
    })

    

    var subphaselist = 'https://helpdeskservice.desss-portfolio.com/api/Phase/Loadphase';
    axios.post(subphaselist)
    .then(subphaselist => {
      var data1 = subphaselist.data.data;
      console.log('subphaselist 2',  subphaselist.data.data);
      data1.map((key) =>{
        this.setState({ subphaselist_data: [ ...this.state.subphaselist_data, {
          subPhaseDescription: key.PhaseDescription ,
          subPhaseID :key.PhaseID
       }]
     });
     });
    })
    .catch(error => {
    console.log(error);
    })

    
    
    var subtaskcategorylist = 'https://helpdeskservice.desss-portfolio.com/api/SubModTaskCat/GetTaskCategory?CompanyID='+this.state.LoginDatas.CompanyID;
    axios.get(subtaskcategorylist)
    .then(subtaskcategorylist => {
      var data2 = subtaskcategorylist.data.data;
      console.log('subtaskcategorylist',  subtaskcategorylist.data.data);
      data2.map((key) =>{
        this.setState({ subtaskcategorylist_data: [ ...this.state.subtaskcategorylist_data, {
          subtaskcategorydescription: key.Description ,
          subTaskCategoryID :key.TaskCategoryID
       }]
     });
     });
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

  updateStateValue(newValue) {
    this.setState({ LoaderShow: newValue });
  }


  startdate = (e) => {
    console.log('Date Change', e.target.value);
    var startdatedate =  moment(e.target.value).format("MM/DD/YYYY");
    console.log('Date Change startdate', startdatedate);
    this.setState({ startdate: startdatedate });
  }
  enddate = (e) => {
    console.log('Date Change', e.target.value);
    var enddatedate =  moment(e.target.value).format("MM/DD/YYYY");
    console.log('Date Change enddate', enddatedate);
    this.setState({ enddate: enddatedate });
  }
  deliverydate = (e) => {
    console.log('Date Change', e.target.value);
    var deliverydatedate =  moment(e.target.value).format("MM/DD/YYYY");
    console.log('Date Change deliverydate', deliverydatedate);
    this.setState({ deliverydate: deliverydatedate });    
  }
  UpdateMethod(){
    var txtModuleName	=	document.getElementById('txtModuleName').value;
    var editmodulestartdate	=	document.getElementById('editmodulestartdate').value;
    var editmoduleenddate	=	document.getElementById('editmoduleenddate').value;
    var editmoduleFinaldate	=	document.getElementById('editmoduleFinaldate').value;
    var TextBox1	=	document.getElementById('TextBox1').value;
    // error
    var ProjectNameerror		=	document.getElementById('ProjectNameerror');
    var editmodulestartdateerror		=	document.getElementById('editmodulestartdateerror');
    var editmoduleenddaterror		=	document.getElementById('editmoduleenddaterror');
    var editmoduleFinaldaterror		=	document.getElementById('editmoduleFinaldaterror');
    var TextBox1error		=	document.getElementById('TextBox1error');
    var active = document.getElementById('CheckBox3').checked;
  // console.log('system_ton', system_ton)
  if(txtModuleName == ''){
    ProjectNameerror.innerHTML	=	"Please Enter Module Name"; 
      return false;
    }
    else{
      ProjectNameerror.innerHTML	=	""; 
    }
    if(TextBox1 == ''){
      TextBox1error.innerHTML	=	"Please Enter Total Hrs"; 
      return false;
    }
    else{
      TextBox1error.innerHTML	=	""; 
    }
    if(editmodulestartdate == ''){
      editmodulestartdateerror.innerHTML	=	"Please Enter start date"; 
      return false;
    }
    else{
      editmodulestartdateerror.innerHTML	=	""; 
    }
    if(editmoduleenddate == ''){
      editmoduleenddaterror.innerHTML	=	"Please Enter end date"; 
      return false;
    }
    else{
      editmoduleenddaterror.innerHTML	=	""; 
    }
    if(editmoduleFinaldate == ''){
      editmoduleFinaldaterror.innerHTML	=	"Please Enter Final date"; 
      return false;
    }
    else{
      editmoduleFinaldaterror.innerHTML	=	""; 
    }
    if(txtModuleName != '' && TextBox1 != '' && editmodulestartdateerror != '' && editmoduleenddaterror != '' && editmoduleFinaldaterror != ''  ){
      ProjectNameerror.innerHTML	=	""; 
      TextBox1error.innerHTML	=	""; 
      editmodulestartdateerror.innerHTML	=	"";
      editmoduleenddaterror.innerHTML	=	"";
      editmoduleFinaldaterror.innerHTML	=	"";
    }
    // if(txtModuleName == '' || TextBox1 == ''){
    //   totalerror.innerHTML	=	"Please Enter All Modlue fields"; 
    //   console.log('TextBox1', TextBox1);
    //   console.log('txtModuleName', txtModuleName);
    //     return;
    // }else{
    //   totalerror.innerHTML	=	" ";
    // }
    this.setState({ LoaderShow: true });
        axios.post('https://helpdeskservice.desss-portfolio.com/api/SaveModuleData/SaveModule?StartDate='+ this.state.startdate +'&EndDate='+ this.state.enddate +'&DeliveryDate='+ this.state.deliverydate +'&CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID+'&ModuleName='+ txtModuleName +'&TotalHrs='+TextBox1+'&Active='+active+'&Sequence=1&UserName=sharan')
        .then(saveandcontinue => {  
          this.modulelistgrid();
         console.log('save and continue', saveandcontinue);  
         this.setState({ saveandcontinuedata: saveandcontinue });  
        //  console.log('save and continue', system_ton); 
        this.setState({ LoaderShow: false });
  
        document.getElementById('txtModuleName').value = '';
        document.getElementById('TextBox1').value = '';
        document.getElementById('CheckBox3').checked = false;
        document.getElementById('editmodulestartdate').value = '';
        document.getElementById('editmoduleenddate').value = '';
        document.getElementById('editmoduleFinaldate').value = '';
        document.getElementById('txtSeq').value = ''
  
       })
        .catch(error => {
        console.log(error);
       });
  }


  // tabprojectadd(){
    
  // }
  


// module on change
  
onChangeeditmodulestartdate = (e) => {
  console.log('editmodulestartdate1', e.target.value);
  var editmodulestartdate1 =  moment(e.target.value).format("MM/DD/YYYY");
  this.setState({ editmodulegrid1start: editmodulestartdate1 }, () => {
    console.log(this.state.editmodulegrid1start, 'editmodulegrid1start');
  }); 

  document.getElementById('editmodulestartdate1').value = editmodulestartdate1;
  console.log('Date Change editmodulestartdate1', editmodulestartdate1);
  // this.setState({ editmodulegrid1start: editmodulestartdate1 });    
  // this.afterchngeddate(editmodulestartdate1);
  // console.log('Date Changed editmodulestartdate1 2', this.state.editmodulegrid1start);
}

onChangeeditmoduleenddate = (e) => {
  console.log('editmoduleenddate1', e.target.value);
  var editmoduleenddate1 =  moment(e.target.value).format("MM/DD/YYYY");
  this.setState({ editmodulegrid1end: editmoduleenddate1 }, () => {
    console.log(this.state.editmodulegrid1end, 'editmodulegrid1end');
  }); 

  document.getElementById('editmoduleenddate1').value = editmoduleenddate1;
  console.log('Date Change editmoduleenddate1', editmoduleenddate1);
}

onChangeeditmodulefinaldate = (e) => {
  console.log('editmoduleFinaldate1', e.target.value);
  var editmoduleFinaldate1 =  moment(e.target.value).format("MM/DD/YYYY");
  this.setState({ editmodulegrid1final: editmoduleFinaldate1 }, () => {
    console.log(this.state.editmodulegrid1final, 'editmodulegrid1final');
  }); 

  document.getElementById('editmoduleFinaldate1').value = editmoduleFinaldate1;
  console.log('Date Change editmoduleFinaldate1', editmoduleFinaldate1);
}
//  sub module on change

onChangeeditsubmodulestartdate =(e) =>{
  console.log('editsubmodulestartdate1', e.target.value);
  var editsubmodulestartdate1 =  moment(e.target.value).format("MM/DD/YYYY");
  this.setState({ editmodulegrid1final: editsubmodulestartdate1 }, () => {
    console.log(this.state.editmodulegrid1final, 'editmodulegrid1final');
  }); 

  document.getElementById('editsubmodulestartdate1').value = editsubmodulestartdate1;
  console.log('Date Change editsubmodulestartdate1', editsubmodulestartdate1);
}
onChangeeditsubmoduleenddate =(e) =>{
  console.log('editsubmoduleenddate1', e.target.value);
  var editsubmoduleenddate1 =  moment(e.target.value).format("MM/DD/YYYY");
  this.setState({ editmodulegrid1final: editsubmoduleenddate1 }, () => {
    console.log(this.state.editmodulegrid1final, 'editmodulegrid1final');
  }); 

  document.getElementById('editsubmoduleenddate1').value = editsubmoduleenddate1;
  console.log('Date Change editsubmoduleenddate1', editsubmoduleenddate1);
}
    
// UpdateMethod(){
//   var txtModuleName	=	document.getElementById('txtModuleName').value;
//   // var system_ton	=	document.getElementById('system_ton').value;
//   var TextBox1	=	document.getElementById('TextBox1').value;
//   var totalerror		=	document.getElementById('totalerror');
//   var dateRequired = document.getElementById('dateRequired');
//   var active = document.getElementById('CheckBox3').checked;
// // console.log('system_ton', system_ton)
//   if(txtModuleName == '' || TextBox1 == '' || dateRequired == ''){
//     totalerror.innerHTML	=	"Please Enter All Module fields"; 
//     console.log('TextBox1', TextBox1);
//     console.log('txtModuleName', txtModuleName);
//       return;
//   }else{
//     totalerror.innerHTML	=	" ";
//   }

//       axios.post('https://helpdeskservice.desss-portfolio.com/api/SaveModuleData/SaveModule?StartDate='+ this.state.startdate +'&EndDate='+ this.state.enddate +'&DeliveryDate='+ this.state.deliverydate +'&CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID+'&ModuleName='+ txtModuleName +'&TotalHrs='+TextBox1+'&Active='+active+'&Sequence=1&UserName=sharan')
//       .then(saveandcontinue => {  
//         this.modulelistgrid();
//        console.log('save and continue', saveandcontinue);  
//        this.setState({ saveandcontinuedata: saveandcontinue });  
//       //  console.log('save and continue', system_ton); 
//      })
//       .catch(error => {
//       console.log(error);
//      });


// }

projectnext() {

  var EmpoyeeDatas = [];
  // this.setState({ SetLoadEmpoyeeDatas: []});
  this.state.SetLoadEmpoyeeDatas = [];
    var LoadEmpoyee = 'https://helpdeskservice.desss-portfolio.com/api/AssignResources/LoadEmpoyee?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID
    axios.post(LoadEmpoyee)
    .then(res => {
    this.setState({ SetLoadEmpoyeeDatas: res.data.data});


    // var data1 = this.state.SetLoadEmpoyeeDatas; 
    // data1.forEach((key, value) => {
    //     console.log('EmpoyeeDatas');
    //     EmpoyeeDatas.push({
    //       Department:key.Department,
    //       Designation:key.Designation,
    //       EmpID:key.EmpID,
    //       EmpName:key.EmpName,
    //     });
    // })
    // this.setState({ SetLoadEmpoyeeDatas: EmpoyeeDatas });

    console.log('SetLoadEmpoyee',  this.state.SetLoadEmpoyeeDatas);
    })
    .catch(error => {
    console.log(error);
    })
  
  
    // this.setState({ ProjectMembersDatas: []});
    this.state.ProjectMembersDatas = [];
    var ProjectMembers = 'https://helpdeskservice.desss-portfolio.com/api/ProjectMembers/LoadEmp?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID
    axios.post(ProjectMembers)
    .then(res2 => {
    this.setState({ ProjectMembersDatas: res2.data.data});
    console.log('ProjectMembersDatas',  this.state.ProjectMembersDatas);
    })
    .catch(error => {
    console.log(error);
    })
  
}


modulelistgrid(){
  var ModuleListDatas1 = [];
  // this.setState({ LoaderShow: true });
  var ModuleList = 'https://helpdeskservice.desss-portfolio.com/api/ModuleList/LoadGrid?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID;
  axios.post(ModuleList)
  .then(res3 => {

  var data1 = res3.data.data; 
  data1.forEach((key, value) => {
      console.log('Submoduledata1');
      ModuleListDatas1.push({
        ModuleName:key.ModuleName,
        Completed:key.Completed,
        EstStartDate: moment(key.EstStartDate).format("MM/DD/YYYY"),
        EstEndDate: moment(key.EstEndDate).format("MM/DD/YYYY"),
        FinalEndDate: moment(key.FinalEndDate).format("MM/DD/YYYY"),
        ActTotalHours:key.ActTotalHours,
        EstTotalHours:key.EstTotalHours,
        ProjectID:key.ProjectID,
        ModuleID:key.ModuleID,
      });
  })
  this.setState({ LoaderShow: false });
  // this.setState({ ModuleListDatas: res3.data.data});
  console.log('ModuleList',  ModuleListDatas1);
  this.setState({ ModuleListDatas: ModuleListDatas1});
  })
  .catch(error => {
  console.log(error);
  })

}

submodulegrid(){
  var subModuleListDatas1 = [];
  // this.setState({ LoaderShow: true });
  var subModulegridList = 'https://helpdeskservice.desss-portfolio.com/api/LoadSubModule/LoadGrid?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID ;
  axios.post(subModulegridList)
  .then(res3 => {

    var data1 = res3.data.data; 
  data1.forEach((key, value) => {
      console.log('Submoduledata1');
      subModuleListDatas1.push({
        ModuleName:key.ModuleName,
        ModuleID:key.ModuleID,
        TaskName:key.TaskName,
        TicketNo:key.TicketNo,
        PrjTaskID:key.PrjTaskID,
        PhaseDescription:key.PhaseDescription,
        TaskCategory:key.TaskCategory,
        PhaseDescriptionName:key.PhaseDescriptionName,
        Description:key.Description,
        TaskType:key.TaskType,
        Issuetypename:key.Issuetypename,
        EstStartDate: moment(key.EstStartDate).format("DD/MM/YYYY"),
        EstEndDate: moment(key.EstEndDate).format("DD/MM/YYYY"),
        EstTotalHours:key.EstTotalHours,
        Source:key.Source,
        Priority:key.Priority,
        CardviewStatus:key.CardviewStatus,
        Active:key.Active,
        Billable:key.Billable,
      });
  })
  this.setState({ LoaderShow: false });
  this.setState({ subModulegridListDatas: subModuleListDatas1});
  console.log('subModulegridList 1',  res3.data.data);
  console.log('subModulegridList',  this.state.subModulegridListDatas);
  })
  .catch(error => {
  console.log(error);
  })

}
submodulelist(){
  this.state.submodulelist_data = []
var submodulelist = 'https://helpdeskservice.desss-portfolio.com/api/ModelFrom_project/Modulefromproject?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID;
  axios.post(submodulelist)
  .then(submodulelist => {
    var data = submodulelist.data.data;
    console.log('submodulelist 2',  submodulelist.data.data);
    data.map((key) =>{
      this.setState({ submodulelist_data: [ ...this.state.submodulelist_data, {
        subModuleName: key.ModuleName ,
        subModuleID :key.ModuleID
     }]
   });
   });
  })
  .catch(error => {
  console.log(error);
  })
}




pushtoallotment(){
  axios.post('https://helpdeskservice.desss-portfolio.com/api/PushToTaskAllotment/LoadGrid?PrjTaskAllotID=22288&ProjectID=1866&UserName=Sharan&ModuleID=4119&SubModuleID=2326')
  .then(res => {  
   console.log('pushtoallot', res);  
 })
  .catch(error => {
  console.log(error);
 });
}

refresh(){
  window.location.reload();
}






handleOpenModal1 = () => {
  this.setState({ showModal1: true });
};

handleCloseModal1 = () => {
  this.setState({ showModal1: false });
};


handleOpenModal3 = (res, datas) => {
  this.setState({ showModal3: true });
  console.log('module Edit Datas 1', datas);

  var editmodulegrid = datas;
 
  console.log('module Edit Datas 2', editmodulegrid);
  this.setState({ editmodulegrid1: editmodulegrid }); 
  var subEditpopup1 = [];
  console.log('module Edit Datas 3', this.state.editmodulegrid1);
  axios.post('https://helpdeskservice.desss-portfolio.com/api/EditModule/Edit?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+datas.ProjectID+'&ModuleID='+datas.ModuleID)
  .then(subEditpopup => {  

  var data1 = subEditpopup.data.data;
  data1.forEach((key, value) => {
      console.log('Submoduledata1');
      subEditpopup1.push({
        ModuleName:key.ModuleName,
        Completed:key.Completed,
        EstStartDate: moment(key.EstStartDate).format("DD/MM/YYYY"),
        EstEndDate: moment(key.EstEndDate).format("DD/MM/YYYY"),
        FinalEndDate: moment(key.FinalEndDate).format("DD/MM/YYYY"),
        ActTotalHours:key.ActTotalHours,
        EstTotalHours:key.EstTotalHours,
        ProjectID:key.ProjectID,
        ModuleID:key.ModuleID,
      });
  })

  var subEditpopup2 = subEditpopup1[0];
  console.log('module Edit Datas 7', subEditpopup2); 
  this.setState({ subEditpopup: subEditpopup2});
    // this.setDefaultDate(this.state.subEditpopup.EstStartDate);
    this.setState({ editmodulegrid1start: this.state.editmodulegrid1.EstStartDate});
   this.setState({ editmodulegrid1end: this.state.editmodulegrid1.EstEndDate});
   this.setState({ editmodulegrid1final: this.state.editmodulegrid1.FinalEndDate});
   console.log('module Edit Datas 5', this.state.editmodulegrid1start);  
   console.log('module Edit Datas 4', this.state.subEditpopup);  

  //  const EstStartDate1 = new Date(subEditpopup.data.data.EstStartDate);
  //  const EstEndDate1 = new Date(subEditpopup.data.data.EstEndDate);
  //  const FinalEndDate1 = new Date(subEditpopup.data.data.FinalEndDate);
  //  this.setState({ EstStartDate: EstStartDate1 });
  //  this.setState({ EstEndDate: EstEndDate1 });
  //  this.setState({ FinalEndDate: FinalEndDate1 });
   console.log('module Edit Datas 6', this.state.EstStartDate); 
 })
  .catch(error => {
  console.log(error);
 });

};

handleCloseModal3 = () => {
  this.setState({ showModal3: false });
};

handleOpenModal2 = (res, datas) => {
  this.setState({ showModal2: true });

  console.log('Edit Datas 2', datas.PrjTaskID);

  var submoduleprjtaskid = datas;

  this.setState({ submoduleprjtaskid1: submoduleprjtaskid }); 
  console.log('Edit Datas 1', datas);
  console.log('Edit Datas 3', this.state.submoduleprjtaskid1);
  console.log('Edit Datas 2', this.state.projectdetailsprojectID);
  var subEditpopup1 = [];
  axios.post('https://helpdeskservice.desss-portfolio.com/api/EditSubModule/Edit?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID+'&PrjTaskID='+datas.PrjTaskID)
  .then(subEditpopup => {  

    var data1 = subEditpopup.data.data;
  data1.forEach((key, value) => {
      console.log('Submoduledata1');
      subEditpopup1.push({
        ModuleID:key.ModuleID,
        TaskName:key.TaskName,
        PhaseDescription:key.PhaseDescription,
        TaskCategory:key.TaskCategory,
        TaskType:key.TaskType,
        EstStartDate: moment(key.EstStartDate).format("DD/MM/YYYY"),
        EstEndDate: moment(key.EstEndDate).format("DD/MM/YYYY"),
        EstTotalHours:key.EstTotalHours,
        Priority:key.Priority,
        CardviewStatus:key.CardviewStatus,
        Active:key.Active,
        Billable:key.Billable,
      });
  })
  var subEditpopup2 = subEditpopup1[0];
  console.log('sub module edit date', subEditpopup2); 
  this.setState({ subEditpopup: subEditpopup2});
  this.setState({ subEditpopupstart: this.state.subEditpopup.EstStartDate});
   this.setState({ subEditpopupend: this.state.subEditpopup.EstEndDate});
   console.log('sub module edit date 2', this.state.subEditpopup );  
 })
  .catch(error => {
  console.log(error);
 });

};

handleCloseModal2 = () => {
  this.setState({ showModal2: false });
};





handletab1 = () => {
  // var tabproject	=	document.getElementById('tabproject').value;
  // var tabtotalhrs	=	document.getElementById('tabtotalhrs').value;
  //     this.setState({ projectdetailsname: tabproject });  
  //     this.setState({ projectdetailstotalhrs: tabtotalhrs });  
  //     console.log('projectdetailsname',  this.state.projectdetailsname);
  //     console.log('projectdetailstotalhrs',  this.state.projectdetailstotalhrs);
  if(this.state.oncedone === false ){
  this.handletabtest2();
  }
  else{
    this.setState({ oncedone: true });
  this.setState({ showtab1: true });
  this.setState({ showtab2: false });
  this.setState({ showtab3: false });
  this.setState({ showtab4: false });
  this.setState({ showtab5: false });
  const tab1 = document.getElementById('first-tab');
  const tab2 = document.getElementById('second-tab');
  const tab3 = document.getElementById('third-tab');
  const tab4 = document.getElementById('fourth-tab');
  const tab5 = document.getElementById('five-tab');
      tab1.classList.add('active');
      tab2.classList.remove('active');
      tab3.classList.remove('active');
      tab4.classList.remove('active');
      tab5.classList.remove('active');
  }
};
handletabtest2 = () => {
  if(this.state.oncedone === false ){
  var tabproject	=	document.getElementById('tabproject').value;
  var tabtotalhrs	=	document.getElementById('tabtotalhrs').value;
  console.log('tabproject',  tabproject);
  console.log('tabtotalhrs',  tabtotalhrs);
  // error
  var tabprojecterror		=	document.getElementById('tabprojecterror');
  var tabtotalhrserror		=	document.getElementById('tabtotalhrserror');

if(tabproject == ''){
  tabprojecterror.innerHTML	=	"Please Enter Project Name"; 
    return false;
  }
  else{
    tabprojecterror.innerHTML	=	""; 
  }
  if(tabtotalhrs == ''){
    tabtotalhrserror.innerHTML	=	"Please Enter Total Hrs"; 
    return false;
  }
  else{
    tabtotalhrserror.innerHTML	=	""; 
  }
  if(tabproject != '' && tabtotalhrs != ''  ){
    tabprojecterror.innerHTML	=	""; 
    tabtotalhrserror.innerHTML	=	""; 
  }

 

  var res = 'https://helpdeskservice.desss-portfolio.com/api/QuickProject/CreateQuickProject?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectName='+tabproject+'&TotalHrs='+tabtotalhrs+'&CreatedBy=sharan'
  axios.post(res)
  .then(res => {
    if( res.data.data[0].errorMsg === 'Project Name already exists, please choose some different name'  ){
      Swal.fire({
        icon: "error",
        title: "Project Name already exists, please choose some different name",
        showConfirmButton: false,
        timer: 3000
       });
      return
    }
    else{
    console.log('Edit project ',  res.data.data);
    this.setState({ oncedone: true });
    var projectdatas = res.data.data[0];
    console.log('projectdetailsname ',  this.state.projectdatas);
    var submoduleEditpopup1 = projectdatas.ProjectID;
    var submoduleEditpopup2 = projectdatas.TotalHrs;
    var submoduleEditpopup3 = projectdatas.ProjectName;
    this.setState({ projectdetailsprojectID: submoduleEditpopup1 });  
    this.setState({ projectdetailstotalhrs: submoduleEditpopup2 });  
    this.setState({ projectdetailsname: submoduleEditpopup3 });  
    console.log('projectdetailsprojectID',  this.state.projectdetailsprojectID);
    this.projectnext();
    }
     })
      .catch(error => {
        var error1 = error;
        this.setState({ error: error1 });  

      console.log('error', this.state.error);
      this.handletab1();
     })
    }
    else{
      this.projectnext();
    }


}
handletab2 = () => {
  if(this.state.oncedone === false ){
    this.handletabtest2();
    }
    else{
      this.setState({ oncedone: true });
      const tab1 = document.getElementById('first-tab');
  const tab2 = document.getElementById('second-tab');
  const tab3 = document.getElementById('third-tab');
  const tab4 = document.getElementById('fourth-tab');
  const tab5 = document.getElementById('five-tab');
    tab1.classList.remove('active');
    tab2.classList.add('active');
    tab3.classList.remove('active');
    tab4.classList.remove('active');
    tab5.classList.remove('active');

    this.setState({ showtab1: false });
    this.setState({ showtab2: true });
    this.setState({ showtab3: false });
    this.setState({ showtab4: false });
    this.setState({ showtab5: false });
    }
};
handletab3 = () => {
  if(this.state.oncedone === false ){
    this.handletabtest2();
    }
    else{
      this.setState({ oncedone: true });
      this.modulelistgrid();
  const tab1 = document.getElementById('first-tab');
  const tab2 = document.getElementById('second-tab');
  const tab3 = document.getElementById('third-tab');
  const tab4 = document.getElementById('fourth-tab');
  const tab5 = document.getElementById('five-tab');
  tab1.classList.remove('active');
      tab2.classList.remove('active');
      tab3.classList.add('active');
      tab4.classList.remove('active');
      tab5.classList.remove('active');
  this.setState({ showtab1: false });
  this.setState({ showtab2: false });
  this.setState({ showtab3: true });
  this.setState({ showtab4: false });
  this.setState({ showtab5: false });
    }
};
handletab4 = () => {
  if(this.state.oncedone === false ){
    this.handletabtest2();
    }
    else{
      this.setState({ oncedone: true });
  this.submodulelist();
  const tab1 = document.getElementById('first-tab');
  const tab2 = document.getElementById('second-tab');
  const tab3 = document.getElementById('third-tab');
  const tab4 = document.getElementById('fourth-tab');
  const tab5 = document.getElementById('five-tab');
  tab1.classList.remove('active');
      tab2.classList.remove('active');
      tab3.classList.remove('active');
      tab4.classList.add('active');
      tab5.classList.remove('active');
  this.setState({ showtab1: false });
  this.setState({ showtab2: false });
  this.setState({ showtab3: false });
  this.setState({ showtab4: true });
  this.setState({ showtab5: false });
    }
};
handletab5 = () => {
  this.EstimateAndAllotMethods();
  if(this.state.oncedone === false ){
    this.handletabtest2();
    }
    else{
      this.setState({ oncedone: true });
  const tab1 = document.getElementById('first-tab');
  const tab2 = document.getElementById('second-tab');
  const tab3 = document.getElementById('third-tab');
  const tab4 = document.getElementById('fourth-tab');
  const tab5 = document.getElementById('five-tab');
  tab1.classList.remove('active');
      tab2.classList.remove('active');
      tab3.classList.remove('active');
      tab4.classList.remove('active');
      tab5.classList.add('active');
  this.setState({ showtab1: false });
  this.setState({ showtab2: false });
  this.setState({ showtab3: false });
  this.setState({ showtab4: false });
  this.setState({ showtab5: true });
    }
};


selects(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=true;  
        console.log('selects',ele[i].checked)
  }  
}  
deSelect(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=false;  
          console.log('deSelect',ele[i].checked)
        
  }  
}  

handleDateChange = date => {
  // Update the selected date in the state when the user selects a new date
  this.setState({ selectedDate: date });
};



addempycheckbox = (event) => {
  var checked = event.target.checked;
  var Value = event.target.value;
  // var AddEmpList = [];
  if(checked === true){
    // this.setState.AddEmpList.push({Value});
    this.setState({
      AddEmpList: this.state.AddEmpList.concat(Value)
    })
  }else if(checked === false){
    var array = this.state.AddEmpList;
    var index = array.indexOf(Value); // Let's say it's Bob.
    delete array[index];
  }
  console.log('check box Datas1221212', this.state.AddEmpList);
  console.log('check box Datas12', event.target.checked, event.target.value);
}

AddEmpMethod= () => {
const EmpID = this.state.AddEmpList.join(',');
this.setState({ LoaderShow: true });
console.log('AddEmp Method', EmpID);
var AddURL = 'https://helpdeskservice.desss-portfolio.com/api/AssignResources/AddEmployee?CompanyID=' + this.state.LoginDatas.CompanyID+ "&ProjectID=" + this.state.projectdetailsprojectID +"&EmpID="+ EmpID;

axios.post(AddURL)
.then(Response => {
console.log('AddURL', Response);
this.state.AddEmpList = [];
 this.componentDidMount();
 this.setState({ LoaderShow: false });
})
.catch(error => {
console.log(error);
this.state.AddEmpList = [];
})
}


// Deletesubmodulegrid = (res, datas) => {

//   console.log('Delsubmodulegrid', datas.PrjTaskID);

//   var Delsubmodulegrid = 'https://helpdeskservice.desss-portfolio.com/api/DeleteSubModule/Grid_RowDelete?PrjTaskID='+datas.PrjTaskID;
//   axios.post(Delsubmodulegrid)
//   .then(res3 => {
//     this.submodulegrid();
//     this.componentDidMount();
//     console.log('Delete sub module',  res3);
//   })
//   .catch(error => {
//   console.log(error);
//   })

// }



// Deletemodulegrid = (res, datas) => {

//   console.log('Deletemodulegrid', datas);

//   var Delmodulegrid = 'https://helpdeskservice.desss-portfolio.com/api/DeleteModule/DeleteRow?ModuleID='+datas.ModuleID;
//   axios.delete(Delmodulegrid)
//   .then(res3 => {
//     this.modulelistgrid();
//     this.componentDidMount();
//     console.log('Delete module',  res3);
//   })
//   .catch(error => {
//   console.log(error);
//   })

// }

Deletemodulegrid(res, datas){
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
      var Delmodulegrid = 'https://helpdeskservice.desss-portfolio.com/api/DeleteModule/DeleteRow?ModuleID='+datas.ModuleID;
  axios.delete(Delmodulegrid)
  .then(res3 => {
    Swal.fire({
      icon: "success",
      title: "Ticket has been deleted",
      showConfirmButton: false,
      timer: 1500
     });

     this.componentDidMount();
     this.modulelistgrid();
    console.log('Delete module',  res3);
  })
  .catch(error => {
  console.log(error);
  })
      
      
    }

  });

}


Deletesubmodulegrid(res, datas){
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

      console.log('DeleteTicket 10' , datas);
      var Delsubmodulegrid = 'https://helpdeskservice.desss-portfolio.com/api/DeleteSubModule/Grid_RowDelete?PrjTaskID='+datas.PrjTaskID;
  axios.post(Delsubmodulegrid)
  .then(res3 => {
    Swal.fire({
      icon: "success",
      title: "Ticket has been deleted",
      showConfirmButton: false,
      timer: 1500
     });

     this.componentDidMount();
     this.modulelistgrid();
    console.log('Delete module',  res3);
  })
  .catch(error => {
  console.log(error);
  })
      
      
    }

  });

}



// Estimate and Allot Functions


EstimateAndAllotMethods(){
  this.ModulelistGridMethod();
      this.BoardDatasMethod();
      this.SprintDatasMethod();
      this.AssingedbyDataMethod();
      this.AssingedToDataMethod();
      this.TaskTypeDataMethod();
      this.TaskstatusDatasMethod();
}

ModulelistGridMethod(){
  var ModuleList = 'https://helpdeskservice.desss-portfolio.com/api/GetModule/GetModule?CompanyID=' + this.state.LoginDatas.CompanyID +'&ProjectID='+ this.state.projectdetailsprojectID;
  axios.get(ModuleList)
  .then(res3 => {
  this.setState({ ModulelistGridData: res3.data.data});
  console.log('ModuleList Data',  this.state.ModulelistGridData);
  })
  .catch(error => {
  console.log(error);
  })

}

ScreenNameListGridMethod(id){
  this.setState({ SubModuleID: id});
  var ScreenNameList = 'https://helpdeskservice.desss-portfolio.com/api/GetScreenName/DropDownScreenName?CompanyID=' + this.state.LoginDatas.CompanyID +'&ModuleID='+ id;
  axios.post(ScreenNameList)
  .then(res3 => {
  this.setState({ ScreenNameListGridData: res3.data.data});
  console.log('ScreenNameListGridData',  this.state.ScreenNameListGridData);
  })
  .catch(error => {
  console.log(error);
  })

}

ModuleChangeMethod = (e) =>{
  this.setState({'SelectedModuleID': e.target.value});
  console.log('SelectedModuleID', e.target.value);
  this.ScreenNameListGridMethod(e.target.value)
}

ScreenNameChangeMethod = (e) =>{
  this.setState({'ScreenName': e.target.value});
  console.log('ScreenName', e.target.value);
}
SearchMethod = (eve) =>{
  var ProTAskID = '';
  var TaskCategoryID = '';
  this.setState({ LoaderShow: true});
  var Search = "https://helpdeskservice.desss-portfolio.com/api/SearchButton/GetprojectTaskBySearch?module=" + this.state.SelectedModuleID + "&screenname=" + this.state.ScreenName + "&ProjectID=" + this.state.projectdetailsprojectID;
  axios.get(Search)
  .then(SearchResult => {
  console.log('SearchResult',  SearchResult.data.data[0].PrjTaskID);
  ProTAskID =  SearchResult.data.data[0].PrjTaskID
  TaskCategoryID =  SearchResult.data.data[0].TaskCategory
  this.setState({'Task_Category_ID': TaskCategoryID});
  this.setState({'Project_Task_Id': ProTAskID});
  
  var TaskNameDatas1 = [];
  this.setState({ TaskNameDatas: TaskNameDatas1 });

  // var TaskName = "https://helpdeskservice.desss-portfolio.com/api/LoadTaskName/LoadGrid?TaskCategory="+ TaskCategoryID + "&ProjectID=" +this.state.EditprojectDatas.ProjectID+ "&ModuleID=" +this.state.SelectedModuleID+"&PrjTaskID=" + ProTAskID;
  var TaskName = "https://helpdeskservice.desss-portfolio.com/api/LoadGridTask/LoadGrid?TaskCategoryID="+ TaskCategoryID + "&ProjectID=" +this.state.projectdetailsprojectID+ "&ModuleID=" +this.state.SelectedModuleID+"&PrjTaskID=" + ProTAskID;
               // https://helpdeskservice.desss-portfolio.com/api/LoadGridTask/LoadGrid?TaskCategoryID=1128&ProjectID=1341&ModuleID=3880&PrjTaskID=29275
  axios.post(TaskName)
  .then(Response2 => {
   console.log('TaskNameDatas', Response2.data.data);
   var data = Response2.data.data;
   if(data[0].errorMsg === "No Data Found"){
    return;
  }else{
    data.forEach((key, value) => {
      TaskNameDatas1.push({
          //  TaskDate:  moment(key.TaskDate).format("MM/DD/YYYY"), 
           Task: key.Task,
          //  PrjTaskAllotID: key.PrjTaskAllotID,
          //  ProjectID: key.ProjectID,
          //  ModuleID: key.ModuleID,
          //  ModuleName: key.ModuleName,
           
         });
      })
      this.setState({ TaskNameDatas: TaskNameDatas1 }); 
  }
   })
  .catch(error => {
  console.log(error);
  })


  var Search2 = "https://helpdeskservice.desss-portfolio.com/api/LoadTaskName/LoadGrid?TaskCategory="+TaskCategoryID+"&ProjectID=" + this.state.projectdetailsprojectID + "&ModuleID=" + this.state.SelectedModuleID + "&PrjTaskID=" + ProTAskID;
  axios.post(Search2)
  .then(SearchResult2 => {
  console.log('SearchResult2',  SearchResult2);
  if(SearchResult2.data.data[0].errorMsg === "No Data Found"){
    this.setState({ TableShow: true});
    this.GridAllotTableDatamethod();
    this.setState({ LoaderShow: false});
     return;
  }else{
    this.setState({ TaskNameList: SearchResult2.data.data});
    this.setState({ TableShow: true});
    this.GridAllotTableDatamethod();
    this.setState({ LoaderShow: false});
  }
  })
  .catch(error => {
  console.log(error);
  this.GridAllotTableDatamethod();
  this.setState({ LoaderShow: false});
  })

  })
  .catch(error => {
  console.log(error);
  })

}

AddTaskCheckBoxmethod = (event) => {
  var checked = event.target.checked;
  var Value = event.target.value;
  // var AddEmpList = [];
  if(checked === true){
    // this.setState.AddEmpList.push({Value});
    this.setState({
      AddTaskList: this.state.AddTaskList.concat(Value)
    })
  }else if(checked === false){
    var array = this.state.AddTaskList;
    var index = array.indexOf(Value); // Let's say it's Bob.
    delete array[index];
  }
  console.log('check box Datas1221212', this.state.AddTaskList);
  console.log('check box Datas12', event.target.checked, event.target.value);
}

AddTasksMethod = () => {
  const AddTsk = this.state.AddTaskList.join(',');
  console.log('AddEmp Method', AddTsk);
  var AddURL = "https://helpdeskservice.desss-portfolio.com/api/AddTaskName/AddTask?taskId=" + AddTsk + "&CompanyID=" + this.state.LoginDatas.CompanyID + "&ProjectID=" + this.state.projectdetailsprojectID + "&ModuleID=" + this.state.SelectedModuleID + "&SubModuleID=" + this.state.Project_Task_Id + "&EmpID=" + this.state.LoginDatas.EmpID + "&TaskCategoryID=" + this.state.Task_Category_ID + "&UserName=" + this.state.LoginDatas.EmpName;

  axios.post(AddURL)
  .then(Response => {
    this.state.AddTaskList = [];
   console.log('AddURL', Response);
   this.setState({ TaskNameList: []});
  //  this.projectnext();
  this.GridAllotTableDatamethod();
    this.SearchMethod();
  })
  .catch(error => {
  console.log(error);
  this.state.AddTaskList = [];
  this.GridAllotTableDatamethod();
  })
}

GridAllotTableDatamethod = () => {
  
  var GridAllotTableData1 = [];
  this.setState({ GridAllotTableData: GridAllotTableData1 });

  var gridAllot = "https://helpdeskservice.desss-portfolio.com/api/GridAllot/LoadGrid?ProjectID="+this.state.projectdetailsprojectID+"&ModuleID="+this.state.SelectedModuleID+"&PrjTaskID=" +this.state.Project_Task_Id;
  axios.post(gridAllot)
  .then(Response1 => {
   console.log('GridAllotTableDatamethod', Response1.data.data);
   var data = Response1.data.data;
   if(data[0].errorMsg === "No Data Found"){
    return;
  }else{
   data.forEach((key, value) => {
     GridAllotTableData1.push({
          TaskDate:  moment(key.TaskDate).format("MM/DD/YYYY"), 
          ProjectName: key.ProjectName,
          PrjTaskAllotID: key.PrjTaskAllotID,
          ProjectID: key.ProjectID,
          ModuleID: key.ModuleID,
          ModuleName: key.ModuleName,
          Task: key.Task,
          Sequence: key.Sequence,
          EstStartDate: moment(key.EstStartDate).format("MM/DD/YYYY"),
          EstEndDate: moment(key.EstEndDate).format("MM/DD/YYYY"),
          AllotedHrs: key.AllotedHrs,
          TaskStatus:  key.TaskStatus,
          AssignedByName:  key.AssignedtoName,
          AssignedTo:  key.EmpName,
          TaskTypeName:  key.TaskTypeName,
          DocCount:  key.DocCount,
          Notes:  key.Notes,
          Billable:  key.Billable,
          Detail:  key.Details,
          TaskName: key.TaskName,
          BoardID: key.BoardID,
          BoardName: key.BoardName,
          SprintID: key.SprintID,
          SprintName: key.SprintName,
          AssignedByID: key.AssignedTo,
          AssignedToID: key.EmpID,
          TaskType: key.TaskType,
          TaskStatusID: key.TaskStatusID
        });
     })
     this.setState({ GridAllotTableData: GridAllotTableData1 }); 
  }

   })
  .catch(error => {
  console.log(error);
  })
}


PushTaskCheckBoxmethod = (event) => {
  var checked = event.target.checked;
  var Value = event.target.value;
  if(checked === true){
    this.setState({
      PushTaskList: this.state.PushTaskList.concat(Value)
    })
  }else if(checked === false){
    var array = this.state.PushTaskList;
    var index = array.indexOf(Value); 
    delete array[index];
  }
  console.log('PushTaskList Datas1221212', this.state.PushTaskList);
  console.log('PushTaskList box Datas12', event.target.checked, event.target.value);
}

PushToTasksMethod = () => {
  const Tasks = this.state.PushTaskList.join(',');
  console.log('PushToTasksMethod Method', Tasks);
  this.setState({ LoaderShow: true});
  var AddURL = "https://helpdeskservice.desss-portfolio.com/api/PushToTaskAllotment/LoadGrid?PrjTaskAllotID=" + Tasks + "&CompanyID="+this.state.LoginDatas.CompanyID + "&ProjectID=" + this.state.projectdetailsprojectID + "&UserName=" + this.state.LoginDatas.EmpName+"&ModuleID=" + this.state.SelectedModuleID + "&SubModuleID=" + this.state.Project_Task_Id;

  axios.post(AddURL)
  .then(Response => {
    this.state.PushTaskList = [];
   console.log('AddURL', Response.data.data[0].errorMsg);
   if(Response.data.data[0].errorMsg === "Task Pushed Successfully"){
    Swal.fire({
      icon: "success",
      title: "Task Pushed Successfully",
      showConfirmButton: false,
      timer: 1500
    });
   }else{
    Swal.fire({
      icon: "error",
      title: "Please Assign Employee to continue",
      showConfirmButton: false,
      timer: 3000
    });
   }
   this.setState({ PushTaskList: []});
  // alert('Task Allotted Succesfully')
  this.setState({ LoaderShow: false});
  this.SearchMethod();
  })
  .catch(error => {
  console.log(error);
  this.state.PushTaskList = [];
  this.setState({ LoaderShow: false});
  })
}

DuplicateMethod = () => {
  const Tasks = this.state.PushTaskList.join(',');
  console.log('PushToTasksMethod Method', Tasks);
  var DeleteURL = "https://helpdeskservice.desss-portfolio.com/api/DuplicateButton/Duplicate?PrjTaskAlotID=" + Tasks;
  // this.setState({ LoaderShow: true});
  axios.post(DeleteURL)
  .then(Response => {
    this.state.PushTaskList = [];
   console.log('AddURL', Response);
   this.setState({ PushTaskList: []});
  //  this.setState({ LoaderShow: false});
  this.SearchMethod();
  })
  .catch(error => {
  console.log(error);
  this.state.PushTaskList = [];
  })
}

// DeleteTask(res, datas){
//   const Tasks = this.state.PushTaskList.join(',');
//   console.log('DeleteTask' , datas);
//   var URL = "https://helpdeskservice.desss-portfolio.com/api/DeleteGridAllot/DeleteRow?PrjTaskAllotID="+ Tasks +"&ProjectID=" + this.state.projectdetailsprojectID + "&ModuleID=" + this.state.SelectedModuleID + "&SubModuleID="+ this.state.Project_Task_Id;
//   axios.delete(URL)
//   .then(res => {
//    console.log('Delete Task',  res);
//    this.state.PushTaskList = [];
//    this.SearchMethod();
     
//  })
//   .catch(error => {
//   console.log(error);
//  })
// }


DeleteTask(res, datas){
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

  const Tasks = this.state.PushTaskList.join(',');
  console.log('DeleteTask' , datas);
  var URL = "https://helpdeskservice.desss-portfolio.com/api/DeleteGridAllot/DeleteRow?PrjTaskAllotID="+ datas.PrjTaskAllotID +"&ProjectID=" + this.state.projectdetailsprojectID + "&ModuleID=" + this.state.SelectedModuleID + "&SubModuleID="+ this.state.Project_Task_Id;
  axios.delete(URL)
  .then(res => {
   console.log('Delete Task',  res);
   this.state.PushTaskList = [];
   this.SearchMethod();
    Swal.fire({
      icon: "success",
      title: "Ticket has been deleted",
      showConfirmButton: false,
      timer: 1500
     });

     this.componentDidMount();
     this.modulelistgrid();
    console.log('Delete module',  res);
  })
  .catch(error => {
  console.log(error);
  })
      
      
    }

  });

}


// DeleteTaskName(res, datas){
//   console.log('DeleteTask Name' , datas.PrjTaskAllotID);
//   const Tasks = datas.PrjTaskAllotID;
//   var URL = "https://helpdeskservice.desss-portfolio.com/api/DeleteGridAllot/DeleteRow?PrjTaskAllotID="+ Tasks +"&ProjectID=" + this.state.projectdetailsprojectID + "&ModuleID=" + this.state.SelectedModuleID + "&SubModuleID="+ this.state.Project_Task_Id;
//   axios.delete(URL)
//   .then(res => {
//    console.log('Delete Task',  res);
//    alert('Task Deleted Successfully');
//    this.SearchMethod();
     
//  })
//   .catch(error => {
//   console.log(error);
//  })
// }

DeleteTaskName(res, datas){
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

  console.log('DeleteTask Name' , datas.PrjTaskAllotID);
  const Tasks = datas.PrjTaskAllotID;
  var URL = "https://helpdeskservice.desss-portfolio.com/api/DeleteGridAllot/DeleteRow?PrjTaskAllotID="+ Tasks +"&ProjectID=" + this.state.projectdetailsprojectID + "&ModuleID=" + this.state.SelectedModuleID + "&SubModuleID="+ this.state.Project_Task_Id;
  axios.delete(URL)
  .then(res => {
   console.log('Delete Task',  res);
   alert('Task Deleted Successfully');
   this.SearchMethod();
    Swal.fire({
      icon: "success",
      title: "Ticket has been deleted",
      showConfirmButton: false,
      timer: 1500
     });

     this.componentDidMount();
     this.modulelistgrid();
    console.log('Delete module',  res);
  })
  .catch(error => {
  console.log(error);
  })
      
      
    }

  });

}

TaskAllotModalOpenMethod = (res, datas) => {

  // if(datas.Billable === true){
  //   document.getElementById('IsBillable').checked = true;
  // }else if(datas.Billable === false){
  //   document.getElementById('IsBillable').checked = false;
  // }

  this.setState({ IsBillable: datas.Billable });
  this.setState({ Notes1: datas.Notes });

  if(datas.DocCount === null || datas.DocCount === ''){
    this.setState({ DocCount: '0' });
  }else{
    this.setState({ DocCount: datas.DocCount });
  }
  
  this.setState({ PrjTaskAllotID: datas.PrjTaskAllotID });
  this.setState({ ModuleID: datas.ModuleID });
  

  this.setState({ TaskAllotModalShow: true });
  this.setState({ EditTaskAllotDatas: datas });
  console.log('Edit Datas 2', datas.Billable);
  
  console.log('Edit Datas 2', datas);

//   axios.post('https://helpdeskservice.desss-portfolio.com/api/EditSubModule/Edit?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID+'&PrjTaskID='+datas.PrjTaskID)
//   .then(subEditpopup => {  
//    console.log('save and continue', subEditpopup.data.data);  
//  })
//   .catch(error => {
//   console.log(error);
//  });

};

TaskAllotModalCloseMethod = () => {
  this.setState({ TaskAllotModalShow: false });
};


GridAllotTaskDateChange = (e) => {
  console.log('GridAllotTaskDateChange', e.target.value);
  var GridAllotTaskDateChangeDate =  moment(e.target.value).format("MM/DD/YYYY");
  // this.setState({ EditTaskAllotDatas[0].TaskDate: GridAllotTaskDateChangeDate }); 
  document.getElementById('GridAllotTaskDate').value = GridAllotTaskDateChangeDate;
  console.log('Date Change GridAllotTaskDateChangeDate', GridAllotTaskDateChangeDate);
}

EstdStartDateChange = (e) => {
  console.log('EstdStartDateChange', e.target.value);
  var EstdStartDate =  moment(e.target.value).format("MM/DD/YYYY");
  // this.setState({ EditTaskAllotDatas[0].TaskDate: GridAllotTaskDateChangeDate }); 
  document.getElementById('EstdStartDate').value = EstdStartDate;
}

EstdEndDateChange = (e) => {
  console.log('EstdEndDateChange', e.target.value);
  var EstdEndDate =  moment(e.target.value).format("MM/DD/YYYY");
  // this.setState({ EditTaskAllotDatas[0].TaskDate: GridAllotTaskDateChangeDate }); 
  document.getElementById('EstdEndDate').value = EstdEndDate;
}

IsBillableChange= (e) => {
  console.log('IsBillableChange', e.target.checked);
  if(e.target.checked){
    document.getElementById('IsBillable').checked = true;
    this.setState({ IsBillable: true });
  }else{
    document.getElementById('IsBillable').checked = false;
    this.setState({ IsBillable: false });
  }
  // document.getElementById('IsBillable').value = true;
}

BoardDatasMethod(){
  var URL = 'https://helpdeskservice.desss-portfolio.com/api/Board/LoadBoard?ProjectID=' +  this.state.EditprojectDatas.ProjectID;
  axios.post(URL)
  .then(res => {
    console.log('Board Datas', res.data.data);
    this.setState({ BoardDatas: res.data.data });
 })
  .catch(error => {
  console.log(error);
 })
}

SprintDatasMethod(){
  var URL = 'https://helpdeskservice.desss-portfolio.com/api/GridSprint/LoadBoard?ProjectID=' +  this.state.EditprojectDatas.ProjectID;
  axios.post(URL)
  .then(res => {
    console.log('Sprint Datas', res.data.data);
    this.setState({ SprintDatas: res.data.data });
 })
  .catch(error => {
  console.log(error);
 })
}

AssingedbyDataMethod(){
  var URL = 'https://helpdeskservice.desss-portfolio.com/api/AssignedBy/loadEmp?CompanyID='+ this.state.LoginDatas.CompanyID +'&ProjectID=' +  this.state.projectdetailsprojectID;
  axios.post(URL)
  .then(res => {
    console.log('Assingedby Data', res.data.data);
    this.setState({ AssingedbyDatas: res.data.data });
 })
  .catch(error => {
  console.log(error);
 })
}

TaskstatusDatasMethod(){
  var URL = 'https://helpdeskservice.desss-portfolio.com/api/TaskStatus/LodeTaskStatus';
  axios.post(URL)
  .then(res => {
    console.log('TaskstatusDatas', res.data.data);
    this.setState({ TaskstatusDatas: res.data.data });
 })
  .catch(error => {
  console.log(error);
 })
}

AssingedToDataMethod(){
  var URL = 'https://helpdeskservice.desss-portfolio.com/api/AssignedBy/loadEmp?CompanyID='+ this.state.LoginDatas.CompanyID +'&ProjectID=' +  this.state.projectdetailsprojectID;
  axios.post(URL)
  .then(res => {
    console.log('Assinged To Data', res.data.data);
    this.setState({ AssingedToDatas: res.data.data });
 })
  .catch(error => {
  console.log(error);
 })
}

TaskTypeDataMethod(){
  var URL = 'https://helpdeskservice.desss-portfolio.com/api/ProjectTaskType/LoadTasktype';
  axios.post(URL)
  .then(res => {
    console.log('Task Type Data ', res.data.data);
    this.setState({ TaskTypeDatas: res.data.data });
 })
  .catch(error => {
  console.log(error);
 })
}

  render() {

    const TaskNameColumns = [
      {
        Header: 'Select',
        accessor: 'TaskCategory',
        disableSortBy: true,
        style:{
            textAlign: "center"
        },
        Cell: props => {
          return (
            <input type='checkbox' onChange={this.AddTaskCheckBoxmethod} value={props.original.TaskID} name="CheckBox"/>
          )
      }
      },
      {
        Header: 'Task Name',
        accessor: 'TaskDescription',
        disableSortBy: true,
        style:{
            textAlign: "center"
        },
       },
    ]

    const TaskNameColumns2 = [
      {
        Header: 'Delete',
        width: "100%",
        Cell: props => {
            return (
                <button className='del-btn'style={{width:"100%"}} 
                onClick={() => {this.DeleteTaskName(this, props.original);
              }}><img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Delete} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} /></button>
            )
        },
      },
      {
        Header: 'Task Name',
        accessor: 'Task',
        disableSortBy: true,
        style:{
            textAlign: "center"
        },
       },
    ]

    const GridAllotColumns = [
      {
        Header: 'Select',
        accessor: 'Select',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
        Cell: props => {
          return(
          <input type='checkbox' onChange={this.PushTaskCheckBoxmethod} value={props.original.PrjTaskAllotID}  name="GridChk" style={{width:"100%"}} />
        )
      }
      },
      {
        Header: 'Edit',
        width: "150px",
        style:{
          textAlign: "center",
          width:'100px'
      },
        Cell: props => {
          return (
              <button className='edit-btn' style={{width:"100%"}} onClick={ () => {this.TaskAllotModalOpenMethod(this, props.original);}} >
                <img src={Edit} alt="Edit" style={{color: '#06638F', height: '20px', borderWidth: '0px'}} />
              </button>
          )
      }
       },
       {
        Header: 'Delete',
        width: "150px",
        style:{
          textAlign: "center",
          width:'100px'
      },
        Cell: props => {
            return (
                <button className='del-btn'style={{width:"100%"}} 
                onClick={() => {this.DeleteTask(this, props.original);
              }}><img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Delete} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} /></button>
            )
        },
      },
      {
        Header: 'Task Date',
        accessor: 'TaskDate',
        style:{
            textAlign: "center",
            width:'100px' 
        },
        width: "150px",
       },
      {
        Header: 'Task',
        accessor: 'Task',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'Sequence',
        accessor: 'Sequence',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'Board',
        accessor: 'BoardName',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'Scrum',
        accessor: 'SprintName',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'AssignedByName',
        accessor: 'AssignedByName',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'AssignedTo',
        accessor: 'AssignedTo',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'TaskType',
        accessor: 'TaskTypeName',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'AllotedHrs',
        accessor: 'AllotedHrs',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'DocCount',
        accessor: 'DocCount',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'TaskStatus',
        accessor: 'TaskStatus',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'Notes',
        accessor: 'Notes',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'Billable',
        accessor: 'Billable',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
        Cell: props => {
          return(
            <input type='checkbox'  name="GridChk1" checked={props.original.Billable === true}  style={{width:"100%"}} />
        )
      }
      },
      {
        Header: 'Estd.Start Date',
        accessor: 'EstStartDate',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'Estd.End Date',
        accessor: 'EstStartDate',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
       {
        Header: 'Detail',
        accessor: 'Detail',
        style:{
            textAlign: "center",
            width:'100px'
        },
        width: "150px",
       },
    ]

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
    const columns3 = [
  {
    Header: 'Edit',
    accessor: ' ',
    width: "100%",
    Cell: props => {
      return (
          <button className='edit-btn' style={{width:"100%"}} onClick={ () => {this.handleOpenModal3(this, props.original);}} >
            <img src={Edit} alt="Edit" style={{color: '#06638F', height: '20px', borderWidth: '0px'}} />
          </button>
      )
    }
  },
  {
    Header: 'Delete',
    width: "100%",
    Cell: props => {
        return (
            <button className='del-btn'style={{width:"100%"}} 
            onClick={() => {this.Deletemodulegrid(this, props.original);
          }}><img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Delete} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} /></button>
        )
    },
  },
  {
      Header: 'Module Name',
      accessor: 'ModuleName',
      width: "100%",
     },
     {
      Header: 'Completed',
      accessor: 'Completed',
      width: "100%",
     },
     {
      Header: 'Start Date',
      accessor: 'EstStartDate',
      width: "100%",
     },
     {
      Header: 'End Date',
      accessor: 'EstEndDate',
      width: "100%",
     },
     {
      Header: 'Final Date',
      accessor: 'FinalEndDate',
      width: "100%",
     },
     {
      Header: 'Actual Hours',
      accessor: 'ActTotalHours',
      width: "100%",
     },
     {
      Header: 'Estimated Hours',
      accessor: 'EstTotalHours',
      width: "100%",
     },
]
    const columns4 = [
    {
      Header: 'Edit',
      width: "100%",
      Cell: props => {
        return (
            <button className='edit-btn' style={{width:"100%"}} onClick={ () => {this.handleOpenModal2(this, props.original);}} >
              <img src={Edit} alt="Edit" style={{color: '#06638F', height: '20px', borderWidth: '0px'}} />
            </button>
        )
    }
     },
     {
      Header: 'Delete',
      width: "100%",
      Cell: props => {
          return (
              <button className='del-btn'style={{width:"100%"}} 
              onClick={() => {this.Deletesubmodulegrid(this, props.original);
            }}><img title="Delete" className="dxgvCommandColumnItem_Office2003Blue dxgv__cci" src={Delete} alt="Delete" style={{color: '#06638F', height: '20px', borderWidth: '0px',cursor: 'pointer'}} /></button>
          )
      },
    },
     {
      Header: 'Module Name',
      width: "100%",
      accessor: 'ModuleName',
     },
     {
      Header: 'Task Name',
      width: "100%",
      accessor: 'TaskName',
     },
     {
      Header: 'Ticket No',
      width: "100%",
      accessor: 'TicketNo',
     },
     {
      Header: 'Phase',
      width: "100%",
      accessor: 'PhaseDescriptionName',
     },
     {
      Header: 'Task Category',
      width: "100%",
      accessor: 'Description',
     },
     {
      Header: 'Issue type',
      width: "100%",
      accessor: ' ',
     },
     {
      Header: 'Start Date',
      width: "100%",
      accessor: 'EstStartDate',
     },
     {
      Header: 'End Date',
      width: "100%",
      accessor: 'EstEndDate',
     },
     {
      Header: 'Estm Hours',
      width: "100%",
      accessor: 'EstTotalHours',
     },
     {
      Header: 'Source',
      width: "100%",
      accessor: 'Source',
     },
     {
      Header: 'Priority',
      width: "100%",
      accessor: 'Priority',
     },
     {
      Header: 'Task Status',
      width: "100%",
      accessor: 'CardviewStatus',
     },
     {
      Header: 'Active',
      width: "100%",
      accessor: 'Active',
      style:{
          textAlign: "center"
      },
      Cell: props => {
        return(
          <input type='checkbox'  name="GridChk1" checked={props.original.Active === true}  style={{width:"100%"}} />
      )
    }
    },
     {
      Header: 'Is Billable',
      width: "100%",
      accessor: 'Billable',
      style:{
        textAlign: "center"
      },
      Cell: props => {
      return(
        <input type='checkbox'  name="GridChk1" checked={props.original.Billable === true}  style={{width:"100%"}} />
      )
      }
     },
]  
const { defaultDate } = this.state;

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


        <div className="centerBG" style={{display: "grid",maxWidth:"1695px",margin:"auto"}}>
  <p style={{width: "90%",textAlign: "center",fontWeight: 600,margin: "auto",fontSize: "20px",color: "#4c4a48"}}>Project Details</p>

             
            
  <div className="radio-tabs">
  <input className="state" type="radio" title="Input1" name="input-state" id="radio1" defaultChecked />
  <input className="state" type="radio" title="Input2" name="input-state" id="radio2" />
  <input className="state" type="radio" title="Input3" name="input-state" id="radio3" />
  <input className="state" type="radio" title="Input4" name="input-state" id="radio4" />
  <input className="state" type="radio" title="Input5" name="input-state" id="radio5" />
  
  <div className="tabs">
    <label htmlFor="radio1" id="first-tab" className="tab active">
      <div className="tab-label" onClick={ () => {this.handletab1();}}>Project</div>
    </label>
    <label htmlFor="radio2" id="second-tab" className="tab">
      <div className="tab-label" onClick={ () => {this.handletab2();}}>Assign Resources</div>
    </label>
    <label htmlFor="radio3" id="third-tab" className="tab">
      <div className="tab-label" onClick={ () => {this.handletab3();}}>Module</div>
    </label>
    <label htmlFor="radio4" id="fourth-tab" className="tab">
      <div className="tab-label" onClick={ () => {this.handletab4();}}>Sub Module</div>
    </label>
    <label htmlFor="radio5" id="five-tab" className="tab" style={{borderBottom:"none"}}>
      <div className="tab-label" onClick={ () => {this.handletab5();}}>Estimate And Allot</div>
    </label>
  </div>


  <div className="panels">



  {this.state.showtab1 && (
    <div id="first-panel" className="panel active animated slideInRight">
     
  <Formik
          initialValues={{
            ProjectName: this.state.projectdetailsname,
            TotalHrs: this.state.projectdetailstotalhrs,
          }}
          validationSchema={Editprojectvalidate}
          onSubmit={Editprojectvalue => {
            console.log('Editprojectvalue', Editprojectvalue);
            // var ProjectName	=	document.getElementById('ProjectName').value;
            // var TotalHrs	=	document.getElementById('TotalHrs').value;
            if(this.state.oncedone === false ){

            
            var res = 'https://helpdeskservice.desss-portfolio.com/api/QuickProject/CreateQuickProject?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectName='+Editprojectvalue.ProjectName+'&TotalHrs='+Editprojectvalue.TotalHrs+'&CreatedBy=sharan';
            axios.post(res)
            .then(res => {
              console.log('Edit project 1',  res.data.data[0].errorMsg);
              if( res.data.data[0].errorMsg === 'Project Name already exists, please choose some different name'  ){
                Swal.fire({
                  icon: "error",
                  title: "Project Name already exists, please choose some different name",
                  showConfirmButton: false,
                  timer: 3000
                 });
                return
              }
              else{
                this.setState({ oncedone: true });
                console.log('Edit project ',  res.data.data);
                var projectdatas = res.data.data[0];
                console.log('projectdetailsname ',  projectdatas);
                var submoduleEditpopup1 = projectdatas.ProjectID;
                var submoduleEditpopup2 = projectdatas.TotalHrs;
                var submoduleEditpopup3 = projectdatas.ProjectName;
                this.setState({ projectdetailsprojectID: submoduleEditpopup1 });  
                this.setState({ projectdetailstotalhrs: submoduleEditpopup2 });  
                this.setState({ projectdetailsname: submoduleEditpopup3 });  
                console.log('projectdetailsprojectID',  this.state.projectdetailsprojectID);
                localStorage.setItem("createprojectdatas", JSON.stringify(projectdatas)); 
                this.projectnext();
                this.handletab2();
                this.EstimateAndAllotMethods();
              }
              // this.addclass();
              // this.removeclass();
            })
            .catch(error => {
              console.log(error);
              var error1 = error;
          this.setState({ error: error1 });  

        console.log('error', this.state.error);
        this.handletab1();
            })
          }
          else{
            this.projectnext();
            this.handletab2();
          }
          }}
        >

{formik => (
  <Form>
     <table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse'}}>
  <tbody>
    <tr style={{height: '100%'}}>
      <td style={{color: '#333333', fontSize: '0.8em'}}>
        <table className="table-content" cellPadding="0px" cellSpacing="0px" width="1020px">
          <input type="hidden" name="ctl00$MainContent$wzdEmpDetails$PrjID" id="PrjID" defaultValue={1692} />
          <tbody>
            <tr>
              <td className="sub-head">Add Project</td>
            </tr>
            <tr>
              <td className="table-inner">
                <table className='project-tab'>
                  <tbody>
                    <tr>
                      <td width="130px">Project Name :
                        <span style={{color: 'Red'}}>*</span>
                      </td>
                      <td >
                        <Field name="ProjectName" id="tabproject" defaultValue={this.state.projectdetailsname} type="text"style={{width: 200}} />
                        <ErrorMessage component="label" className=" form-label text-danger" name="ProjectName" />
                        <div id="tabprojecterror" class="alert_span2" align="center"></div>
                      </td>
                      <td width="200px">Total hours estimated <span style={{color: 'Red'}}>*</span> &nbsp; :
                      </td>
                      <td >
                        <Field name="TotalHrs" id="tabtotalhrs" defaultValue={this.state.projectdetailstotalhrs} type="number" style={{width: 200}} />
                        <ErrorMessage component="label" className=" form-label text-danger" name="TotalHrs" />
                        <div id="tabtotalhrserror" class="alert_span2" align="center"></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody></table>
      </td>
    </tr>
    
  </tbody>
  </table>


    <label htmlFor="radio2" id="second-tab" className="tab" style={{width:"100%"}}>
      <button type="submit" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} className='tab-label' >Next</button>
    </label>
    <h4>{this.state.projectdatas}</h4>
      </Form>
      )}
  
      </Formik>




  {/* <label htmlFor="radio2" id="second-tab" className="tab">
      <button className='tab-label' style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} onClick={ () => {this.handletab2();}}>Next</button>
    </label> */}
    </div>
 )} 
  {this.state.showtab2 && (
    <div id="second-panel" className="panel animated slideInRight">
    <h3 className="slide-title">

    <table cellSpacing={0} cellPadding={0} border={0} id="wzdEmpDetails" style={{backgroundColor: '#EFF3FB', borderColor: '#B5C7DE', borderWidth: 1, borderStyle: 'solid', width: '100%', borderCollapse: 'collapse'}}>
<tbody><tr>
        <td style={{height: '100%'}}><table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse'}}>
        <tbody><tr style={{height: '100%'}}>
            <td style={{color: '#333333', fontSize: '0.8em'}}>
              <table className="table-content" cellPadding="0px" cellSpacing="0px" width="1020px">
                <tbody>
                  <tr>
                    <td className="sub-head" style={{position:'relative'}}><span>Assign Resources</span>
                    <div className='topnext'>
                    <label htmlFor="radio1" id="first-tab" className="tab">
                      <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px",marginRight: "10px"}} onClick={ () => {this.handletab1();}}>Previous</div>
                    </label>
                    <label htmlFor="radio3" id="third-tab" className="tab">
                      <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} onClick={ () => {this.handletab3();}}>Next</div>
                    </label>
                    </div>
                  </td>
                  </tr>
                  <tr>
                    <td className="heading_bg1">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <span id="lblProject" style={{fontSize:"18px"}}>Project Name : {this.state.projectdetailsname}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  {/* <tr style={{width: "50%",float: "right"}}>
                    <td className="tdspace">
                      <table width="100%" className="table-content" cellPadding={0} cellSpacing={0} >
                        <tbody><tr>
                            <td className="sub-head">Members of the Project
                            </td>
                          </tr>
                          <tr>
                            <td className="table-inner">
                              <table>
                                <tbody>
                                  <tr>
                                    <td align="right" style={{width: 150}}>
                                      <a id="lbtnBack" href="/project" style={{border: "1px solid #4c4a48",padding: "5px",borderRadius: "10px",color:"#4c4a48"}}>Go To Project List</a>
                                    </td>
                                    <td style={{width: 150}}> 
                                      <button id="btnNew" onClick={() => { this.RemoveEmpMethod(); }} style={{border: "1px solid #4c4a48",padding: "5px",borderRadius: "10px",color:"#4c4a48"}}>Remove Employees</button>
                                      <br />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
                                        selectRow={ { mode: 'checkbox', clickToSelect: true } }
                                        >
                                      </ReactTable>
                                    </td>
                                  </tr>
                                </tbody></table>
                            </td>
                          </tr>
                        </tbody></table>
                    </td>
                  </tr> */}
                  <tr>
                    <td className="tdspace">
                      <table width="100%" className="table-content" cellPadding={0} cellSpacing={0}>
                        <tbody><tr>
                            <td className="sub-head">Available Programmers
                            </td>
                          </tr>
                          {/* <Createtable onUpdateStateValue={this.updateStateValue} /> */}
                          <NewTable onUpdateStateValue={this.updateStateValue}/>
                          {/* <tr>
                            <td className="table-inner">
                              <table>
                                <tbody><tr>
                                    <td style={{width: 150}}> 
                                      <button id="btnNew" onClick={() => { this.AddEmpMethod(); }} style={{border: "1px solid #4c4a48",padding: "5px",borderRadius: "10px",color:"#4c4a48"}}>Add Employees</button>
                                      <br />
                                    </td>
                                    <td style={{width: 100}}>
                                      <button style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 10px",borderRadius: "10px"}} onClick={() => { this.selects(); }} value="Select All">Select All</button>
                                    </td>
                                    <td style={{width: 100}}>
                                    <button style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 10px",borderRadius: "10px"}} onClick={() => { this.deSelect(); }} value="Deselect All">Unselect</button>
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
                                                selectRow={ { mode: 'checkbox', clickToSelect: true } }
                                                >
                                              </ReactTable>
                                            </td>
                                          </tr>
                                        </tbody></table><img id="GridEmpList1_IADD" className="dxGridView_gvDragAndDropArrowDown_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="|" style={{position: 'absolute', visibility: 'hidden', top: '-100px'}} /><img id="GridEmpList1_IADU" className="dxGridView_gvDragAndDropArrowUp_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="|" style={{position: 'absolute', visibility: 'hidden', top: '-100px'}} /><img id="GridEmpList1_IDHF" className="dxGridView_gvDragAndDropHideColumn_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="Hide" style={{position: 'absolute', visibility: 'hidden', top: '-100px'}} /><table id="GridEmpList1_LP" className="dxgvLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{fontFamily: 'Calibri', fontSize: 14, borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                        <tbody><tr>
                                            <td className="dx" style={{paddingRight: 10}}><img src="/DXR.axd?r=0_1389-I60ci" alt align="middle" /></td><td className="dx" style={{fontFamily: 'Calibri', fontSize: 14, paddingLeft: 0}}><span id="GridEmpList1_TL">Loading…</span></td>
                                          </tr>
                                        </tbody></table><div id="GridEmpList1_LD" className="dxgvLoadingDiv_Office2003Blue" style={{display: 'none', zIndex: 29999, position: 'absolute'}}>
                                      </div><input type="hidden" name="ctl00$MainContent$wzdEmpDetails$GridEmpList1$DXSelInput" id="GridEmpList1_DXSelInput" /><input type="hidden" name="ctl00$MainContent$wzdEmpDetails$GridEmpList1$DXKVInput" id="GridEmpList1_DXKVInput" defaultValue="['191','170','186','11','131','136','133','182','190','188','169','192','183','120','129','168','179','116','189','171','132','174']" /><table id="GridEmpList1_DXStyleTable" border={0} style={{display: 'none'}}>
                                        <tbody><tr>
                                            <td />
                                          </tr><tr className="dxgvEditingErrorRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td className="dxgv" colSpan={4} style={{borderRightWidth: 0}} />
                                          </tr><tr className="dxgvSelectedRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvFocusedRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvFocusedGroupRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr><tr className="dxgvDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                            <td />
                                          </tr>
                                        </tbody>
                                      </table>
                                      <input type="hidden" name="ctl00$MainContent$wzdEmpDetails$GridEmpList1$CallbackState" id="GridEmpList1_CallbackState" defaultValue=" " /></td>
                                  </tr>
                                </tbody></table>
                            </td>
                          </tr> */}
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
    <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px",marginRight: "10px"}} onClick={ () => {this.handletab1();}}>Previous</div>
  </label>
  <label htmlFor="radio3" id="third-tab" className="tab">
    <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} onClick={ () => {this.handletab3();}}>Next</div>
  </label>
    </h3>
  </div>
 )} 
   {this.state.showtab3 && (
    <div id="third-panel" className="panel animated slideInRight">
      <h3 className="slide-title">
      
      <table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse'}}>
  <tbody><tr style={{height: '100%'}}>
      <td style={{color: '#333333', fontSize: '0.8em'}}>
        <span id="Label2" /><table className="table-content" cellPadding="0px" cellSpacing="0px" width="100%">
          <input type="hidden" name="ctl00$MainContent$wzdEmpDetails$ModID" id="ModID" />
          <tbody>
            <tr>
              <td className="sub-head" style={{position:'relative'}}>Module
              <div className='topnext'>
              <label htmlFor="radio2" id="second-tab" className="tab">
                <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px",marginRight: "10px"}} onClick={ () => {this.handletab2();}}>Previous</div>
              </label>
              <label htmlFor="radio4" id="fourth-tab" className="tab">
                <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} onClick={ () => {this.handletab4();}}>Next</div>
              </label>
                      </div>
                      </td>
              <td>
                <span id="LblModule" style={{color: 'Orange'}} />
              </td>
            </tr>
            <tr>
              <td className="heading_bg1">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span id="lblProject" style={{fontSize:"18px"}}>Project Name : {this.state.projectdetailsname}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="table-inner">
                <table>
                  <tbody>
                    <tr>
                      <td className="table-inner">
                        <table>
                          <tbody>
                            {/* <tr>
                              <td>
                                <span id="Label3" style={{fontWeight: 'bold'}}>Project Name:</span>
                              </td>
                              <td>
                              <select name="system_ton" id="system_ton" class="select_new MB10 fleft" value={this.state.ProjectId} style={{marginleft:"10px", width:"98px"}}>
                                <option value="">-</option>
                                  { this.state.ProjectNamelist_data.map((element) => 
                                    <option  value={element.ProjectID}>{element.ProjectName}</option>
                                  )}
                              </select>
                              </td>
                            </tr> */}
                            <tr>
                            <td width="150px">Project Name:</td>
                              <td width="225px">
                                <input name="ProjectName"  defaultValue={this.state.projectdetailsname} type="text" id="ProjectName" style={{width: 200}} readOnly/>
                              </td>
                              <td width="150px">Module name :<span style={{color: 'Red'}}>*</span></td>
                              <td width="225px">
                                <input name="txtModuleName" type="text" id="txtModuleName" style={{width: 200}} />
                                <div id="ProjectNameerror" class="alert_span2" align="center"></div>
                              </td>
                              <td width="150px">Total Hours Estimated&nbsp; :<span style={{color: 'Red'}}>*</span>
                              </td>
                              <td width="225px">
                                <input name="TextBox1" type="number" id="TextBox1" style={{width: 80}} />   
                                <div id="TextBox1error" class="alert_span2" align="center"></div>
                              </td>
                              <td style={{width: "70px"}}>Is Active ?
                              </td>
                              <td width="150px">
                                <span style={{fontWeight: 'normal'}}>
                                  <input id="CheckBox3" type="checkbox" name="ctl00$MainContent$wzdEmpDetails$CheckBox1" />
                                  <label htmlFor="CheckBox13">Yes</label></span>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-inner">
                        <table width="100%" className="table-content" cellPadding={0} cellSpacing={0}>
                          <tbody><tr>
                              <td className="sub-head">Delivery Details
                              </td>
                            </tr>
                            <tr>
                              <td className="table-inner">
                                <table width="100%">
                                  <tbody><tr>
                                      <td width="75px">Start Date :
                                      </td>
                                      <td width="200px">
                                        <input type="hidden" id="txttodate_Raw" name="txtfromdate_Raw" defaultValue={1580169600000} /><table className="dxeButtonEdit" cellSpacing={1} cellPadding={0} id="txtfromdate" border={0} style={{width: 95}}>
                                          <tbody>
                                            <tr>
                                              <td className="datepicker" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}>
                                                <input id="editmodulestartdate" type="date" name="dateRequired" style={{fontFamily: 'Calibri', fontSize: 14}} autoComplete="off" onChange={this.startdate} />
                                              </td>
                                              <div id="editmodulestartdateerror" class="alert_span2" align="center"></div>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td>
                                      </td>
                                      <td width="75px">End Date :
                                      </td>
                                      <td width="200px">
                                        <input type="hidden" id="txttodate_Raw" name="txttodate_Raw" defaultValue={1611878400000} /><table className="dxeButtonEdit" cellSpacing={1} cellPadding={0} id="txttodate" border={0} style={{width: 95}}>
                                          <tbody><tr>
                                              <td className="datepicker" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}>
                                                <input id="editmoduleenddate" type="date" name="dateRequired" style={{fontFamily: 'Calibri', fontSize: 14}} autoComplete="off" onChange={this.enddate} />
                                              </td>
                                              <div id="editmoduleenddaterror" class="alert_span2" align="center"></div>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td width="95px">Delivery Date :
                                      </td>
                                      <td width="200px">
                                        <input type="hidden" id="txtdelivery_Raw" name="txtdelivery_Raw" defaultValue={1612051200000} /><table className="dxeButtonEdit" cellSpacing={1} cellPadding={0} id="txtdelivery" border={0} style={{width: 95}}>
                                          <tbody>
                                            <tr>
                                              <td className="datepicker" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}>
                                                <input id="editmoduleFinaldate" type="date" name="dateRequired" style={{fontFamily: 'Calibri', fontSize: 14}} autoComplete="off" onChange={this.deliverydate} />
                                              </td>
                                              <div id="editmoduleFinaldaterror" class="alert_span2" align="center"></div>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                      <td>
                                        <span id="lblSeq">Sequence No:</span>
                                        <input className='txtSeq' id='txtSeq' type="text" style={{fontFamily: 'Calibri', fontSize: 14, width: 95}} />
                                        <span id="ValSeq" style={{color: 'Red', display: 'none'}}>Must be a Number</span>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                  </tbody>
                  </table>
              </td>
            </tr>
            <tr>
              <td>
                <button type='submit' className='next-btn' onClick={() => { this.UpdateMethod(); }}>Save and continue</button>
              </td>
            </tr>
          </tbody></table>
        <table className="table-content" cellPadding="0px" cellSpacing="0px" width="100%">
          <tbody><tr>
              <td className="heading_bg">Module List
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%">
                  <tbody><tr>
                      <td>
                        <table>
                          <tbody><tr>
                              <td style={{float: "left",padding: "5px"}}>
                                <input type="image" name="ctl00$MainContent$wzdEmpDetails$imgmoduleref" id="imgmoduleref" title="Reload Module List" src={refresh} style={{borderWidth: 0}} />
                              </td>
                            </tr>
                          </tbody></table>
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <ReactTable
                        columns={columns3}
                        data={this.state.ModuleListDatas}
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
  </tbody></table>


  <label htmlFor="radio2" id="second-tab" className="tab">
      <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px",marginRight: "10px"}}  onClick={ () => {this.handletab2();}}>Previous</div>
    </label>
    <label htmlFor="radio4" id="fourth-tab" className="tab">
      <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} onClick={ () => {this.handletab4();}}>Next</div>
    </label>
      </h3>
    </div>
 )} 
 {this.state.showtab4 && (
    <div id="fourth-panel" className="panel animated slideInRight">
      <h3 className="slide-title">
      
<table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse'}}>
  <tbody>
    <tr style={{height: '100%'}}>
      <td style={{color: '#333333', fontSize: '0.8em'}}>
        <table className="table-content" cellPadding="0px" cellSpacing="0px" width="100%">
          <tbody>
            <tr>
              <td className="sub-head" style={{backgroundColor: "#ffdead00",width:'87%' , padding:"7px",position:'relative'}}><span style={{float: "left"}} >Sub Module</span>
                <div className='topnext'>
                <label htmlFor="radio3" id="third-tab" className="tab">
                  <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px",marginRight: "10px"}} onClick={ () => {this.handletab3();}}>Previous</div>
                </label>
                <label htmlFor="radio5" id="five-tab" className="tab" style={{borderBottom:"none"}}>
                  <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} onClick={ () => {this.handletab5();}}>Next</div>
                </label>
                </div>
              </td>
              <button className='edit-btn-submodule'  onClick={ () => {this.handleOpenModal1();}} >
              <img src={New} alt="add new" style={{color: '#06638F', height: '20px', borderWidth: '0px'}} />
              <span>New Submodule</span>
            </button>
            </tr>
            <tr>
            </tr></tbody></table><table className="table-content" cellPadding="0px" cellSpacing="0px" width="100%">
          <tbody>
            <tr>
              <td className="heading_bg1">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span id="lblProject" style={{fontSize:"18px"}}>Project Name : {this.state.projectdetailsname}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="heading_bg" style={{backgroundColor: "rgb(211, 211, 211)"}}>List of Screens / Tasks
              </td>
            </tr>
            {/* <tr>
              <td style={{display: "flex",padding: "10px 5px"}}>
                <div id="btShowModal_CD" className="dxb">
                  <button>Import Task List</button>
                </div>
                <div id="btnTaskAllotImport_CD" className="dxb">
                  <button>Import TaskAllotment List</button>
                </div>
                <div id="btnTaskExport_CD" className="dxb">
                  <button>Export Task List</button>
                </div>
                &nbsp;&nbsp;
                <a id="aTaskTemplate" style={{textDecoration: 'none', borderRadius: "5px", fontSize: 'small',padding: "3px 10px", border: "1px solid #4c4a48" ,color: "#4c4a48"}} href="../Templates/helpdesk-template-format-task.xlsx">Download Task Template</a>&nbsp;&nbsp;
                <a id="aTaskAllotTemplate" style={{textDecoration: 'none', borderRadius: "5px", fontSize: 'small',padding: "3px 10px", border: "1px solid #4c4a48" ,color: "#4c4a48"}} href="../Templates/helpdesk-template-format-taskallotment2.xlsx">Download TaskAllot Template</a>
              </td>
            </tr> */}
            <tr>
              <td>
                <ReactTable
                  columns={columns4}
                  data={this.state.subModulegridListDatas}
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


    <label htmlFor="radio3" id="third-tab" className="tab">
      <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px",marginRight: "10px"}}  onClick={ () => {this.handletab3();}}>Previous</div>
    </label>
    <label htmlFor="radio5" id="five-tab" className="tab" style={{borderBottom:"none"}}>
      <div className="tab-label" style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} onClick={ () => {this.handletab5();}}>Next</div>
    </label>
      </h3>
    </div>
 )} 
   {this.state.showtab5 && (  
    <div id="five-panel" className="panel animated slideInRight">
      <h3 className="slide-title">

<table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse', maxWidth: "1695px"}}>
  <tbody><tr style={{height: '100%'}}>
      <td style={{color: '#333333', fontSize: '0.8em'}}>
        <table className="table-content" cellPadding="0px" cellSpacing="0px" width="100%">
          <tbody><tr>
              <td className="tdspace">
                <div id="ValidationSummary1" className="summaryerrors" style={{color: '#FF9200', display: 'none'}}>
                </div><table width="100%">
                  <tbody>
                    <tr>
                      <td className="sub-head" style={{position:'relative'}}>Task
                        <div className='topnext'>
                        <label htmlFor="radio2" id="second-tab" className="tab" style={{borderRadius: "5px",marginTop: "10px", marginLeft: "10px",height: "30px"}}>
                        <div onClick={ () => {this.handletab4();}} style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "2px 0px",borderRadius: "6px",width:'100%'}} className='prev-btn' type='submit' >Previous</div>
                        </label>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="heading_bg1">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <span id="lblProject" style={{fontSize:"18px"}}>Project Name : {this.state.projectdetailsname}</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-inner">
                        <div id="TS">
                          <table>
                            <tbody className='estimate-task'>
                              <tr>
                                <td style={{width:'100px'}}>Module : <span style={{color: 'Red'}}>*</span>
                                  {/* <select id="ddmodule" name="ctl00$MainContent$wzdEmpDetails$ddmodule" size={1} onfocus="aspxEGotFocus('ddmodule')" onblur="aspxELostFocus('ddmodule')" onchange="aspxETextChanged('ddmodule')" style={{fontFamily: 'Calibri', fontSize: 14, width: 300}} className>
                                    <option>--Select--</option>
                                      
                                  </select> */}




                      <select name="MuduleList" id="MuduleList" class="select_new fleft" value={this.state.SelectedModuleID} onChange={this.ModuleChangeMethod} style={{marginleft:"10px", width:"98px"}}>
                      <option value=''>--Select--</option>
                       { this.state.ModulelistGridData.map((element) => 
                          <option value={element.ModuleID}>{element.ModuleName}</option>
                        )}
                      </select>


                          {/* <Field name="moduleList" id='moduleList' as="select" style={{width: '100%'}} >
                    <option>--Select--</option>
                    { this.state.ModulelistGridData.map((element) => 
                      <option  value={element.ModuleID}>{element.ModuleName}</option>
                    )}
                    </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subissuetype" /> */}
                                </td>
                                <td style={{width:'500px'}}>Task / Screen Name : <span style={{color: 'Red'}}>*</span>
                                  {/* <select id="ddlscreenname" name="ctl00$MainContent$wzdEmpDetails$ddlscreenname" size={1} onfocus="aspxEGotFocus('ddlscreenname')" onblur="aspxELostFocus('ddlscreenname')" onchange="aspxETextChanged('ddlscreenname')" style={{fontFamily: 'Calibri', fontSize: 14, width: 300}} className>
                                    <option>--Select--</option>
                                   
                                  </select> */}
                      <select name="ScreenList" id="ScreenList" class="select_new fleft" value={this.state.ScreenName} onChange={this.ScreenNameChangeMethod} style={{marginleft:"10px", width:"98px"}}>
                      <option value=''>--Select--</option>
                       { this.state.ScreenNameListGridData.map((element) => 
                          <option value={element.TaskName}>{element.TaskName}</option>
                        )}
                      </select>
                                </td>
                              </tr>
                              <tr>
                                <td className='dxb' style={{marginTop:"10px"}}>
                                  <button type="Search" name="ctl00$MainContent$wzdEmpDetails$btnsearch" onClick={this.SearchMethod} defaultValue="Search"  id="btnsearch" >Search</button>
                                </td>
                              </tr>
                            </tbody></table>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
            <tr>
              <td className="heading_bg">
                <table>
                  <tbody><tr>
                      <td className="sub-head">Alloted Task :Screen Name {this.state.ScreenName}
                      </td>
                      <td>
                        <span id="LblSubModule" style={{color: 'Orange'}} />
                      </td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
            <tr>
              <td className="table-inner">
                <table width="100%">
                  <tbody>
                    <tr>
                      {/* <td>
                        <span id="lblProject1" style={{fontWeight: 'bold'}} />Project Name: {this.state.ProjectName}
                        <img src={gotask} alt="Image" />Module Name: {this.state.ModuleName}
                        <span id="LblModule1" style={{fontWeight: 'bold'}} />
                        <span id="lblError" />
                      </td> */}
                      <td align="right">
                        {/* <a id="lnkbnModList" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$MainContent$wzdEmpDetails$lnkbnModList&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))">&lt;--&nbsp;Go to Task List</a> */}
                      </td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%" className="table-content" cellPadding="0px" cellSpacing="0px">
                  <tbody><tr>
                      <td className="sub-head">
                        <span id="lblSubHeader" style={{fontWeight: 'bold'}} />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table width="100%">
                          <tbody><tr>
                              <td style={{width: '70%'}}>
                                <table width="100%">
                                  <tbody><tr>
                                      <td style={{width: '40%'}} valign="top">
                                        {/* <input type="submit" name="ctl00$MainContent$wzdEmpDetails$btnSelect1" defaultValue="Select All" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$MainContent$wzdEmpDetails$btnSelect1&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="btnSelect1" className="save" />
                                        <input type="submit" name="ctl00$MainContent$wzdEmpDetails$btnUnselect1" defaultValue="Unselect" onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$MainContent$wzdEmpDetails$btnUnselect1&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, false))" id="btnUnselect1" className="save" /> */}
                                      </td>
                                      <td align="center" class="dxb">
                                        {/* <a id="btnNew1" href="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$MainContent$wzdEmpDetails$btnNew1&quot;, &quot;&quot;, true, &quot;&quot;, &quot;&quot;, false, true))" style={{color: 'Blue'}}>Add Tasks</a> */}
                                        <button id="btnNew1" onClick={this.AddTasksMethod}>Add Tasks</button>
                                      </td>
                                      <td valign="top" align="right" style={{width: '40%'}} />
                                    </tr>
                                    <tr>
                                      <td style={{width: '40%'}} valign="top">
                                        <div>
                                        </div>
                                      </td>
                                      <td style={{width: '16%'}} valign="top" align="center" />
                                      <td valign="top" align="left" style={{width: '40%'}}>
                                        <div>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                            <tr>
                            <td valign="top" style={{width: '30%'}}>&nbsp;
                            {this.state.TableShow === true || this.state.GridAllotTableData.length !== 0? (
                                 <ReactTable
                                          columns={TaskNameColumns}
                                          data={this.state.TaskNameList}
                                          noDataText={"No Data..."}
                                          defaultPageSize={5}
                                          defaultFilterMethod={this.filterCaseInsensitive}
                                          >
                                  </ReactTable>
                             ) : (
                              ''
                             )}

{/* 
                           {this.state.TableShow === true || this.state.GridAllotTableData.length !== 0 ? (
                                 <ReactTable
                                          columns={TaskNameColumns2}
                                          data={this.state.GridAllotTableData}
                                          noDataText={"No Data..."}
                                          defaultPageSize={5}
                                          defaultFilterMethod={this.filterCaseInsensitive}
                                          >
                                  </ReactTable>
                             ) : (
                              ''
                             )} */}
                             
                              </td>
                            </tr>
                            <tr style={{margin: '10px',display: 'block'}}>

                              <td colSpan={2}>
                                <table>
                                  <tbody><tr>
                                      <td style={{paddingRight: 5}}>
                                        <table cellSpacing={0} cellPadding={0} id="btnPush" border={0} style={{borderCollapse: 'separate', KhtmlUserSelect: 'none'}}>
                                          <tbody><tr>
                                              <td id="btnPush_B" className="dxbButton_Aqua" align="center" style={{fontFamily: 'Calibri', fontSize: 15}}><div style={{borderWidth: 0, width: 0, height: 0, opacity: 0, padding: 0, margin: 0, overflow: 'hidden'}}>
                                                  <input defaultValue onfocus="aspxBGotFocus('btnPush')" type="submit" name="ctl00$MainContent$wzdEmpDetails$btnPush" readOnly="readonly" style={{borderWidth: 0, height: 1, width: 1, padding: 0, opacity: 0, margin: 0, position: 'relative'}} />
                                                </div>
                                                <div id="btnPush_CD" className="dxb">
                                                  <button onClick={this.PushToTasksMethod}>Push To Task Allotment</button>
                                                </div>
                                                </td>
                                            </tr>
                                          </tbody></table>
                                      </td>
                                      <td style={{paddingRight: 5}}>
                                        <table cellSpacing={0} cellPadding={0} id="btnduplicate" border={0} style={{borderCollapse: 'separate', KhtmlUserSelect: 'none'}}>
                                          <tbody><tr>
                                              <td id="btnduplicate_B" className="dxbButton_Aqua" align="center" style={{fontFamily: 'Calibri', fontSize: 15}}><div style={{borderWidth: 0, width: 0, height: 0, opacity: 0, padding: 0, margin: 0, overflow: 'hidden'}}>
                                                  <input defaultValue onfocus="aspxBGotFocus('btnduplicate')" type="submit" name="ctl00$MainContent$wzdEmpDetails$btnduplicate" readOnly="readonly" style={{borderWidth: 0, height: 1, width: 1, padding: 0, opacity: 0, margin: 0, position: 'relative'}} />
                                                </div><div id="btnduplicate_CD" className="dxb">
                                                <button onClick={this.DuplicateMethod}>Duplicate</button>
                                                </div></td>
                                            </tr>
                                          </tbody></table>
                                      </td>
                                      <td style={{paddingLeft: 5}}>
                                      </td>
                                      <td>&nbsp;
                                        <span id="lblMsgdelete" />
                                      </td>
                                    </tr>
                                  </tbody></table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {/* <span id="lbl_info_dept_next">Information To Next Dept. :</span>
                                <input name="ctl00$MainContent$wzdEmpDetails$txt_next_dept" type="text" id="txt_next_dept" className="auto-style1" style={{width: 223}} /> */}
                              </td>
                              <td>&nbsp;</td>
                            </tr>
                            <tr>
                              <td colSpan={2} className='allot-grid'>
                              <ReactTable
                                          columns={GridAllotColumns}
                                          data={this.state.GridAllotTableData}
                                          noDataText={"No Data..."}
                                          defaultPageSize={5}
                                          filterable
                                          defaultFilterMethod={this.filterCaseInsensitive}
                                          >
                                  </ReactTable>
                                {/* <table className="dxgvControl_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot" border={0} style={{fontFamily: 'Calibri', fontSize: 14, width: '100%', borderCollapse: 'separate'}}>
                                  <tbody><tr>
                                      <td><table id="Gridallot_DXMainTable" className="dxgvTable_Office2003Blue" cellSpacing={0} cellPadding={0} onclick="aspxGVTableClick('Gridallot', event);" border={0} style={{fontFamily: 'Calibri', fontSize: 14, width: '100%', borderCollapse: 'collapse', emptyCells: 'show'}}>
                                          <tbody><tr id="Gridallot_DXHeadersRow0">
                                              <td id="Gridallot_col0" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 40, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}>
                                                <input type="checkbox" onclick="Gridallot.SelectAllRowsOnPage(this.checked);" />
                                              </td><td id="Gridallot_col1" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 50, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}> </td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col5" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 70, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Task Date</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col9" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 200, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Task</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col10" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 200, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Sequence</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col11" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 200, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Assigned By</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col12" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 200, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Assigned To</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col13" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 150, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Task Type</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col14" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 50, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Hours</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col15" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 50, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Doc Count</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col16" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 100, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Task Status</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col17" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 250, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Notes</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col18" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>IsBillable</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col19" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Estd.Start Date</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col20" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Estd.End Date</td>
                                                    </tr>
                                                  </tbody></table></td><td id="Gridallot_col22" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('Gridallot', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', width: 60, textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Detail</td>
                                                    </tr>
                                                  </tbody></table></td>
                                            </tr><tr className="dxgvFilterRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                              <td className="dxgvCommandColumn_Office2003Blue dxgv" align="center">&nbsp;</td><td className="dxgvCommandColumn_Office2003Blue dxgv" align="center">&nbsp;</td><td className="dxgv"><input type="hidden" id="Gridallot_DXFREditorcol5_Raw" name="Gridallot_DXFREditorcol5_Raw" defaultValue="N" /><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="Gridallot_DXFREditorcol5" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" onmousedown="return aspxDDMC_MD('Gridallot_DXFREditorcol5', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol5" onkeyup="aspxEKeyUp('Gridallot_DXFREditorcol5', event)" id="Gridallot_DXFREditorcol5_I" onchange="aspxETextChanged('Gridallot_DXFREditorcol5')" onblur="aspxELostFocus('Gridallot_DXFREditorcol5')" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol5')" type="text" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol5', event)" style={{height: 15}} autoComplete="off" /></td><td id="Gridallot_DXFREditorcol5_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol5', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="Gridallot_DXFREditorcol5_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol5_DDDWS" name="Gridallot_DXFREditorcol5_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="Gridallot_DXFREditorcol5_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Gridallot_DXFREditorcol5_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol5_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="Gridallot_DXFREditorcol5_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="Gridallot_DXFREditorcol5_DDD_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol5_DDD_CSD-1">
                                                                    <table border={0} style={{display: 'none'}}>
                                                                      <tbody><tr>
                                                                          <td id="Gridallot_DXFREditorcol5_DDD_C_EC_D" className="dxeCalendarDay_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_DS" className="dxeCalendarSelected_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_DA" className="dxeCalendarOtherMonth_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_DW" className="dxeCalendarWeekend_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_DO" className="dxeCalendarOutOfRange_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_DT" className="dxeCalendarToday_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_DD" className="dxeDisabled_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_FNM" className="dxeCalendarFastNavMonth_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_FNMS" className="dxeCalendarFastNavMonthSelected_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_FNY" className="dxeCalendarFastNavYear_Office2003Blue" /><td id="Gridallot_DXFREditorcol5_DDD_C_EC_FNYS" className="dxeCalendarFastNavYearSelected_Office2003Blue" />
                                                                        </tr>
                                                                      </tbody></table><table className="dxeCalendar_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol5_DDD_C" border={0} style={{borderCollapse: 'collapse'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td className="dxeCalendarHeader_Office2003Blue" style={{borderTop: 0}}><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="Gridallot_DXFREditorcol5_DDD_C_PYC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol5_DDD_C', -12);"><img id="Gridallot_DXFREditorcol5_DDD_C_PYCImg" className="dxEditors_edtCalendarPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<<" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="Gridallot_DXFREditorcol5_DDD_C_PMC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol5_DDD_C', -1);"><img id="Gridallot_DXFREditorcol5_DDD_C_PMCImg" className="dxEditors_edtCalendarPrevMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td id="Gridallot_DXFREditorcol5_DDD_C_TC" className="dxe" style={{width: '100%', cursor: 'default'}}><span id="Gridallot_DXFREditorcol5_DDD_C_T" onclick="aspxCalTitleClick('Gridallot_DXFREditorcol5_DDD_C', 0, 0)" style={{cursor: 'pointer'}}>September 2023</span></td><td id="Gridallot_DXFREditorcol5_DDD_C_NMC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol5_DDD_C', 1);"><img id="Gridallot_DXFREditorcol5_DDD_C_NMCImg" className="dxEditors_edtCalendarNextMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="Gridallot_DXFREditorcol5_DDD_C_NYC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol5_DDD_C', 12);"><img id="Gridallot_DXFREditorcol5_DDD_C_NYCImg" className="dxEditors_edtCalendarNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">>" /></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr><tr>
                                                                                  <td id="Gridallot_DXFREditorcol5_DDD_C_mc" className="dxMonthGridWithWeekNumbers" style={{KhtmlUserSelect: 'none'}}><table id="Gridallot_DXFREditorcol5_DDD_C_mt" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                      <tbody><tr align="center">
                                                                                          <td id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_0" /><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_1">Sun</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_2">Mon</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_3">Tue</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_4">Wed</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_5">Thu</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_6">Fri</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_7">Sat</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_8">35</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>31</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_9">36</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>8</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>9</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_10">37</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>10</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarToday_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>11</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>12</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>13</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>14</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>15</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>16</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_11">38</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>17</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>18</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>19</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>20</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>21</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>22</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>23</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_12">39</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>24</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>25</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>26</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_AUX_0_0_13">40</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr><tr>
                                                                          <td className="dxeCalendarFooter_Office2003Blue"><table cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="Gridallot_DXFREditorcol5_DDD_C_BT" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalTodayClick('Gridallot_DXFREditorcol5_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Today</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td><td><div style={{width: 12, fontSize: 0}}>
                                                                                    </div></td><td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="Gridallot_DXFREditorcol5_DDD_C_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalClearClick('Gridallot_DXFREditorcol5_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Clear</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr>
                                                                      </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol5_DDD_C_FNPWS" name="Gridallot_DXFREditorcol5_DDD_C_FNPWS" defaultValue="0:0:-1:-10000:-10000:0:0px:-10000:1" /><div id="Gridallot_DXFREditorcol5_DDD_C_FNP_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                      <table id="Gridallot_DXFREditorcol5_DDD_C_FNP_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                        <tbody><tr>
                                                                            <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol5_DDD_C_FNP',-1,false)" style={{width: 0, cursor: 'default'}}><table id="Gridallot_DXFREditorcol5_DDD_C_FNP_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 0, borderCollapse: 'separate'}}>
                                                                                <tbody><tr>
                                                                                    <td id="Gridallot_DXFREditorcol5_DDD_C_FNP_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol5_DDD_C_FNP_CSD-1">
                                                                                        <div className="dxeCalendarFastNav_Office2003Blue">
                                                                                          <div className="dxeCalendarFastNavMonthArea_Office2003Blue">
                                                                                            <table id="Gridallot_DXFREditorcol5_DDD_C_FNP_m" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M0">Jan</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M1">Feb</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M2">Mar</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M3">Apr</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M4">May</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M5">Jun</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M6">Jul</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M7">Aug</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M8">Sep</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M9">Oct</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M10">Nov</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_M11">Dec</td>
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div><div className="dxeCalendarFastNavYearArea_Office2003Blue">
                                                                                            <table id="Gridallot_DXFREditorcol5_DDD_C_FNP_y" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate', marginTop: 8}}>
                                                                                              <tbody><tr>
                                                                                                  <td onclick="aspxCalFNYShuffle('Gridallot_DXFREditorcol5_DDD_C', -10)" rowSpan={2} style={{paddingRight: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y0" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y1" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y2" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y3" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y4" /><td onclick="aspxCalFNYShuffle('Gridallot_DXFREditorcol5_DDD_C', 10)" rowSpan={2} style={{paddingLeft: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y5" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y6" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y7" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y8" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol5_DDD_C_FNP_Y9" />
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div>
                                                                                        </div><div className="dxeCalendarFastNavFooter_Office2003Blue" style={{textAlign: 'center'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody><tr>
                                                                                                <td id="Gridallot_DXFREditorcol5_DDD_C_FNP_BO" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('Gridallot_DXFREditorcol5_DDD_C', 'ok')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>OK</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td><td><div style={{width: 11}}>
                                                                                                  </div></td><td id="Gridallot_DXFREditorcol5_DDD_C_FNP_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('Gridallot_DXFREditorcol5_DDD_C', 'cancel')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>Cancel</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td>
                                                                                              </tr>
                                                                                            </tbody></table>
                                                                                        </div>
                                                                                      </div></td>
                                                                                  </tr>
                                                                                </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                                          </tr><tr>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                                              </div></td>
                                                                          </tr>
                                                                        </tbody></table>
                                                                    </div><input id="Gridallot_DXFREditorcol5_DDD_C_STATE" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol5$DDD$C" type="hidden" defaultValue="09/11/2023" />
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div></td><td className="dxgv"><table className="dxeTextBoxSys dxeTextBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol9" border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol9" onkeyup="aspxEKeyUp('Gridallot_DXFREditorcol9', event)" id="Gridallot_DXFREditorcol9_I" onchange="aspxEValueChanged('Gridallot_DXFREditorcol9')" onblur="aspxELostFocus('Gridallot_DXFREditorcol9')" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol9')" type="text" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol9', event)" style={{height: 15}} /></td>
                                                    </tr>
                                                  </tbody></table></td><td className="dxgv"><table className="dxeTextBoxSys dxeTextBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol10" border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol10" onkeyup="aspxEKeyUp('Gridallot_DXFREditorcol10', event)" id="Gridallot_DXFREditorcol10_I" onchange="aspxEValueChanged('Gridallot_DXFREditorcol10')" onblur="aspxELostFocus('Gridallot_DXFREditorcol10')" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol10')" type="text" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol10', event)" style={{height: 15}} /></td>
                                                    </tr>
                                                  </tbody></table></td><td className="dxgv" style={{textAlign: 'Left'}}><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="Gridallot_DXFREditorcol11" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td style={{display: 'none'}}><input id="Gridallot_DXFREditorcol11_VI" name="Gridallot_DXFREditorcol11_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol11', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" id="Gridallot_DXFREditorcol11_I" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol11" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol11')" onblur="aspxELostFocus('Gridallot_DXFREditorcol11')" onchange="aspxETextChanged('Gridallot_DXFREditorcol11')" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol11', event)" type="text" style={{height: 15}} autoComplete="off" /></td><td id="Gridallot_DXFREditorcol11_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol11', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="Gridallot_DXFREditorcol11_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol11_DDDWS" name="Gridallot_DXFREditorcol11_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="Gridallot_DXFREditorcol11_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Gridallot_DXFREditorcol11_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol11_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="Gridallot_DXFREditorcol11_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="Gridallot_DXFREditorcol11_DDD_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol11_DDD_CSD-1">
                                                                    <input type="hidden" id="Gridallot_DXFREditorcol11_DDD_LDeletedItems" name="Gridallot_DXFREditorcol11_DDD_LDeletedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol11_DDD_LInsertedItems" name="Gridallot_DXFREditorcol11_DDD_LInsertedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol11_DDD_LCustomCallback" name="Gridallot_DXFREditorcol11_DDD_LCustomCallback" defaultValue /><table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol11_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><div id="Gridallot_DXFREditorcol11_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                              <input id="Gridallot_DXFREditorcol11_DDD_L_VI" type="hidden" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol11$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                <tbody><tr id="Gridallot_DXFREditorcol11_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td id="Gridallot_DXFREditorcol11_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">&nbsp;</td>
                                                                                  </tr>
                                                                                </tbody></table><table id="Gridallot_DXFREditorcol11_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                <tbody><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI0T0">Chandler Dev</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI1T0">DESSS Admin</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI2T0">Mohan &nbsp;Kumar T N</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI3T0">Nithish Kumar K</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI4T0">Prashanth V</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI5T0">Pravinkanth P</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI6T0">Prem &nbsp;Kumar E</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI7T0">Rabiyulfahim H</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI8T0">Sangeetha priya S</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI9T0">Sathya Dev</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI10T0">Sheshu Chandrasekar</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI11T0">Shilpaa Chandrasekar</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol11_DDD_L_LBI12T0">Testing Manager</td>
                                                                                  </tr>
                                                                                </tbody></table>
                                                                            </div></td>
                                                                        </tr>
                                                                      </tbody></table>
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div><table id="Gridallot_DXFREditorcol11_LP" className="dxeLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                                  <tbody><tr>
                                                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=2_24-y60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="Gridallot_DXFREditorcol11_TL">Loading…</span></td>
                                                    </tr>
                                                  </tbody></table><div id="Gridallot_DXFREditorcol11_LD" className="dxeLoadingDiv_Office2003Blue" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                                                </div></td><td className="dxgv" style={{textAlign: 'Left'}}><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="Gridallot_DXFREditorcol12" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td style={{display: 'none'}}><input id="Gridallot_DXFREditorcol12_VI" name="Gridallot_DXFREditorcol12_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol12', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" id="Gridallot_DXFREditorcol12_I" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol12" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol12')" onblur="aspxELostFocus('Gridallot_DXFREditorcol12')" onchange="aspxETextChanged('Gridallot_DXFREditorcol12')" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol12', event)" type="text" style={{height: 15}} autoComplete="off" /></td><td id="Gridallot_DXFREditorcol12_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol12', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="Gridallot_DXFREditorcol12_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol12_DDDWS" name="Gridallot_DXFREditorcol12_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="Gridallot_DXFREditorcol12_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Gridallot_DXFREditorcol12_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol12_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="Gridallot_DXFREditorcol12_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="Gridallot_DXFREditorcol12_DDD_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol12_DDD_CSD-1">
                                                                    <input type="hidden" id="Gridallot_DXFREditorcol12_DDD_LDeletedItems" name="Gridallot_DXFREditorcol12_DDD_LDeletedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol12_DDD_LInsertedItems" name="Gridallot_DXFREditorcol12_DDD_LInsertedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol12_DDD_LCustomCallback" name="Gridallot_DXFREditorcol12_DDD_LCustomCallback" defaultValue /><table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol12_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><div id="Gridallot_DXFREditorcol12_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                              <input id="Gridallot_DXFREditorcol12_DDD_L_VI" type="hidden" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol12$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                <tbody><tr id="Gridallot_DXFREditorcol12_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td id="Gridallot_DXFREditorcol12_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">&nbsp;</td>
                                                                                  </tr>
                                                                                </tbody></table><table id="Gridallot_DXFREditorcol12_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                <tbody><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol12_DDD_L_LBI0T0">Anand &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Raj.B</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol12_DDD_L_LBI1T0">Nithish Kumar K</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol12_DDD_L_LBI2T0">Rabiyulfahim H</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol12_DDD_L_LBI3T0">Sheshu Chandrasekar</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol12_DDD_L_LBI4T0">Shilpaa Chandrasekar</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol12_DDD_L_LBI5T0">Testing Manager</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol12_DDD_L_LBI6T0">Testing User</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol12_DDD_L_LBI7T0">Yuvaraj P</td>
                                                                                  </tr>
                                                                                </tbody></table>
                                                                            </div></td>
                                                                        </tr>
                                                                      </tbody></table>
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div><table id="Gridallot_DXFREditorcol12_LP" className="dxeLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                                  <tbody><tr>
                                                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=2_24-y60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="Gridallot_DXFREditorcol12_TL">Loading…</span></td>
                                                    </tr>
                                                  </tbody></table><div id="Gridallot_DXFREditorcol12_LD" className="dxeLoadingDiv_Office2003Blue" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                                                </div></td><td className="dxgv" style={{textAlign: 'Left'}}><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="Gridallot_DXFREditorcol13" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td style={{display: 'none'}}><input id="Gridallot_DXFREditorcol13_VI" name="Gridallot_DXFREditorcol13_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol13', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" id="Gridallot_DXFREditorcol13_I" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol13" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol13')" onblur="aspxELostFocus('Gridallot_DXFREditorcol13')" onchange="aspxETextChanged('Gridallot_DXFREditorcol13')" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol13', event)" type="text" style={{height: 15}} autoComplete="off" /></td><td id="Gridallot_DXFREditorcol13_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol13', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="Gridallot_DXFREditorcol13_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol13_DDDWS" name="Gridallot_DXFREditorcol13_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="Gridallot_DXFREditorcol13_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Gridallot_DXFREditorcol13_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol13_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="Gridallot_DXFREditorcol13_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="Gridallot_DXFREditorcol13_DDD_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol13_DDD_CSD-1">
                                                                    <input type="hidden" id="Gridallot_DXFREditorcol13_DDD_LDeletedItems" name="Gridallot_DXFREditorcol13_DDD_LDeletedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol13_DDD_LInsertedItems" name="Gridallot_DXFREditorcol13_DDD_LInsertedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol13_DDD_LCustomCallback" name="Gridallot_DXFREditorcol13_DDD_LCustomCallback" defaultValue /><table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol13_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><div id="Gridallot_DXFREditorcol13_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                              <input id="Gridallot_DXFREditorcol13_DDD_L_VI" type="hidden" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol13$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                <tbody><tr id="Gridallot_DXFREditorcol13_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td id="Gridallot_DXFREditorcol13_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">&nbsp;</td>
                                                                                  </tr>
                                                                                </tbody></table><table id="Gridallot_DXFREditorcol13_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                <tbody><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI0T0">Bug</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI1T0">Content Writing</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI2T0">DevExpress Migration</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI3T0">Enchancement</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI4T0">Knowledge Transfer</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI5T0">Maintenance Server &nbsp;ubuntu AWS</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI6T0">Python</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI7T0">SEO</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI8T0">Team Meeting</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI9T0">Testing</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI10T0">Training</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol13_DDD_L_LBI11T0">Website changes</td>
                                                                                  </tr>
                                                                                </tbody></table>
                                                                            </div></td>
                                                                        </tr>
                                                                      </tbody></table>
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div><table id="Gridallot_DXFREditorcol13_LP" className="dxeLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                                  <tbody><tr>
                                                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=2_24-y60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="Gridallot_DXFREditorcol13_TL">Loading…</span></td>
                                                    </tr>
                                                  </tbody></table><div id="Gridallot_DXFREditorcol13_LD" className="dxeLoadingDiv_Office2003Blue" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                                                </div></td><td className="dxgv"><table className="dxeTextBoxSys dxeTextBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol14" border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol14" onkeyup="aspxEKeyUp('Gridallot_DXFREditorcol14', event)" id="Gridallot_DXFREditorcol14_I" onchange="aspxEValueChanged('Gridallot_DXFREditorcol14')" onblur="aspxELostFocus('Gridallot_DXFREditorcol14')" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol14')" type="text" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol14', event)" style={{height: 15}} /></td>
                                                    </tr>
                                                  </tbody></table></td><td className="dxgv"><table className="dxeTextBoxSys dxeTextBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol15" border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol15" onkeyup="aspxEKeyUp('Gridallot_DXFREditorcol15', event)" id="Gridallot_DXFREditorcol15_I" onchange="aspxEValueChanged('Gridallot_DXFREditorcol15')" onblur="aspxELostFocus('Gridallot_DXFREditorcol15')" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol15')" type="text" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol15', event)" style={{height: 15}} /></td>
                                                    </tr>
                                                  </tbody></table></td><td className="dxgv" style={{textAlign: 'Left'}}><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="Gridallot_DXFREditorcol16" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td style={{display: 'none'}}><input id="Gridallot_DXFREditorcol16_VI" name="Gridallot_DXFREditorcol16_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol16', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" id="Gridallot_DXFREditorcol16_I" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol16" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol16')" onblur="aspxELostFocus('Gridallot_DXFREditorcol16')" onchange="aspxETextChanged('Gridallot_DXFREditorcol16')" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol16', event)" type="text" style={{height: 15}} autoComplete="off" /></td><td id="Gridallot_DXFREditorcol16_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol16', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="Gridallot_DXFREditorcol16_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol16_DDDWS" name="Gridallot_DXFREditorcol16_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="Gridallot_DXFREditorcol16_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Gridallot_DXFREditorcol16_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol16_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="Gridallot_DXFREditorcol16_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="Gridallot_DXFREditorcol16_DDD_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol16_DDD_CSD-1">
                                                                    <input type="hidden" id="Gridallot_DXFREditorcol16_DDD_LDeletedItems" name="Gridallot_DXFREditorcol16_DDD_LDeletedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol16_DDD_LInsertedItems" name="Gridallot_DXFREditorcol16_DDD_LInsertedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol16_DDD_LCustomCallback" name="Gridallot_DXFREditorcol16_DDD_LCustomCallback" defaultValue /><table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol16_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><div id="Gridallot_DXFREditorcol16_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                              <input id="Gridallot_DXFREditorcol16_DDD_L_VI" type="hidden" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol16$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                <tbody><tr id="Gridallot_DXFREditorcol16_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td id="Gridallot_DXFREditorcol16_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">&nbsp;</td>
                                                                                  </tr>
                                                                                </tbody></table><table id="Gridallot_DXFREditorcol16_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                <tbody><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI0T0">New &nbsp;UnAssigned</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI1T0">Email Clicked and saved</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI2T0">Email Acknowledged and Read</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI3T0">Being Analyzed</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI4T0">Clarifications to be Discussed</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI5T0">Task Estimated</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI6T0">Task Allotted &nbsp;Assigned</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI7T0">Progress</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI8T0">Completed</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI9T0">ReOpen</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI10T0">Reopen Completed</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI11T0">Closed</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI12T0">Closed &nbsp;and To be Invoiced</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI13T0">Payment Pending</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI14T0">Payment Received</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol16_DDD_L_LBI15T0">invoice Completed</td>
                                                                                  </tr>
                                                                                </tbody></table>
                                                                            </div></td>
                                                                        </tr>
                                                                      </tbody></table>
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div><table id="Gridallot_DXFREditorcol16_LP" className="dxeLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                                  <tbody><tr>
                                                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=2_24-y60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="Gridallot_DXFREditorcol16_TL">Loading…</span></td>
                                                    </tr>
                                                  </tbody></table><div id="Gridallot_DXFREditorcol16_LD" className="dxeLoadingDiv_Office2003Blue" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                                                </div></td><td className="dxgv"><table className="dxeTextBoxSys dxeTextBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol17" border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol17" onkeyup="aspxEKeyUp('Gridallot_DXFREditorcol17', event)" id="Gridallot_DXFREditorcol17_I" onchange="aspxEValueChanged('Gridallot_DXFREditorcol17')" onblur="aspxELostFocus('Gridallot_DXFREditorcol17')" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol17')" type="text" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol17', event)" style={{height: 15}} /></td>
                                                    </tr>
                                                  </tbody></table></td><td className="dxgv" style={{textAlign: 'Center'}}><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="Gridallot_DXFREditorcol18" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td style={{display: 'none'}}><input id="Gridallot_DXFREditorcol18_VI" name="Gridallot_DXFREditorcol18_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol18', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol18" id="Gridallot_DXFREditorcol18_I" onchange="aspxETextChanged('Gridallot_DXFREditorcol18')" onblur="aspxELostFocus('Gridallot_DXFREditorcol18')" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol18')" type="text" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol18', event)" readOnly="readonly" style={{height: 15, cursor: 'default'}} autoComplete="off" /></td><td id="Gridallot_DXFREditorcol18_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol18', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="Gridallot_DXFREditorcol18_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol18_DDDWS" name="Gridallot_DXFREditorcol18_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="Gridallot_DXFREditorcol18_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Gridallot_DXFREditorcol18_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol18_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="Gridallot_DXFREditorcol18_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="Gridallot_DXFREditorcol18_DDD_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol18_DDD_CSD-1">
                                                                    <input type="hidden" id="Gridallot_DXFREditorcol18_DDD_LDeletedItems" name="Gridallot_DXFREditorcol18_DDD_LDeletedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol18_DDD_LInsertedItems" name="Gridallot_DXFREditorcol18_DDD_LInsertedItems" defaultValue /><input type="hidden" id="Gridallot_DXFREditorcol18_DDD_LCustomCallback" name="Gridallot_DXFREditorcol18_DDD_LCustomCallback" defaultValue /><table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol18_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><div id="Gridallot_DXFREditorcol18_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                              <input id="Gridallot_DXFREditorcol18_DDD_L_VI" type="hidden" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol18$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                <tbody><tr id="Gridallot_DXFREditorcol18_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td id="Gridallot_DXFREditorcol18_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">&nbsp;</td>
                                                                                  </tr>
                                                                                </tbody></table><table id="Gridallot_DXFREditorcol18_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                <tbody><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue dxeListBoxItemSelected_Office2003Blue" id="Gridallot_DXFREditorcol18_DDD_L_LBI0T0" dxtext>&nbsp;</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol18_DDD_L_LBI1T0">Checked</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="Gridallot_DXFREditorcol18_DDD_L_LBI2T0">Unchecked</td>
                                                                                  </tr>
                                                                                </tbody></table>
                                                                            </div></td>
                                                                        </tr>
                                                                      </tbody></table>
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div><table id="Gridallot_DXFREditorcol18_LP" className="dxeLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                                  <tbody><tr>
                                                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=2_24-y60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="Gridallot_DXFREditorcol18_TL">Loading…</span></td>
                                                    </tr>
                                                  </tbody></table><div id="Gridallot_DXFREditorcol18_LD" className="dxeLoadingDiv_Office2003Blue" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                                                </div></td><td className="dxgv"><input type="hidden" id="Gridallot_DXFREditorcol19_Raw" name="Gridallot_DXFREditorcol19_Raw" defaultValue="N" /><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="Gridallot_DXFREditorcol19" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" onmousedown="return aspxDDMC_MD('Gridallot_DXFREditorcol19', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol19" onkeyup="aspxEKeyUp('Gridallot_DXFREditorcol19', event)" id="Gridallot_DXFREditorcol19_I" onchange="aspxETextChanged('Gridallot_DXFREditorcol19')" onblur="aspxELostFocus('Gridallot_DXFREditorcol19')" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol19')" type="text" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol19', event)" style={{height: 15}} autoComplete="off" /></td><td id="Gridallot_DXFREditorcol19_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol19', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="Gridallot_DXFREditorcol19_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol19_DDDWS" name="Gridallot_DXFREditorcol19_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="Gridallot_DXFREditorcol19_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Gridallot_DXFREditorcol19_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol19_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="Gridallot_DXFREditorcol19_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="Gridallot_DXFREditorcol19_DDD_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol19_DDD_CSD-1">
                                                                    <table border={0} style={{display: 'none'}}>
                                                                      <tbody><tr>
                                                                          <td id="Gridallot_DXFREditorcol19_DDD_C_EC_D" className="dxeCalendarDay_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_DS" className="dxeCalendarSelected_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_DA" className="dxeCalendarOtherMonth_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_DW" className="dxeCalendarWeekend_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_DO" className="dxeCalendarOutOfRange_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_DT" className="dxeCalendarToday_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_DD" className="dxeDisabled_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_FNM" className="dxeCalendarFastNavMonth_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_FNMS" className="dxeCalendarFastNavMonthSelected_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_FNY" className="dxeCalendarFastNavYear_Office2003Blue" /><td id="Gridallot_DXFREditorcol19_DDD_C_EC_FNYS" className="dxeCalendarFastNavYearSelected_Office2003Blue" />
                                                                        </tr>
                                                                      </tbody></table><table className="dxeCalendar_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol19_DDD_C" border={0} style={{borderCollapse: 'collapse'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td className="dxeCalendarHeader_Office2003Blue" style={{borderTop: 0}}><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="Gridallot_DXFREditorcol19_DDD_C_PYC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol19_DDD_C', -12);"><img id="Gridallot_DXFREditorcol19_DDD_C_PYCImg" className="dxEditors_edtCalendarPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<<" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="Gridallot_DXFREditorcol19_DDD_C_PMC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol19_DDD_C', -1);"><img id="Gridallot_DXFREditorcol19_DDD_C_PMCImg" className="dxEditors_edtCalendarPrevMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td id="Gridallot_DXFREditorcol19_DDD_C_TC" className="dxe" style={{width: '100%', cursor: 'default'}}><span id="Gridallot_DXFREditorcol19_DDD_C_T" onclick="aspxCalTitleClick('Gridallot_DXFREditorcol19_DDD_C', 0, 0)" style={{cursor: 'pointer'}}>September 2023</span></td><td id="Gridallot_DXFREditorcol19_DDD_C_NMC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol19_DDD_C', 1);"><img id="Gridallot_DXFREditorcol19_DDD_C_NMCImg" className="dxEditors_edtCalendarNextMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="Gridallot_DXFREditorcol19_DDD_C_NYC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol19_DDD_C', 12);"><img id="Gridallot_DXFREditorcol19_DDD_C_NYCImg" className="dxEditors_edtCalendarNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">>" /></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr><tr>
                                                                                  <td id="Gridallot_DXFREditorcol19_DDD_C_mc" className="dxMonthGridWithWeekNumbers" style={{KhtmlUserSelect: 'none'}}><table id="Gridallot_DXFREditorcol19_DDD_C_mt" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                      <tbody><tr align="center">
                                                                                          <td id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_0" /><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_1">Sun</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_2">Mon</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_3">Tue</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_4">Wed</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_5">Thu</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_6">Fri</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_7">Sat</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_8">35</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>31</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_9">36</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>8</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>9</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_10">37</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>10</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarToday_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>11</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>12</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>13</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>14</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>15</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>16</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_11">38</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>17</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>18</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>19</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>20</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>21</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>22</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>23</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_12">39</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>24</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>25</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>26</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_AUX_0_0_13">40</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr><tr>
                                                                          <td className="dxeCalendarFooter_Office2003Blue"><table cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="Gridallot_DXFREditorcol19_DDD_C_BT" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalTodayClick('Gridallot_DXFREditorcol19_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Today</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td><td><div style={{width: 12, fontSize: 0}}>
                                                                                    </div></td><td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="Gridallot_DXFREditorcol19_DDD_C_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalClearClick('Gridallot_DXFREditorcol19_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Clear</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr>
                                                                      </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol19_DDD_C_FNPWS" name="Gridallot_DXFREditorcol19_DDD_C_FNPWS" defaultValue="0:0:-1:-10000:-10000:0:0px:-10000:1" /><div id="Gridallot_DXFREditorcol19_DDD_C_FNP_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                      <table id="Gridallot_DXFREditorcol19_DDD_C_FNP_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                        <tbody><tr>
                                                                            <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol19_DDD_C_FNP',-1,false)" style={{width: 0, cursor: 'default'}}><table id="Gridallot_DXFREditorcol19_DDD_C_FNP_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 0, borderCollapse: 'separate'}}>
                                                                                <tbody><tr>
                                                                                    <td id="Gridallot_DXFREditorcol19_DDD_C_FNP_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol19_DDD_C_FNP_CSD-1">
                                                                                        <div className="dxeCalendarFastNav_Office2003Blue">
                                                                                          <div className="dxeCalendarFastNavMonthArea_Office2003Blue">
                                                                                            <table id="Gridallot_DXFREditorcol19_DDD_C_FNP_m" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M0">Jan</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M1">Feb</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M2">Mar</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M3">Apr</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M4">May</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M5">Jun</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M6">Jul</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M7">Aug</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M8">Sep</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M9">Oct</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M10">Nov</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_M11">Dec</td>
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div><div className="dxeCalendarFastNavYearArea_Office2003Blue">
                                                                                            <table id="Gridallot_DXFREditorcol19_DDD_C_FNP_y" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate', marginTop: 8}}>
                                                                                              <tbody><tr>
                                                                                                  <td onclick="aspxCalFNYShuffle('Gridallot_DXFREditorcol19_DDD_C', -10)" rowSpan={2} style={{paddingRight: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y0" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y1" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y2" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y3" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y4" /><td onclick="aspxCalFNYShuffle('Gridallot_DXFREditorcol19_DDD_C', 10)" rowSpan={2} style={{paddingLeft: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y5" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y6" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y7" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y8" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol19_DDD_C_FNP_Y9" />
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div>
                                                                                        </div><div className="dxeCalendarFastNavFooter_Office2003Blue" style={{textAlign: 'center'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody><tr>
                                                                                                <td id="Gridallot_DXFREditorcol19_DDD_C_FNP_BO" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('Gridallot_DXFREditorcol19_DDD_C', 'ok')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>OK</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td><td><div style={{width: 11}}>
                                                                                                  </div></td><td id="Gridallot_DXFREditorcol19_DDD_C_FNP_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('Gridallot_DXFREditorcol19_DDD_C', 'cancel')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>Cancel</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td>
                                                                                              </tr>
                                                                                            </tbody></table>
                                                                                        </div>
                                                                                      </div></td>
                                                                                  </tr>
                                                                                </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                                          </tr><tr>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                                              </div></td>
                                                                          </tr>
                                                                        </tbody></table>
                                                                    </div><input id="Gridallot_DXFREditorcol19_DDD_C_STATE" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol19$DDD$C" type="hidden" defaultValue="09/11/2023" />
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div></td><td className="dxgv"><input type="hidden" id="Gridallot_DXFREditorcol20_Raw" name="Gridallot_DXFREditorcol20_Raw" defaultValue="N" /><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="Gridallot_DXFREditorcol20" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" onmousedown="return aspxDDMC_MD('Gridallot_DXFREditorcol20', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol20" onkeyup="aspxEKeyUp('Gridallot_DXFREditorcol20', event)" id="Gridallot_DXFREditorcol20_I" onchange="aspxETextChanged('Gridallot_DXFREditorcol20')" onblur="aspxELostFocus('Gridallot_DXFREditorcol20')" onfocus="aspxEGotFocus('Gridallot_DXFREditorcol20')" type="text" onkeydown="aspxEKeyDown('Gridallot_DXFREditorcol20', event)" style={{height: 15}} autoComplete="off" /></td><td id="Gridallot_DXFREditorcol20_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('Gridallot_DXFREditorcol20', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="Gridallot_DXFREditorcol20_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol20_DDDWS" name="Gridallot_DXFREditorcol20_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="Gridallot_DXFREditorcol20_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="Gridallot_DXFREditorcol20_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol20_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="Gridallot_DXFREditorcol20_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="Gridallot_DXFREditorcol20_DDD_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol20_DDD_CSD-1">
                                                                    <table border={0} style={{display: 'none'}}>
                                                                      <tbody><tr>
                                                                          <td id="Gridallot_DXFREditorcol20_DDD_C_EC_D" className="dxeCalendarDay_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_DS" className="dxeCalendarSelected_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_DA" className="dxeCalendarOtherMonth_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_DW" className="dxeCalendarWeekend_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_DO" className="dxeCalendarOutOfRange_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_DT" className="dxeCalendarToday_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_DD" className="dxeDisabled_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_FNM" className="dxeCalendarFastNavMonth_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_FNMS" className="dxeCalendarFastNavMonthSelected_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_FNY" className="dxeCalendarFastNavYear_Office2003Blue" /><td id="Gridallot_DXFREditorcol20_DDD_C_EC_FNYS" className="dxeCalendarFastNavYearSelected_Office2003Blue" />
                                                                        </tr>
                                                                      </tbody></table><table className="dxeCalendar_Office2003Blue" cellSpacing={0} cellPadding={0} id="Gridallot_DXFREditorcol20_DDD_C" border={0} style={{borderCollapse: 'collapse'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td className="dxeCalendarHeader_Office2003Blue" style={{borderTop: 0}}><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="Gridallot_DXFREditorcol20_DDD_C_PYC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol20_DDD_C', -12);"><img id="Gridallot_DXFREditorcol20_DDD_C_PYCImg" className="dxEditors_edtCalendarPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<<" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="Gridallot_DXFREditorcol20_DDD_C_PMC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol20_DDD_C', -1);"><img id="Gridallot_DXFREditorcol20_DDD_C_PMCImg" className="dxEditors_edtCalendarPrevMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td id="Gridallot_DXFREditorcol20_DDD_C_TC" className="dxe" style={{width: '100%', cursor: 'default'}}><span id="Gridallot_DXFREditorcol20_DDD_C_T" onclick="aspxCalTitleClick('Gridallot_DXFREditorcol20_DDD_C', 0, 0)" style={{cursor: 'pointer'}}>September 2023</span></td><td id="Gridallot_DXFREditorcol20_DDD_C_NMC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol20_DDD_C', 1);"><img id="Gridallot_DXFREditorcol20_DDD_C_NMCImg" className="dxEditors_edtCalendarNextMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="Gridallot_DXFREditorcol20_DDD_C_NYC" className="dxe" onclick="aspxCalShiftMonth('Gridallot_DXFREditorcol20_DDD_C', 12);"><img id="Gridallot_DXFREditorcol20_DDD_C_NYCImg" className="dxEditors_edtCalendarNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">>" /></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr><tr>
                                                                                  <td id="Gridallot_DXFREditorcol20_DDD_C_mc" className="dxMonthGridWithWeekNumbers" style={{KhtmlUserSelect: 'none'}}><table id="Gridallot_DXFREditorcol20_DDD_C_mt" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                      <tbody><tr align="center">
                                                                                          <td id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_0" /><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_1">Sun</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_2">Mon</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_3">Tue</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_4">Wed</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_5">Thu</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_6">Fri</td><td className="dxeCalendarDayHeader_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_7">Sat</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_8">35</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>31</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_9">36</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>8</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>9</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_10">37</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>10</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarToday_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>11</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>12</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>13</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>14</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>15</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>16</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_11">38</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>17</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>18</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>19</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>20</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>21</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>22</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>23</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_12">39</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>24</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>25</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>26</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_AUX_0_0_13">40</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr><tr>
                                                                          <td className="dxeCalendarFooter_Office2003Blue"><table cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="Gridallot_DXFREditorcol20_DDD_C_BT" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalTodayClick('Gridallot_DXFREditorcol20_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Today</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td><td><div style={{width: 12, fontSize: 0}}>
                                                                                    </div></td><td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="Gridallot_DXFREditorcol20_DDD_C_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalClearClick('Gridallot_DXFREditorcol20_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Clear</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr>
                                                                      </tbody></table><input type="hidden" id="Gridallot_DXFREditorcol20_DDD_C_FNPWS" name="Gridallot_DXFREditorcol20_DDD_C_FNPWS" defaultValue="0:0:-1:-10000:-10000:0:0px:-10000:1" /><div id="Gridallot_DXFREditorcol20_DDD_C_FNP_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                      <table id="Gridallot_DXFREditorcol20_DDD_C_FNP_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                        <tbody><tr>
                                                                            <td onmousedown="aspxPWMDown(event,'Gridallot_DXFREditorcol20_DDD_C_FNP',-1,false)" style={{width: 0, cursor: 'default'}}><table id="Gridallot_DXFREditorcol20_DDD_C_FNP_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 0, borderCollapse: 'separate'}}>
                                                                                <tbody><tr>
                                                                                    <td id="Gridallot_DXFREditorcol20_DDD_C_FNP_PWC-1" style={{height: '100%'}}><div id="Gridallot_DXFREditorcol20_DDD_C_FNP_CSD-1">
                                                                                        <div className="dxeCalendarFastNav_Office2003Blue">
                                                                                          <div className="dxeCalendarFastNavMonthArea_Office2003Blue">
                                                                                            <table id="Gridallot_DXFREditorcol20_DDD_C_FNP_m" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M0">Jan</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M1">Feb</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M2">Mar</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M3">Apr</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M4">May</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M5">Jun</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M6">Jul</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M7">Aug</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M8">Sep</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M9">Oct</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M10">Nov</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_M11">Dec</td>
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div><div className="dxeCalendarFastNavYearArea_Office2003Blue">
                                                                                            <table id="Gridallot_DXFREditorcol20_DDD_C_FNP_y" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate', marginTop: 8}}>
                                                                                              <tbody><tr>
                                                                                                  <td onclick="aspxCalFNYShuffle('Gridallot_DXFREditorcol20_DDD_C', -10)" rowSpan={2} style={{paddingRight: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y0" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y1" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y2" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y3" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y4" /><td onclick="aspxCalFNYShuffle('Gridallot_DXFREditorcol20_DDD_C', 10)" rowSpan={2} style={{paddingLeft: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y5" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y6" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y7" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y8" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="Gridallot_DXFREditorcol20_DDD_C_FNP_Y9" />
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div>
                                                                                        </div><div className="dxeCalendarFastNavFooter_Office2003Blue" style={{textAlign: 'center'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody><tr>
                                                                                                <td id="Gridallot_DXFREditorcol20_DDD_C_FNP_BO" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('Gridallot_DXFREditorcol20_DDD_C', 'ok')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>OK</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td><td><div style={{width: 11}}>
                                                                                                  </div></td><td id="Gridallot_DXFREditorcol20_DDD_C_FNP_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('Gridallot_DXFREditorcol20_DDD_C', 'cancel')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>Cancel</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td>
                                                                                              </tr>
                                                                                            </tbody></table>
                                                                                        </div>
                                                                                      </div></td>
                                                                                  </tr>
                                                                                </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                                          </tr><tr>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                                              </div></td>
                                                                          </tr>
                                                                        </tbody></table>
                                                                    </div><input id="Gridallot_DXFREditorcol20_DDD_C_STATE" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXFREditorcol20$DDD$C" type="hidden" defaultValue="09/11/2023" />
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div></td><td className="dxgv" style={{borderRightWidth: 0}}>&nbsp;</td>
                                            </tr><tr className="dxgvEmptyDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                              <td className="dxgv" colSpan={16} style={{borderBottomWidth: 0}}><div>
                                                  No data to display
                                                </div></td>
                                            </tr>
                                          </tbody></table><img id="Gridallot_IADD" className="dxGridView_gvDragAndDropArrowDown_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="|" style={{position: 'absolute', visibility: 'hidden', top: '-100px'}} /><img id="Gridallot_IADU" className="dxGridView_gvDragAndDropArrowUp_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="|" style={{position: 'absolute', visibility: 'hidden', top: '-100px'}} /><img id="Gridallot_IDHF" className="dxGridView_gvDragAndDropHideColumn_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="Hide" style={{position: 'absolute', visibility: 'hidden', top: '-100px'}} /><table id="Gridallot_LP" className="dxgvLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{fontFamily: 'Calibri', fontSize: 14, borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                          <tbody><tr>
                                              <td className="dx" style={{paddingRight: 10}}><img src="/DXR.axd?r=0_1389-I60ci" alt align="middle" /></td><td className="dx" style={{fontFamily: 'Calibri', fontSize: 14, paddingLeft: 0}}><span id="Gridallot_TL">Loading…</span></td>
                                            </tr>
                                          </tbody></table><div id="Gridallot_LD" className="dxgvLoadingDiv_Office2003Blue" style={{display: 'none', zIndex: 29999, position: 'absolute'}}>
                                        </div><input type="hidden" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXSelInput" id="Gridallot_DXSelInput" /><input type="hidden" name="ctl00$MainContent$wzdEmpDetails$Gridallot$DXKVInput" id="Gridallot_DXKVInput" defaultValue="[]" /><table id="Gridallot_DXStyleTable" border={0} style={{display: 'none'}}>
                                          <tbody><tr>
                                              <td />
                                            </tr><tr className="dxgvEditingErrorRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                              <td className="dxgv" colSpan={16} style={{borderRightWidth: 0}} />
                                            </tr><tr className="dxgvSelectedRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                              <td />
                                            </tr><tr className="dxgvFocusedRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                              <td />
                                            </tr><tr className="dxgvFocusedGroupRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 14}}>
                                              <td />
                                            </tr>
                                          </tbody></table><input type="hidden" name="ctl00$MainContent$wzdEmpDetails$Gridallot$CallbackState" id="Gridallot_CallbackState" defaultValue="BwMHAgIERGF0YQchAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcAAgVTdGF0ZQeXBxcHAAIBBwACAQcAAgAHAAIABv//AgAHAAIBBwECAAcCAgAHAwIABwQCAQcEAgEHBQIBBwYCAQcHAgEHCAIBBwkCAQcKAgEHCwIBBwwCAQcMAgEHDAIBBw0CAAcOAgEHAAcABwAHAAIABQAAAIAJAg5QcmpUYXNrQWxsb3RJRAkCAAIAAwcEAgAHAAIBBwAHAAIBBwAHAAIIUGFnZVNpemUDBxQ=" /></td>
                                    </tr>
                                  </tbody></table> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {/* <table className="dxgvControl_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint" border={0} style={{fontFamily: 'Calibri', fontSize: 15, width: '100%', borderCollapse: 'separate'}}>
                                  <tbody><tr>
                                      <td><table id="GridSprint_DXMainTable" className="dxgvTable_Office2003Blue" cellSpacing={0} cellPadding={0} onclick="aspxGVTableClick('GridSprint', event);" border={0} style={{fontFamily: 'Calibri', fontSize: 15, width: '100%', borderCollapse: 'collapse', emptyCells: 'show'}}>
                                          <tbody><tr id="GridSprint_DXHeadersRow0">
                                              <td id="GridSprint_col1" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('GridSprint', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>ProjectName</td>
                                                    </tr>
                                                  </tbody></table></td><td id="GridSprint_col0" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('GridSprint', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Board</td>
                                                    </tr>
                                                  </tbody></table></td><td id="GridSprint_col2" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('GridSprint', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Sprint Name</td>
                                                    </tr>
                                                  </tbody></table></td><td id="GridSprint_col3" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('GridSprint', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>SprintStartDate</td>
                                                    </tr>
                                                  </tbody></table></td><td id="GridSprint_col4" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('GridSprint', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>SprintEndDate</td>
                                                    </tr>
                                                  </tbody></table></td><td id="GridSprint_col5" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('GridSprint', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>SprintDeliveryDate</td>
                                                    </tr>
                                                  </tbody></table></td><td id="GridSprint_col6" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('GridSprint', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>SprintEstimatedHours</td>
                                                    </tr>
                                                  </tbody></table></td><td id="GridSprint_col7" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('GridSprint', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>SprintCompletedHours</td>
                                                    </tr>
                                                  </tbody></table></td><td id="GridSprint_col8" className="dxgvHeader_Office2003Blue" onmousedown="aspxGVHeaderMouseDown('GridSprint', this, event);" style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center', borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td style={{fontFamily: 'Calibri', fontSize: 15, fontWeight: 'bold', textAlign: 'Center'}}>Sprint ID</td>
                                                    </tr>
                                                  </tbody></table></td>
                                            </tr><tr className="dxgvFilterRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
                                              <td className="dxgv" style={{textAlign: 'Left'}}><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="GridSprint_DXFREditorcol1" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td style={{display: 'none'}}><input id="GridSprint_DXFREditorcol1_VI" name="GridSprint_DXFREditorcol1_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('GridSprint_DXFREditorcol1', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" id="GridSprint_DXFREditorcol1_I" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol1" onfocus="aspxEGotFocus('GridSprint_DXFREditorcol1')" onblur="aspxELostFocus('GridSprint_DXFREditorcol1')" onchange="aspxETextChanged('GridSprint_DXFREditorcol1')" onkeydown="aspxEKeyDown('GridSprint_DXFREditorcol1', event)" type="text" style={{height: 15}} autoComplete="off" /></td><td id="GridSprint_DXFREditorcol1_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('GridSprint_DXFREditorcol1', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="GridSprint_DXFREditorcol1_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="GridSprint_DXFREditorcol1_DDDWS" name="GridSprint_DXFREditorcol1_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="GridSprint_DXFREditorcol1_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="GridSprint_DXFREditorcol1_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'GridSprint_DXFREditorcol1_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="GridSprint_DXFREditorcol1_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="GridSprint_DXFREditorcol1_DDD_PWC-1" style={{height: '100%'}}><div id="GridSprint_DXFREditorcol1_DDD_CSD-1">
                                                                    <input type="hidden" id="GridSprint_DXFREditorcol1_DDD_LDeletedItems" name="GridSprint_DXFREditorcol1_DDD_LDeletedItems" defaultValue /><input type="hidden" id="GridSprint_DXFREditorcol1_DDD_LInsertedItems" name="GridSprint_DXFREditorcol1_DDD_LInsertedItems" defaultValue /><input type="hidden" id="GridSprint_DXFREditorcol1_DDD_LCustomCallback" name="GridSprint_DXFREditorcol1_DDD_LCustomCallback" defaultValue /><table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint_DXFREditorcol1_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><div id="GridSprint_DXFREditorcol1_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                              <input id="GridSprint_DXFREditorcol1_DDD_L_VI" type="hidden" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol1$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                <tbody><tr id="GridSprint_DXFREditorcol1_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td id="GridSprint_DXFREditorcol1_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">&nbsp;</td>
                                                                                  </tr>
                                                                                </tbody></table><div id="GridSprint_DXFREditorcol1_DDD_L_TS" style={{display: 'none'}}>
                                                                              </div><table id="GridSprint_DXFREditorcol1_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                <tbody><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="GridSprint_DXFREditorcol1_DDD_L_LBI0T0">ajaerosailxps</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="GridSprint_DXFREditorcol1_DDD_L_LBI1T0">Angular 5 Learning</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="GridSprint_DXFREditorcol1_DDD_L_LBI2T0">Appare</td>
                                                                                  </tr>
                                                                                </tbody></table><div id="GridSprint_DXFREditorcol1_DDD_L_BS" style={{height: 0}}>
                                                                              </div>
                                                                            </div></td>
                                                                        </tr>
                                                                      </tbody></table>
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div><table id="GridSprint_DXFREditorcol1_LP" className="dxeLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                                  <tbody><tr>
                                                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=2_24-y60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="GridSprint_DXFREditorcol1_TL">Loading…</span></td>
                                                    </tr>
                                                  </tbody></table><div id="GridSprint_DXFREditorcol1_LD" className="dxeLoadingDiv_Office2003Blue" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                                                </div></td><td className="dxgv" style={{textAlign: 'Left'}}><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="GridSprint_DXFREditorcol0" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td style={{display: 'none'}}><input id="GridSprint_DXFREditorcol0_VI" name="GridSprint_DXFREditorcol0_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('GridSprint_DXFREditorcol0', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" id="GridSprint_DXFREditorcol0_I" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol0" onfocus="aspxEGotFocus('GridSprint_DXFREditorcol0')" onblur="aspxELostFocus('GridSprint_DXFREditorcol0')" onchange="aspxETextChanged('GridSprint_DXFREditorcol0')" onkeydown="aspxEKeyDown('GridSprint_DXFREditorcol0', event)" type="text" style={{height: 15}} autoComplete="off" /></td><td id="GridSprint_DXFREditorcol0_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('GridSprint_DXFREditorcol0', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="GridSprint_DXFREditorcol0_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="GridSprint_DXFREditorcol0_DDDWS" name="GridSprint_DXFREditorcol0_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="GridSprint_DXFREditorcol0_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="GridSprint_DXFREditorcol0_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'GridSprint_DXFREditorcol0_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="GridSprint_DXFREditorcol0_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="GridSprint_DXFREditorcol0_DDD_PWC-1" style={{height: '100%'}}><div id="GridSprint_DXFREditorcol0_DDD_CSD-1">
                                                                    <input type="hidden" id="GridSprint_DXFREditorcol0_DDD_LDeletedItems" name="GridSprint_DXFREditorcol0_DDD_LDeletedItems" defaultValue /><input type="hidden" id="GridSprint_DXFREditorcol0_DDD_LInsertedItems" name="GridSprint_DXFREditorcol0_DDD_LInsertedItems" defaultValue /><input type="hidden" id="GridSprint_DXFREditorcol0_DDD_LCustomCallback" name="GridSprint_DXFREditorcol0_DDD_LCustomCallback" defaultValue /><table className="dxeListBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint_DXFREditorcol0_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><div id="GridSprint_DXFREditorcol0_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                              <input id="GridSprint_DXFREditorcol0_DDD_L_VI" type="hidden" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol0$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                <tbody><tr id="GridSprint_DXFREditorcol0_DDD_L_LBI-1" className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td id="GridSprint_DXFREditorcol0_DDD_L_LBI-1T0" className="dxeListBoxItem_Office2003Blue">&nbsp;</td>
                                                                                  </tr>
                                                                                </tbody></table><table id="GridSprint_DXFREditorcol0_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                <tbody><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="GridSprint_DXFREditorcol0_DDD_L_LBI0T0">Monthly Reports</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="GridSprint_DXFREditorcol0_DDD_L_LBI1T0">Awards Orders-image upload</td>
                                                                                  </tr><tr className="dxeListBoxItemRow_Office2003Blue">
                                                                                    <td className="dxeListBoxItem_Office2003Blue" id="GridSprint_DXFREditorcol0_DDD_L_LBI2T0">Sharepoint Installation &amp; Configuration</td>
                                                                                  </tr>
                                                                                </tbody></table>
                                                                            </div></td>
                                                                        </tr>
                                                                      </tbody></table>
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div><table id="GridSprint_DXFREditorcol0_LP" className="dxeLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                                  <tbody><tr>
                                                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=2_24-y60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="GridSprint_DXFREditorcol0_TL">Loading…</span></td>
                                                    </tr>
                                                  </tbody></table><div id="GridSprint_DXFREditorcol0_LD" className="dxeLoadingDiv_Office2003Blue" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                                                </div></td><td className="dxgv"><table className="dxeTextBoxSys dxeTextBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint_DXFREditorcol2" border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol2" onkeyup="aspxEKeyUp('GridSprint_DXFREditorcol2', event)" id="GridSprint_DXFREditorcol2_I" onchange="aspxEValueChanged('GridSprint_DXFREditorcol2')" onblur="aspxELostFocus('GridSprint_DXFREditorcol2')" onfocus="aspxEGotFocus('GridSprint_DXFREditorcol2')" type="text" onkeydown="aspxEKeyDown('GridSprint_DXFREditorcol2', event)" style={{height: 15}} /></td>
                                                    </tr>
                                                  </tbody></table></td><td className="dxgv"><input type="hidden" id="GridSprint_DXFREditorcol3_Raw" name="GridSprint_DXFREditorcol3_Raw" defaultValue="N" /><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="GridSprint_DXFREditorcol3" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" onmousedown="return aspxDDMC_MD('GridSprint_DXFREditorcol3', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol3" onkeyup="aspxEKeyUp('GridSprint_DXFREditorcol3', event)" id="GridSprint_DXFREditorcol3_I" onchange="aspxETextChanged('GridSprint_DXFREditorcol3')" onblur="aspxELostFocus('GridSprint_DXFREditorcol3')" onfocus="aspxEGotFocus('GridSprint_DXFREditorcol3')" type="text" onkeydown="aspxEKeyDown('GridSprint_DXFREditorcol3', event)" style={{height: 15}} autoComplete="off" /></td><td id="GridSprint_DXFREditorcol3_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('GridSprint_DXFREditorcol3', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="GridSprint_DXFREditorcol3_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="GridSprint_DXFREditorcol3_DDDWS" name="GridSprint_DXFREditorcol3_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="GridSprint_DXFREditorcol3_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="GridSprint_DXFREditorcol3_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'GridSprint_DXFREditorcol3_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="GridSprint_DXFREditorcol3_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="GridSprint_DXFREditorcol3_DDD_PWC-1" style={{height: '100%'}}><div id="GridSprint_DXFREditorcol3_DDD_CSD-1">
                                                                    <table border={0} style={{display: 'none'}}>
                                                                      <tbody><tr>
                                                                          <td id="GridSprint_DXFREditorcol3_DDD_C_EC_D" className="dxeCalendarDay_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_DS" className="dxeCalendarSelected_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_DA" className="dxeCalendarOtherMonth_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_DW" className="dxeCalendarWeekend_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_DO" className="dxeCalendarOutOfRange_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_DT" className="dxeCalendarToday_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_DD" className="dxeDisabled_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_FNM" className="dxeCalendarFastNavMonth_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_FNMS" className="dxeCalendarFastNavMonthSelected_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_FNY" className="dxeCalendarFastNavYear_Office2003Blue" /><td id="GridSprint_DXFREditorcol3_DDD_C_EC_FNYS" className="dxeCalendarFastNavYearSelected_Office2003Blue" />
                                                                        </tr>
                                                                      </tbody></table><table className="dxeCalendar_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint_DXFREditorcol3_DDD_C" border={0} style={{borderCollapse: 'collapse'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td className="dxeCalendarHeader_Office2003Blue" style={{borderTop: 0}}><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="GridSprint_DXFREditorcol3_DDD_C_PYC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol3_DDD_C', -12);"><img id="GridSprint_DXFREditorcol3_DDD_C_PYCImg" className="dxEditors_edtCalendarPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<<" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="GridSprint_DXFREditorcol3_DDD_C_PMC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol3_DDD_C', -1);"><img id="GridSprint_DXFREditorcol3_DDD_C_PMCImg" className="dxEditors_edtCalendarPrevMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td id="GridSprint_DXFREditorcol3_DDD_C_TC" className="dxe" style={{width: '100%', cursor: 'default'}}><span id="GridSprint_DXFREditorcol3_DDD_C_T" onclick="aspxCalTitleClick('GridSprint_DXFREditorcol3_DDD_C', 0, 0)" style={{cursor: 'pointer'}}>September 2023</span></td><td id="GridSprint_DXFREditorcol3_DDD_C_NMC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol3_DDD_C', 1);"><img id="GridSprint_DXFREditorcol3_DDD_C_NMCImg" className="dxEditors_edtCalendarNextMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="GridSprint_DXFREditorcol3_DDD_C_NYC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol3_DDD_C', 12);"><img id="GridSprint_DXFREditorcol3_DDD_C_NYCImg" className="dxEditors_edtCalendarNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">>" /></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr><tr>
                                                                                  <td id="GridSprint_DXFREditorcol3_DDD_C_mc" className="dxMonthGridWithWeekNumbers" style={{KhtmlUserSelect: 'none'}}><table id="GridSprint_DXFREditorcol3_DDD_C_mt" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                      <tbody><tr align="center">
                                                                                          <td id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_0" /><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_1">Sun</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_2">Mon</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_3">Tue</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_4">Wed</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_5">Thu</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_6">Fri</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_7">Sat</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_8">35</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>31</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_9">36</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>8</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>9</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_10">37</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>10</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarToday_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>11</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>12</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>13</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>14</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>15</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>16</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_11">38</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>17</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>18</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>19</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>20</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>21</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>22</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>23</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_12">39</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>24</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>25</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>26</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_AUX_0_0_13">40</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr><tr>
                                                                          <td className="dxeCalendarFooter_Office2003Blue"><table cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="GridSprint_DXFREditorcol3_DDD_C_BT" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalTodayClick('GridSprint_DXFREditorcol3_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Today</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td><td><div style={{width: 12, fontSize: 0}}>
                                                                                    </div></td><td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="GridSprint_DXFREditorcol3_DDD_C_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalClearClick('GridSprint_DXFREditorcol3_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Clear</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr>
                                                                      </tbody></table><input type="hidden" id="GridSprint_DXFREditorcol3_DDD_C_FNPWS" name="GridSprint_DXFREditorcol3_DDD_C_FNPWS" defaultValue="0:0:-1:-10000:-10000:0:0px:-10000:1" /><div id="GridSprint_DXFREditorcol3_DDD_C_FNP_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                      <table id="GridSprint_DXFREditorcol3_DDD_C_FNP_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                        <tbody><tr>
                                                                            <td onmousedown="aspxPWMDown(event,'GridSprint_DXFREditorcol3_DDD_C_FNP',-1,false)" style={{width: 0, cursor: 'default'}}><table id="GridSprint_DXFREditorcol3_DDD_C_FNP_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 0, borderCollapse: 'separate'}}>
                                                                                <tbody><tr>
                                                                                    <td id="GridSprint_DXFREditorcol3_DDD_C_FNP_PWC-1" style={{height: '100%'}}><div id="GridSprint_DXFREditorcol3_DDD_C_FNP_CSD-1">
                                                                                        <div className="dxeCalendarFastNav_Office2003Blue">
                                                                                          <div className="dxeCalendarFastNavMonthArea_Office2003Blue">
                                                                                            <table id="GridSprint_DXFREditorcol3_DDD_C_FNP_m" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M0">Jan</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M1">Feb</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M2">Mar</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M3">Apr</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M4">May</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M5">Jun</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M6">Jul</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M7">Aug</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M8">Sep</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M9">Oct</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M10">Nov</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_M11">Dec</td>
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div><div className="dxeCalendarFastNavYearArea_Office2003Blue">
                                                                                            <table id="GridSprint_DXFREditorcol3_DDD_C_FNP_y" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate', marginTop: 8}}>
                                                                                              <tbody><tr>
                                                                                                  <td onclick="aspxCalFNYShuffle('GridSprint_DXFREditorcol3_DDD_C', -10)" rowSpan={2} style={{paddingRight: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y0" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y1" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y2" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y3" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y4" /><td onclick="aspxCalFNYShuffle('GridSprint_DXFREditorcol3_DDD_C', 10)" rowSpan={2} style={{paddingLeft: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y5" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y6" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y7" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y8" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol3_DDD_C_FNP_Y9" />
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div>
                                                                                        </div><div className="dxeCalendarFastNavFooter_Office2003Blue" style={{textAlign: 'center'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody><tr>
                                                                                                <td id="GridSprint_DXFREditorcol3_DDD_C_FNP_BO" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('GridSprint_DXFREditorcol3_DDD_C', 'ok')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>OK</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td><td><div style={{width: 11}}>
                                                                                                  </div></td><td id="GridSprint_DXFREditorcol3_DDD_C_FNP_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('GridSprint_DXFREditorcol3_DDD_C', 'cancel')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>Cancel</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td>
                                                                                              </tr>
                                                                                            </tbody></table>
                                                                                        </div>
                                                                                      </div></td>
                                                                                  </tr>
                                                                                </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                                          </tr><tr>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                                              </div></td>
                                                                          </tr>
                                                                        </tbody></table>
                                                                    </div><input id="GridSprint_DXFREditorcol3_DDD_C_STATE" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol3$DDD$C" type="hidden" defaultValue="09/11/2023" />
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div></td><td className="dxgv"><input type="hidden" id="GridSprint_DXFREditorcol4_Raw" name="GridSprint_DXFREditorcol4_Raw" defaultValue="N" /><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="GridSprint_DXFREditorcol4" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" onmousedown="return aspxDDMC_MD('GridSprint_DXFREditorcol4', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol4" onkeyup="aspxEKeyUp('GridSprint_DXFREditorcol4', event)" id="GridSprint_DXFREditorcol4_I" onchange="aspxETextChanged('GridSprint_DXFREditorcol4')" onblur="aspxELostFocus('GridSprint_DXFREditorcol4')" onfocus="aspxEGotFocus('GridSprint_DXFREditorcol4')" type="text" onkeydown="aspxEKeyDown('GridSprint_DXFREditorcol4', event)" style={{height: 15}} autoComplete="off" /></td><td id="GridSprint_DXFREditorcol4_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('GridSprint_DXFREditorcol4', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="GridSprint_DXFREditorcol4_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="GridSprint_DXFREditorcol4_DDDWS" name="GridSprint_DXFREditorcol4_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="GridSprint_DXFREditorcol4_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="GridSprint_DXFREditorcol4_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'GridSprint_DXFREditorcol4_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="GridSprint_DXFREditorcol4_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="GridSprint_DXFREditorcol4_DDD_PWC-1" style={{height: '100%'}}><div id="GridSprint_DXFREditorcol4_DDD_CSD-1">
                                                                    <table border={0} style={{display: 'none'}}>
                                                                      <tbody><tr>
                                                                          <td id="GridSprint_DXFREditorcol4_DDD_C_EC_D" className="dxeCalendarDay_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_DS" className="dxeCalendarSelected_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_DA" className="dxeCalendarOtherMonth_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_DW" className="dxeCalendarWeekend_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_DO" className="dxeCalendarOutOfRange_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_DT" className="dxeCalendarToday_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_DD" className="dxeDisabled_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_FNM" className="dxeCalendarFastNavMonth_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_FNMS" className="dxeCalendarFastNavMonthSelected_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_FNY" className="dxeCalendarFastNavYear_Office2003Blue" /><td id="GridSprint_DXFREditorcol4_DDD_C_EC_FNYS" className="dxeCalendarFastNavYearSelected_Office2003Blue" />
                                                                        </tr>
                                                                      </tbody></table><table className="dxeCalendar_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint_DXFREditorcol4_DDD_C" border={0} style={{borderCollapse: 'collapse'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td className="dxeCalendarHeader_Office2003Blue" style={{borderTop: 0}}><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="GridSprint_DXFREditorcol4_DDD_C_PYC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol4_DDD_C', -12);"><img id="GridSprint_DXFREditorcol4_DDD_C_PYCImg" className="dxEditors_edtCalendarPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<<" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="GridSprint_DXFREditorcol4_DDD_C_PMC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol4_DDD_C', -1);"><img id="GridSprint_DXFREditorcol4_DDD_C_PMCImg" className="dxEditors_edtCalendarPrevMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td id="GridSprint_DXFREditorcol4_DDD_C_TC" className="dxe" style={{width: '100%', cursor: 'default'}}><span id="GridSprint_DXFREditorcol4_DDD_C_T" onclick="aspxCalTitleClick('GridSprint_DXFREditorcol4_DDD_C', 0, 0)" style={{cursor: 'pointer'}}>September 2023</span></td><td id="GridSprint_DXFREditorcol4_DDD_C_NMC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol4_DDD_C', 1);"><img id="GridSprint_DXFREditorcol4_DDD_C_NMCImg" className="dxEditors_edtCalendarNextMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="GridSprint_DXFREditorcol4_DDD_C_NYC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol4_DDD_C', 12);"><img id="GridSprint_DXFREditorcol4_DDD_C_NYCImg" className="dxEditors_edtCalendarNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">>" /></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr><tr>
                                                                                  <td id="GridSprint_DXFREditorcol4_DDD_C_mc" className="dxMonthGridWithWeekNumbers" style={{KhtmlUserSelect: 'none'}}><table id="GridSprint_DXFREditorcol4_DDD_C_mt" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                      <tbody><tr align="center">
                                                                                          <td id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_0" /><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_1">Sun</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_2">Mon</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_3">Tue</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_4">Wed</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_5">Thu</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_6">Fri</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_7">Sat</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_8">35</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>31</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_9">36</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>8</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>9</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_10">37</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>10</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarToday_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>11</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>12</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>13</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>14</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>15</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>16</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_11">38</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>17</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>18</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>19</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>20</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>21</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>22</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>23</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_12">39</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>24</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>25</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>26</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_AUX_0_0_13">40</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr><tr>
                                                                          <td className="dxeCalendarFooter_Office2003Blue"><table cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="GridSprint_DXFREditorcol4_DDD_C_BT" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalTodayClick('GridSprint_DXFREditorcol4_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Today</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td><td><div style={{width: 12, fontSize: 0}}>
                                                                                    </div></td><td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="GridSprint_DXFREditorcol4_DDD_C_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalClearClick('GridSprint_DXFREditorcol4_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Clear</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr>
                                                                      </tbody></table><input type="hidden" id="GridSprint_DXFREditorcol4_DDD_C_FNPWS" name="GridSprint_DXFREditorcol4_DDD_C_FNPWS" defaultValue="0:0:-1:-10000:-10000:0:0px:-10000:1" /><div id="GridSprint_DXFREditorcol4_DDD_C_FNP_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                      <table id="GridSprint_DXFREditorcol4_DDD_C_FNP_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                        <tbody><tr>
                                                                            <td onmousedown="aspxPWMDown(event,'GridSprint_DXFREditorcol4_DDD_C_FNP',-1,false)" style={{width: 0, cursor: 'default'}}><table id="GridSprint_DXFREditorcol4_DDD_C_FNP_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 0, borderCollapse: 'separate'}}>
                                                                                <tbody><tr>
                                                                                    <td id="GridSprint_DXFREditorcol4_DDD_C_FNP_PWC-1" style={{height: '100%'}}><div id="GridSprint_DXFREditorcol4_DDD_C_FNP_CSD-1">
                                                                                        <div className="dxeCalendarFastNav_Office2003Blue">
                                                                                          <div className="dxeCalendarFastNavMonthArea_Office2003Blue">
                                                                                            <table id="GridSprint_DXFREditorcol4_DDD_C_FNP_m" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M0">Jan</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M1">Feb</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M2">Mar</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M3">Apr</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M4">May</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M5">Jun</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M6">Jul</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M7">Aug</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M8">Sep</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M9">Oct</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M10">Nov</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_M11">Dec</td>
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div><div className="dxeCalendarFastNavYearArea_Office2003Blue">
                                                                                            <table id="GridSprint_DXFREditorcol4_DDD_C_FNP_y" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate', marginTop: 8}}>
                                                                                              <tbody><tr>
                                                                                                  <td onclick="aspxCalFNYShuffle('GridSprint_DXFREditorcol4_DDD_C', -10)" rowSpan={2} style={{paddingRight: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y0" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y1" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y2" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y3" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y4" /><td onclick="aspxCalFNYShuffle('GridSprint_DXFREditorcol4_DDD_C', 10)" rowSpan={2} style={{paddingLeft: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y5" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y6" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y7" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y8" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol4_DDD_C_FNP_Y9" />
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div>
                                                                                        </div><div className="dxeCalendarFastNavFooter_Office2003Blue" style={{textAlign: 'center'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody><tr>
                                                                                                <td id="GridSprint_DXFREditorcol4_DDD_C_FNP_BO" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('GridSprint_DXFREditorcol4_DDD_C', 'ok')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>OK</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td><td><div style={{width: 11}}>
                                                                                                  </div></td><td id="GridSprint_DXFREditorcol4_DDD_C_FNP_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('GridSprint_DXFREditorcol4_DDD_C', 'cancel')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>Cancel</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td>
                                                                                              </tr>
                                                                                            </tbody></table>
                                                                                        </div>
                                                                                      </div></td>
                                                                                  </tr>
                                                                                </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                                          </tr><tr>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                                              </div></td>
                                                                          </tr>
                                                                        </tbody></table>
                                                                    </div><input id="GridSprint_DXFREditorcol4_DDD_C_STATE" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol4$DDD$C" type="hidden" defaultValue="09/11/2023" />
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div></td><td className="dxgv"><input type="hidden" id="GridSprint_DXFREditorcol5_Raw" name="GridSprint_DXFREditorcol5_Raw" defaultValue="N" /><table className="dxeButtonEdit_Office2003Blue" cellSpacing={1} cellPadding={0} id="GridSprint_DXFREditorcol5" border={0} style={{width: '100%'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" onmousedown="return aspxDDMC_MD('GridSprint_DXFREditorcol5', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol5" onkeyup="aspxEKeyUp('GridSprint_DXFREditorcol5', event)" id="GridSprint_DXFREditorcol5_I" onchange="aspxETextChanged('GridSprint_DXFREditorcol5')" onblur="aspxELostFocus('GridSprint_DXFREditorcol5')" onfocus="aspxEGotFocus('GridSprint_DXFREditorcol5')" type="text" onkeydown="aspxEKeyDown('GridSprint_DXFREditorcol5', event)" style={{height: 15}} autoComplete="off" /></td><td id="GridSprint_DXFREditorcol5_B-1" className="dxeButtonEditButton_Office2003Blue" onmousedown="return aspxDDDropDown('GridSprint_DXFREditorcol5', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                          <tbody><tr>
                                                              <td className="dx"><img id="GridSprint_DXFREditorcol5_B-1Img" className="dxEditors_edtDropDown_Office2003Blue" src={empty} alt="v" /></td>
                                                            </tr>
                                                          </tbody></table></td>
                                                    </tr>
                                                  </tbody></table><input type="hidden" id="GridSprint_DXFREditorcol5_DDDWS" name="GridSprint_DXFREditorcol5_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="GridSprint_DXFREditorcol5_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                  <table id="GridSprint_DXFREditorcol5_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                    <tbody><tr>
                                                        <td onmousedown="aspxPWMDown(event,'GridSprint_DXFREditorcol5_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="GridSprint_DXFREditorcol5_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="GridSprint_DXFREditorcol5_DDD_PWC-1" style={{height: '100%'}}><div id="GridSprint_DXFREditorcol5_DDD_CSD-1">
                                                                    <table border={0} style={{display: 'none'}}>
                                                                      <tbody><tr>
                                                                          <td id="GridSprint_DXFREditorcol5_DDD_C_EC_D" className="dxeCalendarDay_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_DS" className="dxeCalendarSelected_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_DA" className="dxeCalendarOtherMonth_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_DW" className="dxeCalendarWeekend_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_DO" className="dxeCalendarOutOfRange_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_DT" className="dxeCalendarToday_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_DD" className="dxeDisabled_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_FNM" className="dxeCalendarFastNavMonth_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_FNMS" className="dxeCalendarFastNavMonthSelected_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_FNY" className="dxeCalendarFastNavYear_Office2003Blue" /><td id="GridSprint_DXFREditorcol5_DDD_C_EC_FNYS" className="dxeCalendarFastNavYearSelected_Office2003Blue" />
                                                                        </tr>
                                                                      </tbody></table><table className="dxeCalendar_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint_DXFREditorcol5_DDD_C" border={0} style={{borderCollapse: 'collapse'}}>
                                                                      <tbody><tr>
                                                                          <td valign="top"><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td className="dxeCalendarHeader_Office2003Blue" style={{borderTop: 0}}><table cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="GridSprint_DXFREditorcol5_DDD_C_PYC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol5_DDD_C', -12);"><img id="GridSprint_DXFREditorcol5_DDD_C_PYCImg" className="dxEditors_edtCalendarPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<<" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="GridSprint_DXFREditorcol5_DDD_C_PMC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol5_DDD_C', -1);"><img id="GridSprint_DXFREditorcol5_DDD_C_PMCImg" className="dxEditors_edtCalendarPrevMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td id="GridSprint_DXFREditorcol5_DDD_C_TC" className="dxe" style={{width: '100%', cursor: 'default'}}><span id="GridSprint_DXFREditorcol5_DDD_C_T" onclick="aspxCalTitleClick('GridSprint_DXFREditorcol5_DDD_C', 0, 0)" style={{cursor: 'pointer'}}>September 2023</span></td><td id="GridSprint_DXFREditorcol5_DDD_C_NMC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol5_DDD_C', 1);"><img id="GridSprint_DXFREditorcol5_DDD_C_NMCImg" className="dxEditors_edtCalendarNextMonth_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td><td><div style={{width: 10, fontSize: 0}}>
                                                                                            </div></td><td id="GridSprint_DXFREditorcol5_DDD_C_NYC" className="dxe" onclick="aspxCalShiftMonth('GridSprint_DXFREditorcol5_DDD_C', 12);"><img id="GridSprint_DXFREditorcol5_DDD_C_NYCImg" className="dxEditors_edtCalendarNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">>" /></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr><tr>
                                                                                  <td id="GridSprint_DXFREditorcol5_DDD_C_mc" className="dxMonthGridWithWeekNumbers" style={{KhtmlUserSelect: 'none'}}><table id="GridSprint_DXFREditorcol5_DDD_C_mt" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                      <tbody><tr align="center">
                                                                                          <td id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_0" /><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_1">Sun</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_2">Mon</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_3">Tue</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_4">Wed</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_5">Thu</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_6">Fri</td><td className="dxeCalendarDayHeader_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_7">Sat</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_8">35</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>31</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_9">36</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>8</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>9</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_10">37</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>10</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarToday_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>11</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>12</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>13</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>14</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>15</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>16</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_11">38</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>17</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>18</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>19</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>20</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>21</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>22</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>23</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_12">39</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>24</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>25</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>26</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>27</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>28</td><td className="dxeCalendarDay_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>29</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>30</td>
                                                                                        </tr><tr>
                                                                                          <td className="dxeCalendarWeekNumber_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_AUX_0_0_13">40</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>1</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>2</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>3</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>4</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>5</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>6</td><td className="dxeCalendarDay_Office2003Blue dxeCalendarWeekend_Office2003Blue dxeCalendarOtherMonth_Office2003Blue" savedcursor="[object Object]" style={{cursor: 'pointer'}}>7</td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr><tr>
                                                                          <td className="dxeCalendarFooter_Office2003Blue"><table cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                              <tbody><tr>
                                                                                  <td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="GridSprint_DXFREditorcol5_DDD_C_BT" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalTodayClick('GridSprint_DXFREditorcol5_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Today</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td><td><div style={{width: 12, fontSize: 0}}>
                                                                                    </div></td><td><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                                      <tbody><tr>
                                                                                          <td id="GridSprint_DXFREditorcol5_DDD_C_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalClearClick('GridSprint_DXFREditorcol5_DDD_C');" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dx" style={{width: '100%'}}>Clear</td>
                                                                                                </tr>
                                                                                              </tbody></table></td>
                                                                                        </tr>
                                                                                      </tbody></table></td>
                                                                                </tr>
                                                                              </tbody></table></td>
                                                                        </tr>
                                                                      </tbody></table><input type="hidden" id="GridSprint_DXFREditorcol5_DDD_C_FNPWS" name="GridSprint_DXFREditorcol5_DDD_C_FNPWS" defaultValue="0:0:-1:-10000:-10000:0:0px:-10000:1" /><div id="GridSprint_DXFREditorcol5_DDD_C_FNP_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                                      <table id="GridSprint_DXFREditorcol5_DDD_C_FNP_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                                        <tbody><tr>
                                                                            <td onmousedown="aspxPWMDown(event,'GridSprint_DXFREditorcol5_DDD_C_FNP',-1,false)" style={{width: 0, cursor: 'default'}}><table id="GridSprint_DXFREditorcol5_DDD_C_FNP_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 0, borderCollapse: 'separate'}}>
                                                                                <tbody><tr>
                                                                                    <td id="GridSprint_DXFREditorcol5_DDD_C_FNP_PWC-1" style={{height: '100%'}}><div id="GridSprint_DXFREditorcol5_DDD_C_FNP_CSD-1">
                                                                                        <div className="dxeCalendarFastNav_Office2003Blue">
                                                                                          <div className="dxeCalendarFastNavMonthArea_Office2003Blue">
                                                                                            <table id="GridSprint_DXFREditorcol5_DDD_C_FNP_m" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                              <tbody><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M0">Jan</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M1">Feb</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M2">Mar</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M3">Apr</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M4">May</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M5">Jun</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M6">Jul</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M7">Aug</td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M8">Sep</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M9">Oct</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M10">Nov</td><td className="dxeCalendarFastNavMonth_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_M11">Dec</td>
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div><div className="dxeCalendarFastNavYearArea_Office2003Blue">
                                                                                            <table id="GridSprint_DXFREditorcol5_DDD_C_FNP_y" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate', marginTop: 8}}>
                                                                                              <tbody><tr>
                                                                                                  <td onclick="aspxCalFNYShuffle('GridSprint_DXFREditorcol5_DDD_C', -10)" rowSpan={2} style={{paddingRight: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNPrevYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="<" /></td><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y0" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y1" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y2" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y3" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y4" /><td onclick="aspxCalFNYShuffle('GridSprint_DXFREditorcol5_DDD_C', 10)" rowSpan={2} style={{paddingLeft: 8, cursor: 'pointer'}}><img className="dxEditors_edtCalendarFNNextYear_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt=">" /></td>
                                                                                                </tr><tr>
                                                                                                  <td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y5" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y6" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y7" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y8" /><td className="dxeCalendarFastNavYear_Office2003Blue" id="GridSprint_DXFREditorcol5_DDD_C_FNP_Y9" />
                                                                                                </tr>
                                                                                              </tbody></table>
                                                                                          </div>
                                                                                        </div><div className="dxeCalendarFastNavFooter_Office2003Blue" style={{textAlign: 'center'}}>
                                                                                          <table cellSpacing={0} cellPadding={0} align="center" border={0} style={{borderCollapse: 'collapse'}}>
                                                                                            <tbody><tr>
                                                                                                <td id="GridSprint_DXFREditorcol5_DDD_C_FNP_BO" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('GridSprint_DXFREditorcol5_DDD_C', 'ok')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>OK</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td><td><div style={{width: 11}}>
                                                                                                  </div></td><td id="GridSprint_DXFREditorcol5_DDD_C_FNP_BC" className="dxeCalendarButton_Office2003Blue" onclick="aspxCalFNBClick('GridSprint_DXFREditorcol5_DDD_C', 'cancel')" style={{width: 37}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{width: 37, borderCollapse: 'separate'}}>
                                                                                                    <tbody><tr>
                                                                                                        <td className="dx" style={{width: '100%'}}>Cancel</td>
                                                                                                      </tr>
                                                                                                    </tbody></table></td>
                                                                                              </tr>
                                                                                            </tbody></table>
                                                                                        </div>
                                                                                      </div></td>
                                                                                  </tr>
                                                                                </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                                          </tr><tr>
                                                                            <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                                              </div></td>
                                                                          </tr>
                                                                        </tbody></table>
                                                                    </div><input id="GridSprint_DXFREditorcol5_DDD_C_STATE" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol5$DDD$C" type="hidden" defaultValue="09/11/2023" />
                                                                  </div></td>
                                                              </tr>
                                                            </tbody></table></td><td style={{background: 'url("/DXR.axd?r=1_27-I60ci") no-repeat left top'}} />
                                                      </tr><tr>
                                                        <td style={{background: 'url("/DXR.axd?r=1_26-I60ci") no-repeat left top'}} /><td style={{background: 'url("/DXR.axd?r=1_28-I60ci") no-repeat left top'}}><div style={{height: 5, width: 5}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table>
                                                </div></td><td className="dxgv"><table className="dxeTextBoxSys dxeTextBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint_DXFREditorcol6" border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol6" onkeyup="aspxEKeyUp('GridSprint_DXFREditorcol6', event)" id="GridSprint_DXFREditorcol6_I" onchange="aspxEValueChanged('GridSprint_DXFREditorcol6')" onblur="aspxELostFocus('GridSprint_DXFREditorcol6')" onfocus="aspxEGotFocus('GridSprint_DXFREditorcol6')" type="text" onkeydown="aspxEKeyDown('GridSprint_DXFREditorcol6', event)" style={{height: 15}} /></td>
                                                    </tr>
                                                  </tbody></table></td><td className="dxgv"><table className="dxeTextBoxSys dxeTextBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint_DXFREditorcol7" border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol7" onkeyup="aspxEKeyUp('GridSprint_DXFREditorcol7', event)" id="GridSprint_DXFREditorcol7_I" onchange="aspxEValueChanged('GridSprint_DXFREditorcol7')" onblur="aspxELostFocus('GridSprint_DXFREditorcol7')" onfocus="aspxEGotFocus('GridSprint_DXFREditorcol7')" type="text" onkeydown="aspxEKeyDown('GridSprint_DXFREditorcol7', event)" style={{height: 15}} /></td>
                                                    </tr>
                                                  </tbody></table></td><td className="dxgv" style={{borderRightWidth: 0}}><table className="dxeTextBoxSys dxeTextBox_Office2003Blue" cellSpacing={0} cellPadding={0} id="GridSprint_DXFREditorcol8" border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                                  <tbody><tr>
                                                      <td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}}><input className="dxeEditArea_Office2003Blue dxeEditAreaSys" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXFREditorcol8" onkeyup="aspxEKeyUp('GridSprint_DXFREditorcol8', event)" id="GridSprint_DXFREditorcol8_I" onchange="aspxEValueChanged('GridSprint_DXFREditorcol8')" onblur="aspxELostFocus('GridSprint_DXFREditorcol8')" onfocus="aspxEGotFocus('GridSprint_DXFREditorcol8')" type="text" onkeydown="aspxEKeyDown('GridSprint_DXFREditorcol8', event)" style={{height: 15}} /></td>
                                                    </tr>
                                                  </tbody></table></td>
                                            </tr><tr className="dxgvEmptyDataRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
                                              <td className="dxgv" colSpan={9} style={{borderBottomWidth: 0}}><div>
                                                  No data to display
                                                </div></td>
                                            </tr>
                                          </tbody></table><img id="GridSprint_IADD" className="dxGridView_gvDragAndDropArrowDown_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="|" style={{position: 'absolute', visibility: 'hidden', top: '-100px'}} /><img id="GridSprint_IADU" className="dxGridView_gvDragAndDropArrowUp_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="|" style={{position: 'absolute', visibility: 'hidden', top: '-100px'}} /><img id="GridSprint_IDHF" className="dxGridView_gvDragAndDropHideColumn_Office2003Blue" src="/DXR.axd?r=1_5-I60ci" alt="Hide" style={{position: 'absolute', visibility: 'hidden', top: '-100px'}} /><table id="GridSprint_LP" className="dxgvLoadingPanel_Office2003Blue" cellSpacing={0} cellPadding={0} border={0} style={{fontFamily: 'Calibri', fontSize: 15, borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                                          <tbody><tr>
                                              <td className="dx" style={{paddingRight: 10}}><img src="/DXR.axd?r=0_1389-I60ci" alt align="middle" /></td><td className="dx" style={{fontFamily: 'Calibri', fontSize: 15, paddingLeft: 0}}><span id="GridSprint_TL">Loading…</span></td>
                                            </tr>
                                          </tbody></table><div id="GridSprint_LD" className="dxgvLoadingDiv_Office2003Blue" style={{display: 'none', zIndex: 29999, position: 'absolute'}}>
                                        </div><input type="hidden" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXSelInput" id="GridSprint_DXSelInput" /><input type="hidden" name="ctl00$MainContent$wzdEmpDetails$GridSprint$DXKVInput" id="GridSprint_DXKVInput" defaultValue="[]" /><table id="GridSprint_DXStyleTable" border={0} style={{display: 'none'}}>
                                          <tbody><tr>
                                              <td />
                                            </tr><tr className="dxgvEditingErrorRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
                                              <td className="dxgv" colSpan={9} style={{borderRightWidth: 0}} />
                                            </tr><tr className="dxgvSelectedRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
                                              <td />
                                            </tr><tr className="dxgvFocusedRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
                                              <td />
                                            </tr><tr className="dxgvFocusedGroupRow_Office2003Blue" style={{fontFamily: 'Calibri', fontSize: 15}}>
                                              <td />
                                            </tr>
                                          </tbody></table><input type="hidden" name="ctl00$MainContent$wzdEmpDetails$GridSprint$CallbackState" id="GridSprint_CallbackState" defaultValue="BwIHAgIERGF0YQchAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcAAgVTdGF0ZQdYBwkHAQIBBwACAQcCAgEHAwIBBwQCAQcFAgEHBgIBBwcCAQcIAgEHAAcABwAHAAIABQAAAIAJAghTcHJpbnRJRAkCAAIAAwcEAgAHAAIBBwAHAAIBBwAHAA==" /></td>
                                    </tr>
                                  </tbody></table> */}
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="hidden" name="ctl00$MainContent$wzdEmpDetails$hfconfirmbox1" id="hfconfirmbox1" />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="hidden" name="ctl00$MainContent$wzdEmpDetails$hfconfirmbox2" id="hfconfirmbox2" />
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
  </tbody></table>

  <label htmlFor="radio2" id="second-tab" className="tab" style={{borderRadius: "5px",marginTop: "10px", marginLeft: "10px",height: "30px"}}>
        <span>
          <button onClick={ () => {this.handletab4();}} style={{backgroundColor: "#4c4a48",color: "#fff",border: "none",padding: "7px 15px",marginTop: "10px",borderRadius: "6px"}} className='prev-btn' type='submit' >Previous</button>
        </span>
    </label>
      </h3>
    </div>
 )} 
  </div>
  </div>

{/* Popup  */}

  {/* New  */}

        {this.state.showModal1 && (
          <div className="popup-create">
            
          <div className='popup-body'>
        <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 498, cursor: 'default', display: 'table', visibility: 'visible'}}>
  <div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
    <div className="dxpc-headerContent" style={{float:'left'}}>
      <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Add New Submodule</span>
    </div>
    <button className='popup-closebtn' onClick={this.handleCloseModal1} style={{float:'right'}}>X</button>
    <b className="dx-clear" />
  </div><div className="dxpc-contentWrapper" >
    <div className="dxpc-content" style={{fontFamily: 'Calibri', fontSize: 15, padding: 0, display: 'block'}} id="Grid_DXPEForm_PWC-1">
      <div className="dxgvPopupEditForm_Office2003Blue" style={{overflowX: 'hidden'}}>
      <Formik
          initialValues={{
            subModuleID: '',
            subtaskname: '',
            subphase: '',
            subtaskcategory: '',
            subissuetype:'',
            substartdate: '',
            subenddate:'',
            subestimatedhrs:'',
            subPriority:'',
            subtaskstatus:'',
          }}
          validationSchema={Popupvalidate}
          onSubmit={popupvalues => {
            console.log(popupvalues);
            var substartdate = moment(popupvalues.substartdate).format("MM/DD/YYYY")
            var subenddate = moment(popupvalues.subenddate).format("MM/DD/YYYY")
            var subModuleID	=	document.getElementById('subModuleID').value;
            var subPhaseID	=	document.getElementById('subPhaseID').value;
            var subTaskCategoryID	=	document.getElementById('subTaskCategoryID').value;
            var subModuleTypeID	=	document.getElementById('subModuleTypeID').value;
            var subPriority	=	document.getElementById('subPriority').value;
            var subtaskstatus	=	document.getElementById('subtaskstatus').value;
            // var system_ton	=	document.getElementById('system_ton').value;
            var active = document.getElementById('CheckBox1').checked;
            var Billable = document.getElementById('CheckBox2').checked;
            console.log('Billable', Billable)
            var popinsert = 'https://helpdeskservice.desss-portfolio.com/api/InsertSubModule/InsertData?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID+'&ModuleID='+subModuleID+'&TaskName= '+popupvalues.subtaskname+' &TaskCategory='+subTaskCategoryID+'&Active='+active+'&Billable='+Billable+'&EstStartDate='+substartdate+'&TaskType='+subModuleTypeID+'&EstEndDate='+subenddate+'&EstTotalHours='+popupvalues.subestimatedhrs+'&UserName=sharan&CardviewStatus='+subtaskstatus+'&PhaseDescription='+subPhaseID+'&Priority='+subPriority
            axios.post(popinsert)
            .then(popupinsert => {

              this.submodulegrid();
              this.setState({ showModal1: false });
              console.log('Insert popup',  popupinsert.data.data);
            })
            .catch(error => {
              console.log(error);
            })
          }}
        >

{formik => (
  <Form>
        <table id="Grid_DXPEForm_DXEFT" className="submodule-newpopup" cellSpacing={0} cellPadding={0} border={0} style={{fontFamily: 'Calibri', fontSize: 15, width: '100%', borderCollapse: 'collapse'}}>
          <tbody>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Module <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
                  <Field name="submodulename" id='subModuleID' as="select" style={{width: '100%'}}>
                    <option>--Select--</option>
                    { this.state.submodulelist_data.map((element) => 
                      <option  value={element.subModuleID}>{element.subModuleName}</option>
                    )}
                    </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="submodulename" />
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Task Name <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subtaskname" type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="subtaskname" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Phase <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
                <Field name="subphase" id='subPhaseID' as="select" style={{width: '100%'}} >
                <option>--Select--</option>
                    { this.state.subphaselist_data.map((element) => 
                      <option  value={element.subPhaseID}>{element.subPhaseDescription}</option>
                    )}
                    </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subphase" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Task Category <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subtaskcategory" id='subTaskCategoryID' as="select" style={{width: '100%'}} >
              <option>--Select--</option>
                    { this.state.subtaskcategorylist_data.map((element) => 
                      <option  value={element.subTaskCategoryID}>{element.subtaskcategorydescription}</option>
                    )}
                    </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subtaskcategory" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Issue type <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subissuetype" id='subModuleTypeID' as="select" style={{width: '100%'}} >
                    <option>--Select--</option>
                    { this.state.SubModIssueType_data.map((element) => 
                      <option  value={element.subModuleTypeID}>{element.subModuleTypeName}</option>
                    )}
                    </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subissuetype" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Start Date <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              {/* <input id="dateRequired" type="date" name="dateRequired" style={{fontFamily: 'Calibri', fontSize: 14}} /> */}
              <Field name="substartdate" id="dateRequired" type="date" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="substartdate" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>End Date <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subenddate"  id="dateRequired" type="date" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="subenddate" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Estimated Hours <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subestimatedhrs" type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="subestimatedhrs" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Priority</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
                <Field name="subPriority" id='subPriority' as="select" style={{width: '100%'}} >
                    <option selected="selected" value="">--Select--</option>
                    <option value={'Low'}>Low</option>
                    <option value={'Medium'}>Medium</option>       
                    <option value={'High'}>High</option>       
                    <option value={'Critical'}>Critical</option>       
                </Field>
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="subPriority" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Task Status <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
                  <Field name="subtaskstatus" id='subtaskstatus' as="select" style={{width: '100%'}} >
                  <option selected="selected" value="">--Select--</option>
                    <option value={'Unassigned'}>Unassigned</option>
                    <option value={'Assigned'}>Assigned</option>
                    <option value={'InProgress'}>InProgress</option>
                    <option value={'Completed'}>Completed</option>
                  </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subtaskstatus" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Active</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}><input id="CheckBox1" type="checkbox" name="ctl00$MainContent$wzdEmpDetails$CheckBox1" /></td>
            </tr>
            <tr>
            <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>IsBillable</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}><input id="CheckBox2" type="checkbox" name="ctl00$MainContent$wzdEmpDetails$CheckBox1" /></td>
            </tr>
          </tbody>
          <div className='popup-update'>
            <button type='submit'>Save</button>
            <button onClick={this.handleCloseModal1}>Close</button>
          </div>
        </table>
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

  {/* New end */}


{/* Edit  */}

{this.state.showModal2 && (
          <div className="popup-create">
            
          <div className='popup-body'>
        <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 498, cursor: 'default', display: 'table', visibility: 'visible'}}>
  <div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
    <div className="dxpc-headerContent" style={{float:'left'}}>
      <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Edit Submodule</span>
    </div>
    <button className='popup-closebtn' onClick={this.handleCloseModal2} style={{float:'right'}}>X</button>
    <b className="dx-clear" />
  </div><div className="dxpc-contentWrapper" >
    <div className="dxpc-content" style={{fontFamily: 'Calibri', fontSize: 15, padding: 0, display: 'block'}} id="Grid_DXPEForm_PWC-1">
      <div className="dxgvPopupEditForm_Office2003Blue" style={{overflowX: 'hidden'}}>
      <Formik
          initialValues={{
            subeditmodulename:this.state.submoduleprjtaskid1.ModuleID,
            subedittaskname: this.state.submoduleprjtaskid1.TaskName,
            subeditticketno: this.state.submoduleprjtaskid1.TicketNo,
            subeditphase: this.state.submoduleprjtaskid1.PhaseDescription,
            subedittaskcategory: this.state.submoduleprjtaskid1.TaskCategory,
            subeditissuetype: this.state.submoduleprjtaskid1.TaskType,
            subeditstartdate: this.state.submoduleprjtaskid1.EstStartDate,
            subeditenddate: this.state.submoduleprjtaskid1.EstEndDate,
            subedittotalhours: this.state.submoduleprjtaskid1.EstTotalHours,
            subeditPriority: this.state.submoduleprjtaskid1.Priority,
            subedittaskstatus: this.state.submoduleprjtaskid1.CardviewStatus,
          }}
          validationSchema={Editpopupvalidate}
          onSubmit={popupeditvalues => {
            console.log(popupeditvalues);
            console.log('sub module Edit Datas', this.state.submoduleprjtaskid1);
            var startdate =  document.getElementById('editsubmodulestartdate1').value;
            var enddate =  document.getElementById('editsubmoduleenddate1').value;
            var Editpopup = 'https://helpdeskservice.desss-portfolio.com/api/UpdateSubModule/ProjectTaskUpdate?CompanyID='+this.state.LoginDatas.CompanyID+'&ProjectID='+this.state.projectdetailsprojectID+'&UserName=sharan&PrjTaskID='+this.state.submoduleprjtaskid1.PrjTaskID+'&ModuleID='+popupeditvalues.subeditmodulename+'&TaskName='+popupeditvalues.subedittaskname+'&TaskCategory='+popupeditvalues.subedittaskcategory+'&TaskType='+popupeditvalues.subeditissuetype+'&Active=true&Billable=true&TicketNo='+popupeditvalues.subeditticketno+'&EstTotalHours='+popupeditvalues.subedittotalhours+'&Priority='+popupeditvalues.subeditPriority+'&PhaseDescription='+popupeditvalues.subeditphase+'&EstStartDate='+startdate+'&EstEndDate='+enddate+'&CardViewStatus='+popupeditvalues.subedittaskstatus+'';
            axios.post(Editpopup)
            .then(Editpopup => {
              this.setState({ showModal2: false });
              this.submodulegrid();
              console.log('Editpopup Project',  Editpopup.data.data);
            })
            .catch(error => {
              console.log(error);
            })
          }}
        >

{formik => (
  <Form>
        <table id="Grid_DXPEForm_DXEFT" className="submodule-newpopup" cellSpacing={0} cellPadding={0} border={0} style={{fontFamily: 'Calibri', fontSize: 15, width: '100%', borderCollapse: 'collapse'}}>
          <tbody><tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Module <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subeditmodulename" defaultValue={this.state.submoduleprjtaskid1.ModuleID} id='subModuleID' as="select" style={{width: '100%'}}>
                    <option>--Select--</option>
                    { this.state.submodulelist_data.map((element) => 
                      <option  value={element.subModuleID}>{element.subModuleName}</option>
                    )}
                    </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subeditmodulename" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor6_I">Task Name <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subedittaskname" defaultValue={this.state.submoduleprjtaskid1.TaskName} type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="subedittaskname" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor7_I">Ticket No</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
                <Field name="subeditticketno" id='subPhaseID' defaultValue={this.state.submoduleprjtaskid1.TicketNo} style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="subeditticketno" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor8_I">Phase <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subeditphase" id='subPhaseID' defaultValue={this.state.submoduleprjtaskid1.PhaseDescription} as="select" style={{width: '100%'}} >
                <option>--Select--</option>
                    { this.state.subphaselist_data.map((element) => 
                      <option  value={element.subPhaseID}>{element.subPhaseDescription}</option>
                    )}
                    </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subeditphase" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor9_I">Task Category <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subedittaskcategory" id='subTaskCategoryID' defaultValue={this.state.submoduleprjtaskid1.TaskCategory} as="select" style={{width: '100%'}} >
              <option>--Select--</option>
                    { this.state.subtaskcategorylist_data.map((element) => 
                      <option  value={element.subTaskCategoryID}>{element.subtaskcategorydescription}</option>
                    )}
                    </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subedittaskcategory" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor10_I">Issue type <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subeditissuetype" id='subModuleTypeID' defaultValue={this.state.submoduleprjtaskid1.TaskType} as="select" style={{width: '100%'}} >
                    <option>--Select--</option>
                    { this.state.SubModIssueType_data.map((element) => 
                      <option  value={element.subModuleTypeID}>{element.subModuleTypeName}</option>
                    )}
                    </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subeditissuetype" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr style={{display:'flex'}}>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor12_I">Start Date <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%',display: "flex",flexDirection: "row-reverse"}}>
              <input name="editsubmodulestartdate1" onChange={this.onChangeeditsubmodulestartdate} type="date" style={{width: '8%'}} />
              <input name="subeditstartdate" id="editsubmodulestartdate1" defaultValue={this.state.subEditpopupstart} type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="subeditstartdate" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr style={{display:'flex'}}>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor13_I">End Date <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%',display: "flex",flexDirection: "row-reverse"}}>
              <input name="editsubmoduleenddate1" onChange={this.onChangeeditsubmoduleenddate} type="date" style={{width: '8%'}} />
              <input name="subeditenddate" id="editsubmoduleenddate1" defaultValue={this.state.subEditpopupend} type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="subeditenddate" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor14_I">Estimated Hours <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subedittotalhours" defaultValue={this.state.submoduleprjtaskid1.EstTotalHours} type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className="form-label text-danger" name="subedittotalhours" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor11_I">Priority</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subeditPriority" id='subPriority' defaultValue={this.state.submoduleprjtaskid1.Priority} as="select" style={{width: '100%'}} >
                    <option selected="selected" value="">--Select--</option>
                    <option value={'Low'}>Low</option>
                    <option value={'Medium'}>Medium</option>       
                    <option value={'High'}>High</option>       
                    <option value={'Critical'}>Critical</option>       
                </Field>
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label' htmlFor="Grid_DXPEForm_DXEditor17_I">Task Status <span style={{color: 'Red'}}>*</span></label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="subedittaskstatus" id='subtaskstatus' defaultValue={this.state.submoduleprjtaskid1.CardviewStatus} as="select" style={{width: '100%'}} >
                  <option selected="selected" value="">select</option>
                    <option value={'Unassigned'}>Unassigned</option>
                    <option value={'Assigned'}>Assigned</option>
                    <option value={'InProgress'}>InProgress</option>
                    <option value={'Completed'}>Completed</option>
                  </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="subedittaskstatus" />
                {/* <input className="dxeEditArea_Office2003Blue dxeEditAreaSys " name="ctl00$MainContent$wzdEmpDetails$Grid$DXPEForm$DXEditor5" id="Grid_DXPEForm_DXEditor5_I" type="text" style={{height: 15}} autoComplete="off" /> */}
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Active</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}><input id="CheckBox1" type="checkbox" name="ctl00$MainContent$wzdEmpDetails$CheckBox1" /></td>
            </tr>
            <tr>
            <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>IsBillable</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}><input id="CheckBox2" type="checkbox" name="ctl00$MainContent$wzdEmpDetails$CheckBox1" /></td>
            </tr>
          </tbody>
          <div className='popup-update'>
            <button type='submit'>Update</button>
            <button onClick={this.handleCloseModal2}>Close</button>
          </div>
        </table>
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

  {/* Edit End */}


{/* Module edit popup */}

  {this.state.showModal3 && (
          <div className="popup-create">
          <div className='popup-body'>
        <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 498, cursor: 'default', visibility: 'visible',overflow:"auto",minHeight: "300px", maxHeight: "500px"}}>
  <div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
    <div className="dxpc-headerContent" style={{float:'left'}}>
      <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Edit Form</span>
    </div>
    <button class="popup-closebtn" onClick={this.handleCloseModal3} style={{float:'right'}}>X</button>
    <b className="dx-clear" />
  </div><div className="dxpc-contentWrapper" >
    <div className="dxpc-content" style={{fontFamily: 'Calibri', fontSize: 15, padding: 0, display: 'block'}} id="Grid_DXPEForm_PWC-1">
      <div className="dxgvPopupEditForm_Office2003Blue"  style={{overflowX: 'hidden'}}>
      <Formik
          initialValues={{
            editmodulename:this.state.editmodulegrid1.ModuleName,
            editmodulecompleted:this.state.editmodulegrid1.Completed,
            editmodulestartdate:this.state.editmodulegrid1.EstStartDate,
            editmoduleenddate:this.state.editmodulegrid1.EstEndDate,
            editmoduleFinaldate:this.state.editmodulegrid1.FinalEndDate,
            editmoduleActualhours:this.state.editmodulegrid1.ActTotalHours,
            editmoduleEstTotalHours:this.state.editmodulegrid1.EstTotalHours,
          }}
          validationSchema={ModuleEditpopupvalidate}
          onSubmit={moduleeditpopupvalues => {
            console.log('moduleeditpopupvalues', moduleeditpopupvalues);
            var startdate =  document.getElementById('editmodulestartdate1').value;
            var enddate =  document.getElementById('editmoduleenddate1').value;
            var Finaldate =  document.getElementById('editmoduleFinaldate1').value;
            var moduleeditpopinsert = 'https://helpdeskservice.desss-portfolio.com/api/UpdateModule/Update?ProjectID='+this.state.editmodulegrid1.ProjectID+'&ModuleID='+this.state.editmodulegrid1.ModuleID+'&CompanyID='+this.state.LoginDatas.CompanyID+'&ModuleName='+moduleeditpopupvalues.editmodulename+'&EstTotalHours='+moduleeditpopupvalues.editmoduleEstTotalHours+'&EstStartDate='+startdate+'&EstEndDate='+enddate+'&FinalEndDate='+Finaldate+'&ActTotalHours='+moduleeditpopupvalues.editmoduleActualhours+'&UserName=sharan'
            axios.post(moduleeditpopinsert)
            .then(moduleeditpopinsert => {
              this.modulelistgrid();
              this.setState({ showModal3: false });
              console.log('Module edit popup',  moduleeditpopinsert.data.data);
            })
            .catch(error => {
              console.log(error);
            })
          }}
        >

{formik => (
  <Form>
        <table id="Grid_DXPEForm_DXEFT" class="submodule-newpopup" cellSpacing={0} cellPadding={0} border={0} style={{fontFamily: 'Calibri', fontSize: 15, width: '100%', borderCollapse: 'collapse'}}>
          <tbody><tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Module *</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
                <Field name="editmodulename" defaultValue={this.state.editmodulegrid1.ModuleName} type="text" id='subModuleID' style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="editmodulename" />
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Completed</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="editmodulecompleted" defaultValue={this.state.editmodulegrid1.TotalHrs} type="number" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="editmodulecompleted" />
              </td>
            </tr>
            <tr style={{display:'flex'}}>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Start Date</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%',display: "flex",flexDirection: "row-reverse"}}>
              {/* <p>Default Date: {this.state.EstStartDate}</p> */}
              {/* <DatePicker name="editmodulestartdate" selected={this.state.EstStartDate} style={{width: '100%'}} dateFormat="dd-mm-yyyy"/> */}
              <input name="editmodulestartdate1" onChange={this.onChangeeditmodulestartdate} type="date" style={{width: '8%'}} />
              <input name="editmodulestartdate" id='editmodulestartdate1'  defaultValue={this.state.editmodulegrid1start} type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="editmodulestartdate" /> 
              </td>
            </tr>
            <tr style={{display:'flex'}}>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>End Date</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%',display: "flex",flexDirection: "row-reverse"}}>
              {/* <DatePicker  name="editmoduleenddate"  selected={this.state.EstEndDate} style={{width: '100%'}} dateFormat="dd-mm-yyyy"/> */}
              <input name="editmoduleenddate1" onChange={this.onChangeeditmoduleenddate} type="date" style={{width: '8%'}} />
              <input name="editmoduleenddate" id="editmoduleenddate1" defaultValue={this.state.editmodulegrid1end} type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="editmoduleenddate" />
              </td>
            </tr>
            <tr style={{display:'flex'}}>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Final Date</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%',display: "flex",flexDirection: "row-reverse"}}>
              {/* <DatePicker  name="editmoduleFinaldate"  selected={this.state.FinalEndDate} style={{width: '100%'}} dateFormat="dd-mm-yyyy"/> */}
              <input name="editmoduleFinaldate1" onChange={this.onChangeeditmodulefinaldate} type="date" style={{width: '8%'}} />
              <input name="editmoduleFinaldate" id="editmoduleFinaldate1" defaultValue={this.state.editmodulegrid1final} type="text" style={{width: '100%'}} />
                  <ErrorMessage component="label" className=" form-label text-danger" name="editmoduleFinaldate" />
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Actual Hours</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="editmoduleActualhours" defaultValue={this.state.editmodulegrid1.ActTotalHours} type="number" style={{width: '100%'}} />
                  <ErrorMessage component="label" className="form-label text-danger" name="editmoduleActualhours" />
              </td>
            </tr>
            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Estimated Hours</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="editmoduleEstTotalHours" defaultValue={this.state.editmodulegrid1.EstTotalHours} type="number" style={{width: '100%'}} />
                  <ErrorMessage component="label" className="form-label text-danger" name="editmoduleEstTotalHours" />
              </td>
            </tr>
          </tbody>
        </table>

       <div class="popup-update">
        <button type='submit' onClick={this.test} >Update</button>
        <button onClick={this.handleCloseModal3}>Close</button>
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

{/* Module edit popup  end*/}


{/* Modal For Grid Task Allot Start */}

{this.state.TaskAllotModalShow && (
          <div className="popup-create">
          <div className='popup-body'>
        <div id="Grid_DXPEForm_PW-1" className="dxpcLite_Office2003Blue dxpclW dxpc-mainDiv dxpc-shadow" style={{fontFamily: 'Calibri',padding: '20px', fontSize: 15, width: 498, cursor: 'default', visibility: 'visible',overflow:"auto",minHeight: "300px", maxHeight: "500px"}}>
  <div className="popup-header" style={{fontFamily: 'Calibri', fontSize: 15,width: "100%" , display: "inline-block"}} id="Grid_DXPEForm_PWH-1">
    <div className="dxpc-headerContent" style={{float:'left'}}>
      <span className="dxpc-headerText" id="Grid_DXPEForm_PWH-1T">Edit Form</span>
    </div>
    <button class="popup-closebtn" onClick={this.TaskAllotModalCloseMethod} style={{float:'right'}}>X</button>
    <b className="dx-clear" />
  </div><div className="dxpc-contentWrapper" >
    <div className="dxpc-content" style={{fontFamily: 'Calibri', fontSize: 15, padding: 0, display: 'block'}} id="Grid_DXPEForm_PWC-1">
      <div className="dxgvPopupEditForm_Office2003Blue"  style={{overflowX: 'hidden'}}>
      <Formik
          initialValues={{
            // Taskdate:this.state.EditTaskAllotDatas.TaskDate,
            Projectname:this.state.EditTaskAllotDatas.ProjectName,
            Modulename:this.state.EditTaskAllotDatas.ModuleName,
            Screenname1:this.state.EditTaskAllotDatas.TaskName,
            Task:this.state.EditTaskAllotDatas.Task,
            Board:this.state.EditTaskAllotDatas.BoardID,
            Scrum:this.state.EditTaskAllotDatas.SprintID,
            Assingedby:this.state.EditTaskAllotDatas.AssignedByID,
            Assingedto:this.state.EditTaskAllotDatas.AssignedToID,
            Tasktype:this.state.EditTaskAllotDatas.TaskType,
            Hours:this.state.EditTaskAllotDatas.AllotedHrs,
            // DocCount:this.state.EditTaskAllotDatas.DocCount,
            Taskstatus:this.state.EditTaskAllotDatas.TaskStatusID,
            // Notes:this.state.EditTaskAllotDatas.Notes,
            // Billable:this.state.EditTaskAllotDatas.Billable,
            // Eststartdate:this.state.EditTaskAllotDatas.EstStartDate,
            // Estenddate:this.state.EditTaskAllotDatas.EstEndDate,
          }}
          validationSchema={TaskAllotPopUpvalidation}
          onSubmit={Values => {
            console.log('moduleeditpopupvalues', Values);
            var DocCount = document.getElementById('DocCount').value;
            var Billable = document.getElementById('IsBillable').checked;
            var Notes = document.getElementById('Notes1').value;
            var TaskDate = document.getElementById('GridAllotTaskDate').value;
            var StartDate = document.getElementById('EstdStartDate').value;
            var EndDate = document.getElementById('EstdEndDate').value;
            var EditTask = 'https://helpdeskservice.desss-portfolio.com/api/GridAllotProjectUpdate/UpdateGridAllot?PrjTaskAllotID='+ this.state.PrjTaskAllotID +'&CompanyID='+ this.state.LoginDatas.CompanyID +'&ProjectID=' + this.state.EditprojectDatas.ProjectID + '&ModuleID='+this.state.ModuleID+'&AllotedHrs='+Values.Hours+'&DocCount='+DocCount+'&EmpID='+ Values.Assingedto +'&TaskStausID='+Values.Taskstatus+'&TaskName='+Values.Screenname1+'&Assignedto='+Values.Assingedby+'&TaskType='+Values.Tasktype+'&Billable='+Billable+'&Task='+Values.Task+'&Notes='+Notes+'&TaskCategoryID='+Values.Tasktype+'&SubModuleID='+this.state.Project_Task_Id+'&TaskDate='+TaskDate+'&UserName='+this.state.LoginDatas.EmpName+'&EstdStartDate='+StartDate+'&EstdEndDate='+EndDate+'&SprintID='+Values.Scrum+'&BoardID=' + Values.Board;
            axios.post(EditTask)
            .then(EditTaskUpdate => {
               this.setState({ TaskAllotModalShow: false });
               Swal.fire({
                icon: "success",
                title: "Updated Successfully",
                showConfirmButton: false,
                timer: 1500
              });

               this.SearchMethod();
              console.log('EditTaskUpdate',  EditTaskUpdate.data.data);
            })
            .catch(error => {
             this.setState({ TaskAllotModalShow: false });
              console.log(error);
              this.SearchMethod();
            })
          }}
        >

{formik => (
   <Form>
        <table id="Grid_DXPEForm_DXEFT" class="submodule-newpopup" cellSpacing={0} cellPadding={0} border={0} style={{fontFamily: 'Calibri', fontSize: 15, width: '100%', borderCollapse: 'collapse'}}>
          <tbody>
            <tr style={{display:'flex'}}>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Task Date</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%',display: "flex",flexDirection: "row-reverse"}}>

              <input name="editmoduleFinaldate1" onChange={this.GridAllotTaskDateChange} type="date" style={{width: '8%'}} />
              <input name="editmoduleFinaldate" id="GridAllotTaskDate" defaultValue={this.state.EditTaskAllotDatas.TaskDate} type="text" style={{width: '100%'}} readOnly/>

                {/* <Field name="Taskdate" defaultValue={this.state.EditTaskAllotDatas.TaskDate} type="text" id='Taskdate' style={{width: '100%'}} /> */}
                  {/* <ErrorMessage component="label" className=" form-label text-danger" name="Taskdate" /> */}
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Project Name</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="Projectname" defaultValue={this.state.EditTaskAllotDatas.ProjectName} type="text" style={{width: '100%'}} readOnly/>
                  <ErrorMessage component="label" className=" form-label text-danger" name="Projectname" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Module Name</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              {/* <p>Default Date: {this.state.EstStartDate}</p> */}
              {/* <DatePicker name="edittaskallotstartdate" selected={this.state.EstStartDate} style={{width: '100%'}} dateFormat="dd-mm-yyyy"/> */}
              <Field name="Modulename" id="Modulename" defaultValue={this.state.EditTaskAllotDatas.ModuleName} type="text" style={{width: '100%'}} readOnly/>
                  <ErrorMessage component="label" className=" form-label text-danger" name="Modulename" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>WebPage/Screen Name</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="Screenname1" id="Screenname1" defaultValue={this.state.EditTaskAllotDatas.TaskName} type="text" style={{width: '100%'}} readOnly/>
                  <ErrorMessage component="label" className=" form-label text-danger" name="Screenname1" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Task</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              {/* <DatePicker  name="editmoduleFinaldate1"  selected={this.state.FinalEndDate} style={{width: '100%'}} dateFormat="dd-mm-yyyy"/> */}
              <Field name="Task" id="Task" defaultValue={this.state.EditTaskAllotDatas.Task} type="text" style={{width: '100%'}} readOnly/>
                  <ErrorMessage component="Task" className=" form-label text-danger" name="Task" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Board</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="Board" id='Board' as="select" style={{width: '100%'}} >
              <option>--Select--</option>
                    { this.state.BoardDatas.map((element) => 
                      <option  value={element.BoardID}>{element.BoardName}</option>
                    )}
                    </Field>                  
                    <ErrorMessage component="label" className="form-label text-danger" name="Board" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Scrum</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="Scrum" id='Scrum' as="select" style={{width: '100%'}} >
              <option>--Select--</option>
                    { this.state.SprintDatas.map((element) => 
                      <option  value={element.SprintID}>{element.SprintName}</option>
                    )}
              </Field>
               <ErrorMessage component="label" className="form-label text-danger" name="Scrum" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Assinged By</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="Assingedby" id='Assingedby' as="select" style={{width: '100%'}} >
              <option>--Select--</option>
                    { this.state.AssingedbyDatas.map((element) => 
                      <option  value={element.EmpID}>{element.EmpName}</option>
                    )}
              </Field>
               <ErrorMessage component="label" className=" form-label text-danger" name="Assingedby" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Assinged To</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="Assingedto" id='Assingedto' as="select" style={{width: '100%'}} >
              <option>--Select--</option>
                    { this.state.AssingedToDatas.map((element) => 
                      <option  value={element.EmpID}>{element.EmpName}</option>
                    )}
              </Field>
               <ErrorMessage component="label" className=" form-label text-danger" name="Assingedto" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Task Type</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="Tasktype" id='Tasktype' as="select" style={{width: '100%'}} selected={this.state.EditTaskAllotDatas.TaskType}>
              <option>--Select--</option>
                    { this.state.TaskTypeDatas.map((element) => 
                      <option  value={element.ModuleTypeID}>{element.ModuleTypeName}</option>
                    )}
              </Field>
                  <ErrorMessage component="label" className=" form-label text-danger" name="Tasktype" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Hours</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              {/* <DatePicker  name="editmoduleFinaldate1"  selected={this.state.FinalEndDate} style={{width: '100%'}} dateFormat="dd-mm-yyyy"/> */}
              <Field name="Hours" id="Hours" defaultValue={this.state.EditTaskAllotDatas.Hours} type="number" style={{width: '100%'}}/>
                  <ErrorMessage component="Hours" className=" form-label text-danger" name="Hours" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Doc Count</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              {/* <DatePicker  name="editmoduleFinaldate1"  selected={this.state.FinalEndDate} style={{width: '100%'}} dateFormat="dd-mm-yyyy"/> */}
              <input name="DocCount" id="DocCount" defaultValue={this.state.DocCount} type="number" style={{width: '100%'}}/>
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Task Status</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
              <Field name="Taskstatus" id='Taskstatus' as="select" style={{width: '100%'}} defaultValue={this.state.EditTaskAllotDatas.TaskStatusID}>
              <option>--Select--</option>
                    { this.state.TaskstatusDatas.map((element) => 
                      <option  value={element.TaskStatusID}>{element.TaskStatusDescription}</option>
                    )}
              </Field>
              {/* <Field name="Taskstatus" id="Taskstatus" defaultValue={this.state.EditTaskAllotDatas.TaskStatus} type="text" style={{width: '100%'}}/> */}
                  <ErrorMessage component="Taskstatus" className=" form-label text-danger" name="Taskstatus" />
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Notes</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
               <textarea  name="Notes1" id='Notes1' type="textarea" defaultValue={this.state.Notes1} style={{width: '100%'}} />  
              {/* <Field name="Notes" id="Notes" defaultValue={this.state.EditTaskAllotDatas.Notes} type="text" style={{width: '100%'}}/>
                  <ErrorMessage component="Notes" className=" form-label text-danger" name="Notes" /> */}
              </td>
            </tr>

            <tr>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>IsBillable</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%'}}>
                <input name="IsBillable" id='IsBillable' onChange={this.IsBillableChange} checked={this.state.IsBillable === true} type="checkbox" style={{width: '8%'}} />  
              {/* <Field name="Billable" id="Billable" checked={this.state.EditTaskAllotDatas.Billable} type="checkbox" style={{width: '100%'}}/>
                  <ErrorMessage component="Billable" className=" form-label text-danger" name="Billable" /> */}
              </td>
            </tr>

            <tr style={{display:'flex'}}>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Estd.Start Date</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%',display: "flex",flexDirection: "row-reverse"}}>

              <input name="editmoduleFinaldate1" onChange={this.EstdStartDateChange} type="date" style={{width: '8%'}} />
              <input name="editmoduleFinaldate" id="EstdStartDate" defaultValue={this.state.EditTaskAllotDatas.EstStartDate} type="text" style={{width: '100%'}} readOnly/>

              </td>
            </tr>

            <tr style={{display:'flex'}}>
              <td className="dxgvEditFormCaption_Office2003Blue">
                <label className='popup-label'>Estd.End Date</label>
              </td>
              <td className="dxgvEditFormCell_Office2003Blue" colSpan={1} rowSpan={1} style={{width: '100%',display: "flex",flexDirection: "row-reverse"}}>

              <input name="editmoduleFinaldate1" onChange={this.EstdEndDateChange} type="date" style={{width: '8%'}} />
              <input name="editmoduleFinaldate" id="EstdEndDate" defaultValue={this.state.EditTaskAllotDatas.EstEndDate} type="text" style={{width: '100%'}} readOnly/>

              </td>
            </tr>

          </tbody>
        </table>

       <div class="popup-update">
        <button type='submit' onClick={this.test} >Update</button>
        <button onClick={this.TaskAllotModalCloseMethod}>Close</button>
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
{/* Modal For Grid Task Allot End */}

        </div>
      </div>
    )
  }
}

export default createproject