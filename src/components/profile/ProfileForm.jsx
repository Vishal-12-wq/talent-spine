import React, { memo, useState } from "react";
import { Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import FixedTextInput from "../shared/FixedTextInput";

const ProfileForm = memo(({ values, handleChange, handleBlur, setFieldValue }) => {
  const [imagePreview, setImagePreview] = useState(values.profileImage || "");

  const addSocialLink = () => {
    setFieldValue("socialLinks", [
      ...values.socialLinks,
      { platform: "facebook", url: "" },
    ]);
  };

  const removeSocialLink = (index) => {
    const updatedLinks = values.socialLinks.filter((_, i) => i !== index);
    setFieldValue("socialLinks", updatedLinks);
  };

  const handleSocialLinkChange = (index, field, value) => {
    const updatedLinks = [...values.socialLinks];
    updatedLinks[index][field] = value;
    setFieldValue("socialLinks", updatedLinks);
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Set the preview to the uploaded image
        setFieldValue(fieldName, file); // Update the form field value
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="shadow-xl form-basic-need flex max-sm:flex-col max-sm:gap-5">
      <div className="xl:pr-5 sm:pr-3 xl-2:pr-7  sm:border-r border-bordercolor flex flex-col justify-center items-center">
        <h1 className="fs18 !font-bold">Profile Photo</h1>
        <div className="sm:mt-4 mt-3 xl-2:mt-8 bg-success h-20 w-20 xl-2:h-[150px] xl-2:w-[150px] mx-auto rounded-full shadow-inner flex justify-center items-center">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="h-20 w-20  xl-2:h-[150px] xl-2:w-[150px] rounded-full"
            />
          ) : values.profileImage ? (
            <img
              src={values?.profileImage || ''}
              alt="Profile Preview"
              className="h-20 w-20 xl-2:h-[150px] xl-2:w-[150px] rounded-full"
            />
          ) : (
            <img
              src="/assets/svg/profile/camera (2).svg"
              alt="Upload Icon"
              className="h-10 w-10 xl-2:w-[60px] xl-2:h-[45px]"
            />
          )}
        </div>
        <div className="sm:mt-5 mt-3 xl-2:mt-12">
          <input
            type="file"
            id="upload"
            accept="image/*"
            hidden
            onChange={(e) => handleFileChange(e, "profileImage")}
          />
          <label
            htmlFor="upload"
            className=" custom-button !rounded-xl text-nowrap border  border-success "
          >
            Upload Photo
          </label>
        </div>
        <h2 className="text-xs text-center text-secondarys1 mt-5 xl-2:mt-7">Required*</h2>
        <div className="text-nowrap sm:mt-auto mt-3 text-xs py-3 px-4 font-inter font-bold text-white bg-success rounded-xl">
          <input
            type="file"
            id="uploadResume"
            accept="application/pdf"
            hidden
            onChange={(e) => handleFileChange(e, "resume")}
          />
          <label
            htmlFor="uploadResume"
            className="file-upload-label text-nowrap border font-inter border-success text-sm py-3 xl:px-4 px-1 rounded-xl"
          >
            Upload Resume
          </label>
        </div>
      </div>

      <div className="xl:pl-5 sm:pl-3 xl-2:pl-8 grow ">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="slug"
              className="fs12-gray"
            >
              Your pathmover page link
            </label>
            <div className="mt-1 flex gap-3 items-center flex-wrap justify-end">
              <div className=" max-sm:w-[100%] mt-1  grow">
                <FixedTextInput handleBlur={handleBlur} handleChange={handleChange} value={values?.slug} className="" />
              </div>
             <div className="flex items-center gap-3 justify-end  ">
             <button
                className="p-2 h-10 w-10 bg-[#CCEBC7] flex shrink-0 items-center justify-center rounded-full ml-auto"
                onClick={(e) => {
                  e?.preventDefault()
                  navigator.clipboard.writeText(`${process.env.REACT_APP_SLUG_URL}?slug=${values.slug}`);
                }}
                type="button"
              >
                <img
                  src="/assets/svg/profile/copy.svg"
                  alt=""
                  className="h-4 w-4"
                />
              </button>
              <button className="py-2 px-4 shrink-0 bg-[#CCEBC7] rounded-xl flex gap-2 items-center"

                onClick={() => {
                  if (values?.slug) {
                    window.open(`/profile?slug=${values.slug}`, '_blank');
                  } else {
                    toast.error('No slug added')
                  }
                }}>
                <div className="text-sm font-inter font-medium">Preview</div>
                <img
                  src="/assets/svg/profile/preview.svg"
                  alt=""
                  className="h-3 w-3"
                />
              </button>
             </div>
            </div>
            <ErrorMessage
              name="profileLink"
              component="div"
              className="text-xs text-red-500 mt-1"
            />
          </div>

          {/* Name Fields */}
          <div className="flex gap-4">
            <div className="w-full ">
              <label
                htmlFor="firstName"
                className="fs12-gray"
              >
                First Name
              </label>
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full border p-2 text-sm rounded-lg mt-2 outline-none border-bordercolor"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="lastName"
                className="fs12-gray"
              >
                Last Name
              </label>
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full border p-2 text-sm rounded-lg mt-2 outline-none border-bordercolor"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-xs text-red-500 mt-1"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="introduction"
              className="fs12-gray"
            >
              Introduction <span className="text-red-600">*</span>
            </label>
            <Field
              as="textarea"
              name="introduction"
              placeholder="Introduce yourself"
              className="w-full border p-2  text-sm rounded-lg outline-none mt-2 border-bordercolor"
            />
            <ErrorMessage
              name="introduction"
              component="div"
              className="text-xs text-red-500 mt-1"
            />
          </div>

          <div>
            <label
              htmlFor="aboutYourself"
              className="fs12-gray mb-1"
            >
              About Yourself <span className="text-red-600">*</span>
            </label>
            <Field
              as="textarea"
              name="aboutYourself"
              placeholder="Tell us about yourself"
              className="w-full border p-2 text-sm rounded-lg outline-none border-bordercolor mt-1"
            />
            <ErrorMessage
              name="aboutYourself"
              component="div"
              className="text-xs text-red-500 mt-1"
            />
          </div>

          <div>
            <h3>Add Social Links <span className="text-red-600">*</span></h3>
            {values.socialLinks.map((link, index) => (
              <div key={index + 1} >
                <div className="flex gap-2 items-center mt-2">
                  <select
                    value={link.platform}
                    onChange={(e) =>
                      handleSocialLinkChange(index, "platform", e.target.value)
                    }
                    className="py-2 px-3 border text-sm rounded-lg border-bordercolor"
                  >
                    <option value="">Select</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="twitter">Twitter</option>
                  </select>
                  <input
                    type="text"
                    value={link.url}
                    placeholder="Add Social URL"
                    onChange={(e) =>
                      handleSocialLinkChange(index, "url", e.target.value)
                    }
                    className="w-full text-sm flex-1 p-2 border rounded-lg border-bordercolor outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => removeSocialLink(index)}
                    className="p-2 rounded-xl bg-[#E5E5E5] h-10 w-10 flex justify-center items-center"
                  >
                    <img
                      src="/assets/svg/profile/delete (2).svg"
                      alt=""
                      className="h-4 w-4"
                    />
                  </button>
                </div>
                <ErrorMessage
                  name={`socialLinks[${index}].url`}
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addSocialLink}
              className="mt-3 border border-dashed text-sm rounded-xl w-full p-3"
            >
              + Add more URL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProfileForm;
