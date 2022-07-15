import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'
import clients_1 from '../../img/clients/google-partners.png';
import clients_2 from '../../img/clients/zoho-authorise-partners.png';
import clients_3 from '../../img/clients/hubspot-partners.png';
import clients_4 from '../../img/clients/keep-certified-partner.png';



const settings = {
  dots: false,
  arrows : false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
    {
    breakpoint: 767,
    settings: {
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    dots: false
    }
},
{
    breakpoint: 400,
    settings: {
    slidesToShow: 3,
    slidesToScroll: 2
    }
},
{
    breakpoint:320,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1
    }
}
]
    };


const HomePartner = () => (
  <StaticQuery
    query={graphql`
      query {
           allWpPartner {
            edges {
              node {
                id
                partners {
                  icon {
                    sourceUrl
                  }
                }
              }
            }
          }
            
  }
    `}
    render={data => (
		<section className="client-and-partners bg-white">
        <div className="container">
            
			<Slider {...settings} className="client-and-partners-slider" >
                {data &&
                        data.allWpPartner &&
                        data.allWpPartner.edges.map(
                    
                        
                    
                        prop => {
                        return ( 
                <div className="client-logo">
                    <img data-src={prop.node.partners.icon.sourceUrl} className="img-fluid lazyload" alt=""/>
                </div>
                 )
                        }
                    )}   
            </Slider>
        </div>
    </section>                    	
    )}
	/>
)

export default HomePartner
