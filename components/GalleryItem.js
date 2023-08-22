import ImageLoader from './ImageLoader'

const GalleryItem = ({
  thumb,
  video,
  imgAlt,
  caption,
  light,
  className,
  ...props
}) => (
     
  <a
    {...props}
    data-sub-html={`<h6 class='fs-sm text-light'>${imgAlt ? imgAlt : caption}</h6>`}
    className={`gallery-item d-flex btn btn-lg ${video ? ' video-item' : ''}${className ? ` ${className}` : ''}`}
  >
    {
      
    thumb && <ImageLoader
      src={thumb[0]}
      width={`100%`}
      height={`100%`}
      alt={caption ? caption : imgAlt}
      light={light ? 1 : 0}
    />
    }
    {/* {caption && <span className='gallery-item-caption'>{caption}</span>} */}
        </a>
            
)

export default GalleryItem
