'use strict';

class Ringtennis extends React.Component {
    render() {
        const victories = MAX.content.ringtennis;
        const entries = [];

        for (var i=0; i<victories.length; ++i) {
            entries.push(
                e('p', null,
                    e('span', { className: 'block tertiary' }, victories[i].when),
                    e('span', { className: 'margin-right--inline'}, victories[i].title),
                    e('span', { className: 'secondary' }, victories[i].discipline)
                )
            );
        }

        return e('div', null, ...entries);
    }
}

ReactDOM.render(e(Ringtennis), document.querySelector('#ringtennis'));
