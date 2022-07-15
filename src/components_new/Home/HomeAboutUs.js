import React, {Component} from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import img from '../../img/about-us.png';
import about from '../../img/about.png';
import ReactModal from 'react-modal'
import ReactWOW from 'react-wow'




class HomeAboutUsData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      testimonial_img: "",
      testimonial_name: "",
      testimonial_designation: "",
      testimonial_text: "",
    }
  }
	handleModalOpen = () => {
		this.setState({ isModalOpen: true})
	
	}
  
	handleModalClose = event => {
	this.setState({ isModalOpen: false })
	}


render() {
  //const posts = this.props.data.allMarkdownRemark.node
 const AboutUsData = this.props.data.allWpHomeAboutUs;
  return(
      <>

         
<section class="sec05 pt pb" data-aos="fade-down" data-aos-duration="2000" ata-aos-offset="400">
      {AboutUsData && AboutUsData && AboutUsData.edges.map(
     
                
                    
                
                          prop => {
                          return ( 
      <div class="container">
        <div class="row ">
        <div class="col-md-6">
          <div class="title_wrap_uh pb_20">
            <h2 class="had_ti pb_20"><span>About Us </span> </h2>
            <p class="pb_20">{prop.node.homeAbout.shortDescprition}</p>

                         <p class="pb_20">In collaboration with our clients, we’ve successfully managed to help businesses increase productivity, reduce costs, enhance agility & performance.</p>
                         <div class="btn_form ">
                <a href="#" class="main_btn blue_btn">Read More</a>
              </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img_about">
            <img src={about} alt="about" />
          </div>
        </div>
      </div>
    </div>
     )
                }
              )}
  </section>

<ReactModal  
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose}
          className="modal d-block fade testimonial-view show"
      >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content ">
            <button type="button" className="close btn-default" onClick={this.handleModalClose} data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
      
          <div className="modal-body p-0">
          <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/pozK-668Ams?rel=0" allowfullscreen></iframe>
            </div>
              
          </div>
        
        </div>
      </div>
     
        
    
    
      </ReactModal>
        </>
)

}
}






const HomeAboutUs = () => (
  <StaticQuery
    query={graphql`
      query {
          allWpHomeAboutUs {
            edges {
              node {
                id
                homeAbout {
                  title
                  shortDescprition
                  boldcontent
                }
              }
            }
          }
            
        }
    `}
    render={(data) => <HomeAboutUsData data={data} />}
  
	/>
)

export default HomeAboutUs
