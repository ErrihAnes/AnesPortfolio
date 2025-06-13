// src/components/AnimatedName.jsx
import { useState, useEffect } from 'react';

const AnimatedName = () => {
  const name = "Anes";
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = name;
      const isComplete = !isDeleting && displayText === fullText;
      const isEmpty = isDeleting && displayText === '';

      if (isComplete) {
        // Pause de 1.5 secondes à la fin du mot
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isEmpty) {
        // Pause avant de recommencer à écrire
        setIsDeleting(false);
        setTypingSpeed(300);
      } else if (isDeleting) {
        // Vitesse d'effacement
        setTypingSpeed(100);
        setDisplayText(current => current.substring(0, current.length - 1));
      } else {
        // Vitesse d'écriture
        setTypingSpeed(150);
        setDisplayText(current => fullText.substring(0, current.length + 1));
      }
    };

    // Lance le timer pour l'animation
    const timer = setTimeout(handleType, typingSpeed);

    // Nettoie le timer quand le composant est "démonté" pour éviter les bugs
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  return (
      // J'ai ajusté la taille pour qu'elle corresponde mieux à votre design
      <h1 className="text-8xl lg:text-7xl font-extrabold text-center">
        {/*
        CHANGEMENT DE COULEUR ICI :
        On utilise un dégradé qui va du fuchsia au rose, comme sur votre site.
      */}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-pink-600 ">
        {displayText}
      </span>
        {/*
        SUPPRESSION DU CURSEUR :
        Le <span> qui contenait le "|" a été complètement retiré.
      */}
      </h1>
  );
};

export default AnimatedName;