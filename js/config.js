// Profile Configuration
// This file contains all customizable profile data
// To create a new profile, simply update the values in this object

const profileConfig = {
    // Personal Information
    name: "David Okoth",
    title: "DevOps Engineer",
    subtitle: "Open Source Contributor",
    location: "Australia",
    email: "davidokoth.do78@gmail.com",
    phone: "", // Removed as requested
    
    // Education
    education: {
        institution: "Torrens University Australia",
        degree: "Masters in Artificial Intelligence",
        status: "Currently enrolled"
    },
    
    // Current Work/Experience
    currentWork: {
        show: false, // Set to true if you want to show current work
        company: "",
        description: "",
        link: ""
    },
    
    // Skills and Technologies
    skills: [
        "Kubernetes",
        "Docker",
        "CI/CD Pipelines",
        "Terraform",
        "Ansible",
        "AWS Cloud",
        "Azure Cloud",
        "Git/GitHub",
        "Jenkins",
        "GitLab CI",
        "Prometheus",
        "Grafana",
        "Linux/Unix",
        "Shell Scripting",
        "Python",
        "YAML",
        "Helm Charts",
        "Istio",
        "ArgoCD"
    ],
    
    // Experience (years calculation)
    experience: {
        startDate: "January 1 2019 00:00", // Format: "Month Day Year HH:MM"
        show: true
    },
    
    // Interests/Hobbies
    interests: [
        "Open Source Contributions",
        "Kubernetes Ecosystem",
        "Cloud Infrastructure",
        "Automation & DevOps Practices"
    ],
    
    // Social Media Links
    social: {
        github: "https://github.com/thedavidokoth",
        linkedin: "", // Add if available
        medium: "", // Add if available
        twitter: "", // Add if available
        email: "davidokoth.do78@gmail.com"
    },
    
    // Open Source Contributions
    openSource: {
        highlight: true,
        description: "Active contributor to Kubernetes ecosystem projects including minikube and ingress-nginx",
        projects: [
            {
                name: "minikube",
                description: "Contributing to local Kubernetes development tooling - helping improve local Kubernetes cluster setup and management",
                link: "https://github.com/thedavidokoth/minikube"
            },
            {
                name: "ingress-nginx",
                description: "Contributing to Kubernetes Ingress NGINX Controller - enhancing ingress management and load balancing capabilities",
                link: "https://github.com/thedavidokoth/ingress-nginx"
            }
        ]
    },
    
    // Typed.js Terminal Messages
    terminal: {
        skillSetQuestion: "Skill Set?",
        experienceQuestion: "Experience?",
        interestsQuestion: "My Interests?",
        coolStuffQuestion: "Open Source Contributions?"
    },
    
    // SEO Meta Tags
    seo: {
        description: "David Okoth, DevOps Engineer specializing in Kubernetes, Cloud Infrastructure, and CI/CD. Currently pursuing Masters in AI at Torrens University Australia.",
        keywords: "David Okoth, DevOps Engineer, Kubernetes, Cloud Infrastructure, CI/CD, Terraform, Docker, AWS, Azure, Open Source Contributor, Australia",
        author: "David Okoth"
    },
    
    // Additional Info
    additionalInfo: "Passionate about building scalable infrastructure and contributing to the open source community, particularly in the Kubernetes ecosystem."
};

