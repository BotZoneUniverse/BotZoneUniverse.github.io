import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        highlight="Features"
        title="What you get with BotZone"
        subtitle="Discover amazing Telegram bots, join our vibrant community, and explore a world of productivity, entertainment, and education, all in one place."
        items={[
          {
            title: "Bot Zone: Unveiling Telegram's Aesthetic World of Bots",
            description:
              "Delve into a realm of aesthetic wonder with Bot Zone, where Telegram's diverse array of bots intertwines beauty and utility. Explore productivity, entertainment, and educational bots curated to elevate your Telegram experience. Join our vibrant community and immerse yourself in the enchanting world of Telegram's Bot Zone.",
            icon: IconBrandTailwind,
          },
          {
            title: "Bot Wonderland: Exploring the Beauty of Telegram's Bot Zone",
            description:
              "Step into a world where aesthetics meet functionality in Telegram's Bot Zone. From productivity-enhancing tools to entertainment marvels, discover a curated selection of bots designed to delight your senses. Join our community and embark on an aesthetic journey through the captivating realm of Telegram's Bot Zone.",
            icon: IconApps,
          },
          {
            title: "Elevate Your Telegram Experience: Journey Through Bot Zone's Aesthetic Realm",
            description:
              "Experience the magic of Telegram's Bot Zone, where beauty and innovation converge to create an aesthetic oasis. Explore a curated collection of bots tailored to enhance productivity, entertainment, and education. Join our community and unlock the enchanting potential of Telegram's Bot Zone.",
          },
          {
            title: "Enchanted by Bots: Discovering Telegram's Aesthetic Delights",
            description:
              "Uncover the hidden gems of Telegram's Bot Zone and immerse yourself in an aesthetic paradise. From productivity-boosting marvels to entertainment delights, explore a curated selection of bots designed to elevate your Telegram experience. Join our community and embark on a journey through the captivating beauty of Telegram's Bot Zone.",
            icon: IconRocket,
          },
          {
            title: "Bot Symphony: Harmonizing Beauty and Utility in Telegram's Bot Zone",
            description:
              "Prepare to be mesmerized by the aesthetic wonders of Telegram's Bot Zone. Discover a curated selection of bots that seamlessly blend beauty and functionality, enriching your Telegram experience like never before. Join our vibrant community and indulge in the harmonious symphony of innovation and aesthetics within Telegram's Bot Zone.",
            icon: IconBrandGoogle,
          },
          {
            title: "Bot Odyssey: Embark on an Aesthetic Adventure Through Telegram's Bot Zone",
            description:
              "Embark on an odyssey through the aesthetic wonders of Telegram's Bot Zone, where each bot is a masterpiece waiting to be explored. From productivity-enhancing tools to entertainment extravaganzas, immerse yourself in a curated selection of bots designed to captivate your senses. Join our community and experience the beauty of Telegram's Bot Zone like never before.",
            icon: IconBulb
          },
        ]}
      />
      <Steps />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Discover and explore a curated selection of Telegram bots across various categories, from productivity to entertainment, on Bot Zone. Join our platform to find the perfect bots to enhance your Telegram experience."
        highlight="FAQs"
        items={[
          {
            title: "What is Bot Zone?",
            description:
              "Bot Zone is a platform dedicated to showcasing the finest and most adaptable Telegram bots across various categories, including productivity, entertainment, and education.",
          },
          {
            title: "How can I use Bot Zone?",
            description:
              "You can explore our website to discover a diverse range of bots that cater to your needs and interests. Simply click on the bot you're interested in to find out more and add it to your Telegram account.",
          },
          {
            title: "Are the bots on Bot Zone free to use?",
            description:
              "Yes, the majority of bots featured on Bot Zone are free to use.",
          },
          {
            title: "Can I suggest a bot to be featured on Bot Zone?",
            description:
              "Yes, we welcome suggestions for new bots to be featured on our platform. Feel free to reach out to us through our website or social media channels.",
          },
          {
            title: "Is Bot Zone affiliated with Telegram?",
            description:
              "Bot Zone is an independent platform and is not directly affiliated with Telegram. However, we are dedicated to promoting the use of Telegram bots and enhancing the user experience.",
          },
          {
            title: "How often are new bots added to Bot Zone?",
            description:
              "We strive to keep Bot Zone updated with the latest and most useful bots for our users. New bots are added regularly as we discover them or receive recommendations from our community. Be sure to check back often to explore new additions and updates.",
          },
        ]}
      />
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
