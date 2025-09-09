interface GoFundMeProps{
    url: string;
}
const GoFundMeFrame:React.FC<GoFundMeProps> = ({url}) => {
return (
    <div className="lg:w-2/3">
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Make a Secure Donation
      </h2>
      {/* GoFundMe iframe */}
      <iframe
        src={url}
        title="GoFundMe Campaign"
        className="w-full h-[600px] border-none rounded-lg"
      ></iframe>
    </div>
  </div>
)
}

export default GoFundMeFrame