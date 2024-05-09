import React from 'react'

const RecipesCard = ({data}) => {
  return (
    <div className="rounded-md">
    <img
      src={data.img}
      alt=""
      className="max-h-[270px] shadow-xl mb-3"
    />
    <p className="text-xl font-semibold text-start">{data.title}</p>
    <div className="text-xl font-semibold text-start absolute top-5 ms-2 rounded-md text-white bg-primary px-3">
      <img src={'../assets/icons/calories.png'} alt="" /> {data.calories}</div>

  </div>
  )
}

export default RecipesCard
