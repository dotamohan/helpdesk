import React, { Component } from 'react';
import {Header} from './header';
import axios from 'axios';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { LoginInputs } from '../login/logininput';
import file from '../images/helpdesk_bg.jpg';
import Footer from '../Home/footer';
import Loader from '../images/loader2.gif';

const validate = Yup.object({

    Fname: Yup.string()
      .required('First Name is Required'),
    Lname: Yup.string()
      .required('Last Name is Required'),
    CompName: Yup.string()
      .required('Company Name is Required'),
    city: Yup.string()
     .required('City is Required'),
    Address: Yup.string()
     .required('Address is Required'),
    State: Yup.string()
     .required('State is Required'),
    Zip: Yup.string()
     .required('Zip is Required'),
     password: Yup.string()
     .required('Password is Required'),
     ConfirmPassword: Yup.string()
     .required('Confirm Password is Required'),
    Email: Yup.string()
     .required('Email is Required')
     .email('Enter Valid email'),
  });

export class profile extends Component {
    constructor() {
		super();
		this.state = {
		  FirstName: '',
		  LastName: '',
		  CompanyName: '',
		  City: '',
		  Address: '',
		  State: '',
		  Zip: '',
		  Password: '',
		  ConfirmPassword: '',
		  Email: '',
      ProfileData:  JSON.parse(localStorage.getItem("ClientprofileData")),
      // ProfileData:  [],
      LoginDatas:  JSON.parse(localStorage.getItem("HelpDeskLoginDatas")),
      ProfileImg: '',
      imagePreviewUrl: '',
      Auth:  JSON.parse(localStorage.getItem("auth")),
      LoaderShow: false,
	  };
    this.handleImageChange = this.handleImageChange.bind(this);
	}
componentDidMount(){

  const Auth =  JSON.parse(localStorage.getItem("auth"));
  if(!Auth){
   this.props.history.push('/login');
  }

  // var Img = this.state.ProfileData.ImagePath.split("~");
  // var IMG ='http://helpdesk-online.net' + Img[1];
  // this.setState({ ProfileImg: IMG});
  // console.log('Image Path',IMG);

    this.setState({ LoaderShow: true });
    axios.get('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/GetClientprofile?ClientID='+this.state.LoginDatas.ClientID+'&ClientUserID=' + this.state.LoginDatas.ClientUserID)
    .then(response => {
    console.log('response', response);
    var data = response.data.data[0];

    
    // this.setState({ProfileData: data});

    // this.setState({FirstName: this.state.ProfileData.FirstName});
    // this.setState({LastName: this.state.ProfileData.LastName});
    // this.setState({ClientName: this.state.ProfileData.ClientName});
    // this.setState({City: this.state.ProfileData.City});
    // this.setState({Address: this.state.ProfileData.Address});
    // this.setState({State: this.state.ProfileData.State});
    // this.setState({Zip: this.state.ProfileData.Zip});
    // this.setState({Password: this.state.ProfileData.ClientPassword});
    // this.setState({ConfirmPassword: this.state.ProfileData.ClientPassword});
    // this.setState({Email: this.state.ProfileData.UserEmail});


    console.log('ProfileData', this.state.ProfileData);
    var Img = this.state.ProfileData.ImagePath.split("~");
    var IMG ='http://helpdesk-online.net' + Img[1];
    this.setState({ ProfileImg: IMG});
    console.log('Image Path',IMG);

    this.setState({ LoaderShow: false });
    })
   .catch(error => {
    console.log('error', error);
    this.setState({ LoaderShow: false });
    })

}
GetProfileData(){
  this.setState({ LoaderShow: true });
  axios.get('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/GetClientprofile?ClientID='+this.state.LoginDatas.ClientID+'&ClientUserID=' + this.state.LoginDatas.ClientUserID)
  .then(response => {
  console.log('response', response);
  var data = response.data.data[0];

  console.log('ProfileData', this.state.ProfileData);
  var Img = this.state.ProfileData.ImagePath.split("~");
  var IMG ='http://helpdesk-online.net' + Img[1];
  this.setState({ ProfileImg: IMG});
  console.log('Image Path',IMG);

  this.setState({ LoaderShow: false });
  })
 .catch(error => {
  console.log('error', error);
  this.setState({ LoaderShow: false });
  })
}
handleImageChange(e) {
    e.preventDefault();

    // Get the selected file from the input
    const file = e.target.files[0];

    // Create a FileReader instance
    const reader = new FileReader();

    // Set up a callback for when the FileReader is done
    reader.onloadend = () => {
      this.setState({
        ProfileImg: reader.result, // Set the image preview URL
      });
    };

    // Read the selected file as a data URL
    reader.readAsDataURL(file);
  }
  refresh(){
    window.location.reload();
  }
  
  render() {
    const { ProfileImg } = this.state;
    return (
        <Formik
                initialValues={{
                  Fname: this.state.ProfileData.FirstName,
                    Lname: this.state.ProfileData.LastName,
                    CompName: this.state.ProfileData.ClientName,
                    city: this.state.ProfileData.City,
                    Address: this.state.ProfileData.Address,
                    State: this.state.ProfileData.State,
                    Zip: this.state.ProfileData.Zip,
                    password: this.state.ProfileData.ClientPassword,
                    ConfirmPassword: this.state.ProfileData.ClientPassword,
                    Email: this.state.ProfileData.UserEmail,
                }}
                validationSchema={validate}

                onSubmit={ values =>{
                    console.log('Values', values);
                    this.setState({ LoaderShow: true });
                    axios.post('https://helpdeskservice.desss-portfolio.com/api/ClientProfile/UpdateClientprofile?ClientID='+this.state.LoginDatas.ClientID+'&City='+values.city+'&UserEmail='+values.Email+'&ClientPassword='+values.password+'&FirstName='+values.Fname+'&LastName='+values.Lname+'&ImagePath=~/ChatImages/6_3.jpg&State='+values.State+'&Zip='+values.Zip+'&Address='+values.Address+'&ClientUserID='+this.state.LoginDatas.ClientUserID+'&ClientName='+values.CompName+'&CompanyID='+this.state.LoginDatas.CompanyID)
                    .then(response => {
                    var ProfileUpdate = response.data.data[0];
                    console.log('response', ProfileUpdate);
                    this.setState({ LoaderShow: false });
                    this.componentDidMount();
                    // this.refresh();
                    // this.props.history.push('/profile');
                    })
                   .catch(error => {
                    console.log('error', error);
                    this.setState({ LoaderShow: false });
                    })
                   
                }} 
                >

{formik => (
            <div>
                {this.state.LoaderShow === true ? (
          <div className='loader-img'>
            <img   src={Loader} height="50" width="50" alt="Helpdesk" />
          </div>
        ) : (
          ''
        )}
        
 <Header />
        
                <div className='profile'>
                    <h2>Your Company Profile</h2>
                  <Form>
                   <div className='profile-detail'>
                    <div className='profile-form'>
                      < LoginInputs label="First Name :" type="text" name="Fname"/>
                      < LoginInputs label="Last Name:" type="text" name="Lname" />
                    </div>
                    <div className='profile-form'>
                      < LoginInputs label="Company Name :" type="text" name="CompName" />
                      < LoginInputs label="City :" type="text" name="city" />
                    </div>
                    <div className='profile-form'>
                      < LoginInputs label="Address :" type="areatext" name="Address" />
                      < LoginInputs label="State :" type="text" name="State" />
                    </div>
                    <div className='profile-form'>
                      < LoginInputs label="Zip :" type="number" name="Zip" />
                      < LoginInputs label="Password :" type="password" name="password" />
                    </div>
                    <div className='profile-form'>
                      < LoginInputs label="Confirm Password :" type="password" name="ConfirmPassword" />
                      < LoginInputs label="Email :" type="Email" name="Email" />
                    </div>
                    <div className='profile-form'>
                    < LoginInputs label="File :" type="file" name="file" onChange={this.handleImageChange}/>
                      {ProfileImg && (
                        <div className='mb-2'>
                          <img
                          src={this.state.ProfileImg}
                          alt="Preview"
                          className="preview-image"
                        />
                        </div>
                      )}
                      {/* <img  src={this.state.ProfileImg} alt='file' /> */}
                    </div>
                   </div>
                    <div className='save-btn'>
                      <button class="login_button_new" type="submit">Save</button>
                    </div>
                  </Form>
                </div>
                <div className='free-space'></div>
                <Footer />
              </div>
                )}
            </Formik>
           
    //   <div>
    //     <Header />
    //     <h2>Your Company Profile</h2>
    //   </div>
      
    )
  }
}

export default profile