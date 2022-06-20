import device_types from "@utils/contants/device_types"
import Image from "next/image"

/**
 * <BgImage>
 *
 * The new next/image optimization setup handles background images oddly
 * It requires they be foreground images placed inside of a container
 * This component abstracts that logic away for better DX
 * 
 * You can layer text and imagery on top of the background image
 * All you have to do is pass that text or imagery into this component
 * 
 * Note: all images get processed through Webpack so you must import! 
 * No absolute URLs as they will break during site generation
 *
 * @param { string } alignItems - vertical alignment of inner content
 * @param { string } imgalt - text description of the image
 * @param { string } imgsrc - url of the image, should be a JS module import
 * @param { string } justifyContent - horizontal alignment of inner content
 * @param { number } height - how tall the background image should be (default: 50vh)
 * @param { number } width - how wide image should be (default: 100%)
 * @param { string } tintOpacity - Add a black tint to the background image (default: 0)
 * @param { boolean } priority - Us for LCP content (default: false)
 * @param { string } borderRadius - border radius of the container (default: 0px)
 */
const BgImage = ({
    alignItems = 'center',
    children,
    imgalt = 'Background Image',
    imgsrc,
    mobileImgsrc = "",
    justifyContent = 'center',
    width = '100%',
    tintOpacity = "0",
    priority = false,
    borderRadius = "0px",
    deviceType,
}) => {
    return (
        <div className="outer-container">
            { ( deviceType && deviceType == device_types.MOBILE && mobileImgsrc ) ?
                <Image
                    alt={imgalt}
                    src={mobileImgsrc}
                    layout="fill"
                    objectFit="cover"
                    priority={priority}
                />
                :
                    <Image
                        alt={imgalt}
                        src={imgsrc}
                        layout="fill"
                        objectFit="cover"
                        priority={priority}
                    />
            }
            {children &&
                <div className="inner-container">
                    {children}
                </div>
            }
            <style jsx>{`
                .outer-container {
                    align-items: ${alignItems};
                    display: flex;
                    justify-content: ${justifyContent};
                    position: relative;
                    width: ${width};
                    border-radius: ${borderRadius};
                    overflow: hidden;
                }
                .outer-container:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    background: black;
                    opacity: ${tintOpacity}; 
                    z-index: 1;
                }
                .inner-container {
                    z-index: 10;
                }
            `}</style>
        </div>
    )
}

export default BgImage