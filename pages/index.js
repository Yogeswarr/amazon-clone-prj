import Head from 'next/head'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'


export default function Home({ products }) {

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />
        {/* Product feild */}
        <ProductFeed products = {products} />
        </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
      (res) => res.json()
  )
  return { 
      props: {
          products
      }
  }
}