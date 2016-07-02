function range(head, length, interval = 1){
  const range = Array(length/interval).keys()
  return Array.from(range, value => head + value * interval)
}

module.exports = {range}
