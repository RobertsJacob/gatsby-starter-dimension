import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import card from '../images/card.png'

const SecondPage = () => (
  <Layout>
    <h1>Here are my Business Cards</h1>
    <h2>Edsports</h2>
    <div>
    <img style={{ width: 250, height: 300 }} src={card} alt="" />
    </div>
    <p>Not finding what you are looking for?</p>
    <Link to="/">Go to the homepage</Link>
  </Layout>
)

export default SecondPage
