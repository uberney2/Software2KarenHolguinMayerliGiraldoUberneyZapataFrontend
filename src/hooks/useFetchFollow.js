import {useEffect, useState} from 'react'
import {getFollowers} from '../services/getFollowers';
import {getFollowings} from '../services/getFollowings';
import { useAuth } from '../components/auth/AuthProvider';

export const useFetchFollow = (id) => {
    const[followers, setFollowers] = useState([]);
    const[followings, setFollowings] = useState([]);
    const[isLoading, setIsLoading] = useState(true); 
    const auth = useAuth();

    const getAllFollowers = async () => {
        const token = auth.getToken();
        const followers = await getFollowers(token, id);
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
    }, []);

    return {
        followers,
        followings,
        isLoading
    }
}