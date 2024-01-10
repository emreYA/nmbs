import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";
interface RequestEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  address: string;
  postcode: string;
  serviceType: string;
}

export const RequestEmail = ({
  name,
  email,
  phone,
  message,
  address,
  postcode,
  serviceType,
}: RequestEmailProps) => (
  <Html>
    <Head />
    <Preview>Contact!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Offerte!</Heading>

        <Text style={{ ...text, marginBottom: "14px" }}>Name: {name}</Text>

        <Text style={{ ...text, marginBottom: "14px" }}>email: {email}</Text>

        <Text style={{ ...text, marginBottom: "14px" }}>phone: {phone}</Text>

        <Text style={{ ...text, marginBottom: "14px" }}>
          address: {address}
        </Text>

        <Text style={{ ...text, marginBottom: "14px" }}>
          postcode: {postcode}
        </Text>

        <Text style={{ ...text, marginBottom: "14px" }}>
          serviceType: {serviceType}
        </Text>

        <Text style={{ ...text, marginBottom: "14px" }}>
          message: {message}
        </Text>
      </Container>
    </Body>
  </Html>
);

export default RequestEmail;

const main = {
  backgroundColor: "#ffffff",
};

const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const link = {
  color: "#2754C5",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  textDecoration: "underline",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const footer = {
  color: "blueviolet",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};

const code = {
  display: "inline-block",
  padding: "16px 4.5%",
  width: "90.5%",
  backgroundColor: "#f4f4f4",
  borderRadius: "5px",
  border: "1px solid #eee",
  color: "#333",
};
