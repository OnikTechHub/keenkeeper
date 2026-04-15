import FriendsCard from './FriendsCard';
import { GridLoader} from 'react-spinners';
import useData from '../../../hooks/useData';

const AllFriends = () => {
    const { friends, loading } = useData();

    if (loading) return (
        <div className='flex justify-center items-center h-64'>
            <GridLoader color='#244D3F' />
        </div>
    );

    return (
        <div className='w-11/12 md:w-10/12 mx-auto pb-20'>
        
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {friends.map(friend => (
                    <FriendsCard key={friend.id} friend={friend} />
                ))}
            </div>
        </div>
    );
};

export default AllFriends;