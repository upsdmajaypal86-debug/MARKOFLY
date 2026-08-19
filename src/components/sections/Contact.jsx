import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Loader2, Calendar, X } from 'lucide-react';
import { Section, Button, GlassCard } from '../ui';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectBudget: '$5k - $10k',
    details: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  // State to control Schedule Modal
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      message: formData.details,
      budget: formData.projectBudget,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx9PdLSm0YRp2j5wu-fxWDVUOJoT1PSeRqLJDs5MUnJcbyr9xNSJy3gmVjOB3LCdqIqGQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      setStatus({ loading: false, error: null, success: true });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        projectBudget: '$5k - $10k',
        details: '',
      });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({
        loading: false,
        error: "Failed to send message. Please try again.",
        success: false,
      });
    }
  };

  const handleScheduleClick = () => {
    // Option A: Direct Redirect (Uncomment to redirect directly to Calendly/Google Calendar)
    // window.open('https://calendly.com/your-calendly-link', '_blank');

    // Option B: Open Modal (Active default)
    setIsScheduleOpen(true);
  };

  return (
    <Section id="contact" className="bg-slate-900 text-white pb-32 relative">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
        <div>
          <h4 className="text-primary font-bold tracking-wider uppercase mb-4 text-sm">Contact Us</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Let's build something <span className="text-gradient">extraordinary.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12">
            Have a project in mind? We'd love to hear from you. Reach out and let's discuss how we can help your brand grow.
          </p>

          <div className="space-y-10">
            {[
              { 
                icon: <Mail />, 
                label: 'Email', 
                value: 'hellomarkofly@gmail.com',
                href: 'mailto:hellomarkofly@gmail.com'
              },
              { 
                icon: <Phone />, 
                label: 'Phone', 
                value: '+91 9084942557',
                href: 'tel:+919084942557'
              },
              { 
                icon: <MapPin />, 
                label: 'Address', 
                value: 'Vasundhara enclave, Behind ATV projects mathura',
                href: 'https://maps.google.com/?q=Vasundhara+enclave+Behind+ATV+projects+mathura',
                target: '_blank'
              }
            ].map((item, i) => (
              <a 
                key={i} 
                href={item.href}
                target={item.target || '_self'}
                rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="flex gap-6 items-start group cursor-pointer transition-opacity hover:opacity-80"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase mb-1">{item.label}</p>
                  <p className="text-xl font-bold group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5">
            <h4 className="flex items-center gap-3 text-xl font-bold mb-4">
              <MessageSquare className="text-primary" />
              Book a free consultation
            </h4>
            <p className="text-slate-400 mb-6">Schedule a 30-minute discovery call with our experts to discuss your roadmap.</p>
            <Button onClick={handleScheduleClick} className="w-full sm:w-auto">
              Schedule Now
            </Button>
          </div>
        </div>

        <div>
          <GlassCard className="bg-white p-10 h-full border-none shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first_name" className="block text-slate-800 font-bold mb-3 text-sm">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-slate-800 font-bold mb-3 text-sm">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Last name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-800 font-bold mb-3 text-sm">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="Email address"
                  required
                />
              </div>

              <div>
                <label htmlFor="project_budget" className="block text-slate-800 font-bold mb-3 text-sm">Project Budget</label>
                <select
                  id="project_budget"
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none appearance-none"
                >
                  <option value="$5k - $10k">$5k - $10k</option>
                  <option value="$10k - $25k">$10k - $25k</option>
                  <option value="$25k - $50k">$25k - $50k</option>
                  <option value="$50k+">$50k+</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-slate-800 font-bold mb-3 text-sm">Project Details</label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              {status.success && (
                <p className="text-emerald-600 font-medium text-sm">Message sent successfully!</p>
              )}
              {status.error && (
                <p className="text-rose-600 font-medium text-sm">{status.error}</p>
              )}

              <Button 
                type="submit" 
                disabled={status.loading} 
                className="w-full py-5 text-lg gap-3"
              >
                {status.loading ? (
                  <>
                    Sending...
                    <Loader2 size={20} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>
      </div>

      {/* Footer Placeholder for map */}
      <div className="mt-20 h-64 w-full rounded-[3rem] overflow-hidden bg-slate-800 relative grayscale opacity-50">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <MapPin size={48} />
          <span className="font-bold ml-4">Satellite map visual here in production</span>
        </div>
      </div>

      {/* Consultation Scheduling Modal */}
      {isScheduleOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-slate-900 border border-white/10 p-8 rounded-3xl max-w-lg w-full relative shadow-2xl">
            <button 
              onClick={() => setIsScheduleOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-primary/20 text-primary flex items-center justify-center mb-6">
              <Calendar size={24} />
            </div>

            <h3 className="text-2xl font-bold mb-2">Book 30-Min Discovery Call</h3>
            <p className="text-slate-400 mb-6 text-sm">
              Pick a time to speak directly with our core team regarding your digital expansion or roadmap.
            </p>

            <div className="space-y-4">
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all"
              >
                Open Calendar Scheduler
              </a>
              <a
                href="tel:+919084942557"
                className="w-full block text-center bg-white/5 hover:bg-white/10 text-white font-bold py-4 rounded-xl transition-all border border-white/10"
              >
                Call Directly (+91 9084942557)
              </a>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};