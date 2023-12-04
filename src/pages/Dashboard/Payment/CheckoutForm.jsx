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
        });

        if (error) {
            setError(error.message);
        } else {
            paymentMethod;
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: participantInfo?.name || 'anonymous',
                    email: participantInfo?.email || 'anonymous',
                }
            }
        });

        if (confirmError) {
            setError(confirmError.message);
        } else {
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
        <form onSubmit={handleSubmit} className="">
            <CardElement className="py-2 border md:w-auto w-[350px] mx-auto" options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: 'black',
                        '::placeholder': {
                            color: '#a0aec0',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }} />

            <div className="flex justify-center mt-4">
                <button type="submit" disabled={!stripe || !clientSecret} className="btn btn-sm bg-sky-600 text-white">
                    Pay
                </button>
            </div>

            <p className="text-red-600 text-sm mt-2">{error}</p>

            {
                transactionId && <p className="text-green-600 text-sm mt-2">Payment Successful. Transaction ID: {transactionId}</p>
            }
        </form>
    );
};

export default CheckoutForm;
