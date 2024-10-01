import React from 'react'
import {Helmet} from 'react-helmet'

const Title = ({title="Jetsetters", description="Book flights and cruise for your journey"}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
        </Helmet>
    )
}

export default Title