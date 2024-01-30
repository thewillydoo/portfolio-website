import React from 'react'
import PortfolioItem from './PortfolioItem'
import portfolio from '../data/portfolio.js'

function Portfolio() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      {portfolio.map(project )}
      </div>
    </div>
  )
}

export default Portfolio
