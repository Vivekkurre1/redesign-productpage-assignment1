import React, { useEffect, useRef } from 'react'
import HeroSection from './components/HeroSection'
import HomeFAQs from './components/HomeFAQ'
import ContactForm from './components/ContactForm'
import MainFooter from './components/MainFooter'
import InfoSection from './components/InfoSection'
import FeaturesGrid from './components/FeaturesGrid'
import InteractiveDemo from './components/InteractiveDemo'

const Home: React.FC = () => {
    const contactRef = useRef(null)
    const aboutRef = useRef(null)
    const FqRef = useRef(null)
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        let lastScrollTop = 0 // Initialize lastScrollTop variable

        const handleScroll = () => {
            const hcf = document.querySelector('.hcf-profile')
            const scrollTop =
                document.documentElement.scrollTop || document.body.scrollTop

            if (scrollTop > lastScrollTop) {
                if (hcf) {
                    hcf.classList.add('hcf-profile-fixed')
                }
            } else if (scrollTop < lastScrollTop) {
                if (hcf) {
                    hcf.classList.remove('hcf-profile-fixed')
                }
            }

            lastScrollTop = scrollTop
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div>
                <div className="">
                    <HeroSection
                        scrollToSection={scrollToSection}
                        featuresRef={FqRef}
                        contactRef={contactRef}
                        aboutRef={aboutRef}
                    />

                    <div className="!bg-[#eff6ff] relative">
                        <FeaturesGrid />
                    </div>

                    {/* Add InteractiveDemo component here */}
                    <div className="bg-white relative">
                        <InteractiveDemo />
                    </div>

                    <div className="!bg-white relative" ref={aboutRef}>
                        <InfoSection />
                    </div>
                    <div className="relative bg-white" ref={FqRef}>
                        <HomeFAQs />
                    </div>
                    <div className="bg-white relative" ref={contactRef}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
