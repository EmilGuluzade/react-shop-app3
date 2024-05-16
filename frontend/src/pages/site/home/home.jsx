
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import Awesome from './../../../components/Sections/Awesome/Awesome';
import Subscribe from '../../../components/Sections/Subscribe/Subscribe';
import Partners from '../../../components/Sections/Partners/Partners';
import Banner from '../../../components/Sections/Banner/Banner';

    const Home = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <>
                <Banner></Banner>
                <Awesome/>
                <Subscribe/>
                <Partners/>
                </>
        </>
        )
    }
    
    export default Home
        