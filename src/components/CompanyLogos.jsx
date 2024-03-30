import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h2 className=" mb-6 text-center text-white f">
      We Work On Technologies
      </h2>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[10.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={48} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;