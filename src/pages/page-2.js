import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import education from '../images/education.jpg'

const SecondPage = () => (
  <Layout>
    <h1>Here are my Business Cards</h1>
    <h2>Edsports</h2>
              <span className="image main">
            <img src={education} alt="" />
            </span>
    <p>Not finding what you are looking for?</p>
    <Link to="/">Go to the homepage</Link>
  </Layout>
)

export default SecondPage
