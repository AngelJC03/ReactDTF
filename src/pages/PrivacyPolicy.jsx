import policyMarkup from './privacypolicy.html?raw';

function PrivacyPolicy() {
  return <main dangerouslySetInnerHTML={{ __html: policyMarkup }} />;
}

export default PrivacyPolicy;
