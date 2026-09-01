import { useState } from "react";
import { Play, Menu, X, Mail, Phone, MapPin, Globe, ArrowUpRight, ExternalLink } from "lucide-react";

const NAV_LINKS = ["ABOUT", "EXPERIENCE", "PROJECTS", "SKILLS", "EDUCATION", "CONTACT"];

const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Yakana IT Solutions",
    period: "09/2025 – Present",
    location: "Melbourne, VIC",
    points: [
      "Design and build scalable Python data pipelines that move real time data across a live production platform serving customers daily",
      "Build RESTful API integrations with JSON payloads and secure authentication keeping data consistent between internal and external systems",
      "Developed a containerised Docker microservice architecture where each module deploys independently without disrupting live operations",
      "Implemented automated CI/CD pipelines in GitHub Actions on Linux cutting delivery cycles by 20%",
    ],
  },
  {
    role: "Research Assistant · 3D Segmentation",
    company: "Cisco x La Trobe Centre for AI and IoT",
    period: "03/2025 – 07/2025",
    location: "Melbourne, VIC",
    points: [
      "Engineered an end to end 3D segmentation pipeline integrating the Segment Anything Model with Gaussian Splatting on AWS EC2 and S3",
      "Lifted segmentation accuracy by 45% through preprocessing and inference stabilisation layers in PyTorch and TensorFlow",
      "Rebuilt the system after a critical data loss incident adding automated integrity checks that met enterprise compliance standards",
    ],
  },
  {
    role: "Supervisor",
    company: "Liquorland (Coles Group)",
    period: "11/2024 – Present",
    location: "Melbourne, VIC",
    points: [
      "Run the store as the responsible person on duty reconciling tills and preparing banking while holding accountability for security compliance and trade across the full shift",
      "Supervise and train a team allocating tasks across the shift and inducting new staff on procedure and compliance",
      "Manage stock end to end ordering against sales trends checking deliveries against invoices and running cycle counts and stocktake",
    ],
  },
  {
    role: "Web Developer",
    company: "Guthrie Jewellery",
    period: "10/2024 – 02/2025",
    location: "Melbourne, VIC",
    points: [
      "Maintained a production ecommerce platform holding reliability performance and secure customer transactions",
      "Managed backend operations spanning product data database updates and automated pricing workflows",
      "Remediated security vulnerabilities and resolved payment flow issues reducing platform downtime",
    ],
  },
  {
    role: "Project Administrator",
    company: "Codex.Rocks",
    period: "06/2024 – 02/2025",
    location: "Melbourne, VIC",
    points: [
      "Delivered technical support across hardware and software systems restoring productivity and minimising downtime",
      "Maintained records of IT assets software licences and access controls supporting compliance",
      "Identified and mitigated cybersecurity risks contributing to safer digital environments",
    ],
  },
];

const PROJECTS = [
  {
    name: "Care Connect",
    tagline: "Telehealth Consultation Platform",
    stack: "TypeScript · React 18 · Supabase · PostgreSQL · Playwright",
    period: "12/2024 – 03/2026",
    link: "https://www.healthcarebridge.org",
    points: [
      "Three role application spanning 16 pages and 19 routes with patient doctor and admin dashboards gated by role guards",
      "Six table PostgreSQL schema with database level role checks backing full access control",
      "Complete authentication surface covering sign up login password reset and email confirmation",
    ],
  },
  {
    name: "SegServe",
    tagline: "Image and Video Segmentation Service",
    stack: "Python · FastAPI · PyTorch · Segment Anything Model · Docker",
    period: "01/2026 – 02/2026",
    link: "https://github.com/Zoro7781/ml-segmentation-pipeline",
    points: [
      "FastAPI service returning binary PNG masks from bounding box prompts using a SAM ViT B checkpoint",
      "Video endpoint running inference across 60 frames with smoothing that eliminates mask flicker",
      "Automated GitHub Actions workflows for ruff linting pytest and image builds to GitHub Container Registry",
    ],
  },
  {
    name: "Multi Sector AI Platform",
    tagline: "Healthcare and Education AI Backend",
    stack: "Python · FastAPI · Hugging Face · React · Terraform",
    period: "04/2026 – 05/2026",
    link: "https://github.com/Zoro7781/AI-Ecosystem",
    points: [
      "Versioned FastAPI backend with task adapters for classification generation and prediction behind a shared model registry",
      "Compliance controls mapped to HIPAA and GDPR covering encryption data isolation and consent workflows",
      "Fail fast secret validation so the service refuses to start with a missing API key",
    ],
  },
  {
    name: "AetherLink OS",
    tagline: "Local AI Command Hub",
    stack: "Python · Streamlit · LangChain · Ollama · Mistral",
    period: "11/2025 – 01/2026",
    link: "https://github.com/Zoro7781/AetherLink---OS",
    points: [
      "Converts plain English instructions into runnable Python through a locally hosted LLM at zero API cost",
      "Dry run toggle executes generated code only inside an isolated temporary directory treating model output as untrusted",
      "Every prompt and generated snippet logged to timestamped files making runs fully auditable",
    ],
  },
  {
    name: "Parking Monitor System",
    tagline: "Peer Reviewed IoT Research Publication",
    stack: "Arduino UNO · ATmega328P · IR Sensors · Python",
    period: "01/2022 – 06/2022",
    link: "https://ijrar.org/viewfull.php?&p_id=IJRAR22B3598",
    points: [
      "Built and deployed a three node sensor system on an Arduino UNO wiring IR detection modules and driving a 16x2 display for live status",
      "Diagnosed sensor false triggering and wiring faults on site tuning detection behaviour until slot status reported reliably",
      "Integrated the hardware layer with a Python application so users could view and reserve availability in real time",
      "Authored the resulting peer reviewed paper documenting system architecture implementation and test results",
    ],
  },
];

const SKILLS: Record<string, string[]> = {
  "AI & ML": ["PyTorch", "TensorFlow", "OpenCV", "SAM", "Gaussian Splatting", "LangChain", "RAG", "Hugging Face", "Ollama"],
  "Languages": ["Python", "SQL", "TypeScript", "JavaScript", "Bash"],
  "Databases": ["PostgreSQL", "Supabase", "MongoDB", "Vector Databases"],
  "Data Engineering": ["Data Pipelines", "ETL", "Data Modelling", "Data Warehousing", "Data Quality Controls"],
  "APIs & Integration": ["REST APIs", "FastAPI", "Pydantic", "Microservices", "Rate Limiting"],
  "Cloud & DevOps": ["AWS (EC2, S3)", "Docker", "GitHub Actions", "CI/CD", "Linux (Ubuntu)", "Nginx"],
  "Hardware & IoT": ["Arduino UNO (ATmega328P)", "IR Sensor Modules", "Breadboard Prototyping", "Display Peripherals", "On-site Assembly & Commissioning"],
  "Testing & Frameworks": ["pytest", "Vitest", "Playwright", "React", "Next.js", "Tailwind CSS", "Terraform", "Power BI"],
};

const EDUCATION = [
  { degree: "Master of Artificial Intelligence · NLP Specialisation", school: "La Trobe University", period: "07/2023 – 06/2025", location: "Melbourne, VIC" },
  { degree: "Bachelor of Technology · Computer Science Engineering", school: "ACE Engineering College", period: "07/2018 – 08/2022", location: "Hyderabad, India" },
];

const CERTIFICATES = [
  "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
  "AWS Essential Training for Developers",
  "Deloitte Australia Technology Job Simulation",
  "Cybersecurity Awareness: Phishing Attacks",
];

const STATS = [
  { value: "1", label: "Peer Reviewed Publication" },
  { value: "45%", label: "Accuracy Lifted at Cisco" },
  { value: "20%", label: "Faster Delivery Cycles" },
  { value: "5+", label: "Production Projects" },
];

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4 mb-10">
      <span className="font-pixel text-white/40 text-lg">{index}</span>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      <span className="font-pixel text-xl text-white/50 hidden md:inline">{title.toUpperCase()}</span>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <span className="font-pixel text-2xl tracking-widest">NC.</span>
          <button className="p-2 hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          {NAV_LINKS.map((l, i) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-widest hover:text-white/60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(1rem)",
                transitionDelay: menuOpen ? `${100 + i * 60}ms` : "0ms",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260725_114042_d2ed2a89-f2fa-449b-9609-da456344257b.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover lg:scale-[1.2]"
        />

        <div className="relative z-10 flex h-full flex-col px-5 sm:px-6 md:px-10 lg:px-14">
          <nav className="flex items-center justify-between py-6">
            <a href="#" className="font-pixel text-2xl tracking-widest">NC.</a>
            <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
              {NAV_LINKS.map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="hover:opacity-70 transition-opacity">
                  {l}
                </a>
              ))}
            </div>
            <button className="md:hidden p-2 hover:opacity-70 transition-opacity" onClick={() => setMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </nav>

          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div>
              <h2 className="text-lg md:text-xl tracking-wide leading-tight">
                NOEL
                <br />
                <span className="font-pixel text-2xl md:text-3xl">CHATNALLIKAR</span>
              </h2>
              <div className="text-[10px] text-white/50 mt-3">*</div>
              <p className="font-pixel mt-1 text-xs text-white/60 leading-relaxed">
                AI Systems Engineer
                <br />
                building intelligent
                <br />
                systems that ship to
                <br />
                production and scale
              </p>
            </div>

            <div className="text-right lg:text-left">
              <h2 className="text-lg md:text-xl tracking-wide leading-tight">
                AI SYSTEMS
                <br />
                <span className="font-pixel text-2xl md:text-3xl">ENGINEER</span>
              </h2>
            </div>

            <div>
              <div className="text-base tracking-widest text-white/50 uppercase mb-3 font-pixel">What I Do</div>
              <p className="text-sm text-white/90 leading-relaxed max-w-[220px]">
                From machine learning models and computer vision pipelines to the data infrastructure and strategy behind them
              </p>
            </div>

            <div className="text-right lg:text-left">
              <div className="text-base tracking-widest text-white/50 uppercase mb-3 font-pixel">Focus Areas</div>
              <ul className="text-sm text-white/90 leading-relaxed space-y-0.5">
                <li>AI / Machine Learning</li>
                <li>Computer Vision</li>
                <li>Data Engineering</li>
                <li>Business Analysis</li>
                <li>Technology Consulting</li>
              </ul>
            </div>
          </div>

          <div className="flex-1" />

          <div className="pb-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-end">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-wide uppercase font-normal"
                style={{ lineHeight: 0.72 }}
              >
                I TURN AI
                <br />
                <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline">RESEARCH</span> INTO
                <br />
                SYSTEMS THAT
                <br />
                <span className="font-pixel font-normal text-[1.25em] inline-block leading-none align-baseline">ACTUALLY SHIP</span>
              </h1>

              <div className="flex flex-col gap-4 sm:gap-6 justify-end">
                <a
                  href="#projects"
                  className="self-start flex items-center gap-3 border border-white/30 px-6 py-3 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <Play size={14} fill="white" />
                  <span className="text-sm tracking-wider">VIEW PROJECTS</span>
                </a>

                <div className="self-start lg:self-end flex flex-wrap items-stretch gap-2 sm:gap-3 text-sm text-white/80">
                  <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                    <span className="font-bold text-sm sm:text-base tracking-tight">AI / CV</span>
                    <span className="text-white/50 text-xs">SAM</span>
                  </div>
                  <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                    <span className="font-bold text-lg sm:text-xl">AWS</span>
                    <span className="text-white/50 text-xs">EC2/S3</span>
                  </div>
                  <div className="bg-[#0B0B0B] px-3 sm:px-4 py-2 flex items-center gap-2">
                    <span className="font-bold text-[10px] sm:text-xs tracking-tight">Docker CI/CD</span>
                    <span className="text-white/50 text-xs">GHCR</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pt-4">
              <div className="text-xs text-white/60">
                Open to AI / ML · Data · Business Analysis &amp; Consulting roles.{" "}
                <a href="mailto:elnoel601@gmail.com" className="text-red-500 hover:text-red-400 transition-colors">
                  Schedule a call
                </a>
              </div>
              <div className="text-xs text-white/60 sm:text-right">
                Melbourne &bull; AI Systems Engineer &bull; Available now
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 sm:px-6 md:px-10 lg:px-14 py-20 md:py-28 border-t border-white/10">
        <SectionTitle index="01" title="About" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            I am an engineer who lives where <span className="font-pixel text-white">AI research</span> meets{" "}
            <span className="font-pixel text-white">production reality</span>. I build data pipelines machine
            learning systems and computer vision services that run live and serve real customers every day.
          </p>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
            My work spans the full journey. From publishing peer reviewed IoT research and lifting segmentation
            accuracy at a Cisco research centre to containerising services in{" "}
            <span className="font-pixel text-white">Docker</span> and automating releases with{" "}
            <span className="font-pixel text-white">GitHub Actions</span>. I also speak business. As a
            supervisor at Coles Group and a consultant minded engineer I translate technical depth into
            decisions stakeholders understand.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#0B0B0B] p-6">
              <div className="text-3xl md:text-4xl font-bold tracking-tight">{s.value}</div>
              <div className="text-xs text-white/50 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-5 sm:px-6 md:px-10 lg:px-14 py-20 md:py-28 border-t border-white/10">
        <SectionTitle index="02" title="Experience" />
        <div className="flex flex-col">
          {EXPERIENCE.map((job) => (
            <div key={job.company} className="py-8 border-b border-white/10 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-10">
              <div>
                <div className="font-pixel text-lg text-white/50">{job.period}</div>
                <div className="text-xs text-white/50 mt-1 flex items-center gap-1">
                  <MapPin size={12} /> {job.location}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <div className="text-white/60 text-sm mt-1">{job.company}</div>
              </div>
              <ul className="text-sm text-white/80 leading-relaxed space-y-2">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-white/40">→</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-5 sm:px-6 md:px-10 lg:px-14 py-20 md:py-28 border-t border-white/10">
        <SectionTitle index="03" title="Projects" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="bg-[#0B0B0B] p-6 sm:p-8 flex flex-col hover:bg-[#111] transition-colors group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight group-hover:text-white">{p.name}</h3>
                  <div className="text-white/60 text-sm mt-1">{p.tagline}</div>
                </div>
                <span className="flex items-center gap-1 text-white/40 group-hover:text-white transition-colors">
                  <ExternalLink size={14} />
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <div className="font-pixel text-xs text-white/50 mt-2">{p.period}</div>
              <div className="text-xs text-white/50 mt-4 leading-relaxed">{p.stack}</div>
              <ul className="text-sm text-white/80 leading-relaxed space-y-2 mt-5">
                {p.points.map((pt, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-white/40">→</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-xs tracking-widest text-red-500 group-hover:text-red-400 transition-colors">
                VIEW PROJECT →
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-5 sm:px-6 md:px-10 lg:px-14 py-20 md:py-28 border-t border-white/10">
        <SectionTitle index="04" title="Skills" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(SKILLS).map(([cat, items]) => (
            <div key={cat}>
              <div className="font-pixel text-base tracking-widest text-white/50 uppercase mb-3">{cat}</div>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-xs text-white/80 bg-white/5 border border-white/10 px-3 py-1.5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="font-pixel text-base tracking-widest text-white/50 uppercase mb-4">Certificates</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CERTIFICATES.map((c) => (
              <div key={c} className="bg-[#0B0B0B] px-4 py-3 text-sm text-white/80 flex items-center gap-3">
                <span className="text-white/40">✓</span> {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="px-5 sm:px-6 md:px-10 lg:px-14 py-20 md:py-28 border-t border-white/10">
        <SectionTitle index="05" title="Education" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {EDUCATION.map((e) => (
            <div key={e.degree} className="bg-[#0B0B0B] p-6 sm:p-8">
              <div className="font-pixel text-sm text-white/50">{e.period}</div>
              <h3 className="text-xl font-semibold mt-3">{e.degree}</h3>
              <div className="text-white/60 text-sm mt-2 flex items-center gap-2">
                {e.school} <span className="text-white/30">•</span> {e.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-5 sm:px-6 md:px-10 lg:px-14 py-20 md:py-28 border-t border-white/10">
        <SectionTitle index="06" title="Contact" />
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] uppercase font-normal tracking-wide"
          style={{ lineHeight: 0.85 }}
        >
          LETS BUILD
          <br />
          <span className="font-pixel text-[1.25em]">SOMETHING</span> REAL
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="mailto:elnoel601@gmail.com" className="bg-[#0B0B0B] p-6 hover:bg-[#111] transition-colors group">
            <Mail size={18} className="text-white/50" />
            <div className="text-xs text-white/50 mt-4">Email</div>
            <div className="text-sm text-white/90 mt-1 break-all group-hover:text-white">elnoel601@gmail.com</div>
          </a>
          <a href="tel:+61423609337" className="bg-[#0B0B0B] p-6 hover:bg-[#111] transition-colors group">
            <Phone size={18} className="text-white/50" />
            <div className="text-xs text-white/50 mt-4">Phone</div>
            <div className="text-sm text-white/90 mt-1 group-hover:text-white">+61 423 609 337</div>
          </a>
          <div className="bg-[#0B0B0B] p-6">
            <MapPin size={18} className="text-white/50" />
            <div className="text-xs text-white/50 mt-4">Location</div>
            <div className="text-sm text-white/90 mt-1">Melbourne, Victoria, Australia</div>
          </div>
          <div className="bg-[#0B0B0B] p-6 flex flex-col gap-3">
            <a href="https://github.com/Zoro7781" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
              <Globe size={16} /> github.com/Zoro7781
            </a>
            <a href="https://linkedin.com/in/noelpc" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
              <Globe size={16} /> linkedin.com/in/noelpc
            </a>
            <a href="https://noel-com.vercel.app" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
              <Globe size={16} /> noel-com.vercel.app
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 sm:px-6 md:px-10 lg:px-14 py-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2">
        <div className="text-xs text-white/60">
          © {new Date().getFullYear()} Noel Chatnallikar — AI Systems Engineer
        </div>
        <div className="text-xs text-white/60 sm:text-right font-pixel">MELBOURNE • AUSTRALIA</div>
      </footer>
    </div>
  );
}
