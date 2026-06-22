import React, { useContext, useEffect, useState } from 'react'
import MainLayout from '../Layouts/MainLayout'
import Card from '../Elements/Card';
import CardBalance from '../Fragments/CardBalance';
import CardGoal from '../Fragments/CardGoal';
import CardExpenseBreakdown from '../Fragments/CardExpenseBeakdown';
import CardRecentTransaction from '../Fragments/CardRecentTransaction';
import CardStatistic from '../Fragments/CardStatistic';
import CardUpcomingBill from '../Fragments/CardUpcomingBill';
import { 
  transactions, 
  bills, 
  expensesBreakdowns,
  balances,
  goals,
  expensesStatistics,
} from '../../Data';
import { goalService } from '../../services/dataService';
import { AuthContext } from '../../context/authContext';

function Dashboard() {
  const [goals, setGoals] = useState({});
  const { logout } = useContext(AuthContext); 

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoals(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 sm:grid-rows-3 gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances}/>
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goals}/>
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills}/>
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics}/>
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns}/>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Dashboard;