import ProductTray from './components/ProductTray'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}

export default async function Home() {

  const products = await getProducts()
  console.log(products)
  return (
    <>
      
      <main className=" max-w-7xl mx-auto px-2 bg-gray-50">
        <ProductTray trayTitle={'Best Deals Today'} isFlex={true} products={products} />
        <ProductTray trayTitle={'In Stock'} products={products}/>
      </main>
    </>
    
  )
}
