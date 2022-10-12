import React from 'react';

const Total = ({...exercises}) => {
    const totalExercises = exercises.reduce((acc, cur) => acc + cur, 0);

    return (
        <p>Number of exercises {totalExercises}</p>
    )
}

export default Total;