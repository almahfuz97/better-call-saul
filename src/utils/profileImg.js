
const pfp = require('../assets/profile.svg')

const profileImg = (user) => {
    return (
        <div className='relative flex items-center'>
            <img src={user?.photoURL} onError={(e) => {
                if (e.target.src !== pfp) {
                    e.target.onError = null;
                    e.target.src = pfp
                }
            }} className=' bg-transparent z-10 cursor-pointer w-12 h-12 rounded-full mr-4' />
        </div>
    )
}
