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
    <h2>SVVSD</h2>
    <div>
    <img style={{ width: 360, height: 432 }} src={card} alt="" />
    </div>
    <h2>Windsor Charter Academy</h2>
    <div>
    <img style={{ width: 360, height: 432 }} src={card} alt="" />
    </div>
    <p>Not finding what you are looking for? <a href="https://www.jacobmroberts.com/">Go to the Main Site</a></p>
  <p className="copyright">Looking for other Jacob M Roberts links? <a href="https://dot.cards/jacobrobertsloco/ ">Take a look at my Dot Profile!</a>.</p>
  </Layout>
)

export default SecondPage
