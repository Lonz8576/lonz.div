import GitHubCalendar from 'react-github-calendar';

import React from 'react'

const GitGraph = () => {
    const explicitTheme = {
        light: ['#141010', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
        dark: ['#141010','#93deff', '#00bbf0', '#005689', '#ef6c35'],
      }
    return (
    <div>
           <div className="flex py-20 align-bottom">
         <GitHubCalendar username="lonz8576" theme={explicitTheme}  colorScheme='dark' fontSize={16} showWeekdayLabels={true}   labels={{
    totalCount: '331 contributions in 2024',
  }}  blockRadius={7} blockMargin={5}     />
         </div>
    </div>
  )
}

export default GitGraph
