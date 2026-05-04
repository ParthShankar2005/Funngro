import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clapperboard,
  Database,
  FilePenLine,
  Film,
  GraduationCap,
  Laptop2,
  Layers3,
  Megaphone,
  Mic2,
  Monitor,
  Palette,
  PenSquare,
  PenTool,
  Search,
  Smartphone,
  Sparkles,
  TestTube2,
  TrendingUp,
  Users,
  Video,
  Bug,
} from "lucide-react";
import Button from "../components/Button";
import CategoryCard from "../components/CategoryCard";
import FAQ from "../components/FAQ";
import ProjectCard from "../components/ProjectCard";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import {
  announcementText,
  faqs,
  heroSkills,
  processSteps,
  projectIdeas,
  stats,
  talentCategories,
  testimonials,
  whyWorkWithTeens,
} from "../data/siteData";

const heroSkillIcons = {
  Monitor,
  Megaphone,
  Film,
  PenSquare,
  Bug,
};

const projectIcons = {
  Sparkles,
  Laptop2,
  TrendingUp,
  Clapperboard,
};

const categoryIcons = {
  Megaphone,
  Video,
  Palette,
  BadgeCheck,
  Smartphone,
  GraduationCap,
  Search,
  Database,
  Mic2,
  FilePenLine,
  PenTool,
  TestTube2,
};

const statIcons = [Building2, Layers3, Users, BriefcaseBusiness];

const floatPositions = [
  "top-8 left-3",
  "top-20 right-2",
  "top-44 left-8",
  "bottom-16 right-10",
  "bottom-5 left-1/2 -translate-x-1/2",
];

function Home() {
  return (
    <div className="relative overflow-hidden pb-4 pt-28">
      <section className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 rounded-full border border-accent/30 bg-accent/15 px-4 py-2 text-center text-xs font-medium text-accent sm:text-sm"
        >
          {announcementText}
        </motion.div>
      </section>

      <section className="section-shell pb-16 pt-4 lg:pt-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-accent/35 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              For Companies
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Smart Talent for Smart Companies
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Hire creative teenagers for design, marketing, content, research, app testing, and digital projects.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="#project-ideas" size="lg" showArrow>
                Hire Teenlancer
              </Button>
              <Button href="#categories" variant="secondary" size="lg">
                Explore Projects
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto h-[360px] w-full max-w-xl sm:h-[430px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-hero-gradient shadow-glow" />
            <div className="absolute inset-6 rounded-[1.8rem] border border-white/10 bg-navy-secondary/70 backdrop-blur-md" />
            {heroSkills.map((skill, idx) => {
              const Icon = heroSkillIcons[skill.icon];
              return (
                <motion.div
                  key={skill.title}
                  className={`absolute ${floatPositions[idx]} glass-card flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-white`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.2 + idx * 0.45, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon size={15} className="text-accent" />
                  <span>{skill.title}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={statIcons[index]}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              locale={stat.locale}
            />
          ))}
        </div>
      </section>

      <section id="project-ideas" className="section-shell py-16">
        <SectionTitle
          eyebrow="Project Ideas"
          title="High-impact projects your team can launch this week"
          subtitle="Choose from proven project formats and collaborate with teen talent through milestone-based execution."
          align="center"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projectIdeas.map((idea) => (
            <ProjectCard
              key={idea.title}
              title={idea.title}
              description={idea.description}
              price={idea.price}
              cta={idea.cta}
              icon={projectIcons[idea.icon]}
            />
          ))}
        </div>
      </section>

      <section id="categories" className="section-shell py-16">
        <SectionTitle
          eyebrow="Talent Categories"
          title="Find the right skills across every digital category"
          subtitle="From short-form content to website improvements, hire pre-screened teenlancers aligned to your project scope."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {talentCategories.map((category) => (
            <CategoryCard key={category.name} title={category.name} icon={categoryIcons[category.icon]} />
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionTitle
            eyebrow="Why Work With Teens"
            title="Modern teams need modern creators"
            subtitle="Teenlancers combine speed, creativity, and platform fluency to ship relevant digital work at startup pace."
          />

          <div className="space-y-4">
            {whyWorkWithTeens.map((point, index) => (
              <motion.div
                key={point.title}
                className="glass-card rounded-2xl p-5"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ x: 4 }}
              >
                <h3 className="font-display text-lg font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section-shell py-16">
        <SectionTitle
          eyebrow="Working Process"
          title="A structured flow from brief to delivery"
          subtitle="Launch quickly and stay in control with a transparent workflow designed for busy company teams."
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <motion.div
                className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/25 font-semibold text-accent"
                whileInView={{ scale: [0.86, 1.08, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {index + 1}
              </motion.div>
              <h3 className="text-sm font-semibold text-white">{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by growth-focused teams"
          subtitle="What company leaders say after working with Funngro teenlancers."
          align="center"
        />

        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              className="glass-card min-w-[280px] snap-start rounded-2xl p-6 sm:min-w-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <p className="text-sm leading-relaxed text-slate-200">"{item.feedback}"</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-xs text-slate-400">
                  {item.role} • {item.company}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="faq" className="section-shell py-16">
        <SectionTitle
          eyebrow="FAQ"
          title="Everything you need to know"
          subtitle="Quick answers for companies starting with teenlancer-powered project execution."
        />
        <div className="mt-8">
          <FAQ items={faqs} />
        </div>
      </section>

      <section id="final-cta" className="section-shell py-16">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-accent/30 bg-gradient-to-r from-accent/20 to-emerald-400/10 p-8 sm:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <span className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-accent/20 blur-3xl" />
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to hire smart teen talent?</h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            Start your next project with vetted, energetic creators who understand today&apos;s digital audience.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" showArrow href="#project-ideas">
              Start a Project
            </Button>
            <Button size="lg" variant="secondary" to="/company">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
