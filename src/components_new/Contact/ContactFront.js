import React from "react"
import SimpleReactValidator from 'simple-react-validator';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { init } from '@amplitude/analytics-browser';
import { track } from '@amplitude/analytics-browser';
import { Identify, identify } from '@amplitude/analytics-browser';
const recaptchaRef = React.createRef();
class ContactFront extends React.Component{
	
	constructor(props) {
		super(props);
		this.validator = new SimpleReactValidator();
		this.state = {
          first_name: '',
          last_name: '',
          email: '',
          enter_company: '',
          goal: '',
		  shown: "d-none",
		  shown_new: "d-none",
		  shown_captcha: "d-none"
		}
	  this.submitForm = this.submitForm.bind(this);
	  this.setTitle = this.setTitle.bind(this);
	  this.setln = this.setln.bind(this);
	  this.email = this.email.bind(this);
	  this.enter_company = this.enter_company.bind(this);
	  this.goal = this.goal.bind(this);
	}
	
	setTitle(e) {
		this.setState({
			first_name: e.target.value
		});
	}
	setln(e) {
		this.setState({
			last_name: e.target.value
		});
	}
	email(e) {
		this.setState({
			email: e.target.value
		});
	}

	enter_company(e) {
		this.setState({
			enter_company: e.target.value
		});
	}
	goal(e) {
		this.setState({
			goal: e.target.value
		});
	}
	
	
	submitForm() {
	  if (this.validator.allValid()) {
		  
		
		var fnew = this.state.first_name.slice(0, 5);  
		var lnew = this.state.last_name.slice(0, 5);  
		
		if(fnew == lnew){
			this.setState({shown_new: "d-block"});
			setTimeout(
				function() {
					this.setState({shown_new: "d-none"});
				}
			.bind(this),
				2000
			);
			return false;
		}
		
		
		

		var myarr = ["free", "downloads", "offers", "DA", "PA", "affordable price", "clients", "Some example", "services", "giveaways", "goal", "example", "test", "Marketing", "traffic", "offers","Bitcoin", "ervaringen", "review", "Capsules", "Amoxicillin", "blogger", "supplier", "SEO", "backlinks", "Digital", "Marketing", "link builder", "domain authority", "Off–Page",  "Title Tag Optimization", "Meta Tag Optimization", "keyword", "SERPs"];
		
		
		
		var flag = 0;
		for(let i = 0; i < myarr.length; i++){
			if(new RegExp('\\b'+ myarr[i] +'\\b','gi').test(this.state.goal) == true){
				flag = 1;
			}
		}	
		if(flag == 1){
			this.setState({shown: "d-block"});
			setTimeout(
				function() {
					this.setState({shown: "d-none"});
				}
			.bind(this),
				2000
			);
		}
		else{
			init("30c4c799e1eda5b6cfe2d675f3b9e12e");
			
			const identifyObj = new Identify();
identifyObj.set('firstName', this.state.first_name);
			identifyObj.set('lastName', this.state.last_name);
			identifyObj.set('email', this.state.email);
			identifyObj.set('company', this.state.enter_company);
			identifyObj.set('goal', this.state.goal);
identify(identifyObj);
			
			
			const eventProperties = {
			  firstName: this.state.first_name,
			lastName: this.state.last_name,
				email: this.state.email,
				company: this.state.enter_company,
				goal: this.state.goal,

			};
			console.log(eventProperties);
			track('Contact Us Form Filled', eventProperties);
			const payload = {
			  first_name: this.state.first_name,
			  last_name: this.state.last_name,
			  email: this.state.email,	
				company: this.state.enter_company,
				goal: this.state.goal,
				url: window.location.href,
			  	form_name: 'Contact-us',
			 
			}

			axios({
			  method: 'post',
			  url: 'https://steamlinedesign.com/qltech/formbucket/',
			  data: payload, // you are sending body instead
			  headers: {
			   // 'Authorization': `bearer ${token}`,
			  'Content-Type': 'multipart/form-data'
			  }, 
			}).then(function(response) {
			window.location.href = "https://www.qltech.com.au/thank-you/";
		    });	
		}	
		
		//document.getElementById('form').submit()
	  } else {
		this.validator.showMessages();
		// rerender to show messages for the first time
		// you can use the autoForceUpdate option to do this automatically`
		this.forceUpdate();
	  }
	}
	
  render (){
    return(
      <>
       <section className="sec06 pt_20 pb " data-aos="fade-down" data-aos-duration="2000" ata-aos-offset="400">
            <div className="container">
                <div className="row pb_20">
                <div className="col-md-12">
                    <div className="title_wrap_uh text-center">
                        <h2 className="had_ti">Contact Us </h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="form_contact_form">
                     <form method="POST" id="form" action="https://script.google.com/macros/s/AKfycbzteG10RHf7D6zzRQeJJHjBXRE6q4No1v96sBL3oYNI63P80DNHLjLZsEH20IicRNGAYA/exec"  className="row g-3" >
                          <div className="col-md-6">
                            
                            <input type="text" className="form-control" placeholder="Enter First Name"  name="first_name" value={this.state.first_name} onChange={this.setTitle}  required />
                            {this.validator.message('First Name', this.state.first_name, 'required|alpha')}
                          </div>
                          <div className="col-md-6">
                            
                            <input type="text" className="form-control" placeholder="Enter Last Name"  name="last_name" value={this.state.last_name} onChange={this.setln} required/>
														{this.validator.message('Last Name', this.state.last_name, 'required|alpha')}
                          </div>
                          <div className="col-md-6">
                            
                            <input type="email" className="form-control" value={this.state.email} onChange={this.email} placeholder="Enter Email Addres" name="email" required/>
														{this.validator.message('Email', this.state.email, 'required|email')}
                          </div>
                          <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Enter Company Name"  name="enter_company" value={this.state.enter_company} onChange={this.enter_company} required/>
														{this.validator.message('Enter Company', this.state.enter_company, 'required|alpha')}
                          </div>
                          <div className="col-md-12">
                            <textarea rows="3" onChange={this.goal} className="form-control" placeholder="Write message here" name="message" required>{this.state.goal}</textarea>
                          </div>
                          <div className="col-12 text-center">
                            <button type="button" onClick={this.submitForm} className="btn btn-primary sb_fr_btn" value="Submit">Submit</button>
                          </div>
                        </form>
                </div>
            </div>
        </div>
    </section>
    </>
    )
  }
}

export default ContactFront
