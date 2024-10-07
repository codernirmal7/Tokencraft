import FaqItem from "../components/FaqItem.jsx";

const Faq = () => {
     const faq = [
        {
          id: "0",
          question: "What is Token Staking?",
          answer:
            "Staking is a way to earn rewards by locking up your tokens for a fixed period. In TokenCraft, by staking your tokens, you contribute to the network and, in return, earn rewards based on the amount of tokens you’ve staked.",
        },
        {
          id: "1",
          question: "How do I connect my wallet?",
          answer:
            "You can connect your wallet by clicking the 'Connect Wallet' button at the top of the page. TokenCraft supports MetaMask and other compatible wallets. Make sure your wallet is installed and has the necessary tokens to participate.",
        },
        {
          id: "2",
          question: "What is the minimum staking amount?",
          answer:
            "The minimum staking amount is determined by the platform and will be visible when selecting the amount of tokens to stake. Ensure you have enough tokens in your wallet before proceeding.",
        },
        {
          id: "3",
          question: "How long is the staking period?",
          answer:
            "The staking period in TokenCraft is fixed, meaning once you stake your tokens, they will be locked for the specified duration. During this time, you cannot withdraw your tokens, but you will earn rewards.",
        },
        {
          id: "4",
          question: "When will I receive my rewards?",
          answer:
            "You will receive your staking rewards at the end of the staking period, along with your initial staked tokens. The rewards will be based on the fixed Annual Percentage Rate (APR) that was in place at the time of staking.",
        },
        {
          id: "5",
          question: "Can I withdraw my tokens before the staking period ends?",
          answer:
            "No, tokens are locked for the duration of the fixed staking period. Once the period ends, you’ll be able to withdraw both your tokens and the rewards earned.",
        },
        {
          id: "6",
          question: "What happens if I forget to withdraw after the staking period ends?",
          answer:
            "If you don’t withdraw your tokens immediately after the staking period ends, your tokens will remain in the staking contract, but they will no longer accumulate rewards. You can withdraw them anytime after the staking period has finished.",
        },
        {
          id: "7",
          question: "Are there any fees for staking?",
          answer:
            "There might be small transaction fees for staking, as it involves interacting with the blockchain. These fees vary depending on the network you are using. Ensure you have enough tokens to cover gas fees.",
        },
        {
          id: "8",
          question: "What if I want to stake more tokens?",
          answer:
            "If you’ve already staked your tokens, you won’t be able to stake more until the current staking period is finished. Once your tokens are unlocked after the staking period ends, you’ll be able to stake again or add more tokens at that time.",
        },
        {
          id: "9",
          question: "Is my staked amount safe?",
          answer:
            "Yes, your staked tokens are locked in a secure staking contract for the fixed period. The smart contract ensures that no one can withdraw or tamper with your funds during the staking period.",
        },
      ];
  const halfLength = Math.floor(faq.length / 2);

  return (
    <section>
      <div name="faq" className="relative">
        <div className="container relative z-2 py-10">
         <h2 className="text-center pb-8 text-3xl lg:text-4xl font-bold my-10">Frequently Asked Questions</h2>
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1 px-4 rounded-2xl">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <img src="/faq-logo.svg" alt="logo" className="size-1/2" />
            </div>

            <div className="relative flex-1 pt-10">
              {faq.slice(0, halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={index} isBgColor={true}/>
              ))}
            </div>

            <div className="relative flex-1 lg:pt-10">
              {faq.slice(halfLength).map((item, index) => (
                <FaqItem key={item.id} item={item} index={halfLength + index} isBgColor={true}/>
              ))}
            </div>
          </div>

          <div className="faq-lin_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </div>
      </div>

    </section>
  );
};

export default Faq;