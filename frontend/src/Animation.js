import React from 'react'

function Animation() {
    return (
        <div className='container'>
            <div className="animated">
                <svg viewBox="0 0 960 300">
                    <symbol id="s-text">
                        <text  className='text-center' textAnchor="middle" x="50%" y="50%">iNotebook</text>
                        {/* <text textAnchor="middle" x="52%" y="50%">iNotebook</text> */}
                    </symbol>

                    <g className="g-ants" >

                        <use xlinkHref="#s-text" className="text-copy" ></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                        <use xlinkHref="#s-text" className="text-copy"></use>
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Animation