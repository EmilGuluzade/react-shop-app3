
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    import Awesome from './../../../components/Sections/Awesome/Awesome';

    const Home = () => {
        const {data,setdata} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <>
                <Awesome/>
                </>
        </>
        )
    }
    
    export default Home
        