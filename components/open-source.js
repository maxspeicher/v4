'use strict';

class OpenSource extends React.Component {
    render() {
        const projects = MAX.content.openSource;
        const entries = [];

        for (var i=0; i<projects.length; ++i) {
            entries.push(
                e('p', null,
                    e('span', { className: 'margin-right--inline'}, e('a', { href: projects[i].link, target: '_blank' }, projects[i].title)),
                    projects[i].groupProject ? e('span', { className: 'secondary' }, 'contributor') : ''
                )
            );
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
