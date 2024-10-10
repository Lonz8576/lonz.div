/* eslint-disable @typescript-eslint/no-explicit-any */

import GitHubCalendar from 'react-github-calendar';



const selectLastHalfYear = (contributions: any[]) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 6;
  
    return contributions.filter(activity => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  const explicitTheme= {dark : ['#a0eff3', '#4586ff', '#79c2d0', '#007cb9', '#01005e']};

export default function GitCalendar() { 
      return (
        <GitHubCalendar username="Lonz8576" 
          theme={explicitTheme}
        transformData={selectLastHalfYear}  year={2024} showWeekdayLabels={true}  labels={{
            totalCount: '{{count}} contributions in the last half year',}} />
        )
        }
  
