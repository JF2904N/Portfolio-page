document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.at, .bt, .ct, .dt');
    
    // Intersection Observer for fade-in effects
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('.navigation a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetID = this.getAttribute('href');
            const targetElement = document.querySelector(targetID);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust for any fixed navigation bar height
                    behavior: 'smooth'
                });
            }
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.at, .bt, .ct, .dt');

    // Observer for revealing sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Project description reveal effect
    const projects = document.querySelectorAll('.project_list div');

    projects.forEach(project => {
        project.addEventListener('click', function () {
            // Toggle the 'active' class to slide the description in/out
            this.classList.toggle('active');
        });
    });
});


// Set the correct form action URL
// Set the correct form action URL
const url = "https://script.google.com/macros/s/AKfycbwuMw6fexqVbPHpgMIZysC7ghSOeyhDLLFW5pxOJtCNRIw0AJoGtl8IChG0OgW3ayG_/exec"; // Google Apps Script URL

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const formData = new FormData(this); // Collect the form data

    // Send form data via POST using fetch
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response (e.g., show success message)
        console.log(data);
        document.getElementById('responseMessage').innerText = 'Your message has been sent!';
        
        // Clear the form inputs after successful submission
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        // Handle the error (e.g., show error message)
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'There was an error sending your message.';
    });
});

// Fetching data from Google Sheets and populating datalists
fetch(`${url}?header=Name`)
    .then(response => response.json())
    .then(({ data }) => {
        console.log(data);
        populateDatalists("names", data);
    })
    .catch(error => console.error('Error fetching names:', error));

fetch(`${url}?header=Email`)
    .then(response => response.json())
    .then(({ data }) => {
        console.log(data);
        populateDatalists("emails", data);
    })
    .catch(error => console.error('Error fetching emails:', error));

fetch(`${url}?header=Subject`)
    .then(response => response.json())
    .then(({ data }) => {
        console.log(data);
        populateDatalists("subjects", data);
    })
    .catch(error => console.error('Error fetching subjects:', error));

fetch(`${url}?header=Message`)
    .then(response => response.json())
    .then(({ data }) => {
        console.log(data);
        populateDatalists("messages", data);
    })
    .catch(error => console.error('Error fetching messages:', error));

// Function to populate datalists
const populateDatalists = (id, arr) => {
    let result = '';
    arr.forEach(item => {
        result += `<option value="${item}">`;
    });
    document.getElementById(id).innerHTML = result;
};

