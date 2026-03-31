
        // Create floating particles
        function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                
                // Random colors
                const colors = ['#6366f1', '#ec4899', '#8b5cf6', '#3b82f6'];
                particle.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                container.appendChild(particle);
            }
        }

        // Countdown Timer
        function initCountdown() {
            // Set launch date (60 days from now)
            const launchDate = new Date();
            launchDate.setDate(launchDate.getDate() + 60);
            
            function updateCountdown() {
                const now = new Date().getTime();
                const distance = launchDate - now;
                
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
                
                if (distance < 0) {
                    document.getElementById('countdown').innerHTML = '<div class="time-unit"><span class="time-value">We\'re Live!</span></div>';
                }
            }
            
            updateCountdown();
            setInterval(updateCountdown, 1000);
        }

        // Email Form Handling
        function initForm() {
            const form = document.getElementById('notifyForm');
            const emailInput = document.getElementById('emailInput');
            const submitBtn = document.getElementById('submitBtn');
            const successMessage = document.getElementById('successMessage');
            const errorMessage = document.getElementById('errorMessage');
            
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const email = emailInput.value;
                
                // Basic validation
                if (!email || !email.includes('@')) {
                    showError('Please enter a valid email address');
                    return;
                }
                
                // Simulate API call
                submitBtn.classList.add('loading');
                submitBtn.textContent = 'Subscribing...';
                
                try {
                    // Simulate network delay
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    
                    // Success state
                    submitBtn.classList.remove('loading');
                    submitBtn.classList.add('success');
                    submitBtn.textContent = 'Subscribed!';
                    emailInput.value = '';
                    successMessage.style.display = 'block';
                    errorMessage.style.display = 'none';
                    
                    // Reset after 3 seconds
                    setTimeout(() => {
                        submitBtn.classList.remove('success');
                        submitBtn.textContent = 'Notify Me';
                        successMessage.style.display = 'none';
                    }, 3000);
                    
                } catch (error) {
                    showError('Something went wrong. Please try again.');
                    submitBtn.classList.remove('loading');
                    submitBtn.textContent = 'Notify Me';
                }
            });
            
            function showError(msg) {
                errorMessage.textContent = msg;
                errorMessage.style.display = 'block';
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 3000);
            }
        }

        // Mouse move parallax effect
        function initParallax() {
            document.addEventListener('mousemove', (e) => {
                const mouseX = e.clientX / window.innerWidth - 0.5;
                const mouseY = e.clientY / window.innerHeight - 0.5;
                
                const bg = document.querySelector('.bg-animation');
                bg.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px) scale(1.1)`;
            });
        }

        // Initialize everything
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            initCountdown();
            initForm();
            initParallax();
        });