'use strict';

class Writing extends React.Component {
    render() {
        const articles = MAX.content.writing;
        const entries = [];

        for (var i=0; i<articles.length; ++i) {
            entries.push(
                e('p', null,
                    // articles[i].isNew ? e('span', { className: 'block' }, e(NewFlag, { style: { height: '2em', transform: 'rotate(-23deg)' } })) : '',
                    articles[i].isNew ? e(NewFlag, { className: 'margin-right--inline', style: { height: '1em' }, type: 2 }) : '',
                    e('span', { className: 'margin-right--inline'}, e('a', { href: articles[i].link, target: '_blank' }, articles[i].title)),
                    e('span', { className: 'secondary' }, articles[i].publication)
                )
            );
        }

        return e('div', null,
            ...entries,
            e('p', null,
                e('span', { className: 'lighter' } , 'More on '),
                e('a', { href: 'https://2008.maxspeicher.com', target: '_blank'},
                    e(TwentyOhEightIcon, { style: { height: '1em', transform: 'translateY(.125em)' } }),
                    ' 2008 ‒ Tales of Design & User Experience'
                )
            )
        );
    }
}

ReactDOM.render(e(Writing), document.querySelector('#writing'));
