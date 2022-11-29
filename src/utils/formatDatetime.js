import dayjs from "dayjs";

function stamp2str(timestamp) {
    return dayjs.unix(timestamp).format("YYYY-MM-DD HH:mm");
}

function str2stamp(str) {
    return dayjs(str).unix();
}

export { stamp2str, str2stamp };