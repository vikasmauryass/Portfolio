import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  ChevronRight,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const navItems = [
  ["about", "About"],
  ["experience", "Experience"],
  ["work", "Work"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

const experiences = [
  {
    period: "Jan 2025 — Present",
    company: "Fi Ellements",
    role: "Software Developer",
    summary:
      "Building and maintaining a multi-role car booking management platform with complete presales and postsales workflows.",
    points: [
      "Role-based dashboards for admin, sales, operations, and other teams",
      "REST API integration and reliable dynamic data rendering",
      "Cross-team API design and application performance improvements",
    ],
    accent: "violet",
  },
  {
    period: "Sep 2024 — Dec 2024",
    company: "Careernova Technology",
    role: "Frontend Developer",
    summary:
      "Developed responsive interfaces for an education management platform using React.js and Tailwind CSS.",
    points: [
      "Student data, video lecture, and teacher administration components",
      "Authentication, project listings, and contribution workflows",
      "Clear, responsive experiences for administrators and educators",
    ],
    accent: "cyan",
  },
  {
    period: "Oct 2023 — May 2024",
    company: "Rdigi Works",
    role: "Full Stack Developer",
    summary:
      "Created a responsive children’s admissions and activities portal with streamlined enrollment experiences.",
    points: [
      "Accessible admission forms and dynamic brochure displays",
      "Interactive program browsing and class schedules",
      "Enrollment journeys designed to improve parent engagement",
    ],
    accent: "lime",
  },
];

const projects = [
  {
    number: "01",
    title: "Zedflow",
    label: "Business automation",
    description:
      "A modern workflow and business platform built with a scalable backend, responsive interface, and clean dashboard experience.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "REST APIs", "Responsive UI"],
    url: "https://zedflow.in",
    color: "project-violet",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "EduPulse",
    label: "EdTech",
    description:
      "An education management platform for handling academic workflows, administration, student data, and responsive learning interfaces.",
    tags: ["Vue.js", "PHP", "Laravel", "Tailwind CSS", "MySQL", "REST APIs", "Responsive UI"],
    url: "https://edupulse.fiellements.com/",
    color: "project-blue",
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "India's first phone-as-a-subscription service (BytePe)",
    label: "Consumer technology",
    description:
      "BytePe is a technology subscription platform that replaces traditional smartphone ownership and long-term EMIs with a flexible pay-for-what-you-use model.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Responsive Design", "Forms", "Libraries"],
    url: "https://www.bytepe.com/",
    color: "project-green",
    icon: Sparkles,
  },
];

const skillGroups = [
  {
    name: "Frontend",
    skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    name: "State & Architecture",
    skills: ["Redux Toolkit", "Context API", "React Hooks", "React Router", "RBAC"],
  },
  {
    name: "Backend & Data",
    skills: ["PHP", "Laravel", "REST APIs", "Eloquent ORM", "MySQL","Node.js", "MongoDB"],
  },
  {
    name: "Performance & Tools",
    skills: ["Code Splitting", "Memoization", "Lazy Loading", "Git", "Postman"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

function WaterBackground() {
  const rippleLayerRef = useRef(null);
  const lastRippleRef = useRef(0);

  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;
    let latestPointer = { x: 0.5, y: 0.5 };

    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scroll = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      root.style.setProperty("--scene-scroll", scroll.toFixed(4));
    };

    const requestSceneUpdate = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(() => {
        root.style.setProperty("--scene-x", latestPointer.x.toFixed(4));
        root.style.setProperty("--scene-y", latestPointer.y.toFixed(4));
        updateScroll();
        ticking = false;
      });
    };

    const updatePointer = (event) => {
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      const now = performance.now();

      latestPointer = { x, y };
      requestSceneUpdate();

      if (now - lastRippleRef.current <= 70) {
        return;
      }

      lastRippleRef.current = now;
      const rippleLayer = rippleLayerRef.current;

      if (!rippleLayer) {
        return;
      }

      const ripple = document.createElement("span");
      const size = 70 + Math.random() * 85;

      ripple.className = "cursor-ripple";
      ripple.style.setProperty("--ripple-x", `${event.clientX}px`);
      ripple.style.setProperty("--ripple-y", `${event.clientY}px`);
      ripple.style.setProperty("--ripple-size", `${size}px`);
      rippleLayer.appendChild(ripple);

      window.setTimeout(() => ripple.remove(), 950);
    };

    window.addEventListener("scroll", requestSceneUpdate, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener("scroll", requestSceneUpdate);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div className="water-scene" aria-hidden="true">
      <div className="water-orb water-orb-one" />
      <div className="water-orb water-orb-two" />
      <div className="water-surface" />
      <div className="water-current water-current-one" />
      <div className="water-current water-current-two" />
      <div className="water-caustics" />
      <div className="water-ripple-layer" ref={rippleLayerRef} />
      <div className="noise" />
    </div>
  );
}

function WaterReflection({ text, align = "left" }) {
  return (
    <div className={`water-reflection ${align}`} aria-hidden="true">
      <span>{text}</span>
    </div>
  );
}

/* Legacy video/3D background removed from the active app.
function Background() {
  const mountRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const [status, setStatus] = useState("lite");
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    const root = mount?.parentElement;
    let cleanUpScene = () => {};
    let disposed = false;
    let idleId = 0;
    let timerId = 0;

    if (!mount || !root) {
      return undefined;
    }

    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scroll = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      scrollRef.current = scroll;
      root.style.setProperty("--scene-scroll", scroll.toFixed(4));
    };

    const updatePointer = (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      pointerRef.current.x = x;
      pointerRef.current.y = y;
      root.style.setProperty("--scene-x", x.toFixed(4));
      root.style.setProperty("--scene-y", y.toFixed(4));
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const forceFullScene =
      new URLSearchParams(window.location.search).get("scene") === "3d";
    const deviceMemory = navigator.deviceMemory ?? 0;
    const cpuCores = navigator.hardwareConcurrency ?? 0;
    const canAutoRunFullScene =
      !prefersReducedMotion &&
      window.innerWidth >= 1440 &&
      deviceMemory >= 8 &&
      cpuCores >= 8;

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", updatePointer, { passive: true });
    updateScroll();

    if (!forceFullScene && !canAutoRunFullScene) {
      setStatus("lite");

      return () => {
        window.removeEventListener("scroll", updateScroll);
        window.removeEventListener("pointermove", updatePointer);
      };
    }

    setStatus("loading");

    const startScene = async () => {
      const [THREE, { GLTFLoader }] = await Promise.all([
        Promise.resolve(null),
        Promise.resolve({ GLTFLoader: null }),
      ]);

      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        44,
        window.innerWidth / window.innerHeight,
        0.1,
        120,
      );
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
      const loader = new GLTFLoader();
      const clock = new THREE.Clock();
      const world = new THREE.Group();

      let frameId = 0;
      let lastFrame = 0;
      let model = null;

      scene.fog = new THREE.FogExp2(0x07110d, 0.055);
      scene.add(world);

      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(1);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.className = "forest-canvas";
      renderer.domElement.style.pointerEvents = "none";
      mount.appendChild(renderer.domElement);

      camera.position.set(0, 1.6, 8.2);

      scene.add(new THREE.HemisphereLight(0xd8fff0, 0x102314, 2.2));

      const sunLight = new THREE.DirectionalLight(0xfff1c2, 4.1);
      sunLight.position.set(-4.5, 8, 4.5);
      scene.add(sunLight);

      const cyanGlow = new THREE.PointLight(0x67e8f9, 1.9, 24);
      cyanGlow.position.set(3.5, 1.8, 2);
      scene.add(cyanGlow);

      const emberGeometry = new THREE.BufferGeometry();
      const emberCount = 48;
      const emberPositions = new Float32Array(emberCount * 3);

      for (let index = 0; index < emberCount; index += 1) {
        emberPositions[index * 3] = (Math.random() - 0.5) * 18;
        emberPositions[index * 3 + 1] = Math.random() * 5.8 - 1.1;
        emberPositions[index * 3 + 2] = Math.random() * -18 + 7;
      }

      emberGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(emberPositions, 3),
      );

      const embers = new THREE.Points(
        emberGeometry,
        new THREE.PointsMaterial({
          color: 0xbef264,
          size: 0.032,
          transparent: true,
          opacity: 0.42,
          depthWrite: false,
        }),
      );
      scene.add(embers);

      const resize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight, false);
      };

      const tuneMaterial = (material) => {
        if (!material) return;

        material.side = THREE.FrontSide;

        if ("roughness" in material) {
          material.roughness = Math.max(material.roughness ?? 0.58, 0.62);
        }

        if ("metalness" in material) {
          material.metalness = Math.min(material.metalness ?? 0, 0.08);
        }

        material.needsUpdate = true;
      };

      const disposeModel = () => {
        model?.traverse((child) => {
          if (!child.isMesh) return;

          child.geometry?.dispose();

          if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose?.());
          } else {
            child.material?.dispose?.();
          }
        });
      };

      const animate = (timestamp = 0) => {
        if (disposed) return;

        frameId = window.requestAnimationFrame(animate);

        if (timestamp - lastFrame < 1000 / 24) {
          return;
        }

        lastFrame = timestamp;

        const elapsed = clock.getElapsedTime();
        const scroll = scrollRef.current;
        const pointer = pointerRef.current;
        const scrollWave = Math.sin(scroll * Math.PI);

        if (model) {
          world.rotation.y +=
            (pointer.x * 0.18 + scrollWave * 0.08 - world.rotation.y) * 0.05;
          world.rotation.x +=
            (-pointer.y * 0.055 - world.rotation.x) * 0.05;
          world.position.z = scroll * 6.8;
          world.position.x = pointer.x * -0.9;
          world.position.y =
            -1.15 + Math.sin(elapsed * 0.55) * 0.04 - scrollWave * 0.25;
        }

        camera.position.x +=
          (pointer.x * 1.05 + Math.sin(elapsed * 0.22) * 0.1 - camera.position.x) *
          0.045;
        camera.position.y +=
          (1.55 - pointer.y * 0.42 + scroll * 1.1 - camera.position.y) * 0.045;
        camera.position.z +=
          (8.2 - scroll * 4.4 + Math.cos(elapsed * 0.18) * 0.08 -
            camera.position.z) *
          0.045;
        camera.lookAt(pointer.x * 1.4, 0.42 + scroll * 0.8, -1.8 - scroll * 4);

        embers.rotation.y = elapsed * 0.025 + pointer.x * 0.2;
        embers.position.z = scroll * 3.5;
        embers.position.y = Math.sin(elapsed * 0.35) * 0.08;

        renderer.render(scene, camera);
      };

      resize();
      updateScroll();

      loader.load(
        "/assets/forest-road.glb",
        (gltf) => {
          if (disposed) return;

          model = gltf.scene;

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDimension = Math.max(size.x, size.y, size.z) || 1;

          const modelScale = 10.8 / maxDimension;

          model.scale.setScalar(modelScale);
          model.position.set(
            -center.x * modelScale,
            -center.y * modelScale,
            -center.z * modelScale,
          );
          model.rotation.set(0, -0.18, 0);

          model.traverse((child) => {
            if (!child.isMesh) return;

            child.frustumCulled = true;

            if (Array.isArray(child.material)) {
              child.material.forEach(tuneMaterial);
            } else {
              tuneMaterial(child.material);
            }
          });

          world.add(model);
          setStatus("ready");
          animate();
        },
        undefined,
        () => {
          if (!disposed) {
            setStatus("error");
          }
        },
      );

      window.addEventListener("resize", resize);

      cleanUpScene = () => {
        window.cancelAnimationFrame(frameId);
        window.removeEventListener("resize", resize);
        disposeModel();
        emberGeometry.dispose();
        embers.material.dispose();
        renderer.dispose();

        if (renderer.domElement.parentNode === mount) {
          mount.removeChild(renderer.domElement);
        }
      };
    };

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(() => startScene().catch(() => {
        if (!disposed) {
          setStatus("error");
        }
      }), { timeout: 1800 });
    } else {
      timerId = window.setTimeout(() => startScene().catch(() => {
        if (!disposed) {
          setStatus("error");
        }
      }), 900);
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cleanUpScene();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      disposed = true;
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", updatePointer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }

      if (timerId) {
        window.clearTimeout(timerId);
      }

      cleanUpScene();
    };
  }, []);

  return (
    <div className={`forest-scene forest-scene-${status}`} aria-hidden="true">
      <video
        className={`site-background-video ${videoReady ? "is-ready" : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setVideoReady(true)}
      >
        <source src="/assets/site-background.mp4" type="video/mp4" />
      </video>
      <div className="forest-scene-stage" ref={mountRef} />
      <div className="forest-depth forest-depth-one" />
      <div className="forest-depth forest-depth-two" />
      <div className="forest-gradient" />
      <div className="forest-vignette" />
      <div className="forest-grid" />
      <div className="noise" />
      {status === "loading" && (
        <span className="forest-loading">Loading 3D forest</span>
      )}
    </div>
  );
}

*/
function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a className="logo" href="#top" aria-label="Vikas Maurya home">
        <span>V</span>M
      </a>

      <nav className="desktop-nav" aria-label="Main navigation">
        {navItems.map(([href, label]) => (
          <a key={href} href={`#${href}`}>
            {label}
          </a>
        ))}
      </nav>

      <a className="header-cta" href="mailto:vikasmaurya5259@gmail.com">
        Let’s talk <ArrowRight size={15} />
      </a>

      <button
        className="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            aria-label="Mobile navigation"
          >
            {navItems.map(([href, label]) => (
              <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>
                {label}
                <ChevronRight size={18} />
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <motion.div
      className="section-title"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <p className="eyebrow">
        <span />
        {eyebrow}
      </p>
      <h2>{title}</h2>
      <WaterReflection text={title} />
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  );
}

function Hero() {
  const roles = useMemo(
    () => ["React Developer", "Frontend Engineer", "UI Problem Solver"],
    [],
  );
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setRoleIndex((index) => (index + 1) % roles.length),
      2800,
    );
    return () => window.clearInterval(timer);
  }, [roles]);

  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <motion.div
          className="availability"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="pulse-dot" />
          Open to meaningful React opportunities
        </motion.div>

        <motion.p
          className="hero-kicker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Hello, I’m Vikas Maurya
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          I build digital products
          <span className="outline-text">that move business forward.</span>
        </motion.h1>
        <WaterReflection text="React Developer" />

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          <div className="role-line">
            <Code2 size={20} />
            <AnimatePresence mode="wait">
              <motion.span
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <p>
            React.js developer with 2+ years of experience creating scalable,
            role-based applications and polished responsive interfaces.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDown size={17} />
            </a>
            <a
              className="button button-ghost"
              href="/assets/Vikas_Maurya_Resume.pdf"
              download
            >
              <Download size={17} /> Download résumé
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-stats glass-card"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <div>
          <strong>2+</strong>
          <span>Years building</span>
        </div>
        <div>
          <strong>03</strong>
          <span>Professional roles</span>
        </div>
        <div>
          <strong>7.85</strong>
          <span>Engineering CGPA</span>
        </div>
      </motion.div>

      <a className="scroll-cue" href="#about" aria-label="Scroll to about">
        <span>Scroll to discover</span>
        <span className="scroll-line" />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <SectionTitle eyebrow="01 / About" title="Code with intent." />

      <div className="about-grid">
        <motion.div
          className="about-statement"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p>
            I turn complex workflows into interfaces that feel{" "}
            <em>clear, fast, and natural.</em>
          </p>
        </motion.div>

        <motion.div
          className="about-copy"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <p>
            I’m a Mumbai-based React.js developer focused on scalable web
            products, clean UI, and performance. My work spans operational
            dashboards, education platforms, and customer-facing enrollment
            journeys.
          </p>
          <p>
            I’m at my best where product thinking meets implementation:
            translating real business rules into maintainable components,
            dependable API integrations, and responsive user experiences.
          </p>
          <div className="location">
            <MapPin size={17} />
            Mumbai, India
          </div>
        </motion.div>
      </div>

      <div className="skill-marquee" aria-label="Key technologies">
        <div className="marquee-track">
          {[
            "React.js",
            "JavaScript",
            "Redux Toolkit",
            "REST APIs",
            "Laravel",
            "Tailwind CSS",
            "React.js",
            "JavaScript",
            "Redux Toolkit",
            "REST APIs",
            "Laravel",
            "Tailwind CSS",
          ].map((skill, index) => (
            <span key={`${skill}-${index}`}>
              {skill} <Sparkles size={14} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section" id="experience">
      <SectionTitle
        eyebrow="02 / Experience"
        title="Built in the real world."
        copy="Professional experience creating products used by operational teams, administrators, educators, parents, and customers."
      />

      <div className="timeline">
        {experiences.map((experience, index) => (
          <motion.article
            className="timeline-item"
            key={experience.company}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <div className="timeline-meta">
              <span className={`timeline-dot ${experience.accent}`} />
              <p>{experience.period}</p>
            </div>
            <div className="timeline-role">
              <h3>{experience.role}</h3>
              <p>{experience.company}</p>
            </div>
            <div className="timeline-details">
              <p>{experience.summary}</p>
              <ul>
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section" id="work">
      <SectionTitle
        eyebrow="03 / Selected work"
        title="Products, not just pages."
        copy="A selection of business-focused products developed through my professional roles."
      />

      <div className="project-grid">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              className={`project-card ${project.color}`}
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <Icon size={22} />
              </div>
              <div className="project-visual">
                <div className="visual-window">
                  <div className="visual-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <div className="visual-body">
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <p className="project-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit website
                <ExternalLink size={14} />
              </a>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionTitle
        eyebrow="04 / Capabilities"
        title="My working toolkit."
        copy="A practical stack for shipping responsive interfaces, reliable integrations, and maintainable web products."
      />

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <motion.article
            className="skill-group glass-card"
            key={group.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <span className="skill-index">0{index + 1}</span>
            <h3>{group.name}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        className="education-panel"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <div className="education-heading">
          <GraduationCap />
          <div>
            <p className="eyebrow compact">Education</p>
            <h3>Strong foundations, continuously evolving.</h3>
          </div>
        </div>
        <div className="education-item">
          <div>
            <strong>B.E. in Information Technology</strong>
            <span>Mumbai University</span>
          </div>
          <div>
            <strong>7.85 CGPA</strong>
            <span>May 2023</span>
          </div>
        </div>
        <div className="education-item">
          <div>
            <strong>Diploma in Computer Science</strong>
            <span>Viva College of Engineering and Technology</span>
          </div>
          <div>
            <strong>89.18%</strong>
            <span>May 2020</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="eyebrow">
          <span />
          05 / Contact
        </p>
        <h2>
          Have a product in mind?
          <span>Let’s build something useful.</span>
        </h2>
        <WaterReflection text="Let’s build something useful." />
        <p className="contact-copy">
          I’m interested in React and frontend opportunities where thoughtful
          engineering and good user experience matter.
        </p>
        <a className="contact-email" href="mailto:vikasmaurya5259@gmail.com">
          vikasmaurya5259@gmail.com
          <ArrowRight />
        </a>
      </motion.div>

      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/1vikasmaurya"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin size={18} />
          LinkedIn
          <ExternalLink size={14} />
        </a>
        <a href="tel:+919867388691">
          <Phone size={18} />
          +91 98673 88691
        </a>
        <a href="mailto:vikasmaurya5259@gmail.com">
          <Mail size={18} />
          Email
        </a>
        <a
          href="https://github.com/vikasmauryass"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={18} />
          GitHub
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <>
      <WaterBackground />
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <footer>
        <p>Designed & built with React by Vikas Maurya.</p>
        <a href="#top">Back to top ↑</a>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </>
  );
}

export default App;
