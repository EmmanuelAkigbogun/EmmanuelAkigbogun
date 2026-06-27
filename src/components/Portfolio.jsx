import React, { useState, useRef } from "react";
import "./css/Portfolio.css";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nameColor, setNameColor] = useState(null);
  const canvasRef = useRef(null);

  const profile = {
    name: "Emmanuel Akigbogun Ibukun",
    title: "Software Engineer & Creative Developer",
    location: "Ife, Nigeria",
    email: "emmanuelakigbogun@gmail.com",
    github: "https://github.com/EmmanuelAkigbogun",
    linkedin: "https://www.linkedin.com/in/emmanuel-akigbogun-1406a5224/",
    bio: "Self-taught software engineer with a deep love for mathematics, visual computing, and the art of problem-solving. I thrive at the intersection of code and creativity—from engineering vector math layouts to capturing raw detail as a biro artist.",
  };

  const projects = 
    [
       {
      title: "Luxerous Hairs",
      description:
        "A complete, highly responsive e-commerce platform selling beauty products. Built in tight collaboration with UI/UX design specifications.",
      tags: ["React.js", "JavaScript", "Responsive Design"],
      link: "https://luxerous-hairs.vercel.app/",
      image:
        "https://bagvusfmlvlenomoqzmn.supabase.co/storage/v1/object/public/uploads/53e465fb-f057-4f22-8001-8af029684332/7a12becb-1eb7-49d0-be4b-680deab93a56.png",
    },
    {
      title: "Figma-Inspired Design Tool",
      description:
        "A browser-based design application built on real HTML elements. Powered by advanced vector mathematics, geometric calculations, and custom layout logic.",
      tags: ["React", "SVG", "Vector Maths", "HTML5"],
      link: "https://akigbogun.vercel.app",
      image:
        "https://raw.githubusercontent.com/EmmanuelAkigbogun/Portfolio/refs/heads/main/src/assets/draw%20(4).png",
    },
    {
      title: "Interactive Chart Builder",
      description:
        "Dynamic tool rendering mathematical functions as visual graphs. Supports SVG and HTML Canvas rendering alongside custom base64 image processing.",
      tags: ["React", "HTML Canvas", "SVG", "Base64"],
      link: "https://chart-lilac.vercel.app",
      image:
        "https://raw.githubusercontent.com/EmmanuelAkigbogun/Portfolio/refs/heads/main/src/assets/draw%20(7).png",
    },
    {
      title: "Flooring Landing Page",
      description:
        "A pixel-perfect, interactive commercial landing page engineered for optimal technical execution and crisp visual aesthetics.",
      tags: ["JavaScript", "HTML5", "CSS3 Layouts"],
      link: "https://Flooring-nu.vercel.app",
      image:
        "https://raw.githubusercontent.com/EmmanuelAkigbogun/Portfolio/refs/heads/main/src/assets/draw%20(5).png",
    },
  ];

  const experiences = [
    {
      role: "Freelance Frontend Developer",
      company: "Claire & Samuel (UI/UX Designers)",
      period: "2022 – 2023",
      points: [
        "Translated complex Figma designs into semantic, fully responsive React interfaces.",
        "Bridged the technical gap between creative design visions and browser execution.",
      ],
    },
    {
      role: "Mathematics & Science Teacher",
      company: "Northfield School (Primary 4)",
      period: "2015 – 2016",
      points: [
        "Brought physics to life by building DIY speaker intercoms and electromagnetic displays.",
        "Utilized visual drawings to simplify complex mathematical and abstract formulations.",
      ],
    },
  ];

  const tools = [
    "JavaScript (ES6+)",
    "React.js",
    "Python",
    "C++",
    "SVG / Canvas",
    "Vector Maths",
    "Base64 Encoding",
    "Firebase",
  ];

  /* ── Pixel-sampling handlers ── */
  const handleAvatarLoad = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = e.target.naturalWidth;
    canvas.height = e.target.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(e.target, 0, 0);
  };

  const handleAvatarMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);
    try {
      const ctx = canvas.getContext("2d");
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      setNameColor(`rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`);
    } catch {
      /* CORS not ready yet — silently skip */
    }
  };

  const handleAvatarMouseLeave = () => setNameColor(null);

  return (
    <div className="portfolio-container">
      {/* HEADER / HERO */}
      <header className="portfolio-header">
        <div className="intro-split">
          {/* Left Text Block */}
          <div className="intro-text-block">
            <h1
              className="profile-name"
              style={{
                color: nameColor || "var(--text-main)",
                transition: nameColor ? "color 0.05s ease" : "color 0.5s ease",
              }}
            >
              {profile.name}
            </h1>
            <p className="profile-title">{profile.title}</p>
            <p className="profile-location">{profile.location}</p>
            <p className="profile-bio">{profile.bio}</p>
          </div>

          {/* Right Image Block */}
          <div className="profile-avatar-container">
            {/* Hidden canvas used only for pixel sampling */}
            <canvas ref={canvasRef} style={{ display: "none" }} />

            <img
              src="https://raw.githubusercontent.com/EmmanuelAkigbogun/Portfolio/refs/heads/main/src/assets/draw%20(9).jpg"
              alt={profile.name}
              className="profile-avatar"
              crossOrigin="anonymous"
              onLoad={handleAvatarLoad}
              onMouseMove={handleAvatarMouseMove}
              onMouseLeave={handleAvatarMouseLeave}
            />
          </div>
        </div>

        {/* Social Links Bar */}
        <div className="social-links">
          <a href={`mailto:${profile.email}`} className="social-link">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            </svg>
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
      </header>

      <main className="portfolio-main">
        {/* PROJECTS SECTION */}
        <section className="section-block">
          <h2 className="section-title">Selected Projects</h2>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                {proj.image && (
                  <div
                    className="project-image-container"
                    onClick={() => setSelectedImage(proj.image)}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="project-img"
                    />
                    <div className="image-overlay-hint">
                      Click to expand view
                    </div>
                  </div>
                )}
                <div className="card-header">
                  <h3 className="project-name">{proj.title}</h3>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-icon"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="link-icon"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                </div>
                <p className="project-desc">{proj.description}</p>
                <div className="tag-container">
                  {proj.tags.map((t, i) => (
                    <span key={i} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="section-block">
          <h2 className="section-title">Technical Capabilities</h2>
          <div className="skills-flex">
            {tools.map((tool, idx) => (
              <span key={idx} className="skill-badge">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* WORK EXPERIENCE */}
        <section className="section-block">
          <h2 className="section-title">Professional History</h2>
          <div className="experience-list">
            {experiences.map((exp, idx) => (
              <div key={idx} className="experience-item">
                <div className="exp-meta">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-company">{exp.company}</p>
                <ul className="exp-points">
                  {exp.points.map((p, i) => (
                    <li key={i} className="exp-point">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* TWO COLUMN BOTTOM SECTION */}
        <div className="bottom-grid">
          <section className="bottom-column">
            <h2 className="section-title-alt">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  marginRight: "6px",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Education
            </h2>
            <h3 className="edu-title">
              B.Eng Electrical & Electronics Engineering
            </h3>
            <p className="edu-school">Obafemi Awolowo University, Ile-Ife</p>
            <p className="edu-text">
              Completed foundation up to Part 3. Deep immersion in analytical
              math and hardware architectures before focusing completely on
              software systems.
            </p>
          </section>

          <section className="bottom-column">
            <h2 className="section-title-alt">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  marginRight: "6px",
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              </svg>
              Creative Mindset
            </h2>
            <div className="creative-text">
              <p>
                <strong>Biro Art:</strong> Skilled pen illustrator. This
                physical discipline heavily refines visual spacing, extreme
                structural precision, and clean aesthetics in frontend layout
                builds.
              </p>
              <p>
                <strong>Applied Mathematics:</strong> Highly passionate about
                calculating infinite series, working with complex matrices, and
                bringing algorithms alive via code syntax.
              </p>
            </div>
          </section>
        </div>
      </main>

      <footer className="portfolio-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Clean canvas build.
        </p>
      </footer>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <img
              src={selectedImage}
              alt="Expanded presentation view"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
