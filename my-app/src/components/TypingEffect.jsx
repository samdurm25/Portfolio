import React, { useState, useEffect, useMemo } from 'react';

const TypingEffect = () => {
    const textArray = useMemo(() => ["Developer", "Designer", "Engineer"], []);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % textArray.length;
            const fullText = textArray[i];

            setCurrentText(isDeleting 
                ? fullText.substring(0, currentText.length - 1) 
                : fullText.substring(0, currentText.length + 1)
            );

            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 1000); // Wait before starting to delete
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }

            setTypingSpeed(isDeleting ? 50 : 150); // Adjust typing speed when deleting
        };

        const typingTimer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(typingTimer);
    }, [currentText, isDeleting, loopNum, typingSpeed, textArray]);

    return (
        <div className="typing-effect">
            <span>&nbsp;&nbsp;&nbsp;&nbsp;{currentText}</span>
            <span className="cursor">|</span>
        </div>
    );
};

export default TypingEffect; 