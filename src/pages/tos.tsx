const TermsOfService = () => {
    return(
        <div className="min-h-screen bg-background text-white">
            <div className="noise-overlay"></div>

            <div className="container mx-auto px-4 pt-20 z-20 text-center h-screen flex flex-col justify-center items-center">
                <div className="">                    
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-orbitron font-black mt-10 mb-7 tracking-tight">
                        <span className="gradient-text font-orbitron" data-text="GLITCH3D">Terms of Service</span>
                    </h1>
                    
                    <div className="text-left">
                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>1. Introduction</strong></p>
                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold">
                            Welcome to GLITCH3D! By accessing or using our website, you agree to comply with these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
                        </p>

                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>2. Event Registration & Participation</strong></p>
                        <ul className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold list-disc">
                            <li>Registration for GLITCH3D is required to attend the event. By registering, you agree to provide accurate and complete information.</li>
                            <li>Tickets are non-refundable except in cases of event cancellation.</li>
                            <li>We reserve the right to deny entry or remove participants for inappropriate behavior, including harassment, disruptive conduct, or violation of event policies.</li>
                        </ul>

                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>3. Intellectual Property</strong></p>
                        <ul className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold list-disc">
                            <li>All content on this website, including text, images, logos, and event materials, is owned by GLITCH3D or its partners.</li>
                            <li>You may not copy, distribute, or modify any content without prior written consent.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TermsOfService;