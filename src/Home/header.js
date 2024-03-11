import React, { Component } from 'react'
import logohp1 from '../images/zmthd_logo.png'
import axios from 'axios';

export class Header extends Component {
	constructor() {
		super();
		this.state = {
		  TapName: '/home',
		  LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
	  };
	}
componentDidMount(){
	
	console.log('Pathname', window.location.pathname);
	var tap = window.location.pathname;
	this.setState({ TapName: window.location.pathname});
	console.log('TapName', this.state.LoginDatas.UserType);

	axios.get('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/GetClientprofile?ClientID='+this.state.LoginDatas.ClientID+'&ClientUserID=' + this.state.LoginDatas.ClientUserID)
    .then(response => {
    var data = response.data.data[0];
    localStorage.setItem("ClientprofileData", JSON.stringify(data));
    })
   .catch(error => {
    console.log('error', error);
    })

}
LoginMethod(){
	let auth = false;
	localStorage.setItem("auth", JSON.stringify(auth));
	this.props.history.push('/login');
}
// LoginMethod(){
	
// 	this.props.history.push('/login');
// }
  render() {
    return (
      <div>
        <div id="wrapper">
        <div class="fixed-header">
            <div id="header" className="top-header" style={{width:"92%",height: "132px"}}>
                <div>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tbody><tr className='img-title'>
                            <td className='img-part'>
                                <img style={{padding: "0px 0px 0px 0px", width: "390px" ,height: "70px" , marginTop: "20px"}} src={logohp1} height="80" width="212" alt="Helpdesk" />
                            </td>
                            <td className='title-part' >
                                <div class="menu">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <tbody><tr>
                                            <td width="100%" valign="top" class="namecls">
                                                <p>
                                                    <a className='header-name'>
                                                        <span id="lblUser" style={{fontfamily:"Calibri",fontSize: "20px"}}>{this.state.LoginDatas.ClientName}</span>
                                                        <span id="lblUser" style={{fontfamily:"Calibri",fontSize: "20px"}}>{this.state.LoginDatas.EmpName}</span>
														<div className='log-out'>
															<a href='/login'>log out</a>
														</div>
                                                    </a>
													{/* <button  onClick={() => { this.LoginMethod(); }}>
													   <span id="lblUser" style={{fontfamily:"Calibri",fontSize: "16px"}}>{this.state.LoginDatas.ClientName}</span>
													</button> */}
                                                    {/* <!--HTML for Flex Drop Down Menu 1--> */}
                                                </p>
                                                
                                            </td>
                                            <td width="71%"></td>
                                        </tr>
                                    </tbody></table>
                                </div>
                            </td>
                        </tr>
                    </tbody></table>
                    <table width="100%" cellpadding="0" cellspacing="0">
                        <tbody><tr>
                            <td style={{paddingleft: "0px", margintop: "20px", verticalalign: "middle"}}>
                                <div class="glossymenu" style={{width:"100%",margintop: "16px"}}>
                                    <table cellspacing="0" cellpadding="0" id="MMenuBar" border="0" style={{height:"38px",width:"100%",bordercollapse:"collapse",bordercollapse:"separate"}}>
	<tbody><tr>
		<td class="dxmMenu_Aqua" valign="top" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}><table cellspacing="0" cellpadding="0" border="0" style={{height: "36px", width:" 100%", bordercollapse: "separate"}}>
			<tbody><tr>
				<div class="header">
				  	<input class="menu-btn" type="checkbox" id="menu-btn" />
				  	<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
				  	<ul class="menu">
				
				{this.state.LoginDatas.UserType === 'User' || this.state.LoginDatas.UserType === 'Admin' ?  (
                <li id="MMenuBar_DXI11_T" class="dxmMenuItem_Aqua dxmIFC dxmILC" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",cursor:"pointer",textAlign:"Center",verticalalign:"Middle"}}><a href="/home" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Home</a></li>
                ) : (
					''
				)}
               {/* {this.state.LoginDatas.UserType === 'Admin' ? (
                <li id="MMenuBar_DXI11_T" class="dxmMenuItem_Aqua dxmIFC dxmILC" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",cursor:"pointer",textAlign:"Center",verticalalign:"Middle"}}><a href="/home" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Home</a></li>
                ) : (
					''
				)} */}
				{this.state.LoginDatas.UserType === 'Client' ? (
                <li id="MMenuBar_DXI11_T" class="dxmMenuItem_Aqua dxmIFC dxmILC" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",cursor:"pointer",textAlign:"Center",verticalalign:"Middle"}}><a href="/tickets" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Tickets</a></li>
                ) : (
					''
				)}
				{this.state.LoginDatas.UserType === 'Client' ? (
                <li id="MMenuBar_DXI11_T" class="dxmMenuItem_Aqua dxmIFC dxmILC" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",cursor:"pointer",textAlign:"Center",verticalalign:"Middle"}}><a href="/profile" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Profile</a></li>
                ) : (
					''
				)}
				{this.state.LoginDatas.UserType === 'Admin' ? (
                <li id="MMenuBar_DXI11_T" class="dxmMenuItem_Aqua dxmIFC dxmILC" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",cursor:"pointer",textAlign:"Center",verticalalign:"Middle"}}><a href="/project" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Project</a></li>
                ) : (
					''
				)}
				{this.state.LoginDatas.UserType === 'Admin' ? (
                <li id="MMenuBar_DXI11_T" class="dxmMenuItem_Aqua dxmIFC dxmILC" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",cursor:"pointer",textAlign:"Center",verticalalign:"Middle"}}><a href="/board" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Board</a></li>
                ) : (
					''
				)}
				{this.state.LoginDatas.UserType === 'Admin' ? (
                <li id="MMenuBar_DXI11_T" class="dxmMenuItem_Aqua dxmIFC dxmILC" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",cursor:"pointer",textAlign:"Center",verticalalign:"Middle"}}><a href="/sprint" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Sprint</a></li>
                ) : (
					''
				)}
				{this.state.LoginDatas.UserType === 'Admin' ? (
                <li id="MMenuBar_DXI11_T" class="dxmMenuItem_Aqua dxmIFC dxmILC" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",cursor:"pointer",textAlign:"Center",verticalalign:"Middle"}}><a href="/backloglist" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Back log list</a></li>
                ) : (
					''
				)}
				</ul>
				</div>
				{/* <td id="MMenuBar_DXI11_T" class="dxmMenuItem_Aqua dxmIFC dxmILC" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",cursor:"pointer",textAlign:"Center",verticalalign:"Middle"}}><a href="/Project" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Project</a></td> */}

			</tr>
		</tbody></table></td>
	</tr>
</tbody></table><div id="MMenuBar_DXM0_" style={{position:"absolute",left:"0px",top:"0px",zindex:"20000",visibility:"hidden",display:"none"}}>
	<table id="MMenuBar_DXMST0_" cellspacing="0" cellpadding="0" border="0" style={{bordercollapse:"collapse",bordercollapse:"separate",position:"relative"}}>
		<tbody><tr>
			<td class="dxmSubMenu_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}><table cellspacing="0" cellpadding="0" border="0" style={{bordercollapse:"collapse",bordercollapse:"separate"}}>
				<tbody><tr id="MMenuBar_DXI0i0_" onclick="aspxMIClick(event, 'MMenuBar', '0i0')">
					<td id="MMenuBar_DXI0i0_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="Projects/ProjectDetails.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>New Project</a></td>
				</tr><tr id="MMenuBar_DXI0i0_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI0i1_" onclick="aspxMIClick(event, 'MMenuBar', '0i1')">
					<td id="MMenuBar_DXI0i1_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="Projects/ModuleDetails.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>New Module</a></td>
				</tr><tr id="MMenuBar_DXI0i1_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI0i2_" onclick="aspxMIClick(event, 'MMenuBar', '0i2')">
					<td id="MMenuBar_DXI0i2_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="Projects/TaskNoAllot.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Issues</a></td>
				</tr><tr id="MMenuBar_DXI0i2_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI0i3_" onclick="aspxMIClick(event, 'MMenuBar', '0i3')">
					<td id="MMenuBar_DXI0i3_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="Board.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Board</a></td>
				</tr><tr id="MMenuBar_DXI0i3_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI0i4_" onclick="aspxMIClick(event, 'MMenuBar', '0i4')">
					<td id="MMenuBar_DXI0i4_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="Sprint.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Sprint</a></td>
				</tr>
			</tbody></table></td><td style={{background:"url('/DXR.axd?r=1_27-I60ci') no-repeat left top"}}></td>
		</tr><tr>
			<td style={{background:"url('/DXR.axd?r=1_26-I60ci') no-repeat left top"}}></td><td style={{background:"url('/DXR.axd?r=1_28-I60ci') no-repeat left top;"}}><div style={{height:"5px",width:"5px"}}>

			</div></td>
		</tr>
	</tbody></table>
</div><div id="MMenuBar_DXM2_" style={{position:"absolute",left:"0px",top:"0px",zindex:"20000",visibility:"hidden",display:"none"}}>
	<table id="MMenuBar_DXMST2_" cellspacing="0" cellpadding="0" border="0" style={{bordercollapse:"collapse",bordercollapse:"separate",position:"relative"}}>
		<tbody><tr>
			<td class="dxmSubMenu_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}><table cellspacing="0" cellpadding="0" border="0" style={{bordercollapse:"collapse",bordercollapse:"separate"}}>
				<tbody><tr id="MMenuBar_DXI2i0_" onclick="aspxMIClick(event, 'MMenuBar', '2i0')">
					<td id="MMenuBar_DXI2i0_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="Projects/ProjectEstimation.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Projects</a></td>
				</tr><tr id="MMenuBar_DXI2i0_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI2i1_" onclick="aspxMIClick(event, 'MMenuBar', '2i1')">
					<td id="MMenuBar_DXI2i1_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="Task/EstProjectTaskAllotList.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Alloted Task list</a></td>
				</tr><tr id="MMenuBar_DXI2i1_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI2i2_" onclick="aspxMIClick(event, 'MMenuBar', '2i2')">
					<td id="MMenuBar_DXI2i2_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="Task/TaskList.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Task list</a></td>
				</tr>
			</tbody></table></td><td style={{background:"url('/DXR.axd?r=1_27-I60ci') no-repeat left top"}}></td>
		</tr><tr>
			<td style={{background:"url('/DXR.axd?r=1_26-I60ci') no-repeat left top"}}></td><td style={{background:"url('/DXR.axd?r=1_28-I60ci') no-repeat left top;"}}><div style={{height:"5px",width:"5px"}}>

			</div></td>
		</tr>
	</tbody></table>
</div><div id="MMenuBar_DXM3_" style={{position:"absolute",left:"0px",top:"0px",zindex:"20000",visibility:"hidden",display:"none"}}>
	<table id="MMenuBar_DXMST3_" cellspacing="0" cellpadding="0" border="0" style={{bordercollapse:"collapse",bordercollapse:"separate",position:"relative"}}>
		<tbody><tr>
			<td class="dxmSubMenu_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}><table cellspacing="0" cellpadding="0" border="0" style={{bordercollapse:"collapse",bordercollapse:"separate"}}>
				<tbody><tr id="MMenuBar_DXI3i0_" onclick="aspxMIClick(event, 'MMenuBar', '3i0')">
					<td id="MMenuBar_DXI3i0_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="Projects/ModuleImport.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Module Import</a></td>
				</tr>
			</tbody></table></td><td style={{background:"url('/DXR.axd?r=1_27-I60ci') no-repeat left top"}}></td>
		</tr><tr>
			<td style={{background:"url('/DXR.axd?r=1_26-I60ci') no-repeat left top"}}></td><td style={{background:"url('/DXR.axd?r=1_28-I60ci') no-repeat left top;"}}><div style={{height:"5px",width:"5px"}}>

			</div></td>
		</tr>
	</tbody></table>
</div><div id="MMenuBar_DXM13_" style={{position:"absolute",left:"0px",top:"0px",zindex:"20000",visibility:"hidden",display:"none"}}>
	<table id="MMenuBar_DXMST13_" cellspacing="0" cellpadding="0" border="0" style={{bordercollapse:"collapse",bordercollapse:"separate",position:"relative"}}>
		<tbody><tr>
			<td class="dxmSubMenu_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}><table cellspacing="0" cellpadding="0" border="0" style={{bordercollapse:"collapse",bordercollapse:"separate"}}>
				<tbody><tr id="MMenuBar_DXI13i0_" onclick="aspxMIClick(event, 'MMenuBar', '13i0')">
					<td id="MMenuBar_DXI13i0_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="CardView-Unassigned.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>UnAssigned (Summary)</a></td>
				</tr><tr id="MMenuBar_DXI13i0_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI13i1_" onclick="aspxMIClick(event, 'MMenuBar', '13i1')">
					<td id="MMenuBar_DXI13i1_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="CardView-Assigned.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Assigned (Summary)</a></td>
				</tr><tr id="MMenuBar_DXI13i1_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI13i2_" onclick="aspxMIClick(event, 'MMenuBar', '13i2')">
					<td id="MMenuBar_DXI13i2_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="CardView-Completed.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Completed (Summary)</a></td>
				</tr><tr id="MMenuBar_DXI13i2_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI13i3_" onclick="aspxMIClick(event, 'MMenuBar', '13i3')">
					<td id="MMenuBar_DXI13i3_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="ClosingTask.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Completed Task(Details)</a></td>
				</tr><tr id="MMenuBar_DXI13i3_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI13i4_" onclick="aspxMIClick(event, 'MMenuBar', '13i4')">
					<td id="MMenuBar_DXI13i4_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="TaskList-CardView.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Task Allotment List</a></td>
				</tr><tr id="MMenuBar_DXI13i4_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI13i5_" onclick="aspxMIClick(event, 'MMenuBar', '13i5')">
					<td id="MMenuBar_DXI13i5_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="TimeSheetList-CardView.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>TimeSheet List</a></td>
				</tr><tr id="MMenuBar_DXI13i5_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI13i6_" onclick="aspxMIClick(event, 'MMenuBar', '13i6')">
					<td id="MMenuBar_DXI13i6_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="TaskAllotVTimeSheet-CardView.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>TaskAllotment Vs TimeSheet List</a></td>
				</tr><tr id="MMenuBar_DXI13i6_II" class="dxmSubMenuItemSpacing_Aqua">
					<td colspan="1"></td>
				</tr><tr id="MMenuBar_DXI13i7_" onclick="aspxMIClick(event, 'MMenuBar', '13i7')">
					<td id="MMenuBar_DXI13i7_T" class="dxmSubMenuItem_Aqua" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold",width:"100%",cursor:"pointer"}}><a href="WeeklyTaskList.aspx" style={{fontfamily:"Calibri",fontsize:"14px",fontweight:"bold"}}>Weekly Allotment List</a></td>
				</tr>
			</tbody></table></td><td style={{background:"url('/DXR.axd?r=1_27-I60ci') no-repeat left top"}}></td>
		</tr><tr>
			<td style={{background:"url('/DXR.axd?r=1_26-I60ci') no-repeat left top"}}></td><td style={{background:"url('/DXR.axd?r=1_28-I60ci') no-repeat left top;"}}><div style={{height:"5px",width:"5px"}}>

			</div></td>
		</tr>
	</tbody></table>
</div>

                                </div>
                            </td>
                        </tr>
                    </tbody></table>
                </div>
            </div>
                </div>
                </div>
      </div>
    )
  }
}

export default Header