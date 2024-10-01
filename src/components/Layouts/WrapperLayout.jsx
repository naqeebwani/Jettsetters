import React from 'react'
import Title from '../shared/Title'
import Footer from '../Footer'
import HeaderBanner from '../shared/HeaderBanner'
import HomePhoneIcon from '../shared/HomePhoneIcon'
import Header2_0 from '../Header2_0'
import Headroom from 'react-headroom'

const WrapperLayout = (title, description) => (WrapperComponent) => {
    // console.log(title)
    return (props) => {
        return (
            <>
                <Title title={title} description={description} />
                {/* <HeaderBanner /> */}
                <Headroom style={{ zIndex: 3000}}>
                    <Header2_0 />
                </Headroom>
                <div className='-mt-[2px]'>
                    <HomePhoneIcon />
                    <WrapperComponent {...props} />
                    <Footer />
                </div>
            </>
        )
    }
}

export default WrapperLayout