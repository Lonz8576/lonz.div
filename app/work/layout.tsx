
import GitHubCalendar from 'react-github-calendar';
export default function WorkLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const explicitTheme = {
      light: ['#141010', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
      dark: ['#141010','#93deff', '#00bbf0', '#005689', '#ef6c35'],
    }
    return (

      <div className="relative bg-black-100 flex justify-center items-center h-full pb-80 flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
      

         </div>
         {children}
         
         <GitHubCalendar username="lonz8576" theme={explicitTheme}  colorScheme='dark' fontSize={16} showWeekdayLabels={true}   labels={{
    totalCount: '331 contributions in 2024',
  }}     />
     
        </div>
   
    
     
    )
  }
