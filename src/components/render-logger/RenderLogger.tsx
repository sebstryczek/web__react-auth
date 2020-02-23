import React from 'react';

const RenderLogger = ({ text }: { text: string }) => {
    return (
        <div>
            {
                console.log('RenderLogger', text)
            }
            RenderLogger
      </div>
    )
}

export default RenderLogger;
