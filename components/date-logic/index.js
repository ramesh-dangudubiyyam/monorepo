module.exports = function getDate(
    locale = 'en-US',
    options = { eekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
) {
    console.log('Test');
    return new Date().toLocaleDateString(locale, options);
}