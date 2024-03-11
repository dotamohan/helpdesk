import React, { Component } from 'react';
import Header from './header';
import redimg from '../images/6_3.jpg';
import axios from 'axios';
import moment from 'moment';
import ReactQuill from 'react-quill';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import StarRatings from 'react-star-ratings';
import Footer from '../Home/footer'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


var modules = {
  toolbar: [
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { align: [] }
    ],
    [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
  ]
};

var formats = [
  "header", "height", "bold", "italic",
  "underline", "strike", "blockquote",
  "list", "color", "bullet", "indent",
  "link", "image", "align", "size",
];

export class Email extends Component {
constructor() {
    super();
    this.state = {
	  LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      EmailDatas:  JSON.parse(localStorage.getItem("EmailDatas")),
      TicketStatus:  localStorage.getItem("TicketStatus"),
      ChatDatas: [],
      MessageData: '',
      HideCKEditor: 'Yes',
      PopUpShow : false,
      openModal : false,
      Ratings : 0,
      UserEmail: '',
      UserName: '',
      Auth:  JSON.parse(localStorage.getItem("auth")),
	  };
 }
componentDidMount(){

    const Auth =  JSON.parse(localStorage.getItem("auth"));
    if(!Auth){
     this.props.history.push('/login');
    }

    console.log('TicketStatus 1' , this.state.TicketStatus)

    var Getrating = 'https://helpdeskservice.desss-portfolio.com/api/TicketSave/Getrating?ClientUserID='+this.state.LoginDatas.ClientUserID;
    axios.get(Getrating)
    .then(res => {
       var Userdata = res.data.data[0];
       this.setState({ UserEmail: Userdata.UserEmail });
       this.setState({ UserName: Userdata.Name });
    console.log('Getrating',  this.state.UserEmail, this.state.UserName);
   })
    .catch(error => {
    console.log(error);
   })

    var data = [];
    this.setState({ ChatDatas: data });
    this.setState({ HideCKEditor: 'Yes' });
    var EmailData = 'https://helpdeskservice.desss-portfolio.com/api/clientsheet/GetFilestatus?TicketId='+ this.state.EmailDatas.MiscEID;
    axios.get(EmailData)
    .then(res => {
       var response = res.data.data;
       console.log("REsponse", response[0].errorMsg === 'No Data Found');
       if(response[0].errorMsg === 'No Data Found'){
        this.setState({ ChatDatas: [] });
       }else{
        response.forEach((key, value) => {
            if(key.ImagePathname){
                var Img = key.ImagePathname.split("~");
                var IMG ='http://helpdesk-online.net' + Img[1];
            }else{
                IMG = key.ImagePathname;
            }
            data.push({
                ChatId: key.ChatId, 
                ClassType: key.ClassType,
                ClientUserID: key.ClientUserID,
                date: moment(key.StartDate).format("MM/DD/YYYY"),
                time: moment(key.StartDate).format("h:mm:ss A"),
                EName: key.EName,
                ImagePathname:  IMG,
                Message: key.Message,
                TicketId: key.TicketId,
                UserId: key.UserId,
                UserName: key.UserName,
                UserName1: key.UserName1,
                UserNameId: key.UserNameId,
                client: key.client,
                initial: key.initial,
                initialEmp: key.initialEmp,
              });
           });
         this.setState({ ChatDatas: data });
         console.log('EmailData', this.state.ChatDatas);
       }
   })
    .catch(error => {
    console.log(error);
   });
}

CKEditorMethod(){
    this.setState({ HideCKEditor: 'No' });
}
ClosedTicketMethod(){
    var closed = 'https://helpdeskservice.desss-portfolio.com/api/TicketStatusUpd/Ticket?ticketid=' + this.state.EmailDatas.MiscEID;
    axios.post(closed)
    .then(res => {
    console.log('Closed',  res.data.data);
    // this.props.history.push('/tickets');
   })
    .catch(error => {
    console.log(error);
   })
}
AddCommentMethod(){
    var addCmt = 'https://helpdeskservice.desss-portfolio.com/api/clientsheet/Insertchat?Message='+this.state.MessageData+'&EmpID='+this.state.LoginDatas.ClientID+'&ClientUserID='+this.state.LoginDatas.ClientUserID+'&UserName='+this.state.LoginDatas.ClientName+'&TicketId='+this.state.EmailDatas.MiscEID+'&UserId='+this.state.LoginDatas.ClientID+'&client=True';
    axios.post(addCmt)
    .then(res => {
    console.log('AddCommentMethod',  res.data.data);
    this.componentDidMount();
   })
    .catch(error => {
    console.log(error);
   })
}
SubmitRatingsMethod(){
    var Comment = document.getElementById('comment').value;
    var addRatings = 'https://helpdeskservice.desss-portfolio.com/api/TicketSave/Saverating?Stars='+this.state.Ratings+'&TicketId='+this.state.EmailDatas.MiscEID+'&Name='+this.state.UserName+'&Email='+this.state.UserEmail+'&Comments=' + Comment;
    axios.post(addRatings)
    .then(res => {
    console.log('addRatings',  res.data.data);
    this.props.history.push('/tickets');
   })
    .catch(error => {
    console.log(error);
   })
}
TextChange = (e) => {
    const msgData = e. replace(/(<([^>]+)>)/gi, "");
    this.setState({ MessageData: msgData });
    console.log("content---->", this.state.MessageData);
};
OpenPopUp = e =>{
    this.ClosedTicketMethod();
    e.preventDefault()
    this.setState({openModal : true})
}
onCloseModal = ()=>{
    this.setState({openModal : false});
}
changeRating = e =>{
   this.setState({Ratings : e})
}
  render() {
    return (
      <div>
        <Header />
            <div>
                <div className='centerBG'>
                <table style={{width:"90%",margin:"30px auto"}}>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link to="/tickets" style={{float:'left',marginBottom:"20px"}} className='backtomain'>Back to Ticket</Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="tkComments" style={{display:'flex',fontSize:'13px'}}><p  style={{padding:'0px', paddingRight:"10px",marginTop:"1px",fontSize:'13px'}}>Ticket Status:</p><label className="lblcomment">{this.state.TicketStatus}</label>
                                            </td>
                                            <td>
                                                {this.state.TicketStatus === 'Open' ||  this.state.TicketStatus === 'Progress' ? (
                                                   <input type="submit" name="ctl00$MainContent$btnReopen" value="Closed" id="btnClose" class="editor-btn" onClick={this.OpenPopUp} />
                                                ) : (
                                                    <input type="submit" name="ctl00$MainContent$btnReopen" value="ReOpen" id="btnReopen" class="editor-btn" />
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                <div class="center-container">
                                    <ul class="helpdesk-chat">
                                    {
                                     this.state.ChatDatas.map((item) => (
                                        <li class="msg-left">
                                            <div class="msg-content-list">
                                                <div class="helpdesk-content">
                                                    <div class="profile-img">
                                                    {/* <img id="Image" src={redimg} style={{width:"50px",borderWidth:"0px"}} /> */}
                                                    {item.ImagePathname ? (
                                                         <img id="Image" src={item.ImagePathname} style={{width:"50px",borderWidth:"0px"}} />
                                                    ) : (
                                                        <img id="Image" src={redimg} style={{width:"50px",borderWidth:"0px"}} />
                                                    )}
                                                       
                                                    </div>
                                                    <div class="content-msg">
                                                        <h6>{item.UserName}</h6>
                                                        <span><i class="fa fa-clock-o" aria-hidden="true">{item.date} {item.time}</i></span>
                                                        <p class="content-describe">{item.Message}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                     ))
                                     }
                                      {this.state.HideCKEditor === 'No' ? (
                                       <li class="msg-left">
                                            <div class="msg-content-list">
                                               <div class="helpdesk-content">
                                                   <ReactQuill
                                                    theme="snow"
                                                    modules={modules}
                                                    formats={formats}
                                                    placeholder="write your content ...."
                                                    onChange={this.TextChange}
                                                    style={{ height: "220px" }}
                                                    >
                                                </ReactQuill>
                                                </div>
                                                <button class="editor-btn" id="btnstart" onClick={() => { this.AddCommentMethod()}}>Add Comment</button>
                                            </div>
                                        </li>
                                    ) : (
                                        ''
                                    )}
                                      
                                    </ul>
                                </div>
                                <div id="left" class="center-container">
                                   <ul id="ulchat" class="helpdesk-chat">
                                       <li class="msg-start-btn">
                                           <button id="btnstart" onClick={() => { this.CKEditorMethod()}}>Start</button>
                                       </li>
                                   </ul>
                                </div>
                                <table>
                                    <tbody>
                                        <tr>
                                            {/* <td id="tkComments" class="auto-style2"><p>Comments:</p><label id="lblcomment"></label></td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <button onClick={this.onClickButton}>Click Me</button> */}
            <Modal open={this.state.openModal} onClose={this.onCloseModal} classNames='email-modal'>
            <p>Feed Back</p> 
            <StarRatings
             rating={this.state.Ratings}
             starRatedColor="black"
             changeRating={this.changeRating}
             numberOfStars={5}
             name='rating'
            />
            <div className='modal-input'>
                <input defaultValue={this.state.UserName} readOnly/>
                <input defaultValue={this.state.UserEmail} readOnly/>
            </div>
            <textarea className='email-textarea' placeholder='Comments' id='comment'/> 
            <div style={{textAlign:'right'}}>
            <button class="save-bncal" onClick={() => { this.SubmitRatingsMethod()}}>Save</button>
            </div>
           </Modal>
           </div>
           <div className='free-space'></div>
           <Footer />
        </div>
    );
  }
}

export default Email