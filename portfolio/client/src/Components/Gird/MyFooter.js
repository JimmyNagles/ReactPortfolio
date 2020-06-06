import React from "react";
import { Footer } from "react-materialize";
const MyFooter = () => {
  return (
    <div>
      <Footer
        className="grey darken-4"
        copyrights="&copy 2015 Copyright Text"
        links={
          <ul>
            <li>
              <a
                className="white-text"
                target="_blank"
                href="https://github.com/JimmyNagles"
              >
                <i className="	fa fa-github"></i>
              </a>
            </li>

            <li>
              <a
                className="white-text"
                target="_blank"
                href="https://www.linkedin.com/in/jimmy-nagles-89686b191/"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        }
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        }
      >
        <h5 className="white-text">Footer Content</h5>
        <p className="grey-text text-lighten-4">
          You can use rows and columns here to organize your footer content.
        </p>
      </Footer>
    </div>
  );
};

export default MyFooter;
