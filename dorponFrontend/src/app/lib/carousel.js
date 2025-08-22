export async function faceCarousel() {
    const res = await fetch(`/api/carousel`)
    const carousel = await res.json()
    return carousel;
}
