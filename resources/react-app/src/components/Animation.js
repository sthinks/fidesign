import React from 'react'

const Animation = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <video width="320" height="240" controls>
                <source src="/fi-logo-animate.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Animation