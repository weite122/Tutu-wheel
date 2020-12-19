export default {
  firstDayOfMonth(date) {
    let [year, month, day] = getYearMonthDay(date)
    return new Date(year, month, 1)
  },
  lastDayOfMonth(date) {
    let [year, month, day] = getYearMonthDay(date)
    return new Date(year, month + 1, 0)
  },
  getYearMonthDay
}

function getYearMonthDay(date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  let day = date.getDate()
  return [year, month, day]
}