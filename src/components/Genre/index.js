import './index.css'

const Genre = props => {
    const {data} = props

    return(
        <li className='genre-title'>
            {data.genreTitle}           
        </li>
    )
}

export default Genre