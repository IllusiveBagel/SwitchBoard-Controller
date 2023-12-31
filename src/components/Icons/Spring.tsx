interface SpringType {
    color: string;
}

const Spring: React.FC<SpringType> = ({ color }) => {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" className='spring' width='15' height='30'>
            <path d="M13 27.929s-3.489-.472-5.677-.962C5.16 26.483 2 25.498 2 25.498m11-.507s-3.489-.472-5.677-.962C5.16 23.546 2 22.561 2 22.561m11-.507s-3.489-.472-5.677-.962C5.16 20.61 2 19.624 2 19.624m11-.507s-3.489-.472-5.677-.962C5.16 17.671 2 16.686 2 16.686m11-.506s-3.489-.473-5.677-.962C5.16 14.734 2 13.749 2 13.749m11-.507s-3.489-.472-5.677-.962C5.16 11.797 2 10.813 2 10.813m11-.507s-3.489-.472-5.677-.962C5.16 8.86 2 7.875 2 7.875m11-.507s-3.489-.472-5.677-.962C5.16 5.922 2 4.937 2 4.937m11-.507s-3.489-.472-5.677-.961C5.16 2.985 2.355 2 2.355 2" stroke={color} strokeLinecap="round"></path>
            <path d="M2 27.929s3.489-.472 5.677-.962C9.84 26.483 13 25.498 13 25.498m-11-.507s3.489-.472 5.677-.962C9.84 23.546 13 22.561 13 22.561m-11-.507s3.489-.472 5.677-.962C9.84 20.61 13 19.624 13 19.624m-11-.507s3.489-.472 5.677-.962C9.84 17.671 13 16.686 13 16.686M2 16.18s3.489-.473 5.677-.962C9.84 14.734 13 13.749 13 13.749m-11-.507s3.489-.472 5.677-.962C9.84 11.797 13 10.813 13 10.813m-11-.507s3.489-.472 5.677-.962C9.84 8.86 13 7.875 13 7.875M2 7.368s3.489-.472 5.677-.962C9.84 5.922 13 4.937 13 4.937M2 4.43s3.489-.472 5.677-.961C9.84 2.985 12.645 2 12.645 2" stroke={color} strokeWidth="2" strokeLinecap="round"></path>
            <path d="M2.4 27.928h10.1M2.4 2h10.1" stroke={color} stroke-width="3" strokeLinecap="round"></path>
        </svg>
    )
}

export default Spring