'use strict';

class OpenSource extends React.Component {
    render() {
        const projects = MAX.content.openSource;
        const entries = [];

        for (var i=0; i<projects.length; ++i) {
            var project = projects[i];

            if (project.link) {
                entries.push(
                    e('p', null,
                        e('span', { className: 'margin-right--inline'}, e('a', { href: project.link, target: '_blank' }, project.title)),
                        project.groupProject ? e('span', { className: 'secondary' }, 'Contributor') : ''
                    )
                );
            } else if (project.multipleLinks) {
                var links = [];

                for (var k in project.multipleLinks) {
                    if (links.length) {
                        links.push(' • ');
                    }

                    links.push(
                        e('a', { href: project.multipleLinks[k], target: '_blank' }, k)
                    );
                }
                
                entries.push(
                    e('p', null,
                        e('span', { className: 'margin-right--inline'}, project.title),
                        ...links,
                        project.groupProject ? e('span', { className: 'secondary' }, 'Contributor') : ''
                    )
                );
            }
            
        }

        return e('div', null,
            ...entries,
            e('p', null,
                e('span', { className: 'lighter' } , 'More on '),
                e('a', { href: 'https://github.com/maxspeicher', target: '_blank'},
                    e('i', { className: 'fab fa-github' }),
                    ' Github'
                ),
                e('span', { className: 'lighter' } , ' and '),
                e('a', { href: 'https://codepen.io/maxspeicher', target: '_blank'},
                    e('i', { className: 'fab fa-codepen' }),
                    ' CodePen'
                )
            )
        );
    }
}

ReactDOM.render(e(OpenSource), document.querySelector('#open-source'));
