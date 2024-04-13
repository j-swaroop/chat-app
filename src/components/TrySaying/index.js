import './index.css'

const trySayingData = [
    {
        id: 1,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1712733736/travel-g5834cbbb2_1280-sixteen_nine_m7dmxd.jpg',
        title: 'Who Would Win',
        choices: ['Batman vs Superman', 'Knight vs Samurai', 'Lebron James vs Micheal b jordan']
    },
    {
        id: 2,
        imgUrl: 'https://characterai.io/i/80/static/avatars/Polyglot.png?webp=true&anim=0',
        title: 'Elon Musk',
        choices: ['Why did you buy twitter', 'What do you think about jeff', 'If you could time travel?']
    },
    {
        id: 3,
        imgUrl: 'https://res.cloudinary.com/drnrrd97f/image/upload/v1707577083/girl_zkwnyv.webp',
        title: 'Alternate timeline',
        choices: ['What if I invented a portal gun', 'Access to my personal timemachine', 'Make me negotiator']
    },
    {
        id: 4,
        imgUrl: 'https://characterai.io/i/80/static/avatars/LibrarianLinda.png?webp=true&anim=0',
        title: 'Debate Champion',
        choices: ['Starwars is overrated', 'Pepsi is better than cococola', 'cats are better than dogs']
    }
]

const TrySaying = () => (
    <ul className='unoordered-list'>
        {trySayingData.map(item => (
            <li key={item.id} className='try-saying-item'> 
                <div className='try-saying-img-title'>
                    <img src={item.imgUrl} alt={item.title} className='try-saying-img' />
                    <p className='try-saying-title'> {item.title}</p>
                </div>
                
                <ul className='unordered-choicel-list'>
                    {item.choices.map(eachChoice => <li className='each-choice'> {eachChoice}</li>)}
                </ul>
            </li>
        ))}

    </ul>
)

export default TrySaying