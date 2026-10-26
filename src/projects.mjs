// Portfolio projects: original work retained alongside verified newer projects.
export const projects = [
  {
    "slug": "arduino-wheelchair",
    "title": "Arduino wheelchair robot",
    "category": "Robotics · Mechanical",
    "year": "2025",
    "status": "Completed course prototype",
    "role": "Student designer & builder",
    "tools": "Arduino · Wiring · Mechanical assembly",
    "summary": "A small robot, a slipping drivetrain, and a practical fix.",
    "description": "Building and troubleshooting a miniature teddy bear wheelchair, from the drivetrain and launcher arm to component placement and wiring.",
    "image": "teddy1.jpg",
    "imageAlt": "Wheelchair robot chassis, wheels, drivetrain and launcher during assembly",
    "sections": [
      {
        "title": "The brief",
        "text": [
          "Design and build a miniature Arduino-based teddy bear wheelchair for an engineering design project at the University of Guelph, with attention to stability, maneuverability and mechanical design at a small scale. The prototype had to bring mechanical and electrical subsystems together and complete two required tasks on test day."
        ]
      },
      {
        "title": "My contribution",
        "bullets": [
          "Built the drivetrain and launcher arm and helped integrate them into the physical prototype.",
          "Planned where components would fit, accounting for available space and the robot’s centre of mass.",
          "Connected motors and wired components with a breadboard and Arduino board."
        ]
      },
      {
        "title": "The problem that changed the build",
        "text": [
          "Thin elastic bands in the drivetrain broke during testing. A working layout on the bench was not enough: the drive needed to transmit motion reliably under load.",
          "I replaced the thin bands with a thicker band and adjusted its position to increase tension. That change addressed the failure using the materials and space available."
        ]
      },
      {
        "title": "Result",
        "outcome": "The robot completed both required tasks on test day.",
        "text": [
          "This was a course-scale prototype. The useful engineering lesson was the connection between component placement, drivetrain tension and what actually happens during a physical test."
        ]
      },
      {
        "title": "Build record",
        "gallery": [
          {
            "src": "teddy2.jpg",
            "alt": "Wheelchair robot during assembly",
            "caption": "A second view of the physical build and component arrangement."
          },
          {
            "src": "teddy3.jpg",
            "alt": "Assembled miniature wheelchair robot with seat and front launcher",
            "caption": "The assembled prototype, including its seating structure and launcher."
          }
        ]
      }
    ]
  },
  {
    "slug": "can-signal-inference",
    "title": "CAN signal inference",
    "category": "Python · Applied mathematics",
    "year": "2026",
    "status": "Course project · in progress",
    "role": "ENGG*2910 project exploration",
    "tools": "Python · Least squares · CAN",
    "summary": "Exploring how raw vehicle messages can reveal physical signals.",
    "description": "An ongoing Mathematics for Artificial Intelligence project exploring how least-squares fitting can identify signals in simulated CAN traffic.",
    "flow": [
      {
        "title": "Simulate",
        "detail": "Generate raw CAN frames and synchronized physical measurements."
      },
      {
        "title": "Infer",
        "detail": "Search candidate fields and fit the relationship y = ax + b."
      },
      {
        "title": "Evaluate",
        "detail": "Compare recovered definitions with a separate answer key."
      }
    ],
    "sections": [
      {
        "title": "The question",
        "text": [
          "CAN is a communication network used by electronic modules in vehicles and other machines. A recorded message contains bytes; understanding which bits represent a physical quantity is a separate problem.",
          "This project asks whether paired raw messages and known measurements can identify a signal’s location, scale and offset without giving the inference engine the signal definition."
        ]
      },
      {
        "title": "Current study",
        "text": [
          "I’m exploring this problem through ENGG*2910, Mathematics for Artificial Intelligence. The focus is understanding how a mathematical fit becomes a useful inference tool, and how to assess whether a recovered signal is correct.",
          "The linked course repository separates simulation, candidate-field search, least-squares regression and evaluation into distinct components. That structure makes it possible to study each part of the inference process."
        ]
      },
      {
        "title": "How the pipeline works",
        "bullets": [
          "Generate deterministic NMEA 2000 or SAE J1939 traffic with synchronized physical measurements.",
          "Search possible bit positions and field widths, then fit a scale and offset using least squares.",
          "Rank candidate interpretations using fit quality and pairing coverage.",
          "Evaluate against ground truth only after inference. Keep the answer key separate from discovery inputs."
        ]
      },
      {
        "title": "Scope and next steps",
        "text": [
          "Current experiments use simulated traffic. Moving to real vehicle data would introduce additional challenges around measurement quality, synchronization and validation.",
          "The next study is to examine how observation count and measurement noise affect recovery, then document a small reproducible experiment and the limitations of the model."
        ]
      }
    ]
  },
  {
    "slug": "voxa-automations",
    "title": "Voxa Automations",
    "category": "Voice · System integration",
    "year": "2026",
    "status": "Summer prototypes",
    "role": "Founder & automation developer",
    "tools": "Node.js · Twilio · OpenAI · Supabase",
    "summary": "Voice receptionist prototypes and property-maintenance intake workflows.",
    "description": "My summer venture exploring AI receptionists and property-management maintenance intake: connecting calls, saved requests, staff alerts and demonstrations of after-hours routing.",
    "flow": [
      {
        "title": "Call intake",
        "detail": "A caller describes their request through a voice prototype."
      },
      {
        "title": "Save the request",
        "detail": "Webhooks connect the call workflow to Supabase storage."
      },
      {
        "title": "Notify staff",
        "detail": "SMS notifications support staff follow-up."
      }
    ],
    "sections": [
      {
        "title": "Why I started Voxa",
        "text": [
          "I started Voxa Automations to explore a practical problem: how can a business capture an inquiry when staff are busy, and turn it into something they can follow up on?",
          "The early work focused on voice receptionist prototypes for business inquiries. I later narrowed the demonstrations toward landlords and property managers, where tenant maintenance requests need enough context and a clear route to the right person."
        ]
      },
      {
        "title": "My role",
        "text": [
          "As founder and automation developer, I worked across the technical prototype and how it was presented: connecting services, investigating issues, designing call scenarios and building demonstrations for prospective users."
        ],
        "bullets": [
          "Built an AI receptionist prototype with Node.js, Twilio and OpenAI APIs so callers could describe their needs and leave a request for staff follow-up.",
          "Connected call-handling webhooks to Supabase storage and SMS notifications, moving a phone inquiry into a saved lead and a staff alert.",
          "Created a property-management call simulation and booking pages to demonstrate request intake, urgency checks and on-call escalation.",
          "Developed a separate lead-finding tool to support business discovery and outreach, including qualification filters, notes, call tracking and Excel export."
        ]
      },
      {
        "title": "From a conversation to a request",
        "text": [
          "The useful part of the prototype was the handoff after the conversation. A caller could describe what they needed, while the connected workflow saved the request and alerted staff to follow up.",
          "Twilio provided the phone and messaging connection; Node.js handled the backend and webhooks; OpenAI APIs supported the conversational prototype; and Supabase stored request information. Bringing those pieces together meant following the request across multiple services rather than treating the voice interface as the whole product."
        ]
      },
      {
        "title": "The property-management direction",
        "text": [
          "The later demonstrations focused on tenant maintenance intake and after-hours routing. The goal was to show how a request could be collected, checked for urgency and directed toward staff or an on-call contact.",
          "I created call scenarios and booking pages so prospective users could see the proposed process. These property-management scenarios were simulations and demonstrations; the connected receptionist and notification workflow was prototype development."
        ]
      },
      {
        "title": "Iteration and troubleshooting",
        "text": [
          "I investigated API calls, filtering logic and data persistence as the prototypes developed. The related Lead Finder made those issues especially visible: a useful list needed relevant search results, working website filters and a way to preserve follow-up notes.",
          "I also refined how the idea was explained. Moving from a broad receptionist concept to property-management scenarios made the demonstrations more concrete and helped me practise discussing a workflow in terms of the user’s day-to-day work."
        ]
      },
      {
        "title": "What the work developed",
        "bullets": [
          "Practical integration experience with APIs, webhooks, database storage and SMS notifications.",
          "Troubleshooting across a browser interface, backend service and external API responses.",
          "Breaking a business process into intake, storage, notification and human follow-up.",
          "Explaining technical workflows through call simulations, website pages and demonstrations."
        ]
      },
      {
        "title": "The Voxa website",
        "text": [
          "The public website presents a tenant-request workflow spanning phone, text and email. The process collects property and unit information, the issue, urgency signals and a callback number, then applies predefined routing rules.",
          "The website includes call simulations for an active water leak, no heat after hours and a routine plumbing request. These scenarios show a structured handoff: routine requests become records for the team, while urgent phone scenarios demonstrate a live transfer to an approved on-call contact.",
          "This gives visitors a concrete way to understand the service direction alongside the technical prototype work documented here."
        ]
      },
      {
        "title": "Outcome",
        "outcome": "Receptionist prototypes, connected intake workflows and property-management demonstrations developed during April–August 2026.",
        "text": [
          "Voxa brought together software development, system integration and entrepreneurship in one summer project. My portfolio documents the prototypes and my contributions, while the Voxa website presents the business and its service direction."
        ]
      }
    ],
    "website": "https://voxaautomations.ca/"
  },
  {
    "slug": "voxa-lead-finder",
    "title": "Voxa Lead Finder",
    "category": "Web app · APIs",
    "year": "2026",
    "status": "Functional prototype",
    "role": "Developer",
    "tools": "JavaScript · Express · Google Places",
    "summary": "Business discovery, website filtering and follow-up in one workflow.",
    "description": "A prospecting prototype that finds businesses by type and location, filters website availability and keeps outreach notes alongside the results.",
    "repo": "https://github.com/KaelanP2007/Voxa-lead-finder",
    "flow": [
      {
        "title": "Find",
        "detail": "Search Google Places by business type and location."
      },
      {
        "title": "Qualify",
        "detail": "Filter website availability and review heuristic lead scores."
      },
      {
        "title": "Follow up",
        "detail": "Track call status, add notes and export to Excel."
      }
    ],
    "sections": [
      {
        "title": "The problem",
        "text": [
          "While exploring services through Voxa, I needed a faster way to find relevant local businesses and keep track of follow-up. Searching and maintaining a separate list created repetitive work."
        ]
      },
      {
        "title": "Implementation",
        "bullets": [
          "Built a JavaScript frontend and a Node.js/Express backend around the Google Places API.",
          "Added filters for business type, location and website availability.",
          "Implemented heuristic lead scoring, called/not-called tracking, notes and Excel export.",
          "Investigated filtering and data-persistence issues while refining the prototype."
        ]
      },
      {
        "title": "A useful design trade-off",
        "text": [
          "The repository stores leads in a local JSON file. This keeps the prototype straightforward to run, but it means hosting persistence matters: ephemeral disk can lose data on redeployment.",
          "A durable database is a sensible next step before treating it as a long-term CRM. The score is also a transparent heuristic, not a prediction of whether a business will buy."
        ]
      },
      {
        "title": "Result",
        "outcome": "A single workflow for search, qualification, follow-up and export.",
        "text": [
          "The public repository includes setup instructions and documents the storage trade-off. The next iteration would focus on durable storage and testing the filters against a wider range of business listings."
        ]
      }
    ]
  },
  {
    "slug": "tic-tac-toe",
    "title": "Tic-tac-toe in C",
    "category": "C · Programming",
    "year": "2025",
    "status": "Completed course project",
    "role": "Student programmer",
    "tools": "C · Game logic · Console interface",
    "summary": "Configurable boards and computer opponents in a console game.",
    "description": "A programming project with friend and computer modes, selectable difficulty and configurable board sizes from 3 × 3 to 10 × 10.",
    "sections": [
      {
        "title": "The brief",
        "text": [
          "Create a playable tic-tac-toe game in C. The program needed to support different ways to play while maintaining a consistent board state and handling player input."
        ]
      },
      {
        "title": "What I implemented",
        "bullets": [
          "Friend mode and computer mode for two-player and single-player games.",
          "Computer move selection with selectable difficulty.",
          "Configurable boards from 3 × 3 to 10 × 10 within the same program.",
          "Board-state tracking and input validation for a console interface."
        ]
      },
      {
        "title": "Engineering focus",
        "text": [
          "Configurable board sizes make the logic more interesting than a single fixed board: the display, move selection and state handling need to work together as settings change.",
          "The project gave me practice breaking a program into smaller responsibilities and turning a set of game rules into executable logic."
        ]
      },
      {
        "title": "Outcome",
        "outcome": "A playable C project with multiple modes, difficulties and board sizes.",
        "text": [
          "The finished coursework brought input handling, game state and computer move selection together in one configurable program."
        ]
      }
    ]
  },
  {
    "slug": "vex-robotics",
    "title": "VEX robotics",
    "category": "Robotics · Teamwork",
    "year": "High school",
    "status": "Completed team project",
    "role": "Robotics team vice president",
    "tools": "VEX · Mechanical assembly · Programming",
    "summary": "Mechanical work, code and hands-on robotics leadership.",
    "description": "A separate robotics team project at St. Marcellinus, combining mechanical contribution, programming and helping others learn Arduino basics.",
    "sections": [
      {
        "title": "The context",
        "text": [
          "As vice president of my high school robotics team, I helped with design, building and programming. The VEX robot was a separate project from the Arduino wheelchair built at university."
        ]
      },
      {
        "title": "My contribution",
        "bullets": [
          "Contributed mechanical work and code to the VEX robot.",
          "Worked with teammates through gameplay strategy, prototyping and testing, coordinating across mechanical and software work.",
          "Taught Arduino basics to help other students get started with robotics."
        ]
      },
      {
        "title": "Outcome",
        "outcome": "The VEX robot completed its assigned task.",
        "text": [
          "The work helped me connect mechanical decisions with software behavior and practise explaining technical ideas to teammates. It also established the hands-on foundation I carried into university engineering projects."
        ]
      }
    ]
  }
];
