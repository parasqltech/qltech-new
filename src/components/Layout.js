import React from 'react'
import Helmet from 'react-helmet'
import {withPrefix} from "gatsby"

import Header from './Common/Header'
import Footer from './Common/Footer'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "../styles/style.css";
import "../styles/bootstrap.min.css";
import $ from "jquery";
import favicon from "../img/fevicon.png";
const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | QL Tech"  link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}  />
	<Helmet>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<script  src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		
	</Helmet>
    <Header />
    <div>{children}</div>
	<Footer />
	
  </div>
)

export default TemplateWrapper
