
import React from "react";
import dynamic from "next/dynamic";

import Title from '@/components/title'
import Footer from '@/components/footer'
import NavBar from '@/components/topNavBar'
const MiddleSection = dynamic(() => import('@/components/middleSection'));


export default async function Home() {



  let products;
  try {
    products = await getData();
  } catch (error) {
    console.error("Error fetching products:", error);
    // Handle API errors gracefully (e.g., display an error message to the user)
    return <div>An error occurred while fetching products.</div>;
  }

  
  return (


    <div className="bg-white w-70% h-100vh ">
      <NavBar />
      <Title />
        <MiddleSection products={products.products} />
        <Footer/>
    </div>
  );
}

async function getData() {
  const response = await fetch("https://dummyjson.com/products");

  if (!response.ok) {
    throw new Error(`API request failed with status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}
