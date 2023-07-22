import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Here lives my Business Cards</h1>
    <p>Not finding what you are looking for?</p>
    <Link to="/">Go to the homepage</Link>
  </Layout>
)

export default SecondPage
