import React from "react";
import FaqItem from "./FaqItem";

export default function AboutUs() {
    const faq = [
        {
          id: "0",
          question: "Who We Are?",
          answer:
            `
            At TokenCraft, we are a team of passionate developers, designers,
            and blockchain enthusiasts committed to building a secure,
            transparent, and user-friendly platform. We believe that blockchain
            holds the power to revolutionize finance and gaming, and our goal is
            to be at the forefront of this movement.
            `,
        },

        {
            id: "1",
            question: "What We Do?",
            answer:
              `
              TokenCraft provides a seamless experience for users to stake their
            tokens, earn rewards, and engage in play-to-earn opportunities
            within our ecosystem. With fixed staking periods, we ensure that you
            maximize the potential of your assets, while offering various
            features like token swapping and exclusive in-game rewards. Our
            platform is designed to be intuitive, secure, and scalable,
            providing value to both newcomers and seasoned crypto enthusiasts
            alike.
              `,
          },

          {
            id: "2",
            question: "Why Choose TokenCraft?",
            answer:
              `
            TokenCraft provides a seamless experience for users to stake their
            tokens, earn rewards, and engage in play-to-earn opportunities
            within our ecosystem. With fixed staking periods, we ensure that you
            maximize the potential of your assets, while offering various
            features like token swapping and exclusive in-game rewards. Our
            platform is designed to be intuitive, secure, and scalable,
            providing value to both newcomers and seasoned crypto enthusiasts
            alike.
              `,
          },
    ]
  return (
    <>
      <div className="w-full bg-s1 max-w-5xl rounded-3xl">
        <div className="border-b border-primary/[0.6] py-3">
          <h1 className="text-center text-3xl lg:text-4xl font-bold">
            About Us
          </h1>
        </div>
        <div className="px-5 mt-3 py-3 pb-5">
          <p>
            <strong className="text-primary text-lg">
              Welcome to TokenCraft -{" "}
            </strong>{" "}
            a dynamic and innovative platform designed to empower users in the
            exciting world of decentralized finance (DeFi) and blockchain
            gaming. Our mission is to make token staking, swapping, and
            play-to-earn gaming accessible and rewarding for everyone,
            regardless of their experience with blockchain technology.
          </p>
          
          <div className="relative flex-1 ">
              {faq.map((item, index) => (
                <FaqItem key={item.id} item={item}  questionColor="text-primary"/>
              ))}
            </div>
        </div>
      </div>
    </>
  );
}