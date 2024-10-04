import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Save } from 'lucide-react';

const ExpenseInputPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the expense to your state management solution or backend
    console.log(`Saved ${amount} for ${category}`);
    navigate('/list');
  };

  return (
    <div className="min-h-screen bg-[#ffffff] p-6">
      <Helmet>
        <title>{`记录${category}支出 - 记账应用`}</title>
        <meta name="description" content={`输入您的${category}支出金额，轻松记录和管理您的日常开支。`} />
      </Helmet>
      <button onClick={() => navigate('/')} className="mb-6 flex items-center text-[#37352f]">
        <ArrowLeft className="w-5 h-5 mr-2" />
        返回
      </button>
      <h1 className="text-3xl font-bold mb-8 text-center text-[#37352f]">{category}支出</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-[#37352f]">
            金额
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2eaadc] focus:ring focus:ring-[#2eaadc] focus:ring-opacity-50"
            placeholder="0.00"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2eaadc] hover:bg-[#2eaadc]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2eaadc]"
        >
          <Save className="w-5 h-5 mr-2" />
          保存支出
        </button>
      </form>
    </div>
  );
};

export default ExpenseInputPage;