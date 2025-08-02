import React, { useState, useEffect } from "react";
import { Field, ErrorMessage } from "formik";
import { Country, State, City } from "country-state-city";

const AddressForm = ({ values, handleChange, handleBlur, setFieldValue }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const countryList = Country.getAllCountries().map((country) => ({
      isoCode: country.isoCode,
      name: country.name,
    }));
    setCountries(countryList);
  }, []);

  useEffect(() => {
    if (values.country) {
      const stateList = State.getStatesOfCountry(values.country).map((state) => ({
        isoCode: state.isoCode,
        name: state.name,
      }));
      setStates(stateList);
    } else {
      setStates([]);
    }
    setCities([]);
  }, [values.country]);

  useEffect(() => {
    if (values.state) {
      const cityList = City.getCitiesOfState(values.country, values.state).map((city) => ({
        name: city.name,
      }));
      setCities(cityList);
    } else {
      setCities([]);
    }
  }, [values.state]);

  return (
    <div className="form-basic-need h-full">
      <h1 className="form-heading">Address & Location</h1>
      <div className="mt-8 black-placeholder">
        <label htmlFor="address" className="block text-xs text-secondarys1 font-inter">
          Address <span className="text-red-600">*</span>
        </label>
        <Field
          type="text"
          name="address"
          placeholder="Global Business Park, Zirakpur"
          className="w-full text-sm flex-1 p-2 border rounded-lg mt-2 border-bordercolor outline-none"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address}
        />
        <ErrorMessage name="address" component="div" className="text-xs text-red-500 mt-1" />
      </div>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="w-full">
          <label htmlFor="country" className="block text-xs text-secondarys1 font-inter">
            Country <span className="text-red-600">*</span>
          </label>
          <Field
            as="select"
            name="country"
            className="w-full input-field !mt-2"
            onChange={(e) => {
              handleChange(e);
              setFieldValue("state", "");
              setFieldValue("city", "");
            }}
            onBlur={handleBlur}
            value={values.country}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="country" component="div" className="text-xs text-red-500 mt-1" />
        </div>

        <div className="w-full">
          <label htmlFor="state" className="block text-xs text-secondarys1 font-inter">
            State <span className="text-red-600">*</span>
          </label>
          <Field
            as="select"
            name="state"
            className="w-full input-field !mt-2"
            onChange={(e) => {
              handleChange(e);
              setFieldValue("city", "");
            }}
            onBlur={handleBlur}
            value={values.state}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="state" component="div" className="text-xs text-red-500 mt-1" />
        </div>

        {/* City Dropdown */}
        <div className="w-full">
          <label htmlFor="city" className="block text-xs text-secondarys1 font-inter">
            City <span className="text-red-600">*</span>
          </label>
          <Field
            as="select"
            name="city"
            className="w-full input-field !mt-2"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city.name}>
                {city.name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="city" component="div" className="text-xs text-red-500 mt-1" />
        </div>

        {/* Zip Code */}
        <div className="w-full">
          <label htmlFor="zipCode" className="block text-xs text-secondarys1 font-inter">
            Zip Code <span className="text-red-600">*</span>
          </label>
          <Field
            type="text"
            name="zipCode"
            placeholder="160021"
            className="w-full text-sm flex-1 p-2 border rounded-lg mt-2 border-bordercolor outline-none"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.zipCode}
          />
          <ErrorMessage name="zipCode" component="div" className="text-xs text-red-500 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
