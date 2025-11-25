"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Copy, Check, ShieldCheck, Heart, smartphone, CreditCard, Landmark } from 'lucide-react';

export default function DonatePage() {
  const [copied, setCopied] = useState(null);

  // Helper to copy text to clipboard
  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <div className="bg-red-800 py-16 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Your Contribution Changes Lives
          </h1>
          <p className="text-lg md:text-xl text-red-100 max-w-2xl mx-auto">
            Every rupee you donate helps us provide education, nutrition, and shelter to an underprivileged child.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* --- LEFT COLUMN: APPEAL & INFO --- */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Impact Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="text-red-600 w-6 h-6 mr-2 fill-current" /> 
                Why Donate?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <h3 className="font-bold text-orange-800 text-lg">₹ 1,000</h3>
                  <p className="text-sm text-gray-600">Provides school supplies for 2 children for a year.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                  <h3 className="font-bold text-green-800 text-lg">₹ 3,500</h3>
                  <p className="text-sm text-gray-600">Provides one month of nutrition for a family.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-blue-800 text-lg">₹ 10,000</h3>
                  <p className="text-sm text-gray-600">Sponsors the complete education of a child for a year.</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <h3 className="font-bold text-purple-800 text-lg">Any Amount</h3>
                  <p className="text-sm text-gray-600">Goes directly to our general relief fund.</p>
                </div>
              </div>
            </div>

            {/* Tax Benefit Badge */}
            <div className="bg-blue-900 text-white p-6 rounded-xl flex items-start space-x-4 shadow-lg">
              <ShieldCheck className="w-10 h-10 flex-shrink-0 text-blue-300" />
              <div>
                <h3 className="text-xl font-bold">Tax Exemption Available</h3>
                <p className="text-blue-200 text-sm mt-1">
                  All donations to Eco Vigyan are 50% tax-exempt under Section 80G of the Income Tax Act. You will receive your tax receipt via email within 48 hours.
                </p>
              </div>
            </div>

            {/* Support Contact */}
            <div className="p-6">
               <p className="text-gray-500 text-sm">
                 Have questions about your donation? Contact us at <span className="font-bold text-gray-800">finance@ecovigyan.org</span> or call <span className="font-bold text-gray-800">+91 98765 43210</span>.
               </p>
            </div>
          </div>

          {/* --- RIGHT COLUMN: PAYMENT METHODS --- */}
          <div className="lg:col-span-5 space-y-6">

            {/* METHOD 1: BANK TRANSFER */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-red-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <Landmark className="w-5 h-5 mr-2 text-gray-500" />
                    Bank Transfer (NEFT/IMPS)
                  </h3>
                  <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded">Preferred</span>
                </div>

                <div className="space-y-4">
                  {/* Account Name */}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Account Name</p>
                    <div className="flex justify-between items-center">
                      <p className="font-medium text-gray-900">Eco Vigyan Trust</p>
                      <button 
                        onClick={() => copyToClipboard("Eco Vigyan Trust", "name")}
                        className="text-gray-400 hover:text-blue-600 transition"
                      >
                        {copied === "name" ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Account Number */}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Account Number</p>
                    <div className="flex justify-between items-center">
                      <p className="font-mono text-lg font-bold text-gray-900 tracking-wide">34560100012345</p>
                      <button 
                        onClick={() => copyToClipboard("34560100012345", "acc")}
                        className="text-gray-400 hover:text-blue-600 transition"
                      >
                        {copied === "acc" ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* IFSC */}
                  <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">IFSC Code</p>
                    <div className="flex justify-between items-center">
                      <p className="font-mono text-lg font-bold text-gray-900">SBIN0001234</p>
                      <button 
                        onClick={() => copyToClipboard("SBIN0001234", "ifsc")}
                        className="text-gray-400 hover:text-blue-600 transition"
                      >
                        {copied === "ifsc" ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  {/* Bank Details */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Bank</p>
                      <p className="text-sm font-medium">State Bank of India</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Branch</p>
                      <p className="text-sm font-medium">Shimla Main</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* METHOD 2: QR CODE */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scan to Donate</h3>
                <p className="text-sm text-gray-500 mb-6">Use any UPI App (GPay, PhonePe, Paytm)</p>
                
                <div className="bg-white p-2 rounded-xl shadow-inner border-2 border-dashed border-gray-300">
                    {/* REPLACE WITH YOUR ACTUAL QR IMAGE */}
                    <img 
                        src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=ecovigyan@sbi&pn=EcoVigyanTrust" 
                        alt="Donation QR Code" 
                        className="w-48 h-48 opacity-90"
                    />
                </div>
                <p className="mt-4 font-mono text-sm bg-gray-100 px-3 py-1 rounded text-gray-600">
                    UPI ID: ecovigyan@sbi
                </p>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}