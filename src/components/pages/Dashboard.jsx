import React from 'react'
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

function Dashboard() {
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