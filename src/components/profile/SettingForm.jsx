import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import { Field, ErrorMessage } from "formik";
import currencyCodes from "currency-codes";
import getSymbolFromCurrency from "currency-symbol-map";
import moment from "moment-timezone";

const SettingForm = ({ values, handleChange, handleBlur }) => {
  const [timezones, setTimezones] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  // Fetch timezones on component mount
  useEffect(() => {
    const allTimezones = moment.tz.names().map((timezone) => {
      const offset = moment.tz(timezone).format("Z"); // Get offset for timezone
      return `(GMT${offset}) ${timezone}`;
    });
    setTimezones(allTimezones);
  }, []);

  // Load currencies on component mount
  useEffect(() => {
    const currencyList = currencyCodes.codes().map((code) => {
      const currency = currencyCodes.code(code);
      return {
        code: currency.code,
        name: `${currency.currency} (${getSymbolFromCurrency(code) || ""})`,
      };
    });
    setCurrencies(currencyList);
  }, []);

  return (
    <div className="form-basic-need h-full">
      <h1 className="form-heading">Settings</h1>
      <div className="mt-8 border border-bordercolor rounded-r30 overflow-hidden">
        <div className="p-5 flex max-sm:flex-col gap-2 border-b border-bordercolor ">
          <div>
            <h1 className="font-inter font-bold text-sm text-start">Timezone</h1>
            <h3 className="max-w-[200px] leading-4 mt-1 text-xs text-secondarys1 font-inter">
              Required for timely communications
            </h3>
          </div>
          <Field
            as="select"
            name="timezone"
            className="input-field text-secondarys1"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.timezone}
            style={{maxWidth: '250px'}}
          >
            <option value="">Select Timezone</option>
            {timezones.map((tz, index) => (
              <option key={index} value={tz}>{tz}</option>
            ))}
          </Field>
        </div>
        <div className="p-5 flex gap-2 border-b max-sm:flex-col border-bordercolor">
          <div>
            <h1 className="font-inter font-bold text-sm text-start">Sell in</h1>
            <h3 className="max-w-[250px] leading-4 mt-1 text-xs text-secondarys1 font-inter">
              Display your services in your preferred currency
            </h3>
          </div>
          <Field
            as="select"
            name="currency"
            className="input-field text-secondarys1"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.currency}
            style={{maxWidth: '250px'}}
          >
            <option value="">Select Currency</option>
            {currencies.map((currency) => (
              <option key={currency.code} value={currency.code}>
                {currency.name}
              </option>
            ))}
          </Field>
          <ErrorMessage name="currency" component="div" className="text-xs text-red-500 mt-1" />
        </div>

        {/* Update Button */}
        <div className="p-5 flex gap-2 max-sm:flex-col justify-between">
          <div>
            <h1 className="font-inter font-bold text-sm text-start">Payouts</h1>
            <h3 className="leading-4 mt-1 text-xs text-secondarys1 font-inter">
              Instant and safe payouts to your preferred account
            </h3>
          </div>
          <Button
            text="Update"
            bgcolor="bg-success !capitalize"
            textcolor="text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default SettingForm;
