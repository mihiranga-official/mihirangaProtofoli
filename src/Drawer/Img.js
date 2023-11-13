import React from 'react';
import IMG1 from '../images/IMG1.png';

const BigImage = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <div>

            </div>

            <div style={{ marginLeft: '650px' }}>

                <img

                    src={IMG1}
                    alt="Big Image Alt Text"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default BigImage;
