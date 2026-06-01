import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-brand-light min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-brand-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Find Our Kitchen</p>
          <h1 className="text-4xl md:text-5xl font-black text-brand-dark">Visit Our Branches</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-amber-100 space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 text-brand-primary rounded-xl flex-shrink-0"><MapPin size={22} /></div>
              <div>
                <h4 className="font-bold text-lg text-brand-dark">Flagship Restaurant Address</h4>
                <p className="text-gray-500 text-sm mt-1">Block 3, Jubilee Hills, Near Metro Station, Hyderabad, Telangana - 500033</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 text-brand-primary rounded-xl flex-shrink-0"><Phone size={22} /></div>
              <div>
                <h4 className="font-bold text-lg text-brand-dark">Front Desk Help Desk</h4>
                <p className="text-gray-500 text-sm mt-1">+91 40 6678 2834, +91 91234 56789</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-red-100 text-brand-primary rounded-xl flex-shrink-0"><Mail size={22} /></div>
              <div>
                <h4 className="font-bold text-lg text-brand-dark">Catering Partnerships Email</h4>
                <p className="text-gray-500 text-sm mt-1">namaste@foodies.co.in</p>
              </div>
            </div>
            <div className="w-full h-64 bg-zinc-900 rounded-2xl overflow-hidden relative border border-amber-100 flex items-center justify-center text-gray-400 text-xs font-semibold">
              [ Interactive Hyderabad Map Engine Simulator ]
            </div>
          </div>
          <form className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-amber-100 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black text-brand-dark mb-2">Drop An Inquiry</h3>
            <div>
              <label className="block text-xs font-bold text-brand-dark mb-2">Your Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary bg-brand-light text-sm"/>
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-dark mb-2">Email Address</label>
              <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary bg-brand-light text-sm"/>
            </div>
            <div>
              <label className="block text-xs font-bold text-brand-dark mb-2">Detailed Message</label>
              <textarea rows="5" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary bg-brand-light text-sm"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl transition duration-300 shadow-md">
              Submit Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}