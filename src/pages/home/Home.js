import Banner from '../../components/banner/Banner'
import Card from '../../components/Card/Card'
import LastViewed from '../../components/Card/LastViewed'
import Feature from '../../components/feature/Feature'
import Layout from '../../components/layout/Article'

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Card />
      <Feature />
      <LastViewed />
    </Layout>
  )
}

export default Home
