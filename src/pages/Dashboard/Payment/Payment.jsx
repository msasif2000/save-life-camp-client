import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_OK)
const Payment = () => {
    const participantInfo = useLoaderData().data;
    //console.log(participantInfo);
    return (
        <div className="mt-6">
            <h2 className="text-2xl text-center font-bold my-12">Pay your Camp Fees for Reserve a seat</h2>
            <div className="px-20 p-8">
                <Elements stripe={stripePromise}>
                    <CheckoutForm participantInfo={participantInfo}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;