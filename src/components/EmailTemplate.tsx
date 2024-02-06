import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  phoneNumber: number;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phoneNumber,
  subject,
  message,
}) => (
  <div>
    <p>
      Hi Viet80s,
      <p>There is a customer with the contact details:</p>
      <p>
        {" "}
        Name: {name}, Email: {email}, Phone Number: {phoneNumber},
        <p>contacting you with the message below:</p>
      </p>
    </p>
    <h4 style={{ textDecoration: "underline" }}>Subject:</h4>
    <p> {subject}</p>
    <h4 style={{ textDecoration: "underline" }}>Enquiry Content:</h4>
    <p>{message}</p>
  </div>
);
