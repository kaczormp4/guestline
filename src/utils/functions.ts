export const HandleChangeImageFc = (diretion: string, length: number, currentImg: number, setImgFunction: Function) => {
    if (length > 1) {
        if (diretion === 'left') {
            if (currentImg === 0) {
                setImgFunction(length - 1)
            }
            else {
                setImgFunction(currentImg - 1)
            }
        } else if (diretion === 'right') {
            if (currentImg === length - 1) {
                setImgFunction(0)
            }
            else {
                setImgFunction(currentImg + 1)
            }
        }
    }
}