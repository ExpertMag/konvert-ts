function toString<T>(inputData:T): string | undefined {
    try {
        return JSON.stringify(inputData)
    } catch {
        return undefined
    }
}

console.log(JSON.stringify(null))