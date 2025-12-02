export function TrustedBy() {
  const companies = [
    "Acme Corp",
    "TechStart",
    "GlobalCo",
    "InnovateLab",
    "FutureTech",
  ];

  return (
    <div className="text-center">
      <p className="text-gray-500 mb-6">
        Trusted by 500+ teams worldwide
      </p>
      <div className="flex items-center justify-center gap-8 flex-wrap opacity-40">
        {companies.map((company, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-gray-100 rounded-lg"
          >
            <span className="text-gray-600">{company}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
