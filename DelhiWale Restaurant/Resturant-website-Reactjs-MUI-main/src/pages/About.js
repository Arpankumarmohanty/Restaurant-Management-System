import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To DelhiWale</Typography>
        <p>
        Welcome to DelhiWale, where every meal is a celebration of flavors and a journey through culinary excellence. Nestled in the heart of Gurugram, our restaurant offers a warm and inviting ambiance that sets the stage for an unforgettable dining experience.

At DelhiWale, we take pride in our diverse menu that showcases the best of DelhiWale. From traditional favorites to modern twists, each dish is meticulously crafted using the freshest ingredients and authentic recipes.

Step into our world and savor the aroma of spices, the sizzle of perfectly grilled meats, and the rich flavors that dance on your palate with every bite. Whether you're a connoisseur of fine dining or simply looking for a casual meal with friends and family, our menu has something to delight every palate.

Our talented chefs bring years of experience and a passion for food to every dish they create, ensuring that each meal is a masterpiece. Complement your dining experience with a selection from our carefully curated wine list or choose from our range of handcrafted cocktails and beverages.

Beyond our exceptional food, DelhiWale offers a welcoming ambiance that is perfect for intimate dinners, family gatherings, or celebrations with friends. Our attentive staff is dedicated to providing you with impeccable service, ensuring that your time with us is nothing short of perfect.

Whether you're a local foodie or a traveler looking for a taste of the extraordinary, we invite you to join us at DelhiWale and embark on a culinary journey like no other.







        </p>
        <br />
        <p>
        Start your meal with our signature Delhi chaat, a burst of flavors that combines sweet, sour, and spicy elements in perfect harmony. For a taste of tradition, try our buttery soft kulchas paired with spicy chole or indulge in the aromatic goodness of our biryanis, cooked to perfection with fragrant spices and tender meat.

For those craving something spicy, our selection of kebabs and tikkas are sure to satisfy. Each bite is a symphony of flavors, with the smoky char of the grill enhancing the natural taste of the ingredients.

No meal at DelhiWale is complete without trying our famous butter chicken, a creamy and decadent dish that has become a favorite among our patrons. Pair it with a fluffy naan or a steaming bowl of rice for a truly satisfying meal.

Vegetarians will delight in our range of sabzis and paneer dishes, where fresh vegetables and paneer are cooked to perfection in rich and flavorful gravies. And don't forget to save room for dessert! Our selection of traditional sweets and desserts are the perfect way to end your meal on a sweet note.

At DelhiWale, we are committed to providing you with an exceptional dining experience, from the moment you step through our doors to the last bite of your meal. Join us and experience the flavors of Delhi in every bite.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
