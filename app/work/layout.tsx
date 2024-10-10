
import GitHubCalendar from 'react-github-calendar';
export default function WorkLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const explicitTheme = {
      light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
      dark: ['#a0eff3', '#4586ff', '#79c2d0', '#007cb9', '#01005e'],
    }
    return (

      <div className="relative bg-black-100 flex justify-center items-center h-full pb-80 flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
      

         </div>
         {children}
         
         <GitHubCalendar username="lonz8576" theme={explicitTheme}  colorScheme='dark' fontSize={16} showWeekdayLabels={true}   labels={{
    totalCount: '{{331}} contributions in the last half year',
  }}     />
     
        </div>
   
    
     
    )
  }
