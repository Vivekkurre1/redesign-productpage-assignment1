import React, { useState } from 'react'
import { FaUserAlt, FaCalendarCheck, FaChartLine } from 'react-icons/fa'

const InteractiveDemo = () => {
    const [activeDemo, setActiveDemo] = useState('feature1')

    const handleDemoChange = (demoName: string) => {
        setActiveDemo(demoName)
        console.log(`${demoName} demo clicked!`) // Log to console on button click
    }

    return (
        <div className="px-6 py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
                Experience Our Product
            </h2>
            <p className="text-lg mb-6 text-gray-600">
                See how our software can streamline your healthcare operations.
            </p>

            {/* Demo buttons */}
            <div className="flex justify-center gap-6 mb-8">
                <button
                    onMouseEnter={() => setActiveDemo('feature1')}
                    onClick={() => handleDemoChange('feature1')}
                    className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                    <div className="flex items-center justify-center">
                        <FaUserAlt
                            size={24}
                            className="text-white hover:text-blue-600 transition duration-300"
                        />
                        <span className="ml-2">Patient Onboarding</span>
                    </div>
                </button>
                <button
                    onMouseEnter={() => setActiveDemo('feature2')}
                    onClick={() => handleDemoChange('feature2')}
                    className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                    <div className="flex items-center justify-center">
                        <FaCalendarCheck
                            size={24}
                            className="text-white hover:text-blue-600 transition duration-300"
                        />
                        <span className="ml-2">Scheduling & Appointments</span>
                    </div>
                </button>
                <button
                    onMouseEnter={() => setActiveDemo('feature3')}
                    onClick={() => handleDemoChange('feature3')}
                    className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                >
                    <div className="flex items-center justify-center">
                        <FaChartLine
                            size={24}
                            className="text-white hover:text-blue-600 transition duration-300"
                        />
                        <span className="ml-2">Analytics Dashboard</span>
                    </div>
                </button>
            </div>

            {/* Demo preview images/icons */}
            <div className="mt-8">
                {activeDemo === 'feature1' && (
                    <div className="flex justify-center">
                        <FaUserAlt size={120} className="text-blue-600" />
                    </div>
                )}
                {activeDemo === 'feature2' && (
                    <div className="flex justify-center">
                        <FaCalendarCheck size={120} className="text-blue-600" />
                    </div>
                )}
                {activeDemo === 'feature3' && (
                    <div className="flex justify-center">
                        <FaChartLine size={120} className="text-blue-600" />
                    </div>
                )}
            </div>
        </div>
    )
}

export default InteractiveDemo
