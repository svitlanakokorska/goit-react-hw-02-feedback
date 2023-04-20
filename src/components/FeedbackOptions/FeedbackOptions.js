import React from "react";
import shortid from 'shortid';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
        <div className={css.wrap}>
        {
           options.map((option => (
           <button  key={shortid.generate()}  className={css[option]} type="button" name={option} onClick={onLeaveFeedback}>
            {option}
           </button> 
           ))) 
        }
        </div>
    );
};
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};


