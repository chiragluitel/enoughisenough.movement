import Impact from '../components/Donations/Impact';
import CTA from '../components/Donations/CTA';
import GoFundMeFrame from '../components/Donations/GoFundMeFrame';
import Header from '../components/Donations/Header';
import { GOFUNDMEURL } from '../Config/Contants';

const DonatePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <Header />
        <div className="flex flex-col lg:flex-row gap-8">
            <GoFundMeFrame url = {GOFUNDMEURL} />
          <div className="lg:w-1/3">
            <Impact />
            <CTA />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;