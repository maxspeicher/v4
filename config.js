'use strict';

const MAX = {

    deleteCookiesForDomains: ['.maxspeicher.com'], // necessary to be able to keep GDPR requirements to a minimum

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
                    link: 'https://2008.maxspeicher.com/2020/04/11/2-research-papers-accepted-at-international-conferences-1-best-paper-award/',
                },
                {
                    title: 'MRAT: The Mixed Reality Analytics Toolkit',
                    authors: ['M. Nebeling', 'M. Speicher', 'X. Wang', 'S. Rajaram', 'B.D. Hall', 'Z. Xie', 'A.R.E. Raistrick', 'M. Aebersold', 'E.G. Happ', 'J. Wang', 'Y. Sun', 'L. Zhang', 'L. Ramsier', 'R. Kulkarni'],
                    isNew: true,
                    link: 'https://www.mi2lab.com/research/mrat/',
                    award: '🏆 Best Paper Award'
                },
                {
                    title: 'What is Mixed Reality?',
                    authors: ['M. Speicher', 'B.D. Hall', 'M. Nebeling'],
                    link: 'https://2008.maxspeicher.com/2019/12/27/chi-2019-what-is-mixed-reality/',
                    award: '🏅 Best Paper Honorable Mention'
                },
                {
                    title: 'XD-AR: Challenges and Opportunities in Cross-Device Augmented Reality Application Development',
                    authors: ['M. Speicher', 'B.D. Hall', 'A. Yu', 'B. Zhang', 'H. Zhang', 'J. Nebeling', 'M. Nebeling'],
                    link: 'https://dl.acm.org/doi/abs/10.1145/3229089',
                    award: '🏆 Best Paper Award'
                },
                {
                    title: 'GestureWiz: A Human-Powered Gesture Design Environment for User Interface Prototypes',
                    authors: ['M. Speicher', 'M. Nebeling'],
                    link: 'https://dl.acm.org/doi/abs/10.1145/3173574.3173681'
                },
                {
                    title: 'Search Interaction Optimization: A Human-Centered Design Approach',
                    authors: ['M. Speicher'],
                    link: 'https://2008.maxspeicher.com/2015/10/29/the-search-interaction-optimization-toolkit-the-essence-of-my-phd-thesis/'
                },
                {
                    title: 'Inuit: The Interface Usability Instrument',
                    authors: ['M. Speicher', 'A. Both', 'M. Gaedke'],
                    link: 'https://2008.maxspeicher.com/2015/10/10/inuit-the-interface-usability-instrument/'
                },
                {
                    title: 'Ensuring Web Interface Quality through Usability-Based Split Testing',
                    authors: ['M. Speicher', 'A. Both', 'M. Gaedke'],
                    link: 'https://2008.maxspeicher.com/2014/06/17/usability-based-split-testing-or-how-to-infer-web-interface-usability-from-user-interactions/'
                }
            ]
        },
        writing: [
            {
                title: 'How to become a UX designer — no matter what you studied at uni',
                publication: 'The Next Web',
                isNew: true,
                link: 'https://thenextweb.com/growth-quarters/2020/09/28/how-to-become-a-ux-designer-no-matter-what-you-studied-at-uni/'
            },
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
                title: 'MaxSpeicher.com',
                multipleLinks: {
                    v1: 'https://github.com/maxspeicher/v1',
                    v2: 'https://github.com/maxspeicher/v2',
                    v3: 'https://github.com/maxspeicher/v3'
                }
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
                title: 'Search Interaction Optimization (my Ph.D. thesis)',
                link: 'https://www.maxspeicher.com/phdthesis'
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
    footer: {},
    privacyPolicy: {
        name: 'Dr.-Ing. Maximilian Speicher',
        addressLine1: '℅ C&A Mode GmbH & Co. KG, Geschäftsbereich eCommerce',
        addressLine2: 'Wanheimer Straße 70',
        zipAndCity: '40472 Düsseldorf',
        stateAndOrCountry: 'Germany',
        email: '__maximilian.speicher__@canda.com (underscores have been added for spam protection)'
    }

};