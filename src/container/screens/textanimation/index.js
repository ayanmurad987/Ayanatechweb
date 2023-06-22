import React, { useEffect, useRef, useState } from 'react';
import './TextAnimation.css';

const TextAnimation = () => {
  // const phrases = ['Web Application', 'React Native'];
  // const textRef = useRef(null);
  // const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [textStyle, setTextStyle] = useState({});

  // let timeoutId;

  // useEffect(() => {
  //   const textElement = textRef.current;
  //   const words = phrases[currentPhraseIndex].split(' ');

  //   textElement.textContent = '';

  //   const animateLetters = () => {
  //     words.forEach((word, wordIndex) => {
  //       for (let i = 0; i < word.length; i++) {
  //         const span = document.createElement('span');
  //         span.textContent = word[i];
  //         span.style.transitionDelay = `${(wordIndex * 2 + i) * 0.1}s`;
  //         textElement.appendChild(span);
  //       }

  //       if (wordIndex !== words.length - 1) {
  //         const space = document.createTextNode(' ');
  //         textElement.appendChild(space);
  //       }
  //     });

  //     const spanElements = Array.from(textElement.children);

  //     spanElements.forEach((span, index) => {
  //       timeoutId = setTimeout(() => {
  //         span.classList.add('animate');
  //       }, index * 100);
  //     });

  //     setTimeout(() => {
  //       spanElements.forEach((span) => {
  //         span.classList.remove('animate');
  //       });

  //       setTimeout(() => {
  //         textElement.innerHTML = '';
  //         const nextPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  //         setCurrentPhraseIndex(nextPhraseIndex);
  //         animateLetters();
  //       }, 2000);
  //     }, words.length * 100 + 3000);
  //   };

  //   animateLetters();

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [currentPhraseIndex, phrases]);

  useEffect(() => {
    const handleWindowResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 490) {
        setTextStyle({ color: 'aqua', fontSize: '39px', fontWeight: 'bold' });
      } else {
        setTextStyle({ color: 'aqua', fontSize: '55px', fontWeight: 'bold' });
      }
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className='ANI-text-Div'>
      <h1  className="text-animation text-with-shadow" style={textStyle}>
        {/* {phrases.map((phrase, index) => (
          <span key={index} className={index === currentPhraseIndex ? 'visible' : 'hidden'}>
            {phrase}
            ref={textRef}
          </span>
        ))} */}
        Web Application
      </h1>
    </div>
  );
};

export default TextAnimation;
