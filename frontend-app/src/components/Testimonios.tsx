import {Twitter} from 'lucide-react';
import {Testimonials} from "@/data/Testimonios.ts";


export default function Testimonios() {
    return (
        <div className="min-h-screen bg-[#5046e5]  flex flex-col items-center justify-center p-8">
            <div className="max-w-6xl w-full">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-gray-600 mb-4">Testimonials</p>
                    <h2 className="text-4xl font-bold mb-4 text-white">Public Cheers for Us!</h2>
                    <p className="text-xl  text-white">Find out how our users are spreading the word!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {Testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gradient-to-r from-gray-50 via-gray-200 to-zinc-300 rounded-lg shadow-md p-6 flex flex-col    ">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full mr-3 object-cover"
                                />
                                <div>
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.username}</p>
                                </div>
                                <Twitter className="ml-auto text-indigo-600" size={20}/>
                            </div>
                            <p className="text-gray-700 flex-grow">{testimonial.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}