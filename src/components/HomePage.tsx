import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ShoppingBag, Coffee, Scissors, Stethoscope, PieChart } from 'lucide-react';

const categories = [
  { name: '服装', icon: ShoppingBag, color: 'bg-blue-500' },
  { name: '食品', icon: Coffee, color: 'bg-green-500' },
  { name: '美容', icon: Scissors, color: 'bg-pink-500' },
  { name: '看病', icon: Stethoscope, color: 'bg-red-500' },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ffffff] p-6">
      <Helmet>
        <title>记账应用 - 首页</title>
        <meta name="description" content="选择支出类别，开始记录您的日常开支。包括服装、食品、美容和医疗等多种类别。" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-8 text-center text-[#37352f]">记账应用</h1>
      <div className="grid grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/input/${category.name}`}
            className={`${category.color} p-6 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105`}
          >
            <category.icon className="w-12 h-12 text-white mb-2" />
            <span className="text-white font-semibold">{category.name}</span>
          </Link>
        ))}
      </div>
      <Link
        to="/list"
        className="mt-8 bg-[#f1f1ef] p-6 rounded-lg shadow-md flex items-center justify-center transition-transform hover:scale-105"
      >
        <PieChart className="w-8 h-8 text-[#37352f] mr-2" />
        <span className="text-[#37352f] font-semibold">查看消费记录</span>
      </Link>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1362518378038131"
        data-ad-slot="YOUR_AD_SLOT_ID"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
};

export default HomePage;