import { HiShieldCheck } from "react-icons/hi";
import { MdCancel, MdAnalytics } from "react-icons/md";
const style = document.createElement('style');
style.innerHTML = `
  .accordion-button {
    background-color: #ec2c4f;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .accordion-button:hover {
    background-color: #e65a50;
  }
`;
document.head.appendChild(style);

const data = [
  {
    icon: <HiShieldCheck/>,
    heading: <button className="accordion-button">Show Rental Contract</button>,
    detail:
      "Access and view the full terms and conditions of your rental agreement, including duration, payment terms, and tenant responsibilities.",
  },
  {
    icon: <MdCancel />,
    heading: <button className="accordion-button">Cancel Contract</button>,
    detail:
      "Terminate your existing rental contract under specified terms. Please ensure you review any applicable cancellation policies.",
  },
  {
    icon: <MdAnalytics />,
    heading: <button className="accordion-button">Discover Others</button>,
    detail:
      "",
  },
];

export default data;