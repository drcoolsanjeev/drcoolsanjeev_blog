import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div
          className="post-thumbnail"
          style={{
            backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`,
            marginBottom: 0
          }}>
          <h1 className="post-title">Get in Touch</h1>
          <p>
            Let us connect and help each other to contribute to open source.
            &rarr;
          </p>
        </div>
        <div>
          <form
            className="form-container"
            action="https://sendmail.w3layouts.com/SubmitContactForm"
            method="post">
            <div>
              <label htmlFor="w3lName">Name</label>
              <input
                disabled={true}
                type="text"
                name="w3lName"
                id="w3lName"
                value="Sanjeev Kumar"
              />
            </div>
            <div>
              <a href="https://www.linkedin.com/in/sanjeev-kumar-2a7b98147/">
                <label htmlFor="w3lSender">LinkedIn</label>
              </a>
            </div>
            <div>
              <a href="https://github.com/drcoolsanjeev/">
                <label htmlFor="w3lSender">Github Profile</label>
              </a>
            </div>
            <div>
              <label htmlFor="w3lMessage">Message</label>
              <textarea
                disabled={true}
                name="w3lMessage"
                id="w3lMessage"></textarea>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
                disabled
                className="button -primary"
                style={{ marginRight: 0 }}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
