import { Button } from '@/components/ui/button';

const ComingSoon = () => {
    return(
        <div className="min-h-screen bg-background text-white overflow-hidden">
            <div className="noise-overlay"></div>

            <div className="container mx-auto px-4 z-20 text-center h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center">
                <img 
                    src="/img/logo.png" 
                    alt="GLITCH3D" 
                    className="w-40 md:w-60 mb-4"
                />
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-black mt-3 mb-4 tracking-tight">
                    <span className=" font-orbitron" data-text="GLITCH3D">Coming Soon!</span>
                </h1>
                
                <p className="text-xl md:text-2xl font-space text-white/90 mb-8 max-w-2xl mx-auto">
                    <span className="gradient-text font-semibold">Stick around on our X account to get the latest updates!</span>
                </p>
                
                <div className="flex justify-center mt-1">
                    <Button asChild className="bg-glitch-blue hover:bg-glitch-blue/80 text-white font-orbitron text-lg px-8 py-6 animate-pulse-glow">
                    <a href="/">Return Home</a>
                    </Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;