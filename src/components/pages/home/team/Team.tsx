import React from "react"
import { team } from "../../../data/Data"
import "./Team.css"
import Heading from "@/components/shared/Header"
import { FaCircleCheck } from "react-icons/fa6"
import { FaEnvelope, FaPhone } from "react-icons/fa"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Our Featured Agents' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <button className='btn3'>{val.list} Listings</button>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <FaCircleCheck/>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li  key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button className="flex gap-2">
                      <FaEnvelope/>
                      Message
                    </button>
                    <button className='btn4'>
                      <FaPhone/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
