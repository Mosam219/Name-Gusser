import React from 'react';
import './ResultContainer.css';
import NameCard from '../NameCard/NameCard';

const ResultContainer = ({suggestedNames}) => {
    var i = 0;
    const suggestNameJsx = suggestedNames.map((suggestedName) => {
        i++;
        return <NameCard key={suggestedName+i} suggestedName = {suggestedName}/>
    });
    return (
        <div className="ResultContainer">
            {suggestNameJsx}
        </div>
    );
};
export default ResultContainer;
