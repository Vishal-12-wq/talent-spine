import { Field } from 'formik';
import React from 'react';

const FixedTextInput = ({ handleChange, handleBlur, value }) => {
    //  {/* <Field
    //             type="text"
    //             name="slug"
    //             placeholder="pathmover / | testing_name02"
    //             className="w-full border p-2 text-sm rounded-lg !mt-1 outline-none border-bordercolor"
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //             value={values.slug}
    //           /> */}
    return (
        <div className="flex items-center border w-full border-gray-300 px-2 focus-within:ring-2 focus-within:ring-green-500 p-2 rounded-xl">
            <span className="text-[#C4C4C4] mr-2 whitespace-nowrap">pathmover / |</span>
            <Field
                type="text"
                name="slug"
                className="flex-1 border-none focus:outline-none focus:ring-0 w-full black-placeholder"
                placeholder="testing_name02"
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
            />
        </div>
    );
};

export default FixedTextInput;
