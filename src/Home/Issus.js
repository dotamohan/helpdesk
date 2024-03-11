import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import empty from '../images/DXR-1.gif'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export class Issus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(), // Initialize with the current date or any default date
    };
  }
  render() {
    return (
      <div>
        <Header />
        <div class="centerBG" >
            <table>
                <tbody>
                    <tr>
                        <td>
                        <table width="100%" border="1px" className="table-inner">
  <tbody>
    <tr>
      <td className="heading_bg">Issue
      </td>
    </tr>
    <tr>
      <td className='issus-body'>
        <span id="msg" style={{color: 'Red', fontFamily: 'Calibri', fontSize: 17, fontWeight: 'bold'}} /><table className="table-inner" width="80%" align="center" style={{borderSpacing: 10, marginLeft: 'auto', paddingRight: 20, marginRight: 'auto', display: 'block'}}>
          <tbody>
            <tr className='mobile-issus'>
              <td style={{width: 150}}>
                <span id="Label1">ISSUE NAME</span>
                <input type="hidden" name="ctl00$MainContent$hfCustomerId" id="hfCustomerId" />
              </td>
              <td>
                <input name="ctl00$MainContent$txtIssueName" type="text" id="txtIssueName" className="textBoxCs" style={{fontFamily: 'Calibri', fontSize: 14, height: 30, width: 350}} />
              </td>
              
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label14">ISSUE TYPE</span>
              </td>
              <td>
                <table className="dxeButtonEdit dropdown-content" cellSpacing={1} cellPadding={0} validationgroup="P" id="ddlIssueType" border={0} style={{height: 35, width: 350}}>
                  <tbody>
                    <tr>
                      <td style={{display: 'none'}}><input id="ddlIssueType_VI" name="ddlIssueType_VI" type="hidden" defaultValue="---Select---" /></td><td className="dxic" onmousedown="return aspxDDDropDown('ddlIssueType', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea dxeEditAreaSys" name="ctl00$MainContent$ddlIssueType" defaultValue="---Select---" id="ddlIssueType_I" onchange="aspxETextChanged('ddlIssueType')" onblur="aspxELostFocus('ddlIssueType')" onfocus="aspxEGotFocus('ddlIssueType')" type="text" onkeydown="aspxEKeyDown('ddlIssueType', event)" style={{fontSize: 14, height: '100%', textAlign: 'Center'}} autoComplete="off" /></td><td id="ddlIssueType_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('ddlIssueType', event)" style={{fontSize: 14, KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                          <tbody><tr>
                              <td className="dx"><img id="ddlIssueType_B-1Img" className="dxEditors_edtDropDown" src={empty} alt="v" /></td>
                            </tr>
                          </tbody></table></td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td>
                <button className="CssBtn" style={{width: 150}}>Add Project</button>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label2">PROJECT NAME</span>
              </td>
              <td colSpan={2}>
                <table className="dxeButtonEdit dropdown-content" cellSpacing={1} cellPadding={0} id="ddlProjectName" border={0} style={{height: 35, width: 350}}>
                  <tbody><tr>
                      <td style={{display: 'none'}}><input id="ddlProjectName_VI" name="ddlProjectName_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('ddlProjectName', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea dxeEditAreaSys" name="ctl00$MainContent$ddlProjectName" defaultValue="---Select---" id="ddlProjectName_I" onchange="aspxETextChanged('ddlProjectName')" onblur="aspxELostFocus('ddlProjectName')" onfocus="aspxEGotFocus('ddlProjectName')" type="text" onkeydown="aspxEKeyDown('ddlProjectName', event)" style={{fontSize: 14, height: '100%', textAlign: 'Center'}} autoComplete="off" /></td><td id="ddlProjectName_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('ddlProjectName', event)" style={{fontSize: 14, KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                          <tbody><tr>
                              <td className="dx"><img id="ddlProjectName_B-1Img" className="dxEditors_edtDropDown" src={empty} alt="v" /></td>
                            </tr>
                          </tbody></table></td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label15">MODULE/EPIC</span>
              </td>
              <td colSpan={2}>
                <table className="dxeButtonEdit dropdown-content" cellSpacing={1} cellPadding={0} id="ddlModule" border={0} style={{height: 35, width: 350}}>
                  <tbody><tr>
                      <td style={{display: 'none'}}><input id="ddlModule_VI" name="ddlModule_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('ddlModule', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea dxeEditAreaSys" id="ddlModule_I" name="ctl00$MainContent$ddlModule" onfocus="aspxEGotFocus('ddlModule')" onblur="aspxELostFocus('ddlModule')" onchange="aspxETextChanged('ddlModule')" onkeydown="aspxEKeyDown('ddlModule', event)" type="text" style={{fontSize: 14, height: '100%', textAlign: 'Center'}} autoComplete="off" /></td><td id="ddlModule_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('ddlModule', event)" style={{fontSize: 14, KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                          <tbody><tr>
                              <td className="dx"><img id="ddlModule_B-1Img" className="dxEditors_edtDropDown" src={empty} alt="v" /></td>
                            </tr>
                          </tbody></table></td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label3">SPRINT</span>
              </td>
              <td colSpan={2}>
                <table className="dxeButtonEdit dropdown-content" cellSpacing={1} cellPadding={0} validationgroup="P" id="ddlWordFlow" border={0} style={{height: 35, width: 350}}>
                  <tbody><tr>
                      <td style={{display: 'none'}}><input id="ddlWordFlow_VI" name="ddlWordFlow_VI" type="hidden" defaultValue="---Select---" /></td><td className="dxic" onmousedown="return aspxDDDropDown('ddlWordFlow', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea dxeEditAreaSys" name="ctl00$MainContent$ddlWordFlow" defaultValue="---Select---" id="ddlWordFlow_I" onchange="aspxETextChanged('ddlWordFlow')" onblur="aspxELostFocus('ddlWordFlow')" onfocus="aspxEGotFocus('ddlWordFlow')" type="text" onkeydown="aspxEKeyDown('ddlWordFlow', event)" style={{fontSize: 14, height: '100%', textAlign: 'Center'}} autoComplete="off" /></td><td id="ddlWordFlow_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('ddlWordFlow', event)" style={{fontSize: 14, KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                          <tbody><tr>
                              <td className="dx"><img id="ddlWordFlow_B-1Img" className="dxEditors_edtDropDown" src={empty} alt="v" /></td>
                            </tr>
                          </tbody></table></td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label4">BOEARD</span>
              </td>
              <td colSpan={2}>
                <table className="dxeButtonEdit dropdown-content" cellSpacing={1} cellPadding={0} validationgroup="P" id="ddlWordFlow" border={0} style={{height: 35, width: 350}}>
                  <tbody><tr>
                      <td style={{display: 'none'}}><input id="ddlWordFlow_VI" name="ddlWordFlow_VI" type="hidden" defaultValue="---Select---" /></td><td className="dxic" onmousedown="return aspxDDDropDown('ddlWordFlow', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea dxeEditAreaSys" name="ctl00$MainContent$ddlWordFlow" defaultValue="---Select---" id="ddlWordFlow_I" onchange="aspxETextChanged('ddlWordFlow')" onblur="aspxELostFocus('ddlWordFlow')" onfocus="aspxEGotFocus('ddlWordFlow')" type="text" onkeydown="aspxEKeyDown('ddlWordFlow', event)" style={{fontSize: 14, height: '100%', textAlign: 'Center'}} autoComplete="off" /></td><td id="ddlWordFlow_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('ddlWordFlow', event)" style={{fontSize: 14, KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                          <tbody><tr>
                              <td className="dx"><img id="ddlWordFlow_B-1Img" className="dxEditors_edtDropDown" src={empty} alt="v" /></td>
                            </tr>
                          </tbody></table></td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label5">WORK FLOW</span>
              </td>
              <td>
                <table className="dxeButtonEdit dropdown-content" cellSpacing={1} cellPadding={0} validationgroup="P" id="ddlWordFlow" border={0} style={{height: 35, width: 350}}>
                  <tbody><tr>
                      <td style={{display: 'none'}}><input id="ddlWordFlow_VI" name="ddlWordFlow_VI" type="hidden" defaultValue="---Select---" /></td><td className="dxic" onmousedown="return aspxDDDropDown('ddlWordFlow', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea dxeEditAreaSys" name="ctl00$MainContent$ddlWordFlow" defaultValue="---Select---" id="ddlWordFlow_I" onchange="aspxETextChanged('ddlWordFlow')" onblur="aspxELostFocus('ddlWordFlow')" onfocus="aspxEGotFocus('ddlWordFlow')" type="text" onkeydown="aspxEKeyDown('ddlWordFlow', event)" style={{fontSize: 14, height: '100%', textAlign: 'Center'}} autoComplete="off" /></td><td id="ddlWordFlow_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('ddlWordFlow', event)" style={{fontSize: 14, KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                          <tbody><tr>
                              <td className="dx"><img id="ddlWordFlow_B-1Img" className="dxEditors_edtDropDown" src={empty} alt="v" /></td>
                            </tr>
                          </tbody></table></td>
                    </tr>
                  </tbody></table>
              </td>
              
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label13">DESCRIPTION</span>
              </td>
              <td colSpan={2}>
                <div>
                  <div style={{position: 'relative', width: 0, height: 0}}>
                    <div className="dxKBSW">
                      <input id="htmlDescription_FFI" readOnly="readonly" style={{opacity: 0, width: 1, height: 1, position: 'relative', backgroundColor: 'transparent', margin: 0, padding: 0, borderWidth: 0, fontSize: '0pt', top: 0}} disabled />
                    </div>
                  </div><table className="dxheControl_DevEx" cellSpacing={0} cellPadding={0} settingsresize="true" id="htmlDescription" border={0} style={{borderCollapse: 'separate'}}>
                    <tbody><tr>
                        <td id="htmlDescription_MainCell" className="dx" style={{height: '100%', width: '100%'}}><table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: 698, borderCollapse: 'collapse'}}>
                            <tbody><tr id="htmlDescription_TBRow">
                                <td><table className="dxtbControl_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TD" border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                    <tbody><tr>
                                        <td style={{textAlign: 'Left'}}><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                            <tbody><tr>
                                                <td><input type="hidden" id="htmlDescription_TD_T0CI" name="htmlDescription_TD_T0CI" defaultValue /><div className="dxmLite_DevEx dxm-ltr">
                                                    <div className="dxm-main dxm-horizontal dxmtb" id="htmlDescription_TD_T0">
                                                      <ul className="dx dxm-image-l dxm-gutter">
                                                        <li title="Cut (Ctrl+X)" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmlDescription_TD_T0_DXI0_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T0_DXI0_T">
                                                            <img className="dxHtmlEditor_Icons_heCut_DevEx dxm-image dxHtmlEditor_Icons_heCutDisabled_DevEx" src={empty} alt="Cut (Ctrl+X)" id="htmlDescription_TD_T0_DXI0_Img" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heCut_DevEx dxm-image" /><span title="Cut (Ctrl+X)" />
                                                          </div></li>
                                                      </ul>
                                                    </div><b className="dx-clear" /><div id="htmlDescription_TD_T0_DXM16_" style={{zIndex: 20000, display: 'none', position: 'absolute'}}>
                                                      <div className="dxm-shadow dxm-popup dxmtb" id="htmlDescription_TD_T0_DXME16_">
                                                        <ul className="dx dxm-gutter">
                                                          <li title="Insert Table..." className="dxm-item" id="htmlDescription_TD_T0_DXI16i0_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_TD_T0_DXI16i0_T">
                                                              <img className="dxHtmlEditor_Icons_heInsertTableDialog_DevEx dxm-image" src={empty} alt="Insert Table..." id="htmlDescription_TD_T0_DXI16i0_Img" /><span title="Insert Table...">Insert Table...</span>
                                                            </div><b className="dx-clear" /></li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                    <div className="dxmBrdCor_DevEx" style={{display: 'none', zIndex: 20001, position: 'absolute'}} id="htmlDescription_TD_T0_DXMBC16_">
                                                    </div></div></td>
                                              </tr><tr>
                                                <td className="dxtbSpacing_DevEx" />
                                              </tr><tr>
                                                <td><input type="hidden" id="htmlDescription_TD_T1CI" name="htmlDescription_TD_T1CI" defaultValue /><div className="dxmLite_DevEx dxm-ltr">
                                                    <div className="dxm-main dxm-horizontal dxmtb" id="htmlDescription_TD_T1">
                                                      <ul className="dx dxm-image-l dxm-gutter">
                                                        <li title="Paragraph" className="dxtb-comboBoxMenuItem dxm-item dxm-noSubMenu dxm-noImage dxm-disabled" id="htmlDescription_TD_T1_DXI0_" savedcursor="[object Object]"><table title="Paragraph" className="dxeButtonEdit_DevEx dxeDisabled_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TD_T1_ITCNT0_ctl00" border={0} style={{width: 120, borderCollapse: 'collapse'}}>
                                                            <tbody><tr>
                                                                <td style={{display: 'none'}}><input id="htmlDescription_TD_T1_ITCNT0_ctl00_VI" name="htmlDescription_TD_T1_ITCNT0_ctl00_VI" type="hidden" /></td><td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}} savedonclick="[object Object]" savedonkeyup="[object Object]" savedonmousedown="return aspxDDDropDown('htmlDescription_TD_T1_ITCNT0_ctl00', event)" savedonmouseup="[object Object]"><input className="dxeEditArea_DevEx dxeEditAreaSys dxeDisabled_DevEx" name="ctl00$MainContent$htmlDescription$TD$T1$ITCNT0$TC$ctl00" id="htmlDescription_TD_T1_ITCNT0_ctl00_I" onchange="aspxETextChanged('htmlDescription_TD_T1_ITCNT0_ctl00')" type="text" readOnly="readonly" style={{height: 15, cursor: 'default'}} autoComplete="off" savedtabindex="[object Object]" tabIndex={-1} savedonclick="[object Object]" savedonfocus="aspxEGotFocus('htmlDescription_TD_T1_ITCNT0_ctl00')" savedonblur="aspxELostFocus('htmlDescription_TD_T1_ITCNT0_ctl00')" savedonkeydown="aspxEKeyDown('htmlDescription_TD_T1_ITCNT0_ctl00', event)" savedonkeypress="[object Object]" savedonkeyup="[object Object]" disabled /></td><td id="htmlDescription_TD_T1_ITCNT0_ctl00_B-1" className="dxeButtonEditButton_DevEx dxeDisabled_DevEx dxeButtonDisabled_DevEx" style={{KhtmlUserSelect: 'none'}} savedonclick="[object Object]" savedondblclick="[object Object]" savedonmousedown="return aspxDDDropDown('htmlDescription_TD_T1_ITCNT0_ctl00', event)" savedonmouseup="[object Object]"><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                                    <tbody><tr>
                                                                        <td className="dx"><img id="htmlDescription_TD_T1_ITCNT0_ctl00_B-1Img" className="dxEditors_edtDropDown_DevEx dxEditors_edtDropDownDisabled_DevEx" src={empty} alt="v" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxEditors_edtDropDown_DevEx" /></td>
                                                                      </tr>
                                                                    </tbody></table></td>
                                                              </tr>
                                                            </tbody></table><input type="hidden" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDDWS" name="htmlDescription_TD_T1_ITCNT0_ctl00_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                            <table id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                              <tbody><tr>
                                                                  <td onmousedown="aspxPWMDown(event,'htmlDescription_TD_T1_ITCNT0_ctl00_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_PWC-1" style={{height: '100%'}}><div id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_CSD-1">
                                                                              <table className="dxeListBox_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                                <tbody><tr>
                                                                                    <td valign="top"><div id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                                        <input id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_VI" type="hidden" name="ctl00$MainContent$htmlDescription$TD$T1$ITCNT0$TC$ctl00$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                          <tbody><tr id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI-1" className="dxeListBoxItemRow_DevEx">
                                                                                              <td id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI-1T0" className="dxeListBoxItem_DevEx">&nbsp;</td>
                                                                                            </tr>
                                                                                          </tbody></table><table id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                          <tbody><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI0T0"><p style={{margin: 0}}>Normal</p></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI1T0"><h1 style={{margin: 0}}>
                                                                                                  Heading  1
                                                                                                </h1></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI2T0"><h2 style={{margin: 0}}>
                                                                                                  Heading  2
                                                                                                </h2></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI3T0"><h3 style={{margin: 0}}>
                                                                                                  Heading  3
                                                                                                </h3></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI4T0"><h4 style={{margin: 0}}>
                                                                                                  Heading  4
                                                                                                </h4></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI5T0"><h5 style={{margin: 0}}>
                                                                                                  Heading  5
                                                                                                </h5></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI6T0"><h6 style={{margin: 0}}>
                                                                                                  Heading  6
                                                                                                </h6></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI7T0"><address style={{margin: 0}}>
                                                                                                  Address
                                                                                                </address></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT0_ctl00_DDD_L_LBI8T0"><div style={{margin: 0}}>
                                                                                                  Normal (DIV)
                                                                                                </div></td>
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
                                                          </div></li><li className="dxm-spacing" id="htmlDescription_TD_T1_DXI0_II" style={{height: 25}} /><li title="Font Name" className="dxtb-comboBoxMenuItem dxm-item dxm-noSubMenu dxm-noImage dxm-disabled" id="htmlDescription_TD_T1_DXI1_" savedcursor="[object Object]"><table title="Font Name" className="dxeButtonEdit_DevEx dxeDisabled_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TD_T1_ITCNT1_ctl00" border={0} style={{width: 140, borderCollapse: 'collapse'}}>
                                                            <tbody><tr>
                                                                <td style={{display: 'none'}}><input id="htmlDescription_TD_T1_ITCNT1_ctl00_VI" name="htmlDescription_TD_T1_ITCNT1_ctl00_VI" type="hidden" /></td><td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}} savedonclick="[object Object]" savedonkeyup="[object Object]" savedonmousedown="return aspxDDDropDown('htmlDescription_TD_T1_ITCNT1_ctl00', event)" savedonmouseup="[object Object]"><input className="dxeEditArea_DevEx dxeEditAreaSys dxeDisabled_DevEx" name="ctl00$MainContent$htmlDescription$TD$T1$ITCNT1$TC$ctl00" id="htmlDescription_TD_T1_ITCNT1_ctl00_I" onchange="aspxETextChanged('htmlDescription_TD_T1_ITCNT1_ctl00')" type="text" readOnly="readonly" style={{height: 15, cursor: 'default'}} autoComplete="off" savedtabindex="[object Object]" tabIndex={-1} savedonclick="[object Object]" savedonfocus="aspxEGotFocus('htmlDescription_TD_T1_ITCNT1_ctl00')" savedonblur="aspxELostFocus('htmlDescription_TD_T1_ITCNT1_ctl00')" savedonkeydown="aspxEKeyDown('htmlDescription_TD_T1_ITCNT1_ctl00', event)" savedonkeypress="[object Object]" savedonkeyup="[object Object]" disabled /></td><td id="htmlDescription_TD_T1_ITCNT1_ctl00_B-1" className="dxeButtonEditButton_DevEx dxeDisabled_DevEx dxeButtonDisabled_DevEx" style={{KhtmlUserSelect: 'none'}} savedonclick="[object Object]" savedondblclick="[object Object]" savedonmousedown="return aspxDDDropDown('htmlDescription_TD_T1_ITCNT1_ctl00', event)" savedonmouseup="[object Object]"><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                                    <tbody><tr>
                                                                        <td className="dx"><img id="htmlDescription_TD_T1_ITCNT1_ctl00_B-1Img" className="dxEditors_edtDropDown_DevEx dxEditors_edtDropDownDisabled_DevEx" src={empty} alt="v" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxEditors_edtDropDown_DevEx" /></td>
                                                                      </tr>
                                                                    </tbody></table></td>
                                                              </tr>
                                                            </tbody></table><input type="hidden" id="htmlDescription_TD_T1_ITCNT1_ctl00_DDDWS" name="htmlDescription_TD_T1_ITCNT1_ctl00_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                            <table id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                              <tbody><tr>
                                                                  <td onmousedown="aspxPWMDown(event,'htmlDescription_TD_T1_ITCNT1_ctl00_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_PWC-1" style={{height: '100%'}}><div id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_CSD-1">
                                                                              <table className="dxeListBox_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                                <tbody><tr>
                                                                                    <td valign="top"><div id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                                        <input id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_VI" type="hidden" name="ctl00$MainContent$htmlDescription$TD$T1$ITCNT1$TC$ctl00$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                          <tbody><tr id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_LBI-1" className="dxeListBoxItemRow_DevEx">
                                                                                              <td id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_LBI-1T0" className="dxeListBoxItem_DevEx">&nbsp;</td>
                                                                                            </tr>
                                                                                          </tbody></table><table id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                          <tbody><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_LBI0T0"><font face="Times New Roman">Times New Roman</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_LBI1T0"><font face="Tahoma">Tahoma</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_LBI2T0"><font face="Verdana">Verdana</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_LBI3T0"><font face="Arial">Arial</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_LBI4T0"><font face="MS Sans Serif">MS Sans Serif</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT1_ctl00_DDD_L_LBI5T0"><font face="Courier">Courier</font></td>
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
                                                          </div></li><li className="dxm-spacing" id="htmlDescription_TD_T1_DXI1_II" style={{height: 25}} /><li title="Font Size" className="dxtb-comboBoxMenuItem dxm-item dxm-noSubMenu dxm-noImage dxm-disabled" id="htmlDescription_TD_T1_DXI2_" savedcursor="[object Object]"><table title="Font Size" className="dxeButtonEdit_DevEx dxeDisabled_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TD_T1_ITCNT2_ctl00" border={0} style={{width: 90, borderCollapse: 'collapse'}}>
                                                            <tbody><tr>
                                                                <td style={{display: 'none'}}><input id="htmlDescription_TD_T1_ITCNT2_ctl00_VI" name="htmlDescription_TD_T1_ITCNT2_ctl00_VI" type="hidden" /></td><td className="dxic" style={{width: '100%', paddingLeft: 2, paddingRight: 2, paddingTop: 2, paddingBottom: 2}} savedonclick="[object Object]" savedonkeyup="[object Object]" savedonmousedown="return aspxDDDropDown('htmlDescription_TD_T1_ITCNT2_ctl00', event)" savedonmouseup="[object Object]"><input className="dxeEditArea_DevEx dxeEditAreaSys dxeDisabled_DevEx" name="ctl00$MainContent$htmlDescription$TD$T1$ITCNT2$TC$ctl00" id="htmlDescription_TD_T1_ITCNT2_ctl00_I" onchange="aspxETextChanged('htmlDescription_TD_T1_ITCNT2_ctl00')" type="text" readOnly="readonly" style={{height: 15, cursor: 'default'}} autoComplete="off" savedtabindex="[object Object]" tabIndex={-1} savedonclick="[object Object]" savedonfocus="aspxEGotFocus('htmlDescription_TD_T1_ITCNT2_ctl00')" savedonblur="aspxELostFocus('htmlDescription_TD_T1_ITCNT2_ctl00')" savedonkeydown="aspxEKeyDown('htmlDescription_TD_T1_ITCNT2_ctl00', event)" savedonkeypress="[object Object]" savedonkeyup="[object Object]" disabled /></td><td id="htmlDescription_TD_T1_ITCNT2_ctl00_B-1" className="dxeButtonEditButton_DevEx dxeDisabled_DevEx dxeButtonDisabled_DevEx" style={{KhtmlUserSelect: 'none'}} savedonclick="[object Object]" savedondblclick="[object Object]" savedonmousedown="return aspxDDDropDown('htmlDescription_TD_T1_ITCNT2_ctl00', event)" savedonmouseup="[object Object]"><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                                    <tbody><tr>
                                                                        <td className="dx"><img id="htmlDescription_TD_T1_ITCNT2_ctl00_B-1Img" className="dxEditors_edtDropDown_DevEx dxEditors_edtDropDownDisabled_DevEx" src={empty} alt="v" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxEditors_edtDropDown_DevEx" /></td>
                                                                      </tr>
                                                                    </tbody></table></td>
                                                              </tr>
                                                            </tbody></table><input type="hidden" id="htmlDescription_TD_T1_ITCNT2_ctl00_DDDWS" name="htmlDescription_TD_T1_ITCNT2_ctl00_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                                                            <table id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                                                              <tbody><tr>
                                                                  <td onmousedown="aspxPWMDown(event,'htmlDescription_TD_T1_ITCNT2_ctl00_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                                                                      <tbody><tr>
                                                                          <td id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_PWC-1" style={{height: '100%'}}><div id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_CSD-1">
                                                                              <table className="dxeListBox_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                                                                <tbody><tr>
                                                                                    <td valign="top"><div id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                                                                        <input id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_VI" type="hidden" name="ctl00$MainContent$htmlDescription$TD$T1$ITCNT2$TC$ctl00$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                                                          <tbody><tr id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBI-1" className="dxeListBoxItemRow_DevEx">
                                                                                              <td id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBI-1T0" className="dxeListBoxItem_DevEx">&nbsp;</td>
                                                                                            </tr>
                                                                                          </tbody></table><table id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                                                          <tbody><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBI0T0"><font size={1}>1 (8pt)</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBI1T0"><font size={2}>2 (10pt)</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBI2T0"><font size={3}>3 (12pt)</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBI3T0"><font size={4}>4 (14pt)</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBI4T0"><font size={5}>5 (18pt)</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBI5T0"><font size={6}>6 (24pt)</font></td>
                                                                                            </tr><tr className="dxeListBoxItemRow_DevEx">
                                                                                              <td className="dxeListBoxItem_DevEx" id="htmlDescription_TD_T1_ITCNT2_ctl00_DDD_L_LBI6T0"><font size={7}>7 (36pt)</font></td>
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
                                                          </div></li><li className="dxm-separator" id="htmlDescription_TD_T1_DXI3_IS" style={{height: 25}}><b /></li><li title="Bold (CTRL+B)" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmlDescription_TD_T1_DXI3_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T1_DXI3_T">
                                                            <img className="dxHtmlEditor_Icons_heBold_DevEx dxm-image dxHtmlEditor_Icons_heBoldDisabled_DevEx" src={empty} alt="Bold (CTRL+B)" id="htmlDescription_TD_T1_DXI3_Img" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heBold_DevEx dxm-image" /><span title="Bold (CTRL+B)" />
                                                          </div></li><li className="dxm-spacing" id="htmlDescription_TD_T1_DXI3_II" style={{height: 25}} /><li title="Italic (Ctrl+I)" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmlDescription_TD_T1_DXI4_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T1_DXI4_T">
                                                            <img className="dxHtmlEditor_Icons_heItalic_DevEx dxm-image dxHtmlEditor_Icons_heItalicDisabled_DevEx" src={empty} alt="Italic (Ctrl+I)" id="htmlDescription_TD_T1_DXI4_Img" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heItalic_DevEx dxm-image" /><span title="Italic (Ctrl+I)" />
                                                          </div></li><li className="dxm-spacing" id="htmlDescription_TD_T1_DXI4_II" style={{height: 25}} /><li title="Underline" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmlDescription_TD_T1_DXI5_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T1_DXI5_T">
                                                            <img className="dxHtmlEditor_Icons_heUnderline_DevEx dxm-image dxHtmlEditor_Icons_heUnderlineDisabled_DevEx" src={empty} alt="Underline" id="htmlDescription_TD_T1_DXI5_Img" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heUnderline_DevEx dxm-image" /><span title="Underline" />
                                                          </div></li><li className="dxm-spacing" id="htmlDescription_TD_T1_DXI5_II" style={{height: 25}} /><li title="Strikethrough" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmlDescription_TD_T1_DXI6_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T1_DXI6_T">
                                                            <img className="dxHtmlEditor_Icons_heStrikethrough_DevEx dxm-image dxHtmlEditor_Icons_heStrikethroughDisabled_DevEx" src={empty} alt="Strikethrough" id="htmlDescription_TD_T1_DXI6_Img" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heStrikethrough_DevEx dxm-image" /><span title="Strikethrough" />
                                                          </div></li><li className="dxm-separator" id="htmlDescription_TD_T1_DXI7_IS" style={{height: 25}}><b /></li><li title="Align Left" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmlDescription_TD_T1_DXI7_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T1_DXI7_T">
                                                            <img className="dxHtmlEditor_Icons_heLeft_DevEx dxm-image dxHtmlEditor_Icons_heLeftDisabled_DevEx" src={empty} alt="Align Left" id="htmlDescription_TD_T1_DXI7_Img" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heLeft_DevEx dxm-image" /><span title="Align Left" />
                                                          </div></li><li className="dxm-spacing" id="htmlDescription_TD_T1_DXI7_II" style={{height: 25}} /><li title="Align Center" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmlDescription_TD_T1_DXI8_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T1_DXI8_T">
                                                            <img className="dxHtmlEditor_Icons_heCenter_DevEx dxm-image dxHtmlEditor_Icons_heCenterDisabled_DevEx" src={empty} alt="Align Center" id="htmlDescription_TD_T1_DXI8_Img" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heCenter_DevEx dxm-image" /><span title="Align Center" />
                                                          </div></li><li className="dxm-spacing" id="htmlDescription_TD_T1_DXI8_II" style={{height: 25}} /><li title="Align Right" className="dxm-item dxm-noSubMenu dxm-disabled" id="htmlDescription_TD_T1_DXI9_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T1_DXI9_T">
                                                            <img className="dxHtmlEditor_Icons_heRight_DevEx dxm-image dxHtmlEditor_Icons_heRightDisabled_DevEx" src={empty} alt="Align Right" id="htmlDescription_TD_T1_DXI9_Img" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heRight_DevEx dxm-image" /><span title="Align Right" />
                                                          </div></li><li className="dxm-separator" id="htmlDescription_TD_T1_DXI10_IS" style={{height: 25}}><b /></li><li title="Back Color" className="dxm-item dxtb-cb dxm-dropDownMode dxm-noImage dxm-disabled" id="htmlDescription_TD_T1_DXI10_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T1_DXI10_T">
                                                            <div title="Back Color" className="dxtcbControl_DevEx " id="htmlDescription_TD_T1_ITTCNT10_backcolor">
                                                              <img id="htmlDescription_TD_T1_ITTCNT10_backcolor_P" title="Back Color" className="dxHtmlEditor_Icons_heBackColor_DevEx dxHtmlEditor_Icons_heBackColorDisabled_DevEx" src={empty} alt="Back Color" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heBackColor_DevEx" /><div id="htmlDescription_TD_T1_ITTCNT10_backcolor_CD" className="dxtcbColorDiv_DevEx" style={{backgroundColor: '#FFFFFF'}}>
                                                              </div>
                                                            </div>
                                                          </div><div className="dxm-popOut dxm-disabled" id="htmlDescription_TD_T1_DXI10_P">
                                                            <img className="dxHtmlEditor_heToolbarPopOut_DevEx dxm-pImage" src={empty} alt="v" id="htmlDescription_TD_T1_DXI10_PImg" />
                                                          </div></li><li className="dxm-spacing" id="htmlDescription_TD_T1_DXI10_II" style={{height: 25}} /><li title="Fore Color" className="dxm-item dxtb-cb dxm-dropDownMode dxm-noImage dxm-disabled" id="htmlDescription_TD_T1_DXI11_" style={{}} savedcursor="pointer"><div className="dxm-content dxm-disabled" id="htmlDescription_TD_T1_DXI11_T">
                                                            <div title="Fore Color" className="dxtcbControl_DevEx " id="htmlDescription_TD_T1_ITTCNT11_forecolor">
                                                              <img id="htmlDescription_TD_T1_ITTCNT11_forecolor_P" title="Fore Color" className="dxHtmlEditor_Icons_heForeColor_DevEx dxHtmlEditor_Icons_heForeColorDisabled_DevEx" src={empty} alt="Fore Color" saveddisabledstateitemsrc={empty} saveddisabledstateitemclassname="dxHtmlEditor_Icons_heForeColor_DevEx" /><div id="htmlDescription_TD_T1_ITTCNT11_forecolor_CD" className="dxtcbColorDiv_DevEx" style={{backgroundColor: '#000000'}}>
                                                              </div>
                                                            </div>
                                                          </div><div className="dxm-popOut dxm-disabled" id="htmlDescription_TD_T1_DXI11_P">
                                                            <img className="dxHtmlEditor_heToolbarPopOut_DevEx dxm-pImage" src={empty} alt="v" id="htmlDescription_TD_T1_DXI11_PImg" />
                                                          </div></li>
                                                      </ul>
                                                    </div><b className="dx-clear" /><div id="htmlDescription_TD_T1_DXM10_" style={{zIndex: 20000, display: 'none', position: 'absolute', visibility: 'hidden'}}>
                                                      <div className="dxm-shadow dxm-popup dxmtb" id="htmlDescription_TD_T1_DXME10_">
                                                        <div className="dx">
                                                          <table className="dxeColorTable_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TD_T1_MTCNT10_backcolor" border={0} style={{borderStyle: 'None', borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td className="dx"><table id="htmlDescription_TD_T1_MTCNT10_backcolor_CT" cellSpacing={0} cellPadding={0} onclick="aspxCClick('htmlDescription_TD_T1_MTCNT10_backcolor', event)" border={0} style={{borderCollapse: 'separate'}}>
                                                                    <tbody><tr>
                                                                        <td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C0"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 0, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C1"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 51, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C2"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 51, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C3"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 51, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C4"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 51, 102)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C5"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 0, 128)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C6"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 51, 153)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C7"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 51, 51)'}}>
                                                                          </div></td>
                                                                      </tr><tr>
                                                                        <td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C8"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(128, 0, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C9"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 102, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C10"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(128, 128, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C11"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 128, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C12"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 128, 128)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C13"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 0, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C14"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(102, 102, 153)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C15"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(128, 128, 128)'}}>
                                                                          </div></td>
                                                                      </tr><tr>
                                                                        <td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C16"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 0, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C17"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 153, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C18"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 204, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C19"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 153, 102)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C20"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 204, 204)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C21"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 102, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C22"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(128, 0, 128)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C23"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 153, 153)'}}>
                                                                          </div></td>
                                                                      </tr><tr>
                                                                        <td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C24"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 0, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C25"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 204, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C26"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 255, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C27"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 255, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C28"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 255, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C29"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 204, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C30"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 51, 102)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C31"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(192, 192, 192)'}}>
                                                                          </div></td>
                                                                      </tr><tr>
                                                                        <td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C32"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 153, 204)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C33"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 204, 153)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C34"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 255, 153)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C35"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(204, 255, 204)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C36"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(204, 255, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C37"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 204, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C38"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(204, 153, 255)'}}>
                                                                          </div></td><td className="dxeColorTableCell_DevEx dxeColorTableCellSelected_DevEx" id="htmlDescription_TD_T1_MTCNT10_backcolor_C39"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                                                                          </div></td>
                                                                      </tr>
                                                                    </tbody></table></td>
                                                              </tr>
                                                            </tbody></table>
                                                        </div>
                                                      </div>
                                                    </div><div id="htmlDescription_TD_T1_DXM11_" style={{zIndex: 20000, display: 'none', position: 'absolute', visibility: 'hidden'}}>
                                                      <div className="dxm-shadow dxm-popup dxmtb" id="htmlDescription_TD_T1_DXME11_">
                                                        <div className="dx">
                                                          <table className="dxeColorTable_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TD_T1_MTCNT11_forecolor" border={0} style={{borderStyle: 'None', borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td className="dx"><table id="htmlDescription_TD_T1_MTCNT11_forecolor_CT" cellSpacing={0} cellPadding={0} onclick="aspxCClick('htmlDescription_TD_T1_MTCNT11_forecolor', event)" border={0} style={{borderCollapse: 'separate'}}>
                                                                    <tbody><tr>
                                                                        <td className="dxeColorTableCell_DevEx dxeColorTableCellSelected_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C0"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 0, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C1"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 51, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C2"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 51, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C3"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 51, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C4"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 51, 102)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C5"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 0, 128)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C6"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 51, 153)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C7"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 51, 51)'}}>
                                                                          </div></td>
                                                                      </tr><tr>
                                                                        <td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C8"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(128, 0, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C9"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 102, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C10"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(128, 128, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C11"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 128, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C12"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 128, 128)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C13"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 0, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C14"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(102, 102, 153)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C15"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(128, 128, 128)'}}>
                                                                          </div></td>
                                                                      </tr><tr>
                                                                        <td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C16"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 0, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C17"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 153, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C18"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 204, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C19"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 153, 102)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C20"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 204, 204)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C21"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(51, 102, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C22"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(128, 0, 128)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C23"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 153, 153)'}}>
                                                                          </div></td>
                                                                      </tr><tr>
                                                                        <td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C24"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 0, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C25"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 204, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C26"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 255, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C27"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 255, 0)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C28"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 255, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C29"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(0, 204, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C30"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 51, 102)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C31"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(192, 192, 192)'}}>
                                                                          </div></td>
                                                                      </tr><tr>
                                                                        <td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C32"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 153, 204)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C33"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 204, 153)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C34"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 255, 153)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C35"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(204, 255, 204)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C36"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(204, 255, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C37"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(153, 204, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C38"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(204, 153, 255)'}}>
                                                                          </div></td><td className=" dxeColorTableCell_DevEx" id="htmlDescription_TD_T1_MTCNT11_forecolor_C39"><div className=" dxeColorTableCellDiv_DevEx" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                                                                          </div></td>
                                                                      </tr>
                                                                    </tbody></table></td>
                                                              </tr>
                                                            </tbody></table>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="dxmBrdCor_DevEx" style={{display: 'none', zIndex: 20001, position: 'absolute'}} id="htmlDescription_TD_T1_DXMBC10_">
                                                    </div><div className="dxmBrdCor_DevEx" style={{display: 'none', zIndex: 20001, position: 'absolute'}} id="htmlDescription_TD_T1_DXMBC11_">
                                                    </div></div></td>
                                              </tr>
                                            </tbody></table></td>
                                      </tr>
                                    </tbody></table></td>
                              </tr><tr>
                                <td id="htmlDescription_EdtCell" className="dxheContentArea_DevEx" valign="top" style={{width: '100%', borderBottomStyle: 'none', paddingBottom: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse'}}>
                                    <tbody><tr>
                                        <td id="htmlDescription_DesignViewCell" className="dxheDesignViewArea_DevEx dxheViewArea_DevEx" valign="top" style={{borderColor: 'rgb(157, 160, 170)', height: 220, width: '100%', borderBottomWidth: 0}}><table id="htmlDescription_DesignViewCell_EF" className="dxheErrorFrame_DevEx" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%', display: 'none'}}>
                                            <tbody><tr>
                                                <td className="dxhe"><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%'}}>
                                                    <tbody><tr>
                                                        <td id="htmlDescription_DesignViewCell_ETC" style={{width: '100%'}}>The HTML content is invalid</td><td style={{paddingLeft: 4}}><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="htmlDescription_DesignViewCell_EFCB" className="dxheErrorFrameCloseButton_DevEx" onclick="aspxHEEFCBClick(event, 'htmlDescription')"><img id="htmlDescription_DesignViewCell_EFCBImg" className="dxHtmlEditor_heErrorFrameCloseButton_DevEx" src={empty} alt="Close" /></td>
                                                              </tr>
                                                            </tbody></table></td>
                                                      </tr>
                                                    </tbody></table></td>
                                              </tr>
                                            </tbody></table><iframe id="htmlDescription_DesignIFrame" className="dxheDesignViewArea_DevEx dxheViewArea_DevEx" src="javascript:false" frameBorder={0} style={{borderColor: 'rgb(157, 160, 170)', height: '100%', width: '100%', padding: 0, borderStyle: 'none', borderWidth: 0}}>
                                          </iframe></td>
                                      </tr>
                                    </tbody></table><table className="dxeMemoSys dxeMemo_DevEx dxheHtmlViewArea_DevEx dxheViewArea_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_HtmlViewEdit" border={0} style={{borderColor: '#9DA0AA', height: '100%', width: '100%', borderCollapse: 'separate', borderBottomWidth: 0, display: 'none'}}>
                                    <tbody><tr>
                                        <td valign="top" style={{width: '100%', padding: 0}}><table id="htmlDescription_HtmlViewEdit_EF" className="dxheErrorFrame_DevEx" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%', display: 'none'}}>
                                            <tbody><tr>
                                                <td className="dxhe"><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%'}}>
                                                    <tbody><tr>
                                                        <td id="htmlDescription_HtmlViewEdit_ETC" style={{width: '100%'}}>The HTML content is invalid</td><td style={{paddingLeft: 4}}><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="htmlDescription_HtmlViewEdit_EFCB" className="dxheErrorFrameCloseButton_DevEx" onclick="aspxHEEFCBClick(event, 'htmlDescription')"><img id="htmlDescription_HtmlViewEdit_EFCBImg" className="dxHtmlEditor_heErrorFrameCloseButton_DevEx" src={empty} alt="Close" /></td>
                                                              </tr>
                                                            </tbody></table></td>
                                                      </tr>
                                                    </tbody></table></td>
                                              </tr>
                                            </tbody></table><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                            <tbody><tr>
                                                <td><textarea className="dxeMemoEditArea_DevEx dxeMemoEditAreaSys" id="htmlDescription_HtmlViewEdit_I" onchange="aspxHEHtmlViewHtmlChanged('htmlDescription');" onkeydown="aspxEKeyDown('htmlDescription_HtmlViewEdit', event)" cols rows style={{height: 0, width: '100%', margin: 0, overflowY: 'scroll', resize: 'none'}} defaultValue={""} /></td>
                                              </tr>
                                            </tbody></table></td>
                                      </tr>
                                    </tbody></table><table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'collapse', display: 'none'}}>
                                    <tbody><tr>
                                        <td id="htmlDescription_PreviewCell" className="dxhePreviewArea_DevEx dxheViewArea_DevEx" valign="top" style={{borderColor: 'rgb(157, 160, 170)', height: 0, width: '100%', borderBottomWidth: 0}}><table id="htmlDescription_PreviewCell_EF" className="dxheErrorFrame_DevEx" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%', display: 'none'}}>
                                            <tbody><tr>
                                                <td className="dxhe"><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%'}}>
                                                    <tbody><tr>
                                                        <td id="htmlDescription_PreviewCell_ETC" style={{width: '100%'}}>The HTML content is invalid</td><td style={{paddingLeft: 4}}><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="htmlDescription_PreviewCell_EFCB" className="dxheErrorFrameCloseButton_DevEx" onclick="aspxHEEFCBClick(event, 'htmlDescription')"><img id="htmlDescription_PreviewCell_EFCBImg" className="dxHtmlEditor_heErrorFrameCloseButton_DevEx" src={empty} alt="Close" /></td>
                                                              </tr>
                                                            </tbody></table></td>
                                                      </tr>
                                                    </tbody></table></td>
                                              </tr>
                                            </tbody></table><iframe id="htmlDescription_PreviewIFrame" className="dxhePreviewArea_DevEx dxheViewArea_DevEx" src="javascript:false" frameBorder={0} style={{borderColor: 'rgb(157, 160, 170)', height: '100%', width: '100%', padding: 0, borderStyle: 'none', borderWidth: 0}}>
                                          </iframe></td>
                                      </tr>
                                    </tbody></table></td>
                              </tr><tr>
                                <td id="htmlDescription_SBarCell"><table cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'collapse'}}>
                                    <tbody><tr>
                                        <td className="dxheStatusBar_DevEx dxheContentArea_DevEx" style={{width: '100%', paddingTop: 0}}><input type="hidden" id="htmlDescription_TCATI" name="htmlDescription_TCATI" defaultValue={0} /><table className="dxtcControl_DevEx" cellSpacing={0} cellPadding={0} id="htmlDescription_TC" border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                            <tbody><tr>
                                                <td id="htmlDescription_TC_TC" className="dxtcTabsCellWithTabPositionBottom" style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}}><table cellSpacing={0} cellPadding={0} border={0} style={{height: '100%', width: '100%', borderCollapse: 'separate'}}>
                                                    <tbody><tr>
                                                        <td style={{verticalAlign: 'top'}}><table className="dxtcActiveRow_DevEx" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                            <tbody><tr>
                                                                <td id="htmlDescription_TC_T0" className="dxtcTabWithTabPositionBottom_DevEx dxheStatusBarTab_DevEx" style={{height: 0, borderTop: '1px solid rgb(157, 160, 170)', display: 'none', cursor: 'pointer'}} onclick="return aspxTCTClick(event, 'htmlDescription_TC', 0)"><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                    <tbody><tr>
                                                                        <td id="htmlDescription_TC_T0T" className="dxtc" style={{width: '100%'}}>Design</td>
                                                                      </tr>
                                                                    </tbody></table></td><td id="htmlDescription_TC_AT0" className="dxtcActiveTabWithTabPositionBottom_DevEx dxheStatusBarTab_DevEx dxheStatusBarActiveTab_DevEx" style={{height: 0, borderTopWidth: '0px !important', cursor: 'default'}}><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', marginTop: 1}}>
                                                                    <tbody><tr>
                                                                        <td id="htmlDescription_TC_AT0T" className="dxtc" style={{width: '100%'}}>Design</td>
                                                                      </tr>
                                                                    </tbody></table></td><td id="htmlDescription_TC_T1" className="dxtcTabWithTabPositionBottom_DevEx dxheStatusBarTab_DevEx" style={{height: 0, borderTop: '1px solid rgb(157, 160, 170)', borderLeftWidth: '0px !important', cursor: 'pointer'}} onclick="return aspxTCTClick(event, 'htmlDescription_TC', 1)"><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                    <tbody><tr>
                                                                        <td id="htmlDescription_TC_T1T" className="dxtc" style={{width: '100%'}}>HTML</td>
                                                                      </tr>
                                                                    </tbody></table></td><td id="htmlDescription_TC_AT1" className="dxtcActiveTabWithTabPositionBottom_DevEx dxheStatusBarTab_DevEx dxheStatusBarActiveTab_DevEx" style={{height: 0, display: 'none', borderTopWidth: '0px !important', borderLeftWidth: '0px !important', cursor: 'default'}}><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', marginTop: 1}}>
                                                                    <tbody><tr>
                                                                        <td id="htmlDescription_TC_AT1T" className="dxtc" style={{width: '100%'}}>HTML</td>
                                                                      </tr>
                                                                    </tbody></table></td><td id="htmlDescription_TC_T2" className="dxtcTabWithTabPositionBottom_DevEx dxheStatusBarTab_DevEx" style={{height: 0, borderTop: '1px solid rgb(157, 160, 170)', borderLeftWidth: '0px !important', cursor: 'pointer'}} onclick="return aspxTCTClick(event, 'htmlDescription_TC', 2)"><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse'}}>
                                                                    <tbody><tr>
                                                                        <td id="htmlDescription_TC_T2T" className="dxtc" style={{width: '100%'}}>Preview</td>
                                                                      </tr>
                                                                    </tbody></table></td><td id="htmlDescription_TC_AT2" className="dxtcActiveTabWithTabPositionBottom_DevEx dxheStatusBarTab_DevEx dxheStatusBarActiveTab_DevEx" style={{height: 0, display: 'none', borderTopWidth: '0px !important', borderLeftWidth: '0px !important', cursor: 'default'}}><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', marginTop: 1}}>
                                                                    <tbody><tr>
                                                                        <td id="htmlDescription_TC_AT2T" className="dxtc" style={{width: '100%'}}>Preview</td>
                                                                      </tr>
                                                                    </tbody></table></td>
                                                              </tr>
                                                            </tbody></table></td><td id="htmlDescription_TC_RAC" className="dxtcRightAlignCell_DevEx" style={{width: '100%', borderTopColor: '#9DA0AA', borderTopStyle: 'Solid', borderTopWidth: 1}}><div style={{height: 1, width: 1, overflow: 'hidden'}}>
                                                          </div></td>
                                                      </tr>
                                                    </tbody></table></td>
                                              </tr>
                                            </tbody></table></td>
                                      </tr>
                                    </tbody></table></td>
                              </tr>
                            </tbody></table><input type="hidden" name="htmlDescription_SVHtml" id="htmlDescription_SVHtml" defaultValue /></td>
                      </tr>
                    </tbody></table><div id="htmlDescription_DPP_PW-1" className="dxpcLite_DevEx dxpclW dxpc-mainDiv dxpc-shadow" style={{width: 200, cursor: 'default', zIndex: 10000, display: 'none'}}>
                    <div className="dxpc-header dxpc-withBtn" style={{cursor: 'move', KhtmlUserSelect: 'none'}} id="htmlDescription_DPP_PWH-1">
                      <div className="dxpc-headerContent">
                        <span className="dxpc-headerText" id="htmlDescription_DPP_PWH-1T">Header</span>
                      </div><div className="dxpc-closeBtn" style={{cursor: 'pointer'}} id="htmlDescription_DPP_HCB-1">
                        <img className="dxWeb_pcCloseButton_DevEx" src={empty} alt="[Close]" />
                      </div><b className="dx-clear" />
                    </div><div className="dxpc-contentWrapper">
                      <div className="dxpc-content" style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0, paddingBottom: 0}} id="htmlDescription_DPP_PWC-1">
                        &nbsp;&nbsp;
                      </div>
                    </div>
                  </div><div id="htmlDescription_DPP_DXPWMB-1" className="dxpcModalBackLite_DevEx" style={{opacity: '0.01', zIndex: 9999}}>
                  </div><table id="htmlDescription_DPP_LP" className="dxpcLoadingPanel_DevEx" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                    <tbody><tr>
                        <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=1_13-I60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="htmlDescription_DPP_TL">Loading…</span></td>
                      </tr>
                    </tbody></table><div id="htmlDescription_DPP_LD" className="dxpcLoadingDiv_DevEx" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                  </div><div className="dxmLite_DevEx dxm-ltr">
                    <div id="htmlDescription_PPM" style={{zIndex: 19998, display: 'none', position: 'absolute'}}>
                      <div className="dxm-popupMain dxm-shadow dxm-popup" id="htmlDescription_PPM_DXME_">
                        <ul className="dx dxm-noImages">
                          <li className="dxm-item" id="htmlDescription_PPM_DXI0_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI0_T">
                              Cut
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI0_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI1_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI1_T">
                              Copy
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI1_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI2_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI2_T">
                              Paste
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI2_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI3_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI3_T">
                              Select All
                            </div><b className="dx-clear" /></li><li className="dxm-separator" id="htmlDescription_PPM_DXI4_IS"><b /></li><li className="dxm-item" id="htmlDescription_PPM_DXI4_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI4_T">
                              Change Link...
                            </div><b className="dx-clear" /></li><li className="dxm-separator" id="htmlDescription_PPM_DXI5_IS"><b /></li><li className="dxm-item" id="htmlDescription_PPM_DXI5_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI5_T">
                              Change Image...
                            </div><b className="dx-clear" /></li><li className="dxm-separator" id="htmlDescription_PPM_DXI6_IS"><b /></li><li className="dxm-item" id="htmlDescription_PPM_DXI6_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI6_T">
                              Table Properties...
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI6_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI7_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI7_T">
                              Row Properties...
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI7_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI8_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI8_T">
                              Column Properties...
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI8_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI9_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI9_T">
                              Cell Properties...
                            </div><b className="dx-clear" /></li><li className="dxm-separator" id="htmlDescription_PPM_DXI10_IS"><b /></li><li className="dxm-item" id="htmlDescription_PPM_DXI10_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI10_T">
                              Insert Row Above
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI10_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI11_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI11_T">
                              Insert Row Below
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI11_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI12_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI12_T">
                              Insert Column to the Left
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI12_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI13_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI13_T">
                              Insert Column to the Right
                            </div><b className="dx-clear" /></li><li className="dxm-separator" id="htmlDescription_PPM_DXI14_IS"><b /></li><li className="dxm-item" id="htmlDescription_PPM_DXI14_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI14_T">
                              Split Horizontally
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI14_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI15_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI15_T">
                              Split Vertically
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI15_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI16_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI16_T">
                              Merge Right
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI16_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI17_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI17_T">
                              Merge Down
                            </div><b className="dx-clear" /></li><li className="dxm-separator" id="htmlDescription_PPM_DXI18_IS"><b /></li><li className="dxm-item" id="htmlDescription_PPM_DXI18_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI18_T">
                              Delete Table
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI18_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI19_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI19_T">
                              Delete Row
                            </div><b className="dx-clear" /></li><li className="dxm-spacing" id="htmlDescription_PPM_DXI19_II" /><li className="dxm-item" id="htmlDescription_PPM_DXI20_" style={{cursor: 'pointer'}}><div className="dxm-content dxm-hasText" id="htmlDescription_PPM_DXI20_T">
                              Delete Column
                            </div><b className="dx-clear" /></li>
                        </ul>
                      </div>
                    </div>
                  </div><table id="htmlDescription_EF" className="dxheErrorFrame_DevEx" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%', display: 'none'}}>
                    <tbody><tr>
                        <td className="dxhe"><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', width: '100%'}}>
                            <tbody><tr>
                                <td id="htmlDescription_ETC" style={{width: '100%'}}>The HTML content is invalid</td><td style={{paddingLeft: 4}}><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                                    <tbody><tr>
                                        <td id="htmlDescription_EFCB" className="dxheErrorFrameCloseButton_DevEx" onclick="aspxHEEFCBClick(event, 'htmlDescription')"><img id="htmlDescription_EFCBImg" className="dxHtmlEditor_heErrorFrameCloseButton_DevEx" src={empty} alt="Close" /></td>
                                      </tr>
                                    </tbody></table></td>
                              </tr>
                            </tbody></table></td>
                      </tr>
                    </tbody></table><input type="hidden" name="ctl00$MainContent$htmlDescription$ClientState" id="htmlDescription_ClientState" defaultValue="ActiveView|6|DesignCurrentWidth|3|700CurrentHeight|3|300IsPercentWidth|1|0" /><input type="hidden" name="ctl00$MainContent$htmlDescription$CssFiles" id="htmlDescription_CssFiles" defaultValue="['/DXR.axd?r=0_649-I60ci']" />
                  <input type="hidden" name="htmlDescription_Html" id="htmlDescription_Html" defaultValue /><input type="hidden" name="htmlDescription_VS" id="htmlDescription_VS" defaultValue /></div><table id="htmlDescription_LP" className="dxheLoadingPanel_DevEx" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                  <tbody><tr>
                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=0_643-I60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="htmlDescription_TL">Loading…</span></td>
                    </tr>
                  </tbody></table><div id="htmlDescription_LD" className="dxheLoadingDiv_DevEx" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                </div>
              </td>
            </tr>
          </tbody></table>
        <table className="table-inner" align="center" width="80%" style={{borderSpacing: 10, marginLeft: 'auto', paddingRight: 20, marginRight: 'auto', display: 'block'}}>
          <tbody>
            <tr>
              <td style={{width: 150}}>
                <span id="Label18">Estimation</span>
              </td>
              <td colSpan={3}>
                <span style={{fontFamily: 'Calibri', fontWeight: 'normal'}}><input id="CbEst" type="checkbox" name="ctl00$MainContent$CbEst" onclick="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$CbEst\',\'\')', 0)" /></span>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label10">REPORTED BY</span>
              </td>
              <td>
                <table className="dxeButtonEdit dropdown-content" cellSpacing={1} cellPadding={0} id="ddlAllotedBy" border={0} style={{height: 35, width: 350}}>
                  <tbody><tr>
                      <td style={{display: 'none'}}><input id="ddlAllotedBy_VI" name="ddlAllotedBy_VI" type="hidden" defaultValue="--Select--" /></td><td className="dxic" onmousedown="return aspxDDDropDown('ddlAllotedBy', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea dxeEditAreaSys" name="ctl00$MainContent$ddlAllotedBy" defaultValue="--Select--" id="ddlAllotedBy_I" onchange="aspxETextChanged('ddlAllotedBy')" onblur="aspxELostFocus('ddlAllotedBy')" onfocus="aspxEGotFocus('ddlAllotedBy')" type="text" onkeydown="aspxEKeyDown('ddlAllotedBy', event)" style={{fontSize: 14, height: '100%', textAlign: 'Center'}} autoComplete="off" /></td><td id="ddlAllotedBy_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('ddlAllotedBy', event)" style={{fontSize: 14, KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                          <tbody><tr>
                              <td className="dx"><img id="ddlAllotedBy_B-1Img" className="dxEditors_edtDropDown" src={empty} alt="v" /></td>
                            </tr>
                          </tbody></table></td>
                    </tr>
                  </tbody></table><input type="hidden" id="ddlAllotedBy_DDDWS" name="ddlAllotedBy_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="ddlAllotedBy_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                  <table id="ddlAllotedBy_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                    <tbody><tr>
                        <td onmousedown="aspxPWMDown(event,'ddlAllotedBy_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="ddlAllotedBy_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                            <tbody><tr>
                                <td id="ddlAllotedBy_DDD_PWC-1" style={{height: '100%'}}><div id="ddlAllotedBy_DDD_CSD-1">
                                    <table className="dxeListBox" cellSpacing={0} cellPadding={0} id="ddlAllotedBy_DDD_L" border={0} style={{fontSize: 14, borderCollapse: 'separate'}}>
                                      <tbody><tr>
                                          <td valign="top"><div id="ddlAllotedBy_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                              <input id="ddlAllotedBy_DDD_L_VI" type="hidden" name="ctl00$MainContent$ddlAllotedBy$DDD$L" defaultValue="--Select--" /><table id="ddlAllotedBy_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                <tbody><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem dxeListBoxItemSelected" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI0T0">--Select--</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI1T0">Chandler Dev</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI2T0">DESSS Admin</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI3T0">Mohan &nbsp;Kumar T N</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI4T0">Nithish Kumar K</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI5T0">Prashanth V</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI6T0">Pravinkanth P</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI7T0">Prem &nbsp;Kumar E</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI8T0">Rabiyulfahim H</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI9T0">Sangeetha priya S</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI10T0">Sathya Dev</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI11T0">Sheshu Chandrasekar</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI12T0">Shilpaa Chandrasekar</td>
                                                  </tr><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem" style={{fontSize: 14}} id="ddlAllotedBy_DDD_L_LBI13T0">Testing Manager</td>
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
                </div>
              </td>
              <td>
                <button className="CssBtn" style={{width: 150}} >Add Employee</button>
              </td>
            </tr>
            <tr>
              <td style={{width: 150}}>
                <span id="kasdjf">SUB TASK</span>
              </td>
              <td style={{width: 600}}>
                <span style={{fontFamily: 'Calibri', fontWeight: 'normal'}}><input id="CbSubTask" type="checkbox" name="ctl00$MainContent$CbSubTask" defaultChecked="checked" onclick="javascript:setTimeout('__doPostBack(\'ctl00$MainContent$CbSubTask\',\'\')', 0)" /></span>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label21">CARD VIEW STATUS</span>
              </td>
              <td>
                <select name="ctl00$MainContent$ddlCardViewStatus" id="ddlCardViewStatus" className="dropdown-content" style={{fontFamily: 'Calibri', fontSize: 14, height: 35, width: 350}}>
                  <option selected="selected" value="Unassigned">Unassigned</option>
                  <option value="Assigned">Assigned</option>
                  <option value="InProgress">InProgress</option>
                  <option value="Completed">Completed</option>
                  <option value="Completed">Closed</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <span id="lblEmail">EMAIL</span>
              </td>
              <td>
                <span style={{fontFamily: 'Calibri', fontWeight: 'normal'}}><input id="cbEmail" type="checkbox" name="ctl00$MainContent$cbEmail" /></span>
              </td>
            </tr>
            <tr className='mobile-issus'>
            <td>
                <span id="lblEmail">Search Email :</span>
              </td>
            <td>
                <input name="ctl00$MainContent$txtSearchEmail" type="text" id="txtSearchEmail" title="Search Email" className="textBoxCs" style={{fontFamily: 'Calibri', fontSize: 14, height: 30}} />
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="lblEmail">Cc :</span>
              </td>
              <td>
                <textarea name="ctl00$MainContent$txtCc" rows={2} cols={20} id="txtCc" title="Separate with semicolon. (e.g) info@desss.com;helpdesk@desss.com" style={{fontFamily: 'Calibri', fontSize: 14, height: 70, width: 350}} defaultValue={""} />
              </td>
            </tr>
            <tr>
              <td>
                <span id="Label17">IsACTIVE</span>
              </td>
              <td>
                <span style={{fontFamily: 'Calibri', fontWeight: 'normal'}}><input id="cbActive" type="checkbox" name="ctl00$MainContent$cbActive" defaultChecked="checked" /></span>
              </td>
            </tr>
            <tr>
              <td>
                <span id="Label19">IsBillable</span>
              </td>
              <td>
                <span style={{fontFamily: 'Calibri', fontWeight: 'normal'}}><input id="cbBillable" type="checkbox" name="ctl00$MainContent$cbBillable" /></span>
              </td>
            </tr>
            <tr className='mobile-issus' id="rowallotto">
              <td style={{width: 150}}>
                <span id="Label11">ALLOTTED TO</span>
              </td>
              <td colspan="2" className="auto-style3">
                <table className="dxeButtonEdit dropdown-content" cellSpacing={1} cellPadding={0} validationgroup="p" id="ddlAllotedTo" border={0} style={{height: 35, width: 350}}>
                  <tbody><tr>
                      <td style={{display: 'none'}}><input id="ddlAllotedTo_VI" name="ddlAllotedTo_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('ddlAllotedTo', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea dxeEditAreaSys" id="ddlAllotedTo_I" name="ctl00$MainContent$ddlAllotedTo" onfocus="aspxEGotFocus('ddlAllotedTo')" onblur="aspxELostFocus('ddlAllotedTo')" onchange="aspxETextChanged('ddlAllotedTo')" onkeydown="aspxEKeyDown('ddlAllotedTo', event)" type="text" style={{fontSize: 14, height: '100%', textAlign: 'Center'}} autoComplete="off" /></td><td id="ddlAllotedTo_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('ddlAllotedTo', event)" style={{fontSize: 14, KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                          <tbody><tr>
                              <td className="dx"><img id="ddlAllotedTo_B-1Img" className="dxEditors_edtDropDown" src={empty} alt="v" /></td>
                            </tr>
                          </tbody></table></td>
                    </tr>
                  </tbody></table><input type="hidden" id="ddlAllotedTo_DDDWS" name="ddlAllotedTo_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="ddlAllotedTo_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                  <table id="ddlAllotedTo_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                    <tbody><tr>
                        <td onmousedown="aspxPWMDown(event,'ddlAllotedTo_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="ddlAllotedTo_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                            <tbody><tr>
                                <td id="ddlAllotedTo_DDD_PWC-1" style={{height: '100%'}}><div id="ddlAllotedTo_DDD_CSD-1">
                                    <input type="hidden" id="ddlAllotedTo_DDD_LDeletedItems" name="ddlAllotedTo_DDD_LDeletedItems" defaultValue /><input type="hidden" id="ddlAllotedTo_DDD_LInsertedItems" name="ddlAllotedTo_DDD_LInsertedItems" defaultValue /><input type="hidden" id="ddlAllotedTo_DDD_LCustomCallback" name="ddlAllotedTo_DDD_LCustomCallback" defaultValue /><table className="dxeListBox" cellSpacing={0} cellPadding={0} id="ddlAllotedTo_DDD_L" border={0} style={{fontSize: 14, borderCollapse: 'separate'}}>
                                      <tbody><tr>
                                          <td valign="top"><div id="ddlAllotedTo_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                              <input id="ddlAllotedTo_DDD_L_VI" type="hidden" name="ctl00$MainContent$ddlAllotedTo$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                <tbody><tr id="ddlAllotedTo_DDD_L_LBI-1" className="dxeListBoxItemRow">
                                                    <td id="ddlAllotedTo_DDD_L_LBI-1T0" className="dxeListBoxItem" style={{fontSize: 14}}>&nbsp;</td>
                                                  </tr>
                                                </tbody></table><table id="ddlAllotedTo_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                <tbody /></table>
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
                </div><table id="ddlAllotedTo_LP" className="dxeLoadingPanel" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                  <tbody><tr>
                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=2_24-y60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="ddlAllotedTo_TL">Loading…</span></td>
                    </tr>
                  </tbody></table><div id="ddlAllotedTo_LD" className="dxeLoadingDiv" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                </div>
              </td>
            </tr>
            <tr className='mobile-issus' id="tbldat">
              <td>
                <span>TASK DATE:</span>
              </td>
              <td className="auto-style3">
                {/* Render the calendar */}
                <Calendar onChange={(date) => this.setState({ date })}value={this.state.date}/>

                {/* You can display the selected date */}
                <p>Selected date: {this.state.date.toDateString()}</p>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label5">PRIORITY</span>
              </td>
              <td align="left" className="auto-style3">
                <table id="rbPriority" border={0} style={{height: 26, width: 228}}>
                  <tbody><tr>
                      <td><input id="rbPriority_0" type="radio" name="ctl00$MainContent$rbPriority" defaultValue="Low" defaultChecked="checked" /><label htmlFor="rbPriority_0">Low</label></td><td><input id="rbPriority_1" type="radio" name="ctl00$MainContent$rbPriority" defaultValue="Medium" /><label htmlFor="rbPriority_1">Medium</label></td><td><input id="rbPriority_2" type="radio" name="ctl00$MainContent$rbPriority" defaultValue="High" /><label htmlFor="rbPriority_2">High</label></td><td><input id="rbPriority_3" type="radio" name="ctl00$MainContent$rbPriority" defaultValue="Critical" /><label htmlFor="rbPriority_3">Critical</label></td>
                    </tr>
                  </tbody></table>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="Label9">LINK ISSUE</span>
              </td>
              <td className="auto-style3">
                <table className="dxeButtonEdit dropdown-content" cellSpacing={1} cellPadding={0} id="ddlLinkIssue" border={0} style={{height: 35, width: 350}}>
                  <tbody><tr>
                      <td style={{display: 'none'}}><input id="ddlLinkIssue_VI" name="ddlLinkIssue_VI" type="hidden" /></td><td className="dxic" onmousedown="return aspxDDDropDown('ddlLinkIssue', event)" style={{width: '100%', paddingLeft: 1, paddingRight: 1, paddingTop: 1, paddingBottom: 1}}><input className="dxeEditArea dxeEditAreaSys" name="ctl00$MainContent$ddlLinkIssue" id="ddlLinkIssue_I" onchange="aspxETextChanged('ddlLinkIssue')" onblur="aspxELostFocus('ddlLinkIssue')" onfocus="aspxEGotFocus('ddlLinkIssue')" type="text" onkeydown="aspxEKeyDown('ddlLinkIssue', event)" readOnly="readonly" style={{height: '100%', cursor: 'default'}} autoComplete="off" /></td><td id="ddlLinkIssue_B-1" className="dxeButtonEditButton" onmousedown="return aspxDDDropDown('ddlLinkIssue', event)" style={{KhtmlUserSelect: 'none'}}><table className="dxbebt" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate'}}>
                          <tbody><tr>
                              <td className="dx"><img id="ddlLinkIssue_B-1Img" className="dxEditors_edtDropDown" src={empty} alt="v" /></td>
                            </tr>
                          </tbody></table></td>
                    </tr>
                  </tbody></table><input type="hidden" id="ddlLinkIssue_DDDWS" name="ddlLinkIssue_DDDWS" defaultValue="0:0:-1:-10000:-10000:0:-10000:-10000:1" /><div id="ddlLinkIssue_DDD_PW-1" style={{position: 'absolute', left: 0, top: 0, zIndex: 10000, visibility: 'hidden', display: 'none'}}>
                  <table id="ddlLinkIssue_DDD_PWST-1" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', position: 'relative'}}>
                    <tbody><tr>
                        <td onmousedown="aspxPWMDown(event,'ddlLinkIssue_DDD',-1,false)" style={{width: 200, cursor: 'default'}}><table id="ddlLinkIssue_DDD_CLW-1" cellSpacing={0} cellPadding={0} border={0} style={{width: 200, borderCollapse: 'separate'}}>
                            <tbody><tr>
                                <td id="ddlLinkIssue_DDD_PWC-1" style={{height: '100%'}}><div id="ddlLinkIssue_DDD_CSD-1">
                                    <input type="hidden" id="ddlLinkIssue_DDD_LDeletedItems" name="ddlLinkIssue_DDD_LDeletedItems" defaultValue /><input type="hidden" id="ddlLinkIssue_DDD_LInsertedItems" name="ddlLinkIssue_DDD_LInsertedItems" defaultValue /><input type="hidden" id="ddlLinkIssue_DDD_LCustomCallback" name="ddlLinkIssue_DDD_LCustomCallback" defaultValue /><table className="dxeListBox" cellSpacing={0} cellPadding={0} id="ddlLinkIssue_DDD_L" border={0} style={{borderCollapse: 'separate'}}>
                                      <tbody><tr>
                                          <td valign="top"><div id="ddlLinkIssue_DDD_L_D" className="dxlbd" style={{width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                                              <input id="ddlLinkIssue_DDD_L_VI" type="hidden" name="ctl00$MainContent$ddlLinkIssue$DDD$L" defaultValue /><table cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'separate', visibility: 'hidden!important', display: 'none!important'}}>
                                                <tbody><tr id="ddlLinkIssue_DDD_L_LBI-1" className="dxeListBoxItemRow">
                                                    <td id="ddlLinkIssue_DDD_L_LBI-1T0" className="dxeListBoxItem">&nbsp;</td>
                                                  </tr>
                                                </tbody></table><table id="ddlLinkIssue_DDD_L_LBT" cellSpacing={0} cellPadding={0} border={0} style={{width: '100%', borderCollapse: 'separate'}}>
                                                <tbody><tr className="dxeListBoxItemRow">
                                                    <td className="dxeListBoxItem dxeListBoxItemSelected" id="ddlLinkIssue_DDD_L_LBI0T0" dxtext>&nbsp;</td>
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
                </div><table id="ddlLinkIssue_LP" className="dxeLoadingPanel" cellSpacing={0} cellPadding={0} border={0} style={{borderCollapse: 'collapse', left: 0, top: 0, zIndex: 30000, display: 'none'}}>
                  <tbody><tr>
                      <td className="dx" style={{paddingRight: 8}}><img src="/DXR.axd?r=2_24-y60ci" alt align="middle" /></td><td className="dx" style={{paddingLeft: 0}}><span id="ddlLinkIssue_TL">Loading…</span></td>
                    </tr>
                  </tbody></table><div id="ddlLinkIssue_LD" className="dxeLoadingDiv" style={{left: 0, top: 0, zIndex: 29999, display: 'none', position: 'absolute'}}>
                </div>
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span id="lblSource">SOURCE</span>
              </td>
              <td className="auto-style3">
                <select name="ctl00$MainContent$ddlSource" id="ddlSource" className="dropdown-content" style={{fontFamily: 'Calibri', fontSize: 14, height: 35, width: 350, marginBottom: "5px"}}>
                  <option selected="selected" value="Issue">Issue</option>
                  <option value="Task">Task</option>
                  <option value="Ticket">Ticket</option>
                  <option value="Email">Email</option>
                </select>
              </td>
            </tr>
            <tr className='mobile-issus' id="tbticketno">
              <td>
                <span id="lblticketno">Ticket No</span>
              </td>
              <td className="auto-style3">
                <input name="ctl00$MainContent$txtticketno" type="text" readOnly="readonly" id="txtticketno" className="textBoxCs" style={{fontFamily: 'Calibri', fontSize: 14, height: 30, width: 350}} />
              </td>
            </tr>
            <tr className='mobile-issus'>
              <td>
                <span>ATTACHMENT FILES</span>
              </td>
              <td className="auto-style3">
                <input type="file" multiple="multiple" name="ctl00$MainContent$FileUpload1" id="FileUpload1" />
              </td>
            </tr>
          </tbody></table>
      </td> 
    </tr>
    <tr style={{borderTop:"none"}}>
      <td colSpan={3} align="center" style={{border:"none",textAlign:"center"}}>
        <button className='btnSaveTask'>SAVE TASK FOR NOW</button>
        <button className='btnAssignTask'>ASSIGN NOW</button>
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

export default Issus