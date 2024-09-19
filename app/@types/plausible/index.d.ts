type Options = {
    callback?: () => void
}

interface Window {
    plausible: (event: string, options?: Options) => void
}