export function imgUrl(name: string) {
  return new URL(`./images/${name}`, import.meta.url).href
}
export function lottieUrl(name: string) {
  return new URL(`./lottie/${name}`, import.meta.url).href
}
