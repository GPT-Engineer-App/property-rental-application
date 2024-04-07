import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Divider, Textarea, Grid, GridItem } from "@chakra-ui/react";
import Navigation from "../components/Navigation.jsx";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    currentAddress: "",
    priorAddress: "",
    income: "",
    occupation: "",
    assets: "",
    referenceName1: "",
    referenceRelationship1: "",
    referencePhone1: "",
    referenceName2: "",
    referenceRelationship2: "",
    referencePhone2: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // TODO: Submit form data to server or perform other actions
  };

  return (
    <Grid templateColumns="200px 1fr" gap={8}>
      <Navigation />
      <Box maxWidth="800px" margin="auto" padding={8}>
        <Heading as="h1" size="xl" textAlign="center" marginBottom={8}>
          Property Rental Application
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg">
              Personal Information
            </Heading>
            <FormControl id="name" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} />
            </FormControl>
            <FormControl id="dob" isRequired>
              <FormLabel>Date of Birth</FormLabel>
              <Input type="date" name="dob" value={formData.dob} onChange={handleChange} />
            </FormControl>
            <FormControl id="currentAddress" isRequired>
              <FormLabel>Current Address</FormLabel>
              <Textarea name="currentAddress" value={formData.currentAddress} onChange={handleChange} />
            </FormControl>
            <FormControl id="priorAddress">
              <FormLabel>Prior Address</FormLabel>
              <Textarea name="priorAddress" value={formData.priorAddress} onChange={handleChange} />
            </FormControl>

            <Divider />

            <Heading as="h2" size="lg">
              Financial Information
            </Heading>
            <FormControl id="income" isRequired>
              <FormLabel>Monthly Income</FormLabel>
              <Input type="number" name="income" value={formData.income} onChange={handleChange} />
            </FormControl>
            <FormControl id="occupation" isRequired>
              <FormLabel>Occupation</FormLabel>
              <Input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
            </FormControl>
            <FormControl id="assets">
              <FormLabel>Assets</FormLabel>
              <Textarea name="assets" value={formData.assets} onChange={handleChange} />
            </FormControl>

            <Divider />

            <Heading as="h2" size="lg">
              References
            </Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem>
                <FormControl id="referenceName1" isRequired>
                  <FormLabel>Reference Name</FormLabel>
                  <Input type="text" name="referenceName1" value={formData.referenceName1} onChange={handleChange} />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="referenceRelationship1" isRequired>
                  <FormLabel>Relationship</FormLabel>
                  <Input type="text" name="referenceRelationship1" value={formData.referenceRelationship1} onChange={handleChange} />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="referencePhone1" isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="tel" name="referencePhone1" value={formData.referencePhone1} onChange={handleChange} />
                </FormControl>
              </GridItem>
            </Grid>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              <GridItem>
                <FormControl id="referenceName2">
                  <FormLabel>Reference Name</FormLabel>
                  <Input type="text" name="referenceName2" value={formData.referenceName2} onChange={handleChange} />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="referenceRelationship2">
                  <FormLabel>Relationship</FormLabel>
                  <Input type="text" name="referenceRelationship2" value={formData.referenceRelationship2} onChange={handleChange} />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="referencePhone2">
                  <FormLabel>Phone Number</FormLabel>
                  <Input type="tel" name="referencePhone2" value={formData.referencePhone2} onChange={handleChange} />
                </FormControl>
              </GridItem>
            </Grid>

            <Button type="submit" colorScheme="blue" size="lg">
              Submit Application
            </Button>
          </VStack>
        </form>
      </Box>
    </Grid>
  );
};

export default Index;
