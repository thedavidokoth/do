/* Modern Theme Profile Initialization */

// Ensure config is loaded before using it
if (typeof profileConfig === 'undefined') {
    console.error('profileConfig is not defined. Make sure config.js is loaded before scripts.js');
}

function getYearsBetween(sdt) {
    var date_difference = new Date(new Date() - sdt);
    var years = date_difference.toISOString().slice(0, 4) - 1970;
    var months = function (months) {
        if (months == 0) return '';
        if (months > 11) {
            years += 1;
            return '';
        }
        if (months == 1) {
            return ' and ' + months + ' Month';
        }
        return ' and ' + months + ' Months';
    };
    return years + ' Years' + months(date_difference.getMonth() + 1);
}

// Initialize profile data from config
function initializeProfile() {
    if (typeof profileConfig === 'undefined') {
        console.error('profileConfig not available');
        return;
    }
    
    // Update hero section
    $('#profile-name').text(profileConfig.name);
    $('#profile-title').text(profileConfig.title);
    $('#profile-subtitle').text(profileConfig.subtitle);
    $('#profile-location').html('📍 ' + profileConfig.location);
    
    // Update education
    $('#education-status').text(profileConfig.education.status);
    $('#education-institution').text(profileConfig.education.institution);
    $('#education-degree').text(profileConfig.education.degree);
    
    // Update social links
    if (profileConfig.social.github) {
        $('#github-link').attr('href', profileConfig.social.github);
        $('#github-link').show();
    }
    if (profileConfig.social.linkedin) {
        $('#linkedin-link').attr('href', profileConfig.social.linkedin);
        $('#linkedin-link').show();
    }
    if (profileConfig.social.medium) {
        $('#medium-link').attr('href', profileConfig.social.medium);
        $('#medium-link').show();
    }
    if (profileConfig.social.twitter) {
        $('#twitter-link').attr('href', profileConfig.social.twitter);
        $('#twitter-link').show();
    }
    if (profileConfig.social.email) {
        $('#email-link').attr('href', 'mailto:' + profileConfig.social.email);
        $('#email-link').show();
    }
    
    // Populate skills
    var skillsContainer = $('#skills-container');
    skillsContainer.empty();
    profileConfig.skills.forEach(function(skill) {
        skillsContainer.append('<span class="skill-badge">' + skill + '</span>');
    });
    
    // Populate experience
    if (profileConfig.experience.show) {
        var experience = getYearsBetween(new Date(profileConfig.experience.startDate));
        $('#experience-display').text(experience);
        $('#experience-section').show();
    }
    
    // Populate open source contributions
    if (profileConfig.openSource.highlight) {
        $('#opensource-description').text(profileConfig.openSource.description);
        var projectsContainer = $('#projects-container');
        projectsContainer.empty();
        profileConfig.openSource.projects.forEach(function(project) {
            var projectHtml = '<div class="project-item">' +
                '<div class="project-name">' +
                '<i class="fa fa-code-fork"></i>' +
                '<a href="' + project.link + '" target="_blank">' + project.name + '</a>' +
                '</div>' +
                '<div class="project-description">' + project.description + '</div>' +
                '</div>';
            projectsContainer.append(projectHtml);
        });
        $('#opensource-section').show();
    }
    
    // Populate interests
    var interestsContainer = $('#interests-container');
    interestsContainer.empty();
    profileConfig.interests.forEach(function(interest) {
        interestsContainer.append(
            '<div class="interest-item">' +
            '<i class="fa fa-star"></i>' +
            '<span class="interest-text">' + interest + '</span>' +
            '</div>'
        );
    });
}


// Initialize profile when DOM is ready
$(document).ready(function() {
    initializeProfile();
});

// Matrix canvas animation (if draw function exists)
if (typeof draw === 'function') {
    setInterval(draw, 100);
}
