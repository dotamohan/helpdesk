import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import axios from 'axios';
import Loader from '../images/loader2.gif';


export class burnchart extends Component {

  constructor() {
		super();
		this.state = {
      LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      Auth:  JSON.parse(localStorage.getItem("auth")),
      LoaderShow: false,
     
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
        <div>

        </div>

        <div className='free-space'></div>
        <Footer />
      </div>
    )
  }
}

export default burnchart