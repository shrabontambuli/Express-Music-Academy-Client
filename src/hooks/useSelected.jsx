import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelected = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: select = []} = useQuery({
        queryKey: ['classes', user?.email],
        // queryFn: async () =>{
        //     const res = await fetch(`https://music-academy-eta.vercel.app/selected?email=${user?.email}`,{headers:{
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`)
            return res.data;
        }
      })
      return [select , refetch];
};

export default useSelected;