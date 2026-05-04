import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Briefcase, Building2, Sparkles, Target, Users } from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import { careerOpenings, formDomains, joinBenefits } from "../data/siteData";

const benefitIcons = [Sparkles, Target, Users, Building2];

const initialFormState = {
  fullName: "",
  email: "",
  phone: "",
  domain: "",
  linkedin: "",
  message: "",
};

function Company() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) nextErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phone.replace(/\s|\+|-/g, ""))) {
      nextErrors.phone = "Enter a valid phone number.";
    }

    if (!formData.domain) nextErrors.domain = "Please select a domain.";

    if (!formData.linkedin.trim()) {
      nextErrors.linkedin = "LinkedIn profile is required.";
    } else if (!/^https?:\/\/.+/.test(formData.linkedin)) {
      nextErrors.linkedin = "Add a valid LinkedIn URL (https://...).";
    }

    if (!formData.message.trim()) nextErrors.message = "Please share a short message.";

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialFormState);
      setTimeout(() => setSubmitted(false), 3500);
    }
  };

  const updateField = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  return (
    <div className="relative overflow-hidden pb-6 pt-28">
      <section className="section-shell py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Careers
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Grow With Funngro
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Join a mission-driven team helping teenagers learn, earn, and grow through real-world opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#openings" size="lg" showArrow>
                View Openings
              </Button>
              <Button href="#application-form" size="lg" variant="secondary">
                Apply Now
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65 }}
            className="relative mx-auto h-[340px] w-full max-w-xl"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-hero-gradient" />
            <div className="absolute left-6 top-8 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-xs text-slate-300">Team Growth</p>
              <p className="mt-1 font-display text-3xl font-bold text-white">3.4x</p>
            </div>
            <div className="absolute bottom-8 right-6 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-xs text-slate-300">Impact</p>
              <p className="mt-1 font-display text-3xl font-bold text-white">50L+</p>
            </div>
            <motion.div
              className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/15 bg-navy-secondary/80 p-6 backdrop-blur"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <h3 className="font-display text-2xl font-semibold text-white">Build the Future of Teen Work</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Join a high-ownership startup where your work directly enables youth opportunities across India.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="openings" className="section-shell py-16">
        <SectionTitle
          eyebrow="Current Openings"
          title="Find your role in our growth story"
          subtitle="Choose a role that matches your strengths and help us build a category-defining platform."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {careerOpenings.map((job, idx) => (
            <motion.article
              key={job.title}
              className="glass-card flex h-full flex-col rounded-2xl p-6"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              whileHover={{ y: -7 }}
            >
              <div className="mb-4 inline-flex w-fit rounded-xl bg-accent/20 p-3 text-accent">
                <Briefcase size={18} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{job.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{job.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <Button href="#application-form" variant="secondary" size="sm" showArrow>
                  Apply Now
                </Button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionTitle
          eyebrow="Why Join Funngro"
          title="Work where your ideas create measurable impact"
          subtitle="We value ownership, speed, and people who are excited to build solutions for India&apos;s next generation." 
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {joinBenefits.map((benefit, idx) => {
            const Icon = benefitIcons[idx];
            return (
              <motion.div
                key={benefit.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                whileHover={{ y: -5, boxShadow: "0 12px 30px rgba(32,200,120,0.16)" }}
              >
                <span className="mb-3 inline-flex rounded-xl bg-accent/20 p-3 text-accent">
                  <Icon size={18} />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="application-form" className="section-shell py-16">
        <SectionTitle
          eyebrow="Application Form"
          title="Tell us about yourself"
          subtitle="Fill the details below and our team will get back to you if your profile matches an open role."
        />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-card mt-8 rounded-3xl p-6 sm:p-8"
          noValidate
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field
              name="fullName"
              label="Full Name"
              value={formData.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              error={errors.fullName}
            />
            <Field
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              error={errors.email}
            />
            <Field
              name="phone"
              label="Phone Number"
              value={formData.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              error={errors.phone}
            />

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="domain">
                Select Domain
              </label>
              <select
                id="domain"
                value={formData.domain}
                onChange={(event) => updateField("domain", event.target.value)}
                className={`w-full rounded-xl border bg-navy-secondary/70 px-4 py-3 text-sm text-white outline-none transition focus:border-accent ${
                  errors.domain ? "border-rose-400" : "border-white/15"
                }`}
              >
                <option value="" className="bg-navy-secondary text-slate-300">
                  Choose a domain
                </option>
                {formDomains.map((domain) => (
                  <option key={domain} value={domain} className="bg-navy-secondary text-slate-100">
                    {domain}
                  </option>
                ))}
              </select>
              {errors.domain ? <p className="mt-1 text-xs text-rose-300">{errors.domain}</p> : null}
            </div>

            <Field
              name="linkedin"
              label="LinkedIn Profile"
              value={formData.linkedin}
              onChange={(event) => updateField("linkedin", event.target.value)}
              error={errors.linkedin}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              className={`w-full rounded-xl border bg-navy-secondary/70 px-4 py-3 text-sm text-white outline-none transition focus:border-accent ${
                errors.message ? "border-rose-400" : "border-white/15"
              }`}
              placeholder="Tell us why you want to join Funngro"
            />
            {errors.message ? <p className="mt-1 text-xs text-rose-300">{errors.message}</p> : null}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg" showArrow>
              Submit Application
            </Button>
            <span className="text-xs text-slate-400">We review applications on a rolling basis.</span>
          </div>

          <AnimatePresence>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-5 inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/15 px-4 py-2 text-sm text-accent"
              >
                <ArrowRight size={14} />
                Application submitted successfully.
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.form>
      </section>
    </div>
  );
}

function Field({ name, label, error, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-200" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={`w-full rounded-xl border bg-navy-secondary/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-accent ${
          error ? "border-rose-400" : "border-white/15"
        }`}
        {...props}
      />
      {error ? <p className="mt-1 text-xs text-rose-300">{error}</p> : null}
    </div>
  );
}

export default Company;
