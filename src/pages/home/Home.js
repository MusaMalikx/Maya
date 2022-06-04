import Banner from '../../components/banner/Banner'
import Card from '../../components/Card/Card'
import LastViewed from '../../components/Card/LastViewed'
import Feature from '../../components/feature/Feature'
import Layout from '../../components/layout/Article'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // useEffect(() => {
  //     const checkUser = async () => {
  //         await axios.get('/user/check/authentication').then(function (res) {
  //             // console.log(res)
  //             if (res.data.bool === true) {
  //                 navigate("/")
  //             }
  //             else {
  //                 navigate("/login")
  //             }
  //         }).catch(function (err) {
  //             console.log(err)
  //         })
  //     }

  //     checkUser();
  // }, [navigate])

  return (
    <Layout>
      <Banner />
      <Card />
      <Feature />
      {/* <LastViewed /> */}
    </Layout>
  )
}

export default Home
