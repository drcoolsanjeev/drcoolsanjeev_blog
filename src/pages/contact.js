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
            action="mailto:sanjeevkumar201418@gmail.com"
            method="GET"
            target="_blank">
            <div class="field">
              <label htmlFor="w3lName">Name</label>
              <input
                type="text"
                name="subject"
                id="w3lName"
                placeholder="Enter your name"
              />
            </div>
            <div class="field">
              <label htmlFor="w3lMessage">Message</label>
              <textarea
                name="body"
                id="w3lMessage"
                placeholder="Enter your message"></textarea>
            </div>
            <div>
              <label>
                {" "}
                Conenct on{" "}
                <a
                  href="https://www.linkedin.com/in/sanjeev-kumar-2a7b98147/"
                  target="_blank">
                  LinkedIn
                </a>
              </label>
            </div>
            <div>
              <label>
                {" "}
                Follow on{" "}
                <a href="https://github.com/drcoolsanjeev/" target="_blank">
                  Github
                </a>
              </label>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <input
                type="submit"
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
