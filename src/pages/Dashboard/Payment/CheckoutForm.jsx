import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useBookedCamp from "../../../hooks/useBookedCamp";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/useUser";


const CheckoutForm = ({ participantInfo }) => {
    const stripe = useStripe();
    const elements = useElements();

    const price = participantInfo?.campFee;
    //console.log(price);

    const navigate = useNavigate();
    const [, refetch] = useBookedCamp();
    const [currentUser] = useUser();
    const axiosSecure = useAxiosSecure();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    //console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, price])


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log(error.message);
            setError(error.message);
        }
        else {
            console.log(paymentMethod);
            setError('');
        }


        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: participantInfo?.name || 'anonymous',
                    email: participantInfo?.email || 'anonymous',
                }
            }
        })
        if (confirmError) {
            console.log(confirmError.message);
            setError(confirmError.message);
        }
        else {
            console.log(paymentIntent);
            if (paymentIntent?.status === 'succeeded') {
                setError('');
                setTransactionId(paymentIntent.id);


                const payment = {
                    email: currentUser?.email,
                    name: participantInfo?.name,
                    price: price,
                    campName: participantInfo?.campName,
                    date: new Date(),
                    campDate: participantInfo?.date,
                    transactionId: paymentIntent.id,
                    regId: participantInfo?._id,
                    userId: currentUser?._id,
                    campId: participantInfo?.campId,
                    status: 'pending'
                }
                const res = await axiosSecure.post('/payment', payment);
                //console.log(res);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Payment Successful!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="input input-bordered p-4" options={{
                style: {
                    base: {
                        border: '1px solid gray',
                        fontSize: '16px',
                        color: 'blue',
                        '::placeholder': {
                            color: 'black',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }} />
            <div className="flex justify-center">
                <button type="submit" disabled={!stripe || !clientSecret} className="btn btn-sm bg-sky-600 text-white mt-4">
                    Pay
                </button>
            </div>
            <p className="text-red-600 text-sm">{error}</p>

            {
                transactionId && <p className="text-green-600 text-sm">Payment Successful. Transaction ID: {transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;