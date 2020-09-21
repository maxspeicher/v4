'use strict';

class Work extends React.Component {
    render() {
        const work = MAX.content.work;
        const entries = [];

        for (var i=0; i<work.length; ++i) {
            entries.push(
                e('p', null,
                    e('span', { className: 'block tertiary' }, work[i].when[0], ' ‒ ', work[i].when[1]),
                    e('span', { className: 'margin-right--inline'}, e('a', { href: work[i].link, target: '_blank' }, work[i].where)),
                    e('span', { className: 'secondary' }, work[i].what.join(', '))
                )
            );
        }

        return e('div', null,
            ...entries,
            e('p', null,
                e('span', { className: 'lighter' } , 'More on '),
                e('a', { href: 'https://www.linkedin.com/in/maximilianspeicher/', target: '_blank'}, e('i', { className: 'fab fa-linkedin' }), ' LinkedIn')
            )
        );
    }
}

ReactDOM.render(e(Work), document.querySelector('#work'));
