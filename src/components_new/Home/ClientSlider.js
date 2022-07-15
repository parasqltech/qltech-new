import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link, StaticQuery, graphql } from 'gatsby'



const settings = {
      dots: false,
      arrows : false,
      infinite: true,
      speed: 500,
	  autoplay: true,
	  autoplaySpeed: 2000,
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
        dots: true
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



const ClientSlider = () => (
  <StaticQuery
    query={graphql`
      query {
        allWpClient(sort: {fields: databaseId, order: ASC}){
    edges {
      node {
        id
        title
        
        clients {
          img {
            sourceUrl
            
          }
        }
      }
    }
  }
		}
    `}
    render={data => (
		<Slider {...settings} className="trusted-by-slider" >
			{data &&
				data.allWpClient &&
				data.allWpClient.edges.map(
				prop => {
					return (
                        <>
						{(prop.node.clients.img != null) ? (<img data-src={prop.node.clients.img.sourceUrl} className="img-fluid lazyload" alt="" />) : ('')}
						</>
						
                        )
					}
				)}
		</Slider>                    	
    )}
	/>
)

export default ClientSlider
