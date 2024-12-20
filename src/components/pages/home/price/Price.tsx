import React from "react"
import "./Price.css"
import PriceCard from "./PriceCard"
import Heading from "@/components/shared/Header"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
