import noImage from "../img/No_image_available.svg.png"

export function slicePublicationTime(str) {
    const [date, time] = str.split("T")

    const formattedDate = date.split("-").slice(1).join("-")
    const formattedTime = time.split(":").slice(0,2).join(":")

    return `${formattedDate} - ${formattedTime}`
}

export function imageHelper(imgSrc) {
    let src = imgSrc

    if( !imgSrc || imgSrc.includes(".mp4") ) {
        src = noImage
    }

    return src
}