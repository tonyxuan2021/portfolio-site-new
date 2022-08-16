import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { theme } from "../theme";
import emailjs from "@emailjs/browser";

const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const IndexWrapper = styled(Grid)(({ theme }) => ({
  paddingLeft: 30,
  paddingRight: 30,
  [theme.breakpoints.up("md")]: {
    paddingLeft: 100,
    paddingRight: 100,
  },
}));

const TextFieldBkg = styled(TextField)(({ theme }) => ({
  background: "lightgrey",
  opacity: 0.75,
}));

const TouchWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 30,
  borderTop: "1px solid lightgrey",
  //   borderBottom: "1px solid lightgrey",
  paddingTop: 30,
  paddingBottom: 30,
  [theme.breakpoints.up("md")]: {
    marginTop: 60,
    paddingTop: 50,
    paddingBottom: 50,
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const FormWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 30,
  borderTop: "1px solid lightgrey",
  //   borderBottom: "1px solid lightgrey",
  paddingTop: 30,
  paddingBottom: 30,
  [theme.breakpoints.up("md")]: {
    // marginTop: 80,
    paddingTop: 50,
    paddingBottom: 50,
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));

const ContactBtn = styled(Button)(({ theme }) => ({
  width: "60%",
  [theme.breakpoints.up("md")]: {
    width: "30%",
    marginBottom: 50,
  },
}));

const ContactPage = ({ setShowContact }) => {
  setShowContact(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_zczp6la", "template_kwcpqsd", e.target, publicKey)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <IndexWrapper item>
      <TouchWrapper container item>
        <Typography variant="h3" fontWeight={700}>
          Get in Touch
        </Typography>
        <Grid item lg={6}>
          <Typography variant="body1" lineHeight={2}>
            I’d love to hear about what you’re working on and how I could help.
            I’m currently looking for a frontend or fullstack web development
            role and am open to a wide range of opportunities. I’m a
            hard-working and positive person who will always approach each task
            with a sense of purpose and attention to detail. Please do feel free
            to check out my online profiles below and get in touch using the
            form.
          </Typography>
        </Grid>
      </TouchWrapper>
      <FormWrapper container item>
        <Typography variant="h3" fontWeight={700}>
          Contact Me
        </Typography>
        <Grid item display="flex" flexDirection="column" gap={5} lg={6}>
          <form
            onSubmit={sendEmail}
            style={{ display: "flex", flexDirection: "column", gap: 50 }}
          >
            <TextFieldBkg
              type="text"
              label="Name"
              name="name"
              required
              variant="outlined"
              fullWidth
              placeholder="Jane Appleseed"
            />
            <TextFieldBkg
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              type="email"
              required
              placeholder="email@example.com"
            />
            <TextFieldBkg
              label="Message"
              type="text"
              required
              name="message"
              variant="outlined"
              multiline
              minRows={4}
              fullWidth
              placeholder="Hire me please!"
            />
            <ContactBtn
              type="submit"
              sx={{
                justifyContent: "space-between",
                color: "white",
                ":hover": {
                  bgcolor: theme.palette.primary.main,
                  color: "white",
                },
                background: theme.palette.darkblue.main,
                borderRadius: 0,
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                width: "60%",
                p: 1.8,
              }}
            >
              <Typography variant="body2">SEND MESSAGE</Typography>
            </ContactBtn>
          </form>
        </Grid>
      </FormWrapper>
    </IndexWrapper>
  );
};

export default ContactPage;
