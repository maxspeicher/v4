const MAX = {

    deleteCookiesForDomains: ['.maxspeicher.com'],

    header: {
        title: {
            content: '{M}ax. {S}peicher', // pick TWO letters that should be rotated on hover via {x}
            href: 'index.html'
        },
        menu: [
            {
                text: 'Consulting',
                href: 'consulting.html'
            },
            {
                text: 'Blog',
                href: 'https://2008.maxspeicher.com/'
            }
        ]
    },
    content: {
        work: [
            {
                when: ['10/18', 'present'],
                where: 'C&A',
                what: ['UX Manager', 'Product Owner'],
                link: 'http://www.c-a.com/'
            },
            {
                when: ['03/17', '09/18'],
                where: 'University of Michigan',
                what: ['Post-Doctoral Researcher'],
                link: 'https://www.mi2lab.com/'
            },
            {
                when: ['03/15', '02/17'],
                where: 'bitstars',
                what: ['VP of Customer & Data Analytics & Optimization'],
                link: 'https://www.holobuilder.com/'
            },
            {
                when: ['06/12', '12/14'],
                where: 'Unister',
                what: ['Researcher', 'Industrial Ph.D. Student'],
                link: 'https://web.archive.org/web/20130215000000*/http://www.bluekiwi.de/'
            }
        ],
        research: {
            highlightAuthor: 'M. Speicher',
            publications: [
                {
                    title: 'I Don’t Have That Much Data! Reusing User Behavior Models for Websites from Different Domains',
                    authors: ['M. Bakaev', 'M. Speicher', 'S. Heil', 'M. Gaedke'],
                    isNew: true,
                    link: 'https://www.researchgate.net/publication/342044912_I_Don\'t_Have_That_Much_Data_Reusing_User_Behavior_Models_for_Websites_from_Different_Domains',
                },
                {
                    title: 'MRAT: The Mixed Reality Analytics Toolkit',
                    authors: ['M. Nebeling', 'M. Speicher', 'X. Wang', 'S. Rajaram', 'B.D. Hall', 'Z. Xie', 'A.R.E. Raistrick', 'M. Aebersold', 'E.G. Happ', 'J. Wang', 'Y. Sun', 'L. Zhang', 'L. Ramsier', 'R. Kulkarni'],
                    isNew: true,
                    link: 'https://www.researchgate.net/publication/340136074_MRAT_The_Mixed_Reality_Analytics_Toolkit',
                    award: '🏆 Best Paper Award'
                },
                {
                    title: 'What is Mixed Reality?',
                    authors: ['M. Speicher', 'B.D. Hall', 'M. Nebeling'],
                    link: 'https://www.researchgate.net/publication/332269415_What_is_Mixed_Reality',
                    award: '🏅 Best Paper Honorable Mention'
                },
                {
                    title: 'XD-AR: Challenges and Opportunities in Cross-Device Augmented Reality Application Development',
                    authors: ['M. Speicher', 'B.D. Hall', 'A. Yu', 'B. Zhang', 'H. Zhang', 'J. Nebeling', 'M. Nebeling'],
                    link: 'https://www.researchgate.net/publication/325883101_XD-AR_Challenges_and_Opportunities_in_Cross-Device_Augmented_Reality_Application_Development',
                    award: '🏆 Best Paper Award'
                },
                {
                    title: 'GestureWiz: A Human-Powered Gesture Design Environment for User Interface Prototypes',
                    authors: ['M. Speicher', 'M. Nebeling'],
                    link: 'https://www.researchgate.net/publication/324665021_GestureWiz_A_Human-Powered_Gesture_Design_Environment_for_User_Interface_Prototypes'
                },
                {
                    title: 'Search Interaction Optimization: A Human-Centered Design Approach',
                    authors: ['M. Speicher'],
                    link: 'https://www.researchgate.net/publication/308652443_Search_Interaction_Optimization_A_Human-Centered_Design_Approach'
                },
                {
                    title: 'Inuit: The Interface Usability Instrument',
                    authors: ['M. Speicher', 'A. Both', 'M. Gaedke'],
                    link: 'https://www.researchgate.net/publication/282441105_Inuit_The_Interface_Usability_Instrument'
                },
                {
                    title: 'Ensuring Web Interface Quality through Usability-Based Split Testing',
                    authors: ['M. Speicher', 'A. Both', 'M. Gaedke'],
                    link: 'https://www.researchgate.net/publication/271269916_Ensuring_Web_Interface_Quality_through_Usability-Based_Split_Testing'
                }
            ]
        },
        writing: [
            {
                title: 'How to build and lead user experience (UX) teams',
                publication: 'UX Collective',
                isNew: true,
                link: 'https://uxdesign.cc/how-to-build-and-lead-user-experience-ux-teams-6d4b802071d0'
            },
            {
                title: '5 design methods I’ve successfully applied as a UX manager',
                publication: 'UX Collective',
                isNew: true,
                link: 'https://uxdesign.cc/5-design-methods-ive-successfully-applied-as-a-ux-manager-at-c-a-ca3e1da11b8c'
            },
            {
                title: 'What is Design Thinking?',
                publication: 'Muzli',
                link: 'https://medium.muz.li/what-is-design-thinking-4afa067cb986'
            },
            {
                title: 'How usability impacts profit: The Conversion/Usability Framework',
                publication: 'UX Collective',
                link: 'https://uxdesign.cc/the-conversion-usability-framework-3e2068edebbc'
            },
            {
                title: 'On Design Thinking',
                publication: 'The UX Blog',
                link: 'https://medium.theuxblog.com/on-design-thinking-4a4980aebe8d'
            }
        ],
        openSource: [
            {
                title: 'This Website Template',
                link: 'https://github.com/maxspeicher/maxspeicher.github.io'
            },
            {
                title: 'My Old Portfolio',
                link: 'https://github.com/maxspeicher/v3'
            },
            {
                title: 'MRAT (Mixed Reality Analytics Toolkit)',
                link: 'https://github.com/mi2lab/mrat',
                groupProject: true
            },
            {
                title: 'GestureWiz',
                link: 'https://github.com/mi2lab/gesturewiz',
                groupProject: true
            },
            {
                title: 'WaPPU (Was That Page Pleasant to Use?)',
                link: 'https://github.com/maxspeicher/wappu-service'
            }
        ],
        ringtennis: [
            {
                when: '2010‒18',
                title: 'Men\'s Captain',
                discipline: 'Germany National Ringtennis Team'
            },
            {
                when: '2003‒10',
                title: 'Coach',
                discipline: 'VfL Wehbach 1901 e. V.'
            },
            {
                when: '2018',
                title: '🏆 World Champion',
                discipline: 'Team'
            },
            {
                when: '2016',
                title: '🏅 German Champion',
                discipline: 'Men\'s Alternating Doubles'
            },
            {
                when: '2014',
                title: '🏅 German Champion',
                discipline: 'Men\'s Doubles'
            },
            {
                when: '2014',
                title: '🏆 World Champion',
                discipline: 'Team'
            },
            {
                when: '2011',
                title: '🏅 German Champion',
                discipline: 'Men\'s Alternating Doubles'
            },
            {
                when: '2008',
                title: '🏅 German Champion',
                discipline: 'Men\'s Singles'
            },
            {
                when: '2007',
                title: '🏅 German Champion',
                discipline: 'Mixed Doubles'
            },
            {
                when: '2006',
                title: '🏆 World Champion',
                discipline: 'Team'
            }
        ]
    },
    footer: {}

};