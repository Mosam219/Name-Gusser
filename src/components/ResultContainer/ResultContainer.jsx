import React from 'react';
import './ResultContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultContainer = ({suggestedNames}) => {
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName = {suggestedName}/>
    });
    return (
        <div className="ResultContainer">
            {suggestNameJsx}
        </div>
    );
};
export default ResultContainer;
