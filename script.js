// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initial creation of job cards when the page loads

document.addEventListener('DOMContentLoaded', function() {
    // Function to show all job cards
    function showAllJobCards() {
        const jobCards = document.querySelectorAll('.job-card');
        jobCards.forEach(function(card) {
            card.style.display = 'flex'; // Show all job cards
        });
    }

    // Function to apply filters and display matching job cards
    function applyFilters() {
        const selectedCategoryElem = document.getElementById('job-category');
        const selectedLocationElem = document.getElementById('location');
        const selectedSalaryRangeElem = document.getElementById('salary-range');
        const selectedJobTypeElem = document.getElementById('job-type');
        const selectedExperienceLevelElem = document.getElementById('experience-level');
        const selectedSkillsElem = document.getElementById('Skills');

        if (!selectedCategoryElem || !selectedLocationElem || !selectedSalaryRangeElem || !selectedJobTypeElem || !selectedExperienceLevelElem || !selectedSkillsElem) {
            console.error('One or more filter elements not found.');
            return;
        }

        // Debugging: Log the values of form elements
        // console.log("Selected Category Element:", selectedCategoryElem);
        // console.log("Selected Location Element:", selectedLocationElem);
        // console.log("Selected Salary Range Element:", selectedSalaryRangeElem);
        // console.log("Selected Job Type Element:", selectedJobTypeElem);
        // console.log("Selected Experience Level Element:", selectedExperienceLevelElem);
        // console.log("Selected Skills Element:", selectedSkillsElem);

        // Handle null or undefined values
        const selectedCategory = selectedCategoryElem.value.toLowerCase();
        const selectedLocation = selectedLocationElem.value.toLowerCase();
        const selectedSalaryRange = selectedSalaryRangeElem.value.toLowerCase();
        const selectedJobType = selectedJobTypeElem.value.toLowerCase();
        const selectedExperienceLevel = selectedExperienceLevelElem.value.toLowerCase();
        const selectedSkills = selectedSkillsElem.value.toLowerCase();

        // console.log("Selected Category:", selectedCategory);
        // console.log("Selected Location:", selectedLocation);
        // console.log("Selected Salary Range:", selectedSalaryRange);
        // console.log("Selected Job Type:", selectedJobType);
        // console.log("Selected Experience Level:", selectedExperienceLevel);
        // console.log("Selected Skills:", selectedSkills);

        const jobCards = document.querySelectorAll('.job-card');
        let anyJobVisible = false;
        jobCards.forEach(function(card) {
            const keywords = card.dataset.keywords.toLowerCase().split(','); // Split keywords into an array
            console.log("Keywords for Job Card", card.dataset.jobId, ":", keywords);

            const categoryMatch = selectedCategory === 'all' || keywords.includes(selectedCategory.trim());
            const locationMatch = selectedLocation === 'all' || keywords.includes(selectedLocation.trim());
            const salaryRangeMatch = selectedSalaryRange === 'all' || keywords.includes(selectedSalaryRange.trim());
            const jobTypeMatch = selectedJobType === 'all' || keywords.includes(selectedJobType.trim());
            const experienceLevelMatch = selectedExperienceLevel === 'all' || keywords.includes(selectedExperienceLevel.trim());
            const skillsMatch = selectedSkills === 'all' || keywords.includes(selectedSkills.trim());

            // console.log("Category Match:", categoryMatch);
            // console.log("Location Match:", locationMatch);
            // console.log("Salary Range Match:", salaryRangeMatch);
            // console.log("Job Type Match:", jobTypeMatch);
            // console.log("Experience Level Match:", experienceLevelMatch);
            // console.log("Skills Match:", skillsMatch);

            if (categoryMatch && locationMatch && salaryRangeMatch && jobTypeMatch && experienceLevelMatch && skillsMatch) {
                card.style.display = 'flex'; // Show the job card
                anyJobVisible = true;
            } else {
                card.style.display = 'none'; // Hide the job card
            }
        });
        // Check if no filter is applied
const allFieldsAreAll = selectedCategory === 'all' && selectedLocation === 'all' && selectedSalaryRange === 'all' && selectedJobType === 'all' && selectedExperienceLevel === 'all' && selectedSkills === 'all';

// If all fields are set to "All", show all job cards
if (allFieldsAreAll) {
jobCards.forEach(function(card) {
    card.style.display = 'flex';
});
}
        const jobSection = document.getElementById('allJobs');
            if (jobSection) {
                    if (!anyJobVisible) {
                        jobSection.innerHTML = '<p>No matches found.</p>';
                    }
                } else {
                 console.error('Job section element not found.');
        }
        
    }

   // Function to handle "Apply Now" button clicks
function applyNow(jobId) {
switch(jobId) {
    case '1':
        window.open('https://japan-dev.com/jobs/accredify/accredify-senior-software-engineer-glwwuk', '_blank');
        break;
    case '2':
        window.open('https://www.daijob.com/en/jobs/detail/1120171', '_blank');
        break;
    case '3':
        window.open('https://japan-dev.com/jobs/nearme/nearme-devops-engineer-jmh37y', '_blank');
        break;
    case '4':
        window.open('https://japan-dev.com/jobs/money-forward/money-forward-project-manager-aiml-team-66igfw', '_blank');
        break;
    case '5':
        window.open('https://careers.yazaki.com/job/La-Vergne-Project-Manager%2C-Gen-ProjProg-Mgmt-TN-37086/976518855/', '_blank');
        break;
    default:
        // Handle if jobId is invalid
        const jobSection = document.getElementById('allJobs'); // Assuming the job section has an id of 'allJobs'
        if (jobSection) {
            jobSection.innerHTML = '<p>page not found.</p>';
        } else {
            console.error('Job section element not found.');
        }
        break;
}
}
function toggleBookmarkColor(event) {
    console.log("Bookmark button clicked");
    const bookmarkButton = event.target.closest('.bookmark-btn');
    const icon = bookmarkButton.querySelector('i');
    icon.classList.toggle('blue');
    console.log("Bookmark button class toggled:", icon.classList.contains('blue'));
}

 // Add event listener to bookmark buttons
 const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
bookmarkButtons.forEach(function(button) {
    button.addEventListener('click', toggleBookmarkColor);
    button.addEventListener('click', function(event) {
    const icon = event.currentTarget.querySelector('i');
    if (icon.classList.contains('far')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
});
});


    // Add event listeners for filter buttons and form submission
    const allJobsBtn = document.getElementById('allJobsBtn');
    const filterForm = document.getElementById('filterForm');
    if (allJobsBtn && filterForm) {
        allJobsBtn.addEventListener('click', showAllJobCards);
        filterForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            applyFilters();
        });
    } else {
        console.error('One or more buttons or form elements not found.');
    }
     // Add event listeners to apply-btn buttons
     const applyButtons = document.querySelectorAll('.apply-btn');
        applyButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                const jobId = event.target.dataset.jobId;
                applyNow(jobId);
            });
        });
       // Function to show the specified job section and hide others
function showJobSection(sectionId) {
    const jobSections = document.querySelectorAll('.job-section');
    jobSections.forEach(function(section) {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
} 
  // Add event listeners for header buttons
//   const allJobsBtn = document.getElementById('allJobsBtn');
const savedJobsBtn = document.getElementById('savedJobsBtn');
// const appliedJobsBtn = document.getElementById('appliedJobsBtn');

if (allJobsBtn && savedJobsBtn ) {
    allJobsBtn.addEventListener('click', function() {
        showJobSection('allJobs');
    });
    savedJobsBtn.addEventListener('click', function() {
        showJobSection('savedJobs');
    });
    // appliedJobsBtn.addEventListener('click', function() {
    //     showJobSection('appliedJobs');
    // });
} else {
    console.error('One or more header buttons not found.');
} 
//Function to handle bookmark button clicks
function handleBookmarkClick(event) {
console.log("Handle bookmark click function called");

// Find the closest bookmark button element
const bookmarkButton = event.currentTarget;
console.log("Bookmark button:", bookmarkButton);

// Check if a bookmark button is found
if (bookmarkButton) {
    // Find the parent job card element
    const jobCard = bookmarkButton.closest('.job-card');
    console.log("Job card:", jobCard);

    // Check if a job card is found
    if (jobCard) {
        // Find the icon element inside the bookmark button
        const icon = bookmarkButton.querySelector('i');
        console.log("Icon:", icon);

        // Check if an icon element is found
        if (icon) {
            // Check if the icon has the 'blue' class
            if (icon.classList.contains('blue')) {
                console.log("Bookmark button is in blue color");
                // Clone the job card
                const savedJobCard = jobCard.cloneNode(true);
                console.log("Cloned job card:", savedJobCard);

                // Remove the bookmark button from the cloned job card
                const clonedBookmarkButton = savedJobCard.querySelector('.bookmark-btn');
                if (clonedBookmarkButton) {
                    clonedBookmarkButton.remove();
                    console.log("Bookmark button removed from cloned job card");
                }

                // Find the saved jobs section
                const savedJobsSection = document.getElementById('savedJobs');
                console.log("Saved jobs section:", savedJobsSection);

                // Check if the saved jobs section exists
                if (savedJobsSection) {
                    // Append the cloned job card to the saved jobs section
                    savedJobsSection.appendChild(savedJobCard);
                    console.log("Cloned job card appended to saved jobs section");

                    // Hide the "No jobs bookmarked" message
                    const noJobsMessage = document.getElementById('noJobsMessage');
                    if (noJobsMessage) {
                        noJobsMessage.style.display = 'none';
                        console.log("No jobs bookmarked message hidden");
                    }
                } else {
                    console.error('Saved Jobs section not found.');
                }
            } else {
                console.log("Bookmark button is not in blue color");
                // Remove the job card from the saved jobs section
                const savedJobsSection = document.getElementById('savedJobs');
                console.log("Saved jobs section:", savedJobsSection);
                if (savedJobsSection) {
                    // Find the corresponding job card in the saved jobs section
                    const savedJobCard = savedJobsSection.querySelector(`.job-card[data-job-id="${jobCard.dataset.jobId}"]`);
                    console.log("Corresponding saved job card:", savedJobCard);
                    if (savedJobCard) {
                        savedJobCard.remove();
                        console.log("Saved job card removed from saved jobs section");
                    }

                    // Check if there are no job cards in the saved jobs section
                    const savedJobCards = savedJobsSection.querySelectorAll('.job-card');
                    if (savedJobCards.length === 0) {
                        // Display the "No jobs bookmarked" message
                        const noJobsMessage = document.getElementById('noJobsMessage');
                        if (noJobsMessage) {
                            noJobsMessage.style.display = 'block';
                            console.log("No jobs bookmarked message displayed");
                        }
                    }
                } else {
                    console.error('Saved Jobs section not found.');
                }
            }
        } else {
            console.error('Icon element not found inside bookmark button.');
        }
    } else {
        console.error('Job card not found.');
    }
} else {
    console.error('Bookmark button not found.');
}
}
// Add event listener to bookmark buttons
//const bookmarkButtons = document.querySelectorAll('.bookmark-btn');
bookmarkButtons.forEach(function(button) {
button.addEventListener('click', function(event) {
    console.log("Bookmark button clicked");
    handleBookmarkClick(event); // Call the handleBookmarkClick function
});
});
// Function to show "No jobs bookmarked" message
function showNoJobsMessage() {
    const noJobsMessage = document.getElementById('noJobsMessage');
    if (noJobsMessage) {
        noJobsMessage.style.display = 'block'; // Display the message initially
    }
}

// Call the function to show "No jobs bookmarked" message initially
showNoJobsMessage();
 // Apply initial behavior
    showAllJobCards();
});
// Function to handle form submission
document.getElementById('formElement').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    alert('Your request has been received'); // Display an alert
    document.getElementById('formElement').reset(); // Reset the form
});


