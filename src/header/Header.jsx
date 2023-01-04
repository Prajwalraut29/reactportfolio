import headerImages from '../images/love.jpg';
import data from './data';
import './header.css';
const Header = () => {
  return (
    <header id="header"> 
    <div className='container header__container'>
      <div className='header__profile'>
        <img src={headerImages} alts="Header Portait" />
    </div>
    <h3> prajwal raut</h3>
    <p> 
      ohipjo;nklbjkvhfyiguohipjnstead, it will 
      copy all the configuration files and the transitive dependencies 
      ebpack, Babel, ESLint, etc right into your project so you have full c
      ontrol over them. All of the commands except
    </p>

    <div className='header__cta'>
     <a href='#contact' className='btn primary'> Lets Talk</a>
     <a href='#portfolio'className='btn light'>lets Talk</a>
     </div>
     <div className='header__socials'>
      {
          data.map(item => <a key={item.id} href={item.link} target="_blank" 
          rel='noopener noreferrer'>{item.icon}</a>)
      }
     </div>
     </div>
    </header>
  )
}

export default Header
