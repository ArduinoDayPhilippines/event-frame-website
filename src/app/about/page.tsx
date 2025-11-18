export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-100 text-gray-900">
      
      {/* =====================================
        HERO SECTION (Primary + Secondary) - FINAL NAME: FrameIt
        ===================================== */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-teal-300 py-24 text-white text-center">
        <h1 className="text-5xl font-bold mb-4">FrameIt: CPE Project</h1>
        <p className="text-lg max-w-2xl mx-auto text-white/90">
        <strong>FrameIt</strong> is the result of our Computer Engineering Design Project: a comprehensive tool for designing custom profile picture frames that is applied to user profile image.
        </p>
      </section>

      {/* =====================================
        MISSION SECTION (Neutral Background) 
        ===================================== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to create a <strong>high-quality</strong>, interactive image utility that leverages modern web technologies and efficient image processing algorithms, demonstrating advanced skills in full-stack application development and user experience design.
        </p>
      </section>

      {/* =====================================
        TEAM SECTION (Background) - FINAL ROLES AND NAMES
        ===================================== */}
      <section className="bg-white py-16 shadow-inner">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
            Meet the FrameIt Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {/* Team Head: Ezekiel Bustamante */}
            <div className="p-6 rounded-xl border border-red-500 bg-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Ezekiel Bustamante
              </h3>
              <p className="text-gray-600">
                <strong>Team Head</strong>
              </p>
            </div>
            
            {/* Project Manager: Marcus Abrio */}
            <div className="p-6 rounded-xl border border-blue-500 bg-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Marcus Abrio
              </h3>
              <p className="text-gray-600">
                <strong>Project Manager</strong>
              </p>
            </div>

            {/* Frontend Developer: Lielan Azcarraga */}
            <div className="p-6 rounded-xl border border-blue-500 bg-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Lielan Jusmar Azcarraga
              </h3>
              <p className="text-gray-600">
                <strong>Frontend Developer 1</strong>
              </p>
            </div>

            {/* UI/UX Designer: Jana Villafranca */}
            <div className="p-6 rounded-xl border border-blue-500 bg-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Jana Villafranca</h3>
              <p className="text-gray-600">
                <strong>UI/UX Designer</strong>
              </p>
            </div>

            {/* Backend/Algorithm Dev: Duke Buerano */}
            <div className="p-6 rounded-xl border border-blue-500 bg-slate-100 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Duke Buerano</h3>
              <p className="text-gray-600">
                <strong>Frontend Developer 2</strong>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================
        FOOTER (Secondary Foreground)
        ===================================== */}
      <footer className="text-center py-6 text-gray-900">
        © {new Date().getFullYear()} FrameIt Project Team. All rights reserved.
      </footer>
    </div>
  );
}