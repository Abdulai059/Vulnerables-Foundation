// script.js
document.addEventListener('DOMContentLoaded', function() {
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const hiddenMembers = document.querySelectorAll('.hidden-members');
    let isExpanded = false;
    
    viewMoreBtn.addEventListener('click', function() {
        if (!isExpanded) {
            // Show hidden team members
            hiddenMembers.forEach(member => {
                member.style.display = 'block';
                member.style.animation = 'fadeIn 0.5s ease forwards';
            });
            viewMoreBtn.textContent = 'View Less';
            isExpanded = true;
        } else {
            // Hide team members
            hiddenMembers.forEach(member => {
                member.style.display = 'none';
            });
            viewMoreBtn.textContent = 'View More';
            isExpanded = false;
            
            // Scroll back to team section
            document.querySelector('.team-section').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


let navLink = document.getElementById("nav-links")
