export let logger = x => {
  console.error(x)
}

export function setLogger(fn) {
  logger = fn
}
