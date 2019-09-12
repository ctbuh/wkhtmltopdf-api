// not all! only those useful
// null -> will not be sent
const options = {
    dpi: 96, // 72 better quality?
    imageDpi: 600,
    imageQuality: 94,
    lowQuality: null,

    marginBottom: null,
    marginLeft: '10mm',
    marginRight: '10mm',
    marginTop: null,

    orientation: 'Portrait',
    pageSize: 'A4',
    title: null,

    outline: null, // enabled by default
    noOutline: null, // not set by default

    background: null, // default
    noBackground: null,

    cacheDir: null,

    debugJavascript: null,
    noDebugJavascript: null, // enabled by default

    disableExternalLinks: null,
    enableExternalLinks: null, // enabled by default

    disableForms: null, // default
    enableForms: null,

    images: null, // default
    noImages: null,

    disableInternalLinks: null,
    enableInternalLinks: null, // default

    disableJavascript: null,
    enableJavascript: null, // default
    javascriptDelay: 200, // msec default

    loadErrorHandling: null, // abort, ignore, or skip. Default: abort
    loadMediaErrorHandling: null, // abort, ignore, or skip. Default: ignore

    printMediaType: null,
    noPrintMediaType: null, // default

    proxy: null,

    disableSmartShrinking: null,
    enableSmartShrinking: null, // default

    viewportSize: null,
    zoom: 1,
};

function Options() {
    this.options = options;
}

// copy of merge {default, custom}
Options.prototype.serialize = function (custom) {

    let oThis = this;
    let cloned = Object.assign({}, oThis.options);

    if (typeof custom === 'object') {

        Object.keys(custom).forEach(function (key) {

            if (key in oThis.options) {
                cloned[key] = custom[key];
            }

        });
    }

    Object.keys(cloned).forEach(function (key) {

        // some items need to be excluded when sending through command line
        // TODO: what if '0' is a valid value?
        if (cloned[key] === null || cloned[key] === "" || cloned[key] === "false" || cloned[key] === '0') {
            delete cloned[key];
        }

        // strict type! -> if true, will be included in command line but without value
        if (cloned[key] === "true" || cloned[key] === '1') {
            cloned[key] = true;
        }

    });

    return cloned;
};

module.exports = Options;

