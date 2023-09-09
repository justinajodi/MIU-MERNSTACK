import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">ABOUT US</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://s3.ap-south-1.amazonaws.com/modelfactory.in/upload/2023/Jan/12/blog_images/e46601974389fe0cab04c746fe55c4cf.jpg"
              alt="Founder"
            />
            <Typography>JUSTINA JODI</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            About Us

Welcome to MIU!

At MIU, we believe that fashion is more than just clothing; it's a reflection of your unique style and personality. Our mission is to provide you with a curated selection of trendy and high-quality fashion items that empower you to express yourself confidently.

Our Story

Founded in 2023, MIU began as a passion project fueled by a love for fashion and a desire to bring the latest trends to fashion enthusiasts around the world. What started as a small boutique has now grown into a thriving online fashion destination, serving customers in over 25 countries.

Our Vision

We envision a world where fashion knows no boundaries. Our goal is to inspire and enable individuals to embrace their individuality through clothing that makes them feel fabulous. Whether you're looking for everyday essentials, a statement piece for a special occasion, or the latest runway-inspired looks, MIU has you covered.

Why Choose Us?

Quality Assurance: We handpick each item in our collection, ensuring that every piece meets our high standards of quality and craftsmanship. You can trust that your purchase from MIU is an investment in both style and durability.

Fashion Expertise: Our team of fashion experts and stylists keeps a close eye on the latest trends and selects items that are not only fashionable but also versatile and timeless.

Customer-Centric Approach: Your satisfaction is our priority. We offer excellent customer support, a hassle-free return policy, and secure payment options to make your shopping experience as enjoyable as possible.

Sustainability: We are committed to sustainability and ethical fashion practices. MIU seeks to minimize its environmental footprint by offering eco-friendly options and supporting responsible manufacturing.

Join the MIU Community

We invite you to explore our online store and become a part of the MIU community. Follow us on social media to stay updated on the latest trends, fashion tips, and exclusive offers. We're here to help you create a wardrobe that reflects your unique style and helps you feel confident in every aspect of your life.

Thank you for choosing MIU as your fashion destination. We look forward to helping you define your style journey and make fashion a part of your daily expression.

Happy shopping!

MIU Team
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/meabhisingh" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;