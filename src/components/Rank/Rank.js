import React from 'react';

const Rank = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'>
                {`Hi ${name}, number of images processed`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;