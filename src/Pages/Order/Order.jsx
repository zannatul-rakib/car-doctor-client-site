import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import checkImage from "../../assets/images/checkout/checkout.png"
import OrderDataTable from "./OrderDataTable";
import { useNavigate } from "react-router-dom";


const Order = () => {
    const { user } = useContext(AuthContext)
    const [orderData, setOrderData] = useState([])
    const navigate = useNavigate();
    
    const url = `https://car-doctor-server-running.vercel.app/order?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setOrderData(data)
                }
                else {
                    navigate('/');
                }
            })
    }, [url, navigate])

    const handleDelete = id => {
        const proceed = confirm('are you sure you want to delete?')
        if (proceed) {
            fetch(`https://car-doctor-server-running.vercel.app/order/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted Successfully')
                        const remaining = orderData.filter(order => order._id !== id);
                        setOrderData(remaining);
                    }
                })
        }
    }

    const handleOrderConfirm = id => {
        fetch(`https://car-doctor-server-running.vercel.app/order/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({status: "confirm"})
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("update successfully")
                    const remaining = orderData.filter(order => order._id !== id);
                    const updated = orderData.find(order => order._id === id);
                    updated.status = 'confirm';
                    const newOrder = [updated, ...remaining];
                    setOrderData(newOrder);
                   
                }
            })
    }

    return (
        <div className="container mx-auto">
            <div className="lg:mx-20 my-20">
                <div className="mb-10 overflow-hidden rounded-md relative">
                    <img src={checkImage} className=" object-cover w-full" alt="" />
                    <h3 className="text-3xl font-bold absolute z-10 top-1/2 text-white left-20">Order</h3>
                    <div className="absolute z-20 bottom-0 text-center right-1/2 left-1/2 h-[30px] w-[200px] bg-[#ff3811]">
                        <h4 className="text-white ">Order</h4>
                    </div>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            <tbody>
                                {
                                    orderData.map(order => <OrderDataTable key={ order._id} order={order} handleDelete={handleDelete} handleOrderConfirm={handleOrderConfirm} />)
                               }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;