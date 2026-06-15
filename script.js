// Dark mode toggle (top-right corner)
const themeToggle = document.getElementById('themeToggle');
let darkMode = false;

// Check for saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
  darkMode = true;
  document.body.classList.add('dark');
  themeToggle.innerHTML = '☀️ Light Mode';
}

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add('dark');
    themeToggle.innerHTML = '☀️ Light Mode';
    localStorage.setItem('darkMode', 'enabled');
  } else {
    document.body.classList.remove('dark');
    themeToggle.innerHTML = '🌙 Dark Mode';
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name')?.value;
    const email = document.getElementById('email')?.value;
    const subject = document.getElementById('subject')?.value;
    const message = document.getElementById('message')?.value;
    
    if (name && email && subject && message) {
      formStatus.innerHTML = '✅ Message sent successfully! We\'ll get back to you soon.';
      formStatus.style.color = '#4caf50';
      contactForm.reset();
      
      setTimeout(() => {
        formStatus.innerHTML = '';
      }, 5000);
    } else {
      formStatus.innerHTML = '❌ Please fill in all required fields.';
      formStatus.style.color = '#f44336';
    }
  });
}

console.log('✅ DecodeLabs — Full Stack Training Portal Ready');

// Add this to your existing script.js

// Modal functionality for Careers page
const modal = document.getElementById('applyModal');
const modalJobTitle = document.getElementById('modalJobTitle');
const modalClose = document.querySelector('.modal-close');
const applyBtns = document.querySelectorAll('.apply-btn');

if (applyBtns.length > 0) {
  applyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const jobTitle = btn.getAttribute('data-job');
      if (modalJobTitle) modalJobTitle.textContent = jobTitle;
      if (modal) modal.style.display = 'flex';
    });
  });
}

if (modalClose) {
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Application form handling
const applicationForm = document.getElementById('applicationForm');
const appStatus = document.getElementById('appStatus');

if (applicationForm) {
  applicationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('applicantName')?.value;
    const email = document.getElementById('applicantEmail')?.value;
    const phone = document.getElementById('applicantPhone')?.value;
    const resume = document.getElementById('applicantResume')?.value;
    
    if (name && email && phone && resume) {
      appStatus.innerHTML = '✅ Application submitted successfully! We\'ll contact you within 3-5 business days.';
      appStatus.style.color = '#4caf50';
      applicationForm.reset();
      
      setTimeout(() => {
        appStatus.innerHTML = '';
        if (modal) modal.style.display = 'none';
      }, 4000);
    } else {
      appStatus.innerHTML = '❌ Please fill in all required fields.';
      appStatus.style.color = '#f44336';
    }
  });
}

// Add this to your existing script.js

// Certification enrollment modal
const certModal = document.getElementById('certModal');
const certModalTitle = document.getElementById('modalCertTitle');
const enrollBtns = document.querySelectorAll('.enroll-cert');

if (enrollBtns.length > 0) {
  enrollBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const certTitle = btn.getAttribute('data-cert');
      if (certModalTitle) certModalTitle.textContent = certTitle;
      if (certModal) certModal.style.display = 'flex';
    });
  });
}

// Certification enrollment form handling
const certEnrollForm = document.getElementById('certEnrollForm');
const certStatus = document.getElementById('certStatus');

if (certEnrollForm) {
  certEnrollForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('fullName')?.value;
    const email = document.getElementById('emailId')?.value;
    const phone = document.getElementById('phoneNum')?.value;
    const experience = document.getElementById('experience')?.value;
    
    if (name && email && phone && experience) {
      certStatus.innerHTML = '✅ Enrollment submitted! Check your email for payment instructions.';
      certStatus.style.color = '#4caf50';
      certEnrollForm.reset();
      
      setTimeout(() => {
        certStatus.innerHTML = '';
        if (certModal) certModal.style.display = 'none';
      }, 4000);
    } else {
      certStatus.innerHTML = '❌ Please fill in all required fields.';
      certStatus.style.color = '#f44336';
    }
  });
}
// Add this to your existing script.js

// ========== Enrollment Form Handling ==========
const enrollmentForm = document.getElementById('enrollmentForm');
const enrollStatus = document.getElementById('enrollStatus');

if (enrollmentForm) {
  enrollmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('enrollName')?.value;
    const email = document.getElementById('enrollEmail')?.value;
    const phone = document.getElementById('enrollPhone')?.value;
    const program = document.getElementById('enrollProgram')?.value;
    const terms = document.getElementById('enrollTerms')?.checked;
    
    if (name && email && phone && program && terms) {
      enrollStatus.innerHTML = '✅ Enrollment submitted! Redirecting to payment...';
      enrollStatus.style.color = '#4caf50';
      
      setTimeout(() => {
        alert('Payment Gateway Demo: Your enrollment has been recorded. In production, you would be redirected to payment page.');
        enrollmentForm.reset();
        enrollStatus.innerHTML = '';
      }, 2000);
    } else {
      enrollStatus.innerHTML = '❌ Please fill in all required fields and accept terms.';
      enrollStatus.style.color = '#f44336';
    }
  });
}

// ========== Curriculum Tabs ==========
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabBtns.length > 0) {
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      btn.classList.add('active');
      const activeContent = document.getElementById(tabId);
      if (activeContent) activeContent.classList.add('active');
    });
  });
}

// ========== Module Accordion ==========
const modules = document.querySelectorAll('.module');

if (modules.length > 0) {
  modules.forEach(module => {
    const header = module.querySelector('.module-header');
    header.addEventListener('click', () => {
      module.classList.toggle('open');
    });
  });
}

// ========== Download Curriculum PDF ==========
const downloadBtn = document.getElementById('downloadCurriculumBtn');

if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    alert('📄 Curriculum PDF would download here. In production, this would generate a PDF with the complete syllabus.');
  });
}