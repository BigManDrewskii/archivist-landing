declare global {
  interface Window {
    initAsciiHeroBg?: (container?: HTMLElement) => () => void
  }
}

export {}
