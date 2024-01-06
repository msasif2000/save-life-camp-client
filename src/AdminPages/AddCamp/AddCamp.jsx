import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';


const AddCamp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const handleNewCamp = e => {
        e.preventDefault();
        const form = e.target;

        const campName = form.campName.value;
        const venue = form.venue.value;
        const audience = form.audience.value;
        const image = form.image.value;
        const date = form.date.value;
        const campFee = form.campFee.value;
        const participants = parseInt(form.participants.value);
        const details = form.details.value;

        const services = Array.from(form.querySelectorAll('input[name="services"]')).map(
            (input) => input.value
        );

        const professionals = Array.from(form.querySelectorAll('input[name="professionals"]')).map(
            (input) => input.value
        );

        const newCamp = { campName, venue, audience, services, image, date, campFee, participants, professionals, details };
        //console.log(newCamp);

        axiosSecure.post('/camp', newCamp)
            .then(res => {
                if (res.data.insertedId) {
                   Swal.fire({
                        title: 'Camp Created Successfully.',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
            
                        navigate(location.state?.from ? location.state.from : '/availableCamp');
                    
                }
            })
    }

    const addInputField = (fieldName) => {
        const container = document.getElementById(fieldName);
        const input = document.createElement('input');
        input.type = 'text';
        input.name = fieldName;
        input.placeholder = `Enter ${fieldName}`;
        input.className = 'input input-bordered w-full';
        container.appendChild(input);
    };
    return (
        <div className="">
            <Helmet>
                <title>SAVE LIFE | ADD CAMP</title>
            </Helmet>
            <div className="md-container mx-auto">
                <div className="lg:p-12 md:p-6 p-4 space-y-6">
                    <h2 className="font-rancho text-4xl text-center">Create Camp Here</h2>
                    <form onSubmit={handleNewCamp} className="font-raleway ">
                        <div className="lg:flex justify-center gap-6">
                            <div className="w-full flex-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Camp Name</span>
                                    </label>
                                    <label className="">
                                        <input required type="text" name="campName" placeholder="Enter Camp Name" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Venue</span>
                                    </label>
                                    <label className="">
                                        <input required type="text" name="venue" placeholder="Enter Venue Location" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Target Audience</span>
                                    </label>
                                    <label className="">
                                        <input required type="text" name="audience" placeholder="Enter Target Audience" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control" id="services">
                                    <label className="label">
                                        <span className="label-text font-bold">Session Topics</span>
                                    </label>
                                    <label className="">
                                        <button type="button" onClick={() => addInputField('services')} className="btn btn-sm btn-outline border-red-600 bg-sky-300">
                                            Add Session Topic
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Image link</span>
                                    </label>
                                    <label className="">
                                        <input required type="photoURL" name="image" placeholder="Enter Image URL" className="input input-bordered w-full " />
                                    </label>
                                </div>
                            </div>


                            <div className="flex-1">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Date</span>
                                    </label>
                                    <label className="">
                                        <input required type="datetime-local" name="date" placeholder="Select Date and Time" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Camp Fee</span>
                                    </label>
                                    <label className="">
                                        <input required type="number" name="campFee" placeholder="Enter Camp Fee" className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Participants</span>
                                    </label>
                                    <label className="">
                                        <input required type="number" name="participants" defaultValue={0} className="input input-bordered w-full" />
                                    </label>
                                </div>
                                <div className="form-control" id="professionals">
                                    <label className="label">
                                        <span className="label-text font-bold">Professionals</span>
                                    </label>
                                    <label className="">
                                        <button type="button" onClick={() => addInputField('professionals')} className="btn btn-sm btn-outline border-red-600 bg-sky-300">
                                            Add Professional
                                        </button>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Write Details</span>
                                    </label>
                                    <label className="">
                                        <input required type="text" name="details" placeholder="Write Description for Camp" className="input input-bordered w-full " />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <input type="submit" value="Create Camp" className="w-full mt-6 bg-red-600 text-white  text-center p-2 text-2xl" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCamp;