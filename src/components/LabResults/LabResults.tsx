import React from 'react';
import download from '../../assets/download.svg'

const LabResults: React.FC = () => {
    return (
        <div className='results'>
            <h2 className='results__heading'>Lab Results</h2>
            {/* lab_results is an array */}
            <ul className='results__list'>
                <li className='results__item'>
                    <span className='results_lab'>Result 1</span>
                    <img className="results_icon" src={download} alt="download"/>
                </li>
            </ul>
        </div>
    );
};

export default LabResults;