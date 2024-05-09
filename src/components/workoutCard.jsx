import React from 'react'

const WorkoutCard = ({data}) => {
  return (
    
     <div className="w-full sm:w-1/2 md:w-1/3 relative p-2">
            <img 
            className="md:h-[200px] w-full"
            src={data?.image} alt="" />
          <p className="absolute bottom-2 bg-primary text-white w-[200px] text-xl fonst-semibold">{data?.title}</p>
          </div>
  )
}

export default WorkoutCard 
