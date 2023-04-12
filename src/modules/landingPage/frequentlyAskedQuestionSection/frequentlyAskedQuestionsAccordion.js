import React from 'react'
import { Accordion } from 'flowbite-react'

export default function FrequentlyAskedQuestionsAccordion() {
  return (
    <div className='grid grid-flow-col mx-7 md:mx-[160px]  mt-[60px] '>


      <Accordion alwaysOpen={true}>
        {/* 1 */}
        <Accordion.Panel>
          <Accordion.Title>
            What are the services provided to customers?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
            </p>
            {/* <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                get started
              </a>
              and start developing websites even faster with components on top of Tailwind CSS.
            </p> */}
          </Accordion.Content>
        </Accordion.Panel>
        {/* 2 */}
        <Accordion.Panel>
          <Accordion.Title>
            How can I submit a proposal for cooperation?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
            </p>
        
          </Accordion.Content>
        </Accordion.Panel>
        {/* 3 */}
        <Accordion.Panel>
          <Accordion.Title>
            I come from a faraway place, can collaboration be done full time online through several meeting applications?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>

        {/* 4*/}
        <Accordion.Panel>
          <Accordion.Title>
          How do I get the payment complete?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
            </p>
          
          </Accordion.Content>
        </Accordion.Panel>

        {/* 5 */}
        <Accordion.Panel>
          <Accordion.Title>
          How long can the collaboration last?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.
            </p>
       
          </Accordion.Content>
        </Accordion.Panel>
        




      </Accordion>


    </div>
  );
};
