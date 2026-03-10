import './style.css'

document.querySelector('#app').innerHTML = `
  <header id="navbar">
    <div class="container nav-container">
      <a href="#" class="logo flex items-center gap-sm">
        <img src="/Edwin-silver-badge.png" alt="Logo">
        <div style="line-height: 1.2;">
          <div style="font-weight: 700; font-size: 1rem; color: var(--clr-primary);">Local SEO Expert</div>
          <div style="font-weight: 500; font-size: 0.75rem; color: var(--clr-text-muted);">Google Business Profile Product Expert</div>
        </div>
      </a>
      <nav class="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a href="#contact" class="btn btn-primary" style="padding: 0.5rem 1rem;">Get In Touch</a>
      </nav>
    </div>
  </header>

  <main>
    <!-- Hero Section -->
    <section class="hero bg-light">
      <div class="hero-bg-accent"></div>
      <div class="container grid grid-cols-2 items-center gap-xl">
        <div class="hero-content flex flex-col gap-lg items-start">
          <div class="badge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="text-primary" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
            Google Product Expert
          </div>
          <h1 class="heading-xl">
            Secure Your Business Profile Against <span class="text-gradient">Suspensions</span>
          </h1>
          <p class="text-lg text-muted">
            As a Google Business Product Expert, specialising in Google Business Profiles since 2020. I specialize in reinstatements and Local SEO. Pay only after your suspended profile is successfully reinstated.
          </p>
          <div class="flex items-center gap-md" style="flex-wrap: wrap; margin-top: 1rem;">
            <a href="#contact" class="btn btn-primary">Restore My Profile</a>
            <a href="#services" class="btn btn-secondary">Explore Services</a>
          </div>
          <div class="flex items-center gap-md" style="margin-top: 1rem; padding-top: 2rem; border-top: 1px solid var(--clr-border); width: 100%;">
             <div class="flex items-center">
                <!-- Stars -->
                <svg width="20" height="20" fill="#E9B23E" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg width="20" height="20" fill="#E9B23E" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg width="20" height="20" fill="#E9B23E" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg width="20" height="20" fill="#E9B23E" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg width="20" height="20" fill="#E9B23E" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
             </div>
            <span class="text-sm font-medium">Trusted by 500+ businesses since 2016</span>
          </div>
        </div>
        <div class="hero-image-wrapper">
          <img src="/PHOTO-2026-03-06-15-44-32.jpg.jpeg" alt="Google Expert" class="hero-image">
          <div class="floating-badge">
             <img src="/PHOTO-2026-03-06-18-26-16.jpg.jpeg" alt="Expert Icon" style="width: 40px; border-radius: 4px;">
             <div>
               <div style="font-weight: 700; font-size: 1.125rem;">100%</div>
               <div class="text-xs text-muted">Success Rate</div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Services Section -->
    <section id="services" class="section bg-white">
      <div class="container flex flex-col items-center gap-xxl">
        <div class="text-center" style="max-width: 600px;">
          <h2 class="heading-lg">Specialized <span class="text-gradient">Local SEO</span> Services</h2>
          <p class="text-lg text-muted mt-4">We don't just offer services; we offer specialized expertise accumulated over years of deep-diving into Google's local search algorithms.</p>
        </div>
        
        <!-- Service 1: Consulting -->
        <div class="service-block grid grid-cols-2 gap-xl">
           <div class="flex flex-col gap-lg justify-center">
              <div class="badge w-max">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                 Expert Guidance
              </div>
              <h3 class="heading-md">Google Business Profile Consulting</h3>
              <p class="text-muted text-lg">If you are a business owner trying to manage your own profile or an agency seeking to understand the business profile nuances and its issues, I can be your troubleshooting Guru.</p>
              <ul class="check-list">
                 <li>Transparent and one-on-one consulting sessions.</li>
                 <li>Gain in-depth, practical knowledge to optimize effectively.</li>
                 <li>Over a decade of core experience in handling GBP issues.</li>
              </ul>
              <a href="#contact" class="btn btn-primary" style="align-self: flex-start; margin-top: 1rem;">Book Consultation Now</a>
           </div>
           <div>
              <div style="border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: var(--shadow-xl); border: 1px solid var(--clr-border);">
                 <img src="/training-illustration.png" alt="Consulting Image" style="width: 100%; height: auto; display: block; aspect-ratio: 4/3; object-fit: cover;">
              </div>
           </div>
        </div>



        <!-- Service 2: Training -->
        <div class="service-block grid grid-cols-2 gap-xl">
           <div>
              <div style="border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: var(--shadow-xl); border: 1px solid var(--clr-border);">
                 <img src="/consulting-illustration.png" alt="Training Image" style="width: 100%; height: auto; display: block; aspect-ratio: 4/3; object-fit: cover;">
              </div>
           </div>
           <div class="flex flex-col gap-lg justify-center">
              <div class="badge w-max" style="background-color: rgba(31, 41, 55, 0.1); color: var(--clr-dark);">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                 Skill Building
              </div>
              <h3 class="heading-md">Local SEO Training</h3>
              <p class="text-muted text-lg">Boost your skills and upgrade your career by learning Local SEO from the experts. I impart valuable insights and perspectives throughout the course.</p>
              <ul class="check-list">
                 <li>Engage in practical tasks and tests to master concepts.</li>
                 <li>Lifetime membership in our exclusive community of professionals.</li>
                 <li>Ongoing support and regular updates on local SEO strategies.</li>
              </ul>
              <a href="#contact" class="btn btn-primary" style="align-self: flex-start; margin-top: 1rem;">Enroll in Training</a>
           </div>
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="section" style="background: linear-gradient(135deg, #1E40AF 0%, #1A56DB 50%, #3F83F8 100%); color: white; position: relative; overflow: hidden;">
      <div style="position: absolute; top: -50%; right: -20%; width: 600px; height: 600px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>
      <div style="position: absolute; bottom: -30%; left: -10%; width: 400px; height: 400px; background: rgba(255,255,255,0.03); border-radius: 50%;"></div>
      <div class="container" style="position: relative; z-index: 1;">
        <div style="display: flex; flex-direction: column; align-items: center; text-align: center; max-width: 800px; margin: 0 auto; gap: 2rem;">
          <img src="/PHOTO-2026-03-06-15-44-32.jpg.jpeg" alt="Edwin Chong" style="width: 140px; height: 140px; border-radius: 50%; object-fit: cover; border: 4px solid rgba(255,255,255,0.3); box-shadow: 0 20px 40px rgba(0,0,0,0.3);">
          <div>
            <h2 class="heading-lg" style="color: white; margin-bottom: 0.5rem;">Hi, I'm Edwin Chong</h2>
            <p style="color: rgba(255,255,255,0.7); font-size: 1.125rem;">Local SEO Expert &amp; Google Product Expert</p>
          </div>
          <p style="color: rgba(255,255,255,0.85); font-size: 1.125rem; line-height: 1.8;">Based in Shah Alam, Selangor, Malaysia, I help businesses improve their visibility on Google Search and Google Maps through effective Local SEO strategies. I focus on optimizing Google Business Profile listings to help businesses attract more local customers and strengthen their digital presence.</p>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; width: 100%; margin: 1rem 0; padding: 2rem 0; border-top: 1px solid rgba(255,255,255,0.15); border-bottom: 1px solid rgba(255,255,255,0.15);">
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--clr-secondary);">1000+</div>
              <div style="font-size: 0.875rem; color: rgba(255,255,255,0.6);">Businesses Helped</div>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--clr-secondary);">5+</div>
              <div style="font-size: 0.875rem; color: rgba(255,255,255,0.6);">Years Experience</div>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; color: var(--clr-secondary);">✓</div>
              <div style="font-size: 0.875rem; color: rgba(255,255,255,0.6);">Google Product Expert</div>
            </div>
          </div>
          <p style="color: rgba(255,255,255,0.8); line-height: 1.8;">My expertise includes profile setup and optimization, suspension troubleshooting and recovery, local ranking strategies, review management, and aligning websites with local search signals. As an active contributor in the Google Product Experts Program, I earned the Product Expert badge by helping 1000+ businesses and marketers worldwide resolve complex listing issues.</p>
          <p style="color: rgba(255,255,255,0.8); line-height: 1.8;">I also provide Local SEO and Google Business Profile training for businesses, organizations, corporate entities, and professionals. Organizations interested in Local SEO training are welcome to contact me for workshops or professional training sessions.</p>
          <a href="#contact" class="btn" style="background: white; color: var(--clr-primary); font-weight: 700; margin-top: 1rem; padding: 1rem 2rem;">Get In Touch</a>
        </div>
      </div>
    </section>

    <!-- GBP Insurance Section -->
    <section class="section bg-white" style="position: relative;">
      <div class="container">
        <div style="background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A 100%); border-radius: var(--border-radius-lg); padding: 4rem; position: relative; overflow: hidden; border: 1px solid rgba(233, 178, 62, 0.3);">
          <div style="position: absolute; top: -40px; right: -40px; width: 200px; height: 200px; background: rgba(233, 178, 62, 0.15); border-radius: 50%;"></div>
          <div style="position: absolute; bottom: -60px; left: -60px; width: 250px; height: 250px; background: rgba(233, 178, 62, 0.1); border-radius: 50%;"></div>
          <div class="flex flex-col gap-lg" style="position: relative; z-index: 1;">
              <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem; background: rgba(180, 120, 0, 0.12); color: #92400E; border-radius: 50px; font-weight: 600; font-size: 0.875rem; width: fit-content;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Protection Plan
              </div>
              <div style="display: flex; align-items: center; gap: 1.5rem;">
                <img src="/gbp-true-transparent-logo.png" alt="Google Business Profile Product Expert" style="height: 140px; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));">
                <h2 class="heading-lg" style="color: #78350F; margin: 0;">Google Business Profile <span style="color: #92400E;">Insurance</span></h2>
              </div>
              <p style="color: #92400E; font-size: 1.125rem;">Protect your Google Business Profile with our comprehensive insurance service, covering unexpected suspensions, compliance issues, and profile disruptions.</p>
              <p style="color: #78350F; opacity: 0.8;">Once your profile has been expertly audited and optimized, you can enroll immediately at a minimal rate, ensuring ongoing peace of mind.</p>
              <p style="color: #78350F; opacity: 0.8;">For new clients with active profiles, we provide a thorough review and compliance adjustment, confirming all business information, categories, and content meet Google's guidelines before coverage begins.</p>
              <p style="color: #78350F; opacity: 0.8;">With our insurance, business owners can focus on growth and operations while knowing their Google Business Profile is secured against potential issues, giving them confidence and an uninterrupted online presence.</p>
              <a href="#contact" class="btn" style="background: #92400E; color: white; align-self: flex-start; margin-top: 0.5rem;">Get Protected</a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="section bg-light">
       <div class="container grid grid-cols-2 gap-xl">
          <div class="flex flex-col gap-md">
             <h2 class="heading-lg">Frequently Asked Questions</h2>
             <p class="text-lg text-muted">Got questions about Google Business Profile suspensions or Local SEO? We've got answers.</p>
             <div style="margin-top: 2rem;">
               <a href="#contact" class="btn btn-secondary">Still have questions?</a>
             </div>
          </div>
          <div class="faq-container">
             <div class="faq-item">
                <button class="faq-question">
                   How long does reinstatement take?
                   <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div class="faq-answer">
                   <p>Reinstatement timelines vary depending on Google's backlog and the complexity of the suspension. Generally, it can take anywhere from 7 days to a few weeks. We expedite the process by ensuring all documentation is perfectly aligned with Google's guidelines before submission.</p>
                </div>
             </div>
             <div class="faq-item">
                <button class="faq-question">
                   What if my profile gets suspended again?
                   <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div class="faq-answer">
                   <p>Once we reinstate your profile, we ensure it is fully compliant. If it gets suspended again due to a Google algorithm update or an error on their end (and you haven't violated guidelines), we will assist in resolving it.</p>
                </div>
             </div>
             <div class="faq-item">
                <button class="faq-question">
                   How do I know if my Google Business Profile is suspended?
                   <svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
                </button>
                <div class="faq-answer">
                   <p>If you received a soft suspension, your listing still appears on Google, but you can't edit or manage it. If you received a hard suspension, your profile is completely removed from Google Search and Maps, and customers won't be able to find you.</p>
                </div>
             </div>
          </div>
       </div>
    </section>

    <!-- Contact & Lead Form Section -->
    <section id="contact" class="section flex justify-center bg-white" style="position: relative;">
      <div class="container grid grid-cols-2 gap-xl">
        <div class="flex flex-col gap-lg justify-center">
            <h2 class="heading-lg">Let's Get Your Profile Back Online.</h2>
            <p class="text-lg text-muted">Share your Local SEO or Reinstatement requirements with us. We will get in touch within 24 hours on weekdays.</p>
            
            <div class="card bg-light flex flex-col gap-md mt-4" style="border: none;">
              <div class="flex items-center gap-md">
                <div style="padding: 0.75rem; background: rgba(26, 86, 219, 0.1); border-radius: 50%;">
                   <svg width="24" height="24" class="text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div class="text-sm text-muted">Call us directly</div>
                  <div style="font-weight: 600; font-size: 1.125rem;">+6011 009 9299</div>
                </div>
              </div>
              <div class="flex items-center gap-md">
                <div style="padding: 0.75rem; background: rgba(26, 86, 219, 0.1); border-radius: 50%;">
                  <svg width="24" height="24" class="text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                   <div class="text-sm text-muted">Our Location</div>
                   <div style="font-weight: 600; font-size: 1.125rem;">Klang Valley</div>
                </div>
              </div>
            </div>
        </div>

        <div class="card" style="box-shadow: var(--shadow-xl); border: 1px solid var(--clr-border);">
          <h3 class="heading-md" style="margin-bottom: 1.5rem;">Send Your Requirements</h3>
          <form class="flex flex-col gap-md" onsubmit="event.preventDefault(); const msg = 'Hi, I am ' + document.getElementById('firstName').value + ' ' + document.getElementById('lastName').value + ' (' + document.getElementById('email').value + '). I am reaching out regarding: ' + document.getElementById('service').value + '. Case Details: ' + document.getElementById('details').value; window.open('https://wa.me/601159683538?text=' + encodeURIComponent(msg), '_blank');">
            <div class="grid grid-cols-2 gap-md">
               <div class="flex flex-col gap-sm">
                 <label for="firstName" class="text-sm font-semibold">First Name</label>
                 <input type="text" id="firstName" class="form-input" placeholder="John">
               </div>
               <div class="flex flex-col gap-sm">
                 <label for="lastName" class="text-sm font-semibold">Last Name</label>
                 <input type="text" id="lastName" class="form-input" placeholder="Doe">
               </div>
            </div>
            <div class="flex flex-col gap-sm">
              <label for="email" class="text-sm font-semibold">Email Address</label>
              <input type="email" id="email" class="form-input" placeholder="john@example.com">
            </div>
            <div class="flex flex-col gap-sm">
              <label for="service" class="text-sm font-semibold">Service Needed</label>
              <select id="service" class="form-input" style="appearance: none; background-image: url('data:image/svg+xml;utf8,<svg fill=%22none%22 stroke=%22currentColor%22 viewBox=%220 0 24 24%22 xmlns=%22http://www.w3.org/2000/svg%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M19 9l-7 7-7-7%22></path></svg>'); background-repeat: no-repeat; background-position: right 1rem center; background-size: 1em;">
                 <option>GBP Reinstatement</option>
                 <option>Consulting</option>

                 <option>Local SEO Training</option>
              </select>
            </div>
            <div class="flex flex-col gap-sm">
              <label for="details" class="text-sm font-semibold">Case Details</label>
              <textarea id="details" rows="4" class="form-input" placeholder="Include business category, suspension type, etc." style="resize: vertical;"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="margin-top: 0.5rem; width: 100%;">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer style="background-color: var(--clr-dark); color: var(--clr-light); padding: 4rem 0 2rem; border-top: 1px solid var(--clr-dark-lighter);">
    <div class="container grid grid-cols-2 gap-xl" style="margin-bottom: 3rem;">
       <div class="flex flex-col gap-md lg:pr-10">
          <a href="#" class="logo flex items-center gap-sm">
            <span class="text-lg" style="font-weight: 700; color: var(--clr-white);">Local SEO Expert</span>
          </a>
          <p class="text-sm text-gray-400">Secure your business profile against suspensions and soar in local rankings with our expert SEO services.</p>
       </div>
       <div class="flex gap-xl justify-end">
          <div class="flex flex-col gap-sm">
             <h4 style="color: var(--clr-white); margin-bottom: 0.5rem;">Services</h4>
             <a href="#" class="text-sm text-gray-400 footer-link">Reinstatement</a>
             <a href="#" class="text-sm text-gray-400 footer-link">Local SEO</a>
             <a href="#" class="text-sm text-gray-400 footer-link">Consulting</a>

          </div>
          <div class="flex flex-col gap-sm">
             <h4 style="color: var(--clr-white); margin-bottom: 0.5rem;">Company</h4>
             <a href="#" class="text-sm text-gray-400 footer-link">About Us</a>
             <a href="#" class="text-sm text-gray-400 footer-link">Contact</a>
             <a href="#" class="text-sm text-gray-400 footer-link">Privacy Policy</a>
          </div>
       </div>
    </div>
    <div class="container text-center text-sm text-gray-500" style="border-top: 1px solid var(--clr-dark-lighter); padding-top: 2rem;">
      <p>&copy; ${new Date().getFullYear()} Local SEO Expert. All rights reserved.</p>
    </div>
  </footer>
`

// Scroll effect for navbar
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar')
  if (window.scrollY > 50) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
})

// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');

    // Close all other FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('active');
    });

    // Toggle current FAQ
    if (!isActive) {
      faqItem.classList.add('active');
    }
  });
});
