import { useState,  useRef  } from 'react';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]); // To store references to content divs
  
    const toggleAccordion = (index) => {
      if (openIndex === index) {
        setOpenIndex(null);
      } else {
        setOpenIndex(index);
      }
    };
  
    const getMaxHeight = (index) => {
      if (openIndex === index && contentRefs.current[index]) {
        return contentRefs.current[index].scrollHeight + 'px'; // Set max-height dynamically based on content height
      }
      return '0px';
    };
  
    return (
      <div>
        {items.map((item, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <div
              className="cursor-pointer p-4 bg-gray-100 font-semibold text-lg hover:bg-emerald-600 hover:text-white"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
            </div>
            <div
              ref={(el) => (contentRefs.current[index] = el)} // Assign ref to each content div
              style={{
                maxHeight: getMaxHeight(index),
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}
              className="accordion-content"
            >
              <div className="p-4 bg-white text-gray-600">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default Accordion;
