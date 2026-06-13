import { useState } from 'react';

export default function LoginScreen({ onLoginSuccess }) {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    profession: '',
    rememberMe: false
  });
  
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, age, profession } = formData;

    if (!username.trim() || !age.trim() || !profession.trim()) {
      setError('Please fill in all details.');
      return;
    }

    if (isNaN(age) || parseInt(age) <= 0) {
      setError('Please enter a valid age.');
      return;
    }

    setIsSubmitted(true);
    if (onLoginSuccess) {
      onLoginSuccess(formData);
    }
  };

  const handleLogout = () => {
    setFormData({
      username: '',
      age: '',
      profession: '',
      rememberMe: false
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="font-outfit fixed inset-0 w-full h-full z-[9999] flex items-center justify-center bg-[radial-gradient(circle_at_50%_15%,#152c4e_0%,#070e1b_70%,#03070f_100%)] overflow-y-auto py-10 px-6 box-border">
        {/* Ambient light effects */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,rgba(56,189,248,0)_70%)] pointer-events-none z-1"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(170,59,255,0.05)_0%,rgba(170,59,255,0)_70%)] pointer-events-none z-1"></div>

        <div className="relative z-10 bg-[#0a1629]/40 backdrop-blur-[25px] [backdrop-filter:saturate(130%)] border border-white/8 border-t-white/20 rounded-[20px] py-6 px-5 shadow-dashboard-card box-border w-full max-w-[380px] m-auto animate-fade-in flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#38bdf8]/20 to-[#aa3bff]/20 border-2 border-white/15 mb-4 text-2xl text-white shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
            {formData.username.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-semibold text-white mb-1">Welcome back!</h2>
          <p className="text-[13.5px] text-[#94a3b8] mb-5 font-light">Here are your profile details</p>
          
          <div className="w-full flex flex-col gap-[10px] mb-6">
            <div className="bg-[#0f172a]/40 border border-white/5 rounded-xl py-2.5 px-4 flex justify-between items-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
              <span className="text-xs uppercase tracking-[0.5px] text-[#64748b] font-medium">Username</span>
              <span className="text-[15px] text-[#f8fafc] font-semibold">{formData.username}</span>
            </div>
            <div className="bg-[#0f172a]/40 border border-white/5 rounded-xl py-2.5 px-4 flex justify-between items-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
              <span className="text-xs uppercase tracking-[0.5px] text-[#64748b] font-medium">Age</span>
              <span className="text-[15px] text-[#f8fafc] font-semibold">{formData.age} years</span>
            </div>
            <div className="bg-[#0f172a]/40 border border-white/5 rounded-xl py-2.5 px-4 flex justify-between items-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
              <span className="text-xs uppercase tracking-[0.5px] text-[#64748b] font-medium">Profession</span>
              <span className="text-[15px] text-[#f8fafc] font-semibold">{formData.profession}</span>
            </div>
          </div>

          <button onClick={handleLogout} className="bg-white/[0.03] border border-white/8 rounded-xl py-2.5 px-5 text-[#94a3b8] font-inherit text-sm font-medium cursor-pointer transition-all duration-200 hover:bg-[#ef4444]/10 hover:border-[#ef4444]/25 hover:text-[#ef4444]">
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-outfit fixed inset-0 w-full h-full z-[9999] flex items-center justify-center bg-[radial-gradient(circle_at_50%_15%,#152c4e_0%,#070e1b_70%,#03070f_100%)] overflow-y-auto py-10 px-6 box-border">
      {/* Ambient light effects */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(56,189,248,0.15)_0%,rgba(56,189,248,0)_70%)] pointer-events-none z-1"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(170,59,255,0.05)_0%,rgba(170,59,255,0)_70%)] pointer-events-none z-1"></div>

      <div className="relative z-10 w-full max-w-5xl m-auto flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-16">
        {/* Left Side: Robot Image (visible on desktop) */}
        <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center animate-fade-in">
          <div className="relative max-w-[420px] w-full aspect-square rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0a1629]/20 backdrop-blur-[10px]">
            <img
              src="/login_robot.png"
              alt="AI Robot Illustration"
              className="w-full h-full object-cover"
            />
            {/* Subtle glow layer overlay on top of the image to blend it into the screen */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070e1b]/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* Right Side: Login Box */}
        <div className="w-full lg:w-1/2 flex items-center justify-center animate-fade-in [perspective:1000px]">
          <div className="w-full max-w-[380px] bg-[#0a1629]/35 backdrop-blur-[20px] [backdrop-filter:saturate(120%)] border border-white/8 border-t-white/18 rounded-[20px] py-6 px-5 shadow-glass-card text-center box-border transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-glass-card-hover">
            {/* Logo container mimicking the design */}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] bg-white/[0.03] border border-white/12 mb-3 relative shadow-[inset_0_2px_4px_rgba(255,255,255,0.05)]">
              <div className="absolute -inset-[2px] rounded-[12px] bg-gradient-to-br from-[#38bdf8]/40 to-[#38bdf8]/0 -z-10 opacity-50"></div>
              <svg
                className="w-5 h-5 text-[#e2e8f0]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            <h1 className="text-white text-2xl font-medium m-0 mb-1 tracking-[-0.5px]">Welcome back</h1>
            <p className="text-[#94a3b8] text-[13.5px] m-0 mb-4 font-light">Please enter your details to sign in.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
              {/* Username Input */}
              <div className={`relative text-left border rounded-xl py-2 px-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center shadow-input-inset ${
                focusedField === 'username'
                  ? 'bg-[#0f172a]/50 border-[#38bdf8]/40 shadow-input-focus'
                  : 'bg-[#0f172a]/30 border-white/6 hover:bg-[#0f172a]/40 hover:border-white/12'
              }`}>
                <label htmlFor="username" className={`text-[10px] font-medium uppercase tracking-[0.5px] mb-[2px] transition-colors duration-300 ${
                  focusedField === 'username' ? 'text-[#38bdf8]' : 'text-[#64748b]'
                }`}>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  onFocus={() => handleFocus('username')}
                  onBlur={handleBlur}
                  placeholder="e.g. merveavsar"
                  className="bg-transparent border-none outline-none text-[#f8fafc] text-base font-inherit w-full p-0 box-border placeholder-[#475569]"
                  required
                />
              </div>

              {/* Age Input */}
              <div className={`relative text-left border rounded-xl py-2 px-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center shadow-input-inset ${
                focusedField === 'age'
                  ? 'bg-[#0f172a]/50 border-[#38bdf8]/40 shadow-input-focus'
                  : 'bg-[#0f172a]/30 border-white/6 hover:bg-[#0f172a]/40 hover:border-white/12'
              }`}>
                <label htmlFor="age" className={`text-[10px] font-medium uppercase tracking-[0.5px] mb-[2px] transition-colors duration-300 ${
                  focusedField === 'age' ? 'text-[#38bdf8]' : 'text-[#64748b]'
                }`}>
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  onFocus={() => handleFocus('age')}
                  onBlur={handleBlur}
                  placeholder="e.g. 24"
                  className="bg-transparent border-none outline-none text-[#f8fafc] text-base font-inherit w-full p-0 box-border placeholder-[#475569]"
                  min="1"
                  max="120"
                  required
                />
              </div>

              {/* Profession Input */}
              <div className={`relative text-left border rounded-xl py-2 px-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-center shadow-input-inset ${
                focusedField === 'profession'
                  ? 'bg-[#0f172a]/50 border-[#38bdf8]/40 shadow-input-focus'
                  : 'bg-[#0f172a]/30 border-white/6 hover:bg-[#0f172a]/40 hover:border-white/12'
              }`}>
                <label htmlFor="profession" className={`text-[10px] font-medium uppercase tracking-[0.5px] mb-[2px] transition-colors duration-300 ${
                  focusedField === 'profession' ? 'text-[#38bdf8]' : 'text-[#64748b]'
                }`}>
                  Profession
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  onFocus={() => handleFocus('profession')}
                  onBlur={handleBlur}
                  placeholder="e.g. Designer"
                  className="bg-transparent border-none outline-none text-[#f8fafc] text-base font-inherit w-full p-0 box-border placeholder-[#475569]"
                  required
                />
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-[#ef4444] text-[13px] text-left -mt-1">
                  {error}
                </div>
              )}

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-start mt-1">
                <label className="flex items-center gap-2 text-[#94a3b8] text-[13.5px] cursor-pointer select-none">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="appearance-none w-4 h-4 rounded-[5px] bg-[#0f172a]/40 border border-white/10 cursor-pointer relative inline-flex items-center justify-center transition-all duration-200 checked:bg-[#38bdf8]/15 checked:border-[#38bdf8]/60 checked:shadow-[0_0_8px_rgba(56,189,248,0.2)] checked:after:content-[''] checked:after:w-2 checked:after:h-1 checked:after:border-l-2 checked:after:border-b-2 checked:after:border-[#38bdf8] checked:after:-rotate-45 checked:after:absolute checked:after:top-[3px] checked:after:left-[3px]"
                  />
                  Remember me
                </label>
              </div>

              {/* Submit button */}
              <button type="submit" className="group bg-gradient-to-br from-[#38bdf8] to-[#0284c7] border-none outline-none text-white text-[15px] font-semibold rounded-xl p-3 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_15px_rgba(2,132,199,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] mt-1 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(2,132,199,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-[#7dd3fc] hover:to-[#0369a1] active:translate-y-[1px] active:shadow-[0_2px_8px_rgba(2,132,199,0.2)]">
                <span>Continue</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[3px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
