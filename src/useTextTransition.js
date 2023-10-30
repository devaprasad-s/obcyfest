import  { useState, useEffect } from 'react';

const useTextTransition = (initialText, finalText, duration) => {
  const [text, setText] = useState(initialText);

  useEffect(() => {
    let startTime;
    let requestId;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / duration;

      if (progress < 1) {
        const t = 0.5 - 0.5 * Math.cos(progress * Math.PI);
        const encryptedText = encryptText(initialText, finalText, t);
        setText(encryptedText);
        requestId = requestAnimationFrame(animate);
      } else {
        setText(finalText);
      }
    };

    const encryptText = (start, end, t) => {
     
      return start
        .split('')
        .map((char, index) => {
          const startCharCode = char.charCodeAt(0);
          const endCharCode = index < end.length ? end[index].charCodeAt(0) : 32; // 32 is the character code for space
          const interpolatedCharCode = Math.round(
            startCharCode + (endCharCode - startCharCode) * t
          );
          return String.fromCharCode(interpolatedCharCode);
        })
        .join('');
    };

    requestId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [initialText, finalText, duration]);

  return text;
};

export default useTextTransition;
