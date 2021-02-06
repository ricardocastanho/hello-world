const wait = (timeout = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}

const immediate = (fn) => {
  return new Promise(function internalTask (resolve, reject) {
    setImmediate(async function callPull () {
      fn().then(resolve, reject)
    })
  })
}

module.exports = { wait, immediate }
