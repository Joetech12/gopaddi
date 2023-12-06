import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Section2 from "../components/Section2";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Hero />
      <Section2 />
    </div>
  );
}

// export async function getServerSideProps() {
//   const products = await fetchProducts();
//   const orders = await fetchOrders();

//   return {
//     props: {
//       products,
//       orders,
//     },
//   };
// }
