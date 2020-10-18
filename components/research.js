'use strict';

class Research extends React.Component {
    render() {
        const highlightAuthor = MAX.content.research.highlightAuthor;
        const research = MAX.content.research.publications;
        const entries = [];

        var highlightAuthorHasBeenMentioned = false;

        for (var i=0; i<research.length; ++i) {
            var authors = research[i].authors;
            var authorList = [];

            for (var j=0; j<authors.length; ++j) {
                if (authors[j] === highlightAuthor) {
                    authorList.push(e('strong', null, authors[j]));
                    highlightAuthorHasBeenMentioned = true;
                } else {
                    authorList.push(authors[j]);
                }

                if (j === 2 && authors.length > 4 && highlightAuthorHasBeenMentioned) {
                    authorList.push(e('i', null, ' et al.'));
                    break;
                } else if (j === authors.length-2) {
                    authorList.push(', & ');
                } else if (j < authors.length-2) {
                    authorList.push(', ');
                }
            }

            entries.push(
                e('p', null,
                    research[i].isNew ? e(NewFlag, { className: 'margin-right--inline', style: { height: '1em' }, type: 2 }) : '',
                    e('span', { className: 'margin-right--inline'}, e('a', { href: research[i].link, target: '_blank' }, research[i].title)),
                    e('span', { className: 'secondary' }, ...authorList),
                    research[i].award ? e('span', { className: 'block small-caps' }, research[i].award) : ''
                )
            );
        }

        return e('div', null,
            ...entries,
            e('p', null,
                e('span', { className: 'lighter' } , 'More on '),
                e('a', { href: 'https://scholar.google.com/citations?user=uHCRUlQAAAAJ&hl=en', target: '_blank'}, '🎓 Google Scholar')
            )
        );
    }
}

ReactDOM.render(e(Research), document.querySelector('#research'));
