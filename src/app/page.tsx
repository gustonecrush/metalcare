import { ButtonLink, Heading, Navbar, SectionDescription, StepCard } from '@/components'
import Image from 'next/image'
import { steps } from '@/data/statis'

export default function Home() {
  return (
    <main className="w-full h-full gap-16 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className='flex items-center max-w-5xl mx-auto pt-32 gap-5'>
        <div className='flex flex-col gap-5 w-[55%]'>
          <h1 className="text-5xl text-black font-bold leading-[120%]">Metal<span className='text-primary'>Care</span> Now Simplified For <span className='text-primary'>Students</span></h1>
          <p className='text-sm text-grey'>
          Empower student health and well-being with doctors, psychologists, and peer counselors. We offer tailored medical services and emotional support to address the unique challenges students face. Prioritize your health and emotional well-being as a student – start your journey to a happier, healthier student life today.
          </p>
          <ButtonLink link={'Contact Us'} label={'Contact Us'} isSolid={true} />
        </div>

        <Image src={'/hero-img.png'} title='Hero Image' alt={'Hero Image'} width={0} height={0} className={`w-[600px] h-full`} />
      </section>

      {/* Steps Section */}
      <section className='flex flex-col gap-10 max-w-5xl mx-auto mt-10'>
        <Heading subHeading='Fast Solutions' heading='Step by step to get your healt and mental care' isCentered={true} />

        <div className='flex gap-4'>
          {
            steps.map((step, index) => (
              <StepCard icon={step.icon} heading={step.heading} description={step.description} />
            ))
          }
        </div>
      </section>

      {/* Schedule Section */}
      <section className="flex items-center max-w-5xl mx-auto mt-10 gap-10">
        <Image src={'/schedule-img.png'} title='Hero Image' alt={'Hero Image'} width={0} height={0} className={`w-[550px] h-full`} />

        <SectionDescription subHeading='Find Doctor' heading='Find the right doctor according to your complaint' description='MetalCare is a free, health app that goes beyond matching you with doctors. It actively helps you find the right doctor based on your medical and personal needs and connects you with your HealthCarely community for ongoing support throughout your journey to healthier living.' points={['100% free app designed to help you find the right doctor for you. ', 'Available 10+ Doctors specialist']} />
      </section>
    </main>
  )
}
