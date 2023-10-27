import React from 'react'
import { ButtonLink, Heading } from '.'
import CheckList from './CheckList'

const SectionDescription: React.FC<SectionDescriptionProps> = ({ subHeading, heading, description, points }) => {
  return (
    <div className="flex flex-col gap-6">
        <Heading subHeading={subHeading} heading={heading} isCentered={false} />
        <p className='text-sm text-grey'>{description}</p>
        <div className="flex flex-col gap-5">
            {
                points.map((point, index) => (
                    <CheckList point={point} />
                ))
            }
        </div>
        <ButtonLink isSolid={true} label='Checkup with Doctor' link='/doctor' />
    </div>
  )
}

export default SectionDescription