import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, ShoppingBag, Coffee, Scissors, Stethoscope } from 'lucide-react';

interface Expense {
  id: number;
  category: string;
  amount: number;
  date: string;
}

const mockExpenses: Expense[] = [
  { id: 1, category: '服装', amount: 299, date: '2023-05-20' },
  { id: 2, category: '食品', amount: 58.5, date: '2023-05-21' },
  { id: 3, category: '美容', amount: 180, date: '2023-05-22' },
  { id: 4, category: '看病', amount: 350, date: '2023-05-23' },
];

const categoryIcons: { [key: string]: React.ElementType } = {
  '服装': ShoppingBag,
  '食品': Coffee,
  '美容': Scissors,
  '看病': Stethoscope,
};

const ExpenseListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#ffffff] p-6">
      <Helmet>
        <title>消费记录 - 记账应用</title>
        <meta name="description" content="查看您的所有消费记录，包括服装、食品、美容和医疗等多种支出类别。轻松管理和分析您的日常开支。" />
      </Helmet>
      <button onClick={() => navigate('/')} className="mb-6 flex items-center text-[#37352f]">
        <ArrowLeft className="w-5 h-5 mr-2" />
        返回
      </button>
      <h1 className="text-3xl font-bold mb-8 text-center text-[#37352f]">消费记录</h1>
      <div className="space-y-4">
        {mockExpenses.map((expense) => {
          const Icon = categoryIcons[expense.category];
          return (
            <div key={expense.id} className="bg-[#f1f1ef] p-4 rounded-lg shadow flex items-center justify-between">
              <div className="flex items-center">
                <Icon className="w-6 h-6 mr-3 text-[#37352f]" />
                <div>
                  <p className="font-semibold text-[#37352f]">{expense.category}</p>
                  <p className="text-sm text-[#37352f]/70">{expense.date}</p>
                </div>
              </div>
              <p className="font-bold text-[#37352f]">¥{expense.amount.toFixed(2)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpenseListPage;