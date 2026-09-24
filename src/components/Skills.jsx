export default function Skills() {
  return (
    
<section className="skills-section reveal" id="skills">
        <p className="section-label">02 — SKILLS & TOOLS</p>
        <h2>My development toolkit.</h2>

        <div className="skills-grid">
         <article>
           <span>01</span>
           <h3>Frontend</h3>
           <p>HTML, CSS, JavaScript, React</p>
           <div className="skill-level">
             <span style={{ width: "85%" }}></span>
           </div>
         </article>
        
         <article>
           <span>02</span>
           <h3>Tools</h3>
           <p>Git, GitHub, VS Code, Vite, Figma</p>
           <div className="skill-level">
             <span style={{ width: "75%" }}></span>
           </div>
         </article>
        
         <article>
           <span>03</span>
           <h3>Currently Learning</h3>
           <p>APIs, Node.js, UI Design, Deployment</p>
           <div className="skill-level">
             <span style={{ width: "60%" }}></span>
           </div>
         </article>
        </div>
      </section>
  )
}