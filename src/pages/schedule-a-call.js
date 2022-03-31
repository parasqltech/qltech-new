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
	
	
	if(this.props.location.search != ""){
		var p = this.props.location.search.replace('?','');
		const myArray = p.split("&");
		var n = myArray[0].split("=");
		var name = n[1];
		var p = myArray[1].split("=");
		var phone = p[1];
		var e = myArray[2].split("=");
		var email = e[1];
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