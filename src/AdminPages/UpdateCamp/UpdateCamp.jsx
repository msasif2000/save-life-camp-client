import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { axiosSecure } from "../../hooks/useAxiosSecure";

const UpdateCamp = () => {
    const camp = useLoaderData().data;
    const { _id, campName, venue, audience, services, image, date, campFee, participants, professionals, details } = camp;
    //console.log(camp);


    const location = useLocation();
    const navigate = useNavigate();

    const handleUpdateCamp = e => {
        e.preventDefault();
        const form = e.target;

        const campName = form.campName.value;
        const venue = form.venue.value;
        const audience = form.audience.value;
        const image = form.image.value;
        const date = form.date.value;
        const campFee = form.campFee.value;
        const participants = form.participants.value;
        const details = form.details.value;

        const services = Array.from(form.querySelectorAll('input[name="services"]')).map(
            (input) => input.value
        );

        const professionals = Array.from(form.querySelectorAll('input[name="professionals"]')).map(
            (input) => input.value
        );

        const newCamp = { campName, venue, audience, services, image, date, campFee, participants, professionals, details };
        console.log(newCamp);

        axiosSecure.put(`/camp/${_id}`, newCamp)
            .then(res => {
               // console.log(res.data);
                if (res.data.modifiedCount) {
                    toast.success("Camp Information updated successfully!", {
                        position: toast.POSITION.TOP_CENTER, autoClose: 1500,
                    });


                    setTimeout(() => {
                        navigate(location.state?.from ? location.state.from : '/availableCamp');
                    }, 2000);
                }
            })
    }

    const addInputField = (fieldName, defaultValue) => {
        const container = document.getElementById(fieldName);
        const input = document.createElement('input');
        input.type = 'text';
        input.name = fieldName;
        input.placeholder = `Enter ${fieldName}`;
        input.defaultValue = defaultValue;  // Set defaultValue
        input.className = 'input input-bordered w-full';
        container.appendChild(input);
      };
    return (
        <div className="">
            <div className="md-container mx-auto">
                <div className="lg:p-12 md:p-6 p-4 space-y-6">
                    <h2 className="font-rancho text-4xl text-center">Update Camp Information</h2>
                    <form onSubmit={handleUpdateCamp} className="font-raleway ">
                        <div className="lg:flex justify-center gap-6">
                            <div className="w-full flex-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Camp Name</span>
                                    </label>
                                    <label className="">
                                        <input required type="text" name="campName" defaultValue={campName} className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Venue</span>
                                    </label>
                                    <label className="">
                                        <input required type="text" name="venue" defaultValue={venue} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Target Audience</span>
                                    </label>
                                    <label className="">
                                        <input required type="text" name="audience" defaultValue={audience} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control" id="services">
                                    <label className="label">
                                        <span className="label-text font-bold">Session Topics</span>
                                    </label>
                                    <label className="">
                                        <button type="button" onClick={() => addInputField('services', `${services}`)} className="btn btn-sm btn-outline border-red-600 bg-sky-300">
                                            Add Session Topic
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Image link</span>
                                    </label>
                                    <label className="">
                                        <input required type="photoURL" name="image" defaultValue={image} className="input input-bordered w-full " />
                                    </label>
                                </div>
                            </div>


                            <div className="flex-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Date</span>
                                    </label>
                                    <label className="">
                                        <input required type="datetime-local" name="date" defaultValue={date} className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Camp Fee</span>
                                    </label>
                                    <label className="">
                                        <input required type="number" name="campFee" defaultValue={campFee} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Participants</span>
                                    </label>
                                    <label className="">
                                        <input required type="number" name="participants" defaultValue={participants} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control" id="professionals">
                                    <label className="label">
                                        <span className="label-text font-bold">Professionals</span>
                                    </label>
                                    <label className="">
                                        <button type="button" onClick={() => addInputField('professionals' ,`${professionals}`)} className="btn btn-sm btn-outline border-red-600 bg-sky-300">
                                            Add Professional
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Write Details</span>
                                    </label>
                                    <label className="">
                                        <input required type="text" name="details" defaultValue={details} className="input input-bordered w-full " />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Update Camp" className="w-full mt-6 bg-sky-300  border-black border-double border-4 text-center p-2 text-2xl" />
                    </form>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default UpdateCamp;