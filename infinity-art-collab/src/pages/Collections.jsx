import React from 'react'

const Collections = (props) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          rounded-3xl overflow-hidden 
          h-48 w-40               /* Mobile */
          sm:h-60 sm:w-48        /* Tablet */
          md:h-72 md:w-56        /* Medium screens */
          lg:h-80 lg:w-64        /* Laptop */
          xl:h-96 xl:w-72        /* Large Screens */
          shadow-md
        "
      >
        <img
          src={props.elem}
          alt="art"
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  )
}

export default Collections
