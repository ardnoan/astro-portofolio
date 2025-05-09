// src/scripts/effects.js
class ParticleEffect {
    constructor() {
      this.container = document.getElementById('particles');
      this.colors = ["#0ff", "#f0f", "#0f0", "#f70"];
      this.init();
    }
  
    init() {
      this.createParticles();
      this.addEventListeners();
    }
  
    createParticles() {
      this.container.innerHTML = '';
      const count = window.innerWidth < 768 ? 30 : 50;
      
      for(let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        Object.assign(particle.style, this.getParticleStyles());
        this.container.appendChild(particle);
      }
    }
  
    getParticleStyles() {
      return {
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        width: `${Math.random() * 3 + 1}px`,
        height: 'auto',
        backgroundColor: this.colors[Math.floor(Math.random() * this.colors.length)],
        animation: `float ${Math.random() * 15 + 5}s linear infinite`
      };
    }
  
    addEventListeners() {
      window.addEventListener('resize', () => this.createParticles());
    }
  }
  
  class TiltEffect {
    constructor() {
      this.buttons = document.querySelectorAll('.btn-cyber');
      this.init();
    }
  
    init() {
      this.buttons.forEach(btn => {
        btn.addEventListener('mousemove', this.tilt.bind(this));
        btn.addEventListener('mouseleave', this.resetTilt.bind(this));
      });
    }
  
    tilt(e) {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.target.style.transform = `
        perspective(1000px)
        rotateX(${(rect.height/2 - y)/10}deg)
        rotateY(${(x - rect.width/2)/10}deg)
        translateY(-5px)
      `;
    }
  
    resetTilt(e) {
      e.target.style.transform = '';
    }
  }
  
  // Initialize effects
  document.addEventListener('DOMContentLoaded', () => {
    new ParticleEffect();
    new TiltEffect();
  });