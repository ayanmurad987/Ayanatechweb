import React from 'react';
import './index.css';
import { Image } from '../../assets';
import MenuIcon from '@mui/icons-material/Menu';
// import TextAnimation from '../screens/textanimation';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigation = useNavigate();
  //   const phrases = ["Ayan Tech"];
  //   const textRef = useRef(null);
  //   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  //   let timeoutId;

  //   useEffect(() => {
  //     const textElement = textRef.current;
  //     const words = phrases[currentPhraseIndex].split(' ');

  //     textElement.textContent = '';

  //     const animateLetters = () => {
  //       words.forEach((word, wordIndex) => {
  //         for (let i = 0; i < word.length; i++) {
  //           const span = document.createElement('span');
  //           span.textContent = word[i];
  //           span.style.transitionDelay = `${(wordIndex * 2 + i) * 0.1}s`;
  //           textElement.appendChild(span);
  //         }

  //         if (wordIndex !== words.length - 1) {
  //           const space = document.createTextNode(' ');
  //           textElement.appendChild(space);
  //         }
  //       });

  //       const spanElements = Array.from(textElement.children);

  //       spanElements.forEach((span, index) => {
  //         timeoutId = setTimeout(() => {
  //           span.classList.add('animate');
  //         }, index * 100);
  //       });

  //       setTimeout(() => {
  //         spanElements.forEach((span) => {
  //           span.classList.remove('animate');
  //         });

  //         setTimeout(() => {
  //           textElement.innerHTML = '';
  //           const nextPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  //           setCurrentPhraseIndex(nextPhraseIndex);
  //           animateLetters();
  //         }, 2000);
  //       }, words.length * 100 + 3000);
  //     };

  //     animateLetters();

  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }, [currentPhraseIndex, phrases]);

  const goToDashBoard = (elementId) => {
    navigation('/');
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 500);
  };

  return (
    <nav
      data-aos="fade-down"
      // data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <div className='Navaling'>
            <img
              src={Image}
              alt="On Img"
              className="LogoStyles2"
              onClick={() => {
                navigation('/');
              }}
            />
            <p
              //   ref={textRef}
              className="text-animation text-with-shadow"
              style={{ fontSize: 20, color: '#FFF', fontWeight: 'bolder', marginLeft: -30 }}
            >
              Ayan Tech
            </p>
          </div>
        </a>

        <li className="navbar-toggler dropdown width" aria-expanded="false">
          <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown">
            <MenuIcon color="#FFF" />
          </a>
          <ul className="dropdown-menu MainStyle">
            <li>
              <a className="dropdown-item" href="#" onClick={() => goToDashBoard('')}>
                Home
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#aboutus" onClick={() => goToDashBoard('aboutus')}>
                About Us
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#ourservices" onClick={() => goToDashBoard('ourservices')}>
                Our Services
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#" onClick={() => goToDashBoard('')}>
                Portfolio
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#footer" onClick={() => goToDashBoard('footer')}>
                Contact Us
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
          </ul>
        </li>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-with-shadow" onClick={() => goToDashBoard('')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-with-shadow" onClick={() => goToDashBoard('aboutus')} href="#aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-with-shadow"
                onClick={() => goToDashBoard('ourservices')}
                href="#ourservices"
              >
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-with-shadow" onClick={() => goToDashBoard('')} href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-with-shadow" onClick={() => goToDashBoard('footer')} href="#footer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
