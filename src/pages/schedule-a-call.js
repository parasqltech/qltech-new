import React,{Component} from 'react'
import Layout from '../components/Layout'

class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
	
	
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render(){
	var windowUrl = window.location.search;
	var params = new URLSearchParams(windowUrl);
	var name ="";
	var email ="";
	var phone ="";
	var curl ="https://calendly.com/qltechau/discovery-meeting";
	if(params.length > 0){
		name = param['name'];
		phone = param['location'];
		email = param['email'];
		 curl ="https://calendly.com/qltechau/discovery-meeting/?name="+name+"&location="+phone+"&email="+email;
	}  
	  
	  
    return (
      <Layout>
        <div id="schedule_form">
          <div 
            className="calendly-inline-widget"
            data-url={curl}
            style={{ minWidth: '320px', height: '650px' }} />
        </div>
      </Layout>
    );
  }
}

export default Calendly