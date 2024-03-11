import React, { Component } from 'react';
import logohp from '../images/logohp.png';
import helpdesk_bg from '../images/helpdesk_bg.jpg';
import desss_logo from '../images/desss_logo.jpg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { LoginInputs } from './logininput';
import axios from 'axios';
import logohp1 from '../images/zmthd_logo.png';
import Loader from '../images/loader2.gif';
import Spinner from 'react-bootstrap/Spinner';

const validate = Yup.object({

    CompId: Yup.string()
      .required('Company ID is Required...'),

    EmailID: Yup.string()
      .email('Enter Valid email...')
      .required('Email iD is Required...'),

    password: Yup.string()
      .required('Password is Required...')
  });

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      txtPassword: '',
      txtUser : '',
      txtCompany: '',
      alert: 'false',
      LoaderShow: false,
  };
}

txtPasswordChangeHandler = (event) => {
 this.setState({ [event.target.name]: event.target.value });
}
txtUserChangeHandler = (event) => {
  this.setState({ [event.target.name]: event.target.value });
}
txtCompanyChangeHandler = (event) => {
  this.setState({ [event.target.name]: event.target.value });
}
componentDidMount(){
  let auth = false;
	localStorage.setItem("auth", JSON.stringify(auth));
}
// LoginMethod = (eve) => {
//   // alert('hi');
//   console.log('Update2', this.state);  
//   axios.post('https://helpdeskservice.desss-portfolio.com/api/Login/LoginAdmin?CompanyID=DESSS&EmailID=admin@desss.com&Password=ChennaiDev')
//       .then(res => {  
//       //  console.log('Update2', res);  
//      })
//       .catch(error => {
//       console.log(error);
    
//      })
// }
  render() {
    return (
      <div>
       {/* <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
       </Spinner> */}
       

      
        {this.state.LoaderShow === true ? (
          <div className='loader-img'>
            <img   src={Loader} height="50" width="50" alt="Helpdesk" />
          </div>
        ) : (
          ''
        )}
     

        <Formik
                // initialValues={{
                //     CompId: '',
                //     EmailID: '',
                //     password: ''
                // }}
                initialValues={{
                    CompId: 'desss',
                    EmailID: 'admin@desss.com',
                    password: 'ChennaiDev'
                }}
                // initialValues={{
                //     CompId: 'UsAwardsSupply',
                //     EmailID: 'kamali@desss.com',
                //     password: '123456'
                // }}
                validationSchema={validate}

                onSubmit={ values =>{
                    // console.log('Values', values);
                    this.setState({ LoaderShow: true });  
                    axios.post('https://helpdeskservice.desss-portfolio.com/api/Login/LoginAdmin?CompanyID=' + values.CompId + '&EmailID=' + values.EmailID + '&Password=' + values.password)
                    .then(response => {
                    this.setState({ LoaderShow: false });  
                    var LoginDatas = response.data.data[0];
                    var status = response.data.status
                    console.log('response', LoginDatas);
                    let auth = true;
                    localStorage.setItem("auth", JSON.stringify(auth));
                    if(status === 200){
                      localStorage.setItem("HelpDeskLoginDatas", JSON.stringify(LoginDatas));

                      if(LoginDatas.UserType === 'Client'){
                        this.props.history.push('/tickets');
                      }else if(LoginDatas.UserType === 'User'){
                        this.props.history.push('/home');
                      }
                      else if(LoginDatas.UserType === 'Admin'){
                        this.props.history.push('/home');
                      }
                     
                    }else{
                      alert('Invalid Credentials');
                    }

                  })
                   .catch(error => {
                    console.log('error', error);
                    this.setState({ LoaderShow: false });  
                    alert('Invalid Authentication!');
                    })
                   
                }} 
                >
{formik => (
                        <Form className='login'>
                          <div className='login-img' style={{width:"100%"}}>
                           <img style={{padding: "0px 0px 0px 0px", width: "100%", backgroundColor: "#ec6c1a"}} src={logohp1} height="80" width="212" alt="Helpdesk" />
                          </div>
                           <p>Login to Your Account</p>
                         <div style={{backgroundColor: "#fff",padding: "20px",borderRadius: "10px"}}>
                         < LoginInputs label="Company ID :" type="text" name="CompId" />
                          < LoginInputs label="Email ID:" type="email" name="EmailID" />
                          < LoginInputs label="Password :" type="password" name="password" />
                          {/* <a href="#" onClick={() => {this.props.history.push('/Forgot_Password')}}>I forgot</a> */}
                          <button class="login_button_new" type="submit">Sign in</button>
                         </div>
                          {/* <a>Forgot Password</a> */}
                        </Form>
                   
                )}
            </Formik>

        </div>
    )
  }
}

export default Login