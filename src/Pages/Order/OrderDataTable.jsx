import { BsFillTrashFill } from 'react-icons/bs';


const OrderDataTable = ({ order, handleDelete, handleOrderConfirm }) => {
    const {_id, email, img, name, service, servicePrice, status} = order;

    return (
        <tr>
            <th>
                <span onClick={() => handleDelete(_id)} className='text-2xl cursor-pointer text-[#ff3811]'>
                    <BsFillTrashFill/>
               </span>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask rounded w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{ service}</div>
                    </div>
                </div>
            </td>
            <td>
               {name}
                <br />
                <span className="badge badge-ghost badge-sm">{ email}</span>
            </td>
            <td>{ servicePrice}</td>
            <th>
                {
                    status === "confirm" ?
                        <button className="btn text-[#29B170] bg-transparent border-[#29B170] hover:text-white hover:border-[#29B170] hover:bg-[#29B170]">Approved</button>
                        :
                        <button onClick={()=>handleOrderConfirm(_id)} className="btn bg-[#ff3811] text-white hover:bg-transparent hover:text-[#ff3811] hover:border-[#ff3811]">Pending</button>
               }
            </th>
        </tr>
    );
};

export default OrderDataTable;