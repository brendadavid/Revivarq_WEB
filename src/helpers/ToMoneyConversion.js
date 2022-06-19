const toMoneyConversion = (currency, digits, dot, transform) => {
    let n, c, d, t, s, i, j;
    n = currency;
    digits = Math.abs(digits)
    c = isNaN(digits) ? 2 : digits;
    d = dot === undefined ? "," : dot;
    t = transform === undefined ? "." : transform;
    s = n < 0 ? "-" : "";
    n = Math.abs(Number(n) || 0)
    i = String(parseInt(n.toFixed(c)));
    j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.slice(0, j) + t : "") + i.slice(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

export default toMoneyConversion;