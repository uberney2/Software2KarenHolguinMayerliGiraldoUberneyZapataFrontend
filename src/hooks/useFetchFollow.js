import {useEffect, useState} from 'react'
import {getFollowers} from '../services/getFollowers';
import {getFollowings} from '../services/getFollowings';
import { useAuth } from '../components/auth/AuthProvider';

export const useFetchFollow = (id, idUserLoged = '0') => {
    const[followers, setFollowers] = useState([]);
    const[followings, setFollowings] = useState([]);
    const[isFollowing, setIsFollowing] = useState(false);
    const[isLoading, setIsLoading] = useState(true); 
    const auth = useAuth();

    const getAllFollowers = async () => {
        const token = auth.getToken();
        const followers = await getFollowers(token, id);
        const isFollowed = followers.some(follower => follower._id === idUserLoged)
        console.log(isFollowed)
        if(isFollowed){
            setIsFollowing(true);
        }
        setFollowers(followers);
        setIsLoading(false);
    }

    const getAllFollowings = async () => {
        const token = auth.getToken();
        const followings = await getFollowings(token, id);
        setFollowings(followings);
        setIsLoading(false);
    }

    useEffect(() => {
        getAllFollowers();
        getAllFollowings();
    }, [id]);

    return {
        followers,
        followings,
        isLoading,
        refetchFollowers: getAllFollowers,
        isFollowing
    }
}