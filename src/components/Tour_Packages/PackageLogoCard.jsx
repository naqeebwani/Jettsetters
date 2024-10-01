import React from 'react'

const PackageLogoCard = ({logo,name, gradientStyle}) => {
    return (
        <div className={`w-full backdrop-blur-sm ${gradientStyle} py-5`}>
                <img
                    src={logo}
                    alt={name}
                    loading='lazy'
                    className='md:w-[200px] sm:w-[150px] aspect-square w-[120px] mx-auto object-center object-fill'
                />
            </div>
    )
}

export default PackageLogoCard