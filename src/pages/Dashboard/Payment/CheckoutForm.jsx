import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";


const CheckoutForm = ({ participantInfo }) => {
    const stripe = useStripe();
    const elements = useElements();

    const {user} = useAuth();
    const price = participantInfo?.campFee;
    //console.log(price);

    const axiosSecure = useAxiosSecure();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState(''); 


    useEffect(() => {
        if (price>0){
            axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
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
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.name || 'anonymous',
                    email: user?.email || 'anonymous',
                    address: {
                        city: user?.city,
                        country: user?.country,
                        line1: user?.address,
                        postal_code: user?.zipCode
                    }
                }
            }
        })  
        if(confirmError){
            console.log(confirmError.message);
            setError(confirmError.message);
        }
        else{
            console.log(paymentIntent);
            if(paymentIntent?.status === 'succeeded'){
                setError('');
                setTransactionId(paymentIntent.id);
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: 'black',
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