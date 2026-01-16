"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: ""
    })

    // Check if all fields have values
    const isFormValid = Object.values(formData).every(value => value.trim() !== "")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (isFormValid) {
            // Handle form submission here
            console.log("Form submitted:", formData)
            alert("Thank you! We will get in touch soon.")
            // Reset form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                description: ""
            })
        }
    }

    return (
        <main className="min-h-screen bg-[#002147] text-white flex flex-col items-center justify-center py-12 px-4 md:px-6">

            {/* Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
                <span className="text-[#FF9F66] font-bold text-xs tracking-widest uppercase">GET IN TOUCH</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-10">
                Fill The Form To Contact Us
            </h1>

            {/* Form Container */}
            <div className="w-full max-w-3xl bg-[#002B5C]/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/5">
                <form className="space-y-4" onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* First Name */}
                        <div className="space-y-1.5">
                            <label htmlFor="firstName" className="text-sm font-semibold block text-gray-300">First Name <span className="text-red-400">*</span></label>
                            <input
                                type="text"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                                placeholder="First Name"
                                className="w-full bg-[#002B5C] border border-[#1E4D8C] rounded-lg px-3 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F66] focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Last Name */}
                        <div className="space-y-1.5">
                            <label htmlFor="lastName" className="text-sm font-semibold block text-gray-300">Last Name <span className="text-red-400">*</span></label>
                            <input
                                type="text"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                                placeholder="Last Name"
                                className="w-full bg-[#002B5C] border border-[#1E4D8C] rounded-lg px-3 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F66] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="space-y-1.5">
                            <label htmlFor="email" className="text-sm font-semibold block text-gray-300">Email <span className="text-red-400">*</span></label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email"
                                className="w-full bg-[#002B5C] border border-[#1E4D8C] rounded-lg px-3 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F66] focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-1.5">
                            <label htmlFor="phone" className="text-sm font-semibold block text-gray-300">Phone number <span className="text-red-400">*</span></label>
                            <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone number"
                                className="w-full bg-[#002B5C] border border-[#1E4D8C] rounded-lg px-3 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F66] focus:border-transparent transition-all"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-1.5">
                        <label htmlFor="description" className="text-sm font-semibold block text-gray-300">Description <span className="text-red-400">*</span></label>
                        <textarea
                            id="description"
                            rows={4}
                            value={formData.description}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#002B5C] border border-[#1E4D8C] rounded-lg px-3 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FF9F66] focus:border-transparent transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`w-full font-bold text-lg py-3 rounded-lg shadow-lg transition-all transform 
                ${isFormValid
                                    ? "bg-gradient-to-r from-[#FF7A7A] to-[#FFBC7D] text-white hover:shadow-xl hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                                    : "bg-gray-600 text-gray-400 cursor-not-allowed opacity-50"
                                }`}
                        >
                            Get Started
                        </button>
                    </div>

                </form>
            </div>
        </main>
    )
}
