import PropTypes from 'prop-types'
import React from 'react'
import emailjs from 'emailjs-com'
import picofme from '../images/picofme.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import edsports from '../images/edsports.jpg'
 
class Main extends React.Component {
   constructor(props) {
    super(props);

    this.sendEmail = this.sendEmail.bind(this);
  }  
  sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_fkc4onp' , 'template_w9d5zak', e.target, 'user_n2Q4XWhSVmCrKFPuHGRyG')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert("Thank you, your message has been sent!")
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={picofme} alt="" />
          </span>
          <p>
            I am Jacob Roberts, a 23 year old growing professional. I have a 
            Bachelors of Arts in Psychology with a minor in Communications from 
            the University of Northern Colorado.  I am currently working on my  
            masters degree in Esports Business from the University of New Haven. 
            I have a passion for video games and esports and how they can be 
            utilitized to enhance education. I have experience in both education 
            and esports. Working for Saint Vrain Valley School District currently 
            as well as when I was in high school has given me unique opportunities 
            to work within all levels of education. My work with Super League Gaming
            has given me the chance to work on the ground floor of both esports events 
            as well as an esports business. I have recently taken on the job of Varsity
            Esports Head Coach at Windsor Charter Academy where I will be building out
            their program while helping the kids hone their skills  in and  out of game!
            Merging these two while fufilling a lifelong goal of joining a top level 
            esports team should prove to be a welcome challenge. 
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work Experience</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Since starting his first job the summer after his freshman year of 
            High School Jacob has rarely taken on opportunties outside of his 
            long term goals. From working with robots in special education and 
            running competitive robotics in a school district to being a referee 
            and head coach for youth  sports Jacob managed to keep a focus on 
            education and technologgy. As he continues to drive forward with 
            Esports Education you can expect his current jobs  to remain within
            those realms! Below is a list of Jacobs Work Experiences and how he 
            has personally related them back to his overall journey.
          </p>
          <p>
            Current Work Positions
          </p>
          <p>
          Innovation Center
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Education</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent
            eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam
            erat volutpat. Praesent urna nisi, fringila lorem et vehicula
            lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices.
            Aliquam libero et malesuada fames ac ante ipsum primis in faucibus.
            Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit
            amet.
          </p>
          {close}
        </article>
        
        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src={picofme} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <h1>Grid table</h1>
          <h2>Basic example</h2>
          <table>
  <thead>
    <tr>
      <th colspan="2" rowspan="1"><p>Table Headings</p></th>
      <th colspan="1" rowspan="1"><p>Here</p></th>
    </tr>
    <tr>
      <th colspan="1" rowspan="1"><p>Sub</p></th>
      <th colspan="1" rowspan="1"><p>Headings</p></th>
      <th colspan="1" rowspan="1"><p>Too</p></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="1" rowspan="2"><p>cell
spans
rows</p></td>
      <td colspan="2" rowspan="1"><p>column spanning</p></td>
    </tr>
    <tr>
      <td colspan="1" rowspan="1"><p>normal</p></td>
      <td colspan="1" rowspan="1"><p>cell</p></td>
    </tr>
    <tr>
      <td colspan="1" rowspan="1"><p>multi
line</p><p>cells
too</p></td>
      <td colspan="2" rowspan="1"><p>cells can be
<em>formatted</em>
<strong>paragraphs</strong></p></td>
    </tr>
  </tbody>
</table>
          {close}
        </article>
        
         <article
          id="E(d)SPORTS"
          className={`${this.props.article === 'edsports' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">EdSPORTS</h2>
          <span className="image main">
            <img src={edsports} alt="" />
          </span>
          <p>
            E(d)SPORTS is a passion project attempting to bring accessible and 
            positive interactions with Esports through public education. By
            making E(d)SPORTS available to all schools and school districts in 
            Colorado Jacob and E(d)SPORTS hopes to elevate both Esports Education
            and Competitive Esports throughout the State.
          </p>
          <p>
            E(d)SPORTS offers many services from consulation to hands on involvement
            in building out Esports Programs. Through the connections Jacob has made
            E(d)SPORTS is able to guide both competitive practices as well as provide
            information about how to get Esports Education into the classroom. With access
            to Esports Companies, Esports Curriculum, and Esports Scholarships E(d)SPORTS
            is ready to help Colorado grow their K-12 Esports Programs. 
          </p>
          
         <p>
         For more information Email: <a href="mailto:jacob@edsportsedu.com">jacob@edsportsedu.com</a> or visit the <a href="https://edsportsedu.com/ ">E(d)SPORTS website</a>
         </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact Me</h2>
         <form onSubmit={this.sendEmail}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
           </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/JacobRobertsCO"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/jake.roberts.1671897/" 
                 className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.twitch.tv/reybinks" 
                 className="icon fa-twitch"
              >
                <span className="label">Twitch</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jacob-roberts-loco/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
