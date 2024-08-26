//tenth section
"use client";
import React, { useState } from 'react';
import styles from './faq.module.css';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    // State to track the currently open FAQ item. It is either an index number or null.

    const toggleFaq = (index: number) => {
        // Function to toggle the visibility of FAQ answers based on index.
        setOpenIndex(openIndex === index ? null : index);
         // Set openIndex to the clicked index if it is not already open, otherwise close it.
    };

    const faqItems = [
        // Array of FAQ items, each containing a question and an answer.
        {
            question: "What is my eligibility to book a car?",
            answer: "You should be of 18 years old above and you must possess a valid driving license."
        },
        {
            question: "Can I book for any period of time?",
            answer: "Yes, you can book for any available period of time based on availability."
        },
        {
            question: "Can I opt for a car for a longer period?",
            answer: "Yes, you can opt for a car for a longer period based on availability."
        },
        {
            question: "Can I book a one-way trip?",
            answer: "Yes, one-way trips are available based on the locations."
        },
        {
            question: "Is there a home delivery option available?",
            answer: "Yes, home delivery options are available in certain locations."
        },
        {
            question: "How can I make the payment?",
            answer: "You can make the payment using various methods including credit cards, debit cards, and online payment gateways."
        },
    ];

    return (
        <div className={styles.faqSection}>
             {/* Container for the entire FAQ section */}
            <div className={styles.freq}>
                <b>Frequently Asked Questions</b>
            </div>
            <div className={styles.container}>
                {faqItems.map((item, index) => (
                // Map through each FAQ item and render it
                    <div key={index} className={styles.faqItem}>
                    {/* Container for each FAQ item */}
                        <div className={styles.question} onClick={() => toggleFaq(index)}>
                         {/* Container for the FAQ question */}
                            <h3>{item.question}</h3>
                            <div className={styles.toggleButtons}>
                             {/* Container for toggle buttons */}
                                {openIndex === index ? (
                                // If the current index is open, show the close button
                                    <div className={styles.close}>X</div>
                                ) : (
                                     // Otherwise, show the plus button
                                    <div className={styles.plus}>+</div>
                                )}
                            </div>
                        </div>
                        {openIndex === index && (
                         // If the current index is open, display the answer
                            <div className={styles.answer}>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
