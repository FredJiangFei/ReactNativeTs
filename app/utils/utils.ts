const readFile = file => {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
};

const formToFormData = (form, ignoreProperty) => {
    const formData = new FormData();
    Object.keys(form).forEach(name => {
        if (!Array.isArray(ignoreProperty) || !ignoreProperty.find(x => x === name)) {
            formData.append(name, form[name]);
        }
    });
    return formData;
};

const toQueryParams = queryParams => {
    if (!queryParams) return '';

    var params = Object.keys(queryParams)
        .filter(item => queryParams[item])
        .map(item => `${item}=${queryParams[item]}`)
        .join('&');

    return params;
};

const isGuidEmpty = id => {
    return !id || id.replace(/[0-]/g, '') == '';
};

const generateUUID = () => {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
};

const numberToOrdinal = (value) => {
    if (value === 1) return `${value}st`;
    if (value === 2) return `${value}nd`;
    if (value === 3) return `${value}rd`;

    return `${value}th`;
};

const getLocationQueryString = (name) => {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substring(1).match(reg);
    return r ? r[2] : null;
}

export default {
    readFile,
    formToFormData,
    toQueryParams,
    isGuidEmpty,
    generateUUID,
    numberToOrdinal,
    getLocationQueryString
};
