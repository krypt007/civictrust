'use client'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col h-screen justify-between'>
        <div>
            <Header />
            <div className='flex w-2xl justify-center items-center p-10 py-2'>
            
            <Card className='max-w-2xl p-2'>
                <CardHeader className='text-2xl font-bold'>
                    About Us
                </CardHeader>
                <CardContent>
                    Civic Trust is dedicated to promoting transparency and accountability in government projects. 
                    Our mission is to provide valuable insights and foster better fiscal planning through our services.

                    Founded in [Year], we have been at the forefront of advocating for responsible governance and effective project management. 
                    Our team of experts works tirelessly to ensure that every project we support meets the highest standards of integrity and excellence.
                    <br /> <br />

                    Thank you for being a part of our community and supporting our mission.
                </CardContent>
            </Card>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default About