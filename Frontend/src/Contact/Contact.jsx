import React, { use, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';



const ContactUs = () => {
  const [user, SetUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetUser({
      ...user,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.message) {
      toast.error("Please fill all the fields");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(user.email)) {
      toast.error("Invalid email address");
      return;
    }

    toast.success("Message Sent Successfully!");
    SetUser({
      name:"",
      email:"",
      message:""
    });
  }

  return (
    <div className="min-h-screen bg-white px-6 lg:px-20 py-16 text-gray-800">

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-orange-600">Get in Touch</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you have a question, suggestion, or just want to say hi, we’d love to hear from you!
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="bg-gray-50 rounded-2xl shadow-xl p-10 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-2 font-medium">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={user.name}
                name='name'
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-medium">Email</label>
              <input
                type="text"
                name='email'
                value={user.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                name='message'
                value={user.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 transition text-white rounded-xl font-semibold shadow-md cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>


        <div className="bg-white rounded-2xl shadow-xl p-10 flex flex-col justify-center animate-fade-in-up delay-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h2>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-orange-600 mt-1" size={20} />
              <div>
                <p className="font-medium">Email Us</p>
                <p>support@SnapEats.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-orange-600 mt-1" size={20} />
              <div>
                <p className="font-medium">Call Us</p>
                <p>+91 9939XXXXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-orange-600 mt-1" size={20} />
              <div>
                <p className="font-medium">Visit Us</p>
                <p>SnapEats HQ, 3rd Floor, Tower B<br />LPU Campus, Phagwara, Punjab</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="font-medium">Working Hours</p>
              <p>Mon – Sat: 9 AM – 9 PM<br />Sun: 10 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
