import React from 'react'
import Image from 'next/image'

type ServiceCardProps = {
  icon: string
  name: string
  description: string
}

const ServiceCard = ({ icon, name, description }: ServiceCardProps) => {
  return (
    <div className="text-center md:text-left">
      <Image
        src={icon}
        alt="img"
        width={60}
        height={60}
        className="mx-auto md:mx-0"
      />
      <h1 className="text-xl md:text-2xl font-bold mt-6 text-gray-200">
        {name}
      </h1>
      <p className="mt-6 text-gray-100">{description}</p>
    </div>
  )
}

export default ServiceCard
