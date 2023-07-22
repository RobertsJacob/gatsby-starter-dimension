import React from 'react'
import { Link } from 'gatsby'

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
  <p className="copyright">Looking for other Jacob M Roberts Links? <a href="https://dot.cards/jacobrobertsloco/ ">Look Here on my Dot Profile!</a>.</p>
  </Layout>
)

export default SecondPage
