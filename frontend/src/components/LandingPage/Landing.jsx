import React from 'react'
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="font-sans text-dark">
      
      
<header className="bg-white shadow-sm fixed w-full z-50">
    <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold text-primary">SemPull</a>
            <div className="hidden md:flex space-x-8">
                <a href="#features" className="font-medium hover:text-primary transition">Features</a>
                <a href="#how-it-works" className="font-medium hover:text-primary transition">How It Works</a>
                <a href="#testimonials" className="font-medium hover:text-primary transition">Testimonials</a>
                
            </div>
            <div className="flex space-x-4">
                <a href="/login" className="px-4 py-2 font-medium hover:text-primary transition">Log In</a>
                <a href="/signup" className="bg-primary text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition">Sign Up</a>
            </div>
        </nav>
    </div>
</header>

<section className="pt-32 pb-20 bg-gradient-to-r from-blue-50 to-indigo-50">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Find Your Perfect <span className="text-primary">Study Group</span></h1>
            <p className="text-lg text-gray-600 mb-8">Connect with students who share your academic goals and learning style. Study smarter together.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="/signup" className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition text-center">Get Started </a>
                <a href="#how-it-works" className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition text-center">How It Works</a>
            </div>
        </div>
        <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Students studying together" className="rounded-xl shadow-xl" />
        </div>
    </div>
</section>

<section id="features" className="py-20 bg-white">
    <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Features to Enhance Your Learning</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our platform makes it easy to find, join, or create study groups that match your needs.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Matching</h3>
                <p className="text-gray-600">Our algorithm matches you with students who share your course, schedule, and learning preferences.</p>
            </div>
            
            <div className="bg-light p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Scheduling Tools</h3>
                <p className="text-gray-600">Easily coordinate meeting times with built-in scheduling.</p>
            </div>
            
            <div className="bg-light p-8 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Study Resources</h3>
                <p className="text-gray-600">Share notes, flashcards, and other resources with your group in one centralized location.</p>
            </div>
        </div>
    </div>
</section>

<section id="how-it-works" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How SemPull Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Getting started is simple and takes just a few minutes.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-3">Create Your Profile</h3>
                <p className="text-gray-600">Tell us about your courses, availability, and preferred study methods.</p>
            </div>
            
            <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-3">Find or Create a Group</h3>
                <p className="text-gray-600">Browse existing groups or start your own and invite classmates.</p>
            </div>
            
            <div className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-3">Start Studying Together</h3>
                <p className="text-gray-600">Use our tools to schedule sessions, share materials, and track progress.</p>
            </div>
        </div>
    </div>
</section>

<section id="testimonials" className="py-20 bg-white">
    <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What BITSians Are Saying</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join students who have used SemPull.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-light p-8 rounded-xl">
                <div className="flex items-center mb-4">
                    
                    <div>
                        <h4 className="font-semibold">Darsh Patel</h4>
                        <p className="text-gray-500 text-sm">Mathematics and Computing Student</p>
                    </div>
                </div>
                <p className="text-gray-600">"StudyConnect helped me find an amazing group for my algorithms class. We went from barely passing to all getting A's!"</p>
            </div>
            
            <div className="bg-light p-8 rounded-xl">
                <div className="flex items-center mb-4">
                    
                    <div>
                        <h4 className="font-semibold">Deva Nandan Cherukat</h4>
                        <p className="text-gray-500 text-sm">Chemical Engineering Student</p>
                    </div>
                </div>
                <p className="text-gray-600">"As a chemical engineering student, it was hard to find study partners. Now I have a consistent group that meets both online and in person."</p>
            </div>
            
            <div className="bg-light p-8 rounded-xl">
                <div className="flex items-center mb-4">
                    
                    <div>
                        <h4 className="font-semibold">Manan Todi</h4>
                        <p className="text-gray-500 text-sm">Civil Engineering Student</p>
                    </div>
                </div>
                <p className="text-gray-600">"The shared notes feature has been a game-changer. Our group divides up lecture note-taking and we all benefit."</p>
            </div>
        </div>
    </div>
</section>

<section className="py-16 bg-primary text-white">
    <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Grades?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join students who are studying smarter together.</p>
        <Link to="/signup" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition inline-block">Get Started for Free</Link>
    </div>
</section>

<footer className="bg-dark text-white py-12">
    <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-xl font-bold mb-4">SemPull</h3>
                <p className="text-gray-400">Helping students find their perfect study partners since 2025.</p>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                    
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Study Tips</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition">Community</a></li>
                </ul>
            </div>
           
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 SemPull. </p>
        </div>
    </div>
</footer>

    </div>
  )
}

export default Landing
