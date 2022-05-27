import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L43hsLULnS1QZ2keCYNTbj7JOtPSQvcM1ohAJ1ARGzgH4DlbKp38Nf2QAVHBP2l5YHA9LueIBAA5OIA3wwZS0qv00TL1GcLZN');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/myOrder/${id}`;

    const {data: myOrder, isLoading} = useQuery(['myOrder', id], () => fetch(url, {
        method: "GET",
        headers: {
          'authorization': `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then(res=> res.json()));
      
      if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-screen'>
            <h2 className="text-center text-2xl font-bold text-blue-700 mt-5">
                Payment
            </h2>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {myOrder.name}</p>
                    <h2 class="card-title">Please Pay for {myOrder.tool}</h2>
                    <p>Your Order Quantity : <span className='text-orange-700'>{myOrder.quantity}</span> from {myOrder.address}</p>
                    <p>Your Number: {myOrder.phone}</p>
                    <p>Your Email: {myOrder.email}</p>
                    <p>Please pay: ${myOrder.price}</p>
                </div>
            </div>
            
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm myOrder={myOrder} />
                    </Elements>
                </div>
            </div>
            
        </div>
    );
};

export default Payment;