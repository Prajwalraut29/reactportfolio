import AboutImage from '../images/bezos.jpg';
import Cv from '../../src/images/cp.pdf';
import { HiDownload } from 'react-icons/hi';
import data from '../about/data';
import Card from '../components/Card';
import './about.css';
const About = () => {
  return (
    <section id='about'>
      <div className='container about__container'>
        <div className='about__left'></div>
        <div className='about__portrait'>
          <img src="" alt='About Image' />
        </div>
        <div className='about__right'>
          <h2> About Me </h2>
          <div className='about__cards'>
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title} </h5>
                  <small> {item.desc}</small>
                </Card>

              ))
            }

          </div>
          <p>
            If you aren't satisfied with the build tool and configuration choices,
            you can `eject`
            at any time. This command will remove the single build dependency from
            your project.it will copy all the configuration files and the transitive dependencies
            into your project so you have full control over them. All of the commands except `eject`
            will still work, but they will point to the copied scripts so you can tweak them. At this
            point you're on your own.
          </p>
          <p>
            If you aren't satisfied with the build tool and configuration choices,
            you can `eject`
            at any time. This command will remove the single build dependency from
            your project.it will copy all the configuration files and the transitive dependencies
            into your project so you have full control over them. All of the commands except `eject`
            will still work, but they will point to the copied scripts so you can tweak them. At this
            point you're on your own.
          </p>
          <a href={Cv} download className='btn primary'> Download CV
            <HiDownload /> </a>

        </div>
      </div>

    </section>
  )
}

export default About
