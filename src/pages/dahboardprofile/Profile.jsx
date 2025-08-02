import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import apiService from "../../apiService";
import ProfileForm from "../../components/profile/ProfileForm";
import ThemeSelect from "../../components/profile/ThemeSelect";
import AddressForm from "../../components/profile/AddressForm";
import SettingForm from "../../components/profile/SettingForm";
import Tags from "../../components/profile/Tags";
import RoadService from "../../components/profile/RoadService";
import { toast } from "react-toastify";

const Profile = () => {
  const [initialValues, setInitialValues] = useState(null); // Null indicates loading state

  const validationSchema = Yup.object({
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    zipCode: Yup.string().required("Zip Code is required"),
    state: Yup.string().required("State is required"),
    introduction: Yup.string().required("Introduction is required"),
    aboutYourself: Yup.string().required("About yourself is required"),
    socialLinks: Yup.array()
      .of(
        Yup.object().shape({
          platform: Yup.string().required("Platform is required"), // Example field
          url: Yup.string()
            .url("Must be a valid URL")
            .required("URL is required"),
        })
      )
      .min(1, "At least one social link is required")
      .required("Social links are required"),
    // timezone: Yup.string().required("Timezone is required"),
    // currency: Yup.string().required("Currency is required"),
  });

  const handleSubmit = async (values) => {
    const validSocialLinks = values.socialLinks.filter(
      (link) => link.platform.trim() && link.url.trim()
    );

    const invalidSocialLinks = values.socialLinks.some(
      (link) => !link.platform.trim() || !link.url.trim()
    );

    if (invalidSocialLinks) {
      toast.error(
        "Please fill out all social links or remove incomplete entries."
      );
      return; // Prevent form submission
    }

    const formData = new FormData();
    formData.append("first_name", values.firstName);
    formData.append("last_name", values.lastName);
    formData.append("display_name", `${values.firstName} ${values.lastName}`);
    formData.append("intro", values.introduction);
    formData.append("about", values.aboutYourself);
    formData.append("slug", values.slug);
    formData.append(
      "address",
      JSON.stringify({
        address: values?.address,
        country: values?.country,
        city: values?.city,
        zipCode: values?.zipCode,
        state: values?.state,
      })
    );
    formData.append(
      "settings",
      JSON.stringify({
        timezone: values.timezone,
        selling_currency: values.currency,
      })
    );
    formData.append("socialLinks", JSON.stringify(validSocialLinks));
    formData.append("image", values.profileImage);
    formData.append("pdf", values.resume);

    try {
      const response = await apiService.auth.updateProfile(formData);
      if (response) {
        toast.success(response?.message || "Profile updated successfully");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await apiService.auth.getProfile();

      if (response?.profile) {
        const profileData = response.profile;
        setInitialValues({
          firstName: profileData.first_name || "",
          lastName: profileData.last_name || "",
          introduction: profileData.intro || "",
          aboutYourself: profileData.about || "",
          socialLinks: profileData.socialLinks.length
            ? profileData.socialLinks
            : [{ platform: "facebook", url: "" }],
          address: profileData?.address?.address || "",
          country: profileData?.address?.country || "",
          city: profileData?.address?.city || "",
          zipCode: profileData?.address?.zipCode || "",
          state: profileData?.address?.state || "",
          timezone: profileData?.settings?.timezone || "",
          currency: profileData?.settings?.selling_currency || "",
          profileImage: profileData?.image_url || profileData?.image || null,
          resume: profileData?.pdf_url || null,
          slug: profileData?.slug || null,
        });
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!initialValues) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
        {/* You can replace this with a spinner or skeleton loader */}
      </div>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values, handleChange, handleBlur, setFieldValue }) => (
        <Form className="max-lg:p-4">
          <div className=" flex justify-between py-5 xl-2:py-9 items-center xl:pr-7 xl-2:pr-14 sm:pr-4 overflow-x-auto ">
            <div className="flex items-center gap-4">
              <button className="bg-skygreen border !rounded-xl  border-success shadow-xl  text-success  custom-button">
                Profile
              </button>
              <button className="bg-white border !rounded-xl custom-button border-bordercolor  text-secondarys1 ">
                Account
              </button>
            </div>
            <button
              type="submit"
              className=" custom-button !rounded-xl shrink-0 max-sm:ml-4 border bg-success shadow-2xl border-success "
            >
              <div className="text-white ">Save Changes</div>
            </button>
          </div>

          <div className="bg-skygreen xl:p-7 p-4 xl-2:p-14 rounded-l-3xl max-lg:rounded-3xl">
            {/* Profile Form */}
            <div className="flex max-lg:flex-col max-lg:gap-5 div-border-b">
              <div className="flex-[9] xl:pr-5 lg:pr-3  lg:border-r border-bordercolor">
                <ProfileForm
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                />
              </div>
              <div className="flex-[3] lg:pl-3 xl:pl-5">
                <ThemeSelect />
              </div>
            </div>

            {/* Address & Setting */}
            <div className="mt-6 flex h-full max-lg:gap-5 max-lg:flex-col div-border-b">
              <div className="flex-1 xl:pr-5 lg:pr-3  lg:border-r border-bordercolor">
                <AddressForm
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                />
              </div>
              <div className="lg:pl-3 xl:pl-5 flex-1">
                <SettingForm
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                />
              </div>
            </div>

            {/* Tags */}
            <div className="mt-6 div-border-b">
              <Tags />
            </div>
            {/* Road Services */}
            <div className="mt-6">
              <RoadService />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Profile;
