import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateToPageButton = ({ targetPath, buttonText }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(targetPath);
    };

    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    );
};

export default NavigateToPageButton;