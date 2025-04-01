const CookiePolicy = () => {
    return(
        <div className="min-h-screen bg-background text-white">
            <div className="noise-overlay"></div>

            <div className="container mx-auto px-4 pt-20 z-20 text-center h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center">                    
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-orbitron font-black mt-10 mb-7 tracking-tight">
                        <span className="gradient-text font-orbitron" data-text="GLITCH3D">Cookie Policy</span>
                    </h1>

                    <div className="text-left">
                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>1. What Are Cookies?</strong></p>
                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold">Cookies are small text files stored on your device that help improve your browsing experience by remembering preferences and analyzing website traffic.</p>

                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>2. Types of Cookies We Use</strong></p>
                        <ul className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold list-disc">
                            <li><strong>Essential Cookies:</strong> Necessary for website functionality (e.g., user authentication).</li>
                            <li><strong>Analytical Cookies:</strong> Help us understand how users interact with our website.</li>
                            <li><strong>Marketing Cookies:</strong> Used for personalized event promotions and ads.</li>
                        </ul>

                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>3. Managing Cookies</strong></p>
                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold">You can control and disable cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>

                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold"><strong>4. Third-Party Cookies</strong></p>
                        <p className="text-xl font-space text-white/90 mb-8 max-w-2xl mx-auto font-semibold">Some third-party services (e.g., Google Analytics) may use cookies to collect usage data. We do not control these cookies.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CookiePolicy;