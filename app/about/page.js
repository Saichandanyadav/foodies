export default function BookPage() {
  return (
    <div className="bg-brand-light min-h-screen py-12 md:py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-10 md:p-12 border border-amber-100">
        <div className="text-center mb-8 md:mb-10">
          <span className="text-brand-primary font-bold uppercase tracking-widest text-xs">Reservations</span>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-dark mt-2">Reserve Dining Space</h1>
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-brand-dark mb-2">Full Name</label>
              <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary bg-brand-light text-sm" placeholder="Aarav Sharma"/>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-brand-dark mb-2">Contact Mobile Number</label>
              <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary bg-brand-light text-sm" placeholder="+91 98765 43210"/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-brand-dark mb-2">Date</label>
              <input type="date" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary bg-brand-light text-sm"/>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-brand-dark mb-2">Time Slot</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary bg-brand-light text-sm">
                <option>12:30 PM (Lunch)</option>
                <option>2:00 PM (Lunch)</option>
                <option>7:30 PM (Dinner)</option>
                <option>9:30 PM (Dinner)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-bold text-brand-dark mb-2">Total Family Members</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary bg-brand-light text-sm">
                <option>2 People</option>
                <option>4 People</option>
                <option>6 People</option>
                <option>8+ Family Mega Group</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-bold text-brand-dark mb-2">Jain Food or Specific Instructions</label>
            <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-primary bg-brand-light text-sm" placeholder="Mention if pure Jain requirements, food spice adjustments, or kid chairs required..."></textarea>
          </div>
          <button type="submit" className="w-full py-4 bg-brand-dark hover:bg-brand-primary text-white font-bold rounded-xl transition duration-300 text-center shadow-lg text-sm sm:text-base">
            Confirm Royal Table Booking
          </button>
        </form>
      </div>
    </div>
  );
}