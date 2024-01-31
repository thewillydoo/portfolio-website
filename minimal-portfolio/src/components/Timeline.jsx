import React from 'react'
import TimelineItem from './TimelineItem'
import timeline from '../data/timeline.js'


function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20 w-full md:w-7/12'>
      {timeline.map(item => (
        <TimelineItem 
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
}

export default Timeline
