export const getAvatarFallback = (name: string): string => {
    const words = name.trim().split(" ");
    const letters = words.map(word => word[0].toUpperCase())
    return letters.join("");
}