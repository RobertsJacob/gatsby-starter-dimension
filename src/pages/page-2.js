import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'


import Layout from '../components/layout'
import card from '../images/card.png'

const SecondPage = () => (
  <Layout>
    <h1>Here are my Business Cards</h1>
    <h2>Edsports</h2>
    <div>
    <img style={{ width: 360, height: 432 }} src={card} alt="" />
    </div>
    <p>Not finding what you are looking for?</p>
    <Link to="/">Go to the homepage</Link>
  </Layout>
)
const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Looking for other Jacob M Roberts Links <a href="https://dot.cards/jacobrobertsloco/ ">Look Here!</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
export default SecondPage
