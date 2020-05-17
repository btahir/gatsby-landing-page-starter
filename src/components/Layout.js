import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";
import '../styles/index.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <main className="container-main">{children}</main>
        <Footer siteTitle={data.site.siteMetadata.title} />
      </div>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
