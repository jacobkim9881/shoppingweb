export default function idN(url) {
    let reg = /\d*$/

    return url.match(reg)[0];
}