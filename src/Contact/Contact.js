import React from 'react';

const Contact = () => {
    return (
        <div className="container mt-5">
            <div className=" w-50 mb-5 container border border-success border-5">
                <h3 className="text-center m-5">Fill Up This Form </h3>
                <p className="text-center"> We Will Contact You As Soon As Possible,ThankYou</p>
                <form className="p-5 d-flex flex-column" action="">
                    <input className="border border-dark" type="text" name="Name" id="" placeholder="Your Name" />
                    <br />
                    <input className="border border-dark" type="text" name="Name" id="" placeholder="Your Email" />
                    <br />
                    <input className="border border-dark" type="text" name="Name" id="" placeholder="Your Contact Number" />
                    <br />
                    <input className="border border-dark" type="text" name="Name" id="" placeholder="Full Address" />
                    <button type="button" class="btn btn-success">Submit</button>
                </form>
            </div>








        </div>
    );
};

export default Contact;