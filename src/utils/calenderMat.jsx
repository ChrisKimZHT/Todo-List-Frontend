import dayjs from "dayjs";

function getCalenderMat(year, month) {
  let startDayJS = dayjs(new Date(year, month)); // 获取当月起始日dayjs对象
  let startWeekday = startDayJS.day();
  let tempDayJS = startDayJS;
  let resultMat = []; // 结果矩阵
  let weekList = [];  // 周矩阵
  for (let i = 0; i < startWeekday; i++) { // 先补全上个月的空缺
    weekList.push(null);
  }
  while (tempDayJS.month() === month) {
    weekList.push(tempDayJS);
    tempDayJS = tempDayJS.add(1, 'day');
    if (weekList.length === 7) { // 存到完整一周后加入结果矩阵
      resultMat.push([...weekList]);
      weekList.splice(0, weekList.length); // 清空
    }
  }
  if (weekList.length > 0) { // 如果还剩不全的一周则补全后加上
    while (weekList.length < 7)
      weekList.push(null);
    resultMat.push(weekList);
  }
  return resultMat;
}

export default getCalenderMat;