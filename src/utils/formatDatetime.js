import dayjs from "dayjs";

function formatDatetime(timestamp) {
    return dayjs.unix(timestamp).format("YYYY-MM-DD HH:mm");
}

export default formatDatetime;