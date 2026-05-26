import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Section, Button, GlassCard } from '../ui';

export const Contact = () => {
  return (
    <Section id="contact" className="bg-slate-900 text-white pb-32">
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
              { icon: <Mail />, label: 'Email', value: 'hello@agency.com' },
              { icon: <Phone />, label: 'Phone', value: '+91 9084942557' },
              { icon: <MapPin />, label: 'Address', value: '123 Creative St, San Francisco, CA' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase mb-1">{item.label}</p>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent border border-white/5">
            <h4 className="flex items-center gap-3 text-xl font-bold mb-4">
              <MessageSquare className="text-primary" />
              Book a free consultation
            </h4>
            <p className="text-slate-400 mb-6">Schedule a 30-minute discovery call with our experts to discuss your roadmap.</p>
            <Button className="w-full sm:w-auto">Schedule Now</Button>
          </div>
        </div>

        <div>
          <GlassCard className="bg-white p-10 h-full border-none shadow-2xl">
            <form className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                
                  const form = e.target;
                
                  const data = {
                    name: form.first_name.value + " " + form.last_name.value,
                    email: form.email.value,
                    message: form.details.value,
                    budget: form.project_budget.value
                  };
                
                  try {
                    await fetch("https://script.google.com/macros/s/AKfycbx9PdLSm0YRp2j5wu-fxWDVUOJoT1PSeRqLJDs5MUnJcbyr9xNSJy3gmVjOB3LCdqIqGQ/exec", {
                      method: "POST",
                      body: JSON.stringify(data),
                    });
                  
                    alert("Message sent successfully!");
                    form.reset();
                  
                  } catch (error) {
                    alert("Something went wrong!");
                    console.error(error);
                  }
                }} >
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first_name" className="block text-slate-800 font-bold mb-3 text-sm">First Name</label>
                  <input 
                    type="text" 
                    id="first_name"
                    name="first_name"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-slate-800 font-bold mb-3 text-sm">Last Name</label>
                  <input 
                    type="text" 
                    id="last_name"
                    name="last_name"
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                    placeholder="Doe"
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
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="project_budget" className="block text-slate-800 font-bold mb-3 text-sm">Project Budget</label>
                <select 
                  id="project_budget"
                  name="project_budget"
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none appearance-none"
                >
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k+</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-slate-800 font-bold mb-3 text-sm">Project Details</label>
                <textarea 
                  id="details"
                  name="details"
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none text-slate-900 focus:ring-2 focus:ring-primary outline-none resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <Button className="w-full py-5 text-lg gap-3">
                Send Message
                <Send size={20} />
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
    </Section>
  );
};
