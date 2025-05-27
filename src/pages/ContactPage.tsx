import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    interest: 'general'
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      interest: 'general'
    });
  };
  
  return (
    <div>
      {/* Contact Banner */}
      <div className="bg-[#1e3a8a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Let's connect about your travel dreams, questions, or collaboration opportunities
          </p>
        </div>
      </div>
      
      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-[#f8a0a0] mb-6"></div>
              <p className="text-gray-700 mb-8">
                Whether you're interested in our travel guides, planning a group trip, or exploring business opportunities, we'd love to hear from you. Fill out the form or reach out directly through any of our channels.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#1e3a8a] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a8a] mb-1">Email</h3>
                    <p className="text-gray-700">hello@lushgyaltravel.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#1e3a8a] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a8a] mb-1">Phone</h3>
                    <p className="text-gray-700">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#1e3a8a] p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1e3a8a] mb-1">Social Media</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      </a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </a>
                      <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-[#1e3a8a] hover:text-[#f8a0a0] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Business Hours */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Business Hours</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-bold text-gray-700">Monday - Friday</p>
                      <p className="text-gray-600">9:00 AM - 5:00 PM EST</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700">Saturday</p>
                      <p className="text-gray-600">10:00 AM - 2:00 PM EST</p>
                    </div>
                    <div>
                      <p className="font-bold text-gray-700">Sunday</p>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* FAQ Link */}
              <div className="mt-8">
                <p className="text-gray-700">
                  Have a quick question? Check our{' '}
                  <Link to="/faq" className="text-[#1e3a8a] hover:text-[#f8a0a0] font-bold">
                    Frequently Asked Questions
                  </Link>{' '}
                  for immediate answers.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8">
                {!submitted ? (
                  <>
                    <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                          placeholder="Enter your email address"
                          required
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="interest" className="block text-gray-700 font-medium mb-2">I'm Interested In</label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                          required
                        >
                          <option value="general">General Inquiry</option>
                          <option value="digital-guides">Digital Travel Guides</option>
                          <option value="group-trips">Group Trips</option>
                          <option value="custom-planning">Custom Trip Planning</option>
                          <option value="business">Business Opportunities</option>
                          <option value="speaking">Speaking Engagements</option>
                        </select>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                          placeholder="Enter message subject"
                          required
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                          placeholder="Enter your message"
                          required
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit"
                        className="w-full bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-3 px-6 rounded-full transition-colors"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">Thank You!</h3>
                    <p className="text-gray-700 mb-6">
                      Your message has been sent successfully. We'll get back to you as soon as possible.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-2 px-6 rounded-full transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">Book a Consultation</h2>
            <div className="w-20 h-1 bg-[#f8a0a0] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Schedule a one-on-one consultation to discuss your travel dreams or business opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-700 mb-4">
                For personalized travel planning or business inquiries, book a 30-minute consultation with our founder, Lisa. During this call, we'll discuss your specific needs and how we can help you create transformative travel experiences.
              </p>
              <p className="text-gray-700">
                Select a date and time that works for you, and we'll send you a confirmation email with the meeting details.
              </p>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1e3a8a] hover:bg-[#152a62] text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
