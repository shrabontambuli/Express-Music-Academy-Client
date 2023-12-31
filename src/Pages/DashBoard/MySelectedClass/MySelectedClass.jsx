import { FaWallet } from 'react-icons/fa';
import useSelected from '../../../hooks/useSelected';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {
    const [classes, refetch] = useSelected();

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://music-academy-eta.vercel.app/selected/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className='w-11/12 mx-auto bg-white my-14 rounded-2xl'>
            <div className='text-center pb-10 mt-10'>
                <h3 className="text-3xl text-center font-serif font-bold text-warning">Selected Classes</h3>
            </div>
            <div className="overflow-x-auto w-11/12 mx-auto pb-6">
                <table className="table table-zebra w-full text-center">
                    {/* head */}
                    <thead className='text-lg'>
                        <tr>
                            <th>
                                #
                            </th>
                            <th> Class Image</th>
                            <th> Class Name</th>
                            <th>Payment</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((d, index) => <tr key={d._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar mx-auto">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={d.picture} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h1 className='text-xl font-serif'>{d.name}</h1>
                                </td>
                                <td>
                                    <Link to = {`/dashboard/payment/${d._id}`}>
                                        <button className='btn btn-warning rounded-full'><FaWallet /></button>
                                    </Link>
                                </td>
                                <th>
                                    <button onClick={() => handleDelete(d)} className="btn btn-circle btn-error btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClass;