const CTA  = () => {
    return (
        <div className="bg-blue-600 rounded-xl shadow-lg text-white p-6 md:p-8 mt-8">
              <h3 className="text-xl font-bold mb-4">
                Join the Movement
              </h3>
              <p className="mb-6">
                Your support is more than just a donation—it's a stand for justice and a show of solidarity with the brave youth of Nepal.
              </p>
              <a 
                href="https://www.gofundme.com/f/fundraising-for-youth-victims-of-nepal-anticorruption-rally" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block w-full text-center bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
              >
                Donate on GoFundMe
              </a>
        </div>
    )
}

export default CTA;