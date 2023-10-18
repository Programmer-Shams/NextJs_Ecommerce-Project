import React from 'react'
import { Product, FooterBanner, HeroBanner, Footer, } from '@/components';
import { client } from '@/Lib/clients';

const Home = ({products, BannerData}) => {
  return (
    <>
     <HeroBanner heroBanner={BannerData.length && BannerData[0]} />
     {console.log(BannerData)}
     <div className='products-heading'>
      <h2>Best selling Product</h2>
      <p>Speakers of many variation</p>
    </div> 

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner FooterBanner={BannerData && BannerData[0]}/>
    </>
  )
}
export const getServerSideProps = async () =>{
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const BannerQuery = '*[_type == "banner"]'
  const BannerData = await client.fetch(BannerQuery)

  return{
    props: {products, BannerData}
  }
}

export default Home;