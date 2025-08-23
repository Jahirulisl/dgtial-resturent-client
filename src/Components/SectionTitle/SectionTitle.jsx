const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-8">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h2 className="text-3xl uppercase border-y-4 inline-block py-2 px-4">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;