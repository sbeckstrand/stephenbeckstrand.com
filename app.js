console.log("test")

new Vue({
  el: '#app',
  data: {
    about: [
      "Hello! My name is Stephen. I am an undergraduate student at Utah State University majoring in Computer Science. I have a passion for education and the world of information technology. I consider myself to be a bit of a jack of all trades. I originally found my footing in field of IT offering customer service but moved on to systems administration. Most recently I have been pursuing an interest in software engineering. My hope is that my experience managing systems and my understanding of how users interact with a provided service with help make me a well rounded engineer."
    ],
    social: [
      {
        name: "twitter",
        link: "https://twitter.com/spbeckstrand",
        class: "fab fa-twitter"
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/stephenpbeckstrand/",
        class: "fab fa-instagram"
      },
      {
        name: "github",
        link: "https://github.com/sbeckstrand",
        class: "fab fa-github"
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/stephen-beckstrand/",
        class: "fab fa-linkedin"
      },
      {
        name: "gitlab",
        link: "https://git.stephenbeckstrand.com/stephen",
        class: "fab fa-gitlab"
      }
    ],
    jobs: [
      {
        name: "DigitalOcean",
        link: "https://www.digitalocean.com",
        title: "Cloud Operations",
        start: "2016",
        end: "Current",
        description: "I began working at DigitalOcean in May of 2016. I was originally hired on as a Developer Support Advocate and then transitioned into my current operations role. Within operations, my primary tasks are to ensure uptime of services and hardware in our production fleet, provide incident management and to assist with scheduled and emergency maintenance."
      },
      {
        name: "i.t.NOW",
        link: "https://www.itnow.net",
        title: "NOC Engineer",
        start: "2014",
        end: "2016",
        description: "At i.t.NOW I was one of two people on our NOC team. We were responsible for all automation and non-customer generated requests. My primary task was to automate monitoring and remediation for all components of internal and client services including backups, network performance, hardware status, etc."
      },
      {
        name: "Bluehost",
        link: "https://www.bluehost.com",
        title: "Level 2 Technical Engineer",
        start: "2012",
        end: "2014",
        description: "I originally started at Bluehost as a support representetive but transitioned shortly after into a level 2 role where I was the primary point of contact for requests escalated from our support team. This role also included the responsibility of managing the status of our primary web service on our shared hypervisors and monitoring for trends to report to our Level 3 and Jr. Systems Administration staff."
      }
    ],
    schools: [
      {
        name: "Utah State University",
        link: "https://www.usu.edu",
        start: "2019",
        end: "Current",
        description: "After a year of attending Utah Valley University, my wife and I moved to a more northern city in Utah and I transferred from UVU to Utah State University. I am majoring in Computer Science while minoring in Mathematics."
      },
      {
        name: "Utah Valley University",
        link: "https://www.uvu.edu",
        start: "2017",
        end: "2018",
        description: "After joining DigitalOcean I developed a passion for software development and decided I wanted to shift my career and interests to writing software. To aid me in this process I decided to go back to school and continued my higher education journey at UVU."
      },
      {
        name: "Mountainland Applied Technology College",
        link: "https://mtec.edu",
        start: "2011",
        end: "2012",
        description: "Starting in the fall of 2011 I was dual enrolled finishing my senior year of high school while also attending MLATC obtaining entry level computer science certifications such as the Comptia A+, Net+ and the Cisco CCNA."
      }
    ]
  }
})
