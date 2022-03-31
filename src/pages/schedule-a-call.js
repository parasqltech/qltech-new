import React,{Component} from 'react'
import Layout from '../components/Layout'

class Calendly extends React.Component {
  
  constructor(props) {
		super(props);
		
  
		this.state = {
          url: 'https://calendly.com/qltechau/discovery-meeting',
         
        
		}
	 
	  
	  
	  
	}
  
  
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
	const windowUrl = window.location.search;
	const params = new URLSearchParams(this.props.location.search);
	const name ="";
	const email ="";
	const phone ="";
	console.log(this.props);
	const curl ="https://calendly.com/qltechau/discovery-meeting";
	if(params.length > 0){
		console.log(param);
		name = param['name'];
		phone = param['location'];
		email = param['email'];
		var url ="https://calendly.com/qltechau/discovery-meeting/?name="+name+"&location="+phone+"&email="+email;
		this.setState({url: url});
	}
	
  }

  componentWillUnmount() {
    // whatever you need to cleanup the widgets code
  }

  render(){
    return (
      <Layout>
        <div id="schedule_form">
          <div 
            className="calendly-inline-widget"
            data-url={this.state.url}
            style={{ minWidth: '320px', height: '650px' }} />
        </div>
      </Layout>
    );
  }
}

export default Calendly