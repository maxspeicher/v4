'use strict';

class PrivacyPolicyContact extends React.Component {
    render() {
        const contactData = MAX.privacyPolicy;

        return e('p', null,
            contactData.name, e('br'),
            contactData.addressLine1 ? e('span', null, contactData.addressLine1, e('br')) : '',
            contactData.addressLine2 ? e('span', null, contactData.addressLine2, e('br')) : '',
            contactData.zipAndCity, e('br'),
            contactData.stateAndOrCountry, e('br'), e('br'),
            'Email: ', contactData.email
        );
    }
}

ReactDOM.render(e(PrivacyPolicyContact), document.querySelector('#contact-person'));
