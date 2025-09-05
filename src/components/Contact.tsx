import { Close } from "@mui/icons-material";
import {
  Alert,
  AlertColor,
  Button,
  IconButton,
  Snackbar,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

type Props = {};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const ContactFormSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  email: Yup.string()
    .email("Please enter a valid Email ID")
    .required("Email ID is required."),
  phone: Yup.string().required("Phone is required."),
  message: Yup.string().required("Message is required.")
});

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [responseType, setResponseType] = React.useState<AlertColor>("success");
  // const contactForm = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     message: ""
  //   },
  //   validationSchema: ContactFormSchema,
  //   onSubmit: (values: any) => {
  //     handleFormSubmitAsync(values);
  //   }
  // });

  // const handleFormSubmitAsync = async (values: FormValues | any) => {
  //   let payload = new FormData();
  //   Object.keys(values).forEach((key) => payload.append(key, values[key]));

  //   try {
  //     fetch("https://formspree.io/f/xqkrpbqn", {
  //       method: "POST",
  //       body: payload,
  //       headers: {
  //         Accept: "application/json"
  //       }
  //     })
  //       .then((response) => {
  //         if (response.ok) {
  //           setResponseType("success");
  //           setMessage("Thanks, will get back to you soon.");
  //           handleClick();
  //           contactForm.resetForm();
  //         } else {
  //           setResponseType("error");
  //           setMessage("Oops! Something went wrong, please try again later.");
  //           handleClick();
  //         }
  //       })
  //       .catch(() => {
  //         setResponseType("error");
  //         setMessage("Oops! Something went wrong, please try again later.");
  //         handleClick();
  //       });
  //   } catch (err) {
  //     setResponseType("error");
  //     setMessage("Oops! Something went wrong, please try again later.");
  //     handleClick();
  //   }
  // };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <div className="pf-container py-[60px]" id="contact" data-aos="fade-up">
        <div className="flex items-center">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Contact
          </Typography>
          <div className="border flex-1 ml-4"></div>
        </div>
        <div className="rounded-2xl mt-10 shadow-lg bg-gradient-to-br from-pf-dark-med to to-gray-800 flex lg:flex-row flex-col p-4">
          <div className="w-full flex-1 rounded-2xl bg-gradient-to-br from-pf-dark-max to-gray-900 p-8">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Contact Information
            </Typography>
            {/* <Typography variant="body1">
              Fill up this form and I will get back to you within 24 hours.
            </Typography> */}
            <ul className="flex flex-col mt-10 gap-6">
              <li>
                <div className="flex items-center gap-4">
                  <i className="text-2xl min-w-[40px] min-h-[40px] rounded-md flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-800 fas fa-phone"></i>
                  <Tooltip title="+91 7236089760" placement="bottom-start">
                    <Typography className="truncate" variant="body1">
                      +91 9657011263
                    </Typography>
                  </Tooltip>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <i className="text-2xl min-w-[40px] min-h-[40px] rounded-md flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-800 fas fa-envelope"></i>
                <Tooltip
                  title="reachtokarankumar@gmail.com"
                  placement="bottom-start"
                >
                  <Typography className="truncate" variant="body1">
                  khannazmeen963@gmail.com
                  </Typography>
                </Tooltip>
              </li>
              <li className="flex items-center gap-4">
                <i className="text-2xl min-w-[40px] min-h-[40px] rounded-md flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-800 fas fa-map-marker-alt"></i>
                <Tooltip title="Maharashtra, India." placement="bottom-start">
                  <Typography className="truncate" variant="body1">
                    Maharashtra, India.
                  </Typography>
                </Tooltip>
              </li>
            </ul>
          </div>
          {/* <div className="md:p-5 p-0 my-5 md:my-0 flex-1">
            <form onSubmit={contactForm.handleSubmit} id="contact-form">
              <div className="flex flex-col gap-6">
                <div className="flex sm:flex-row flex-col items-center gap-6">
                  <TextField
                    id="firstName"
                    label="First name"
                    variant="outlined"
                    value={contactForm.values.firstName}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={
                      contactForm.touched.firstName &&
                      contactForm.errors.firstName
                        ? true
                        : false
                    }
                    helperText={
                      contactForm.touched.firstName &&
                      contactForm.errors.firstName &&
                      contactForm.errors.firstName
                    }
                    fullWidth
                  />
                  <TextField
                    id="lastName"
                    label="Last name"
                    variant="outlined"
                    value={contactForm.values.lastName}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={
                      contactForm.touched.lastName &&
                      contactForm.errors.lastName
                        ? true
                        : false
                    }
                    helperText={
                      contactForm.touched.lastName &&
                      contactForm.errors.lastName &&
                      contactForm.errors.lastName
                    }
                    fullWidth
                  />
                </div>
                <div className="flex sm:flex-row flex-col items-center gap-6">
                  <TextField
                    id="email"
                    label="Email ID"
                    variant="outlined"
                    value={contactForm.values.email}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={
                      contactForm.touched.email && contactForm.errors.email
                        ? true
                        : false
                    }
                    helperText={
                      contactForm.touched.email &&
                      contactForm.errors.email &&
                      contactForm.errors.email
                    }
                    fullWidth
                  />
                  <TextField
                    id="phone"
                    label="Phone"
                    variant="outlined"
                    value={contactForm.values.phone}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={
                      contactForm.touched.phone && contactForm.errors.phone
                        ? true
                        : false
                    }
                    helperText={
                      contactForm.touched.phone &&
                      contactForm.errors.phone &&
                      contactForm.errors.phone
                    }
                    fullWidth
                  />
                </div>
                <div>
                  <TextField
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    value={contactForm.values.message}
                    onChange={contactForm.handleChange}
                    onBlur={contactForm.handleBlur}
                    error={
                      contactForm.touched.message && contactForm.errors.message
                        ? true
                        : false
                    }
                    helperText={
                      contactForm.touched.message &&
                      contactForm.errors.message &&
                      contactForm.errors.message
                    }
                    fullWidth
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-6 mt-6">
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  type="reset"
                  onClick={contactForm.handleReset}
                >
                  Reset
                </Button>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
      {/* alerts */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        action={action}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
      >
        <Alert
          onClose={handleClose}
          severity={responseType}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
