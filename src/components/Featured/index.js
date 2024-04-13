import './index.css'

const Featured = props => {
    const {data} = props
    const {title, imgUrl, subTitle, by} = data

    return(
        <li className='featured-item'>
            <img src={imgUrl} alt={title} className='featured-img'/>
            <div className='featured-item-text-container'>
                <div className='featured-text'>
                    <p className='featured-title'> {title}</p>
                    <p className='features-by'> {by}</p>
                </div>
                <p className='featured-subtitle'> {subTitle} </p>
            </div>
        </li>
    )
}

export default Featured