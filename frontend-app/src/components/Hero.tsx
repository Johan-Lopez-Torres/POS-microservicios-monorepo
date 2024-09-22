import Navbar from "@/components/Navbar.tsx";

export default function Hero() {
    return (
        <div className="min-h-screen bg-[#5046e5] text-white">
          <Navbar/>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Left Column */}
                <div className="md:col-span-1 content-center	 ">
                    <h1 className="text-5xl font-bold leading-tight mb-6">
                        Trusted by over<br/>50,000 startups<br />since 2014.
                    </h1>
                    <p className="text-lg mb-8 text-purple-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.
                    </p>
                </div>

                {/* Middle Column (Image) */}
                <div className="md:col-span-1 flex justify-center">
                    <div className="relative w-full max-w-sm">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#5046e5] opacity-30 rounded-lg"></div>
                        <img
                            src="https://i.pinimg.com/564x/01/60/da/0160da0be5df7a6079e1b89ec8192a23.jpg"

                            alt="Woman with headphones"
                            className="rounded-lg h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-400 bg-opacity-40 backdrop-blur-sm px-7 pb-5  text-black p-4">
                            <div className="flex items-center justify-between mb-2 ">
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">LIVE</span>
                                <span className="text-sm font-medium">45% onboarding</span>
                            </div>
                            <p className="text-xl font-extrabold text-white">Give an amazing on-board experience of your product</p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="md:col-span-1 space-y-6 flex flex-col justify-end h-full">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Unlimited Meetings</h3>
                        <p className="text-purple-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Live Broadcast</h3>
                        <p className="text-purple-200">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}