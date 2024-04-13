import './index.css'

const TryTheseItem = props => {
    const {data} = props
    const {imgUrl, title, subTitle} = data 

    
    return(
        <li className='try-these-item-container'>
            <img src={imgUrl} alt={title} className='img'/> 
            <div className='try-these-text-container'>
                <p className='try-these-title'>{title}</p>
                <p className='try-these-subtitle'> {subTitle}</p>
            </div>
        </li>
    )
}

export default TryTheseItem