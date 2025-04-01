const PrivacyPolicy = () => {
    return(
        <div className="min-h-screen bg-background text-white">
            <div className="noise-overlay"></div>

            <div className="container mx-auto px-4 pt-20 z-20 text-center h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center">                    
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-orbitron font-black mt-10 mb-7 tracking-tight">
                        <span className="gradient-text font-orbitron" data-text="GLITCH3D">Privacy Policy</span>
                    </h1>

                    <div className="text-left">
                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>1. Information We Collect</strong></p>
                        <ul className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold list-disc">
                            <li><strong>Personal Information:</strong> Name, email address, phone number.</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, and device information.</li>
                            <li><strong>Usage Data:</strong> Pages visited, interactions, and engagement metrics.</li>
                        </ul>

                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>2. How We Use Your Information</strong></p>
                        <ul className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold list-disc">
                            <li>Facilitate event registration and communication.</li>
                            <li>Improve website functionality and user experience.</li>
                        </ul>

                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>3. Data Sharing & Third Parties</strong></p>
                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold">We do not sell your personal data. However, we may share information with service providers assisting with website hosting, event management, and marketing.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;