import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">

        <div className="content has-text-centered has-background-black has-text-white-ter" style={{
          padding: '50px',
        }}>
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-12" style={{
                textAlign: 'center'
              }}>
                <Link to="/" className="navbar-item" style={{
                  textAlign: 'center',
                  color: 'white',
                  float: 'left',
                  marginRight: '20px',
                  lineHeight: '1',
                  padding: '0.25em',
                }}>
                  Home
                      </Link>

                <Link className="navbar-item" to="/blog" style={{
                  textAlign: 'center',
                  color: 'white',
                  float: 'left',
                  marginRight: '20px',
                  lineHeight: '1',
                  padding: '0.25em',
                }}>
                  Latest Stories
                      </Link>

                <Link className="navbar-item" to="/contact" style={{
                  textAlign: 'center',
                  color: 'white',
                  lineHeight: '1',
                  float: 'left',
                  marginRight: '20px',
                  padding: '0.25em',
                }}>
                  Contact
                      </Link>
              </div>


              {/* <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
